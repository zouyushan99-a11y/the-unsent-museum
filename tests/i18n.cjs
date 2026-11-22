const fs=require('fs'),path=require('path'),{JSDOM}=require('jsdom');
const dir=path.resolve(__dirname,'..');
const dom=new JSDOM('<div id="app"></div>',{url:'https://example.org/',runScripts:'outside-only',pretendToBeVisual:true});
const w=dom.window;w.eval=code=>require('vm').runInContext(code,dom.getInternalVMContext());w.OpenCC=require('opencc-js');w.testClient={};w.supabase={createClient:()=>w.testClient};w.scrollTo=()=>{};w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({measureText:()=>({width:10}),createRadialGradient:()=>({addColorStop(){}})}, {get:(t,k)=>t[k]||(()=>{})});w.ResizeObserver=undefined;
for(const m of fs.readFileSync(dir+'/index.html','utf8').matchAll(/<script defer src="([^?" ]+)/g)){
 const file=m[1];if(file.startsWith('https:')||file==='museum-researched-images.js')continue;
 let code=fs.readFileSync(dir+'/'+file,'utf8');if(file==='app.js')code=code.slice(0,code.indexOf('render(true);initAuth();'));
 try{w.eval(code)}catch(e){console.error(file,e.message)}
}
const routes=w.eval("['/','/galleries','/archive','/lookout','/research','/about','/privacy','/account','/feedback','/my-stories','/story-sky','/contribute/others','/diagnostics','/curator','/curator-feedback',...SCENARIOS.flatMap(s=>['/gallery/'+s.id,'/experience/'+s.id,'/research/'+s.id]),'/gallery/others','/archive/others',...SCENARIOS.map(s=>'/archive/'+s.id),...HISTORICAL_SILENCES.map(x=>'/history/'+x.id),...window.MUSEUM_COLLECTIVES.map(x=>'/collectives/'+x.id)]");
const assert=require('node:assert/strict');
assert.equal(w.eval('HISTORICAL_SILENCES.length'),69);
assert.equal(w.MUSEUM_COLLECTIVES.length,20);
let checked=0;
for(const lang of ['en','zh-Hans','zh-Hant']){
 w.eval(`museumLang=${JSON.stringify(lang)}`);
 for(const route of routes){
  w.history.replaceState(null,'','#'+route);w.eval('render(false)');
  assert.equal(w.document.documentElement.lang,lang);
  if(route.startsWith('/history/')){
   assert(w.document.querySelector('.history-longform'));
   assert(w.document.querySelectorAll('.history-prose-paragraph').length>0);
   assert.equal(w.document.querySelectorAll('.history-curator-paragraph').length,4);
   assert.equal(w.document.querySelectorAll('.history-curator-questions li').length,3);
   assert(w.document.querySelector('.history-curator-questions').textContent.trim());
   assert(w.document.querySelectorAll('#history-evidence a').length);
  }
  if(route.startsWith('/collectives/')){
   assert(w.document.querySelector('.collective-article'));
   assert(w.document.querySelectorAll('.collective-prose>p').length>0);
   assert(w.document.querySelectorAll('.collective-factor').length>0);
   assert(w.document.querySelectorAll('.collective-references a').length);
  }
  if(lang!=='en'){
   const walker=w.document.createTreeWalker(w.document.getElementById('app'),w.NodeFilter.SHOW_TEXT);let n;
   while(n=walker.nextNode()){
    const el=n.parentElement;if(el.closest('[data-original-language],[data-visitor-story],textarea,script,style'))continue;
    const text=n.textContent.trim();
    // Explicit citations, formal platform names, and explained historical/scientific terms.
    if(/原题|原題|GitHub|Afifi & Guerrero|Koerner & Fitzpatrick|Das & Kramer|Scientific Reports|Rowe|Smetana|Facebook|Twitter|DNA|merchet|A\. M\./.test(text))continue;
    assert(!/[a-zA-Z]{3}/.test(text),`${lang} ${route}: ${text}`);
   }
  }
  checked++;
 }
}
(async()=>{
 w.history.replaceState(null,'','#/feedback');w.eval("museumLang='zh-Hans';render(false)");
 w.document.getElementById('feedback-message').value='Visitor-authored text stays unchanged.';
 const select=w.document.getElementById('museum-language');select.value='zh-Hant';select.dispatchEvent(new w.Event('change'));
 assert.equal(w.document.getElementById('feedback-message').value,'Visitor-authored text stays unchanged.');
 assert.match(w.document.querySelector('header').textContent,/繁體中文/);
 assert.match(w.document.querySelector('header').textContent,/登入/);
 const form=w.document.getElementById('museum-feedback-form');
 w.eval("authClient.from=()=>({insert:async()=>({error:{code:'42501',message:'permission denied'}})})");
 form.dispatchEvent(new w.Event('submit',{cancelable:true}));await new Promise(r=>setTimeout(r,0));
 assert.match(w.document.getElementById('feedback-status').textContent,/未能成功/);
 assert.equal(w.document.getElementById('feedback-message').value,'Visitor-authored text stays unchanged.');
 assert.equal(w.document.getElementById('feedback-submit').disabled,false);
 w.eval("authClient.from=()=>({insert:async()=>({error:null})})");
 form.dispatchEvent(new w.Event('submit',{cancelable:true}));await new Promise(r=>setTimeout(r,0));
 assert.match(w.document.getElementById('feedback-status').textContent,/成功保存/);
 assert.equal(w.document.getElementById('feedback-message').value,'');
 const status=w.document.getElementById('feedback-status');status.textContent='Gathering the stories…';await new Promise(r=>setTimeout(r,0));
 assert.equal(status.textContent,w.museumConvertPublic('正在汇集故事……'));
 console.log(`${checked} three-language route renders passed; form preservation, failure/success recovery, and asynchronous localization passed.`);
 w.close();
})().catch(error=>{console.error(error);w.close();process.exitCode=1});
