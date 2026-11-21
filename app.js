/* The Unsent Museum — interactive literary museum with shared Supabase stories and stars. */
const SCENARIOS=[
 {id:'friendship',num:'I',title:'Between Friends',cn:'Between Friends',subtitle:'What stays unsaid between people we care about?',question:'At a gathering with close friends, everyone agrees with a decision. You notice a problem, but raising it may make your friends uncomfortable. Would you stay silent?',story:'Your friends have settled on a plan. The conversation moves quickly, and the decision seems final. You see a problem no one has mentioned. There is a moment when you could interrupt. You imagine the awkward silence that might follow. The group is smiling. You have not spoken yet.',silent:['I do not want to spoil the harmonious atmosphere.','I worry my friends may think badly of me and our friendship could suffer.','I believe I can resolve the issue privately.','I am not certain that my judgment is correct.','I doubt speaking up would change the decision.','I do not want anyone to feel embarrassed.','I would prefer to wait for a better moment.'],speak:['The problem should be addressed before it grows.','I believe friendship should allow disagreement.','My perspective could help the group make a better choice.','I feel safe sharing a different opinion with my friends.','I would regret keeping my concerns to myself.','I think an open discussion is better than a private workaround.','I want to be honest about what I think.'],research:'Possible research themes: conflict avoidance, communication privacy management, and interpersonal relationships.'},
 {id:'classroom',num:'II',title:'In the Classroom',cn:'In the Classroom',subtitle:'When is a different opinion too difficult to voice?',question:'In class, most people agree with an explanation, but you think a key point may be wrong. The teacher invites questions. Would you stay silent?',story:'A question is put to the room. Several people nod. You think of an objection, then look around. No one else has raised a hand. The teacher waits. You consider whether your concern is worth slowing down the class.',silent:['I am afraid of making a mistake in public.','I do not want to interrupt the teacher or classmates.','I worry about how others will judge me.','I am not confident enough in my knowledge.','I would rather ask after class.','I do not think my comment will change the discussion.','I need more time to find the right words.'],speak:['I want to check whether I understood correctly.','The question may help other students too.','I believe disagreement is a normal part of learning.','The teacher has invited questions.','I feel confident about my reasoning.','I want to understand the topic more deeply.','I do not want an important point to go unchallenged.'],research:'Possible research themes: classroom participation, psychological safety, and student voice.'},
 {id:'family',num:'III',title:'At Home',cn:'At Home',subtitle:'What goes unspoken around familiar tables?',question:'A family member offers strong advice about a decision that matters to you. You disagree, but an argument seems likely. Would you stay silent?',story:'The conversation begins with what sounds like concern. A family member offers a firm opinion about a choice you have been considering. You see the care behind their words, but you do not agree. Your response forms in your mind before you decide whether to say it aloud.',silent:['I want to avoid an argument at home.','I do not want to hurt someone who cares about me.','I worry that my opinion will not be taken seriously.','I need time to understand my own position.','I prefer to demonstrate my decision through actions.','This is not the right time to discuss it.','I fear the consequences of disagreeing.'],speak:['This decision directly affects my life.','I want my family to understand my point of view.','A difficult conversation may prevent future conflict.','I feel ready to explain my reasoning.','I believe disagreement can coexist with respect.','I need to set a boundary.','I would rather have an honest discussion than leave a misunderstanding.'],research:'Possible research themes: intergenerational communication, autonomy, and family expectations.'},
 {id:'before-sending',num:'IV',title:'Before Sending',cn:'Before Sending',subtitle:'A message written, revised, then left behind.',question:'You have typed a message explaining how you feel. You reread it and begin to worry that it could be misunderstood. Would you leave it unsent?',story:'The message is already there, glowing on your phone. You have written it, read it, and changed the first sentence twice. Nothing prevents you from pressing Send. Yet every rereading opens another possible interpretation of your words.',silent:['I worry that the message could be misunderstood.','I would rather say it face to face.','I need time to calm down and reconsider.','I do not want the message to be saved or shared.','I think the issue may resolve itself.','I no longer think the message needs to be sent.','I do not feel ready for the reply.'],speak:['I want to communicate before the misunderstanding grows.','Writing helps me explain myself clearly.','I believe the other person deserves to hear my thoughts.','I am ready to accept different possible replies.','Delaying the message may make the situation worse.','I have already considered my words carefully.','I want to be honest about how I feel.'],research:'Possible research themes: mediated communication, self-censorship, and message revision.'}
];

/* Museum-wide language selection. Historical texts are locally authored;
   published visitor stories remain in the language their authors chose. */
const MUSEUM_LANGUAGE_KEY='unsent-museum-language';
let museumLang=(()=>{
 try{const x=localStorage.getItem(MUSEUM_LANGUAGE_KEY);return ['en','zh-Hans','zh-Hant'].includes(x)?x:'en'}catch{return 'en'}
})();
let museumTWConverter=null;
function museumConvert(text){
 if(museumLang!=='zh-Hant')return String(text??'');
 try{if(!museumTWConverter&&window.OpenCC?.Converter)museumTWConverter=window.OpenCC.Converter({from:'cn',to:'hk'});return museumTWConverter?museumTWConverter(String(text??'')):String(text??'')}
 catch(e){return String(text??'')}
}
function museumZh(text){return museumLang==='en'?String(text??''):museumConvert(window.MUSEUM_I18N?.zh?.[String(text??'')]??String(text??''))}
function museumLangControl(){
 const isZh=museumLang!=='en';
 const label=isZh?'界面语言':'Language';
 const languageName=isZh?'界面语言':'Website language';
 const english=isZh?'英语':'English';
 const traditional=isZh?'繁体中文':'Traditional Chinese';
 const simplified=isZh?'简体中文':'Simplified Chinese';
 return '<div class="museum-language-switch"><label for="museum-language">'+label+'</label><select id="museum-language" aria-label="'+languageName+'">'+
  '<option value="en"'+(museumLang==='en'?' selected':'')+'>'+english+'</option>'+
  '<option value="zh-Hant"'+(museumLang==='zh-Hant'?' selected':'')+'>'+traditional+'</option>'+
  '<option value="zh-Hans"'+(museumLang==='zh-Hans'?' selected':'')+'>'+simplified+'</option>'+
 '</select></div>';
}
function museumHistoryLocalized(essay,id){
 if(!essay||museumLang==='en')return essay;
 const x=window.MUSEUM_HISTORY_ZH?.[id];
 if(!x)return essay;
 const tr=value=>museumConvert(value);
 const label=window.MUSEUM_HISTORY_LABELS?.[id]||{};
 const story=x.story.map(tr);
 const analysis=[
  [tr('历史背景与社会环境'),tr(x.setting)],
  [tr('沉默究竟发生在哪里？由谁决定？'),tr(x.act)],
  [tr('为什么选择保留，或为什么被迫停止？'),tr(x.cause)],
  [tr('证据能证明到什么程度？'),tr(x.proof)],
  [tr('沉默之后发生了什么？'),tr(x.after)]
 ];
 const old=essay.moment||{};
 return {...essay,title:tr(x.title),subtitle:tr(x.subtitle),period:tr(label.period||essay.period),readingTime:tr('完整中文故事'),story,analysis,question:tr(x.question),
  images:(essay.images||[]).map(pic=>({...pic,caption:tr(label.image||'与此人物或事件有关的真实历史图像，请通过来源链接核查。'),kind:tr('馆藏图像'),credit:tr(label.source||'历史馆藏资料')})),
  sources:(essay.sources||[]).map((s,i)=>[tr((label.source||'原始资料机构')+' · 文献 '+(i+1)),s[1]]),
  object:{...(essay.object||{}),name:tr(label.object||x.title),kind:tr(label.kind||'历史文献'),evidence:tr(x.proof)},
  moment:{...old,addressed:tr('请结合上方历史故事与原始资料判断。'),intended:tr(x.act),withheld:tr(x.act),why:tr(x.cause),certainty:tr(x.proof)},
  note:tr('本展品中文版依据同一批历史资料重新组织叙述，并非逐字翻译，篇幅与英文稿可能不同。历史事件与主观动机分别呈现；如需核查，请使用下方的原始资料链接。'),
  tags:(essay.tags||[]).map(v=>tr(window.MUSEUM_I18N?.zh?.[v]||v))};
}
function museumLocalizeText(root){
 if(museumLang==='en'||!root)return;
 const dict=window.MUSEUM_I18N?.zh||{};
 const changed=[];
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 let node;
 while((node=walker.nextNode())){
  const parent=node.parentElement;
  if(!parent||parent.closest('script,style,textarea,.archive-prose,.public-story-body,.story-reader-prose,[data-visitor-story]'))continue;
  const raw=node.nodeValue,trim=raw.trim();if(!trim)continue;
  const translation=dict[trim];
  if(translation)changed.push([node,raw.replace(trim,museumConvert(translation))]);
 }
 changed.forEach(([node,value])=>{node.nodeValue=value});
 root.querySelectorAll('[placeholder]').forEach(el=>{const value=dict[el.getAttribute('placeholder')];if(value)el.setAttribute('placeholder',museumConvert(value))});
 root.querySelectorAll('[aria-label]').forEach(el=>{const value=dict[el.getAttribute('aria-label')];if(value)el.setAttribute('aria-label',museumConvert(value))});
}
function museumBindLanguage(){
 const el=document.getElementById('museum-language');if(!el)return;
 el.value=museumLang;
 el.addEventListener('change',()=>{
  const v=el.value;if(!['en','zh-Hant','zh-Hans'].includes(v))return;
  museumLang=v;try{localStorage.setItem(MUSEUM_LANGUAGE_KEY,v)}catch{}
  document.documentElement.lang=v;render(false);
 });
}

const $=s=>document.querySelector(s);
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='unsent-museum-prototype-v1';
let db;try{db=JSON.parse(localStorage.getItem(KEY))||{answers:[],stories:[]}}catch{db={answers:[],stories:[]}}
// Preserve only the newest answer for each scenario in this browser.
// Earlier prototype versions allowed repeated answers, so normalize old local data too.
if(!Array.isArray(db.answers))db.answers=[];
if(!Array.isArray(db.stories))db.stories=[];
function dedupeAnswers(){const seen=new Set();db.answers=db.answers.slice().reverse().filter(a=>{if(!a||!a.scenario||seen.has(a.scenario))return false;seen.add(a.scenario);return true}).reverse()}
dedupeAnswers();
const save=()=>{dedupeAnswers();localStorage.setItem(KEY,JSON.stringify(db))};
let flow={scenario:null,step:0,decision:'',reasons:[],other:'',share:'no',title:'',storyCategory:null,story:'',why:'',consent:false,exhibit:false,starMode:'',starName:'',submitted:false};
let sharedAnswers=[];
let sharedStatus='loading';
let sharedError='';
let lastSharedSync=0;
let submitBusy=false;
let submitError='';
let sharedRefreshPromise=null;
let importBusy=false;
let importMessage='';
let publicStarVerified=false;
let starNames=new Map();
let starIdentityServiceReady=false;
let starIdentityNotice='';
let curatorAccess=false;
let curatorStories=[];
let curatorError='';
async function checkCuratorAccess(){
 curatorAccess=false;curatorStories=[];
 if(!authClient||!authUser)return;
 const {data,error}=await authClient.rpc('museum_is_curator');
 if(error)return;
 curatorAccess=data===true;
 if(curatorAccess){await loadCuratorStories()}
 const current=route();
 if(current.type==='curator')render(false);
}
async function loadCuratorStories(){
 if(!curatorAccess||!authClient)return;
 const {data,error}=await authClient.rpc('museum_curator_stories');
 if(error){curatorError=String(error.message||error);return}
 curatorStories=Array.isArray(data)?data:[];
 curatorError='';
}
async function changeStoryBlock(id,blocked){
 if(!curatorAccess||!authClient)return;
 if(!confirm(blocked?'Hide this story from the public museum?':'Restore this story to the public museum?'))return;
 const {data,error}=await authClient.rpc('museum_set_story_blocked',{p_story_id:id,p_blocked:blocked});
 if(error||data!==true){curatorError=String(error?.message||'Action was not confirmed');render(false);return}
 await Promise.all([loadCuratorStories(),loadPublicStories()]);
 render(false);
}
function curatorPage(){
 if(!authUser||!curatorAccess)return '<main class="container"><section class="page-hero"><h1>Curator access required.</h1><p class="muted">Only the museum curator can moderate public stories. Accounts must be authorized through the Supabase database.</p><a href="#/galleries" class="btn btn-outline">Return to the galleries</a></section></main>';
 return '<main class="container"><section class="page-hero"><div class="eyebrow">CURATOR · PUBLIC STORIES</div><h1>Story Moderation.</h1><p class="muted">Stories publish immediately without prior review. You can hide a published story from every visitor and restore it later. Hidden stories remain in the database, but are excluded from the public archive.</p><button class="btn btn-outline" id="refresh-curator">Refresh public stories ↗</button></section><section class="section-compact">'+
 (curatorError?'<p class="auth-feedback" role="alert">'+esc(curatorError)+'</p>':'')+
 (curatorStories.length?'<div class="archive">'+curatorStories.map(st=>'<article class="archive-item"><div class="eyebrow">'+esc(st.scenario)+' · '+esc(st.author_name||'Anonymous')+' · '+(st.blocked?'HIDDEN':'PUBLIC')+'</div><h3>'+esc(st.title)+'</h3><p class="archive-prose">'+esc(st.story)+'</p><p class="small muted">'+esc(st.why)+'</p><button class="btn btn-outline curate-story" data-id="'+esc(st.id)+'" data-blocked="'+String(!!st.blocked)+'">'+(st.blocked?'Restore public visibility':'Hide from public archive')+'</button></article>').join('')+'</div>':'<p class="muted">No published stories are available for moderation.</p>')+'</section></main>'
}
function bindCurator(){
 const reload=$('#refresh-curator');if(reload)reload.onclick=async()=>{await loadCuratorStories();render(false)};
 document.querySelectorAll('.curate-story').forEach(btn=>btn.onclick=()=>changeStoryBlock(btn.dataset.id,btn.dataset.blocked!=='true'));
}


