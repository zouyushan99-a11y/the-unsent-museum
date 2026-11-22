// Deploy as a Supabase Edge Function with JWT verification ON.
// DEEPL_API_KEY and SUPABASE_SERVICE_ROLE_KEY must be server-only secrets.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
const ORIGIN="https://zouyushan99-a11y.github.io";
const cors={"Access-Control-Allow-Origin":ORIGIN,"Access-Control-Allow-Methods":"POST,OPTIONS","Access-Control-Allow-Headers":"authorization,apikey,x-client-info,content-type","Vary":"Origin"};
const reply=(data:unknown,status=200)=>new Response(JSON.stringify(data),{status,headers:{...cors,"Content-Type":"application/json"}});
const langs=["en","zh-Hans","zh-Hant"] as const;
type L=typeof langs[number];
type Text={title:string;story:string;why:string};
function validText(v:any):v is Text{return !!v&&["title","story","why"].every(k=>typeof v[k]==="string"&&v[k].trim().length>0)}
const trimmed=(v:Text):Text=>({title:v.title.trim(),story:v.story.trim(),why:v.why.trim()});

/* New sb_secret_ API keys must be used ONLY as apikey, never as JWT Bearer.
   A separate verified author JWT is still required for this Edge Function. */
async function privilegedRequest(url:string,secret:string,path:string,method="GET",body?:unknown){
 const response=await fetch(url+"/rest/v1/"+path,{
  method,headers:{"apikey":secret,"Content-Type":"application/json","Prefer":"return=representation"},
  ...(body===undefined?{}:{body:JSON.stringify(body)})
 });
 const raw=await response.text();
 let payload:any=null;
 try{payload=raw?JSON.parse(raw):null}catch{}
 if(!response.ok){
  console.error("Translation storage request failed",response.status,payload?.code||"");
  throw Error("Database request failed ("+response.status+")");
 }
 return payload;
}
// Translate each field separately so story paragraphs and title/reason boundaries survive.
class TranslationError extends Error { constructor(message:string,public code:number=503){super(message)} }
async function deeplFields(original:Text, source:L, target:L, key:string):Promise<Text>{
 const host=key.endsWith(":fx")?"https://api-free.deepl.com":"https://api.deepl.com";
 const targetCode:Record<L,string>={"en":"EN-US","zh-Hans":"ZH-HANS","zh-Hant":"ZH-HANT"};
 const fields=["title","story","why"] as const;
 const payload={
  text:fields.map(field=>original[field]),
  target_lang:targetCode[target],
  source_lang:source==="en"?"EN":"ZH",
  preserve_formatting:true,
  split_sentences:"nonewlines",
  context:"Literary first-person testimony for The Unsent Museum. Preserve voice, ambiguity, emotional tone, proper names and narrative perspective. Translate faithfully without adding facts."
 };
 async function request(endpoint:string){
  return await fetch(endpoint+"/v2/translate",{
   method:"POST",
   headers:{"Authorization":"DeepL-Auth-Key "+key,"Content-Type":"application/json"},
   signal:AbortSignal.timeout(40000),
   body:JSON.stringify(payload)
  });
 }
 let response=await request(host);
 // Legacy Free and newer Developer keys can be routed differently by DeepL.
 // Retry another official endpoint only for a host/authorization mismatch.
 if((response.status===403||response.status===404)&&!key.endsWith(":fx")){
  response=await request("https://api-free.deepl.com");
 }
 if(!response.ok){
  console.error("DeepL translation failed",response.status);
  if(response.status===456)throw new TranslationError("DeepL's free character quota has been used up.",503);
  if(response.status===429||response.status===529)throw new TranslationError("DeepL is temporarily busy. Please retry shortly.",503);
  if(response.status===403||response.status===401)throw new TranslationError("DeepL rejected the API key. Check the DEEPL_API_KEY secret and API Developer subscription.",503);
  if(response.status===400)throw new TranslationError("DeepL could not translate this language pair. Please contact the curator.",503);
  throw new TranslationError("DeepL translation is temporarily unavailable (HTTP "+response.status+").",503);
 }
 let output:any;
 try{output=await response.json()}catch{throw new TranslationError("DeepL returned an unreadable response.")}
 if(!Array.isArray(output?.translations)||output.translations.length!==3)
  throw new TranslationError("DeepL returned an incomplete translation.");
 const translated=output.translations.map((entry:any)=>entry?.text);
 if(translated.some((value:unknown)=>typeof value!=="string"||!value.trim()))
  throw new TranslationError("DeepL returned empty translated text.");
 return {title:translated[0].trim(),story:translated[1].trim(),why:translated[2].trim()};
}
async function translated(text:Text,source:L,key:string):Promise<Record<L,Text>>{
 const out={} as Record<L,Text>;
 out[source]=text; // Always preserve the author's exact original.
 for(const target of langs){
  if(target===source)continue;
  out[target]=await deeplFields(text,source,target,key);
 }
 return out;
}
Deno.serve(async(req:Request)=>{
 if(req.method==="OPTIONS")return new Response(null,{status:204,headers:cors});
 if(req.method!=="POST")return reply({error:"Method not allowed"},405);
 if(req.headers.get("origin")!==ORIGIN)return reply({error:"Origin not allowed"},403);
 const token=req.headers.get("authorization")||"";
 if(!token.startsWith("Bearer "))return reply({error:"Sign in before publishing"},401);
 const url=Deno.env.get("SUPABASE_URL"),secret=Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),key=Deno.env.get("DEEPL_API_KEY");
 if(!url||!secret||!key)return reply({error:"Translation backend is not configured"},503);
 const admin=createClient(url,secret,{auth:{persistSession:false,autoRefreshToken:false}});
 const {data:{user},error:authError}=await admin.auth.getUser(token.slice(7));
 if(authError||!user)return reply({error:"Session expired. Sign in again."},401);
 let data:any;try{data=await req.json()}catch{return reply({error:"Invalid JSON"},400)}
 if(!data||data.translationConsent!==true)return reply({error:"Translation consent required"},400);
 const {id,scenario,sourceLanguage}=data;
 if(typeof id!=="string"||!/^[\da-f]{8}-[\da-f]{4}-[1-8][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i.test(id))return reply({error:"Invalid story ID"},400);
 if(!["friendship","classroom","family","before-sending","others"].includes(scenario)||!langs.includes(sourceLanguage))return reply({error:"Choose valid story category and writing language"},400);
 if(!validText(data))return reply({error:"Complete title, story and reason"},400);
 const text=trimmed(data);
 if(text.title.length>120||text.story.length>4000||text.why.length>2000)return reply({error:"Story is too long"},400);
 const mode=data.publicationMode==="named"?"named":"anonymous",name=mode==="named"?String(data.displayName||"").trim():"";
 if(mode==="named"&&(!name||name.length>80))return reply({error:"Choose a public name"},400);
 let existing:any;
 try{
  const rows=await privilegedRequest(url,secret,"museum_stories?select=id,user_id&id=eq."+encodeURIComponent(id)+"&limit=1");
  existing=Array.isArray(rows)?rows[0]||null:null;
 }catch{return reply({error:"Could not verify story ownership"},502)}
 if(existing&&existing.user_id!==user.id)return reply({error:"Not this story's author"},403);
 let slot:boolean;
 try{slot=await privilegedRequest(url,secret,"rpc/museum_claim_translation_slot","POST",{p_user_id:user.id})}
 catch{return reply({error:"Translation quota could not be checked"},503)}
 if(slot!==true)return reply({error:"Too many translation requests. Wait briefly and try again (maximum 20 attempts per account each day)."},429);
 let translations:Record<L,Text>;
 try{translations=await translated(text,sourceLanguage,key)}
 catch(e){console.error("Translation failed:",e instanceof Error?e.message:"Unknown error");return reply({error:e instanceof TranslationError?e.message:"Automatic translation failed. Your draft is safe; please retry."},503)}
 // Publication becomes visible only after all three translations have succeeded.
 const row={scenario,title:text.title,story:text.story,why:text.why,status:"published",
  publication_mode:mode,display_name:name,public_consent:true,
  original_language:sourceLanguage,translations,translation_status:"ready",updated_at:new Date().toISOString()};
 try{
  const rows=existing?
   await privilegedRequest(url,secret,"museum_stories?id=eq."+encodeURIComponent(id)+"&user_id=eq."+encodeURIComponent(user.id)+"&select=id","PATCH",row):
   await privilegedRequest(url,secret,"museum_stories?select=id","POST",{...row,id,user_id:user.id});
  if(!Array.isArray(rows)||String(rows[0]?.id)!==id)throw Error("No matching saved row");
 }catch{return reply({error:"Could not save translated story"},502)}
 return reply({ok:true,id,original_language:sourceLanguage});
});
