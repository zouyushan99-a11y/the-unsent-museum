/* The Unsent Museum — comparative research essays, five-part structure.
   Scope: the eight Comparative Research pages only. Other research rooms and assets are untouched.
   Source findings, curatorial interpretation and evidence limits are explicitly separated. */
(function(){
'use strict';
const atlas=window.MUSEUM_RESEARCH_ATLAS;
if(!atlas||typeof atlas.page!=='function')return;
const articles=[
{
title:['Why Is Saying No Difficult?','为什么拒绝如此困难？'],
subtitle:['A comparison of anticipated consequences, interpersonal judgments and the felt freedom to refuse.','比较拒绝后果的预期、人际判断，以及主观上的拒绝自由感。'],
ids:['R01','R02','R03'],
rows:[
['R01',['Refusers often predicted more negative reactions than requesters reported. The gap varied with the requester’s power and the likelihood of future contact.','拒绝者往往比请求者本人预期更负面的反应；这种预期差距会随请求者的权力和双方未来继续交往的可能性而变化。'],['Explains when anticipated social costs may be overestimated, while showing that power can change the pattern.','解释人们何时可能高估拒绝的社交代价，同时指出权力会改变这种偏差。']],
['R02',['Specific refusal wording increased reported freedom to refuse. The pooled change in observed compliance did not reach conventional statistical significance.','提供具体拒绝措辞提高了参与者报告的拒绝自由感；但实际服从行为的合并结果未达到传统统计显著性标准。'],['Separates feeling able to refuse from actually refusing.','区分“感觉能够拒绝”与“实际作出拒绝”。']],
['R03',['Across five studies, invitees tended to anticipate more negative reactions to declined leisure invitations than inviters reported.','五项研究显示，受邀者往往预期拒绝休闲邀请会带来更负面的反应，而邀请者实际报告的感受相对较轻。'],['Shows how the two sides of an ordinary invitation can misread each other.','揭示普通社交邀请中的双方可能如何误判彼此。']]
],
sections:[
{head:['Research Background & Literature','研究背景与文献介绍'],paras:[
['Refusing a request can look like a simple choice from the outside. For the person being asked, however, the decision may involve anticipated disappointment, damaged relationships, loss of reciprocity or retaliation. The three studies gathered here approach that difficulty from different angles: R01 examines predictions about the consequences of refusal; R02 tests whether practical language changes the felt availability of refusal; and R03 studies how invitees and inviters judge a declined social invitation.',
'从旁观者角度看，拒绝请求似乎只是一个简单选择；但对被请求者而言，这个决定可能牵涉对方失望、关系受损、互惠中断，甚至遭到报复的担忧。本专题纳入三项从不同角度研究拒绝困难的文献：R01考察人们对拒绝后果的预期；R02检验具体措辞能否改变人们对拒绝自由的感受；R03则研究社交邀请被拒绝时，邀请双方如何判断彼此的反应。'],
['They can be read together because all three concern the space between having a formal option and being able to use it in a social situation. They should not, however, be treated as three measurements of one outcome. Their evidence concerns prediction, subjective freedom and interpersonal judgment respectively.',
'三项研究可以放在一起阅读，是因为它们都涉及一个共同处境：一个人形式上拥有选择权，是否就意味着他能够在具体关系中使用它？但三者并不是对同一结果的重复测量，分别关注后果预测、主观自由感和人际判断。']
]},
{head:['Comparative Analysis of Research Findings','研究结论的深度比较'],paras:[
['R01 provides the broadest account of anticipated consequences. Across seven main studies and four supplementary studies, refusers tended to forecast more negative reactions than requesters themselves reported. The difference appeared across several kinds of anticipated outcomes, including negative emotion and relationship-related judgments. Crucially, the pattern was not constant: the forecasting gap appeared when the requester had greater power, and when future contact between the two people was expected to be closer. R01 therefore does not simply say that people are irrationally afraid. It shows that their forecasts can be biased, while also demonstrating that the social structure of the request matters.',
'R01对拒绝后果的预期提供了较完整的研究。七项正式研究和四项补充研究显示，拒绝者往往预测请求者会有比请求者本人实际报告更负面的反应。这种差距涉及负面情绪和关系评价等多个方面。更重要的是，这种偏差并非在所有条件下都一样：当请求者拥有较高权力，或双方未来仍有较密切联系时，预期差距会出现。因此，R01并不是简单地说人们害怕得不理性；它同时表明，提出请求的社会结构会影响人们的判断。'],
['R03 reaches a related conclusion in a narrower setting. Across five studies of declined leisure invitations, invitees generally anticipated more anger, disappointment or future relational damage than inviters reported. Its contribution is to make the mismatch between the two sides visible: the person declining may imagine that the refusal will be taken personally, while the inviter may regard it as a relatively ordinary decision. R03 complements R01, but its findings should remain tied to social invitations. It does not establish that refusing work, care obligations or demands from an authority figure carries similarly mild consequences.',
'R03在范围更窄的情境中得出了相近发现。五项关于休闲邀请被拒绝的研究显示，受邀者通常预期邀请者会更生气、更失望，或减少未来往来；但邀请者报告的反应相对没有那么负面。它的贡献在于呈现双方判断之间的落差：拒绝者可能想象对方会把拒绝视为针对自己，而邀请者却可能认为这只是一个普通决定。R03补充了R01，但结论必须留在社交邀请的范围内，不能据此认定拒绝工作要求、照护义务或权威者的要求也会有同样轻微的后果。'],
['R02 asks a different question: even if someone is technically allowed to refuse, does that option feel usable? In its experiments involving a request to hand over an unlocked phone, participants given concrete refusal wording reported greater subjective freedom than those merely reminded of their right to decline. Yet the pooled difference in actual compliance was uncertain: the reported odds ratio was 1.54, with p = .053. The distinction matters. R02 supports the claim that usable language can change how free people feel; it does not establish that a refusal script reliably changes what people do.',
'R02提出的是另一个问题：即使一个人在制度上有权拒绝，他是否真的觉得自己能够使用这项权利？在要求参与者交出已解锁手机的实验中，获得具体拒绝措辞的人，比仅被提醒有权拒绝的人报告了更高的主观自由感。但实际服从行为的合并差异仍不确定：论文报告的比值比为1.54，p = .053。这个区别十分重要。R02支持的是“可使用的语言能够改变人们对自由的感受”，而不是“拒绝话术必然改变实际行为”。'],
['Read together, R01 and R03 identify a possible error in anticipating another person’s reaction; R02 identifies a practical and psychological condition that may make refusal feel more available. These findings complement one another, but they do not form a single tested causal sequence. No study in this set establishes that correcting expectations and supplying wording will overcome coercion or unequal power.',
'综合来看，R01和R03揭示了人们可能错误预判他人反应；R02则指出，具体可用的表达方式可能使拒绝在心理上更容易实行。三项发现能够互相补充，却没有共同验证一条完整的因果链。本组研究没有证明，只要纠正预期并提供措辞，就能够克服胁迫或权力不平等。']
]},
{head:['Explaining Agreements and Differences','共性、差异及其原因'],paras:[
['The common thread is not that refusal is always safer than people think. It is that the perceived cost of refusal and the actual response of another person are not necessarily identical. R01 and R03 make this gap visible by comparing expectations with the other party’s reports. R02 moves from prediction to action-readiness: the availability of language can affect whether a person experiences refusal as a real option.',
'三项研究的共同点并不是“拒绝总比人们想象的安全”，而是拒绝者感受到的代价与对方实际反应未必相同。R01和R03通过比较双方报告，呈现了预期与实际感受之间的差距；R02则从判断转向行动准备，指出语言资源会影响一个人是否把拒绝体验为真实可行的选项。'],
['Their differences arise partly because they examine different stages of a decision. Before refusing, a person may forecast the other party’s reaction. While preparing to respond, that person may or may not have words that feel clear and socially usable. After a refusal, the requester interprets what happened. These are related moments, but they are not interchangeable measurements. The studies also differ in context: a leisure invitation is not equivalent to an intrusive request for a phone, and neither reproduces every real-life relationship.',
'它们的差异部分来自研究对象处于决定过程的不同阶段。拒绝之前，一个人会预测对方的反应；准备回应时，他可能拥有、也可能缺乏清晰且可使用的拒绝语言；拒绝发生之后，请求者才会解释这件事。这些环节彼此相关，却不是可以互换的测量指标。研究情境也不同：休闲邀请不等于要求交出手机，而两者都无法代表现实中的所有关系。'],
['R01’s power-related result is especially important for interpreting the other findings. If a requester has authority over the person refusing, the expected cost may reflect more than social anxiety. Some negative consequences may be realistic. A worker dependent on an employer, a child facing an adult, or a person exposed to retaliation does not occupy the same position as a participant declining a friend’s invitation. Treating every fear as a cognitive error would erase this difference.',
'R01关于权力的发现尤其重要。如果请求者对拒绝者拥有权威，预期中的代价就可能不只是社交焦虑，其中一部分负面后果可能是真实存在的。依赖雇主的劳动者、面对成年人的儿童，以及可能遭受报复的人，与拒绝朋友邀请的实验参与者并不处于同等位置。把所有恐惧都视为认知偏差，会抹去这种差别。']
]},
{head:['The Museum’s Interpretation','本馆的综合结论'],paras:[
['The Museum considers refusal difficulty to arise from at least three distinguishable conditions: what a person expects the other party to do, whether the person has usable language for expressing a boundary, and whether the relationship contains a real imbalance of power. These conditions may overlap, but they should not be collapsed into one explanation.',
'本馆认为，拒绝困难至少可能来自三个需要区分的条件：一个人预期对方会怎样反应；他是否拥有能够实际使用的边界表达方式；以及双方关系中是否存在真实的权力不平等。这些条件可能同时出现，但不应被压缩成单一解释。'],
['When the anticipated reaction is exaggerated, silence may be shaped by a mistaken forecast. When a person cannot find words, the obstacle may lie in the practical resources available for communication. When refusal risks punishment, loss of livelihood or other serious consequences, silence may be a protective response to an actual threat. The same outward silence can therefore have different meanings.',
'当预期反应被夸大时，沉默可能受到错误判断影响；当一个人找不到合适措辞时，障碍可能来自沟通资源不足；当拒绝可能招致惩罚、失去生计或其他严重后果时，沉默也可能是对真实威胁的自我保护。因此，外表相同的沉默可能具有完全不同的含义。'],
['The museum’s position is not that everyone should simply become more courageous. It is that meaningful choice requires both an available way to refuse and conditions in which refusal can be exercised without unjust punishment. This is a curatorial synthesis of the three studies, not a causal model jointly tested by them.',
'本馆并不主张每个人只要变得更勇敢就能解决问题。本馆认为，真正有意义的选择既需要可实行的拒绝方式，也需要让人能够拒绝而不遭受不公惩罚的环境。这是本馆对三项研究的综合判断，并非三项研究共同检验过的因果模型。']
]},
{head:['References & Evidence Notes','参考文献与证据说明'],paras:[
['R01 — Lu, J., Fang, Q., & Qiu, T. (2023). Rejecters overestimate the negative consequences they will face from refusal. Journal of Experimental Psychology: Applied, 29(2), 280–291. DOI: 10.1037/xap0000457. The dossier records seven main studies and four supplementary studies; selected sample counts and results were checked against the article.',
'R01 — Lu, J., Fang, Q., & Qiu, T. (2023). Rejecters overestimate the negative consequences they will face from refusal. Journal of Experimental Psychology: Applied, 29(2), 280–291. DOI: 10.1037/xap0000457。档案记录七项正式研究和四项补充研究；部分样本数量与结果已据论文核对。'],
['R02 — Schlund, R., Sommers, R., & Bohns, V. K. (2024). Giving people the words to say no leads them to feel freer to say yes. Scientific Reports, 14, Article 576. DOI: 10.1038/s41598-023-50532-3. The subjective-freedom and observed-compliance outcomes are reported separately.',
'R02 — Schlund, R., Sommers, R., & Bohns, V. K. (2024). Giving people the words to say no leads them to feel freer to say yes. Scientific Reports, 14, Article 576. DOI: 10.1038/s41598-023-50532-3。主观自由感与实际服从行为分别报告，不应混为一谈。'],
['R03 — Givi, J., & Kirk, C. P. (2024). Saying no: The negative ramifications from invitation declines are less severe than we think. Journal of Personality and Social Psychology, 126(6), 1103–1115. DOI: 10.1037/pspi0000443. The studies concern invitation declines and do not establish long-term outcomes across all relationships.',
'R03 — Givi, J., & Kirk, C. P. (2024). Saying no: The negative ramifications from invitation declines are less severe than we think. Journal of Personality and Social Psychology, 126(6), 1103–1115. DOI: 10.1037/pspi0000443。研究聚焦社交邀请被拒绝的情境，并未证明所有关系中的长期结果。']
]}
]
},
{
title:['The Bystander Effect in Context','不同情境中的旁观者效应'],
subtitle:['A comparison of emergency helping, meta-analytic moderators and psychological safety in teams.','比较紧急情境中的帮助行为、旁观者效应的调节因素，以及团队心理安全。'],
ids:['R08','R09','R10'],
rows:[
['R08',['In the classic intercom experiment, reported intervention was higher when participants believed they were the only potential helper than when they believed several others were present.','在经典对讲机实验中，认为自己是唯一潜在帮助者的参与者，报告事件的比例高于认为还有其他旁观者在场的人。'],['Shows how perceived responsibility can change in a controlled emergency.','呈现受控紧急情境中，责任感知如何影响行动。']],
['R09',['A meta-analysis of 105 independent effects found an overall bystander effect, but danger and the possibility of useful help moderated its strength.','涵盖105个独立效应量的元分析发现总体旁观者效应，但危险程度及旁观者能否提供有效帮助会调节效应强弱。'],['Tests whether the classic pattern holds across varied emergency conditions.','检验经典模式能否适用于不同紧急情境。']],
['R10',['Across 51 work teams, psychological safety was associated with learning behaviour; the study concerns speaking up and learning, not emergency rescue.','在51支工作团队中，心理安全与学习行为存在关联；研究关注表达与学习，而非紧急施救。'],['Adds a distinct organizational condition for speaking, rather than another bystander-effect test.','补充组织中安全表达的另一种条件，而不是再做一次旁观者效应检验。']]
],
sections:[
{head:['Research Background & Literature','研究背景与文献介绍'],paras:[
['The bystander effect is often summarized as a simple rule: the more people witness an emergency, the less likely any one person is to help. R08 provides a classic experimental demonstration of diffusion of responsibility. R09 reviews a much wider body of emergency research and asks when the effect becomes stronger or weaker. R10 is included as a carefully marked contrast: it examines whether people feel safe enough to speak up and learn in work teams, not whether they intervene in an emergency.',
'旁观者效应常被简化为一条规律：目睹紧急事件的人越多，每个人越不愿意帮助。R08提供了责任分散的经典实验；R09综述更广泛的紧急情境研究，考察旁观者效应何时增强或减弱。R10则作为明确标注的对照研究纳入：它研究团队成员是否感到能够安全表达和学习，而不是是否会在紧急事件中施救。'],
['This distinction matters because witnessing, helping and speaking up are not the same behaviour. The three works can illuminate different conditions under which a person responds to a problem, but they cannot be treated as three studies measuring one common outcome.',
'这种区别很重要，因为目睹事件、采取帮助行动和提出意见并不是同一种行为。三项研究可以帮助我们理解人们回应问题时所处的不同条件，却不能被当作三篇测量同一结果的研究。']
]},
{head:['Comparative Analysis of Research Findings','研究结论的深度比较'],paras:[
['R08’s experiment placed participants in a situation where they heard what appeared to be a medical emergency through an intercom. When participants believed they were the only person who could respond, 85% reported the incident within the observation period. When they believed four other people were also listening, the figure fell to 31%. The contrast supports the idea that perceived responsibility can be diluted when others appear to be present. It is a result from a controlled scenario, not a universal estimate of how often people help in real emergencies.',
'R08让参与者通过对讲机听到一场看似医疗紧急事件。当参与者认为自己是唯一能够回应的人时，85%在观察时段内报告了事件；当他们认为另有四个人也在聆听时，这一比例降至31%。这种差异支持了一个解释：当其他人似乎也在场时，个人感受到的责任可能被分散。但这只是受控情境中的结果，并不是现实紧急事件中人们普遍施助概率的估计。'],
['R09 broadens the picture by combining 105 independent effect sizes from more than 7,700 participants. Its overall analysis supports the existence of a bystander effect, but the moderators are important. The effect is not equally strong in every emergency. Situations involving clear danger, a perpetrator or the possibility that other witnesses can provide effective assistance may differ from ambiguous, non-dangerous events. R09 therefore qualifies the simple rule often drawn from R08: the number of witnesses alone does not tell us what will happen.',
'R09将视野扩大到超过7700名参与者、105个独立效应量。总体分析支持旁观者效应存在，但调节因素同样重要：并非每种紧急事件中的效应都一样强。危险明确、施害者在场，或其他目击者能够提供有效帮助的情境，可能不同于模糊且没有明显危险的事件。因此，R09修正了人们常从R08得出的简单规律：仅凭目击者人数，无法判断接下来会发生什么。'],
['R10 contributes a different finding. In a field study of 51 work teams, psychological safety was associated with team learning behaviour. Psychological safety concerns whether members believe they can ask questions, admit mistakes and raise concerns without unacceptable interpersonal punishment. It is not a measure of whether someone will rush to help a stranger. R10 therefore cannot be used as direct evidence for the bystander effect; it helps distinguish emergency intervention from the broader conditions that make speaking up possible.',
'R10提供了不同类型的发现。在51支工作团队的实地研究中，心理安全与团队学习行为存在关联。心理安全关注成员是否相信自己能够提出问题、承认错误和表达担忧，而不必承担无法接受的人际惩罚。它并不是测量一个人是否会立即帮助陌生人的指标。因此，R10不能作为旁观者效应的直接证据；它的价值在于帮助我们区分紧急介入与更广泛的安全表达条件。'],
['The studies therefore support a layered account rather than one universal explanation: R08 isolates perceived responsibility; R09 shows that danger and the usefulness of other witnesses can alter the pattern; R10 identifies psychological safety as a relevant condition in organizational learning. These findings are related, but not interchangeable.',
'因此，三项研究支持的是分层理解，而不是单一普遍解释：R08隔离出责任感知的作用；R09显示危险程度和其他目击者能否有效协助会改变模式；R10则指出，心理安全是组织学习中的重要条件。这些发现有关联，却不能互相替代。']
]},
{head:['Explaining Agreements and Differences','共性、差异及其原因'],paras:[
['R08 and R09 agree that the presence of other people can alter an individual’s response. Their difference lies in how broadly the pattern is expected to apply. R08 uses a tightly controlled emergency simulation, allowing the researchers to isolate perceived group size. R09 compares many study conditions and finds that situational danger and the practical value of other witnesses matter. The later synthesis does not cancel the classic experiment; it places its result within a wider set of conditions.',
'R08和R09都认为，其他人在场会改变个人的回应方式。两者的差异在于对这一模式适用范围的理解。R08采用严格控制的紧急情境模拟，使研究者能够隔离群体人数的影响；R09则比较许多不同研究条件，发现情境危险程度以及其他目击者能否提供实际帮助同样重要。后来的综合研究并没有推翻经典实验，而是把它放回更广泛的条件中理解。'],
['R10 differs because the social task is different. A team member deciding whether to admit a mistake is not in the same position as a witness deciding whether to report an emergency. In a workplace, the relevant risk may be ridicule, damage to career prospects or the belief that speaking will change nothing. In an emergency, uncertainty, responsibility and immediate danger may be more central. The shared theme is the social cost of action, not a shared psychological mechanism proven by all three studies.',
'R10之所以不同，是因为它研究的社会任务不同。团队成员决定是否承认错误，与目击者决定是否报告紧急事件，并不是同一种处境。在工作场所，风险可能是遭到嘲笑、影响职业发展，或认为表达也不会带来改变；在紧急事件中，不确定性、责任分配和即时危险可能更加关键。三项研究的共同主题是行动的社会代价，而不是已经被共同证明的同一种心理机制。'],
['The comparison also warns against judging every quiet witness as indifferent. A person may not know what is happening, may assume another person is better placed to help, may fear consequences, or may choose a different form of assistance. The studies do not reveal the motive of any individual visitor or historical witness.',
'这一比较也提醒我们，不应把每一位沉默的目击者都视为冷漠。一个人可能不确定发生了什么，可能认为别人更适合介入，可能担心后果，也可能选择其他帮助方式。研究无法揭示某位访客或历史见证者的真实动机。']
]},
{head:['The Museum’s Interpretation','本馆的综合结论'],paras:[
['The Museum considers intervention to depend on at least two distinct questions: does a witness recognize a need to act, and does that person believe they can act safely and usefully? Perceived responsibility can weaken when others are present, but clear danger or effective collective support can change the situation. In organizations, psychological safety adds another condition: people are more able to raise concerns when doing so is not treated as a personal threat.',
'本馆认为，是否介入至少涉及两个不同问题：目击者是否意识到需要采取行动，以及他是否相信自己能够安全且有效地行动。其他人在场可能削弱个人责任感，但明确的危险或有效的集体支持会改变情境。在组织中，心理安全又构成另一项条件：当提出担忧不会被视为对个人的威胁时，人们才更可能表达。'],
['A silent witness may therefore be uncertain, constrained, calculating risk or waiting for a safer way to help. The museum should not reduce these possibilities to cowardice. Nor should it treat emergency experiments as proof about workplace harassment, political repression or historical violence. Those settings require their own evidence and attention to power.',
'因此，沉默的目击者可能是不确定、受到限制、正在评估风险，或等待更安全的帮助方式。本馆不应把这些可能性简化成怯懦，也不应把紧急事件实验当作职场骚扰、政治压迫或历史暴力的证明。这些情境需要各自的证据，并且必须关注权力关系。'],
['The practical curatorial question is not simply “Why did nobody speak?” but “What did the situation make possible, risky or useful for each person present?” This is the Museum’s synthesis, not a combined causal result tested by R08, R09 and R10.',
'本馆真正希望追问的，不只是“为什么没有人开口”，而是“当时的情境让在场的每个人能够做什么、冒什么风险，又认为什么行动有效？”这是本馆的综合判断，并非R08、R09和R10共同检验过的因果结果。']
]},
{head:['References & Evidence Notes','参考文献与证据说明'],paras:[
['R08 — Darley, J. M., & Latané, B. (1968). Bystander intervention in emergencies: Diffusion of responsibility. Journal of Personality and Social Psychology, 8(4), 377–383. DOI: 10.1037/h0025589. The reported percentages refer to the specific intercom experiment and its observation window.',
'R08 — Darley, J. M., & Latané, B. (1968). Bystander intervention in emergencies: Diffusion of responsibility. Journal of Personality and Social Psychology, 8(4), 377–383. DOI: 10.1037/h0025589。相关百分比只对应特定对讲机实验及其观察时段。'],
['R09 — Fischer, P., Krueger, J. I., Greitemeyer, T., et al. (2011). The bystander-effect: A meta-analytic review on bystander intervention in dangerous and non-dangerous emergencies. Psychological Bulletin, 137(4), 517–537. DOI: 10.1037/a0023304. The synthesis includes 105 independent effect sizes; moderators qualify the overall effect.',
'R09 — Fischer, P., Krueger, J. I., Greitemeyer, T., et al. (2011). The bystander-effect: A meta-analytic review on bystander intervention in dangerous and non-dangerous emergencies. Psychological Bulletin, 137(4), 517–537. DOI: 10.1037/a0023304。元分析纳入105个独立效应量；调节因素限定了总体效应的解释范围。'],
['R10 — Edmondson, A. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350–383. DOI: 10.2307/2666999. The field study concerns 51 manufacturing teams and learning behaviour, not emergency helping.',
'R10 — Edmondson, A. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350–383. DOI: 10.2307/2666999。实地研究涉及51支制造业团队与学习行为，并非紧急施助研究。']
]}
]
},
{
title:['When Power Shapes Voice','权力如何影响表达？'],
subtitle:['How workplace safety, organizational silence and hidden transcripts illuminate the conditions of speaking.','从职场心理安全、组织沉默与隐藏话语，理解表达受到哪些条件影响。'],
ids:['R10','R11','R12','R13','R30'],
rows:[
['R10',['Psychological safety was associated with learning behaviour in 51 work teams.','在51支工作团队中，心理安全与学习行为存在关联。'],['Shows how interpersonal risk affects speaking and learning within teams.','呈现团队内部的人际风险如何影响表达与学习。']],
['R11',['Organizational structures and managerial assumptions may normalize silence and block upward feedback.','组织结构与管理者的预设可能使沉默常态化，并阻断向上反馈。'],['Offers a theoretical model of how silence can become institutional.','提供沉默如何制度化的理论模型。']],
['R12',['The review distinguishes employee voice from silence and maps individual, leadership and organizational influences.','综述区分员工表达与沉默，并梳理个人、领导及组织因素。'],['Clarifies the field and its evidence gaps.','梳理研究领域并指出证据空缺。']],
['R13',['Leadership openness was associated with employee voice; psychological safety helps explain the relationship.','领导开放性与员工表达存在关联，心理安全有助于解释这种关系。'],['Connects leader behaviour with opportunities to speak.','连接领导行为与表达机会。']],
['R30',['Public and hidden transcripts distinguish what is said under power from criticism expressed away from authority.','公开话语与隐藏话语区分了权力面前的表达，以及离开权威视线后的批评。'],['Adds a historical and political account of speech under domination.','补充支配关系下表达的历史与政治解释。']]
],
sections:[
{head:['Research Background & Literature','研究背景与文献介绍'],paras:[
['Silence in an organization is often described as an individual decision: an employee chooses not to speak. The studies in this comparison complicate that picture. R10 examines psychological safety and learning in teams; R11 develops a theory of organizational silence; R12 reviews research on employee voice and silence; R13 studies leadership openness and employee voice; and R30 offers a historical-political account of public and hidden transcripts under domination.',
'组织中的沉默常被描述为个人决定：员工选择不表达。但本专题纳入的研究使这种解释变得复杂。R10考察团队心理安全与学习；R11提出组织沉默理论；R12综述员工表达与沉默研究；R13研究领导开放性与员工表达；R30则从历史政治角度讨论支配关系下的公开与隐藏话语。'],
['The sources do not all use the same evidence. Some are empirical organizational studies, some are reviews or theoretical models, and R30 is a historical-political analysis. Their value lies in comparing different levels of explanation, not in pretending they measure one common variable.',
'这些文献并非使用同一种证据：有组织实证研究，也有综述、理论模型和历史政治分析。它们的价值在于比较不同层次的解释，而不是假装它们测量了同一个变量。']
]},
{head:['Comparative Analysis of Research Findings','研究结论的深度比较'],paras:[
['R10 finds that team psychological safety is associated with learning behaviour. Members who believe they can admit errors, ask questions and seek feedback without unacceptable interpersonal consequences are more likely to engage in learning behaviours. The study also distinguishes psychological safety from team efficacy: efficacy did not provide an equally consistent additional explanation when safety was considered. This is an empirical association within 51 manufacturing teams; it does not prove that psychological safety alone causes every form of employee voice.',
'R10发现，团队心理安全与学习行为存在关联。当成员相信自己能够承认错误、提出问题和寻求反馈，而不必承担无法接受的人际后果时，他们更可能参与学习行为。研究也区分了心理安全与团队效能感：在考虑心理安全后，效能感并没有提供同样稳定的额外解释。这是51支制造业团队中的实证关联，并不能证明心理安全单独导致所有形式的员工表达。'],
['R13 narrows the focus from team climate to leadership behaviour. It examines whether managers’ openness is associated with employees’ improvement-oriented voice, and the study identifies psychological safety as part of the explanatory relationship. Its contribution is to show that the behaviour of a person in authority can shape whether speaking seems possible. Yet openness is not the same as a formal guarantee that criticism will be acted upon, and the study’s associations should not be overstated as proof of a universal causal chain.',
'R13把焦点从团队氛围缩小到领导行为。它考察管理者的开放性是否与员工提出改善建议有关，并指出心理安全参与其中的解释关系。它的贡献在于说明，掌握权力者的行为会影响表达是否显得可行。但领导开放不等于制度保证批评一定会被采纳，研究中的关联也不能被夸大为普遍因果链。'],
['R11 offers a broader theoretical account. It proposes that managers’ fear of criticism and assumptions about employees can produce structures that discourage upward feedback. When leaders rarely hear disagreement, they may interpret silence as evidence that things are working; this in turn can reinforce practices that make speaking less safe or less worthwhile. Unlike R10 and R13, R11 does not report a newly recruited sample or one causal effect estimate. It proposes a mechanism to be tested, rather than a measured frequency of organizational silence.',
'R11提出更广泛的理论解释：管理者对批评的担忧以及对员工的预设，可能形成阻碍向上反馈的组织结构。当领导很少听到不同意见时，可能误以为一切正常；这种判断又可能强化让表达变得不安全或无意义的制度。与R10和R13不同，R11没有新招募的研究样本，也没有单一因果效应量。它提出的是有待检验的机制，而不是组织沉默发生频率的实测结果。'],
['R12 helps locate these findings within a wider field. The review distinguishes voice from silence and organizes influences at individual, leadership and organizational levels. It also identifies gaps, including limited evidence about the personal consequences of silence. R30 adds a different scale: under domination, public speech may be shaped by what authorities permit, while criticism or resistance may circulate in hidden settings. It warns that the public record of what people say cannot automatically be treated as the full account of what they think.',
'R12将上述发现放入更广泛的研究领域。它区分表达与沉默，并从个人、领导和组织层次梳理影响因素；同时指出研究空缺，包括沉默对员工个人影响的证据仍然有限。R30则增加了不同尺度的解释：在支配关系中，公开表达可能受到权威允许范围的塑造，而批评或抵抗则可能在隐藏场合流通。它提醒我们，公开记录下来的话语不能自动被视为人们全部思想的写照。']
]},
{head:['Explaining Agreements and Differences','共性、差异及其原因'],paras:[
['The organizational studies converge on one point: speaking is shaped by the response a person expects from the surrounding system. R10 emphasizes interpersonal risk within a team; R13 draws attention to the conduct of leaders; R11 explains how organizational assumptions and structures can make silence self-reinforcing. R12 maps these mechanisms across the literature. Their differences are largely differences of analytical level, not necessarily contradictions.',
'组织研究在一点上形成共识：表达会受到个人对周围制度如何回应的预期影响。R10强调团队内部的人际风险；R13关注领导者的行为；R11解释组织预设与结构如何使沉默自我强化；R12则在更广泛的文献中梳理这些机制。它们的差异主要来自分析层次不同，并不必然构成矛盾。'],
['R30 should not be treated as another workplace study. Its hidden-transcript framework concerns domination and the distinction between public performance and less visible criticism. It can illuminate why official speech may not represent private belief, but it does not validate every proposed organizational mechanism. The historical and political setting, the form of evidence and the questions being asked are different.',
'R30不能被当成另一篇职场研究。隐藏话语框架关注支配关系，以及公开表演与不易被看见的批评之间的区别。它能够帮助理解为什么官方表达未必代表私人信念，却不能验证所有组织机制。其历史政治情境、证据形式和研究问题都不同。'],
['A further distinction is between fear and futility. A person may remain silent because speaking seems dangerous, or because speaking seems useless. These motives can coexist, but they imply different institutional problems. Reducing both to a lack of confidence would overlook whether the organization punishes dissent, ignores feedback or offers no meaningful channel for response.',
'还需要区分恐惧与无效感。一个人可能因为表达显得危险而沉默，也可能因为认为表达毫无作用而沉默。这两种动机可以同时存在，却指向不同的制度问题。如果把它们都归结为缺乏自信，就会忽略组织是否惩罚异议、忽视反馈，或根本没有提供有意义的回应渠道。']
]},
{head:['The Museum’s Interpretation','本馆的综合结论'],paras:[
['The Museum considers voice to depend not only on whether a person has something to say, but also on whether the surrounding structure allows the words to be heard, protected and acted upon. Silence can emerge when interpersonal risk is high, when leaders appear unreceptive, when feedback routes are blocked, or when people have learned that speaking changes nothing.',
'本馆认为，表达不仅取决于一个人是否有话要说，也取决于周围结构是否允许这些话被听见、受到保护并产生作用。当人际风险过高、领导者显得不愿倾听、反馈渠道被阻断，或人们已经习惯认为表达不会改变任何事情时，沉默就可能形成。'],
['The Museum therefore reads organizational silence as more than a collection of individual choices. It may become a pattern reproduced by leadership, routines and institutional memory. In historical settings, the same caution applies to official records: what appears publicly may be only the speech that could safely or strategically be recorded. The curator must ask who controlled the conditions of speaking and the survival of the record.',
'因此，本馆不会把组织沉默仅仅理解为一连串个人选择。它可能成为由领导方式、日常惯例和制度记忆不断再生产的模式。在历史情境中，对官方档案也应保持同样警惕：公开留下的内容，可能只是当时能够或适合被记录的话语。策展人必须追问，谁控制了表达条件，又是谁决定哪些记录能够留存。'],
['This interpretation does not mean every silence is imposed or every organization suppresses dissent. It means that before judging an individual for not speaking, we should examine the channels, power relations and likely consequences surrounding that person. This is the Museum’s synthesis across empirical, review-based and theoretical sources.',
'这一解释并不意味着每一种沉默都是被强加的，也不意味着每个组织都在压制异议。它意味着，在评判一个人为何没有表达之前，我们应先考察他周围的渠道、权力关系和可能后果。这是本馆对实证研究、综述和理论文献的综合判断。']
]},
{head:['References & Evidence Notes','参考文献与证据说明'],paras:[
['R10 — Edmondson (1999), Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350–383. DOI: 10.2307/2666999. Full article and team-level analyses are included in the dossier.',
'R10 — Edmondson (1999), Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350–383. DOI: 10.2307/2666999。档案已核对论文全文及团队层面的分析。'],
['R11 — Morrison & Milliken (2000), Organizational silence: A barrier to change and development in a pluralistic world. Academy of Management Review, 25(4), 706–725. DOI: 10.5465/amr.2000.3707697. This is a theoretical model, not a new experiment.',
'R11 — Morrison & Milliken (2000), Organizational silence: A barrier to change and development in a pluralistic world. Academy of Management Review, 25(4), 706–725. DOI: 10.5465/amr.2000.3707697。这是理论模型，并非新实验。'],
['R12 — Morrison (2014), Employee voice and silence. Annual Review of Organizational Psychology and Organizational Behavior, 1, 173–197. DOI: 10.1146/annurev-orgpsych-031413-091328. The review was checked; its cited primary studies were not all re-audited individually.',
'R12 — Morrison (2014), Employee voice and silence. Annual Review of Organizational Psychology and Organizational Behavior, 1, 173–197. DOI: 10.1146/annurev-orgpsych-031413-091328。已核对综述正文，但没有逐一重新审阅其中所有原始研究。'],
['R13 — Detert & Burris (2007), Leadership behavior and employee voice: Is the door really open? Academy of Management Journal, 50(4), 869–884. The study’s source record and main design are documented; precise coefficients are not reproduced here.',
'R13 — Detert & Burris (2007), Leadership behavior and employee voice: Is the door really open? Academy of Management Journal, 50(4), 869–884。档案记录了研究来源与主要设计；此处不擅自补入精确系数。'],
['R30 — Scott (1990), Domination and the arts of resistance: Hidden transcripts. Yale University Press. The work is used as a theoretical-historical lens; the museum does not claim to have independently re-audited every historical case in the book.',
'R30 — Scott (1990), Domination and the arts of resistance: Hidden transcripts. Yale University Press。本书作为历史理论视角使用；本馆不宣称已经独立重新核查书中每一个历史案例。']
]}
]
},
{
title:['Gratitude, Disclosure and Apology','感谢、披露与道歉'],
subtitle:['Why different forms of emotional expression cannot be treated as one universal relationship skill.','为什么不同形式的情感表达不能被视为一种普遍适用的关系技巧。'],
ids:['R15','R16','R19','R21'],
rows:[
['R15',['Perceived responsiveness after expressed gratitude was associated with subsequent relationship-quality improvement over six months.','表达感谢后，接收者感受到的回应性与随后六个月的关系质量改善存在关联。'],['Highlights the recipient’s experience, not merely the act of saying thank you.','强调接收者的感受，而不只是表达感谢这一行为。']],
['R16',['Daily gratitude predicted next-day relationship connection and satisfaction; indebtedness did not show the same distinct pattern.','日常感恩能够预测次日关系连接感和满意度；负债感没有呈现同样独特的模式。'],['Distinguishes gratitude from feeling obliged.','区分感恩与觉得自己欠人情。']],
['R19',['Meta-analysis found bidirectional links between disclosure and liking, with substantial variation by research design and context.','元分析发现自我披露与好感之间存在双向联系，但结果会随研究设计和情境而显著变化。'],['Shows that disclosure is neither uniformly beneficial nor a one-way cause.','说明披露并非总有益，也不是单向因果过程。']],
['R21',['More complete apologies tended to receive better effectiveness ratings; accepting responsibility and offering repair were important components.','包含更多关键要素的道歉通常获得更高有效性评价；承担责任与提出补救是重要组成部分。'],['Separates apology structure from actual long-term reconciliation.','区分道歉结构与现实中的长期和解。']]
],
sections:[
{head:['Research Background & Literature','研究背景与文献介绍'],paras:[
['People often group gratitude, self-disclosure and apology under the broad idea of “expressing feelings”. Yet saying thank you, revealing something personal and taking responsibility for harm are different communicative acts. This comparison brings together R15 and R16 on gratitude, R19 on disclosure and liking, and R21 on apology structure. The value of reading them together is not to prove that expression always improves relationships, but to examine what kind of expression matters, to whom and under what conditions.',
'人们常把感谢、自我披露和道歉统称为“表达感情”。但说谢谢、透露私人经历，以及为伤害承担责任，是不同的沟通行为。本专题比较R15和R16的感恩研究、R19关于披露与好感的元分析，以及R21关于道歉结构的研究。把它们放在一起阅读，并不是为了证明表达总能改善关系，而是为了考察何种表达对谁有意义，又需要哪些条件。'],
['The evidence is uneven. R16 and R19 have fuller source review in the current dossiers, while R15 is checked against the official abstract and publisher preview, and R21’s complete methods and coefficients are not all available in the dossier. The analysis therefore distinguishes what is directly established from what remains provisional.',
'这些研究的证据核查程度并不相同。R16和R19在现有档案中完成了较充分的原文审阅；R15目前依据正式摘要和出版方预览核查；R21的完整方法和统计系数也尚未全部取得。因此，本文会明确区分已经能够确认的发现与仍然暂定的判断。']
]},
{head:['Comparative Analysis of Research Findings','研究结论的深度比较'],paras:[
['R16 examines everyday gratitude within romantic relationships. Its diary study of 67 cohabiting couples collected 1,768 entries across a 14-day period. Perceived thoughtful actions were related to both gratitude and indebtedness, but gratitude showed a distinct association with next-day relationship connection and satisfaction for both partners. Indebtedness did not show the same unique relationship-promoting pattern. The finding suggests that feeling grateful is not simply the same as feeling obligated to repay someone.',
'R16考察亲密关系中的日常感恩。研究追踪67对同居伴侣，在14天内收集了1768份日记。被感知到的贴心行为与感恩和负债感都有联系，但感恩能够独特地预测双方次日的关系连接感和满意度，负债感却没有呈现同样的关系促进模式。这提示我们，感到感恩并不等同于觉得自己有义务回报对方。'],
['R15 also concerns gratitude, but its focus is the recipient’s experience of the expression. The study links the recipient’s perception that the speaker is responsive and attentive with later relationship-quality improvement over six months. This adds an important layer to R16: the expression matters not only as an emotion experienced by the speaker, but also through how the other person receives and interprets it. However, because the current dossier has only verified the abstract and publisher preview, the museum does not assign unverified sample sizes or coefficients to R15.',
'R15同样研究感恩，但它关注的是接收者如何体验这份表达。研究发现，接收者越觉得表达感谢的人能够关注并回应自己，之后六个月的关系质量改善就越明显。这为R16增加了一层理解：表达的意义不仅在于表达者产生了什么情绪，也在于对方如何接收和理解。但由于现有档案只核查了R15的正式摘要和出版方预览，本馆不会为它补入未经核实的样本量或统计系数。'],
['R19 complicates any simple claim that disclosure is good for relationships. Its meta-analysis separates several directions of influence: people may like someone more after that person discloses, people may disclose more to someone they already like, and disclosure may influence liking in other ways. The pooled findings are heterogeneous. Although the average effect for liking the discloser was positive, public disclosures between strangers did not follow the same pattern and could be negative. The association between liking and disclosure was also stronger in existing relationships than in experimental settings, warning against treating correlation as proof that disclosure causes intimacy.',
'R19使“披露有益于关系”这一简单说法变得复杂。元分析区分了几种影响方向：人们可能因为对方披露而更喜欢对方；也可能因为本来就喜欢某个人，所以更愿意向其披露；披露还可能以其他方式影响好感。汇总结果存在明显异质性。虽然整体上披露者更受欢迎的平均效应为正，但陌生人在公共场合的披露并不符合这一模式，甚至可能产生负面结果。既有关系中的好感与披露关联也强于实验情境，提醒我们不能把相关性直接当成披露造成亲密的证据。'],
['R21 examines what makes an apology appear effective. Its findings suggest that a more complete apology tends to receive higher effectiveness ratings, while acknowledging responsibility and offering repair are particularly important. This is different from gratitude and disclosure: an apology responds to a perceived wrong and includes accountability. Yet the measured outcome is the evaluation of an apology in structured scenarios, not proof that a real apology will always be accepted or that a damaged relationship will be restored.',
'R21考察一场道歉为什么会被认为有效。研究发现，包含较多关键要素的道歉通常获得更高的有效性评价，其中承认责任和提出补救尤其重要。这与感恩和自我披露不同：道歉回应的是已经发生的伤害，并包含责任承担。但研究测量的是结构化情境中人们对道歉的评价，并不能证明现实中的道歉一定会被接受，或受损关系一定能够修复。'],
['Taken together, the four studies do not support a single rule such as “always express your feelings”. They instead show that gratitude, disclosure and apology work through different relational processes: perceived responsiveness, reciprocal connection, the direction of liking and disclosure, and accountability for harm.',
'综合四项研究，无法得出“永远应该表达感受”这样的单一规则。它们呈现的是不同的关系机制：感恩中的回应性感知、日常互惠中的关系连接、自我披露与好感的双向关系，以及道歉中的责任承担。']
]},
{head:['Explaining Agreements and Differences','共性、差异及其原因'],paras:[
['The studies share an interest in how words affect relationships, but the social function of each kind of speech differs. Gratitude recognizes another person’s action; disclosure offers information about the self; apology acknowledges a breach and may propose repair. The recipient is therefore evaluating different things in each case. A thank-you may communicate that a contribution was noticed; a disclosure may invite intimacy but also cross a privacy boundary; an apology may be judged by whether responsibility is genuinely accepted.',
'这些研究都关心语言如何影响关系，但不同话语承担的社会功能并不相同。感谢是承认对方的付出；自我披露是提供关于自己的信息；道歉则承认关系中的伤害，并可能提出补救。因此，接收者在不同情境中评估的内容也不同。感谢可能传达对付出的看见；披露可能邀请亲密，也可能越过隐私边界；道歉则可能取决于责任是否真正得到承认。'],
['Their results also differ because the evidence measures different outcomes and time frames. R16 follows daily relationship reports; R15 links a laboratory expression to later relationship quality; R19 combines studies with varied designs; R21 evaluates apology components in structured scenarios. These outcomes cannot be ranked as though one expression were objectively more powerful than another. The distinction between immediate response, perceived effectiveness and later relationship quality must remain visible.',
'研究结果之所以不同，也因为它们测量了不同结果和时间跨度。R16追踪日常关系记录；R15把实验室中的感恩表达与之后的关系质量联系起来；R19汇总不同设计的研究；R21则在结构化情境中评价道歉要素。不能把这些结果排成某种表达客观上更有效的排名。即时反应、主观有效性评价和长期关系质量必须保持区分。'],
['R19 is especially useful as a corrective to romanticized ideas about openness. Disclosure can be welcomed in one relationship and unwelcome in another setting. The identity of the listener, intimacy, timing, public or private context and depth of disclosure all matter. The current evidence therefore supports sensitivity to the recipient and the relationship, not indiscriminate emotional exposure.',
'R19尤其能够修正对坦诚表达的浪漫化想象。同样的披露，在一种关系中可能受到欢迎，在另一种情境中却可能令人不适。听者是谁、双方亲密程度、表达时机、公开或私密场合，以及披露深度，都可能产生影响。因此，现有证据支持的是对接收者和关系情境保持敏感，而不是毫无区分地暴露情绪。']
]},
{head:['The Museum’s Interpretation','本馆的综合结论'],paras:[
['The Museum considers emotional expression to be relational rather than automatically beneficial. Its meaning depends on what is being expressed, the history between speaker and listener, the recipient’s needs and the response that follows. A sincere expression may strengthen connection when it recognizes the other person, respects the relationship and takes responsibility where needed. The same act may be poorly timed, unwelcome or insufficient in another context.',
'本馆认为，情感表达的意义来自关系，而不是表达本身天然有益。它取决于表达的内容、说话者与听者之间的关系历史、接收者的需要，以及表达之后发生的回应。当表达能够看见对方、尊重关系，并在必要时承担责任时，它可能增强联系；但同一种行为在另一种情境中也可能时机不当、不受欢迎，或根本不足以解决问题。'],
['The Museum therefore distinguishes the courage to speak from the wisdom of choosing what, when and to whom to say. Not every feeling must be disclosed, not every apology guarantees forgiveness, and not every expression of gratitude produces lasting improvement. Silence can sometimes protect a legitimate boundary; at other times, withholding an apology or important information may leave harm unaddressed.',
'因此，本馆区分“敢于表达”与“判断应该表达什么、何时表达、向谁表达”的能力。并非每一种感受都必须披露，并非每一次道歉都能换来原谅，也并非每一句感谢都会带来持久改善。沉默有时能够保护正当边界；但在另一些情境中，拒绝道歉或隐瞒重要信息，也可能让伤害继续存在。'],
['This is a conditional interpretation drawn from different research programmes. It does not claim that the four studies tested one universal theory of emotional communication.',
'这是本馆从不同研究计划中形成的条件性判断，并不意味着四项研究共同检验过一套普遍适用的情感沟通理论。']
]},
{head:['References & Evidence Notes','参考文献与证据说明'],paras:[
['R15 — Algoe, S. B., Fredrickson, B. L., & Gable, S. L. (2013). The social functions of the emotion of gratitude via expression. Emotion, 13(4), 605–609. DOI: 10.1037/a0032701. Current verification: official abstract and authorized publisher first-page preview; full sample details and coefficients are not asserted.',
'R15 — Algoe, S. B., Fredrickson, B. L., & Gable, S. L. (2013). The social functions of the emotion of gratitude via expression. Emotion, 13(4), 605–609. DOI: 10.1037/a0032701。当前核查范围：正式摘要及授权出版方首页预览；不宣称已核实完整样本细节和统计系数。'],
['R16 — Algoe, S. B., Gable, S. L., & Maisel, N. C. (2010). It’s the little things: Everyday gratitude as a booster shot for romantic relationships. Personal Relationships, 17(2), 217–233. DOI: 10.1111/j.1475-6811.2010.01273.x. Full article and diary-study details checked.',
'R16 — Algoe, S. B., Gable, S. L., & Maisel, N. C. (2010). It’s the little things: Everyday gratitude as a booster shot for romantic relationships. Personal Relationships, 17(2), 217–233. DOI: 10.1111/j.1475-6811.2010.01273.x。已核对全文及日记研究细节。'],
['R19 — Collins, N. L., & Miller, L. C. (1994). Self-disclosure and liking: A meta-analytic review. Psychological Bulletin, 116(3), 457–475. DOI: 10.1037/0033-2909.116.3.457. Full meta-analysis and original tables checked.',
'R19 — Collins, N. L., & Miller, L. C. (1994). Self-disclosure and liking: A meta-analytic review. Psychological Bulletin, 116(3), 457–475. DOI: 10.1037/0033-2909.116.3.457。已核对元分析全文及原始表格。'],
['R21 — Lewicki, R. J., Polin, B., & Lount, R. B., Jr. (2016). An exploration of the structure of effective apologies. Negotiation and Conflict Management Research, 9(2), 177–196. Current verification: abstract and institutional summary; full statistical details are not reproduced.',
'R21 — Lewicki, R. J., Polin, B., & Lount, R. B., Jr. (2016). An exploration of the structure of effective apologies. Negotiation and Conflict Management Research, 9(2), 177–196。当前核查范围：摘要及机构说明；不补入未经核实的完整统计细节。']
]}
]
},
{
title:['Family Communication and Topic Avoidance','家庭沟通与话题回避'],
subtitle:['How family communication patterns, avoided topics and social sharing offer different explanations of what remains unsaid.','比较家庭沟通模式、话题回避与情绪分享，理解家庭中未说出口的话。'],
ids:['R17','R18','R20'],
rows:[
['R17',['Conversation and conformity orientations offer a framework for understanding different family communication climates.','谈话取向与一致性取向构成理解不同家庭沟通氛围的框架。'],['Explains family-level patterns, not the motive behind one person’s silence.','解释家庭整体互动模式，而非某个人沉默的具体动机。']],
['R18',['Topic avoidance varies with the relationship and the subject being discussed; the evidence available in the dossier does not support universal claims about all families.','话题回避会随关系和谈论主题而变化；目前档案可核实的证据不足以支持对所有家庭作出普遍判断。'],['Brings the analysis to concrete topics people avoid with family members.','把分析落到家庭成员实际回避的具体话题。']],
['R20',['The review discusses social sharing of emotion and possible functions such as connection, validation and meaning-making.','综述讨论情绪的社会分享，以及联结、确认和意义建构等可能功能。'],['Explains why people may share feelings, without proving that everyone must disclose.','解释人们为何可能分享感受，但不证明每个人都必须披露。']]
],
sections:[
{head:['Research Background & Literature','研究背景与文献介绍'],paras:[
['Family silence is often interpreted through assumptions: a family member should already know, certain topics should remain private, or speaking openly will create conflict. The studies here approach family communication at different levels. R17 introduces family communication patterns, especially conversation and conformity orientations. R18 examines topic avoidance in family relationships. R20 reviews why people share emotional experiences with others and what social functions such sharing may serve.',
'家庭中的沉默常被一些预设解释：家人应该早已知道彼此的感受；某些话题最好保持私密；或者坦诚表达只会引发冲突。本专题纳入的研究从不同层次考察家庭沟通。R17介绍家庭沟通模式，尤其是谈话取向与一致性取向；R18研究家庭关系中的话题回避；R20则综述人们为何与他人分享情绪经历，以及这种分享可能具有哪些社会功能。'],
['The three sources are not equivalent. R17 is a theoretical and research synthesis, R18’s current dossier is based on the official abstract and institutional records rather than a fully audited article, and R20 is a review of emotional social sharing. Their claims must be limited to what the available evidence supports.',
'三项来源并不等价。R17是理论与既有研究的整合；R18目前的档案依据正式摘要和机构书目记录，而非完成全文审校的论文；R20则是情绪社会分享综述。因此，本文的判断必须限制在现有证据真正支持的范围内。']
]},
{head:['Comparative Analysis of Research Findings','研究结论的深度比较'],paras:[
['R17 offers a framework for understanding family communication climates through two orientations. Conversation orientation concerns how freely family members are encouraged to exchange ideas and discuss a range of topics. Conformity orientation concerns the extent to which family members are expected to share beliefs, values or ways of thinking. These dimensions help distinguish families in which discussion is encouraged from those in which agreement and hierarchy are more strongly emphasized. But the framework does not identify why a particular person withheld a particular sentence.',
'R17通过两个维度提供理解家庭沟通氛围的框架。谈话取向关注家庭成员在多大程度上被鼓励自由交流观点、讨论不同话题；一致性取向则关注家庭成员在多大程度上被期待拥有相同的信念、价值观或思考方式。这两个维度有助于区分鼓励讨论的家庭，与更强调一致和等级秩序的家庭。但这一框架无法直接说明某个人为什么没有说出某一句话。'],
['R18 brings the question closer to everyday family interaction by examining topic avoidance: what subjects people choose not to discuss and how that choice relates to the relationship. Its available findings point to the importance of the topic and the person being addressed. This is a useful correction to the idea that silence is simply a stable personal trait. Yet because the full methods and numerical results have not been verified in the current dossier, the museum does not make precise claims about which family member avoids which topic more often or why.',
'R18把问题带回日常家庭互动，考察人们选择不谈论哪些话题，以及这种选择与关系之间的联系。现有可核实内容提示，话题本身和谈话对象都很重要。这修正了把沉默视为稳定个人性格的想法。但由于当前档案尚未核实完整方法和数值结果，本馆不会精确断言哪一类家庭成员更常回避哪种话题，也不会推测其原因。'],
['R20 broadens the perspective beyond the family. The review describes emotional sharing as a social process that may help people seek connection, confirmation, meaning or social regulation. It suggests that people often turn to others after emotional experiences, but the functions and effects vary across situations. It does not show that sharing is always helpful, that every emotion should be disclosed, or that the absence of sharing means a person has no need for connection.',
'R20把视角从家庭扩展到更广泛的社会互动。综述将情绪分享描述为一种社会过程，人们可能借此寻求联结、确认、意义或社会调节。它指出，人们经历情绪事件后往往会向他人分享，但分享的功能和效果会随情境变化。它并没有证明分享总是有帮助、每种情绪都应该披露，或没有分享就意味着一个人不需要联结。'],
['Together, R17 explains the broader communication climate, R18 focuses on the subjects that become difficult to discuss, and R20 offers possible social functions of sharing emotion. The studies complement one another, but they do not establish that family communication patterns directly cause a specific topic to be avoided or that social sharing will resolve it.',
'综合来看，R17解释较广泛的家庭沟通氛围，R18聚焦变得难以讨论的具体话题，R20则提供情绪分享可能发挥的社会功能。三者可以互相补充，但并未证明家庭沟通模式会直接导致某个具体话题被回避，也没有证明情绪分享一定能够解决问题。']
]},
{head:['Explaining Agreements and Differences','共性、差异及其原因'],paras:[
['The common ground is that communication is shaped by relationships and expectations. In a family with strong conformity expectations, disagreement may carry a different meaning from disagreement in a family where discussion is encouraged. A topic involving identity, money, illness or past conflict may also be treated differently from ordinary daily conversation. R18’s focus on topic avoidance therefore adds specificity to R17’s broader framework.',
'三项研究的共同点是：沟通受到关系和期待塑造。在一致性期待较强的家庭中，表达不同意见可能意味着不同的风险；在鼓励讨论的家庭里，分歧则可能更容易被接受。涉及身份、金钱、疾病或过去冲突的话题，也可能与日常闲聊受到不同对待。因此，R18对具体回避话题的关注，为R17较宽泛的框架增加了情境细节。'],
['R20 should not be used to fill gaps in R18. A general review of emotional sharing cannot tell us whether a particular family avoids a topic because of shame, privacy, fear of conflict, care for another person or a history of punishment. Those are plausible explanations that require direct evidence in the relevant relationship. Nor does the value of social sharing mean that family members are entitled to know everything about one another.',
'R20不能被用来填补R18的证据空缺。关于情绪分享的一般综述，无法告诉我们某个家庭为何回避某个话题：原因可能是羞耻、隐私、害怕冲突、顾及他人，或过去曾因表达而受到惩罚。这些都是可能解释，但需要在具体关系中取得直接证据。情绪分享可能具有价值，也不意味着家庭成员有权知道彼此的一切。'],
['The evidence types also matter. R17 offers a conceptual map; R18 concerns a more specific family behaviour but has incomplete source verification in this project; R20 synthesizes broader social-sharing literature. Their apparent agreement about relational context does not mean they have independently measured the same mechanism.',
'证据类型同样重要。R17提供概念框架；R18研究更具体的家庭行为，但本项目尚未完成其来源核查；R20综合的是更广泛的社会分享文献。它们都强调关系情境，并不意味着它们独立测量了同一种机制。']
]},
{head:['The Museum’s Interpretation','本馆的综合结论'],paras:[
['The Museum considers family silence to be shaped by both the structure of a relationship and the meaning of the particular topic. A person may avoid a conversation because the family rarely discusses difficult subjects, because disagreement threatens a sense of unity, or because the topic is private and the person does not wish to disclose it. These possibilities must be distinguished rather than assumed.',
'本馆认为，家庭沉默既受到关系结构影响，也受到具体话题意义影响。一个人可能因为家庭很少讨论困难议题而回避谈话；可能因为分歧威胁到家庭一致感而选择沉默；也可能只是因为话题属于私人领域，并不愿意披露。这些可能性需要被区分，而不能预先假定。'],
['The Museum also questions the comforting assumption that family members always know what one another feels. Familiarity may create understanding, but it can also encourage people to assume they already know, without checking. At the same time, the right to keep something private remains legitimate. A healthy interpretation of family communication should therefore leave room for both expression and privacy.',
'本馆也会质疑一种令人安心却未必可靠的假设：家人总能知道彼此的感受。熟悉可能带来理解，却也可能让人以为自己已经知道，而不再确认。同时，保留私人空间仍然是一项正当权利。因此，对家庭沟通的合理理解，应同时为表达与隐私留下空间。'],
['This conclusion is deliberately conditional. The current evidence helps identify relevant dimensions, but it cannot reveal what a specific family member knows, fears or intends when remaining silent.',
'这一结论刻意保持条件性。现有研究能够帮助我们识别相关维度，却无法揭示某位具体家庭成员沉默时究竟知道什么、害怕什么或打算什么。']
]},
{head:['References & Evidence Notes','参考文献与证据说明'],paras:[
['R17 — Koerner, A. F., & Fitzpatrick, M. A. (2002). Understanding family communication patterns and family functioning: The roles of conversation orientation and conformity orientation. Communication Yearbook, 26, 37–69. Current dossier verifies the conceptual framework and publisher record; cited empirical studies have not all been re-audited.',
'R17 — Koerner, A. F., & Fitzpatrick, M. A. (2002). Understanding family communication patterns and family functioning: The roles of conversation orientation and conformity orientation. Communication Yearbook, 26, 37–69。当前档案核实了概念框架和出版记录，但未逐一重新审阅综述引用的所有实证研究。'],
['R18 — Guerrero, L. K., & Afifi, W. A. (1995). Some things are better left unsaid: Topic avoidance in family relationships. Communication Quarterly, 43(3), 276–296. Current dossier is based on the official abstract and institutional bibliographic records; full methods and numerical results require further verification.',
'R18 — Guerrero, L. K., & Afifi, W. A. (1995). Some things are better left unsaid: Topic avoidance in family relationships. Communication Quarterly, 43(3), 276–296。当前档案依据正式摘要和机构书目记录；完整方法和数值结果仍需进一步核实。'],
['R20 — Rimé, B. (2009). Emotion elicits the social sharing of emotion: Theory and empirical review. Emotion Review, 1(1), 60–85. DOI: 10.1177/1754073908097189. Review evidence is synthesized across contexts; no single universal effect is asserted.',
'R20 — Rimé, B. (2009). Emotion elicits the social sharing of emotion: Theory and empirical review. Emotion Review, 1(1), 60–85. DOI: 10.1177/1754073908097189。该综述整合不同情境的研究，不支持单一普遍效应的断言。']
]}
]
},
{
title:['The Imagined Audience','想象中的读者'],
subtitle:['What large-scale nonpublication data, interviews and privacy theories can—and cannot—tell us about holding words back.','大规模未发布行为数据、访谈与隐私理论，分别能告诉我们什么，又有哪些边界。'],
ids:['R22','R23','R24','R27'],
rows:[
['R22',['In a 17-day Facebook observation, 71% of analysed users had at least one measured nonpublication event; the study did not reveal draft contents or individual motives.','在17天的Facebook观察中，71%的可分析用户至少出现一次符合定义的未发布事件；研究没有揭示草稿内容或个人动机。'],['Establishes the scale of a platform-defined behaviour.','呈现平台操作定义下未发布行为的规模。']],
['R23',['Twitter users described managing imagined audiences through context cues, indirect language and self-presentation strategies.','Twitter用户描述了如何通过情境线索、间接表达和自我呈现策略管理想象中的受众。'],['Explains how people think about who may read their words.','解释人们如何想象可能阅读自己文字的人。']],
['R24',['Teenagers negotiate networked privacy through social relationships and audience management; technical settings cannot guarantee privacy.','青少年通过社会关系和受众管理协商网络隐私；技术设置无法完全保证隐私。'],['Shows privacy as relational negotiation rather than a simple public/private switch.','把隐私呈现为关系协商，而非简单的公开／私密开关。']],
['R27',['Privacy-boundary theory treats disclosure as negotiated ownership and coordination of private information.','隐私边界理论将披露理解为私人信息所有权与边界协调的过程。'],['Offers a framework for interpreting disclosure choices, not direct evidence about a particular draft.','提供理解披露选择的理论框架，而非某份草稿动机的直接证据。']]
],
sections:[
{head:['Research Background & Literature','研究背景与文献介绍'],paras:[
['A message can be written without being sent. In digital spaces, a person may type a post, reconsider the imagined audience and decide not to publish. This comparison brings together R22’s large-scale behavioural analysis of Facebook nonpublication, R23’s interviews about Twitter users’ imagined audiences, R24’s study of teenagers negotiating networked privacy, and R27’s privacy-boundary theory.',
'一段话可以写下来，却不一定被发送。在数字空间里，一个人可能输入帖子、想象潜在读者，再决定不发布。本专题比较四项不同类型的研究：R22对Facebook未发布行为的大规模分析；R23关于Twitter用户想象受众的访谈；R24对青少年协商网络隐私的研究；以及R27关于隐私边界的理论。'],
['The sources answer different questions. Behavioural traces show that nonpublication occurs but cannot reveal what a person intended. Interviews illuminate how users understand their audiences but cannot estimate the prevalence of a behaviour across an entire platform. Privacy theory helps interpret these choices, but it is not a direct observation of any individual draft.',
'这些来源回答的问题并不相同。行为痕迹能够显示未发布行为确实发生，却无法揭示个人意图；访谈能够说明用户如何理解受众，却无法估算整个社交平台上的行为比例；隐私理论有助于解释这些选择，却不是对某份具体草稿的直接观察。']
]},
{head:['Comparative Analysis of Research Findings','研究结论的深度比较'],paras:[
['R22 observed Facebook composing behaviour over 17 days in 2012. The main analysis included 3,941,161 users. Seventy-one per cent of analysed users had at least one event meeting the study’s definition of self-censorship; 51% withheld at least one post and 44% at least one comment. These user-level figures should not be added because the groups overlap. At the content level, the study reported that 33% of potential posts and 13% of potential comments were not published. The study establishes that nonpublication was common in this particular dataset, but it cannot identify the unseen text or the reason it was withheld.',
'R22观察了2012年Facebook用户连续17天的输入行为，主要分析样本包括3,941,161人。71%的可分析用户至少出现一次符合研究定义的自我审查事件；51%至少保留过一条帖子，44%至少保留过一条评论。这些用户比例不能相加，因为两组存在重叠。按内容计算，33%的潜在帖子和13%的潜在评论没有发布。研究能够证明，在这一特定数据集中，未发布行为相当常见；但它无法识别没有被看见的文字，也无法确定保留文字的原因。'],
['R23 addresses the missing subjective explanation. Through interviews with Twitter users, Marwick and boyd describe how people imagine a networked audience and manage context collapse. Users may address a particular audience, use in-group references, monitor feedback or balance authenticity with personal image. These accounts show that posting is not simply a decision about whether to speak; it is also a decision about how many different audiences may interpret the same words. Yet the interviews do not measure how often all users abandon drafts, and they cannot explain the motive behind each event recorded by R22.',
'R23试图补充R22缺少的主观解释。Marwick与boyd通过对Twitter用户的访谈，说明人们如何想象网络化受众，并管理不同情境折叠在一起的问题。用户可能试图面向特定群体表达，使用圈内暗示、观察反馈，或在真实表达与个人形象之间寻求平衡。这些叙述显示，发布不只是决定是否说话，也是决定同一段文字可能被多少不同受众理解。但访谈无法测量所有用户放弃草稿的频率，也不能解释R22记录的每一次未发布行为。'],
['R24 extends the analysis to teenagers’ networked privacy. It shows that privacy is negotiated through social relationships, group expectations and audience management rather than guaranteed by technical settings alone. A person may share something with one group while trying to prevent it from travelling to another. R27 provides a theoretical vocabulary for this process: private information has boundaries, and disclosure involves decisions about who may access it and how others should handle it. These sources help interpret the social meaning of nonpublication, but neither proves that privacy concerns caused the particular Facebook events observed in R22.',
'R24把分析扩展到青少年的网络隐私。它显示，隐私是通过社会关系、群体期待和受众管理协商出来的，并非只靠技术设置就能保证。一个人可能愿意向某个群体分享内容，却希望阻止信息流向另一个群体。R27则为这一过程提供理论语言：私人信息具有边界，披露意味着决定谁能够接触信息，以及他人应该如何处理这些信息。这些来源有助于理解未发布行为的社会意义，但都不能证明隐私顾虑造成了R22所观察到的具体事件。'],
['The strongest comparison is therefore complementary rather than causal. R22 tells us that platform-defined nonpublication occurs at scale. R23 and R24 explain how imagined audiences and privacy negotiations can shape online communication. R27 offers a conceptual framework for understanding the boundary decisions involved. None of them jointly tests a single causal explanation for why an individual did not press “post”.',
'因此，这组研究最有力的关系是互补，而不是因果证明。R22告诉我们，平台定义下的未发布行为大规模存在；R23和R24解释想象中的读者与隐私协商如何影响网络沟通；R27提供理解边界决策的概念框架。它们没有共同检验某个人为何没有按下“发布”键的单一因果解释。']
]},
{head:['Explaining Agreements and Differences','共性、差异及其原因'],paras:[
['All four sources treat communication as audience-dependent. Words do not enter an empty space: they are read by particular people, interpreted through relationships and potentially redistributed beyond the intended context. Their shared emphasis is that publication changes control over information. The differences arise from the kind of evidence each source can provide: R22 records behaviour, R23 records users’ accounts, R24 examines social negotiation among teenagers, and R27 theorizes privacy boundaries.',
'四项来源都把沟通理解为受众相关的行为。文字不会进入真空，而是由特定的人阅读，通过关系理解，并可能被传播到原本预期之外的情境。它们共同强调，公开发布会改变信息控制权。差异则来自各自能够提供的证据类型：R22记录行为，R23记录用户叙述，R24考察青少年的社会协商，R27建立隐私边界理论。'],
['This is why the 71% figure cannot be used to claim that 71% of people were afraid of judgment. The measure records a typed but unpublished item under a platform-specific time rule; it does not reveal whether the user was anxious, distracted, interrupted, changed their mind or simply decided the message was unnecessary. Conversely, interviews may reveal nuanced reasons but cannot establish how common each reason is.',
'因此，不能用71%这个数字声称“71%的人害怕被评价”。该指标记录的是在平台特定时间规则下输入但未发布的内容，并不能说明用户当时是焦虑、分心、被打断、改变主意，还是单纯认为没有必要发送。反过来，访谈能够揭示细腻的理由，却无法证明每种理由有多普遍。'],
['The studies also caution against treating privacy as a wish to hide everything. People may want to communicate honestly while retaining control over context, audience and future circulation. A message can be intended for one relationship without being intended for every person who can technically access it. Not publishing may therefore be a way of protecting context, but the evidence does not allow us to assume this is the motive in every case.',
'这些研究也提醒我们，不能把隐私理解为想隐藏一切。人们可能希望真诚沟通，同时保留对情境、受众和后续传播的控制。一段话可能是说给某段关系听的，却不意味着所有技术上能够看到它的人都应该看到。因此，不发布可能是一种保护情境的方式，但现有证据不允许我们假定每次未发布都是出于这一动机。']
]},
{head:['The Museum’s Interpretation','本馆的综合结论'],paras:[
['The Museum considers the decision to send a message to be partly a decision about the future life of the words: who may read them, in what context, how long they may remain available and whether they may be shared again. A person may withhold a message not because the feeling is false, but because the intended audience and the actual audience do not match.',
'本馆认为，决定是否发送一段文字，也是在决定这些文字未来的命运：谁可以阅读、在什么情境下阅读、它们会保留多久，以及是否可能再次被转发。一个人保留信息，不一定是因为感受不真实，也可能是因为预期中的读者与实际可能接触文字的读者并不一致。'],
['This does not mean that every unsent message is an act of privacy management. Some drafts may be abandoned for practical or emotional reasons unrelated to audience. The museum’s interpretation is therefore conditional: audience uncertainty and privacy boundaries are plausible parts of the decision, not confirmed motives for every unpublished item.',
'这并不意味着每一条未发送的信息都是隐私管理行为。有些草稿可能因为与受众无关的实际或情绪原因而被放弃。因此，本馆的解释保持条件性：受众不确定和隐私边界可能参与了决定，却不是每一条未发布内容都已被证实的真实动机。'],
['For the museum, the ethical implication is clear: visitors’ unsubmitted drafts must remain private. A public contribution should be an explicit, informed choice. The right not to publish is part of the meaning of communication, not a defect that the museum should correct.',
'对博物馆而言，伦理要求十分明确：访客未提交的草稿必须保持私人状态。公开投稿必须建立在明确知情和主动选择之上。不发布的权利本身就是沟通意义的一部分，而不是博物馆应该纠正的缺陷。']
]},
{head:['References & Evidence Notes','参考文献与证据说明'],paras:[
['R22 — Das, S., & Kramer, A. D. I. (2013). Self-censorship on Facebook. Proceedings of the International AAAI Conference on Web and Social Media, 7(1), 120–127. DOI: 10.1609/icwsm.v7i1.14412. The dossier distinguishes user-level and content-level denominators and notes the exploratory nature of the analysis.',
'R22 — Das, S., & Kramer, A. D. I. (2013). Self-censorship on Facebook. Proceedings of the International AAAI Conference on Web and Social Media, 7(1), 120–127. DOI: 10.1609/icwsm.v7i1.14412。档案区分用户比例与内容比例，并注明该分析属于探索性研究。'],
['R23 — Marwick, A. E., & boyd, d. (2011). I tweet honestly, I tweet passionately: Twitter users, context collapse, and the imagined audience. New Media & Society, 13(1), 114–133. DOI: 10.1177/1461444810365313. Qualitative article reviewed; interview accounts do not estimate platform-wide prevalence.',
'R23 — Marwick, A. E., & boyd, d. (2011). I tweet honestly, I tweet passionately: Twitter users, context collapse, and the imagined audience. New Media & Society, 13(1), 114–133. DOI: 10.1177/1461444810365313。已审阅定性论文；访谈叙述不能估算整个社交平台的行为比例。'],
['R24 — Marwick, A. E., & boyd, d. (2014). Networked privacy: How teenagers negotiate context in social media. New Media & Society, 16(7), 1051–1067. Current dossier is based on accessible article material and publication records; no population-representative percentage is asserted.',
'R24 — Marwick, A. E., & boyd, d. (2014). Networked privacy: How teenagers negotiate context in social media. New Media & Society, 16(7), 1051–1067。当前档案依据可获取论文材料和出版记录；不宣称拥有全国代表性比例。'],
['R27 — Petronio, S. (2002). Boundaries of privacy: Dialectics of disclosure. State University of New York Press. The work is used as a theoretical framework; the dossier does not claim page-by-page verification of the entire book.',
'R27 — Petronio, S. (2002). Boundaries of privacy: Dialectics of disclosure. State University of New York Press。本书作为理论框架使用；档案不宣称已经逐页核查全书。']
]}
]
},
{
title:['Writing for Oneself','为自己而写作'],
subtitle:['A comparison of platform nonpublication, expressive-writing experiments and emotion-regulation theory.','比较平台未发布行为、表达性写作实验与情绪调节理论。'],
ids:['R22','R26','R28'],
rows:[
['R22',['Many users had at least one platform-defined nonpublication event, but the study could not identify the content or motive.','许多用户至少出现一次平台定义下的未发布事件，但研究无法识别内容或动机。'],['Shows that composing and publishing can be separate actions.','呈现写下与公开发布可以是不同的行动。']],
['R26',['Writing about both facts and feelings could increase immediate distress while relating to fewer health-centre visits over the following six months.','同时书写经历事实与情绪可能增加即时不适，却与随后六个月较少的校内医疗中心就诊次数有关。'],['Shows different short-term and later outcomes in a specific writing task.','呈现特定写作任务中短期与后续结果的差异。']],
['R28',['The review explains emotion regulation as a broader process with different strategies and stages; it offers no single effect for private writing.','综述将情绪调节解释为包含不同策略与阶段的广泛过程，并未给私人写作提供一个统一效应量。'],['Offers a framework, not direct proof that every private text is therapeutic.','提供理论框架，而非每段私人文字都有疗愈作用的直接证明。']]
],
sections:[
{head:['Research Background & Literature','研究背景与文献介绍'],paras:[
['Writing is often imagined as communication with a reader. Yet people sometimes write without sending, and some forms of writing are designed for the writer rather than an audience. This comparison places R22’s Facebook nonpublication data beside R26’s expressive-writing experiment and R28’s broader review of emotion regulation. The central distinction is between composing words, making sense of an experience and delivering a message to another person.',
'写作常被理解为面向读者的沟通。但人们有时会写下文字却不发送，也有一些写作本来就是为写作者自己而进行的。本专题将R22的Facebook未发布行为数据，与R26的表达性写作实验及R28的情绪调节综述放在一起比较。核心区别在于：写下文字、整理自身经历，以及把信息交给另一个人，是不同的行为。'],
['The studies are not interchangeable. R22 observes platform behaviour without knowing the drafts’ content. R26 assigns participants to a structured writing task about difficult experiences. R28 synthesizes a broader theoretical and empirical field. Their combination can clarify distinctions, but it cannot establish that the same mechanism explains all forms of private writing.',
'三项研究不能互相替代。R22观察平台行为，却不知道草稿内容；R26安排参与者完成关于困难经历的结构化写作任务；R28综合更广泛的理论与实证领域。它们的结合能够澄清概念区别，却不能证明所有私人写作都由同一种机制解释。']
]},
{head:['Comparative Analysis of Research Findings','研究结论的深度比较'],paras:[
['R22 documents the scale of composing without publishing on Facebook. In its 17-day dataset, 71% of analysed users had at least one measured nonpublication event. But the study’s operational definition does not tell us whether a draft was personal, emotional, trivial, unfinished or abandoned for a practical reason. It records a behavioural trace, not a therapeutic process or a person’s private meaning.',
'R22记录了Facebook上写下内容却没有发布的行为规模。在17天的数据中，71%的可分析用户至少出现一次符合定义的未发布事件。但研究的操作定义无法告诉我们，草稿究竟是私人内容、情绪表达、无关紧要的文字、未完成的句子，还是因实际原因而放弃。它记录的是行为痕迹，而不是疗愈过程或个人赋予文字的意义。'],
['R26 asks what may happen when people deliberately write about a difficult experience without an intended recipient. Forty-six undergraduates were assigned to four conditions and wrote for 15 minutes on four evenings. The study reported an important contrast across time: writing about both the facts and feelings of trauma could be followed by greater immediate distress and physiological arousal, while the following six months showed fewer visits to the campus health centre. These outcomes are not contradictory because they measure different things at different times. Immediate discomfort does not automatically rule out a later change in health-service use; nor does fewer visits prove complete recovery.',
'R26考察的是，当人们在没有预期收件人的情况下，主动书写一段困难经历时，可能发生什么。46名大学生被分配到四种条件，在连续四个晚上各写15分钟。研究呈现了一个重要的时间差异：同时书写创伤经历的事实与情绪，可能带来更强的即时不适和生理唤醒；但在随后六个月里，参与者使用校内医疗中心的次数较少。这些结果并不矛盾，因为它们在不同时间测量不同指标。即时不适并不必然排除后续医疗服务使用发生变化；就诊次数减少也不等于完全康复。'],
['R28 provides a broader framework for understanding how people regulate emotion before, during and after an emotional response. It helps situate expressive writing among other strategies, but it does not supply one universal effect size for private writing. It also cannot be used to explain why a Facebook user in R22 did not publish a particular post. The two studies concern different actions and outcomes.',
'R28提供了更广泛的框架，用来理解人们如何在情绪反应发生前、过程中及之后调节情绪。它有助于把表达性写作放进其他情绪调节策略中理解，但并未为私人写作提供一个普遍适用的效应量。它也不能用来解释R22中的某位Facebook用户为什么没有发布某条帖子，因为两项研究关注的是不同动作和结果。'],
['The most defensible shared finding is that writing and sending are separate decisions. A text can remain private and still have been composed; an act of writing may serve reflection even when no recipient receives it. But R26’s specific task cannot prove that every unsent letter is beneficial, and R22 cannot establish that unpublished posts are attempts at emotional processing.',
'最稳妥的共同认识是：写下与发送是两个不同的决定。一段文字可以一直保持私人状态，却已经完成了书写；即使没有收件人，写作也可能服务于反思。但R26的特定任务不能证明每一封未寄出的信都有益，R22也不能证明未发布帖子都是情绪整理的尝试。']
]},
{head:['Explaining Agreements and Differences','共性、差异及其原因'],paras:[
['The apparent similarity between the studies lies in the separation of writing from public communication. Their differences arise from the purpose and context of writing. In R22, the platform user may be preparing a public post for a networked audience. In R26, the participant is instructed to write privately about a difficult experience. R28, meanwhile, is not a writing experiment at all but a framework for understanding emotion regulation.',
'这些研究表面上的共同点，在于都涉及书写与公开沟通之间的分离。它们的差异则来自写作目的和情境。R22中的平台用户可能正在为网络受众准备公开帖子；R26中的参与者则被要求私下书写困难经历；R28本身并不是写作实验，而是理解情绪调节的理论框架。'],
['The time horizon also changes interpretation. R26’s immediate emotional response and later health-centre visits are different indicators. It would be misleading to summarize the study as either “writing makes people feel worse” or “writing cures distress”. The results suggest a more complicated pattern that requires careful attention to what was measured and when.',
'时间跨度也会改变结果的解释。R26中的即时情绪反应与之后的医疗中心就诊次数是不同指标。把研究概括成“写作让人更痛苦”或“写作能够治愈痛苦”都具有误导性。研究呈现的是更复杂的模式，必须注意测量了什么，以及在什么时候测量。'],
['A further difference concerns the meaning of silence. Not publishing a post may reflect audience management, a change of mind or an interruption. Private expressive writing, by contrast, is a deliberate activity whose purpose may be reflection. The absence of a recipient does not make these actions equivalent.',
'另一个差异在于沉默的意义。没有发布帖子，可能反映受众管理、改变主意或受到打断；私人表达性写作则是一项有意进行的活动，其目的可能是反思。没有收件人，并不会让这些行为变成同一件事。']
]},
{head:['The Museum’s Interpretation','本馆的综合结论'],paras:[
['The Museum considers writing, keeping and sending to be three distinguishable acts. Writing may help a person give shape to an experience; keeping a text may protect privacy or preserve a thought; sending it creates a relationship with a recipient and exposes the words to another person’s interpretation. These acts can occur together, but none requires the others.',
'本馆认为，写下、保存与发送是三种需要区分的行为。写作可能帮助一个人为经历赋予形状；保存文字可能保护隐私或留住某个想法；发送则建立与接收者的关系，并让文字进入他人的解释之中。这些行为可以同时发生，但任何一种都不必然要求另外两种。'],
['An unsent text is therefore not automatically a failed message. It may be unfinished, unnecessary, private or meaningful precisely because it remains with its writer. At the same time, the museum should not romanticize all silence or promise that private writing will heal distress. R26 offers a specific and limited experimental finding, not a clinical guarantee.',
'因此，未发送的文字不一定是一条失败的信息。它可能尚未完成、已经不再必要、属于私人领域，或正因为留在写作者手中而具有意义。同时，本馆也不应浪漫化所有沉默，更不能承诺私人写作能够治愈痛苦。R26提供的是特定且有限的实验发现，而不是临床保证。'],
['Visitors should be free to write, keep, share or discard words without pressure to disclose trauma. The museum’s role is to protect that choice and distinguish evidence about writing from assumptions about any individual’s inner life.',
'访客应当能够自由选择写下、保存、分享或丢弃文字，而不必承受披露创伤的压力。博物馆的职责是保护这种选择，并区分关于写作的研究证据与对个人内心的臆测。']
]},
{head:['References & Evidence Notes','参考文献与证据说明'],paras:[
['R22 — Das, S., & Kramer, A. D. I. (2013). Self-censorship on Facebook. Proceedings of the International AAAI Conference on Web and Social Media, 7(1), 120–127. DOI: 10.1609/icwsm.v7i1.14412. Observational platform data; the study does not reveal draft content or motives.',
'R22 — Das, S., & Kramer, A. D. I. (2013). Self-censorship on Facebook. Proceedings of the International AAAI Conference on Web and Social Media, 7(1), 120–127. DOI: 10.1609/icwsm.v7i1.14412。平台观察数据；研究没有揭示草稿内容或动机。'],
['R26 — Pennebaker, J. W., & Beall, S. K. (1986). Confronting a traumatic event: Toward an understanding of inhibition and disease. Journal of Abnormal Psychology, 95(3), 274–281. DOI: 10.1037/0021-843X.95.3.274. Original four-condition writing experiment checked; sample size and task details are stated.',
'R26 — Pennebaker, J. W., & Beall, S. K. (1986). Confronting a traumatic event: Toward an understanding of inhibition and disease. Journal of Abnormal Psychology, 95(3), 274–281. DOI: 10.1037/0021-843X.95.3.274。已核对原始四组写作实验，并注明样本量与任务细节。'],
['R28 — Gross, J. J. (1998). The emerging field of emotion regulation: An integrative review. Review of General Psychology, 2(3), 271–299. DOI: 10.1037/1089-2680.2.3.271. Theoretical review; it does not report one unified treatment effect for writing.',
'R28 — Gross, J. J. (1998). The emerging field of emotion regulation: An integrative review. Review of General Psychology, 2(3), 271–299. DOI: 10.1037/1089-2680.2.3.271。理论综述；并未报告写作干预的统一效应。']
]}
]
},
{
title:['Whose Voice Survives?','谁的声音能够留存？'],
subtitle:['A historical and methodological comparison of archives, domination, oral testimony, representation and research refusal.','比较档案、支配关系、口述证词、代表性与研究拒访，理解历史声音如何留存。'],
ids:['R29','R30','R31','R32','R33','R34','R35','R36'],
rows:[
['R29',['Historical facts are shaped by power at the moments of source creation, archiving, narrative and later significance.','权力会在史料形成、档案保存、历史叙述和后世赋予意义等环节影响历史事实。'],['Explains how silence can enter the production of history.','解释沉默如何进入历史生产过程。']],
['R30',['Public and hidden transcripts distinguish official performance from less visible criticism under domination.','公开话语与隐藏话语区分了支配关系下的官方表演与不易被看见的批评。'],['Shows why public speech may not represent private belief.','说明公开表达为何未必代表私人信念。']],
['R31',['Violent archives can make a person’s life impossible to reconstruct fully; imaginative narration has ethical limits.','暴力档案可能使一个人的生命无法被完整重建；想象性叙述具有伦理边界。'],['Confronts the impossibility of recovering a lost individual voice.','直面失落的个人声音无法被完整复原的问题。']],
['R32',['Colonial archives reveal officials’ anxieties and classificatory habits, not neutral records alone.','殖民档案呈现官员的焦虑与分类习惯，而非中立记录。'],['Treats archival language itself as evidence.','把档案语言本身作为证据。']],
['R33',['Representation determines who can be recognized as a speaking subject; it is not simply a question of physical voice.','代表性结构决定谁能被承认为发声主体；问题不只是有没有声音。'],['Raises the ethics of speaking for others.','提出代替他人发声的伦理问题。']],
['R34',['Differences between oral memory and chronology can reveal meaning, while still requiring factual verification.','口述记忆与事件时间线的差异可能揭示意义，但仍需事实核查。'],['Shows oral testimony as interpretation as well as evidence.','呈现口述证词既是史料，也是解释行动。']],
['R35',['Researchers’ interview settings and methods can produce refusal or silence; changing the setting may enable conversation.','研究者的采访场景和方法可能造成拒访或沉默；改变场景有时能促成交流。'],['Makes the researcher’s role part of the evidence.','把研究者自身角色纳入证据分析。']],
['R36',['Silence can be chosen, imposed or protective; speech may occur without being heard or recognized.','沉默可能是主动选择、强迫排除或自我保护；说话也不代表一定被聆听或承认。'],['Offers a broad anthropological synthesis while noting cultural limits.','提供人类学综合视角，同时指出文化情境的限制。']]
],
sections:[
{head:['Research Background & Literature','研究背景与文献介绍'],paras:[
['Historical silence is not simply the absence of a surviving sentence. It may arise because a document was never created, because a record was destroyed or excluded, because an official account displaced other voices, or because later interpreters decided that some testimony mattered less. This comparison brings together eight works that approach the problem from different directions: Trouillot on the production of history (R29), Scott on hidden transcripts (R30), Hartman on the limits of archival recovery (R31), Stoler on colonial archives (R32), Spivak on representation (R33), Portelli on oral history (R34), Schweiger and Tomiak on researching silence (R35), and Dragojlovic and Samuels on anthropological approaches to silence (R36).',
'历史沉默并不只是没有一句话留存下来。它可能源于文献从未被记录、档案遭到毁损或排除、官方叙述取代了其他声音，也可能因为后来的解释者认为某些证词不够重要。本专题纳入八部从不同方向处理这一问题的著作：Trouillot关于历史生产的研究（R29）、Scott关于隐藏话语的分析（R30）、Hartman关于档案复原限度的讨论（R31）、Stoler对殖民档案的研究（R32）、Spivak关于代表性的论述（R33）、Portelli的口述史研究（R34）、Schweiger与Tomiak关于研究沉默的方法论（R35），以及Dragojlovic与Samuels的人类学综述（R36）。'],
['These are not eight empirical studies measuring one outcome. They include historical analysis, theoretical essays, a methodological article, a book and an encyclopedia synthesis. Their comparison must therefore focus on what each source allows historians and curators to claim, and where the evidence stops.',
'这并不是八项测量同一结果的实证研究，而是包含历史分析、理论论文、方法论文章、专著和百科全书综述。因此，比较重点应放在每种来源允许历史学家和策展人提出什么判断，以及证据在哪里停止。']
]},
{head:['Comparative Analysis of Research Findings','研究结论的深度比较'],paras:[
['R29 argues that power enters the production of history at several stages: the creation of sources, the assembly of archives, the construction of narratives and the later assignment of historical significance. The implication is that an archive is not a transparent container of everything that happened. What survives is shaped by decisions, institutions and unequal capacities to record. R32 complements this view by examining colonial administrative records as products of officials’ habits, anxieties and classificatory practices. The language of an archive can reveal the concerns of the institution that produced it, rather than simply describing the people it governed.',
'R29指出，权力会在历史生产的多个阶段发挥作用：史料形成、档案汇集、历史叙述，以及后世赋予历史意义。其含义是，档案并不是完整透明地容纳所有历史事件的容器。什么能够留存，受到决策、制度和记录能力不平等的影响。R32补充了这一观点，将殖民行政档案视为官员习惯、焦虑和分类实践的产物。档案语言可能揭示记录机构自身的关切，而不只是描述被治理的人群。'],
['R30 shifts attention from official records to the difference between public and hidden transcripts. Under domination, people may perform deference in front of authorities while expressing criticism in less visible settings. This distinction warns historians against treating public compliance as proof of private agreement. But it does not mean every private conversation is resistance or that historians can infer hidden beliefs without evidence.',
'R30把注意力从官方档案转向公开话语与隐藏话语之间的区别。在支配关系下，人们可能在权威面前表现顺从，却在不易被看见的场合表达批评。这一区分提醒历史学家，不应把公开顺从当作私人认同的证明。但它并不意味着每一次私人谈话都是抵抗，也不意味着历史学家可以在没有证据的情况下推断隐藏信念。'],
['R31 confronts a more severe limit. In the archive of slavery, the surviving documents often preserve the language of traders, captains and institutions, while the life of the enslaved woman at the centre of Hartman’s essay cannot be fully recovered. Hartman’s discussion of critical fabulation explores the ethical difficulty of narrating lives that archival violence has made fragmentary. The point is not that imagination can restore missing testimony. It is that historians must acknowledge both the violence that produced the archive and the limits of what can responsibly be said.',
'R31面对的是更严峻的限制。在奴役制度的档案中，留存下来的往往是商人、船长和制度机构的语言，而Hartman文章中心那位被奴役女性的生命无法被完整复原。她对批判性虚构的讨论，呈现了历史学家面对暴力档案留下的残缺生命时所遇到的叙述伦理困境。重点并不是想象能够恢复失落证词，而是历史学家必须承认制造档案的暴力，以及哪些内容无法负责任地说出。'],
['R33 approaches the problem through representation. Spivak distinguishes speaking on behalf of someone from representing them in knowledge and culture. A marginalized person may speak, yet their words may not be recognized as authoritative or intelligible within dominant systems. The issue is therefore not simply whether a voice exists, but who selects, translates, frames and circulates it. R36’s anthropological synthesis similarly challenges a simple opposition between silence and speech: silence may be chosen, imposed or protective, while speech may occur without being heard or granted legitimacy.',
'R33从代表性角度处理这一问题。Spivak区分了替他人发言与在知识和文化中再现他人。边缘群体成员可能已经说话，但其言语未必能在主导体系中被承认为权威或被理解。因此，问题不只是声音是否存在，还包括谁选择、翻译、框定和传播这些声音。R36的人类学综述同样质疑沉默与发声之间的简单对立：沉默可能是主动选择、强迫排除或自我保护；而发声也可能没有得到聆听或承认。'],
['R34 adds a distinct contribution from oral history. A narrator’s memory may differ from a documented chronology, but that difference can reveal how a community gives meaning to labour conflict, loss and collective identity. The discrepancy still needs to be checked against contemporary records; its interpretive value does not make every remembered detail factually accurate. R35 brings the researcher into the frame: interview refusal may reflect the formal setting, power imbalance or recording method rather than a person’s inability to speak. In one fieldwork episode, changing to familiar spaces helped make conversation possible. This is a methodological case, not a population estimate.',
'R34从口述史角度补充了不同贡献。讲述者的记忆可能与档案记录的时间线不同，但这种差异能够揭示一个社群如何理解劳动冲突、失落和集体身份。差异仍需与同时代记录核对；具有解释价值并不意味着每个回忆细节在事实层面都准确。R35则把研究者自身纳入分析：受访者拒绝采访，可能反映正式场景、权力不平衡或录音方式，而不是当事人无法表达。在一个田野案例中，改用熟悉的场所后，谈话得以展开。这是方法论案例，不是总体人群比例。'],
['Together, the sources reveal different points at which a voice can be lost or reshaped: before it is recorded, during institutional archiving, through public performance, in the act of representation, during research interviews, and in later historical narration. Their conclusions are complementary because they examine different stages. They should not be combined into a single numerical measure of historical silence.',
'综合这些来源可以看到，声音可能在多个环节消失或被改写：记录发生之前、制度保存档案时、公开表演之中、代表他人的过程中、研究访谈期间，以及后来的历史叙述中。它们之所以互补，是因为各自考察不同阶段；但不能被合并成一个衡量历史沉默程度的数字。']
]},
{head:['Explaining Agreements and Differences','共性、差异及其原因'],paras:[
['The central agreement is that silence cannot be interpreted from absence alone. R29 and R32 examine how institutions shape the archive; R30 asks what public speech conceals; R31 confronts the irrecoverable effects of archival violence; R33 examines the politics of representation; R34 studies the meaning of oral memory; R35 investigates how researchers can produce silence; and R36 surveys the cultural and political meanings of the unsaid. Each rejects the idea that the surviving record simply mirrors the full range of historical experience.',
'这些研究最重要的共识是：不能只凭缺席本身解释沉默。R29和R32考察制度如何塑造档案；R30追问公开表达隐藏了什么；R31面对档案暴力造成的不可复原性；R33研究代表性政治；R34讨论口述记忆的意义；R35调查研究者如何制造沉默；R36则综述未说出之事的文化与政治意义。它们都反对一种想法：现存记录能够完整反映历史经验。'],
['Their differences reflect distinct analytical tasks. Trouillot and Stoler examine the production and texture of archives; Scott analyses domination and hidden discourse; Hartman focuses on the ethical limits of narrating a life damaged by slavery; Spivak questions who can be recognized through representation; Portelli evaluates oral testimony; Schweiger and Tomiak examine research practice; Dragojlovic and Samuels synthesize anthropological approaches. These are not competing explanations of one event. They identify different mechanisms and different standards for responsible interpretation.',
'它们的差异来自不同的分析任务。Trouillot和Stoler考察档案的生产过程与内部纹理；Scott分析支配关系和隐藏话语；Hartman关注如何叙述被奴役制度摧毁的生命时所面临的伦理限制；Spivak追问谁能够通过代表性结构被承认；Portelli评价口述证词；Schweiger与Tomiak反思研究实践；Dragojlovic与Samuels则综合人类学视角。它们不是对同一事件提出相互竞争的解释，而是在识别不同机制和负责任解释的不同标准。'],
['A further difference concerns what can be recovered. Oral testimony may preserve meaning that a written record omits, but it still requires contextual verification. A missing archival voice may be impossible to reconstruct, even with careful scholarship. A researcher may change interview conditions to reduce barriers, but cannot demand testimony. These distinctions prevent the museum from treating every absence as censorship, every recollection as fact or every silence as resistance.',
'另一个重要差异在于声音能否被复原。口述证词可能保存书面档案遗漏的意义，但仍需要结合情境核实；某个档案中缺失的声音，即使经过谨慎研究，也可能无法重建；研究者可以改变访谈条件以减少障碍，却不能要求他人必须作证。这些区别能够防止本馆把每一种缺席都视为审查、把每段回忆都视为事实，或把每一种沉默都浪漫化为抵抗。']
]},
{head:['The Museum’s Interpretation','本馆的综合结论'],paras:[
['The Museum considers historical silence to be produced and interpreted across a chain of conditions: who had the power to create records, which materials institutions preserved, whose speech was recognized as credible, how later narrators framed the evidence, and what researchers or curators choose to include. A voice may have existed without leaving a record; a record may survive while obscuring the person it describes; and a person may speak without being recognized as a legitimate speaker.',
'本馆认为，历史沉默是在一连串条件中被制造和解释的：谁拥有制作记录的权力，制度保存了哪些材料，谁的言语被视为可信，后来的叙述者如何框定证据，以及研究者或策展人选择纳入什么。一种声音可能曾经存在却没有留下记录；一份档案可能留存下来，却遮蔽了其中被描述的人；一个人也可能已经发声，却没有被承认为有资格发言的主体。'],
['The Museum therefore proposes an evidence label for historical claims: contemporary document, later testimony, scholarly interpretation or irreducible absence. These categories should not be blended. Where evidence is missing, the museum should state what is unknown rather than invent a first-person voice. Where oral memory differs from the archive, the difference should be investigated rather than automatically dismissed or accepted.',
'因此，本馆建议为历史判断标注证据类型：同时代文献、后来的证词、学术解释，或无法消除的缺席。这些类别不应混为一谈。证据缺失时，博物馆应说明哪些事情仍然未知，而不是编造第一人称声音；口述记忆与档案不同时，应调查这种差异，而不是自动否定或全盘接受。'],
['The final curatorial principle is restraint. Giving space to silenced people does not mean claiming to know exactly what they would have said. Respect requires making the conditions of record-making visible, acknowledging uncertainty and allowing some absences to remain unresolved.',
'最终的策展原则是克制。为被沉默的人留下空间，并不意味着声称自己准确知道他们会说什么。真正的尊重要求我们揭示记录形成的条件、承认不确定性，并允许某些缺席继续保持未解。']
]},
{head:['References & Evidence Notes','参考文献与证据说明'],paras:[
['R29 — Trouillot, M.-R. (1995). Silencing the past: Power and the production of history. Beacon Press. Current verification includes the first-chapter excerpt and publisher/academic descriptions; the museum does not claim a page-by-page audit of the entire book.',
'R29 — Trouillot, M.-R. (1995). Silencing the past: Power and the production of history. Beacon Press。当前核查包括第一章节选及出版方、学术机构介绍；本馆不宣称已经逐页审阅全书。'],
['R30 — Scott, J. C. (1990). Domination and the arts of resistance: Hidden transcripts. Yale University Press. Used as a theoretical-historical framework; not a statistical study.',
'R30 — Scott, J. C. (1990). Domination and the arts of resistance: Hidden transcripts. Yale University Press。作为历史理论框架使用；并非统计研究。'],
['R31 — Hartman, S. (2008). Venus in two acts. Small Axe, 12(2), 1–14. DOI: 10.1215/-12-2-1. Open article reviewed; the paper itself emphasizes the impossibility of fully recovering the subject’s life.',
'R31 — Hartman, S. (2008). Venus in two acts. Small Axe, 12(2), 1–14. DOI: 10.1215/-12-2-1。已审阅开放论文；文章本身强调当事人的生命无法被完整复原。'],
['R32 — Stoler, A. L. (2009). Along the archival grain: Epistemic anxieties and colonial common sense. Princeton University Press. Current verification is based on publisher and scholarly previews; full-book review is not claimed.',
'R32 — Stoler, A. L. (2009). Along the archival grain: Epistemic anxieties and colonial common sense. Princeton University Press。当前核查依据出版方及学术预览；不宣称已完成全书审阅。'],
['R33 — Spivak, G. C. (1988). Can the subaltern speak? In C. Nelson & L. Grossberg (Eds.), Marxism and the interpretation of culture (pp. 271–313). University of Illinois Press. The 1988 version is distinguished from later reprints and revisions.',
'R33 — Spivak, G. C. (1988). Can the subaltern speak? In C. Nelson & L. Grossberg (Eds.), Marxism and the interpretation of culture (pp. 271–313). University of Illinois Press。已区分1988年版本与后续重印、修订版本。'],
['R34 — Portelli, A. (1991). The death of Luigi Trastulli and other stories: Form and meaning in oral history. State University of New York Press. Publisher and library records and preview support the source; full-book reading is not claimed.',
'R34 — Portelli, A. (1991). The death of Luigi Trastulli and other stories: Form and meaning in oral history. State University of New York Press。出版方、图书馆记录及预览支持来源核实；不宣称已完成全书阅读。'],
['R35 — Schweiger, E., & Tomiak, K. (2022). Researching silence: A methodological inquiry. Millennium: Journal of International Studies, 50(3), 623–646. DOI: 10.1177/03058298221083999. Open-access article reviewed; the 4/25 interview figure is a specific fieldwork episode, not a population statistic.',
'R35 — Schweiger, E., & Tomiak, K. (2022). Researching silence: A methodological inquiry. Millennium: Journal of International Studies, 50(3), 623–646. DOI: 10.1177/03058298221083999。已审阅开放论文；4/25的采访数字是特定田野案例，不是总体统计。'],
['R36 — Dragojlovic, A., & Samuels, A. (2023). Silence. In F. Stein (Ed.), The Open Encyclopedia of Anthropology. DOI: 10.29164/23silence. Open encyclopedia entry reviewed; the authors note that their thematic overview is selective.',
'R36 — Dragojlovic, A., & Samuels, A. (2023). Silence. In F. Stein (Ed.), The Open Encyclopedia of Anthropology. DOI: 10.29164/23silence。已审阅开放百科条目；作者明确指出其主题综述具有选择性。']
]}
]
}
];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lang=()=>window.museumLangPublic?.()==='en'?'en':window.museumLangPublic?.()==='zh-Hant'?'zh-Hant':'zh';
const cv=s=>lang()==='zh-Hant'?(window.museumConvertPublic?.(String(s??''))??String(s??'')):String(s??'');
const t=p=>esc(lang()==='en'?p[0]:cv(p[1]));
const nav=()=>'<nav class="atlas-nav" aria-label="'+esc(lang()==='en'?'Research navigation':cv('研究导航'))+'"><a href="#/research">'+esc(lang()==='en'?'Research library':cv('研究资料馆'))+'</a><a href="#/research/audit">'+esc(lang()==='en'?'Source verification':cv('来源核实'))+'</a><a href="#/research/method">'+esc(lang()==='en'?'Curatorial method':cv('策展方法'))+'</a></nav>';
function render(i){
 const a=articles[i];if(!a)return '';
 const title=t(a.title),subtitle=t(a.subtitle);
 const hero='<section class="page-hero"><div class="eyebrow">'+esc(lang()==='en'?'THE UNSENT MUSEUM · COMPARATIVE RESEARCH':cv('未寄之言博物馆 · 跨研究比较'))+'</div><h1>'+title+'</h1><p class="muted">'+subtitle+'</p><p class="atlas-essay-count">'+esc(String(i+1).padStart(2,'0')+' / 08')+' · '+a.ids.length+' '+esc(lang()==='en'?'research sources':cv('项研究来源'))+'</p></section>';
 const table='<div class="atlas-evidence-table"><table><thead><tr><th>'+esc(lang()==='en'?'Study':cv('研究'))+'</th><th>'+esc(lang()==='en'?'Main finding':cv('原始结论重点'))+'</th><th>'+esc(lang()==='en'?'Contribution to comparison':cv('对比较的贡献'))+'</th></tr></thead><tbody>'+a.rows.map(r=>'<tr><td><a href="#/research/study/'+esc(r[0])+'">'+esc(r[0])+'</a></td><td>'+t(r[1])+'</td><td>'+t(r[2])+'</td></tr>').join('')+'</tbody></table></div>';
 const sections=a.sections.map((s,j)=>{
  const body=s.paras.map(p=>'<p>'+t(p)+'</p>').join('');
  return '<section class="atlas-panel atlas-comparison-section atlas-comparison-section-'+(j+1)+'"><span class="eyebrow">'+String(j+1).padStart(2,'0')+' · '+t(s.head)+'</span><h2>'+t(s.head)+'</h2>'+(j===1?table:'')+body+'</section>';
 }).join('');
 const refs='<section class="atlas-panel atlas-comparison-sources"><span class="eyebrow">SOURCE DOSSIERS</span><h2>'+esc(lang()==='en'?'Research dossiers and source notes':cv('研究档案与来源说明'))+'</h2><div class="atlas-study-list">'+a.ids.map(id=>'<a class="atlas-study-link" href="#/research/study/'+id+'"><span>'+id+'</span><strong>'+esc(lang()==='en'?'Open research dossier':cv('打开研究档案'))+'</strong><small>'+esc(lang()==='en'?'Source details and verification status':cv('查看原始来源与核查状态'))+'</small></a>').join('')+'</div></section>';
 const prev=i>0?'<a class="btn btn-outline" href="#/research/compare/'+(i-1)+'">← '+esc(lang()==='en'?'Previous comparison':cv('上一篇比较'))+'</a>':'';
 const next=i<7?'<a class="btn btn-outline" href="#/research/compare/'+(i+1)+'">'+esc(lang()==='en'?'Next comparison':cv('下一篇比较'))+' →</a>':'';
 return '<main class="container atlas-page">'+nav()+hero+sections+refs+'<div class="atlas-comparison-pagination">'+prev+next+'<a class="btn btn-outline" href="#/research">'+esc(lang()==='en'?'Back to research library':cv('返回研究资料馆'))+'</a></div></main>';
}
const original=atlas.page;
atlas.page=function(id){
 if(typeof id==='string'&&id.startsWith('compare/')){
  const n=Number(id.split('/')[1]);
  if(Number.isInteger(n)&&n>=0&&n<articles.length)return render(n);
 }
 const html=original.call(this,id);
 if(typeof id!=='string'||typeof html!=='string')return html;
 if(!id.startsWith('study/')||!html.includes('atlas-deep'))return html;
 return html.replace(/<section class="atlas-panel">(?=<span class="eyebrow">(?:SOURCE AUDIT|来源核对))/,'<section class="atlas-panel atlas-verification-plate">').replace(/<section class="atlas-panel">(?=<h2>(?:Research Connections|研究关联)<\/h2>)/,'<section class="atlas-panel atlas-connections-gallery">');
};
})();
