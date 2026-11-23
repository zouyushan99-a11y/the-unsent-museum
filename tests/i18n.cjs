const fs=require('fs'),path=require('path'),{JSDOM}=require('jsdom');
const dir=path.resolve(__dirname,'..');
const entry=fs.readFileSync(dir+'/index.html','utf8');
if(entry.indexOf('src="museum-feedback.js')>entry.indexOf('src="app.js'))throw Error('About/Feedback templates must load before app initial render');
const dom=new JSDOM('<div id="app"></div>',{url:'https://example.org/',runScripts:'outside-only',pretendToBeVisual:true});
const w=dom.window;w.eval=code=>require('vm').runInContext(code,dom.getInternalVMContext());w.OpenCC=require('opencc-js');w.testClient={};w.supabase={createClient:()=>w.testClient};w.scrollTo=()=>{};w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({measureText:()=>({width:10}),createRadialGradient:()=>({addColorStop(){}})}, {get:(t,k)=>t[k]||(()=>{})});w.ResizeObserver=undefined;
for(const m of fs.readFileSync(dir+'/index.html','utf8').matchAll(/<script defer src="([^?" ]+)/g)){
 const file=m[1];if(file.startsWith('https:')||file==='museum-researched-images.js')continue;
 let code=fs.readFileSync(dir+'/'+file,'utf8');if(file==='app.js')code=code.slice(0,code.indexOf('render(true);initAuth();'));
 try{w.eval(code)}catch(e){throw new Error('Error evaluating '+file+': '+e.message,{cause:e})}
}
// The production site intentionally defers large archives until a visitor enters.
// This route-rendering suite explicitly supplies those assets in their original order,
// then marks the loaders ready. Keep a separate assertion that the entry HTML does not
// eagerly fetch these large bundles.
const historicalAssets=w.eval('MUSEUM_PERSONAL_HISTORY_ASSETS.slice()');
const collectiveAssets=w.eval('MUSEUM_COLLECTIVE_ASSETS.slice()');
const researchAssets=w.eval('MUSEUM_RESEARCH_ASSETS.js.slice()');
const loadFixture=(url)=>{
 const file=url.split('?')[0];
 if(!fs.existsSync(path.join(dir,file)))throw Error('Required test fixture missing: '+file);
 w.eval(fs.readFileSync(path.join(dir,file),'utf8'));
};
const assert=require('node:assert/strict');
assert(!entry.includes('src="bundles/history-core-1.js'), 'History files must be lazy');
assert(!entry.includes('src="bundles/collective-archive-1.js'), 'Collective files must be lazy');
assert.equal(w.eval('MUSEUM_NEW_CASES.length'),33,'Navigation catalog must be available before archive loading');
assert.equal(Object.keys(w.MUSEUM_HISTORY_LONGFORM||{}).length,0,'The personal archive must not load on the homepage');
assert.equal((w.MUSEUM_COLLECTIVES||[]).length,0,'The collective archive must not load on the homepage');
// The longform initializer re-adds full candidate records; remove catalog stubs once.
w.eval('window.MUSEUM_NEW_CASES=[]');
historicalAssets.forEach(loadFixture);
collectiveAssets.forEach(loadFixture);
researchAssets.forEach(loadFixture);
w.eval('MUSEUM_PERSONAL_HISTORY_ASSETS.forEach(x=>museumPersonalLoadedFiles.add(x))');
w.eval('MUSEUM_COLLECTIVE_ASSETS.forEach(x=>museumCollectiveLoadedFiles.add(x))');
assert.equal(Object.keys(w.MUSEUM_HISTORY_LONGFORM||{}).length,69);
assert.equal(Object.keys(w.MUSEUM_HISTORY_ZH||{}).length,69);
assert.equal(w.MUSEUM_COLLECTIVES.length,20);
assert(w.MUSEUM_RESEARCH_ATLAS,'Research atlas must initialize for route tests');
const routes=w.eval("['/','/galleries','/archive','/lookout','/research','/about','/privacy','/account','/feedback','/my-stories','/story-sky','/contribute/others','/diagnostics','/curator','/curator-feedback',...SCENARIOS.flatMap(s=>['/gallery/'+s.id,'/experience/'+s.id,'/research/'+s.id]),'/gallery/others','/archive/others',...SCENARIOS.map(s=>'/archive/'+s.id),...HISTORICAL_SILENCES.map(x=>'/history/'+x.id),...window.MUSEUM_COLLECTIVES.map(x=>'/collectives/'+x.id)]");
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
 w.eval("museumLang='zh-Hant'");
 const translated=w.eval("localizeVisitorStory({original_language:'zh-Hans',translation_status:'ready',translations:{'zh-Hant':{title:'这个故事',story:'这个故事',why:'这个原因'}}})");
 assert.equal(translated.title,w.museumConvertPublic('这个故事'));
 const original=w.eval("localizeVisitorStory({original_language:'zh-Hant',translation_status:'ready',translations:{'zh-Hant':{title:'作者原稿',story:'作者原稿',why:'作者原稿'}}})");
 assert.equal(original.title,'作者原稿');
 const status=w.document.getElementById('feedback-status');status.textContent='Gathering the stories…';await new Promise(r=>setTimeout(r,0));
 assert.equal(status.textContent,w.museumConvertPublic('正在汇集故事……'));
 console.log(`${checked} three-language route renders passed; form preservation, failure/success recovery, and asynchronous localization passed.`);
 w.close();
})().catch(error=>{console.error(error);w.close();process.exitCode=1});
