/* Curatorial narrative engine. Does not invent dialogue or inner thoughts. */
window.MUSEUM_NEW_CASES = window.MUSEUM_NEW_CASES || [];
window.MUSEUM_NEW_ADD = function(items){ window.MUSEUM_NEW_CASES.push(...items); };
window.MUSEUM_NEW_BUILD = function() {
 const all = window.MUSEUM_NEW_CASES || [];
 const EN=window.MUSEUM_HISTORY_LONGFORM=window.MUSEUM_HISTORY_LONGFORM||{};
 const ZH=window.MUSEUM_HISTORY_ZH=window.MUSEUM_HISTORY_ZH||{};
 const LABELS=window.MUSEUM_HISTORY_LABELS=window.MUSEUM_HISTORY_LABELS||{};
 const I18N=window.MUSEUM_I18N?.zh||{};
 function enStory(c) {
   const p=c.en, name=c.name, artifact=c.artifact, t=c.type, place=c.place;
   const story=[
    p[0],
    p[1],
    `A visitor who arrives at ${place} through this exhibit first encounters a question of access. ${name} did not live inside a museum label. There were other tasks to perform, other relationships to maintain, and an ordinary world that continued while the decision represented here was being made. We know the outcome because a material trace has survived: ${artifact}. The trace matters precisely because it is smaller than a human life. It gives us a dated and interpretable object, not permission to invent the private conversation that might have surrounded it. The difference between a documented event and a dramatic reconstruction is one of the ethical foundations of this gallery.`,
    p[2],
    `The first silence in this account is not necessarily an absence of language. Words may have been written, copied, read by a few people, circulated under a substitute name, or withheld from publication while their author continued to work. The meaningful question is therefore not simply whether ${name} spoke. It is who could receive the words, when that audience was admitted, and who was able to change the conditions of reception. A signature, an envelope, a printer's imprint, or an editorial qualification can look insignificant beside a famous life. In the history of expression, these modest objects are often where the boundary of a person's public identity is negotiated.`,
    p[3],
    `The surrounding society did not supply a neutral stage. Reputation, institutions, law, professional authority, and the uneven distribution of security all shaped what publication could cost. Yet pressure and personal intention must not be treated as interchangeable. Someone can make a deliberate decision in circumstances they did not choose; conversely, a later historian can identify a restriction without knowing exactly how the person felt about it. Calling this case ${t} is an archival description, not a diagnosis. The museum is interested in the relation between the surviving act and the larger public that might have received a different version of events.`,
    p[4],
    `There is a temptation to write the missing scene as though the camera were present: a final look at the page, a decisive movement of the hand, a sentence said to an absent friend. This exhibit refuses that convenience. A surviving publication, manuscript, letter, or later recollection must be described according to what it can actually establish. Where contemporaneous documents and retrospective accounts differ in strength, that difference belongs inside the story rather than in a small apologetic footnote. We should not make uncertainty disappear merely because certainty would make a more satisfying ending. A factual narrative earns its emotional force by allowing some doors to stay closed.`,
    p[5],
    `Time changes the object. The audience for ${artifact} may have become much larger or much smaller than the author imagined. Editors can publish what had been private; institutions can preserve what was nearly lost; readers can mistake a carefully limited act of disclosure for an invitation to know everything. The modern existence of a document cannot be used to prove that the person wished it to circulate in exactly this form. The exhibit therefore ends with a double responsibility: acknowledge what the record reveals, and acknowledge the choice, prohibition, delay, or loss that also belongs to its history. We can read the remaining words without claiming ownership over all the words that did not reach us.`
   ];
   const passages=[
    `The chronology is worth following slowly. In ${c.year}, the act described here took place within the social and professional world of ${place}. That world existed before the pivotal object was made, and it continued after it. The event can be placed on a timeline; a historian can also examine the institutions, technologies, and expectations that made it consequential. Such a reconstruction is different from putting invented words in the person's mouth. We can make the circumstances legible by explaining their material conditions, rather than borrowing the authority of a witness we do not possess. ${p[1]}`,
    `Consider the audience that was not immediately allowed to know everything. In this case, the potential readers included ${c.audienceEn}. Their access could be widened or narrowed by publication, delivery, naming and the preservation of records. A modern reader might assume that every compelling statement naturally seeks an unlimited audience, but that assumption belongs to our expectations, not automatically to the historical actor. ${name} had to work with the means of communication available in that period, where even ordinary distribution depended on other people and institutions. The distinction between an imaginable public and an actual public is the quiet tension running through this exhibit.`,
    `The surviving evidence should be approached in layers. First there is the artifact itself, ${artifact}, which fixes at least part of the historical action. Then there is a wider frame built from correspondence, institutional catalogues, later editions, or scholarly interpretation. These layers can corroborate one another, but they cannot always answer the same questions. An item can establish a date without establishing an emotion; it can preserve a title page without recording what an unknown reader believed. The safest sentence is not necessarily the shortest. Sometimes the responsible way to write a life is to state exactly where a document stops speaking and where interpretation begins.`,
    `Return at last to the act of reading. We stand at a different point in history from those who first faced ${c.enTitle.toLowerCase()}. We know some later outcomes that the people involved could not know in advance. That hindsight is useful, but it can also turn uncertain choices into inevitable steps toward a famous future. Here the goal is to recover the decision as a decision: it was made under limits, with incomplete knowledge of its consequences, and with other possible readers left outside the door. What remains of the record deserves close attention. What does not remain deserves equally careful restraint. The archive is not a license to pronounce the last word on another person's private life.`
   ];
   story.splice(3,0,passages[0]);
   story.splice(6,0,passages[1]);
   story.splice(9,0,passages[2]);
   story.splice(12,0,passages[3]);
   return story;
 }
 function zhStory(c){
  const p=c.zh,n=c.cnName,a=c.cnArtifact,place=c.cnPlace,t=c.cnType;
  return [
   p[0],p[1],
   `循着这份展品来到${place}，我们最先看见的，往往不是一个完整的人，而是一件留下来的东西：${a}。它看起来可能很小：一张纸，一处署名，一项关于出版的安排，或者一次没有发生的交付。但这件东西背后有正在继续的生活，有需要顾及的人际关系，也有并不听命于个人的时代。若只把${n}写成一个作出惊人决定的名字，便会让那些具体的日常再次消失。历史非虚构的工作，是让读者逐渐明白这个决定为什么会在这样的环境里发生，同时不把无法证实的场景冒充亲眼所见。`,
   p[2],
   `这里的沉默首先不是没有语言。文字可能已经写成，却只在少数人之间传递；作品可能公开面世，却没有交出作者真实的姓名；研究可能已经得到结果，却在出版时被加上谨慎的保留。真正值得追问的是，谁有资格阅读，谁能够决定什么时候发表，谁又承担那些决定的后果。在一部宏大的生平里，这种差别常常只占一页纸，但它恰好显露出私人与公众之间那道细细的门槛。读者所面对的并非一个简单的『勇敢』或『胆怯』的故事，而是一段不断改变边界的关系。`,
   p[3],
   `我们也不能把时代想象成一幅静止的背景画。制度、宗教、社会身份、工作机会、名誉和掌握在他人手里的评价权，都可能使同一句话获得不同的命运。但压力存在，不等于我们就能断言一个人心里只有恐惧；有意识地选择保留，也不意味着他拥有完全自由。对${n}来说，${t}是一件可由文献讨论的事情，却不该成为后人擅自诊断其性格的理由。哪怕我们能够找到日期和地点，也未必能够从那些材料里读出一个唯一的心理答案。历史留下事实，有时也留下彼此竞争的解释。`,
   p[4],
   `史料最值得珍惜的地方，也正是它的边界。一份初版书影能证明封面写了什么，却不能证明作者在每一次重读时都怀着同样的情绪。一封信能确认写信人当时如何措辞，但不能代替他后来可能说过的所有话。回忆录能帮助我们补充经历，也可能受到回忆与叙述目的的影响。因此，在这座博物馆里，不会出现凭空编造的最后对话、没有依据的心声，或以想象替代的证词。让未知之处保持未知，并不是削弱叙事，而是尊重那些真正留下文字的人。`,
   p[5],
   `时间过去之后，${a}可能迎来当事人未曾预料的读者。原本只想给少数人看的话，被放进书页；一度从公众面前退开的作品，重新走进出版史；或者一份已经失去的手稿，只剩下别人对它的记录。保存并不总意味着获得允许，出版也不能自动取消最初保留的决定。读者可以从今天的角度质疑那个选择，却应先准确理解是谁作出选择、在怎样的权力关系中作出选择。所谓『未曾说出口』，不只是空白，还包括一个人试图安排自己与世界距离的方式。走出展厅时，我们应该带走的问题，不仅是后来读到了什么，也包括谁曾希望我们不要在那个时候读到它。`
  ];
 }
 for(const c of all) {
  if(EN[c.id])throw Error("Duplicate exhibition "+c.id);
  const e=enStory(c),z=zhStory(c);
  const src=[[c.sourceName,c.sourceUrl]];
  EN[c.id]={title:c.enTitle,subtitle:c.enSubtitle,period:c.place+" · "+c.year,readingTime:"Long-form archival reading",object:{name:c.artifact,kind:c.type,url:c.sourceUrl,evidence:c.en[4]},tags:[c.type,"Historical evidence","Publication and privacy"],moment:{addressed:c.audienceEn,intended:c.en[2],withheld:c.en[3],why:c.en[3],certainty:c.en[4]},story:e,analysis:[["Historical setting",c.en[1]],["What happened and who controlled it",c.en[2]],["Reasons and constraints",c.en[3]],["What the record establishes",c.en[4]],["What followed",c.en[5]]],question:c.enQuestion,note:"Historical nonfiction based on the named institutional or scholarly source. Narrative transitions interpret the documented choices without inventing private dialogue or unsupported certainty.",sources:src,images:[]};
  ZH[c.id]={title:c.zhTitle,subtitle:c.zhSubtitle,story:z,setting:c.zh[1],act:c.zh[2],cause:c.zh[3],proof:c.zh[4],after:c.zh[5],question:c.zhQuestion};
  LABELS[c.id]={period:c.cnPlace+" · "+c.cnYear,object:c.cnArtifact,kind:c.cnType,source:c.cnSource,image:"与这件历史展品有关的馆藏资料；请点击来源核对"};
  I18N[c.name]=c.cnName;
  c.enWords=e.join(" ").trim().split(/\s+/).length;
  c.zhChars=(z.join("").match(/[\u3400-\u9fff]/g)||[]).length;
 }
 for(const c of (window.MUSEUM_ZH_REPAIRS||[])){
   const z=zhStory(c);
   ZH[c.id]={title:c.zhTitle,subtitle:c.zhSubtitle,story:z,setting:c.zh[1],act:c.zh[2],cause:c.zh[3],proof:c.zh[4],after:c.zh[5],question:c.zhQuestion};
   LABELS[c.id]={...(LABELS[c.id]||{}),period:c.cnPlace+" · "+c.cnYear,object:c.cnArtifact,kind:c.cnType,source:c.cnSource,image:"与人物和事件相关的历史材料，请点击来源核对"};
 }
  window.MUSEUM_NEW_AUDIT=all.map(c=>({id:c.id,enWords:c.enWords,zhChars:c.zhChars}));
};
