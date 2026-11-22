/* Dedicated museum-study section classes: keep research content untouched. */
(function(){
 "use strict";
 const atlas=window.MUSEUM_RESEARCH_ATLAS;
 if(!atlas||typeof atlas.page!=="function")return;
 
/* Curatorial conclusions for all eight comparative research rooms.
   These are identified as museum inferences rather than statistical findings.
   The complete original comparisons and research dossiers remain untouched. */
const comparativeConclusions = [
  {
    result:[
      'Across R01 and R03, the anticipated social cost of saying no can exceed the negative reaction actually reported in the studied settings. R02 adds a different insight: supplying words for refusal can make choice feel more available, even when an observed behavioral change is statistically uncertain. Together they suggest that difficulty refusing has at least two separable dimensions: what we expect others to do, and whether a usable way of refusing is available to us.',
      '综合R01与R03，在所研究的情境中，拒绝者预想的负面社交后果可能超过对方实际报告的反应。R02则揭示另一层：提供拒绝措辞可能增强主观选择自由感，即使实际行为变化的统计证据仍不确定。因此，拒绝的困难至少包含两个不同层面：我们预想别人会怎样反应，以及我们是否拥有可实行的拒绝方式。'
    ],
    meaning:[
      'Gallery I should not simply encourage courage. It should ask whether a visitor fears a misjudged reaction, lacks language for setting a boundary, or confronts an objectively unequal relationship. The historical accounts of servants and child workers demonstrate the last case, which cannot be resolved by changing imagined reactions alone.',
      '第一展厅不应只劝人“勇敢拒绝”，而要区分：访客是否高估了他人的反应、是否缺少表达边界的话语，还是面对真实的不平等权力。历史上的家仆与童工属于需要单独考察的后一种情况，不能靠纠正预期就消除其拒绝成本。'
    ],
    boundary:[
      'The studies do not establish that all refusals are safe, nor do they measure the real historical costs faced by dependent workers and children.',
      '这些研究既不能证明所有拒绝都安全，也没有测量受经济依赖制约的历史劳动者和儿童真实承担的拒绝代价。'
    ]
  },
  {
    result:[
      'R08 and R09 together show that the presence of other people does not produce a fixed amount of inaction: the apparent danger and whether bystanders can truly help alter the pattern. R10 examines another mechanism altogether—whether team members feel safe to raise concerns. The cross-study insight is that witnessing a problem and believing one can speak usefully about it are distinct conditions for intervention.',
      'R08与R09合起来说明：其他人在场并不会产生一个固定不变的“不作为效应”；危险程度以及旁观者是否真能提供帮助会改变结果。R10研究的则是另一种机制——团队成员是否感觉能够安全地提出问题。由此可得：看见问题，以及相信自己能够有效而安全地表达，是参与干预的两个不同条件。'
    ],
    meaning:[
      'The Silent Witness room should offer visitors more than a binary choice between speaking and cowardly silence. Visitors may need to identify danger, distribute responsibility explicitly, seek an ally, or use a safer reporting channel. These are curatorial possibilities—not tested interventions in this combined set of studies.',
      '“沉默的见证者”展厅不应把选择简化成“开口”或“胆怯沉默”。参观者可能需要辨认危险、明确责任、寻求同伴，或选择安全的报告渠道。这些是本馆据研究提出的策展路径，并非三篇论文共同验证过的干预方案。'
    ],
    boundary:[
      'Emergency intervention data cannot directly quantify workplace disclosure or a historical witness’s risk under coercive institutions.',
      '紧急施救实验不能直接量化工作场所的表达行为，更不能衡量历史见证者在强制性制度下的风险。'
    ]
  },
  {
    result:[
      'R10 places psychological safety in teams alongside learning behavior; R11 explains how organizational structures may normalize silence; and R13 examines leadership and opportunities to speak. Read together, they shift the explanation from a purely personal willingness to speak toward the conditions that determine whether speaking is heard, protected and consequential. R30 adds a historical-theoretical caution: speech presented publicly under power may differ from criticism kept out of the authority’s view.',
      'R10将团队心理安全与学习行为联系起来；R11解释组织结构如何使沉默常态化；R13关注领导方式与表达机会。放在一起，这些研究让解释重点从“一个人愿不愿意说”转向“其发言能否被听见、受到保护并产生作用”。R30从历史理论补充提醒：权力监督下的公开话语，可能不同于被保留在权威视线之外的批评。'
    ],
    meaning:[
      'Historical and organizational galleries should document who controls meetings, reporting routes, records and the consequences of dissent. Silence is not adequate evidence of agreement. Where speaking is punished or ignored, the museum must examine the institution before passing judgment on the individual.',
      '在组织与历史展厅中，本馆应追问谁控制会议、反馈渠道、档案记录与异议后果。沉默不足以证明认同。如果表达会受罚或被忽视，博物馆应先分析制度条件，而不是先评判个人。'
    ],
    boundary:[
      'The team field study, organizational models and historical interpretation illuminate different scales; they are not one validated causal chain.',
      '团队实地研究、组织理论与历史解释关注不同尺度，不能被拼接成一条已经实证验证的完整因果链。'
    ]
  },
  {
    result:[
      'R16’s relationship diaries and R19’s meta-analysis both caution against treating expression as an automatically beneficial act: effects depend on the relationship, recipient and direction of influence. The gratitude work (R15) and apology framework (R21) suggest that the content and form of what is expressed also matter, but their evidence has not been audited to the same depth. The defensible conclusion is that expression has relational meaning, not universal positive value.',
      'R16的亲密关系日记与R19的元分析共同提醒：表达并非自动有益，其结果与关系、接收者及影响方向有关。感恩表达研究R15和道歉框架R21提示，表达内容与形式同样重要，但目前尚未完成同等级的原文审校。较稳妥的结论是：表达的意义产生于具体关系，而不是表达本身天然具有普遍正效益。'
    ],
    meaning:[
      'The Feelings We Never Voiced room should separate thanks, apologies and vulnerable disclosures rather than treating them as one undifferentiated confession. A visitor can examine what they wish to communicate, to whom, and why; the museum should not assume that sending a message guarantees reconciliation.',
      '“未曾表达的感情”展厅应把感谢、道歉与脆弱的自我披露区分开，而不是统称为告白。参观者应能思考自己究竟要传达什么、说给谁、为何表达；博物馆不能暗示发送信息就一定带来和解。'
    ],
    boundary:[
      'The cited works do not demonstrate that every relationship improves after disclosure, gratitude or apology; the limited review of R15 and R21 is explicit.',
      '这些论文没有证明每一种关系都会因披露、感谢或道歉而改善；R15与R21的审校范围也必须保持明确。'
    ]
  },
  {
    result:[
      'R17 and R18 frame family communication through shared rules and avoided topics; R19 shows that disclosure and liking can influence one another in more than one direction; R16 adds everyday relational context. The resulting insight is that an unspoken feeling cannot be interpreted without asking what the relationship permits, what the speaker anticipates, and whether the listener already knows anything at all.',
      'R17与R18从家庭互动规则及回避话题理解沟通；R19表明自我披露与人际好感存在不止一个影响方向；R16则补充日常亲密关系的情境。综合后可以提出：理解一份未说出口的感情，必须考察关系允许谈论什么、表达者预期怎样的回应，以及接收者是否真的知道这些感受。'
    ],
    meaning:[
      'The museum should not label family silence as either love or neglect without evidence. A meaningful family archive needs to present obligations, generational expectations, privacy and the possible limits of shared understanding. Visitors may also be invited to question the claim “They already know how I feel.”',
      '本馆不能在缺乏证据时把家庭沉默直接定义为爱或冷漠。家庭档案需要呈现代际期待、义务、隐私以及“彼此理解”的可能边界；参观者也应有机会重新思考“对方应该早就知道我的感受”这一理由。'
    ],
    boundary:[
      'R17 and R18 have not been verified at the same full-text level as R16 and R19, and none can reveal the private knowledge of a particular family member.',
      'R17、R18尚未完成与R16、R19同等级的全文核对；任何一篇也都无法证明某位具体家人究竟知道多少未表达的感情。'
    ]
  },
  {
    result:[
      'R22 establishes that measurable nonpublication happens; it does not reveal the drafts or their motives. R23 shows how imagined audiences can shape communication choices, while R24 and R27 provide privacy perspectives. The useful inference is not that audience anxiety caused the observed nonpublication, but that sending is also a decision about who may read, retain or redistribute words.',
      'R22能够确认符合其定义的未发布行为确实发生，却不知道草稿内容和动机；R23展示人们如何想象读者并调整表达；R24和R27提供隐私视角。值得提出的综合认识并不是“受众焦虑造成了未发布”，而是：点击发送，同时是在决定谁有权阅读、保存或转发这些文字。'
    ],
    meaning:[
      'Before Sending should treat nonpublication as a possible exercise of audience control—not automatically regret, fear or a failed attempt to communicate. The museum’s public story contribution must remain opt-in, with clear notice that publicly posted words become visible to others. Unsubmitted drafts should not be collected for research.',
      '“发送之前”展厅应承认不发布可能是主动管理受众，而不自动解释成后悔、恐惧或沟通失败。博物馆公共故事投稿应坚持访客主动选择，并明确提醒公开后其他人能够看见；未提交的草稿不应被收集用于研究。'
    ],
    boundary:[
      'The studies do not jointly test a single cause, and modern social-media patterns must not be projected backward onto every historical unsent letter.',
      '这些研究没有共同检验某一种因果机制；现代社交媒体现象也不能倒推每封历史上未寄出的信。'
    ]
  },
  {
    result:[
      'R22 measures whether platform drafts were posted; R26 experimentally studies expressive writing without an intended recipient; R28 supplies a broader account of emotion regulation. Together they make one distinction especially clear: producing words and delivering them to someone are separate acts. Private writing can be meaningful even when no communication occurs, but its meaning cannot be presumed to be therapeutic.',
      'R22测量平台草稿是否发布；R26通过实验研究无需收件人的表达性写作；R28提供更宽广的情绪调节框架。它们共同凸显一个区别：把话写出来与把话交给别人，是两个不同动作。即使没有发生沟通，私人书写也可能具有意义，但这种意义不能一概视为治疗作用。'
    ],
    meaning:[
      'The museum should present writing, keeping and sending as distinct visitor choices. An unsent text need not be portrayed as a regrettable failure; it may remain private by design. Visitors should never be pushed into trauma disclosure in the name of healing.',
      '本馆应把写下、保存与发送作为不同选择来呈现。未寄出的文字未必是令人遗憾的失败，也可能原本就只适合被私人保留。博物馆不能以疗愈之名推动访客披露创伤。'
    ],
    boundary:[
      'R26 is a small preliminary study with specific outcomes; neither it nor R22 proves benefits for every kind of diary, letter or unpublished post.',
      'R26是样本较小且结果指标特定的初步研究；它与R22都不能证明任何日记、书信或未发布帖子具有普遍健康益处。'
    ]
  },
  {
    result:[
      'R29 and R32 reveal how institutions and archives shape what can survive as historical evidence. R31 confronts lives made unrecoverable by violent documentation; R34 insists that oral testimony has meaning beyond a literal chronology; and R35 finds that researchers’ own methods can produce refusals or missing interviews. The synthesis is therefore methodological: silence is not merely a gap in a finished record; it can be created at each stage of recording, preserving and interpreting a voice.',
      'R29与R32说明制度和档案怎样决定哪些材料能够成为史证；R31面对被暴力记录方式抹去、无法完整复原的生命；R34强调口述证词不能只按事件时间线判断其意义；R35发现研究者的方法本身也可能造成拒访与记录缺席。因此，综合结论首先是一种方法论认识：沉默不只是完整史料中的空白，它可能在记录、保存和解释声音的每一步被制造出来。'
    ],
    meaning:[
      'In the Historical Wing, each claim should distinguish an original document, retrospective testimony, later scholarly interpretation and an unknowable absence. The museum must not turn archival gaps into imagined first-person confessions or presume that the people who left no surviving testimony never spoke.',
      '在历史展厅里，本馆应区分原始文献、后来的口述回忆、学者解释及确实无法知道的部分。不能用虚构的第一人称独白填补档案缺口，更不能因为证词没有留存，就认定当事人从未表达。'
    ],
    boundary:[
      'Historical methods do not permit a numerical estimate of how often a missing record means censorship, privacy, destruction or selective preservation.',
      '这些历史研究方法不能用一个统一数字估算：多少档案缺失源于审查、隐私、毁损或选择性保存。'
    ]
  }
];
function comparativePanel(number, escapeText, t){
  const item=comparativeConclusions[number];
  if(!item)return '';
  const section=(eyebrow,title,body,cls)=>'<section class="atlas-panel '+cls+'"><span class="eyebrow">'+escapeText(t(...eyebrow))+'</span><h2>'+escapeText(t(...title))+'</h2><p>'+escapeText(t(...body))+'</p></section>';
  return section(['INTERPRETIVE CONCLUSION · COMPARATIVE READING','跨研究结论 · 综合分析'],
    ['What we learn by reading these works together','综合这些研究，我们得到了什么认识？'],item.result,'atlas-comparative-conclusion')+
    section(['CURATORIAL IMPLICATION','对本馆的启示'],
    ['How this changes our interpretation of silence','这会怎样改变本馆对沉默的解释？'],item.meaning,'atlas-comparative-implication')+
    section(['BOUNDARY OF THE INFERENCE','结论的证据边界'],
    ['What this comparison cannot establish','哪些结论仍不能得出？'],item.boundary,'atlas-comparative-boundary');
}

const original=atlas.page;
 atlas.page=function(id){
   let html=original.call(this,id);
   if(typeof id!=="string"||typeof html!=="string")return html;
  if(id.startsWith("compare/")){
    const number=Number(id.split("/")[1]);
    if(Number.isInteger(number)&&number>=0&&number<comparativeConclusions.length){
      const escapeText=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
      const t=(en,zh)=>window.museumLangPublic?.()==='en'?en:(window.museumConvertPublic?.(zh)||zh);
      const panels=comparativePanel(number,escapeText,t);
      // The synthesis is displayed before the original detailed evidence comparison,
      // making the inference explicit while preserving all old sources and numbers.
      const heroEnd=html.indexOf('</section>',html.indexOf('class="page-hero"'));
      if(heroEnd!==-1){
        const insertAt=heroEnd+'</section>'.length;
        html=html.slice(0,insertAt)+panels+html.slice(insertAt);
      }
    }
    return html;
  }
  if(!id.startsWith("study/")||!html.includes('atlas-deep'))return html;
   html=html.replace(/<section class="atlas-panel">(?=<span class="eyebrow">(?:SOURCE AUDIT|来源核对))/,'<section class="atlas-panel atlas-verification-plate">');
   html=html.replace(/<section class="atlas-panel">(?=<h2>(?:Research Connections|研究关联)<\/h2>)/,'<section class="atlas-panel atlas-connections-gallery">');
   return html;
 };
})();
