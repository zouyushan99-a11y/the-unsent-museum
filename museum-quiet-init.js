/* Curated collection: ordinary life under unequal institutions, no archived protest-led dataset required. */
(function(){
 const old=(window.MUSEUM_COLLECTIVES||[]).find(x=>x.id==='victorian-poor-relief');
 const chosen=(window.MUSEUM_QUIET_EXHIBITS||[]).slice();
 if(old)chosen.push(old);
 const ids=new Set(chosen.map(x=>x.id));
 if(chosen.length!==13||ids.size!==13)throw Error('Expected thirteen distinct collective dossiers.');
 window.MUSEUM_COLLECTIVES=chosen;
 window.MUSEUM_RESISTANCE_ANALYSIS={...(window.MUSEUM_QUIET_ANALYSES||{}),...(old?{'victorian-poor-relief':window.MUSEUM_RESISTANCE_ANALYSIS?.['victorian-poor-relief']}: {})};
 window.MUSEUM_COLLECTIVE_AUDIT=chosen.map(x=>({id:x.id,enWords:x.en.join(' ').trim().split(/\s+/).length,zhChars:(x.zh.join('').match(/[\u3400-\u9fff]/g)||[]).length}));
 window.MUSEUM_QUIET_AUDIT=window.MUSEUM_COLLECTIVE_AUDIT;
})();