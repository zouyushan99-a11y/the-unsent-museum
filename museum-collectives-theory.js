/* Research lenses are modern models, not proof of any undocumented historical person's private thoughts. */
(function(){
 const cases=window.MUSEUM_COLLECTIVES||[];
 const theory=[
 ["Collective action under repressive conditions — research synthesis","https://spssi.onlinelibrary.wiley.com/doi/10.1111/sipr.70000"],
 ["Pluralistic ignorance and the perpetuation of social norms — review","https://www.frontiersin.org/journals/social-psychology/articles/10.3389/frsps.2023.1260896/full"],
 ["Spiral of silence and fear of isolation — theory","https://academic.oup.com/anncom/article-abstract/14/1/256/7828443"]
 ];
 for(const c of cases){
  c.sources=c.sources||[];
  c.sources.push(...theory);
  c.methodEn="The later social-science literature on repression, social norms and perceived efficacy provides possible mechanisms to investigate. These models cannot by themselves prove how a nineteenth- or twentieth-century individual privately understood a decision.";
  c.methodZh="后来的社会科学研究为我们提供了理解风险、社会规范与行动效能的分析视角，但它们不能直接证明某位历史人物当时的真实心声。本馆将理论作为问题的入口，而不是替代个人证词的答案。";
 }
})();
