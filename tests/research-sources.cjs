/* Bibliography and comparison regression tests: no visitor data or DOM required. */
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const read=x=>fs.readFileSync(path.join(root,x),'utf8');
const atlas=read('museum-research-atlas.js');
const match=atlas.match(/const raws=(\[[\s\S]*?\n\]);/);
assert(match,'Research index must contain the published bibliography');
const raws=new Function('return '+match[1])();
assert.equal(raws.length,36,'Research index must retain all 36 sources');
const world={};
const modules=['museum-research-five.js','museum-research-second-five.js','museum-research-third-a.js','museum-research-third-b.js','museum-research-final-a.js','museum-research-final-b.js'];
for(const file of modules)new Function('window',read(file))(world);
const papers=Object.values(world).flatMap(group=>Object.values(group)).filter(x=>/^R\d\d$/.test(x?.id||''));
assert.equal(papers.length,36,'Each source must have one research dossier');
const byId=new Map(papers.map(p=>[p.id,p]));
assert.equal(byId.size,36,'Research IDs must be unique');
for(let i=0;i<raws.length;i++){
 const id='R'+String(i+1).padStart(2,'0'),p=byId.get(id),r=raws[i];
 assert(p,'Missing dossier '+id);
 assert(p.stage&&p.citation&&p.source,'Missing audit metadata '+id);
 assert(r[0]&&r[1]&&r[2]&&r[3],'Missing bibliography data '+id);
 assert.equal(new URL(r[3]).protocol,'https:');
 assert.equal(new URL(p.source).protocol,'https:');
 const d=String(p.source).match(/doi\.org\/(.+)$/i);
 if(d)assert(p.citation.toLowerCase().includes(decodeURIComponent(d[1]).toLowerCase()),'Citation DOI differs from dossier: '+id);
}
assert.equal(raws[6][3],byId.get('R07').source,'Flynn & Lake must cite the actual 2008 article DOI');
assert.equal(raws[32][3],'https://www.cscsarchive.org/dataarchive/otherfiles/PhD0010003','Spivak index must cite the 1988 edition rather than an unrelated JSTOR item');
assert.equal(byId.get('R33').source,raws[32][3],'Spivak bibliography and original archival record must agree');
const comparison=read('museum-research-ivory-gallery.js');
const essays=[...comparison.matchAll(/ids:\[([^\]]+)\]/g)].map(m=>[...m[1].matchAll(/'R\d\d'/g)].map(x=>x[0].slice(1,-1)));
assert.equal(essays.length,8,'Preserve eight comparative essays');
for(const refs of essays){assert(refs.length>=3);for(const id of refs)assert(byId.has(id),'Comparative essay cites unknown '+id)}
console.log('Research bibliography passed: 36 dossiers, 8 comparative analyses, original-source identity guards.');
