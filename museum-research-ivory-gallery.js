/* Dedicated museum-study section classes: keep research content untouched. */
(function(){
 "use strict";
 const atlas=window.MUSEUM_RESEARCH_ATLAS;
 if(!atlas||typeof atlas.page!=="function")return;
 const original=atlas.page;
 atlas.page=function(id){
   let html=original.call(this,id);
   if(typeof id!=="string"||!id.startsWith("study/")||typeof html!=="string"||!html.includes('atlas-deep'))return html;
   html=html.replace(/<section class="atlas-panel">(?=<span class="eyebrow">(?:SOURCE AUDIT|来源核对))/,'<section class="atlas-panel atlas-verification-plate">');
   html=html.replace(/<section class="atlas-panel">(?=<h2>(?:Research Connections|研究关联)<\/h2>)/,'<section class="atlas-panel atlas-connections-gallery">');
   return html;
 };
})();
