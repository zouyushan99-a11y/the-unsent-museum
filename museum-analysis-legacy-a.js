/* Evidence-grounded interpretive answers for personal archives, distinguishing imposed coercion from actual resistance. */
(function(){const cases={
  "anne-frank": [
    "Anne Frank's family's concealment followed concrete occupation measures: Jews lost rights, faced arrests and deportation, and had to avoid exposing the people sheltering them. The diary was not a refusal to write. Anne recorded life in the annex and later revised parts of it after hearing an appeal for wartime testimony. The restriction was on public visibility and movement, enforced by Nazi persecution and the danger of discovery. Her death and the diary's later publication must not be interpreted as a voluntary decision to remain silent.",
    "安妮·弗兰克一家隐藏身份，是因为纳粹占领当局实施反犹政策与驱逐，公开行踪会危及所有藏身者以及帮助他们的人。日记仍在持续书写，安妮后来还根据战时见证记录的号召修订过文字。被限制的是她在外界公开生活和安全发声的条件，不是她自愿不记录自己的经历。"
  ],
  "white-rose": [
    "The White Rose students actually did resist. They produced and distributed leaflets despite a Nazi state apparatus able to arrest, prosecute and execute dissenters. Their secrecy protected the circulation of messages and the identities of those involved. It cannot be described as their failure to speak. The important causal distinction is between clandestine publication under dictatorship and the many people who could not safely participate in such work. The group's eventual arrests followed active opposition, not passive silence.",
    "白玫瑰成员确实通过印制和散发传单反抗纳粹统治。他们隐瞒身份和传递方式，是因为公开反对可能招致逮捕与处决。保密是为了让已经采取的行动能够继续，并非他们没有勇气发声。这个档案不能被解释为沉默者的故事。"
  ],
  "rosa-parks": [
    "Rosa Parks's refusal to surrender her bus seat was a public act against segregation, not a failure to challenge it. Her decision took place within Montgomery's legal rules, the long organisation of the local Black community and previous challenges to bus discrimination. The significance of the incident depended on the arrest, legal case and organised boycott that followed. Any analysis of pressure must distinguish the coercive system passengers faced from Parks's documented choice to defy it. She was not silenced into compliance.",
    "罗莎·帕克斯拒绝在公车上让座，是公开反对种族隔离的行动，不是没有反抗。此事处于蒙哥马利长期歧视与黑人社区组织活动的背景之中，后续逮捕、法律争议及联合抵制公交车也影响了历史结果。需要分析的是制度如何限制乘客，以及她如何实际拒绝，而不是假装她选择了沉默。"
  ],
  "anna-akhmatova": [
    "Akhmatova composed Requiem under Soviet repression while people close to her were imprisoned. Preserving its lines on paper could create danger during searches, so poems were sometimes memorised by trusted listeners instead of retained as manuscripts. This was a strategy for survival of the work under surveillance, not an absence of artistic speech. The specific mechanism was the danger that written evidence could expose the author and listeners. Later publication became possible under changed political conditions.",
    "阿赫玛托娃在苏联政治镇压时期创作《安魂曲》，亲近之人曾遭拘捕。文字手稿在搜查中可能成为危险证据，因此部分诗句由可信赖的听众背诵保存。她没有停止写作，受到限制的是作品能够以文字形式安全保存和公开传播的条件。"
  ],
  "nicolaus-copernicus": [
    "Copernicus circulated elements of his heliocentric model among learned contacts before De revolutionibus appeared near the end of his life. The gap between private discussion and publication involved scholarly criticism, the time required to prepare a technical treatise and concern over reception. Historical sources do not establish religious fear as the one decisive cause; his situation preceded Galileo's later trial. What he withheld for years was a complete printed defence, not all discussion of his astronomical system.",
    "哥白尼在《天体运行论》公开出版前，已经在学者之间传播日心说的部分内容。完整著作的出版涉及技术论证、对同行批评的顾虑和准备时间，不能将推迟出版完全归因于害怕宗教审判，更不能把之后伽利略的经历直接套用到他身上。被延后的是完整的印刷出版，而不是所有学术交流。"
  ],
  "harriet-jacobs": [
    "Harriet Jacobs concealed her whereabouts because slavery allowed the people claiming ownership over her to pursue and seize her. The small attic space in which she hid restricted movement, health and contact with her children while offering some protection against recapture. Her concealment was a direct response to physical and legal danger. She later published a narrative exposing sexual coercion and the separation of families under slavery. The source is therefore about protective secrecy under persecution, not quiet acceptance of enslavement.",
    "哈丽雅特·雅各布斯躲藏，是因为奴隶制度允许声称占有她的人追捕并将她带回。狭小的藏身空间长期限制了她的活动和与孩子相处的机会，却减少了被抓获的危险。她后来公开出版有关奴隶制度的自述，所以隐匿行踪并非认同奴役，而是面对法律与暴力威胁的保护行动。"
  ],
  "emily-dickinson": [
    "Dickinson circulated poems to selected correspondents and preserved many others in handwritten fascicles rather than publishing them in the newspapers or books available during her lifetime. No definitive personal testimony explains every decision about submission and publication. She cared about form, copying, intended readers and versions of poems; editors of the period could alter punctuation or wording. The outcome was selective readership and a large body of private manuscripts, not proof of a single fear of rejection or universal opposition to print.",
    "狄金森向特定朋友与通信对象传阅诗歌，也将大量作品保存在自己编订的手稿中。没有明确的个人证词能解释每一次不投稿的原因。她对诗歌形式、抄写、收信人和文字版本有持续安排，而当时编辑可能修改标点与表达。能够确认的是选择性传播与私人保存，不是单一的害怕被拒绝。"
  ],
  "alan-turing": [
    "Turing faced different restrictions in different spheres. Wartime cryptographic work was governed by military secrecy, preventing public discussion of achievements even when the work was highly valued. Later, British criminal law punished sexual relations between men and subjected Turing to prosecution. Those were separate mechanisms of enforced concealment and punishment. He was not uniformly silent about his private identity. The case requires analysis of state security and criminal law rather than a generic claim that a gifted person simply lacked courage.",
    "图灵战时的密码破译工作受到军事保密规定限制，即使研究成果十分重要，也不能公开说明细节。战后英国刑法仍惩罚男性同性性行为，使其私人生活受到法律追究。这是军事机密与刑事法律两种不同的制度约束，不能简单说图灵一生不敢表达自己的身份。"
  ],
  "claudette-colvin": [
    "Claudette Colvin refused segregation on a Montgomery bus before the more widely commemorated arrest of Rosa Parks. Her act was documented and contributed to the wider legal history of bus segregation, including Browder v. Gayle. Differences in organisational decisions, public messaging and later remembrance affected which individuals became symbols of the movement. That uneven recognition is not evidence that Colvin failed to resist. The question for analysis is how historical visibility is produced after an act has already occurred.",
    "克劳黛特·科尔文早于罗莎·帕克斯在蒙哥马利公车上拒绝服从种族隔离安排。她的行动进入法律与民权运动史，后来也与相关诉讼相联系。不同组织的宣传选择和历史叙述影响了公众记住谁，但这不意味着科尔文本人没有反抗。"
  ],
  "oscar-wilde": [
    "Wilde published and performed extensively, yet British criminal law and public moral expectations exposed relationships between men to prosecution and scandal. His trials followed public conflict and disclosures rather than a lifelong inability to speak. The restrictive mechanism concerned sexual conduct, private relationships and the reputational consequences of exposure, not literary publication as such. Public fame could coexist with vulnerability under a law that treated aspects of a person's intimate life as criminal.",
    "王尔德长期公开发表作品并参与文学活动，但英国当时的刑法将男性同性性行为纳入惩罚范围，社会舆论也可能造成严重声誉损失。他的审判源于具体的法律与公开冲突，限制的重点在私人关系与性行为，而不是他完全无法发表文学观点。"
  ],
  "janusz-korczak": [
    "Korczak advocated children's dignity and opportunities to participate in decisions within his educational work. Nazi occupation later subjected the children in his care and the staff around them to confinement, deprivation and deportation. His public educational philosophy and the subsequent destruction imposed by the occupying authorities must be separated. The latter was violent coercion by a state apparatus, not a decision by Korczak to withdraw his words. His case documents advocacy followed by persecution rather than voluntary silence.",
    "柯尔恰克长期主张尊重儿童，试图在教育实践中给予孩子参与生活决定的空间。纳粹占领后，他照顾的儿童与工作人员遭受隔离、剥夺和驱逐。前者是主动表达的教育立场，后者是占领当局强加的暴力制度，不能把他后来无法继续工作的处境说成自愿沉默。"
  ],
  "etty-hillesum": [
    "Hillesum kept diaries and letters while anti-Jewish measures increasingly restricted the lives of people in occupied Netherlands. Her writing recorded the changing conditions and her reflections as deportation approached. The eventual interruption in surviving testimony resulted from coercive displacement and her death, not an authorial choice to end the story. Preservation and later editing determined which pages reached readers. The evidence distinguishes the voice she continued to produce from the state violence that prevented further writing.",
    "埃蒂·希勒瑟姆在荷兰遭占领期间继续写日记和书信，记录反犹政策不断加剧的生活限制。后来可保存的文字中断，与强制迁移和死亡有关，而不是作者选择不再讲述。资料能说明她持续写作，也说明暴力制度如何阻断进一步的记录。"
  ],
  "ida-b-wells": [
    "Ida B. Wells investigated and wrote against lynching even after white supremacist threats and the destruction of her newspaper's premises. The violence targeted the circulation of evidence and sought to make such reporting costly. Her departure from Memphis and continued journalism show that exposure to intimidation did not end her public advocacy. The causal account is therefore not why she 'chose silence', but how racial violence attempted to suppress an already outspoken journalist.",
    "艾达·B. 韦尔斯公开调查并报道私刑问题，即使报社受到白人至上主义者的暴力威胁与破坏，她仍继续新闻活动。暴力的目标是阻止证据传播、提高报道成本，而不是她本人已经接受沉默。这个案例应解释制度和暴力如何试图压制一个已经发声的人。"
  ],
  "liu-xiaobo": [
    "Liu Xiaobo published political arguments and participated in public advocacy; his later imprisonment restricted his movement and opportunities to communicate. The relevant silence was imposed through state punishment, not the result of deciding never to express political views. Written statements and prison records document active expression followed by coercive limits. A responsible analysis distinguishes what authorities prohibited from what Liu had already deliberately said.",
    "刘晓波曾公开发表政治观点并参与公共倡议，后来受到国家刑事处罚和监禁，行动与通信范围因而受到限制。这里的沉默来自表达之后的强制惩罚，并不是他没有勇气发表意见。应区分当局禁止的行为与他实际已经表达过的观点。"
  ],
  "galileo-galilei": [
    "Galileo openly published and defended astronomical arguments, then faced proceedings before Catholic authorities that limited how particular claims could be asserted. The restrictions followed a clash over scriptural interpretation, ecclesiastical authority and what counted as a demonstrable scientific proposition. The record includes publication, investigation and compelled changes in public position. It does not support the claim that Galileo never dared to speak; it documents a scholar whose expression was curtailed by an institution with legal power.",
    "伽利略已经公开发表并捍卫天文学观点，后来教会审查限制了某些主张的表达方式。这与经文解释、教会权威和科学证明标准之间的争议有关。史料记载了公开出版、审查与被迫改变表述的过程，而不是一位学者从未敢提出观点。"
  ]
};for(const [id,v] of Object.entries(cases)){const d=window.MUSEUM_HISTORY_LONGFORM?.[id],zh=window.MUSEUM_HISTORY_ZH?.[id];if(!d||!zh)continue;d.analysis[2]=["What actually limited expression",v[0]];d.moment={...(d.moment||{}),why:v[0]};zh.cause=v[1];}})();