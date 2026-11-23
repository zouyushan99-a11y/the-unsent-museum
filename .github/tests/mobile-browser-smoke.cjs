/* Read-only mobile QA: does NOT sign in, submit a star or alter public data. */
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const BASE=process.env.MUSEUM_TEST_BASE||'http://127.0.0.1:8787/';
const cases=[
 {name:'Android phone',viewport:{width:390,height:844},deviceScaleFactor:2.75,isMobile:true,hasTouch:true},
 {name:'iPad/tablet',viewport:{width:820,height:1180},deviceScaleFactor:2,isMobile:true,hasTouch:true},
 {name:'Desktop',viewport:{width:1280,height:800},deviceScaleFactor:1,isMobile:false,hasTouch:false}
];
async function waitSelector(page,sel){await page.locator(sel).first().waitFor({state:'visible',timeout:20000})}
(async()=>{
 let browser;
 try{browser=await chromium.launch({channel:'chrome',headless:true})}
 catch(e){console.warn('System Chrome unavailable; using Playwright Chromium:',e.message.slice(0,150));browser=await chromium.launch({headless:true})}
 try{
 for(const device of cases){
  const context=await browser.newContext({viewport:device.viewport,deviceScaleFactor:device.deviceScaleFactor,isMobile:device.isMobile,hasTouch:device.hasTouch});
  // Keep all checks non-mutating and independent of overseas network access.
  await context.route('https://bmsumzkxyoprpoavgslr.supabase.co/**',route=>route.abort('failed'));
  const page=await context.newPage();
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto(BASE+'#/experience/friendship',{waitUntil:'domcontentloaded',timeout:45000});
  await waitSelector(page,'input[name="decision"][value="silent"]');
  assert.equal(await page.locator('#next').isDisabled(),true,'Decision must be chosen');
  await page.locator('input[name="decision"][value="silent"]').check();
  assert.equal(await page.locator('#next').isEnabled(),true,'Decision enables Continue');
  await page.locator('#next').click();
  await waitSelector(page,'.reason-check[value="0"]');
  assert.equal(await page.locator('#next').isDisabled(),true,'Reasons cannot be skipped');
  await page.locator('.reason-check[value="0"]').check();
  assert.equal(await page.locator('#next').isEnabled(),true,'Reason enables Continue');
  await page.locator('#next').click();
  await waitSelector(page,'input[name="starMode"][value="anonymous"]');
  assert.equal(await page.locator('#next').isDisabled(),true,'Star visibility must be chosen');
  await page.reload({waitUntil:'domcontentloaded'});
  await waitSelector(page,'input[name="starMode"][value="anonymous"]');
  // Closing a tab drops sessionStorage; the local fallback should still recover.
  const anotherTab=await context.newPage();
  await anotherTab.goto(BASE+'#/experience/friendship',{waitUntil:'domcontentloaded',timeout:45000});
  await waitSelector(anotherTab,'input[name="starMode"][value="anonymous"]');
  const result=await anotherTab.evaluate(()=>({hasSong:!!document.querySelector('#museum-music-dock'),
   width:document.documentElement.scrollWidth,viewport:window.innerWidth}));
  assert(result.hasSong,'Persistent music icon should mount');
  assert(result.width<=result.viewport+2,'Page has unintended horizontal overflow: '+result.width+' vs '+result.viewport);
  assert.deepEqual(errors,[],'Unexpected JavaScript error on '+device.name);
  console.log('PASS '+device.name+': decision/reason validation, step recovery across reload/new tab, music icon and viewport');
  await context.close();
 }
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await context.route('https://bmsumzkxyoprpoavgslr.supabase.co/**',route=>route.abort('failed'));
 const page=await context.newPage();
 await page.goto(BASE+'compatibility-check.html',{waitUntil:'domcontentloaded',timeout:25000});
 await waitSelector(page,'#run');
 await page.locator('#run').click();
 await page.waitForFunction(()=>document.querySelectorAll('#results li').length===5,{timeout:20000});
 const rows=await page.locator('#results li').count();
 assert.equal(rows,5,'Device health page must run five checks');
 assert(await page.locator('#copy').isEnabled(),'Copy results must be enabled');
 console.log('PASS standalone mobile diagnostics: all five checks return a result even if Supabase is unavailable');
 await context.close();
 }finally{await browser.close()}
})().catch(err=>{console.error('Browser smoke test FAILED:',err.stack||err);process.exitCode=1});