let cloudStories=[];
let publicStories=[];
let storyCloudStatus='loading';
let storyCloudError='';
let storySyncTimer=0;
let storySyncInProgress=false;
let compositionDraftId=localStorage.getItem('unsent-active-composition-id')||null;
const cloudStoryTable='museum_stories';
const uuid=()=>globalThis.crypto?.randomUUID?.()||('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==='x'?r:(r&3|8)).toString(16)}));
function findLocalStory(id){return db.stories.find(st=>String(st.id)===String(id))}
function cloudStoryPayload(st){return {id:st.id,user_id:authUser.id,scenario:st.scenario,title:(st.title||'').slice(0,120),story:(st.story||'').slice(0,4000),why:(st.why||'').slice(0,2000),status:st.status==='published'?'published':'draft',publication_mode:st.publicationMode==='named'?'named':'anonymous',display_name:(st.displayName||'').slice(0,80),public_consent:st.publicConsent===true}}
function addLocalStory(st){const i=db.stories.findIndex(a=>String(a.id)===String(st.id));if(i<0)db.stories.push(st);else db.stories[i]={...db.stories[i],...st};save()}
async function syncCloudStory(st){
 if(!authClient||!authUser)throw Error('Sign in to keep a backup in the cloud.');
 cancelPendingStorySync(st.id);
 if(st.ownerId&&st.ownerId!==authUser.id)throw Error('This draft belongs to a different account.');
 const row={...cloudStoryPayload(st),updated_at:new Date().toISOString()};
 const {error}=await authClient.from(cloudStoryTable).upsert(row,{onConflict:'id'});
 if(error)throw error;
 st.ownerId=authUser.id;st.synced=true;st.updatedAt=Date.now();addLocalStory(st);
 return st;
}
async function loadCloudStories(){
 if(!authClient)return;
 if(!authUser){cloudStories=[];return}
 const {data,error}=await authClient.from(cloudStoryTable).select('id,scenario,title,story,why,status,publication_mode,display_name,public_consent,updated_at').order('updated_at',{ascending:false}).limit(250);
 if(error){storyCloudStatus='error';storyCloudError=error.message;return}
 cloudStories=data||[];
 for(const row of cloudStories){
   const local=findLocalStory(row.id);
   // Retain unsynced local edits; otherwise load the authoritative cloud version.
   if(local&&!local.synced)continue;
   addLocalStory({id:row.id,scenario:row.scenario,title:row.title,story:row.story,why:row.why,status:row.status,publicationMode:row.publication_mode,displayName:row.display_name,publicConsent:row.public_consent,
     ownerId:authUser.id,synced:true,time:Date.parse(row.updated_at)||Date.now()});
 }
}
async function loadPublicStories(){
 if(!authClient){storyCloudStatus='error';storyCloudError='The story service could not load.';return}
 const {data,error}=await authClient.rpc('get_public_museum_stories');
 if(error){storyCloudStatus='error';storyCloudError=error.message;publicStories=[];return}
 publicStories=Array.isArray(data)?data.filter(st=>st&&validStoryCategory(st.scenario)):[];
 storyCloudStatus='ready';storyCloudError='';
 const r=route();if(r.type==='archive'||r.type==='my-stories'||r.type==='story-sky'||r.type==='story-detail')render(false);
}
async function refreshStoryCloud(){
 await Promise.all([loadPublicStories(),loadCloudStories()]);
 const r=route();if(r.type==='archive'||r.type==='my-stories'||r.type==='story-sky'||r.type==='story-detail')render(false);
}
const storySaveTimers=new Map();
function cancelPendingStorySync(id){
 if(storySaveTimers.has(id)){clearTimeout(storySaveTimers.get(id));storySaveTimers.delete(id)}
}
function queueStorySync(st){
 if(!authUser||!authClient)return;
 if(st.ownerId&&st.ownerId!==authUser.id)return;
 cancelPendingStorySync(st.id);
 // Published versions are never changed by background autosave.
 if(st.status==='published')return;
 const timer=setTimeout(async()=>{
   storySaveTimers.delete(st.id);
   try{await syncCloudStory(st);setDraftStatus('Saved privately to your account cloud.')}
   catch(e){st.synced=false;setDraftStatus('Saved on this device; cloud backup unavailable: '+e.message)}
 },1200);
 storySaveTimers.set(st.id,timer);
}
function setDraftStatus(message){document.querySelectorAll('.draft-save-status').forEach(el=>el.textContent=message)}
function autosaveDraft(st){
 st.updatedAt=Date.now();st.synced=false;addLocalStory(st);
 setDraftStatus(authUser?'Saved on this device · Syncing to your account…':'Saved privately on this device. Sign in for cloud backup.');
 queueStorySync(st);
}
function compositionDraft(){
 if(!compositionDraftId)compositionDraftId=uuid();
 let st=findLocalStory(compositionDraftId);
 if(!st){st={id:compositionDraftId,scenario:'others',title:'',story:'',why:'',status:'private-draft',time:Date.now(),synced:false};addLocalStory(st)}
 return st;
}




/* Email magic-link sign-in. Public publishable key only; never ship sb_secret keys. */
const SUPABASE_URL='https://bmsumzkxyoprpoavgslr.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_3OCqe5bniuvjRI2Zi7z75Q_UZUnKVes';
const AUTH_REDIRECT='https://zouyushan99-a11y.github.io/the-unsent-museum/';
const authClient=window.supabase?.createClient?.(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY,{
 auth:{autoRefreshToken:true,persistSession:true,detectSessionInUrl:true,flowType:'implicit'}
})||null;
let authUser=null;
let authLoading=Boolean(authClient);
let authMessage='';
let authBusy=false;
/* Public stars are read through public RPCs without exposing account identifiers.
   Private story drafts use local storage and author-scoped cloud storage, not this public RPC. */
async function refreshSharedAnswers(){
 if(!authClient){sharedStatus='error';sharedError='The database connection could not load.';return}
 if(sharedRefreshPromise)return sharedRefreshPromise;
 sharedRefreshPromise=(async()=>{
   try{
     const {data,error}=await authClient.rpc('get_museum_stars');
     if(error)throw error;
     if(!Array.isArray(data))throw new Error('The star service returned an unexpected result.');
     sharedAnswers=data.filter(a=>a&&SCENARIOS.some(sc=>sc.id===a.scenario)&&['silent','speak'].includes(a.decision)).map(a=>({
       id:String(a.id),scenario:a.scenario,decision:a.decision,
       reasons:Array.isArray(a.reasons)?a.reasons.filter(n=>Number.isInteger(n)&&((n>=0&&n<=6)||n===99)):[]
     }));
     // Public names are fetched independently: the original public star RPC never exposes accounts.
     starNames=new Map();
     const namesResponse=await authClient.rpc('get_museum_star_attributions');
     if(namesResponse.error){
       starIdentityServiceReady=false;
       starIdentityNotice='Named stars need the Supabase star attribution SQL setup.';
     }else{
       starIdentityServiceReady=true;starIdentityNotice='';
       for(const row of Array.isArray(namesResponse.data)?namesResponse.data:[]){
         if(row?.id&&typeof row.author_name==='string'&&row.author_name.trim())starNames.set(String(row.id),row.author_name.trim());
       }
     }
     sharedAnswers=sharedAnswers.map(a=>({...a,authorName:starNames.get(a.id)||null}));
     sharedStatus='ready';sharedError='';lastSharedSync=Date.now();
   }catch(e){sharedStatus='error';sharedError=String(e.message||e)}
   finally{sharedRefreshPromise=null;const r=route();if(r.type==='lookout'||r.type==='sky'||r.type==='home')render(false)}
 })();
 return sharedRefreshPromise;
}

async function importLegacyAnswers(){
 if(importBusy)return;
 if(!authUser||!authClient){importMessage='Please sign in before importing your earlier answers.';render(false);return}
 const candidates=db.answers.filter(a=>a&&scenario(a.scenario)&&['silent','speak'].includes(a.decision)&&Array.isArray(a.reasons)&&a.reasons.length);
 if(!candidates.length){importMessage='There are no earlier browser answers to import.';render(false);return}
 if(!confirm('Add your earlier choices and selected reasons to the shared museum sky? Your private stories and free-text reasons will stay on this device. Existing newer cloud answers will NOT be overwritten.'))return;
 importBusy=true;importMessage='Checking your earlier answers…';render(false);
 try{
  const {data:own,error:ownError}=await authClient.from('museum_answers').select('scenario').eq('user_id',authUser.id);
  if(ownError)throw ownError;
  const existing=new Set((own||[]).map(a=>a.scenario));
  const rows=candidates.filter(a=>!existing.has(a.scenario)).map(a=>({
    user_id:authUser.id,scenario:a.scenario,decision:a.decision,
    reasons:[...new Set(a.reasons.map(Number).filter(n=>Number.isInteger(n)&&((n>=0&&n<=6)||n===99)))]
  })).filter(a=>a.reasons.length);
  if(rows.length){
    const {error}=await authClient.from('museum_answers').upsert(rows,{onConflict:'user_id,scenario'});
    if(error)throw error;
  }
  await refreshSharedAnswers();
  importMessage=rows.length?('Imported '+rows.length+' earlier answer(s). '+existing.size+' existing cloud answer(s) were preserved.'):'Your earlier answers already have matching cloud entries. Nothing was overwritten.';
 }catch(e){importMessage='Could not import answers: '+String(e.message||e)}
 finally{importBusy=false;render(false)}
}

async function submitSharedAnswer(){
 if(submitBusy)return;
 if(!authClient){submitError='The login service is unavailable. Please refresh the page.';render(false);return}
 if(!authUser){submitError='Please sign in to save your answer to the shared sky. Your choices will remain here while you sign in.';render(false);return}
 if(!['anonymous','named'].includes(flow.starMode)){submitError='Please choose how your star should appear.';render(false);return}
 if(flow.starMode==='named'&&!flow.starName?.trim()){submitError='Enter the name you want visitors to see on your star.';render(false);return}
 const sc=scenario(flow.scenario);
 if(!sc||!['silent','speak'].includes(flow.decision)||!flow.reasons.length){submitError='Please complete your choice and reasons first.';render(false);return}
 const allowed=flow.reasons.every(n=>Number.isInteger(n)&&((n>=0&&n<sc[flow.decision].length)||n===99));
 if(!allowed){submitError='One of your selected reasons is invalid.';render(false);return}
 submitBusy=true;submitError='';const next=$('#next');if(next){next.disabled=true;next.textContent='Saving your star…'}
 try{
   const payload={user_id:authUser.id,scenario:flow.scenario,decision:flow.decision,reasons:[...new Set(flow.reasons)],
      star_visibility:flow.starMode,star_display_name:flow.starMode==='named'?flow.starName.trim().slice(0,80):''};
   let {data:saved,error}=await authClient.from('museum_answers').upsert(payload,{onConflict:'user_id,scenario'}).select('id,scenario,decision,reasons').single();
   // Anonymous contributions remain compatible with the existing star database
   // until the optional star-attribution migration is activated.
   if(error&&flow.starMode==='anonymous'&&/star_visibility|star_display_name|schema cache|column/i.test(error.message||'')){
     ({data:saved,error}=await authClient.from('museum_answers').upsert({
       user_id:payload.user_id,scenario:payload.scenario,decision:payload.decision,reasons:payload.reasons
     },{onConflict:'user_id,scenario'}).select('id,scenario,decision,reasons').single());
   }
   if(error)throw error;
   if(!saved?.id)throw new Error('The database did not confirm a saved answer.');
   
   await refreshSharedAnswers();
   publicStarVerified=sharedStatus==='ready'&&sharedAnswers.some(a=>a.id===String(saved.id)&&a.scenario===saved.scenario);
   if(flow.starMode==='named'&&(!starIdentityServiceReady||starNames.get(String(saved.id))!==flow.starName.trim().slice(0,80)))throw new Error('Star saved, but public name was not confirmed. Complete the star identity SQL setup.');
   if(!publicStarVerified){
      throw new Error('Your answer was saved, but it could not be confirmed in the public starfield. Please check the Lookout status before submitting again.');
   }
   // Star submission and public confirmation finish BEFORE story writing begins.
   flow.submitted=true;
   flow.step=3;
   save();
 }catch(e){submitError='Could not confirm your star in the shared sky: '+String(e.message||e)}
 finally{submitBusy=false;render(false)}
}



let emailAuthMode='login';
let authRecovery=location.hash.includes('type=recovery');
let authPasswordBusy=false;
function passwordFields(){return `<form id="update-password-form" class="email-auth-form">
<label for="new-password">New museum password</label>
<input class="field" id="new-password" type="password" autocomplete="new-password" minlength="10" maxlength="128" required placeholder="At least 10 characters" />
<label for="confirm-password">Confirm new password</label>
<input class="field" id="confirm-password" type="password" autocomplete="new-password" minlength="10" maxlength="128" required placeholder="Repeat your password" />
<button class="btn" type="submit" ${authPasswordBusy?'disabled':''}>${authRecovery?'Reset my password ↗':'Save new password ↗'}</button>
</form>`}
function authPage(){
if(authUser)return `<main class="container"><section class="page-hero"><div class="eyebrow">YOUR ACCOUNT</div><h1>${authRecovery?'Choose a new password.':'Your place in the museum.'}</h1></section><section class="section-compact narrow auth-area">
<div class="auth-panel">
<div class="eyebrow">${authRecovery?'PASSWORD RECOVERY':'SIGNED IN'}</div>
<h2>${authRecovery?'Create a new museum password.':'Welcome back.'}</h2>
<p class="auth-email">${esc(authUser.email||'Authenticated visitor')}</p>
<p class="muted">${authRecovery?'Your recovery link has been accepted. Choose a new password to finish.':'Set or change your museum password here. If you originally joined using Google, setting a password will let you sign in with either method using the same account.'}</p>
${passwordFields()}
${authMessage?`<div class="auth-feedback" role="status">${esc(authMessage)}</div>`:''}
<p class="small muted">For security, use a new password you do not use for Google. Your current museum password is never displayed.</p>
${!authRecovery?'<button class="btn btn-outline" type="button" id="auth-signout">Sign out ↗</button>':''}
</div><p class="privacy-caption">Choose whether to share choice stars with a public name or as an Unnamed Star. Your story drafts remain private and can be backed up to your account. Stories become public only when you explicitly publish them.</p></section></main>`;
if(emailAuthMode==='forgot')return `<main class="container"><section class="page-hero"><div class="eyebrow">ACCOUNT RECOVERY</div><h1>Find your way back.</h1><p class="muted narrow" style="margin-left:0">Forgot your museum password? We can send a one-time reset link to your email.</p></section><section class="section-compact narrow auth-area"><div class="auth-panel">
<h2>Reset your password</h2><form class="email-auth-form" id="forgot-password-form"><label for="recovery-email">Account email</label><input class="field" id="recovery-email" type="email" autocomplete="email" required maxlength="254" placeholder="you@example.com"/><button class="btn" type="submit">Send reset link ↗</button></form>
${authMessage?`<div class="auth-feedback" role="status">${esc(authMessage)}</div>`:''}<button class="auth-text-button" type="button" id="back-to-login">← Back to sign in</button></div></section></main>`;
return `<main class="container"><section class="page-hero"><div class="eyebrow">THE MUSEUM / ACCOUNT</div><h1>Enter the museum.</h1><p class="muted narrow" style="margin-left:0">Continue with Google, or use your email and museum password.</p></section><section class="section-compact narrow auth-area"><div class="auth-panel">
<div class="eyebrow">A FAMILIAR ENTRANCE</div><h2>Continue with Google</h2><button type="button" class="btn google-signin" id="google-signin">Continue with Google ↗</button>
<div class="auth-separator"><span>or use your own email</span></div>
<div class="auth-tab-buttons"><button class="auth-tab ${emailAuthMode==='login'?'is-active':''}" type="button" data-auth-mode="login">Sign in</button><button class="auth-tab ${emailAuthMode==='signup'?'is-active':''}" type="button" data-auth-mode="signup">Create account</button></div>
<form id="email-auth-form" class="email-auth-form">
<label for="account-email">Email address</label><input class="field" type="email" id="account-email" autocomplete="email" maxlength="254" placeholder="you@example.com" required/>
<label for="account-password">Museum password</label><input class="field" type="password" id="account-password" autocomplete="${emailAuthMode==='signup'?'new-password':'current-password'}" minlength="8" maxlength="128" required placeholder="Enter your museum password"/>
${emailAuthMode==='signup'?'<p class="small muted">Use a strong password. Depending on the museum’s Supabase settings, new accounts may need to verify their email once.</p>':''}
<button class="btn" type="submit" id="email-auth-submit">${emailAuthMode==='signup'?'Create account ↗':'Sign in with email ↗'}</button>
</form>
${emailAuthMode==='login'?'<button class="auth-text-button" type="button" id="forgot-password">Forgot password?</button>':''}
${authMessage?`<div class="auth-feedback" role="status">${esc(authMessage)}</div>`:''}
</div><p class="privacy-caption">Authentication is handled by Supabase. Signing in does not publish or synchronize your stories, answers or stars. These remain in this browser until shared storage is enabled.</p></section></main>`;
}
function bindAuth(){
const google=$('#google-signin');if(google)google.onclick=async()=>{
if(!authClient){authMessage='Authentication service failed to load.';render(false);return}
google.disabled=true;google.textContent='Opening Google…';
try{const {error}=await authClient.auth.signInWithOAuth({provider:'google',options:{redirectTo:AUTH_REDIRECT}});if(error){authMessage=error.message;render(false)}}
catch(e){authMessage=String(e.message||e);render(false)}
};
document.querySelectorAll('[data-auth-mode]').forEach(btn=>btn.onclick=()=>{emailAuthMode=btn.dataset.authMode;authMessage='';render(false)});
const forgot=$('#forgot-password');if(forgot)forgot.onclick=()=>{emailAuthMode='forgot';authMessage='';render(false)};
const back=$('#back-to-login');if(back)back.onclick=()=>{emailAuthMode='login';authMessage='';render(false)};
const resetRequest=$('#forgot-password-form');
if(resetRequest)resetRequest.onsubmit=async ev=>{
ev.preventDefault();const email=$('#recovery-email')?.value.trim();if(!email||!authClient)return;
const submit=resetRequest.querySelector('button[type=submit]');if(submit)submit.disabled=true;
try{const {error}=await authClient.auth.resetPasswordForEmail(email,{redirectTo:AUTH_REDIRECT});
authMessage=error?'Could not send reset link: '+error.message:'If this email has a museum account, you will receive a password reset link. Check your inbox and spam folder.'}
catch(e){authMessage='Could not send reset link: '+String(e.message||e)}
render(false);
};
const update=$('#update-password-form');
if(update)update.onsubmit=async ev=>{
ev.preventDefault();if(!authClient||authPasswordBusy)return;
const password=$('#new-password')?.value||'',confirmPassword=$('#confirm-password')?.value||'';
if(password.length<10){authMessage='Please use at least 10 characters.';render(false);return}
if(password!==confirmPassword){authMessage='The passwords do not match.';render(false);return}
authPasswordBusy=true;const submit=update.querySelector('button[type=submit]');if(submit)submit.disabled=true;
try{const {error}=await authClient.auth.updateUser({password});
if(error){authMessage='Password could not be updated: '+error.message}
else{authRecovery=false;authMessage='Your museum password has been saved. You can now sign in using your email and this password, or continue with Google.'}}
catch(e){authMessage='Password could not be updated: '+String(e.message||e)}
finally{authPasswordBusy=false;render(false)}
};
const form=$('#email-auth-form');
if(form)form.onsubmit=async ev=>{
ev.preventDefault();if(!authClient){authMessage='Authentication service failed to load.';render(false);return}
const email=$('#account-email')?.value.trim(),password=$('#account-password')?.value;
if(!email||!password||password.length<8)return;
const submit=$('#email-auth-submit');if(submit){submit.disabled=true;submit.textContent='Please wait…'}
try{
if(emailAuthMode==='signup'){
const {data,error}=await authClient.auth.signUp({email,password,options:{emailRedirectTo:AUTH_REDIRECT}});
if(error)authMessage=error.message;
else if(data?.session){authMessage='Account created. You are signed in.';authUser=data.user||null}
else authMessage='Registration received. Please check your inbox if email verification is required by the museum’s Supabase settings.';
}else{
const {data,error}=await authClient.auth.signInWithPassword({email,password});
if(error)authMessage=error.message;
else {authMessage='Signed in successfully.';authUser=data?.user||null}
}
}catch(e){authMessage=String(e.message||e)}
render(false)
};
const signout=$('#auth-signout');if(signout)signout.onclick=async()=>{if(!authClient)return;const {error}=await authClient.auth.signOut();authMessage=error?error.message:'You have signed out.';if(!error)authUser=null;render(false)};
}
async function initAuth(){
if(!authClient){authLoading=false;return}
authClient.auth.onAuthStateChange((event,session)=>{
const next=session?.user||null;
if(event==='PASSWORD_RECOVERY'){authRecovery=true;authMessage='Recovery link confirmed. Set your new password below.';if(location.hash!=='#/account')location.hash='#/account';}
if(authUser?.id!==next?.id||event==='PASSWORD_RECOVERY'){authUser=next;setTimeout(()=>{refreshStoryCloud();checkCuratorAccess()},0);if($('#app'))render(false)}
});
try{const {data,error}=await authClient.auth.getSession();if(error)authMessage='Could not restore your session: '+error.message;authUser=data?.session?.user||null}
catch(e){authMessage='Could not restore login: '+String(e.message||e)}
authLoading=false;
setTimeout(()=>{refreshStoryCloud();checkCuratorAccess()},0);
if(authRecovery&&authUser&&location.hash!=='#/account')location.hash='#/account';
if($('#app'))render(false);
}
function header(route){return `<div class="notice">A MUSEUM OF UNSPOKEN WORDS · Choices become stars; stories appear only when their authors choose to share.</div><header class="site-header container"><a class="brand" href="#/"><span class="brand-mark">✧</span>The Unsent Museum</a><nav class="nav"><a class="${route==='/'?'active':''}" href="#/">Home</a><a class="${route.startsWith('/galleries')||route.startsWith('/gallery/')||route.startsWith('/archive')||route.startsWith('/contribute')?'active':''}" href="#/galleries">Galleries</a><a class="${route.startsWith('/lookout')?'active':''}" href="#/lookout">The Lookout</a><a class="${route.startsWith('/history')?'active':''}" href="#/history">History</a><a class="${route.startsWith('/archive')||route.startsWith('/story-sky')||route.startsWith('/story/')?'active':''}" href="#/archive">Story Archive</a><a class="${route==='/my-stories'||route.startsWith('/edit-story')?'active':''}" href="#/my-stories">My Stories</a>${curatorAccess?'<a href="#/curator">Curator</a>':''}<a class="${route==='/about'?'active':''}" href="#/about">About</a><a class="account-link" href="#/account">${authUser?'✧ '+esc(authUser.email?.split('@')[0]||'Account'):'Sign in'}</a></nav>${museumLangControl()}</header>`}
function footer(){return `<footer class="footer"><div class="container footer-inner"><span>© The Unsent Museum · ENGL 4106 student project prototype</span><div class="footer-links"><a href="#/about">Method & Reflection</a><a href="#/privacy">Privacy</a><a href="#/galleries">Galleries</a><a href="#/history">Historical Wing</a><a href="#/archive">All Stories</a></div></div></footer>`}
function card(s){return `<a class="card" href="#/gallery/${s.id}"><span class="card-num">GALLERY ${s.num}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.subtitle)}</p><span class="link-arrow">Enter gallery ↗</span></div></a>`}
function home(){return `<main class="museum-home"><section class="hero museum-hero"><div class="container museum-hero-inner"><div class="museum-hero-copy"><div class="museum-hero-ornament" aria-hidden="true">✧ ───── ✧</div><h1><span>The Unsent</span><em>Museum</em></h1><p class="museum-hero-kicker">AN ARCHIVE OF UNSENT WORDS</p><p class="museum-hero-quote">A place for the thoughts, feelings, and stories that were never sent.</p></div><div class="museum-portal-grid"><a class="museum-portal museum-portal-history" href="#/history"><span class="museum-portal-corner" aria-hidden="true">✦</span><span class="museum-portal-icon" aria-hidden="true">✉</span><span class="museum-portal-heading">The Historical Archive</span><span class="museum-portal-copy">Real letters, private manuscripts and deliberate silence</span><span class="museum-portal-arrow" aria-hidden="true">→</span></a><a class="museum-portal museum-portal-gallery" href="#/galleries"><span class="museum-portal-corner" aria-hidden="true">✦</span><span class="museum-portal-icon"><svg viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="14" y="18" width="62" height="55" rx="1"/><path d="M24 61V29h42v32zM24 57l13-17 11 13 10-12M9 77h72"/><circle cx="56" cy="36" r="4"/></svg></span><span class="museum-portal-heading">Galleries</span><span class="museum-portal-copy">Explore the rooms of silence</span><span class="museum-portal-arrow" aria-hidden="true">→</span></a><a class="museum-portal museum-portal-sky" href="#/story-sky"><span class="museum-portal-corner" aria-hidden="true">✦</span><span class="museum-portal-icon"><svg viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="45" cy="45" r="29"/><path d="M45 14v62M14 45h62M25 25l40 40M65 25L25 65"/><path d="M45 31l4.3 9.7L59 45l-9.7 4.3L45 59l-4.3-9.7L31 45l9.7-4.3z"/></svg></span><span class="museum-portal-heading">The Starry Sky</span><span class="museum-portal-copy">Read stories among the stars</span><span class="museum-portal-arrow" aria-hidden="true">→</span></a><a class="museum-portal museum-portal-research" href="#/research"><span class="museum-portal-corner" aria-hidden="true">✦</span><span class="museum-portal-icon"><svg viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 24q16-9 30 2 15-11 30-2v47q-16-7-30 1-14-8-30-1zM45 26v46M23 35q9-2 17 3M23 46q9-2 17 3M50 38q8-5 18-3M50 49q8-5 18-3"/></svg></span><span class="museum-portal-heading">Research</span><span class="museum-portal-copy">Discover the reasons behind silence</span><span class="museum-portal-arrow" aria-hidden="true">→</span></a><a class="museum-portal museum-portal-story" href="#/contribute/others"><span class="museum-portal-corner" aria-hidden="true">✦</span><span class="museum-portal-icon"><svg viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 30L45 12l34 18v43H11zM11 32l34 27 34-27M11 72l25-20M79 72L54 52M30 18V8h31v24"/><circle cx="68" cy="14" r="3"/></svg></span><span class="museum-portal-heading">Share a Story</span><span class="museum-portal-copy">Leave the words you never sent</span><span class="museum-portal-arrow" aria-hidden="true">→</span></a></div><div class="museum-hero-down"><span>ENTER THE COLLECTION</span><span aria-hidden="true">↓</span></div></div></section>
<section class="history-home-feature section-compact container" aria-label="Featured historical archive">
 <div class="history-home-feature-heading"><div><div class="eyebrow">FEATURED COLLECTION · THE UNSENT ARCHIVES</div><h2>Some words never reached their readers.</h2><p class="muted">Start with documented moments when someone wrote, composed or prepared to speak — then deliberately held something back.</p></div><a class="btn" href="#/history">Enter the Historical Archive ↗</a></div>
 <div class="history-home-feature-grid">
 <a class="history-home-exhibit" href="#/history/franz-kafka"><span class="history-home-year">1919 · PRAGUE</span><h3>The Letter Never Delivered</h3><p>Kafka wrote to his father. The letter never arrived.</p><span class="link-arrow">Read this exhibit ↗</span></a>
 <a class="history-home-exhibit" href="#/history/abraham-lincoln"><span class="history-home-year">1863 · WASHINGTON</span><h3>The Anger Left on Paper</h3><p>Lincoln wrote a sharp rebuke — then left it unsent.</p><span class="link-arrow">Read this exhibit ↗</span></a>
 <a class="history-home-exhibit" href="#/history/anne-lister"><span class="history-home-year">1806–1840 · YORKSHIRE</span><h3>A Diary Written in Code</h3><p>Anne Lister wrote down her private life, but guarded who could read it.</p><span class="link-arrow">Read this exhibit ↗</span></a>
 </div></section>
<section class="section container"><div class="section-heading"><div><div class="eyebrow">01 / The exhibition</div><h2>Rooms of silence.</h2></div><p class="muted">Each gallery holds a different situation. Read the scene, make your choice, and discover why others might choose differently.</p></div><div class="cards">${SCENARIOS.map(card).join('')}<a href="#/history" class="card history-entry"><span class="card-num">SPECIAL EXHIBITION · DOCUMENTED HISTORY</span><div><h3>Silence in History</h3><p>Hidden diaries, forbidden words, and the power of refusal.</p><span class="link-arrow">Enter the historical wing ↗</span></div></a><a href="#/gallery/others" class="card others"><span class="card-num">GALLERY V</span><div><h3>Others</h3><p>Not every story fits a category. Discover the open archive.</p><span class="link-arrow">Explore other stories ↗</span></div></a></div></section><section class="section-compact container"><div class="divider"></div><div class="two-col"><div><div class="eyebrow">02 / The story archive</div><h2>Every story has a place.</h2><p class="muted">Explore the anonymous story shelves by gallery, or see all collections in one place. The shared Story Archive contains only stories that visitors have explicitly published. Private drafts stay private.</p><a class="btn btn-outline" href="#/archive">Explore all stories ↗</a></div><div class="archive-preview"><span class="eyebrow">STORIES · ALL GALLERIES</span><div class="archive-preview-icon">✉</div><p>A shelf for the words others have left behind.</p></div></div></section><section class="section container"><div class="two-col"><div><div class="eyebrow">03 / The lookout</div><h2>Every choice leaves a light.</h2><p class="muted">A blue star for a decision to remain silent. A golden star for a decision to speak. Each room has its own sky; together, they make one constellation of choices.</p><p class="muted small">Stars are drawn from visitors' shared choices, with anonymous or chosen-name attribution. The sky grows as people answer.</p><a class="btn btn-outline" href="#/lookout">Explore the sky ↗</a></div><div class="preview-sky"><div class="overlay"><span class="eyebrow">The Lookout</span><p class="small muted">A sky that grows with real choices.</p></div><canvas id="home-sky" aria-label="Visualization of anonymous shared museum choices"></canvas></div></div></section><section class="section-compact container"><div class="divider"></div><div class="two-col"><div><div class="eyebrow">03 / A note from the curator</div><h2>Whose silence is this?</h2></div><div><p class="muted">The stories in this first version are illustrative scene drafts—not the curator's real memories. They will be replaced with first-person nonfiction accounts, supported by research and a transparent reflective statement.</p><a class="link-arrow" href="#/about">Read the project method ↗</a></div></div></section></main>`}
function researchIndex(){return `<main class="container"><section class="page-hero"><div class="eyebrow">THE RESEARCH LIBRARY · BEHIND THE SILENCE</div><h1>Why do we remain silent?</h1><p class="muted">Explore the published research behind each gallery and the complicated reasons people leave words unsaid.</p></section><section class="section-compact"><div class="cards">${SCENARIOS.map(x=>`<a class="card" href="#/research/${x.id}"><span class="card-num">RESEARCH · GALLERY ${x.num}</span><div><h3>${esc(x.title)}</h3><p>${esc(x.subtitle)}</p><span class="link-arrow">Read the research ↗</span></div></a>`).join('')}</div></section></main>`}


/* Documented historical cases: facts and curatorial readings are intentionally separated. */
const HISTORICAL_SILENCES=[{"id":"anne-frank","year":"1942–1944 · Amsterdam","name":"Anne Frank","tag":"A voice behind closed doors","kind":"Hidden expression","fact":"While hiding from Nazi persecution in Amsterdam, Anne Frank kept a diary in which she recorded her thoughts, fears, frustrations, and hopes. She later began revising her writing with publication in mind. Her last diary entry was dated 1 August 1944.","reading":"Anne was not silent on the page. Her writing asks us to notice the difference between being unable to speak freely in public and finding a private space in which to keep one's voice alive.","question":"Can a diary be a form of speaking when the world outside must not hear you?","source":"Anne Frank House · The complete works of Anne Frank","url":"https://www.annefrank.org/en/anne-frank/diary/complete-works-anne-frank/","silenceClass":"protective","sortYear":1942},{"id":"white-rose","year":"1942–1943 · Munich","name":"Sophie Scholl and the White Rose","tag":"Words that were forbidden","kind":"Suppressed expression","fact":"The White Rose student resistance group distributed leaflets criticizing the Nazi dictatorship and urging resistance. Sophie and Hans Scholl were arrested after distributing leaflets at the University of Munich on 18 February 1943. Both were executed on 22 February.","reading":"This is not a story about people who quietly accepted silence. The group spoke despite a system designed to suppress dissent. Their fate reveals the price that public speech could carry.","question":"When speaking is dangerous, what does the pressure to remain silent do to a society?","source":"United States Holocaust Memorial Museum · The White Rose Opposition Movement","url":"https://encyclopedia.ushmm.org/content/en/article/white-rose","silenceClass":"suppressed","sortYear":1942},{"id":"anna-akhmatova","name":"Anna Akhmatova","kind":"Silence under terror","tag":"Poetry carried in memory","year":"1935–1989 · Leningrad","silenceClass":"protective","sortYear":1935},{"id":"nicolaus-copernicus","name":"Nicolaus Copernicus","kind":"Selective disclosure","tag":"An idea before print","year":"c. 1514–1543 · Royal Prussia","silenceClass":"withheld","sortYear":1514},{"id":"harriet-jacobs","name":"Harriet Jacobs","kind":"Survival through concealment","tag":"Seven years hidden above a room","year":"1835–1861 · North Carolina","silenceClass":"protective","sortYear":1835},{"id":"emily-dickinson","name":"Emily Dickinson","kind":"Private circulation","tag":"Poems shared and withheld","year":"1850–1890 · Amherst","silenceClass":"withheld","sortYear":1850},{"id":"alan-turing","name":"Alan Turing","kind":"Criminalized privacy and secrecy","tag":"A state secret and a private life","year":"1939–1954 · Britain","silenceClass":"protective","sortYear":1939},{"id":"oscar-wilde","name":"Oscar Wilde","year":"1895–1897 · Britain","tag":"Love exposed in court","kind":"Criminalized intimacy","silenceClass":"protective","sortYear":1895},{"id":"liu-xiaobo","name":"Liu Xiaobo","year":"1989–2017 · China","tag":"A writer absent from a ceremony","kind":"Restricted public expression","silenceClass":"suppressed","sortYear":2008},{"id":"galileo-galilei","name":"Galileo Galilei","year":"1609–1642 · Italy","tag":"The trial of a cosmology","kind":"Censored scientific claims","silenceClass":"suppressed","sortYear":1633},{"id":"harriet-tubman","name":"Harriet Tubman","year":"1849–1860 · United States","tag":"Secret routes to freedom","kind":"Protective secrecy","silenceClass":"protective","sortYear":1849},{"id":"franz-kafka","name":"Franz Kafka","year":"1919 · Prague","kind":"Undelivered family letter","tag":"The letter never delivered","silenceClass":"withheld","sortYear":1919},{"id":"abraham-lincoln","name":"Abraham Lincoln","year":"1863 · Washington","kind":"Unsent rebuke","tag":"The anger left on paper","silenceClass":"withheld","sortYear":1863},{"id":"anne-lister","name":"Anne Lister","year":"1806–1840 · Yorkshire","kind":"Encrypted personal diary","tag":"The diary written in code","silenceClass":"withheld","sortYear":1806},{"id":"sophie-germain","name":"Sophie Germain","year":"1790s–1800s · Paris","kind":"Pseudonymous scholarship","tag":"A mathematical letter under another name","silenceClass":"withheld","sortYear":1794},{"id":"fanny-mendelssohn","name":"Fanny Mendelssohn Hensel","year":"1820s–1847 · Berlin","kind":"Private and delayed publication","tag":"Music kept within the house","silenceClass":"withheld","sortYear":1820},{"id":"eileen-chang","name":"Eileen Chang","year":"1976–2009 · United States / Hong Kong","tag":"The novel she asked to destroy","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1976},{"id":"charlotte-bronte","name":"Charlotte Brontë","year":"1846–1850 · Yorkshire","tag":"A novelist under the name Currer Bell","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1846},{"id":"emily-bronte","name":"Emily Brontë","year":"1846–1848 · Yorkshire","tag":"An author called Ellis Bell","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1846},{"id":"anne-bronte","name":"Anne Brontë","year":"1846–1849 · Yorkshire","tag":"A novel signed Acton Bell","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1846},{"id":"jane-austen","name":"Jane Austen","year":"1811–1817 · England","tag":"A novel by a lady","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1811},{"id":"george-eliot","name":"George Eliot","year":"1857–1860 · London","tag":"The name that stood in for Mary Ann Evans","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1857},{"id":"louisa-may-alcott","name":"Louisa May Alcott","year":"1860s–1880s · Massachusetts","tag":"A second name for darker fiction","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1865},{"id":"thomas-more","name":"Thomas More","year":"1534–1535 · England","tag":"An oath not spoken","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1534},{"id":"elizabeth-i","name":"Elizabeth I","year":"1558–1603 · England","tag":"A successor not publicly named","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1558},{"id":"queen-victoria","name":"Queen Victoria","year":"1832–1901 · Britain","tag":"Diaries edited and destroyed","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1901},{"id":"thomas-hardy","name":"Thomas Hardy","year":"1910s–1928 · Dorset","tag":"A life edited by its author","kind":"Deliberately withheld expression","silenceClass":"withheld","sortYear":1920}].concat((window.MUSEUM_NEW_CASES||[]).map(c=>({
 id:c.id,name:c.name,year:c.year+' · '+c.place,tag:c.enSubtitle,kind:c.type,
 silenceClass:c.silenceClass||'withheld',sortYear:Number(c.sortYear)||0
})));
function historyPage(id){
 const details=window.MUSEUM_HISTORY_LONGFORM||{};
 const selected=HISTORICAL_SILENCES.find(x=>x.id===id);
 const intro='<section class="page-hero history-intro"><div class="eyebrow">THE HISTORICAL WING · DOCUMENTED ACCOUNTS</div><h1>Silence in History.</h1><p class="muted">What happens between wanting to express something and deciding not to deliver it? Begin with real letters, hidden identities and private manuscripts. Other wings examine protective secrecy and the voices of people forced to stop speaking after resisting.</p><p class="history-method">Curatorial distinction: choice is not the same as freedom. A person may deliberately withhold words because of fear or danger. Other figures in this archive actively spoke; their stories are kept in contextual wings. Classification describes the historical situation, not an assumed private motive.</p></section>';
 const historyTabs=[
  {id:'withheld',title:'I · The Unsent',desc:'Words, identities, manuscripts and decisions intentionally kept from an audience.'},
  {id:'protective',title:'II · Silence for Survival',desc:'Secrecy chosen under threats or strong external pressure: choice under constraint.'},
  {id:'suppressed',title:'III · Voices Forced to Stop',desc:'People who spoke or protested and were then subjected to imprisonment, forced retraction or execution.'}
 ];
 const cases='<section class="history-archive-directory" aria-label="Historical exhibition directory">'+
   '<h2 class="history-directory-heading">Begin with what was never said</h2><p class="history-directory-note">The central gallery studies chosen withholding. The other two clarify protective secrecy and expression forcibly stopped after it began.</p>'+
   '<div class="history-class-tabs" role="group" aria-label="Choose a type of silence">'+historyTabs.map((t,i)=>'<button type="button" data-silence-tab="'+t.id+'" aria-pressed="'+(i===0?'true':'false')+'" class="'+(i===0?'is-active':'')+'">'+t.title+'</button>').join('')+'</div>'+
   '<p id="history-class-description" class="history-class-description">'+historyTabs[0].desc+'</p><p class="history-timeline-guide">Arranged by the year of the relevant event, earliest first — not by birth date.</p>'+
   '<div class="history-library-search"><label for="history-search">Find a historical account</label><input id="history-search" type="search" placeholder="Search names, places, themes…" autocomplete="off" /><span id="history-search-status" aria-live="polite"></span></div>'+
   '<div class="history-grid history-chronology-grid" aria-label="Historical stories, ordered chronologically">'+[...HISTORICAL_SILENCES].sort((a,b)=>({withheld:0,protective:1,suppressed:2}[a.silenceClass]-{withheld:0,protective:1,suppressed:2}[b.silenceClass])||(a.sortYear-b.sortYear)||a.name.localeCompare(b.name)).map(x=>{
      const d=museumHistoryLocalized(details[x.id],x.id);
      return '<a class="history-card '+(selected?.id===x.id?'is-current':'')+'" data-archive-year="'+x.sortYear+'" data-silence-class="'+esc(x.silenceClass)+'" data-history-search="'+esc((x.name+' '+(window.MUSEUM_I18N?.zh?.[x.name]||'')+' '+x.tag+' '+x.kind+' '+x.year+' '+(d?.title||'')).toLowerCase())+'" href="#/history/'+encodeURIComponent(x.id)+'"><span class="history-date">'+esc(d?.period||x.year)+'</span><span class="history-symbol" aria-hidden="true">✧</span><h2>'+esc(d?.title||x.name)+'</h2><p>'+esc(museumZh(x.name))+'</p><span class="history-open">Read the story ↗</span></a>';
   }).join('')+'</div></section>';
 let content='';
 const essay=selected&&museumHistoryLocalized(details[selected.id],selected.id);
 if(essay){
  const documentaryFigure=pic=>'<figure class="history-archive-figure"><a class="history-photo-link" href="'+esc(pic.page)+'" target="_blank" rel="noopener noreferrer" title="Open the original archive record"><img loading="lazy" decoding="async" src="'+esc(pic.src)+'" alt="'+esc(pic.caption)+'"></a><p class="history-photo-fallback" hidden>Image unavailable here. <a href="'+esc(pic.page)+'" target="_blank" rel="noopener noreferrer">Open the original archive photograph ↗</a></p><figcaption><strong>'+esc(pic.kind)+'</strong> · '+esc(pic.caption)+'<span class="history-photo-credit"><a href="'+esc(pic.page)+'" target="_blank" rel="noopener noreferrer">View original source & rights ↗</a> · '+esc(pic.credit)+'</span></figcaption></figure>';
  const chapters=essay.story.map((p,i)=>{
   const paragraph='<p class="history-prose-paragraph">'+esc(p)+'</p>';
   const figures=(essay.images||[]).filter(pic=>pic.at===i+1).map(documentaryFigure).join('');
   return paragraph+figures;
  }).join('');
  const openingImages=(essay.images||[]).filter(pic=>pic.at===0).map(documentaryFigure).join('');
  const anatomy=essay.analysis.map((pair,i)=>'<section class="history-analysis-point"><div class="history-analysis-index">'+String(i+1).padStart(2,'0')+'</div><div><h3>'+esc(pair[0])+'</h3><p>'+esc(pair[1])+'</p></div></section>').join('');
  const sources=essay.sources.map((pair,i)=>'<li><a href="'+esc(pair[1])+'" target="_blank" rel="noopener noreferrer">'+esc(pair[0])+' ↗</a></li>').join('');
  const moment=essay.moment||{};
  const item=essay.object||{};
  const evidenceLink=item.url?'<a href="'+esc(item.url)+'" target="_blank" rel="noopener noreferrer">Examine the original record ↗</a>':'';
  const tags=(essay.tags||[]).map(tag=>'<span class="history-reason-tag">'+esc(tag)+'</span>').join('');
  const objectBox='<div class="history-source-object"><span class="history-object-label">THE HISTORICAL OBJECT</span><h3>'+esc(item.name||'A documented act of expression')+'</h3><p>'+esc(item.kind||'Historical record')+'</p>'+evidenceLink+'<p class="history-object-evidence">'+esc(item.evidence||'Evidence and context are discussed in the references below.')+'</p></div>';
  const momentLabel=selected.silenceClass==='withheld'?'The Unsent Moment':'The Moment of Expression';
  const momentMarkup='<div class="history-moment-section"><div class="history-section-title"><span>DOCUMENTED EXPRESSION · CONTEXT AND EVIDENCE</span><h2>'+momentLabel+'</h2><p>Not every figure here chose silence: the case record specifies what was actually withheld or contested.</p></div>'+objectBox+'<div class="history-moment-rows">'+
    '<div><h3>Who was the intended audience?</h3><p>'+esc(moment.addressed||'See the historical account')+'</p></div>'+
    '<div><h3>What was there to express?</h3><p>'+esc(moment.intended||'See the historical account')+'</p></div>'+
    '<div><h3>What was withheld — if anything?</h3><p>'+esc(moment.withheld||'See the historical account')+'</p></div>'+
    '<div><h3>Why did it happen?</h3><p>'+esc(moment.why||'The evidence does not determine a single cause.')+'</p></div>'+
    '<div class="history-moment-certainty"><h3>What do the records actually establish?</h3><p>'+esc(moment.certainty||'The interpretation is qualified in the research notes.')+'</p></div>'+
  '</div><div class="history-reason-tags">'+tags+'</div></div>';
  content='<article class="history-longform"><header class="history-longform-header"><div class="eyebrow">HISTORICAL NONFICTION · '+esc(museumLang==='en'?selected.kind:(window.MUSEUM_HISTORY_LABELS?.[selected.id]?.kind||'历史展品'))+'</div><h2>'+esc(essay.title)+'</h2><p class="history-longform-subtitle">'+esc(essay.subtitle)+'</p><p class="history-longform-meta">'+esc(museumZh(selected.name))+' · '+esc(essay.period)+' · '+esc(essay.readingTime)+'</p><nav class="history-toc" aria-label="Story sections"><button type="button" data-history-jump="history-story">I · The Story</button><button type="button" data-history-jump="history-anatomy">II · An Anatomy of Silence</button><button type="button" data-history-jump="history-evidence">III · Sources & Reflection</button></nav></header>'+
   '<section id="history-story" class="history-story-section"><div class="history-section-title"><span>PART I · HISTORICAL NONFICTION</span><h2>The Story</h2></div><div class="history-prose">'+openingImages+chapters+'</div></section>'+
   '<section id="history-anatomy" class="history-analysis-section"><div class="history-section-title"><span>PART II · INTERPRETATION</span><h2>An Anatomy of Silence</h2><p>Why it happened · What form it took · What the evidence allows us to say</p></div>'+momentMarkup+anatomy+'<blockquote class="history-final-question">'+esc(essay.question)+'</blockquote></section>'+
   '<section id="history-evidence" class="history-evidence-section"><div class="history-section-title"><span>PART III · METHOD & REFERENCES</span><h2>Author’s Note & Sources</h2></div><p>'+esc(essay.note)+'</p><ol>'+sources+'</ol><p class="history-evidence-warning">The narrative uses historical evidence; the analysis is a curatorial interpretation. Sources are provided for readers to check the record independently.</p></section></article>';
 }else if(selected){
  content='<div class="history-invitation"><h2>The full account could not load.</h2><p>Refresh the page to load the historical narrative.</p></div>';
 }else{
  content='<div class="history-invitation"><span class="eyebrow">AN INVITATION TO LOOK CLOSER</span><h2>Not all silence means the same thing.</h2><p>Choose an exhibit to read a long-form story, study the silence within it, and follow the historical sources.</p></div>';
 }
 return '<main class="container history-wing">'+intro+(selected?content+'<h2 class="history-more-title">Explore other historical accounts</h2>'+cases:cases+content)+'<div class="history-end"><a class="btn btn-outline" href="#/galleries">Explore the contemporary galleries ↗</a><a class="btn btn-outline" href="#/research">Visit the research library ↗</a></div></main>';
}

function galleries(){return `<main class="container"><section class="page-hero"><div class="eyebrow">The Exhibition</div><h1>Choose a room.</h1><p class="muted narrow" style="margin-left:0">Different settings, different reasons. Choose a gallery to read its scene, experience the decision, and view the constellation it leaves behind.</p></section><section class="section-compact"><div class="cards">${SCENARIOS.map(card).join('')}<a href="#/history" class="card history-entry"><span class="card-num">SPECIAL EXHIBITION · DOCUMENTED HISTORY</span><div><h3>Silence in History</h3><p>Hidden diaries, forbidden words, and the power of refusal.</p><span class="link-arrow">Enter the historical wing ↗</span></div></a><a href="#/gallery/others" class="card others"><span class="card-num">GALLERY V · OPEN ARCHIVE</span><div><h3>Others</h3><p>Stories that refuse to fit a category.</p><span class="link-arrow">Visit the open archive ↗</span></div></a></div></section></main>`}
function scenario(id){const s=SCENARIOS.find(x=>x.id===id);if(!s||museumLang==='en')return s;const l=window.MUSEUM_I18N?.scenarios?.[id];if(!l)return s;return {...s,...Object.fromEntries(Object.entries(l).map(([key,val])=>[key,Array.isArray(val)?val.map(museumConvert):museumConvert(val)]))}}
function storyCategoryOptions(selected){return [...SCENARIOS.map(s=>({id:s.id,label:s.title})),{id:'others',label:'Others · Beyond these categories'}].map(o=>`<option value="${esc(o.id)}" ${selected===o.id?'selected':''}>${esc(o.label)}</option>`).join('')}
function validStoryCategory(value){return value==='others'||Boolean(scenario(value))}
function visibleStories(id){return publicStories.filter(st=>!id||st.scenario===id).sort((a,b)=>Date.parse(b.updated_at||0)-Date.parse(a.updated_at||0))}
function storyById(id){return publicStories.find(st=>String(st.id)===String(id))||null}
function publicStoryReader(id){
 const st=storyById(id);
 if(st)return `<main class="container"><section class="page-hero story-reader-hero"><div class="eyebrow">A STORY FROM THE UNSENT MUSEUM · ${esc(scenario(st.scenario)?.title||'Others')}</div><h1>${esc(st.title||'An Unsent Story')}</h1><p class="muted">By ${esc(st.author_name||'Anonymous')}</p></section><article class="story-reader"><div class="eyebrow">THE STORY</div><p class="archive-prose">${esc(st.story)}</p><div class="divider"></div><div class="eyebrow">WHY THEY MADE THIS CHOICE</div><p class="archive-prose">${esc(st.why)}</p><div class="actions"><a class="btn btn-outline" href="#/story-sky/${encodeURIComponent(st.scenario)}">✧ Return to this gallery's Story Sky</a><a class="btn btn-outline" href="#/archive/${encodeURIComponent(st.scenario)}">Browse stories as text</a></div></article></main>`;
 return `<main class="container"><section class="page-hero"><div class="eyebrow">THE STORY ARCHIVE</div><h1>Story unavailable.</h1><p class="muted">${storyCloudStatus==='loading'?'Checking the shared story archive…':'This story may have been withdrawn, hidden by the curator, deleted, or is unavailable.'}</p><div class="actions"><a class="btn btn-outline" href="#/story-sky">← Story Sky</a><a class="btn btn-outline" href="#/archive">Browse published stories</a></div></section></main>`
}
function storyViewSwitch(id,sky){
 const suffix=id?'/'+encodeURIComponent(id):'';
 return `<div class="story-view-switch" role="group" aria-label="Story browsing mode"><a class="${sky?'':'selected'}" href="#/archive${suffix}" ${!sky?'aria-current="page"':''}>☰ Story Collection</a><a class="${sky?'selected':''}" href="#/story-sky${suffix}" ${sky?'aria-current="page"':''}>✧ Story Sky</a></div>`
}
// A distinct, consistent hue for every published-story collection.
// Van Gogh-inspired star colours, consistent with the original choice/reason skies.
// The original paintStar, makeStarSprite, flowStarPoint and twinkling animation are shared.
const STORY_STAR_CATEGORIES=[
 {id:'friendship',label:'Between Friends',color:'#E5C46A',meaning:'Starry ochre gold'},
 {id:'classroom',label:'In the Classroom',color:'#5681B1',meaning:'Cobalt night blue'},
 {id:'family',label:'At Home',color:'#7B79B3',meaning:'Dusk violet blue'},
 {id:'before-sending',label:'Before Sending',color:'#579487',meaning:'Cypress teal'},
 {id:'others',label:'Others',color:'#C47749',meaning:'Burnt sienna'}
];
const STORY_STAR_COLORS=Object.fromEntries(STORY_STAR_CATEGORIES.map(x=>[x.id,x.color]));
function storySkyLegend(id){
 const categories=id?STORY_STAR_CATEGORIES.filter(x=>x.id===id):STORY_STAR_CATEGORIES;
 return `<div class="story-star-legend" aria-label="Story constellation color key">${categories.map(x=>`<div class="story-legend-item"><span class="story-legend-star" style="--story-star-color:${x.color}" aria-hidden="true"></span><span>${esc(x.label)}</span></div>`).join('')}</div>`
}
function storySkyPage(id){
 if(id&&id!=='others'&&!scenario(id))return storySkyPage();
 const items=visibleStories(id);
 return `<main class="container story-sky-page"><section class="page-hero"><div class="eyebrow">THE STORY ARCHIVE · ${id?esc(scenario(id)?.title||'Others'):'ALL GALLERIES'}</div><h1>A Sky of Stories.</h1><p class="muted">Each light is a story someone chose to share. Hover to discover its title and author, then select the star to read the whole story. On touchscreens, tap a star to reveal its story card below the sky, then choose Read this story.</p>${storyViewSwitch(id,true)}<div class="category-nav"><a class="pill ${!id?'active':''}" href="#/story-sky">All stories</a>${SCENARIOS.map(x=>`<a class="pill ${id===x.id?'active':''}" href="#/story-sky/${x.id}">${esc(x.title)}</a>`).join('')}<a class="pill ${id==='others'?'active':''}" href="#/story-sky/others">Others</a></div></section><section class="section-compact" style="padding-top:5px"><div class="story-sky-meta"><span class="eyebrow">${items.length} published ${items.length===1?'story':'stories'}</span><span class="small muted">Only publicly visible stories become stars</span></div>${storyCloudStatus==='error'?`<div class="auth-feedback" role="alert">Could not load stories: ${esc(storyCloudError)}</div>`:''}${storySkyLegend(id)}<div class="story-sky-frame"><canvas id="story-sky-canvas" role="img" aria-label="Interactive constellation of published stories"></canvas>${items.length===0?`<div class="story-sky-empty"><div class="symbol">✧</div><h3>${storyCloudStatus==='loading'?'Gathering the stories…':'No stories in this sky yet.'}</h3><p class="small muted">Stories appear here when their authors publish them.</p></div>`:''}</div><div id="story-sky-preview" class="story-sky-preview" hidden aria-live="polite"></div><p class="small muted">Only published stories are shown. Withdrawing, deleting, or curator-blocking a story removes its star from the public sky after the next refresh.</p><div class="actions"><a href="#/contribute/others" class="btn btn-outline">Write your own story ↗</a><a href="#/archive${id?'/'+encodeURIComponent(id):''}" class="btn btn-outline">Read stories as text</a></div></section></main>`
}
function storyShelf(id,limit=0){
 const items=visibleStories(id),shown=limit?items.slice(0,limit):items;
 return shown.length?`<div class="archive">${shown.map(st=>`<article class="archive-item"><div class="eyebrow">${esc(scenario(st.scenario)?.title||'Others')} · by ${esc(st.author_name||'Anonymous')}</div><h3 class="serif"><a href="#/story/${encodeURIComponent(st.id)}">${esc(st.title||'An Unsent Story')}</a></h3><p class="archive-prose">${esc(st.story)}</p><div class="divider"></div><strong>Why they chose this</strong><p class="archive-prose">${esc(st.why)}</p><a class="link-arrow" href="#/story/${encodeURIComponent(st.id)}">Read this story ↗</a></article>`).join('')}</div>`:`<div class="empty-state"><div class="symbol">✉</div><h3>No published stories yet.</h3><p>Only stories deliberately made public by their authors appear here. Private drafts are never displayed.</p></div>`
}
const SILENCE_RESEARCH={"friendship":{"title":"Why do we keep secrets from our friends?","study":"Afifi & Guerrero (1998)","sourceTitle":"Some Things Are Better Left Unsaid II: Topic Avoidance in Friendships","url":"https://doi.org/10.1080/01463379809370099","question":"Why do people avoid certain topics even with close friends?","finding":"In a study of 177 university students, researchers identified four categories of motives for avoiding topics in friendships. These motives help explain why closeness does not always make difficult conversations easy.","reasons":[["We want to protect ourselves.","Sharing something personal can make us vulnerable. We may worry that a friend will judge us, misunderstand our feelings, or see us differently. Keeping quiet may feel safer than risking a painful response."],["We want to protect the friendship.","An honest conversation might lead to conflict, hurt feelings, or a change in a relationship we value. Some people avoid a topic not because the friendship means little, but because it means a great deal."],["We do not expect a helpful response.","We might believe our friend will not listen carefully, take our concerns seriously, or know how to respond. When we expect little understanding, beginning a difficult conversation may feel pointless."],["Some topics feel inappropriate to discuss.","A subject may seem too private, embarrassing, or unsuitable for this particular friendship. Expectations about social boundaries can make us hesitate, even when we would like to talk."]],"reflection":"Perhaps the difficult part of friendship is not deciding whether we trust someone, but deciding how much of ourselves we are willing to reveal.","scope":"The four motives are research categories. The examples above are illustrations, not quotations from participants."},"classroom":{"title":"Why do students stay silent even when they have something to say?","study":"Scientific Reports (2025)","sourceTitle":"Configuration Analysis of Negative Silence in College Classroom Based on FSQCA Method","url":"https://pubmed.ncbi.nlm.nih.gov/40634503/","question":"What combinations of conditions are associated with negative silence in university classrooms?","finding":"This study examined 222 university students. Instead of finding one universal cause, it identified several combinations involving confidence, fear of negative evaluation, interest in learning, and teachers' interactions. No single condition explained every instance of silence.","reasons":[["We doubt our own abilities.","A student may have an idea but question whether it is correct or worth sharing. Low confidence in one's ability to contribute can make speaking feel riskier than staying quiet."],["We fear being judged.","Answering aloud exposes our thoughts to classmates and teachers. The possibility of giving a wrong answer, feeling embarrassed, or receiving criticism can discourage participation."],["The classroom does not feel inviting.","How teachers communicate matters. Encouragement, eye contact, and other interactions can affect whether students feel able to join a discussion. Silence should not be understood only as a personal weakness."],["We lose interest or connection to the lesson.","When a topic feels difficult, distant, or uninteresting, students may disengage. The study considered learning interest alongside other factors rather than as a stand-alone explanation."]],"reflection":"Sometimes, the silence of a classroom tells us as much about its atmosphere as it does about its students.","scope":"The study concerned negative classroom silence and associations among factors. It does not mean every quiet student is anxious, disengaged, or unwilling to learn."},"family":{"title":"Why can speaking honestly feel difficult at home?","study":"Koerner & Fitzpatrick (2002)","sourceTitle":"Understanding Family Communication Patterns and Family Functioning","url":"https://doi.org/10.1080/23808985.2002.11679010","question":"How do families differ in their expectations about open discussion and agreement?","finding":"Family communication research distinguishes between conversation orientation (how much open discussion is encouraged) and conformity orientation (how strongly shared beliefs and agreement are valued). Different combinations shape how family members communicate.","reasons":[["How much room is there for open conversation?","In some families, people regularly share feelings, experiences, and different opinions. In others, those conversations happen less often. Having fewer opportunities to discuss disagreement may make difficult subjects harder to begin."],["How strongly is agreement expected?","Some families place particular value on shared beliefs, harmony, or respect for authority. A family member may hesitate to disagree because they worry that doing so will appear disrespectful or create conflict."],["What happens when both expectations exist together?","A family may encourage conversation while still expecting members to agree. Another may offer little space for open discussion. Whether speaking feels comfortable depends on the combination—not simply on whether a family is 'strict' or 'open'."]],"reflection":"Perhaps some things remain unspoken at home not because they are unimportant, but because we have learned that certain conversations are difficult to begin.","scope":"This research describes family communication patterns; the examples of hesitation are the museum's application of that framework, not direct evidence that a particular family pattern causes silence."},"before-sending":{"title":"Why do we write something, then decide not to send it?","study":"Das & Kramer (2013)","sourceTitle":"Self-Censorship on Facebook","url":"https://ojs.aaai.org/index.php/ICWSM/article/view/14412","question":"How often do people begin creating online content but decide not to publish it, and what factors are associated with that choice?","finding":"Across about 3.9 million Facebook users observed over 17 days, 71% showed at least one instance of last-minute self-censorship. The study found patterns related to audiences and to different kinds of posts. It did not directly establish each person's private motive.","highlight":"71%","highlightText":"of users in this study showed some last-minute self-censorship during the 17-day observation period.","reasons":[["We think about who might read it.","A message or post can reach friends, relatives, classmates, and colleagues at once. Different people may interpret the same words differently. The study found links between users' perceived audience and self-censorship."],["Different audiences bring different expectations.","Something that feels natural to tell a close friend may feel uncomfortable when a teacher, parent, or acquaintance can also see it. This is one way to understand the difficulty of choosing what to share in mixed online spaces."],["The type of message matters.","The study observed more self-censorship of posts than comments, with patterns varying by posting context. Writing to a broad audience may create different concerns from responding inside an existing conversation."]],"reflection":"The words have been written. The cursor is waiting. But somewhere between writing and sending, we begin imagining the people on the other side of the screen.","scope":"The 71% figure describes observed Facebook behavior in this sample and time period—not all internet users, and not proof that everyone who abandoned a post did so out of fear."}};
function behindSilence(id){
 const item=SILENCE_RESEARCH[id];if(!item)return '';
 return `<section class="behind-silence" id="behind-the-silence" aria-labelledby="behind-title">
  <div class="behind-heading"><span class="eyebrow">BEHIND THE SILENCE</span><h2 id="behind-title">${esc(item.title)}</h2>
    <p class="muted">A closer look at the reasons people sometimes choose silence, through published research.</p></div>
  <div class="behind-first">
    <div class="behind-overline">THE QUESTION</div><p>${esc(item.question)}</p>
    <div class="behind-overline">WHAT THE STUDY FOUND</div><p>${esc(item.finding)}</p>
    ${item.highlight?`<div class="behind-highlight"><strong>${esc(item.highlight)}</strong><span>${esc(item.highlightText)}</span></div>`:''}
  </div>
  <details class="behind-more">
   <summary><span>Explore the reasons in depth</span><span class="behind-plus" aria-hidden="true">＋</span></summary>
   <div class="behind-reasons">${item.reasons.map((reason,i)=>`<article class="behind-reason"><span class="behind-number">0${i+1}</span><div><h3>${esc(reason[0])}</h3><p>${esc(reason[1])}</p></div></article>`).join('')}</div>
  </details>
  <blockquote class="behind-reflection">${esc(item.reflection)}</blockquote>
  <div class="behind-source"><div><strong>Research source</strong><p>${esc(item.study)} · <em>${esc(item.sourceTitle)}</em></p><p class="behind-caveat">${esc(item.scope)}</p></div>
  <a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer" class="behind-source-link">Read the original research ↗</a></div>
 </section>`
}
function researchPage(id){
 const galleryData=scenario(id);if(!galleryData||!SILENCE_RESEARCH[id])return galleries();
 return `<main class="container research-page"><div class="page-hero"><div class="eyebrow">Gallery ${galleryData.num} · Research</div>
 <h1>Behind the Silence.</h1><p class="muted">Explore what published research can tell us about the reasons behind unspoken words.</p>
 <div class="category-nav"><a class="pill" href="#/experience/${encodeURIComponent(id)}">Experience the Moment</a><a class="pill" href="#/gallery/${encodeURIComponent(id)}">← Back to the gallery</a><a class="pill" href="#/lookout/${encodeURIComponent(id)}">✧ The Lookout</a></div></div>
 ${behindSilence(id)}</main>`
}

function gallery(id){const s=scenario(id);if(!s)return others();return `<main class="container"><section class="page-hero"><div class="eyebrow">Gallery ${s.num} · ${esc(s.cn)}</div><h1>${esc(s.title)}.</h1><p class="muted">${esc(s.subtitle)}</p><p class="muted">Choose your own way into this room.</p></section><section class="section-compact" style="padding-top:15px"><div class="gallery-gateways"><a class="gateway-card" href="#/experience/${id}"><span class="gateway-icon">◈</span><span class="eyebrow">PATH 01 · INTERACTIVE STORY</span><h2>Experience the Moment</h2><p>Enter an illustrative scene, decide whether you would remain silent, choose your reasons and leave your own story if you wish.</p><span class="link-arrow">Start the experience ↗</span></a><a class="gateway-card" href="#/archive/${id}"><span class="gateway-icon">✉</span><span class="eyebrow">PATH 02 · ANONYMOUS STORIES</span><h2>Read Other Voices</h2><p>Read stories that visitors have deliberately published in the ${esc(s.title)} collection. No questionnaire required.</p><span class="link-arrow">Enter this story collection ↗</span></a></div><div class="category-nav"><a class="pill" href="#/research/${id}">✧ Behind the Silence · Research</a><a class="pill" href="#/lookout/${id}">✧ This room's Lookout</a><a class="pill" href="#/archive">All stories from every gallery</a><a class="pill" href="#/galleries">All galleries</a></div><div class="note"><strong>Prototype note:</strong> The interactive scene is illustrative, not the curator's documented memory. The story collections show only deliberately published stories. Unfinished private drafts are never displayed.</div></section></main>`}
function others(){return `<main class="container"><section class="page-hero"><div class="eyebrow">Gallery V · Others</div><h1>Stories beyond categories.</h1><p class="muted">Not every silence fits a label. Explore stories from other situations, or write a new one for this open collection.</p></section><section class="section-compact" style="padding-top:12px"><div class="gallery-gateways"><a class="gateway-card" href="#/archive/others"><span class="gateway-icon">✉</span><span class="eyebrow">THE OPEN ARCHIVE</span><h2>Read Other Stories</h2><p>Browse stories and explanations from situations outside our four featured galleries.</p><span class="link-arrow">Read the collection ↗</span></a><a class="gateway-card" href="#/contribute/others"><span class="gateway-icon">✍</span><span class="eyebrow">YOUR VOICE</span><h2>Leave a Story</h2><p>Write about a different situation. Your unfinished story stays private. You can decide later whether to publish it to the shared archive.</p><span class="link-arrow">Write your story ↗</span></a></div><div class="actions"><a href="#/archive" class="btn btn-outline">Browse every gallery's stories ↗</a></div></section></main>`}
function archive(id){const s=scenario(id);if(id&&id!=='others'&&!s)return archive();const title=id?(s?s.title:'Others'):'The Complete Archive';return `<main class="container"><section class="page-hero"><div class="eyebrow">${id?'The Galleries / Story collection':'The Galleries / All collections'}</div><h1>${esc(title)}.</h1><p class="muted">${id?'Stories and reasons from this gallery.':'A single place for all the museum’s anonymous stories and the reasons behind them.'}</p><p class="privacy-caption">Public archive: stories appear here only after their authors explicitly publish them. Private and unfinished drafts are never included. Please avoid identifying other people.</p>${storyViewSwitch(id,false)}<div class="category-nav"><a class="pill ${!id?'active':''}" href="#/archive">All stories</a>${SCENARIOS.map(x=>`<a class="pill ${id===x.id?'active':''}" href="#/archive/${x.id}">${esc(x.title)}</a>`).join('')}<a class="pill ${id==='others'?'active':''}" href="#/archive/others">Others</a></div></section><section class="section-compact" style="padding-top:10px"><div class="archive-topbar"><div><span class="eyebrow">THE SHELVES</span><h2>${visibleStories(id).length} published ${visibleStories(id).length===1?'story':'stories'}</h2></div><div class="actions"><a class="btn btn-outline" href="${id&&id!=='others'?`#/experience/${id}`:'#/contribute/others'}">${id&&id!=='others'?'Experience this scene':'Write a story'} ↗</a><a class="btn btn-outline" href="#/my-stories">Manage my drafts</a></div></div>${storyCloudStatus==='error'?'<p class="auth-feedback" role="alert">Public archive not connected yet: '+esc(storyCloudError)+'. The story database setup must be completed first.</p>':''}${storyShelf(id)}<div class="actions"><a class="btn btn-outline" href="${id?`#/gallery/${id}`:'#/galleries'}">← ${id?'Back to this gallery':'Back to galleries'}</a><a class="btn btn-outline" href="#/lookout">Visit the Lookout ✧</a></div></section></main>`}
function contributeOthers(){const previous=compositionDraftId?findLocalStory(compositionDraftId):null;return `<main class="container"><section class="page-hero"><div class="eyebrow">Gallery V · Your untold story</div><h1>Leave your story.</h1><p class="muted">Write at your own pace. Unfinished writing is saved privately on this device; signed-in visitors can also back it up to their accounts after story-cloud setup.</p></section><section class="choice-panel" style="margin-top:0"><form id="other-form"><div class="form-row"><label for="other-category">Which gallery does your story belong to?</label><select id="other-category" class="field" required>${storyCategoryOptions(previous?.scenario||'others')}</select><p class="small muted">Choose the most fitting gallery. You can change this later in Your Story Drafts.</p></div><div class="form-row"><label for="other-title">Story Title</label><input type="text" required maxlength="120" id="other-title" class="field" placeholder="Give your story a title…" value="${esc(previous?.title||'')}"></div><div class="form-row"><label for="other-story">Your Story</label><textarea required id="other-story" class="field" rows="7" maxlength="4000" placeholder="Describe a real experience. Please do not include identifying details about other people.">${esc(previous?.story||'')}</textarea></div><div class="form-row"><label for="other-why">Your Reason</label><textarea required id="other-why" class="field" rows="4" maxlength="2000" placeholder="Why did you choose to remain silent or speak up?">${esc(previous?.why||'')}</textarea></div><label class="choice-option"><input required id="other-consent" type="checkbox"/><span>I understand this starts as a private draft, and will not appear publicly unless I deliberately publish it later.</span></label><p class="draft-save-status small muted" role="status">Typing is saved as a private draft on this device; signed-in drafts also sync to the cloud.</p><div class="toolbar"><a class="btn btn-outline" href="#/gallery/others">← Back</a><button type="submit" class="btn">Save draft &amp; choose visibility ↗</button></div><p class="privacy-caption">After saving, choose anonymous or named publication. Published stories can be read by anyone visiting the website; never identify others without permission.</p></form></section></main>`}
function bindOtherForm(){
 const form=$('#other-form');if(!form)return;
 const read=()=>({id:compositionDraftId||uuid(),scenario:$('#other-category').value,title:$('#other-title').value,story:$('#other-story').value,why:$('#other-why').value,status:'private-draft',time:Date.now(),synced:false,ownerId:authUser?.id||null});
 for(const field of form.querySelectorAll('#other-category,#other-title,#other-story,#other-why')){
  field.addEventListener('input',()=>{if(!compositionDraftId){compositionDraftId=uuid();localStorage.setItem('unsent-active-composition-id',compositionDraftId)}const st=read();const previous=findLocalStory(st.id);if(previous)st.time=previous.time;autosaveDraft(st)});
 }
 form.onsubmit=async e=>{
  e.preventDefault();const st=read();
  st.title=st.title.trim();st.story=st.story.trim();st.why=st.why.trim();
  if(!validStoryCategory(st.scenario)||!st.title||!st.story||!st.why||!$('#other-consent').checked)return;
  addLocalStory(st);
  if(authUser){try{await syncCloudStory(st)}catch(error){storyCloudError='Cloud backup failed: '+error.message}}
  compositionDraftId=null;localStorage.removeItem('unsent-active-composition-id');location.hash='#/edit-story/'+encodeURIComponent(st.id);render(true);
 };
}
function trackExperienceDraft(){
 if(flow.share!=='yes')return;
 if(!flow.draftId)flow.draftId=uuid();
 const old=findLocalStory(flow.draftId);
 const draft={id:flow.draftId,ownerId:authUser?.id||old?.ownerId||null,scenario:validStoryCategory(flow.storyCategory)?flow.storyCategory:flow.scenario,
  title:flow.title||'',story:flow.story||'',why:flow.why||'',status:'private-draft',time:old?.time||Date.now(),synced:false};
 autosaveDraft(draft);
}
function bindComposingInputs(){
 for(const id of ['story-title','story','why']){
  const el=$('#'+id);if(el)el.addEventListener('input',()=>{flow[id==='story-title'?'title':id]=el.value;trackExperienceDraft()});
 }
 const category=$('#story-category');if(category)category.addEventListener('change',()=>{flow.storyCategory=category.value;trackExperienceDraft()});
}
function progress(step){return `<div class="progress">${[0,1,2,3,4].map(i=>`<span class="${step>=i?'done':''}"></span>`).join('')}</div>`}
function experience(id){const s=scenario(id);if(!s)return galleries();if(flow.scenario!==id){flow={scenario:id,step:0,decision:'',reasons:[],other:'',share:'no',title:'',storyCategory:null,story:'',why:'',consent:false,exhibit:false,starMode:'',starName:'',submitted:false}}const stage=flow.step;let inner='';if(stage===0){inner=`<div class="eyebrow">01 · The choice</div><h2>Would you remain silent?</h2><p class="muted">${esc(s.question)}</p>${radio('decision','silent','Yes, I would remain silent.',flow.decision)}${radio('decision','speak','No, I would speak up.',flow.decision)}<div class="toolbar"><span class="small muted">There is no correct answer.</span><button class="btn" id="next" ${!flow.decision?'disabled':''}>Continue ↗</button></div>`}
if(stage===1){let opts=flow.decision==='silent'?s.silent:s.speak;inner=`<div class="eyebrow">02 · The reasons</div><h2>${flow.decision==='silent'?'Why would you remain silent?':'Why would you speak up?'}</h2><p class="muted">Select every reason that fits. Your decision may have more than one cause.</p>${opts.map((o,i)=>check(i,o,flow.reasons.includes(i))).join('')}${check(99,'Other reason — write your own',flow.reasons.includes(99))}${flow.reasons.includes(99)?`<div class="form-row"><label for="other">Your other reason</label><textarea id="other" class="field" maxlength="600" placeholder="Tell us what else matters to you…">${esc(flow.other)}</textarea></div>`:''}<div class="toolbar"><button class="btn btn-outline" id="back">← Back</button><button class="btn" id="next" ${(!flow.reasons.length||(flow.reasons.includes(99)&&!flow.other.trim()))?'disabled':''}>Continue ↗</button></div>`}
if(stage===2){inner=`<div class="eyebrow">03 · Your star</div><h2>How should your star appear?</h2><p class="muted">Your choice and selected reasons will become stars in the shared sky. Choose whether visitors can see a name.</p>${radio('starMode','anonymous','Anonymous · Unnamed Star',flow.starMode)}${radio('starMode','named','With a name · Show the name I choose',flow.starMode)}${flow.starMode==='named'?`<div class="form-row"><label for="star-display-name">Public star name</label><input id="star-display-name" class="field" maxlength="80" value="${esc(flow.starName||'')}" placeholder="Name visitors will see…" /><p class="small muted">Only this name is shown publicly, never your account email or Google name.</p></div>`:''}<p class="privacy-caption">Anonymous stars display “Unnamed Star”. Named stars display your chosen name for the choice and each selected reason. You can change it by answering this gallery again.</p>${!authUser?'<div class="note">Please <a href="#/account">sign in</a> before submitting a shared star.</div>':''}${submitError?`<div class="auth-feedback" role="alert">${esc(submitError)}</div>`:''}<div class="toolbar"><button class="btn btn-outline" id="back">← Back</button><button class="btn" id="next" ${(!flow.starMode||(flow.starMode==='named'&&!flow.starName?.trim()))?'disabled':''}>Save my star ↗</button></div>`}
if(stage===3){inner=`<div class="eyebrow">04 · An invitation</div><h2>Have you been there?</h2><p class="muted">Have you experienced something similar? You can write a private story draft here. Publishing is always a separate decision.</p>${radio('share','no','No, continue without writing.',flow.share)}${radio('share','yes','Yes, I would like to write a story.',flow.share)}${flow.share==='yes'?`<div class="form-row"><label for="story-category">Which gallery does your story belong to?</label><select id="story-category" class="field" required>${storyCategoryOptions(flow.storyCategory||id)}</select><p class="small muted">You can choose a different gallery from this scene, and change it again later in Your Story Drafts.</p></div><div class="form-row"><label for="story-title">Story Title</label><input id="story-title" class="field" type="text" maxlength="120" required placeholder="Give your story a title…" value="${esc(flow.title)}"></div><div class="form-row"><label for="story">Your Story</label><textarea id="story" class="field" rows="5" maxlength="4000" placeholder="What happened? What did you want to say, and what did you choose?">${esc(flow.story)}</textarea></div><div class="form-row"><label for="why">Your Reason</label><textarea id="why" class="field" rows="4" maxlength="2000" placeholder="Why did you stay silent, or decide to speak?">${esc(flow.why)}</textarea></div><label class="choice-option"><input id="consent" type="checkbox" ${flow.consent?'checked':''}/><span>I understand this is a private draft, backed up on this device and to my account when cloud storage is available. It will not be published without a separate confirmation.</span></label>`:''}<p class="draft-save-status small muted" role="status">While you write, your private draft is saved on this device and synced to your account when signed in.</p><p class="privacy-caption">Your choice and reasons are already saved in the shared sky. Your decision to write a story does not affect your stars. Your optional story remains a private draft unless you deliberately publish it. Free-text “other reasons” stay on this device. Avoid identifying or sensitive details.</p>${!authUser?'<div class="note">To contribute a star, please <a class="link-arrow" href="#/account">sign in or create an account</a> first. If you use Google sign-in, please return to this scene afterward and complete your choice again.</div>':''}${submitError?`<div class="auth-feedback" role="alert">${esc(submitError)}</div>`:''}<div class="toolbar"><a class="btn btn-outline" href="#/lookout/${id}">✧ Visit my stars</a><button class="btn" id="next" ${flow.share==='yes'&&(!flow.title.trim()||!flow.story.trim()||!flow.why.trim()||!flow.consent)?'disabled':''}>${flow.share==='yes'?'Save my story ↗':'Continue ↗'}</button></div>`}
if(stage===4){inner=`<div class="eyebrow">05 · Your light</div><h2>A choice becomes a star.</h2><p class="muted">Your choice and selected reasons were saved to the shared museum database. When you answer this gallery again, your previous choice and reason stars are replaced rather than added.</p><div class="actions"><a class="btn" href="#/research/${encodeURIComponent(id)}">Discover what research says ↗</a><a class="btn btn-outline" id="see-gallery-lookout" href="https://zouyushan99-a11y.github.io/the-unsent-museum/lookout.html?v=lookout-direct3#/lookout/${encodeURIComponent(id)}">See this gallery's lookout ↗</a><a class="btn btn-outline" href="#/archive/${id}">Read this gallery's stories ↗</a>${flow.share==='yes'?'<a class="btn btn-outline" href="#/edit-story/${encodeURIComponent(flow.draftId)}">Review &amp; publish my story ↗</a>':''}<button class="btn btn-outline" id="edit-answer">Change my answer ↗</button><a class="btn btn-outline" href="#/galleries">Explore another gallery</a></div>`}
return `<main class="container"><div class="page-hero" style="padding-bottom:0"><div class="eyebrow">Gallery ${s.num} / ${esc(s.title)}</div><h1>Your choice.</h1><p class="muted">One story. Different ways to respond.</p></div><div class="choice-panel">${progress(stage)}${inner}</div>${stage===4?behindSilence(id):''}</main>`}
function radio(name,value,label,selected){return `<label class="choice-option"><input type="radio" name="${name}" value="${esc(value)}" ${selected===value?'checked':''}/><span>${esc(label)}</span></label>`}
function check(value,label,checked){return `<label class="choice-option"><input class="reason-check" type="checkbox" value="${value}" ${checked?'checked':''}/><span>${esc(label)}</span></label>`}
async function saveStoryAfterStar(){
 if(!flow.submitted)return;
 if(flow.share==='yes'){
  if(!flow.title.trim()||!flow.story.trim()||!flow.why.trim()||!flow.consent)return;
  const st={id:flow.draftId||uuid(),scenario:validStoryCategory(flow.storyCategory)?flow.storyCategory:flow.scenario,title:flow.title.trim(),story:flow.story,why:flow.why,time:Date.now(),ownerId:authUser?.id||null,status:'private-draft',synced:false};
  flow.draftId=st.id;addLocalStory(st);
  if(authUser){try{await syncCloudStory(st)}catch(err){storyCloudError='Cloud story backup unavailable: '+String(err.message||err)}}
 }
 flow.step=4;save();render(false);
}
function bindExperience(id){const s=scenario(id);if(!s)return;let $next=$('#next');if(flow.step===0){document.querySelectorAll('input[name=decision]').forEach(el=>el.onchange=()=>{flow.decision=el.value;flow.reasons=[];flow.other='';render(false)})}if(flow.step===1){document.querySelectorAll('.reason-check').forEach(el=>el.onchange=()=>{let n=Number(el.value);flow.reasons=el.checked?[...flow.reasons,n]:flow.reasons.filter(x=>x!==n);if(n===99)flow.other='';render(false)});let o=$('#other');if(o)o.oninput=()=>{flow.other=o.value;$('#next').disabled=!flow.other.trim()||!flow.reasons.length}}if(flow.step===3){document.querySelectorAll('input[name=share]').forEach(el=>el.onchange=()=>{flow.share=el.value;render(false)});const category=$('#story-category');if(category)category.onchange=()=>{flow.storyCategory=category.value;trackExperienceDraft()};['title','story','why'].forEach(id=>{let el=$('#'+(id==='title'?'story-title':id));if(el)el.oninput=()=>{flow[id]=el.value;updateReady();trackExperienceDraft()}});let c=$('#consent');if(c)c.onchange=()=>{flow.consent=c.checked;updateReady()};let ex=$('#exhibit');if(ex)ex.onchange=()=>{flow.exhibit=ex.checked}}
if(flow.step===2){document.querySelectorAll('input[name=starMode]').forEach(el=>el.onchange=()=>{flow.starMode=el.value;submitError='';render(false)});const nameInput=$('#star-display-name');if(nameInput)nameInput.oninput=()=>{flow.starName=nameInput.value;$('#next').disabled=!flow.starName.trim()}}const edit=$('#edit-answer');if(edit)edit.onclick=()=>{flow={scenario:id,step:0,decision:'',reasons:[],other:'',share:'no',title:'',storyCategory:null,story:'',why:'',consent:false,exhibit:false,starMode:'',starName:'',submitted:false};render(false)};const back=$('#back');if(back)back.onclick=()=>{flow.step--;render(false)};if($next)$next.onclick=()=>{if(flow.step===2){submitSharedAnswer();return}if(flow.step===3){saveStoryAfterStar();return}flow.step++;render(false)};function updateReady(){let n=$('#next');if(n)n.disabled=flow.share==='yes'&&(!flow.title.trim()||!flow.story.trim()||!flow.why.trim()||!flow.consent)}}
function results(id){return sharedAnswers.filter(a=>!id||a.scenario===id)}
function reasonData(arr,decision,id){const s=scenario(id);if(!s)return[];let pool=s[decision==='silent'?'silent':'speak'];return pool.map((name,i)=>({name,n:arr.filter(a=>a.decision===decision&&a.reasons.includes(i)).length})).filter(r=>r.n).sort((a,b)=>b.n-a.n)}
function reasonPanel(arr,decision,id){const filtered=arr.filter(a=>a.decision===decision);let items=reasonData(arr,decision,id);const sc=scenario(id);const pool=sc[decision];return `<div class="reason-panel"><h3><span class="dot ${decision==='silent'?'blue':'gold'}"></span>${decision==='silent'?'Why they stayed silent':'Why they spoke up'}</h3><p class="small muted">${filtered.length} response(s) · Multiple choice, so percentages may sum above 100%.</p>${items.length?items.map(item=>{const pct=Math.round(item.n/filtered.length*100);const i=pool.indexOf(item.name);const colour=reasonColour(decision,i);return `<div class="bar-item"><div class="bar-label"><span><i class="reason-colour-dot" style="--reason-colour:${colour}"></i>${esc(item.name)}</span><b>${item.n} · ${pct}%</b></div><div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${colour}"></div></div></div>`}).join(''):'<p class="muted small">No reasons recorded yet.</p>'}</div>`}
// Stable option colours: a colour represents the same reason position within each gallery and decision.
// Van Gogh-inspired palette: ochre, sienna, cypress, cobalt, blue-green and lilac. Stable per reason.
const REASON_COLOURS=['#C47749','#D9A044','#E5C46A','#8F9F65','#579487','#5A9FB0','#5681B1','#7B79B3','#A16C87','#B27B4F','#B7AD6F','#78A69A','#79A5BD','#CAA05A','#987C99','#97A7D1'];
function reasonIndex(decision,number){return (decision==='speak'?8:0)+(Number(number)===99?7:Number(number))}
function reasonColour(decision,number){return REASON_COLOURS[reasonIndex(decision,number)]||'#d6c7b2'}
function reasonStars(arr){const stars=[];for(const a of arr){const sc=scenario(a.scenario);if(!sc)continue;const pool=a.decision==='silent'?sc.silent:sc.speak;const unique=[...new Set(Array.isArray(a.reasons)?a.reasons:[])];for(const n of unique){const label=Number(n)===99?'Other reason':pool[Number(n)];if(!label)continue;stars.push({id:String(a.id)+':'+a.scenario+':'+a.decision+':'+n,colour:reasonColour(a.decision,n),label,scenario:a.scenario,decision:a.decision,authorName:a.authorName||null})}}return stars}
function reasonLegend(arr,id){const s=id?scenario(id):null;const groups=s?[s]:SCENARIOS;return groups.map(sc=>{const parts=['silent','speak'].map(decision=>{const pool=sc[decision];const items=pool.map((name,i)=>({name,n:i})).concat([{name:'Other reason',n:99}]);const observed=reasonStars(arr).filter(x=>x.scenario===sc.id&&x.decision===decision);return '<div class="reason-colour-group"><h4>'+(decision==='silent'?'Reasons for silence':'Reasons for speaking')+'</h4><div class="reason-colour-grid">'+items.filter(item=>observed.some(x=>x.label===item.name)).map(item=>'<div class="reason-colour-item"><i class="reason-colour-dot" style="--reason-colour:'+reasonColour(decision,item.n)+'"></i><span>'+esc(item.name)+'</span></div>').join('')+'</div></div>'}).join('');return '<section class="reason-legend-gallery"><h3>'+esc(sc.title)+'</h3>'+parts+'</section>'}).filter(html=>!id||html).join('')}
// Van Gogh-inspired multi-vortex placement. Brush strokes are decorative; each star still represents a real choice or reason.
const VORTICES=[{x:.22,y:.68,sx:.31,sy:.36,turn:1},{x:.74,y:.31,sx:.30,sy:.34,turn:-1},{x:.52,y:.55,sx:.27,sy:.25,turn:1}];
function starHash(key){let h=2166136261;for(const c of String(key)){h=Math.imul(h^c.charCodeAt(0),16777619)}return h>>>0}
function swirlPoint(w,h,key,group='choice'){const hsh=starHash(key),rand=seededRand(hsh),paletteKey=group==='reason'?String(key).split(':').slice(-2).join(':'):group;const preference=starHash(paletteKey)%VORTICES.length;const pick=rand()<.64?preference:Math.floor(rand()*VORTICES.length);const v=VORTICES[pick];const t=.14+.83*rand();const angle=(2.7*Math.PI*t+rand()*.9+pick*1.23)*v.turn;const radius=.1+.87*t;const jitterX=(rand()-.5)*.055*w,jitterY=(rand()-.5)*.055*h;const x=(v.x+Math.cos(angle)*radius*v.sx)*w+jitterX;const y=(v.y+Math.sin(angle)*radius*v.sy)*h+jitterY;return {x:Math.max(12,Math.min(w-12,x)),y:Math.max(12,Math.min(h-12,y)),r:1.5+rand()*2.1}}
// Stable per-star path on one of the original three painted spiral arms.
// A complete drift takes several minutes; stars fade at the edge before re-entering.
function makeStarFlowTrack(key,group){
 const rand=seededRand(starHash(key));
 const paletteKey=group==='reason'?String(key).split(':').slice(-2).join(':'):group;
 const preferred=starHash(paletteKey)%VORTICES.length;
 const vortex=rand()<.64?preferred:Math.floor(rand()*VORTICES.length);
 const t0=.14+.83*rand();
 const phase=rand()*.9;
 const jitterX=(rand()-.5)*.055,jitterY=(rand()-.5)*.055;
 const radius=1.5+rand()*2.1;
 const pace=seededRand(starHash('flow:'+key));
 return {vortex,t0,phase,jitterX,jitterY,r:radius,flowSpeed:.00115+.0011*pace()};
}
function flowStarPoint(track,w,h,seconds,still=false){
 const v=VORTICES[track.vortex];
 const start=.14,span=.83;
 const t=still?track.t0:start+((track.t0-start+seconds*track.flowSpeed)%span);
 const a=(2.7*Math.PI*t+track.phase+track.vortex*1.23)*v.turn;
 const radius=.1+.87*t;
 const x=(v.x+Math.cos(a)*radius*v.sx+track.jitterX)*w;
 const y=(v.y+Math.sin(a)*radius*v.sy+track.jitterY)*h;
 // Smoothly enter and leave the spiral: no visible jumps when a path loops.
 const edge=still?1:Math.max(0,Math.min(1,(t-start)/.045,(start+span-t)/.045));
 return {x:Math.max(12,Math.min(w-12,x)),y:Math.max(12,Math.min(h-12,y)),edge};
}
function paintSwirlBrushstrokes(ctx,w,h){ctx.save();ctx.lineCap='round';const compact=w<500;const passes=compact?13:22;for(let j=0;j<VORTICES.length;j++){const v=VORTICES[j];for(let k=0;k<passes;k++){const random=seededRand(starHash('brush-'+j+'-'+k));const t0=.15+.68*random(),length=.06+.12*random(),phase=.3+random()*.3;ctx.beginPath();for(let p=0;p<=16;p++){const t=t0+length*p/16;const a=(2.7*Math.PI*t+phase+j*1.23)*v.turn;const radius=.1+.87*t;const x=(v.x+Math.cos(a)*radius*v.sx)*w,y=(v.y+Math.sin(a)*radius*v.sy)*h;if(p===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.strokeStyle=k%5===0?'rgba(194,171,106,.075)':'rgba(70,113,174,.13)';ctx.lineWidth=.6+random()*1.3;ctx.stroke()}}ctx.restore()}
function paintStar(ctx,x,y,r,colour){const glow=ctx.createRadialGradient(x,y,0,x,y,r*9);glow.addColorStop(0,colour+'88');glow.addColorStop(.26,colour+'35');glow.addColorStop(1,colour+'00');ctx.fillStyle=glow;ctx.beginPath();ctx.arc(x,y,r*9,0,Math.PI*2);ctx.fill();ctx.fillStyle=colour;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(255,242,199,.68)';ctx.beginPath();ctx.arc(x,y,Math.max(.5,r*.25),0,Math.PI*2);ctx.fill()}

// Individual-star hit detection for mouse hover and phone/tablet taps.
// Only answers and predefined reason labels are displayed; no email or private free-text.
function starDescription(st){
const name=scenario(st.scenario)?.title||'The Museum';const author=st.authorName||'Unnamed Star';
if(st.kind==='reason')return {gallery:name,title:st.decision==='silent'?'Reason for silence':'Reason for speaking',detail:st.label,author};
return {gallery:name,title:st.decision==='silent'?'Chose to remain silent':'Chose to speak up',detail:st.decision==='silent'?'Silence':'Speak up',author}
}
function closestSkyStar(canvas,clientX,clientY,touch=false){
const rect=canvas.getBoundingClientRect();
const x=clientX-rect.left,y=clientY-rect.top;
let nearest=null,dist=Infinity;
for(const st of canvas._starTargets||[]){const d=Math.hypot(st.x-x,st.y-y);if(d<dist){dist=d;nearest=st}}
return dist<=(touch?(canvas.id==='story-sky-canvas'?30:22):13)?nearest:null
}
function hideStarTooltip(){document.querySelectorAll('.star-info-tooltip').forEach(t=>t.remove())}
function showStarTooltip(st,x,y){
hideStarTooltip();if(!st)return;
const d=starDescription(st);
const t=document.createElement('div');t.className='star-info-tooltip';t.setAttribute('role','status');
t.innerHTML='<small>'+esc(d.gallery)+'</small><strong>'+esc(d.title)+'</strong><span>'+esc(d.detail)+'</span><span class="sky-star-author">✧ '+esc(d.author)+'</span>';
document.body.append(t);
const width=Math.min(300,innerWidth-24);
t.style.maxWidth=width+'px';
const box=t.getBoundingClientRect();
t.style.left=Math.max(12,Math.min(innerWidth-box.width-12,x+16))+'px';
t.style.top=Math.max(12,Math.min(innerHeight-box.height-12,y-box.height-14))+'px'
}
function bindStarInteractions(){
 for(const canvas of document.querySelectorAll('#main-sky,#reason-sky,#immersive-sky-canvas')){
  if(canvas.dataset.starsBound)continue;canvas.dataset.starsBound='true';
  const overlay=canvas.closest('.expandable-sky')?.querySelector('.sky-expand-link');
  const target=overlay||canvas.closest('.immersive-sky-page')||canvas;
  let heldTimer=null,held=false,holdX=0,holdY=0;
  const clearHold=()=>{if(heldTimer){clearTimeout(heldTimer);heldTimer=null}};
  target.addEventListener('pointerdown',ev=>{
   if(ev.target.closest('.immersive-sky-back'))return;
   held=false;holdX=ev.clientX;holdY=ev.clientY;clearHold();
   if(ev.pointerType==='mouse')return;
   heldTimer=setTimeout(()=>{
    heldTimer=null;
    const st=closestSkyStar(canvas,holdX,holdY,true);
    if(st){held=true;showStarTooltip(st,holdX,holdY)}
   },550);
  });
  target.addEventListener('pointermove',ev=>{
   if(ev.pointerType==='touch'||ev.pointerType==='pen'){
     if(Math.hypot(ev.clientX-holdX,ev.clientY-holdY)>12)clearHold();
     return;
   }
   const st=closestSkyStar(canvas,ev.clientX,ev.clientY);
   if(st){showStarTooltip(st,ev.clientX,ev.clientY);target.style.cursor='pointer'}
   else{hideStarTooltip();target.style.cursor=overlay?'zoom-in':'default'}
  });
  target.addEventListener('pointerup',clearHold);
  target.addEventListener('pointercancel',clearHold);
  target.addEventListener('pointerleave',()=>{clearHold();if(!held)hideStarTooltip()});
  target.addEventListener('contextmenu',ev=>{if(held)ev.preventDefault()});
  target.addEventListener('click',ev=>{
   if(ev.target.closest('.immersive-sky-back'))return;
   if(held){ev.preventDefault();held=false;return}
   const st=closestSkyStar(canvas,ev.clientX,ev.clientY,ev.pointerType==='touch');
   if(st){if(overlay)ev.preventDefault();showStarTooltip(st,ev.clientX,ev.clientY)}
   else hideStarTooltip();
  });
 }
}

// Every recorded answer stays in the same place. Only its light changes.
// Cache painted glows instead of rebuilding hundreds of gradients each frame.
const skyAnimationCanvases=new Set();
const starSpriteCache=new Map();
const skyReduceMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)')||{matches:false};
let skyAnimationFrame=0;
let skyLastFrame=0;
function makeStarSprite(colour,radius){
  const radiusStep=Math.round(radius*2)/2;
  const key=colour+':'+radiusStep;
  if(starSpriteCache.has(key))return starSpriteCache.get(key);
  const glow=Math.ceil(radiusStep*9+3),size=glow*2;
  const c=document.createElement('canvas');c.width=size;c.height=size;
  const p=c.getContext('2d');paintStar(p,glow,glow,radiusStep,colour);
  const sprite={canvas:c,glow,size};
  starSpriteCache.set(key,sprite);return sprite;
}
function makeSkyCanvasScene(canvas,arr,kind){
  if(!canvas)return;
  const rect=canvas.getBoundingClientRect();
  const w=Math.max(1,rect.width),h=Math.max(1,rect.height);
  // Resolution is capped on large phones to keep animation and memory responsive.
  const pixels=w*h,dpr=Math.min(window.devicePixelRatio||1,pixels>750000?1.45:1.8);
  canvas.width=Math.max(1,Math.round(w*dpr));canvas.height=Math.max(1,Math.round(h*dpr));
  const backdrop=document.createElement('canvas');backdrop.width=canvas.width;backdrop.height=canvas.height;
  const bg=backdrop.getContext('2d');bg.setTransform(dpr,0,0,dpr,0,0);
  bg.fillStyle='#020510';bg.fillRect(0,0,w,h);
  paintSwirlBrushstrokes(bg,w,h);
  const stars=kind==='reason'?reasonStars(arr).slice(-1400):kind==='story'?arr.slice(-800):arr.slice(-1200);
  const targets=[];
  for(const answer of stars){
    const reason=kind==='reason',id=answer.id;
    const flowTrack=makeStarFlowTrack(id,reason?'reason':kind==='story'?'story':'choice-'+answer.decision);
    const pos=flowStarPoint(flowTrack,w,h,performance.now()/1000,skyReduceMotion.matches);
    const colour=kind==='story'?(STORY_STAR_COLORS[answer.scenario]||'#F0C66C'):reason?answer.colour:(answer.decision==='silent'?'#4F75B5':'#EEC65B');
    const hash=starHash(id),random=seededRand(hash);
    targets.push({...pos,r:flowTrack.r,flowTrack,kind:kind==='story'?'story':reason?'reason':'choice',storyId:kind==='story'?String(answer.id):null,storyTitle:kind==='story'?answer.title:null,storyAuthor:kind==='story'?answer.author_name:null,scenario:answer.scenario,
      decision:answer.decision,authorName:answer.authorName||null,...(reason?{label:answer.label}:{}),
      sprite:makeStarSprite(colour,flowTrack.r),phase:random()*Math.PI*2,
      speed:.48+random()*1.35,secondPhase:random()*Math.PI*2,
      // Each star has its own brightness and rhythm; no synchronized flashing.
      base:.68+random()*.13,amplitude:.14+random()*.14});
  }
  canvas._starTargets=targets;
  canvas._skyScene={backdrop,dpr,w,h,targets,kind};
  // Render immediately, even when reduced motion is enabled.
  renderSkyFrame(canvas,performance.now()/1000);
  if(targets.length&&!skyReduceMotion.matches){
    skyAnimationCanvases.add(canvas);startSkyAnimation();
  }else skyAnimationCanvases.delete(canvas);
}
function renderSkyFrame(canvas,time){
 const scene=canvas._skyScene;if(!scene||!canvas.isConnected)return;
 const ctx=canvas.getContext('2d');if(!ctx)return;
 ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;
 ctx.drawImage(scene.backdrop,0,0);
 ctx.setTransform(scene.dpr,0,0,scene.dpr,0,0);
 for(const st of scene.targets){
   const point=flowStarPoint(st.flowTrack,scene.w,scene.h,time,skyReduceMotion.matches);
   // Hit testing follows the moving stars rather than their initial positions.
   st.x=point.x;st.y=point.y;
   const breathing=Math.sin(time*st.speed+st.phase);
   const glimmer=Math.sin(time*(st.speed*1.93)+st.secondPhase);
   const shimmer=skyReduceMotion.matches?1:Math.max(.42,Math.min(1,st.base+st.amplitude*breathing+.065*glimmer));
   ctx.globalAlpha=shimmer*point.edge;
   ctx.drawImage(st.sprite.canvas,st.x-st.sprite.glow,st.y-st.sprite.glow);
 }
 ctx.globalAlpha=1;
}
function animateSkyFrames(timestamp){
 skyAnimationFrame=0;
 if(document.hidden||skyReduceMotion.matches)return;
 // Around 24 fps is enough for slow twinkling and is gentler on mobile batteries.
 if(timestamp-skyLastFrame<40){startSkyAnimation();return}
 skyLastFrame=timestamp;
 for(const canvas of skyAnimationCanvases){
   if(!canvas.isConnected){skyAnimationCanvases.delete(canvas);continue}
   const bounds=canvas.getBoundingClientRect();
   if(bounds.bottom<0||bounds.top>innerHeight||bounds.width===0||bounds.height===0)continue;
   renderSkyFrame(canvas,timestamp/1000);
 }
 if(skyAnimationCanvases.size)startSkyAnimation();
}
function startSkyAnimation(){
 if(!skyAnimationFrame&&!document.hidden&&!skyReduceMotion.matches&&skyAnimationCanvases.size)
   skyAnimationFrame=requestAnimationFrame(animateSkyFrames);
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)startSkyAnimation()});
skyReduceMotion.addEventListener?.('change',()=>{
 if(skyReduceMotion.matches){
   if(skyAnimationFrame)cancelAnimationFrame(skyAnimationFrame);
   skyAnimationFrame=0;
   for(const canvas of skyAnimationCanvases)renderSkyFrame(canvas,performance.now()/1000);
 }else startSkyAnimation();
});
function drawReasonSky(canvas,arr){makeSkyCanvasScene(canvas,arr,'reason')}
function drawStorySky(){
 const canvas=$('#story-sky-canvas');if(!canvas)return;
 const r=route(),stories=visibleStories(r.id);
 makeSkyCanvasScene(canvas,stories,'story');
}
function storyStarAt(canvas,x,y,touch){
 const st=closestSkyStar(canvas,x,y,touch);
 return st?.kind==='story'?st:null;
}
function showStorySkyPreview(st,x,y,showReadLink=false){
 hideStarTooltip();
 if(!st)return;
 const title=esc(st.storyTitle||'An Unsent Story'),author=esc(st.storyAuthor==='Anonymous'?'Anonymous':st.storyAuthor||'Anonymous');
 const tooltip=document.createElement('div');tooltip.className='star-info-tooltip story-star-tooltip';tooltip.setAttribute('role','status');
 tooltip.innerHTML='<small>AN UNSENT STORY</small><strong>'+title+'</strong><span class="sky-star-author">✧ '+author+'</span>'+
 (showReadLink?'<a href="#/story/'+encodeURIComponent(st.storyId)+'" class="story-tooltip-link">Read story ↗</a>':'');
 document.body.append(tooltip);
 const box=tooltip.getBoundingClientRect(),w=innerWidth,h=innerHeight;
 tooltip.style.left=Math.max(12,Math.min(w-box.width-12,x+16))+'px';
 tooltip.style.top=Math.max(12,Math.min(h-box.height-12,y-box.height-14))+'px';
}
function bindStorySky(){
 const canvas=$('#story-sky-canvas');
 if(!canvas||canvas.dataset.storyBound)return;
 canvas.dataset.storyBound='true';
 let pointerKind='mouse';
 const preview=$('#story-sky-preview');
 const showTouchCard=st=>{
  if(!preview)return;
  preview.hidden=false;
  preview.innerHTML='<div><div class="eyebrow">A STAR YOU FOUND</div><h3>'+esc(st.storyTitle||'An Unsent Story')+'</h3><p class="small muted">By '+esc(st.storyAuthor==='Anonymous'?'Anonymous':st.storyAuthor||'Anonymous')+'</p></div>'+
   '<a class="btn" href="#/story/'+encodeURIComponent(st.storyId)+'">Read this story ↗</a>';
 };
 canvas.addEventListener('pointerdown',ev=>{pointerKind=ev.pointerType||'mouse'});
 canvas.addEventListener('pointermove',ev=>{
  if(ev.pointerType!=='mouse')return;
  const st=storyStarAt(canvas,ev.clientX,ev.clientY,false);
  canvas.style.cursor=st?'pointer':'default';
  if(st)showStorySkyPreview(st,ev.clientX,ev.clientY);
  else hideStarTooltip();
 });
 canvas.addEventListener('pointerleave',()=>hideStarTooltip());
 canvas.addEventListener('click',ev=>{
  const isTouch=pointerKind==='touch'||pointerKind==='pen'||matchMedia('(hover: none)').matches;
  const st=storyStarAt(canvas,ev.clientX,ev.clientY,isTouch);
  if(!st)return;
  if(isTouch){
   hideStarTooltip();
   showTouchCard(st);
  }else{
   location.hash='#/story/'+encodeURIComponent(st.storyId);
  }
 });
}

function legacyStarImportPanel(){if(!db.answers.length)return '';return '<section class="legacy-star-import"><div><strong>Earlier answers on this device</strong><p class="small muted">You have '+db.answers.length+' answer(s) from the older browser-only version. They were not automatically uploaded when the museum switched to shared stars. You can add missing answers without replacing newer cloud entries. Private stories stay here.</p></div>'+(authUser?'<button type="button" class="btn btn-outline" id="import-old-stars" '+(importBusy?'disabled':'')+'>Import earlier stars ↗</button>':'<a class="btn btn-outline" href="#/account">Sign in to import ↗</a>')+(importMessage?'<p class="auth-feedback" role="status">'+esc(importMessage)+'</p>':'')+'</section>'}
function lookout(id){const s=id?scenario(id):null;if(id&&!s)return home();const arr=results(id),sil=arr.filter(a=>a.decision==='silent').length,sp=arr.length-sil,reasonEntries=reasonStars(arr);let pct=(n)=>arr.length?Math.round(n/arr.length*100)+'%':'—';return `<main class="sky-page"><div class="container"><div class="sky-heading"><div class="eyebrow">${s?`Gallery ${s.num} · The Lookout`:'The Observatory'}</div><h1>${s?esc(s.title):'A Sky Made of Choices'}.</h1><p class="muted">${s?'A constellation for this one moment.':'Every gallery has its own sky. This one brings them together.'}</p><p class="small muted">${sharedStatus==='ready'?'Shared museum database · '+arr.length+' visitor response(s)':sharedStatus==='loading'?'Loading the shared museum sky…':'Shared sky temporarily unavailable'}</p>${sharedStatus==='error'?`<div class="note" role="alert">Could not load public star data: ${esc(sharedError)}. <button type="button" class="btn btn-outline" id="retry-stars">Retry</button></div>`:''}</div>${legacyStarImportPanel()}<div class="observatory-section"><h2 class="observatory-title">I. The Choice Sky</h2><p class="small muted">One blue or golden star for each answer about remaining silent or speaking up. Tap or press a star to see its choice and public name, or Unnamed Star for anonymous visitors.</p><div class="sky-frame expandable-sky"><a class="sky-expand-link" href="#/sky/choice/${id||'all'}" aria-label="Open choice sky in full screen"><span class="sky-expand-hint">✧ Enter this sky <span aria-hidden="true">↗</span></span></a><canvas id="main-sky" role="img" aria-label="Starfield of locally recorded silent and speaking choices"></canvas>${arr.length===0?`<div class="sky-empty"><div style="font-size:2.8rem;color:#e8c86c">✧</div><h3>An empty sky, for now.</h3><p>Every response will become a blue or golden star. Nothing has been invented.</p></div>`:''}</div><div class="legend"><span><i class="dot blue"></i>Silence</span><span><i class="dot gold"></i>Speak up</span></div><div class="stats"><div class="stat"><strong>${arr.length}</strong><span>Total scenario responses</span></div><div class="stat"><strong>${pct(sil)}</strong><span>Blue · Silence (${sil})</span></div><div class="stat"><strong>${pct(sp)}</strong><span>Gold · Speak up (${sp})</span></div></div></div><section class="observatory-section reason-observatory"><div class="eyebrow">WHAT LIES BEHIND EACH CHOICE</div><h2 class="observatory-title">II. The Reasons Sky</h2><p class="muted narrow">One star for every reason selected. A visitor who chooses three reasons leaves <strong>three differently coloured stars</strong>. Each reason has its own colour within its gallery.</p><div class="sky-frame reason-sky-frame expandable-sky"><a class="sky-expand-link" href="#/sky/reasons/${id||'all'}" aria-label="Open reasons sky in full screen"><span class="sky-expand-hint">✧ Enter this sky <span aria-hidden="true">↗</span></span></a><canvas id="reason-sky" role="img" aria-label="Multi-colour starfield. One star represents one selected reason."></canvas>${reasonEntries.length===0?`<div class="sky-empty"><div style="font-size:2.8rem;color:#e8c86c">✧</div><h3>Every reason has a colour.</h3><p>When visitors select reasons, their stars will appear here.</p></div>`:''}</div><p class="reason-sky-count"><strong>${reasonEntries.length}</strong> reason star(s) · ${arr.length} answer(s). Multiple selections create multiple stars.</p>${reasonEntries.length?`<details class="reason-colour-legend" ${s?'open':''}><summary>Explore the colours and their meanings</summary><div class="reason-colour-content">${reasonLegend(arr,id)}</div></details>`:''}</section><p class="privacy-caption">The star data is shared anonymously across visitors. Each signed-in account may leave one current answer per gallery. Choice sky: one star per answer. Reasons sky: one star per selected reason. This is a voluntary sample, not a representative survey. Private story drafts stay in your browser.</p>${s?`<div class="reason-panels">${reasonPanel(arr,'silent',id)}${reasonPanel(arr,'speak',id)}</div><div class="actions"><a class="btn btn-outline" href="#/gallery/${id}">Read the story ↗</a><a class="btn btn-outline" href="#/lookout">See the entire sky ↗</a><a class="btn btn-outline" href="#/archive/${id}">Read this room's stories ↗</a></div>`:`<section class="section-compact"><div class="eyebrow">The constellations</div><h2>Find a gallery's sky.</h2><div class="constellations">${SCENARIOS.map(x=>`<a href="#/lookout/${x.id}" class="constellation"><canvas data-mini="${x.id}" aria-hidden="true"></canvas><b>${esc(x.title)}</b><span>${results(x.id).length} local response(s) · View the gallery →</span></a>`).join('')}</div></section>`}<div class="divider"></div><div class="actions"><a class="btn btn-outline" href="#/galleries">Explore the galleries ↗</a><a class="btn btn-outline" href="#/archive">Read all stories ↗</a><a class="btn btn-soft" href="#/my-stories">Your private story drafts ↗</a></div></div></main>`}
function fullSky(kind,id){const s=id&&id!=='all'?scenario(id):null;if(id!=='all'&&!s)return lookout();const reasons=kind==='reasons';const arr=results(id==='all'?undefined:id);return `<main class="immersive-sky-page"><canvas id="immersive-sky-canvas" role="img" aria-label="${reasons?'Reasons starfield':'Choice starfield'}"></canvas><a class="immersive-sky-back" href="#/lookout${s?'/'+s.id:''}" aria-label="Back to the Lookout">← <span>Back to the Lookout</span></a><div class="immersive-sky-caption" aria-hidden="true"><span class="eyebrow">${reasons?'The Reasons Sky':'The Choice Sky'}</span><span class="immersive-count">${reasons?reasonStars(arr).length:arr.length} ${reasons?'reason stars':'choice stars'} · ${s?esc(s.title):'All galleries'}</span></div>${sharedStatus==='loading'?'<div class="immersive-empty"><div>✧</div><p>Gathering stars from the museum…</p></div>':sharedStatus==='error'?'<div class="immersive-empty"><div>✧</div><p>The shared sky is temporarily unavailable.</p></div>':arr.length===0?'<div class="immersive-empty"><div>✧</div><p>An empty sky, for now.</p></div>':''}</main>`}

function privateStories(){
 const stories=db.stories.filter(st=>!st.ownerId||st.ownerId===authUser?.id).slice().sort((a,b)=>(b.updatedAt||b.time||0)-(a.updatedAt||a.time||0));
 const cards=stories.map(st=>{
  const name=esc(st.title||'Untitled draft'),id=esc(st.id),gallery=esc(scenario(st.scenario)?.title||'Others');
  return '<article class="archive-item"><div class="eyebrow">'+gallery+' · '+(st.status==='published'?(storyCloudStatus==='ready'&&publicStories.some(row=>String(row.id)===String(st.id))?'Public story · Verified':'Publication needs verification'):'Private draft')+'</div><h3 class="serif">'+name+'</h3><p class="archive-prose">'+esc(st.story||'Continue writing…')+'</p>'+
   '<div class="actions"><a class="btn btn-outline" href="#/edit-story/'+encodeURIComponent(st.id)+'">Continue / Edit ↗</a><button type="button" class="btn btn-outline delete-story" data-id="'+id+'">Delete story</button></div>'+
   '<p class="small muted">'+(st.synced?'Cloud backup confirmed':'Saved on this device · cloud backup not confirmed')+'</p></article>';
 }).join('');
 return '<main class="container"><section class="page-hero"><div class="eyebrow">YOUR WORDS · STORY LIBRARY</div><h1>Your stories.</h1>'+
 '<p class="muted">Your writing is saved privately on this device as you type. Signed-in drafts can also be backed up to your account once cloud storage is connected. Only stories you deliberately publish are visible to others.</p>'+
 '<p class="small muted">'+(authUser?'Signed in · Cloud backup requires the story database.':'Sign in to sync drafts across devices.')+'</p>'+
 (storyCloudStatus==='error'?'<div class="auth-feedback" role="alert">Story cloud not connected: '+esc(storyCloudError)+'. Private drafts remain on this device until the database is set up.</div>':'')+
 '<div class="actions"><a class="btn btn-outline" href="#/contribute/others">Write another story ↗</a></div></section>'+
 '<section class="section-compact">'+(stories.length?'<div class="archive">'+cards+'</div>':'<div class="empty-state"><div class="symbol">✉</div><h3>No stories yet.</h3><p>As soon as you begin writing, your private draft will be saved here.</p></div>')+'</section></main>';
}
function editStoryPage(id){
 const st=findLocalStory(id);
 if(!st||(st.ownerId&&st.ownerId!==authUser?.id))return '<main class="container"><section class="page-hero"><h1>Story not found.</h1><a class="btn btn-outline" href="#/my-stories">Return to your stories ↗</a></section></main>';
 const named=st.publicationMode==='named',published=st.status==='published';
 return '<main class="container"><section class="page-hero"><div class="eyebrow">YOUR STORY · EDIT AND PUBLISH</div><h1>Every story has a name.</h1>'+
 '<p class="muted">Continue your writing here. Your words stay private until you explicitly decide to share them.</p></section>'+
 '<section class="choice-panel story-editor-panel"><form id="story-edit-form" data-id="'+esc(st.id)+'">'+
 '<div class="form-row"><label for="edit-category">Story gallery</label><select id="edit-category" class="field">'+storyCategoryOptions(st.scenario)+'</select></div>'+
 '<div class="form-row"><label for="edit-title">Story title</label><input id="edit-title" class="field" maxlength="120" value="'+esc(st.title||'')+'" placeholder="Give your story a title…"></div>'+
 '<div class="form-row"><label for="edit-story">Your story</label><textarea id="edit-story" class="field" rows="9" maxlength="4000">'+esc(st.story||'')+'</textarea></div>'+
 '<div class="form-row"><label for="edit-why">Why you chose silence or speaking</label><textarea id="edit-why" class="field" rows="5" maxlength="2000">'+esc(st.why||'')+'</textarea></div>'+
 '<p class="draft-save-status small muted" role="status">'+(st.synced?'Previously backed up to your account cloud.':'Saved locally · cloud backup not confirmed.')+'</p>'+
 '<section class="publication-section"><div class="eyebrow">PUBLICATION · YOUR CHOICE</div><h3>Who can read your story?</h3>'+
 '<p class="small muted">If published, your story can be read by anyone visiting the Story Archive, even people who are not logged in. Someone may save a copy. Unpublished drafts remain private.</p>'+
 '<label class="choice-option"><input type="radio" name="publication-mode" value="anonymous" '+(!named?'checked':'')+'><span><strong>Publish anonymously</strong> · Display “Anonymous” instead of a name</span></label>'+
 '<label class="choice-option"><input type="radio" name="publication-mode" value="named" '+(named?'checked':'')+'><span><strong>Publish with a name</strong> · Display a name I choose</span></label>'+
 '<div class="form-row" id="display-name-row" '+(!named?'hidden':'')+'><label for="edit-display-name">Public display name (not your account name)</label><input id="edit-display-name" class="field" maxlength="80" placeholder="What name should readers see?" value="'+esc(st.displayName||'')+'"></div>'+
 '<label class="choice-option"><input type="checkbox" id="publication-consent"><span><strong>I understand that anyone visiting this website can read my published story.</strong></span></label>'+
 '<p class="small muted">You must check this box each time you publish. Your email and Google profile name are never automatically displayed.</p>'+
 '<div class="actions"><button type="button" class="btn btn-outline" id="save-private-story">Save privately</button>'+
 '<button type="button" class="btn" id="publish-story" '+(!authUser?'disabled':'')+'>'+(published?'Update public story':'Publish for everyone')+' ↗</button>'+
 (published?'<button type="button" class="btn btn-outline" id="unpublish-story">Withdraw from public archive</button>':'')+'</div>'+
 '<p id="edit-story-feedback" class="auth-feedback" role="status">'+(!authUser?'Sign in before publishing; local editing is still available.':'')+'</p></section>'+
 '<div class="actions"><a class="btn btn-outline" href="#/my-stories">← Back to my stories</a></div></form></section></main>';
}
function bindStoryEditor(){
 const form=$('#story-edit-form');if(!form)return;
 const id=form.dataset.id,original=findLocalStory(id);if(!original)return;
 const feedback=msg=>{const el=$('#edit-story-feedback');if(el)el.textContent=msg;setDraftStatus(msg)};
 const read=()=>({
  ...findLocalStory(id),id,scenario:$('#edit-category').value,title:$('#edit-title').value,
  story:$('#edit-story').value,why:$('#edit-why').value,
  publicationMode:document.querySelector('input[name="publication-mode"]:checked')?.value||'anonymous',
  displayName:$('#edit-display-name').value
 });
 const saveNow=async(st)=>{
  st.synced=false;addLocalStory(st);
  if(!authUser){feedback('Saved on this device. Sign in for cloud backup.');return false}
  try{await syncCloudStory(st);feedback('Saved privately to your account cloud.');return true}
  catch(e){feedback('Saved on this device; cloud backup failed: '+String(e.message||e));return false}
 };
 for(const input of form.querySelectorAll('#edit-category,#edit-title,#edit-story,#edit-why,#edit-display-name')){
  input.addEventListener('input',()=>{
   const updated=read();updated.updatedAt=Date.now();updated.synced=false;
   // Editing a public story never silently changes the currently published cloud copy.
   addLocalStory(updated);
   if(updated.status!=='published')queueStorySync(updated);
   setDraftStatus(updated.status==='published'?'Changes saved on this device. Click Update public story to publish them.':'Saved on this device · Syncing private changes…');
  });
 }
 form.querySelectorAll('input[name="publication-mode"]').forEach(input=>input.onchange=()=>{
  $('#display-name-row').hidden=input.value!=='named';
 });
 $('#save-private-story').onclick=async()=>{
  const st=read();st.status='private-draft';st.publicConsent=false;
  const confirmed=await saveNow(st);if(original.status==='published'&&!confirmed){addLocalStory({...original,status:'published'});feedback('Your current public version has NOT been withdrawn. Cloud connection is required to withdraw it.');return}location.hash='#/my-stories';render(true);
 };
 $('#publish-story').onclick=async()=>{
  const st=read();st.title=st.title.trim();st.story=st.story.trim();st.why=st.why.trim();
  if(!authUser){feedback('Sign in before publishing.');return}
  if(!validStoryCategory(st.scenario)||!st.title||!st.story||!st.why){feedback('Complete the title, story and reason before publishing.');return}
  if(st.publicationMode==='named'&&!st.displayName.trim()){feedback('Enter the name you want everyone to see.');return}
  if(!$('#publication-consent').checked){feedback('Check the consent box before publishing.');return}
  if(!confirm('Publish your story so anyone visiting this website can read it?'))return;
  st.displayName=st.publicationMode==='named'?st.displayName.trim():'';
  st.publicConsent=true;st.status='published';
  const button=$('#publish-story');button.disabled=true;
  try{await syncCloudStory(st);await loadPublicStories();if(storyCloudStatus!=='ready'||!publicStories.some(row=>String(row.id)===String(st.id))){throw new Error('The story was saved, but the public archive did not confirm its visibility. Check the Story Cloud Diagnostics page before retrying.')}location.hash='#/my-stories';render(true)}
  catch(e){feedback('Could not publish; your edits remain on this device. '+String(e.message||e));button.disabled=false}
 };
 const withdraw=$('#unpublish-story');
 if(withdraw)withdraw.onclick=async()=>{
  if(!confirm('Withdraw this story from the public archive?'))return;
  const st=read();st.status='private-draft';st.publicConsent=false;
  const done=await saveNow(st);if(!done){addLocalStory({...original,status:'published'});feedback('Withdrawal did not reach the cloud. Your published story is still visible.');return}await loadPublicStories();if(storyCloudStatus!=='ready'||publicStories.some(row=>String(row.id)===String(st.id))){feedback('Cloud save completed, but the public archive has not confirmed withdrawal yet. Please retry or contact the curator.');return}
  location.hash='#/my-stories';render(true);
 };
}
async function deleteStoryFromLibrary(id){
 const st=findLocalStory(id);if(!st)return;
 if(!confirm('Delete this story? If published, it will also be withdrawn from the public archive.'))return;
 if(authUser&&(!st.ownerId||st.ownerId===authUser.id)){
   const {error}=await authClient.from(cloudStoryTable).delete().eq('id',id);
   if(error&&st.status==='published'){alert('Cloud deletion failed; the story may still be public. '+String(error.message||error));return}
 }else if(st.status==='published'){
   alert('Sign in and connect to the cloud before deleting a public story.');return
 }
 cancelPendingStorySync(id);
 db.stories=db.stories.filter(x=>String(x.id)!==String(id));save();
 await loadPublicStories();render(false);
}
function about(){return `<main class="container"><section class="page-hero"><div class="eyebrow">About & Research</div><h1>Behind the silence.</h1></section><section class="section-compact narrow about-copy"><h3>The question</h3><p>Why do people sometimes choose silence, even when they have something to say? This project approaches that question through situated stories, reader choices, and a visual archive of responses.</p><h3>What this first version is</h3><p>This is an interactive museum prototype with a shared choice sky and a story archive that is public only after explicit consent. Its scenario texts are <strong>fictional placeholders</strong>, not the curator's documented personal memories. The final literary journalism piece should replace them with specific, honestly presented nonfiction accounts and grounded research.</p><h3>What the answers show</h3><p>Survey responses here are hypothetical choices submitted by participating visitors. They do not show what participants actually did in real life, establish causation, or represent a general population. The starfield is a metaphorical visualization of recorded answers, with explicit numerical labels alongside it.</p><h3>Research directions</h3><p>Four Behind the Silence research panels now introduce published research on friendship, classroom participation, family communication, and online self-censorship. Read original sources through each panel. Interpretations are labeled separately from direct research results.</p><h3>A note from the curator · Reflective Statement</h3><p><em>To be written by the author.</em> It should address why silence matters to the author, how the scenes were selected and reconstructed, the limits of personal memory, the use of audience responses, and the influence of assigned literary journalism texts (for example Bowles, Krakauer, Márquez, or Capote, where genuinely relevant).</p><h3>Bibliography</h3><p><em>Pending verified sources.</em> No invented citations have been inserted. The final submission should include a carefully checked APA or MLA bibliography, including course readings that genuinely inform the work.</p><div class="actions"><a class="btn" href="#/galleries">Visit the galleries ↗</a><a class="btn btn-outline" href="#/privacy">Read the privacy note ↗</a></div></section></main>`}

function diagnosticsPage(){
 return '<main class="container"><section class="page-hero"><div class="eyebrow">MUSEUM SYSTEM CHECK</div><h1>Data & Access Check.</h1>'+
 '<p class="muted">This page checks whether the museum database can actually return shared stars and published stories. It does not publish your writing or create test records.</p>'+
 '<p class="small muted">Signed-in account: '+(authUser?'Yes':'No')+'. Public shared-data checks work without signing in.</p>'+
 '<div class="actions"><button class="btn" type="button" id="run-system-check">Run checks ↗</button><a class="btn btn-outline" href="#/archive">Public Story Archive</a><a class="btn btn-outline" href="#/lookout">Shared Starfield</a></div></section>'+
 '<section class="section-compact narrow"><div class="diagnostic-results" id="system-check-results" role="status" aria-live="polite"><p>Run the checks to see the database responses. A successful read on this browser does not by itself prove access from another device.</p></div>'+
 '<p class="small muted">Privacy: Only response counts and database errors are shown. Private story content, account identifiers and emails are not displayed here.</p></section></main>';
}
async function runMuseumDiagnostics(){
 const container=$('#system-check-results');if(!container)return;
 container.textContent='Checking live database permissions and public data…';
 const rows=[];
 const check=async(label,fn)=>{
  try{const n=await fn();rows.push({label,ok:true,info:n})}
  catch(e){rows.push({label,ok:false,info:String(e.message||e)})}
 };
 if(!authClient){container.innerHTML='<p role="alert">Supabase client library could not load.</p>';return}
 await check('Shared choice and reason stars (public RPC)',async()=>{
  const {data,error}=await authClient.rpc('get_museum_stars');if(error)throw error;
  if(!Array.isArray(data))throw Error('Unexpected data shape');
  return data.length+' shared answers returned';
 });
 await check('Star identity visibility (public RPC)',async()=>{
  const {data,error}=await authClient.rpc('get_museum_star_attributions');
  if(error)throw error;
  return (Array.isArray(data)?data.length:0)+' stars with opted-in public names';
 });
 await check('Published story archive (public RPC)',async()=>{
  const {data,error}=await authClient.rpc('get_public_museum_stories');if(error)throw error;
  if(!Array.isArray(data))throw Error('Unexpected data shape');
  return data.length+' public stories returned';
 });
 if(authUser)await check('Your private story cloud (author-only read)',async()=>{
  const {data,error}=await authClient.from('museum_stories').select('id').limit(250);
  if(error)throw error;return (data||[]).length+' own stories accessible';
 });
 else rows.push({label:'Your private story cloud',ok:null,info:'Not checked — sign in to test your own private records.'});
 if(authUser)await check('Curator authorization (server RPC)',async()=>{
  const {data,error}=await authClient.rpc('museum_is_curator');
  if(error)throw error;
  return data===true?'This account has curator permissions.':'This account is not a curator.';
 });
 container.innerHTML=rows.map(row=>'<div class="system-check-line"><strong class="'+(row.ok===true?'check-ok':row.ok===false?'check-fail':'')+'">'+
 (row.ok===true?'✓':row.ok===false?'!':'–')+' '+esc(row.label)+'</strong><p>'+esc(row.info)+'</p></div>').join('');
}
function privacy(){return '<main class="container"><section class="page-hero"><div class="eyebrow">Participation & privacy</div><h1>Your words remain yours.</h1></section><section class="section-compact narrow about-copy">'+
'<h3>Private writing and cloud backup</h3><p>Story drafts are saved in this browser while you type. Signed-in visitors can also sync drafts to their private account storage once the Supabase story database has been set up. Until cloud backup is confirmed, drafts may remain on this device only. Anyone with access to this browser profile might be able to see its locally saved drafts.</p>'+
'<h3>When a story becomes public</h3><p>Nothing is published automatically. Publishing requires a completed title, story and reason, choosing Anonymous or a public display name, checking a clear consent box, and confirming publication. After publishing, ANY visitor to the website—including someone who has not logged in—may read your story. Copies may remain outside our control even after withdrawal.</p>'+
'<h3>Anonymous and named stories</h3><p>Anonymous stories display “Anonymous.” Named stories display only the public name you enter; your login email and Google profile name are not automatically shown. Neither user IDs nor emails are returned by the public story archive.</p>'+
'<h3>Your control</h3><p>You can edit private drafts, update a published story, withdraw publication, or delete a story from <a class="link-arrow" href="#/my-stories">Your story library</a>. Withdrawals need a successful cloud connection before the story is removed from the public archive.</p>'+
'<h3>Shared choice stars</h3><p>Signed-in choices and selected predefined reasons contribute anonymously to the shared stars. These are separate from story categories and from publication consent.</p>'+
'<h3>Check database access</h3><p>Use the <a href="#/diagnostics" class="link-arrow">Data & Access Check</a> page to verify whether shared stars and the public archive can be read.</p>'+ '<h3>Safety and moderation</h3><p>Do not include private identifying information about others. The current prototype does not provide comprehensive pre-publication human moderation or guarantee removal of copies kept elsewhere. Broader public launch requires stronger moderation and reporting mechanisms.</p></section></main>'}
function route(){let path=decodeURI(location.hash.slice(1)||'/');if(path.startsWith('/story-sky/'))return{type:'story-sky',id:path.split('/')[2],path};if(path==='/story-sky')return{type:'story-sky',path};if(path.startsWith('/story/'))return{type:'story-detail',id:path.split('/')[2],path};if(path.startsWith('/archive/'))return{type:'archive',id:path.split('/')[2],path};if(path.startsWith('/contribute/'))return{type:'contribute',id:path.split('/')[2],path};if(path.startsWith('/edit-story/'))return{type:'edit-story',id:path.split('/')[2],path};if(path==='/diagnostics')return{type:'diagnostics',path};if(path==='/curator')return{type:'curator',path};if(path==='/history')return{type:'history',path};if(path.startsWith('/history/'))return{type:'history',id:path.split('/')[2],path};if(path==='/research')return{type:'research-index',path};if(path.startsWith('/research/'))return{type:'research',id:path.split('/')[2],path};if(path.startsWith('/experience/'))return{type:'experience',id:path.split('/')[2],path};if(path.startsWith('/gallery/'))return{type:'gallery',id:path.split('/')[2],path};if(path.startsWith('/sky/')){const bits=path.split('/');return {type:'sky',kind:bits[2],id:bits[3]||'all',path}}if(path.startsWith('/lookout/'))return{type:'lookout',id:path.split('/')[2],path};return {type:path.slice(1)||'home',path}}
function render(scroll=true){hideStarTooltip();const r=route(),body=r.type==='home'?home():r.type==='galleries'?galleries():r.type==='gallery'?gallery(r.id):r.type==='experience'?experience(r.id):r.type==='research'?researchPage(r.id):r.type==='research-index'?researchIndex():r.type==='history'?historyPage(r.id):r.type==='archive'?archive(r.id):r.type==='story-sky'?storySkyPage(r.id):r.type==='story-detail'?publicStoryReader(r.id):r.type==='contribute'?contributeOthers():r.type==='edit-story'?editStoryPage(r.id):r.type==='diagnostics'?diagnosticsPage():r.type==='curator'?curatorPage():r.type==='lookout'?lookout(r.id):r.type==='sky'?fullSky(r.kind,r.id):r.type==='about'?about():r.type==='privacy'?privacy():r.type==='my-stories'?privateStories():r.type==='account'?authPage():home();$('#app').innerHTML=r.type==='sky'?body+museumLangControl():header(r.path)+body+footer();document.documentElement.lang=museumLang;museumLocalizeText($('#app'));museumBindLanguage();document.title=(r.type==='gallery'?scenario(r.id)?.title+' · ':r.type==='lookout'?'The Lookout · ':'')+'The Unsent Museum';if(scroll)window.scrollTo(0,0);if(r.type==='history'){
 const search=document.getElementById('history-search');
 const tabs=[...document.querySelectorAll('[data-silence-tab]')];
 let active=HISTORICAL_SILENCES.find(x=>x.id===r.id)?.silenceClass||'withheld';
 const descriptions={withheld:'Words, identities, manuscripts and decisions intentionally kept from an audience.',protective:'Secrecy chosen under threats or strong external pressure: choice under constraint.',suppressed:'People who spoke or protested and were then subjected to imprisonment, forced retraction or execution.'};
 const update=()=>{
 const q=(search?.value||'').trim().toLowerCase();let count=0;
 document.querySelectorAll('.history-card').forEach(card=>{const show=card.getAttribute('data-silence-class')===active&&(card.getAttribute('data-history-search')||'').includes(q);card.hidden=!show;if(show)count++;});
 const status=document.getElementById('history-search-status');if(status)status.textContent=museumLang==='en'?(count+' '+(count===1?'account':'accounts')+' in this wing'):museumConvert('本展厅共有 '+count+' 份符合条件的档案');
 const desc=document.getElementById('history-class-description');if(desc)desc.textContent=descriptions[active];
 tabs.forEach(tab=>{const on=tab.dataset.silenceTab===active;tab.classList.toggle('is-active',on);tab.setAttribute('aria-pressed',String(on));});
 };
 tabs.forEach(tab=>tab.addEventListener('click',()=>{active=tab.dataset.silenceTab;update()}));
 if(search)search.addEventListener('input',update);update();
}
if(r.type==='history')document.querySelectorAll('.history-archive-figure img').forEach(img=>{img.addEventListener('error',()=>{img.closest('.history-photo-link').style.display='none';const fallback=img.closest('.history-archive-figure').querySelector('.history-photo-fallback');if(fallback)fallback.hidden=false},{once:true})});if(r.type==='history')document.querySelectorAll('[data-history-jump]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.historyJump)?.scrollIntoView({behavior:'smooth',block:'start'}));if(r.type==='experience')bindExperience(r.id);if(r.type==='account')bindAuth();if(r.type==='contribute')bindOtherForm();if(r.type==='edit-story')bindStoryEditor();if(r.type==='curator')bindCurator();if(r.type==='diagnostics'){const b=$('#run-system-check');if(b)b.onclick=runMuseumDiagnostics}if(r.type==='sky'){const el=$('#immersive-sky-canvas');if(r.kind==='reasons')drawReasonSky(el,results(r.id==='all'?undefined:r.id));else drawSky(el,results(r.id==='all'?undefined:r.id))}if(r.type==='lookout'){drawAllSkies();const retry=$('#retry-stars');if(retry)retry.onclick=()=>{sharedStatus='loading';refreshSharedAnswers()};const importer=$('#import-old-stars');if(importer)importer.onclick=importLegacyAnswers}if(r.type==='sky'||r.type==='lookout')bindStarInteractions();if(r.type==='story-sky'){drawStorySky();bindStorySky()} if(r.type==='home')drawSky($('#home-sky'),sharedAnswers);if(r.type==='my-stories')document.querySelectorAll('.delete-story').forEach(el=>el.onclick=()=>deleteStoryFromLibrary(el.dataset.id))}

function seededRand(seed){let t=seed+0x6D2B79F5;return()=>{t+=0x6D2B79F5;let x=t;x=Math.imul(x^(x>>>15),x|1);x^=x+Math.imul(x^(x>>>7),x|61);return ((x^(x>>>14))>>>0)/4294967296}}
function drawSky(canvas,arr){makeSkyCanvasScene(canvas,arr,'choice')}
function drawAllSkies(){const r=route();drawSky($('#main-sky'),results(r.id));drawReasonSky($('#reason-sky'),results(r.id));document.querySelectorAll('[data-mini]').forEach(c=>drawSky(c,results(c.dataset.mini)))}
// Redraw canvases at their actual displayed size after phone rotation, iPad split view, and layout changes.
let skyResizeFrame=0;
function redrawVisibleSkies(){if(skyResizeFrame)return;skyResizeFrame=requestAnimationFrame(()=>{skyResizeFrame=0;if($('#main-sky'))drawAllSkies();if($('#home-sky'))drawSky($('#home-sky'),sharedAnswers);if($('#story-sky-canvas'))drawStorySky();const immersive=$('#immersive-sky-canvas');if(immersive){const r=route();const arr=results(r.id==='all'?undefined:r.id);if(r.kind==='reasons')drawReasonSky(immersive,arr);else drawSky(immersive,arr)}})}
window.addEventListener('hashchange',()=>{try{render(true)}catch(e){console.error('Museum navigation error:',e);const app=$('#app');if(app){app.innerHTML='<main class="container" style="padding:70px 0"><h1>We could not open this room.</h1><p class="muted">Please try the link again. The stars and your answers have not been deleted.</p><p class="note">'+esc(String(e.message||e))+'</p><a class="btn" href="https://zouyushan99-a11y.github.io/the-unsent-museum/?v=lookout-repair2#/lookout">Open the Lookout ↗</a></main>'}}});
window.addEventListener('resize',redrawVisibleSkies,{passive:true});
window.addEventListener('orientationchange',redrawVisibleSkies,{passive:true});
if(window.visualViewport)window.visualViewport.addEventListener('resize',redrawVisibleSkies,{passive:true});
if(typeof ResizeObserver!=='undefined'){
const skyLayoutObserver=new ResizeObserver(()=>redrawVisibleSkies());
const observeCanvasBoxes=()=>{document.querySelectorAll('.sky-frame,.preview-sky,.constellation canvas,.immersive-sky-page,.story-sky-frame').forEach(el=>{if(!el.dataset.skyObserved){skyLayoutObserver.observe(el);el.dataset.skyObserved='true'}})};
const originalRender=render;
render=function(scroll=true){originalRender(scroll);observeCanvasBoxes()};
observeCanvasBoxes();
}
render(true);initAuth();refreshSharedAnswers();loadPublicStories();
// Keep every visitor's sky in sync without exposing account or story records.
window.setInterval(()=>{if(!document.hidden)refreshSharedAnswers()},30000);
window.setInterval(()=>{if(!document.hidden&&['archive','story-sky','story-detail'].includes(route().type))loadPublicStories()},45000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&Date.now()-lastSharedSync>12000)refreshSharedAnswers()});
window.addEventListener('focus',()=>{if(Date.now()-lastSharedSync>12000)refreshSharedAnswers()},{passive:true});