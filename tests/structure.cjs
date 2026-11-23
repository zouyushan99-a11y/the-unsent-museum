/* Regression guard for archive loading, public/privacy boundaries and navigation.
 * This test is deterministic and does not need a Supabase login. */
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const get=file=>fs.readFileSync(path.join(root,file),'utf8');
const html=get('index.html');
const app=get('app.js');
const files=[...html.matchAll(/<script(?:\s+[^>]*?)?\s+src="([^"]+)"/g)].map(x=>x[1].split('?')[0]);
assert.equal(files.length,new Set(files).size,'Duplicate script included on homepage');
assert(files.length<=16,'Regression: excessive eager scripts');
for(const file of files)assert(fs.existsSync(path.join(root,file)),'Missing script: '+file);
for(const file of files)if(!file.startsWith('vendor/'))new Function(get(file));
assert(files.includes('bundles/history-catalog-light.js'),'Index must load before history');
assert(files.includes('bundles/global-i18n-patches.js'),'Translations must load before history');
for(const prefix of ['bundles/history-core-','bundles/history-readings-','bundles/collective-archive-','bundles/collective-context']){
 assert(!files.some(f=>f.startsWith(prefix)),'Full archive eagerly loaded: '+prefix);
}
const catalog={};new Function('window',get('bundles/history-catalog-light.js'))(catalog);
assert.equal(catalog.MUSEUM_NEW_CASES.length,33,'Navigation catalog changed');
assert(app.includes("r.type==='history'&&museumPersonalLoadedFiles.size"),'Personal history loading guard missing');
assert(app.includes("r.type==='collective'&&museumCollectiveLoadedFiles.size"),'Collective history loading guard missing');
assert(app.includes('museumNetworkLimit(authClient.rpc(\'get_public_museum_stories_i18n\'),12000)'), 'Public story timeout must stay enabled');
assert(app.includes('if(museumPublicStoriesLoading)return museumPublicStoriesLoading'),'Concurrent public-story reads must be deduplicated');
assert(app.includes("if(submitBusy)return"),'Star submissions must guard double clicks');
assert(app.includes("Your answer was saved, but it could not be confirmed"),'Star confirmation state must be explicit');
assert(app.includes("status:'private-draft'"),'Story drafts must be private by default');
assert(app.includes("publicConsent")&&app.includes("publicationMode"),'Story publication privacy controls missing');
assert(app.includes('museum-reading-trail'),'Gallery connections disappeared');
const images=get('museum-researched-images.js');
assert(images.includes('img.loading="lazy"'),'Archival images must lazy load');
assert(images.includes('imageWidth()'),'Responsive archival image sizing missing');
const serif=get('museum-zh-typography.css');
assert(!serif.includes('family=family='),'Invalid font URL');
const research=get('museum-research-atlas.js');
const links=[...research.matchAll(/https:\/\/[^'"\\s)]+/g)].map(match=>match[0]);
assert(links.length>=35,'Research source index unexpectedly lost references');
assert.equal(links.length,new Set(links).size,'Duplicate reference URL in research source list');
for(const value of links){
 const parsed=new URL(value);
 assert.equal(parsed.protocol,'https:','Research reference must use HTTPS');
 assert(!/example\.(org|com)|placeholder|undefined/i.test(value),'Invalid placeholder reference');
}
console.log('Structure, navigation, performance and publication safety checks passed. Research links: '+links.length+'; homepage scripts: '+files.length);
