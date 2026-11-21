/* Real historical imagery: source-aware Wikimedia page-image lookup for exhibits lacking a verified visual.
   No generated or composite photographs. A lead image is linked to its source file;
   for period images it is labelled as contextual, never as proof of a particular event. */
(function(){
"use strict";
const personalTitles={
"franz-kafka":"Franz Kafka","abraham-lincoln":"Abraham Lincoln","anne-lister":"Anne Lister","sophie-germain":"Sophie Germain","fanny-mendelssohn":"Fanny Mendelssohn","eileen-chang":"Eileen Chang",
"anne-frank":"Anne Frank","white-rose":"White Rose","rosa-parks":"Rosa Parks","anna-akhmatova":"Anna Akhmatova","nicolaus-copernicus":"Nicolaus Copernicus","harriet-jacobs":"Harriet Jacobs","emily-dickinson":"Emily Dickinson","alan-turing":"Alan Turing"
};
const groupTitles={
"victorian-domestic-servants":"Domestic worker","colonial-indian-widows":"Widow remarriage","edo-status-communities":"Burakumin","enslaved-households-survival":"Slavery in the United States","joseon-widowhood":"Women in Joseon","rural-china-footbinding":"Foot binding","colonial-java-cultivation":"Cultivation System","black-sharecroppers-debt":"Sharecropping","us-child-factory-workers":"Child labor in the United States","british-pressed-sailors":"Impressment","south-african-migrant-miners":"Mining industry of South Africa","ottoman-levied-boys":"Devshirme","victorian-poor-relief":"Workhouse"
};
const canonical=x=>String(x||"").trim().replace(/\s+/g," ");
const glossary=(window.MUSEUM_NEW_CASES||[]).reduce((acc,c)=>{acc[c.id]=canonical(c.name);return acc},personalTitles);
const existing=new Map();
function routeInfo(){const m=(window.location.hash||"").match(/^#\/(history|collectives)\/([^?&/]+)/);return m?{group:m[1]==="collectives",id:decodeURIComponent(m[2])}:null}
function figure(imgUrl,fileName,subject,group,language){
 const zh=language!=="en";
 const element=document.createElement("figure");element.className="history-archive-figure museum-researched-figure";element.dataset.museumDocumentary="true";
 const link=document.createElement("a");link.href="https://commons.wikimedia.org/wiki/File:"+encodeURIComponent(fileName.replace(/^File:/,""));link.target="_blank";link.rel="noopener noreferrer";link.className="history-photo-link";
 const img=document.createElement("img");img.src=imgUrl;img.alt=zh?"与本档案主题相关的真实馆藏图像，具体年代与授权请查原始图片页":"Real documentary image associated with this subject; inspect original for precise date and rights";img.loading="lazy";img.decoding="async";link.appendChild(img);
 const caption=document.createElement("figcaption");const title=document.createElement("strong");title.textContent=zh?"真实历史图像／相关馆藏":"Real archival or historical image";caption.appendChild(title);
 caption.appendChild(document.createTextNode(zh?" · 资料主题："+subject+"。这张图像不一定拍摄了正文中的特定场景。":" · Related subject: "+subject+". This image is not presented as a photograph of a specific described event."));
 const credit=document.createElement("span");credit.className="history-photo-credit";const a=document.createElement("a");a.href=link.href;a.target="_blank";a.rel="noopener noreferrer";a.textContent=zh?"Wikimedia Commons · 查看原图、年代、作者与使用条款":"Wikimedia Commons · Check original, date, creator and image rights";credit.appendChild(a);caption.appendChild(credit);element.append(link,caption);
 img.addEventListener("error",()=>element.remove(),{once:true});
 return element;
}
function language(){const html=document.documentElement.lang;return html.startsWith("zh")?html:"en"}
async function lookup(subject){
 const url="https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&redirects=1&prop=pageimages&piprop=thumbnail%7Cname&pithumbsize=1000&titles="+encodeURIComponent(subject)+"&origin=*";
 const reply=await fetch(url,{mode:"cors",credentials:"omit"});if(!reply.ok)throw Error("Wikipedia image lookup status "+reply.status);
 const body=await reply.json();const page=(body.query?.pages||[]).find(p=>!p.missing&&p.thumbnail?.source&&p.pageimage);
 if(!page)return null;
 return {url:page.thumbnail.source,file:page.pageimage,subject:page.title};
}
async function hydrate(){
 const r=routeInfo();if(!r)return;
 const article=document.querySelector(r.group?".collective-article":".history-longform");
 if(!article||article.querySelector('[data-museum-documentary="true"]'))return;
 const id=r.id, data=r.group?(window.MUSEUM_COLLECTIVES||[]).find(c=>c.id===id):(window.MUSEUM_HISTORY_LONGFORM||{})[id];
 if(!data)return;
 const story=article.querySelector(r.group?".collective-prose":".history-prose");
 if(!story)return;
 const imgs=story.querySelectorAll("figure.history-archive-figure img");
 if(imgs.length){imgs.forEach(img=>img.addEventListener("error",()=>{img.closest("figure")?.remove();existing.delete(id);hydrate()},{once:true}));return}
 if(existing.get(id)==="loading")return;
 const subject=r.group?groupTitles[id]:(glossary[id]||id.replaceAll("-"," "));
 if(!subject)return;
 existing.set(id,"loading");
 try{
  const result=await lookup(subject);
  if(!result){existing.set(id,"unavailable");return}
  const current=routeInfo();if(!current||current.id!==id||current.group!==r.group)return;
  const target=document.querySelector(r.group?".collective-article .collective-prose":".history-longform .history-prose");
  if(target&&!target.querySelector("figure.history-archive-figure"))target.prepend(figure(result.url,result.file,result.subject,r.group,language()));
  existing.set(id,"loaded");
 }catch(e){existing.set(id,"unavailable");}
}
function ready(){
 const root=document.getElementById("app");if(root){const observer=new MutationObserver(records=>{if(records.some(r=>r.target===root))hydrate()});observer.observe(root,{childList:true});}
 window.addEventListener("hashchange",()=>hydrate());
 hydrate();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ready,{once:true});else ready();
})();