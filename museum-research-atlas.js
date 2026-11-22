/* The Unsent Museum — research atlas v1 (22 Nov 2026).
   Curatorial evidence atlas. Bibliographic index is not a claim of 36 full-text reviews.
   No personal answers or private stories are collected by this module. */
(function(){
'use strict';
const G={friendship:['The No We Never Said','未说出口的拒绝'],classroom:['The Silent Witness','沉默的见证者'],family:['The Feelings We Never Voiced','未曾表达的感情'],'before-sending':['Before Sending','发送之前'],cross:['Silence, Power & Historical Evidence','沉默、权力与历史证据']};
const raws=[
['Lu, Fang & Qiu','2023','Rejecters Overestimate the Negative Consequences They Will Face From Refusal','https://doi.org/10.1037/xap0000457','friendship','Anticipated consequences of refusal','拒绝后果的预期'],
['Schlund, Sommers et al.','2024','Giving people the words to say no leads them to feel freer to say yes','https://www.nature.com/articles/s41598-023-50532-3','friendship','Specific language for declining requests','明确的拒绝措辞'],
['Givi et al.','2024','Saying No: The Negative Ramifications From Invitation Declines Are Less Severe Than We Think','https://pubmed.ncbi.nlm.nih.gov/38079463/','friendship','Predictions of inviters’ reactions','对邀请者反应的预期'],
['Cialdini & Goldstein','2004','Social Influence: Compliance and Conformity','https://doi.org/10.1146/annurev.psych.55.090902.142015','friendship','Compliance, conformity, and social influence','顺从、从众与社会影响'],
['Baumeister & Leary','1995','The Need to Belong: Desire for Interpersonal Attachments as a Fundamental Human Motivation','https://pubmed.ncbi.nlm.nih.gov/7777651/','friendship','Belonging as a social motivation','归属感与社会动机'],
['Deci & Ryan','2000','The “What” and “Why” of Goal Pursuits: Human Needs and the Self-Determination of Behavior','https://doi.org/10.1207/S15327965PLI1104_01','friendship','Autonomy and self-determination','自主性与自我决定'],
['Flynn & Lake','2008','If You Need Help, Just Ask: Underestimating Compliance With Direct Requests for Help','https://doi.org/10.1016/j.jesp.2008.01.002','friendship','Social pressure in direct requests','直接请求中的社会压力'],
['Darley & Latané','1968','Bystander Intervention in Emergencies: Diffusion of Responsibility','https://pubmed.ncbi.nlm.nih.gov/5645600/','classroom','Diffusion of responsibility','责任分散'],
['Fischer et al.','2011','The Bystander-Effect: A Meta-Analytic Review on Bystander Intervention in Dangerous and Non-Dangerous Emergencies','https://pubmed.ncbi.nlm.nih.gov/21534650/','classroom','How danger and other factors moderate helping','危险程度如何影响帮助行为'],
['Edmondson','1999','Psychological Safety and Learning Behavior in Work Teams','https://doi.org/10.2307/2666999','classroom','Speaking in teams with differing safety climates','团队中的心理安全'],
['Morrison & Milliken','2000','Organizational Silence: A Barrier to Change and Development in a Pluralistic World','https://doi.org/10.5465/amr.2000.3707697','classroom','Organizational conditions that sustain silence','组织性沉默的形成'],
['Morrison','2014','Employee Voice and Silence','https://doi.org/10.1146/annurev-orgpsych-031413-091328','classroom','Employee voice and silence across organizational research','员工表达与沉默研究'],
['Detert & Burris','2007','Leadership Behavior and Employee Voice: Is the Door Really Open?','https://doi.org/10.5465/amj.2007.26279183','classroom','Leadership and willingness to speak','领导行为与表达'],
['Noelle-Neumann','1974','The Spiral of Silence: A Theory of Public Opinion','https://doi.org/10.1111/j.1460-2466.1974.tb00367.x','classroom','Perceived isolation and public expression','孤立恐惧与公共表达'],
['Algoe, Fredrickson & Gable','2013','The Social Functions of the Emotion of Gratitude via Expression','https://pubmed.ncbi.nlm.nih.gov/23731434/','family','Expressed gratitude in romantic relationships','亲密关系中的感谢'],
['Algoe, Gable & Maisel','2010','It’s the Little Things: Everyday Gratitude as a Booster Shot for Romantic Relationships','https://doi.org/10.1111/j.1475-6811.2010.01273.x','family','Everyday gratitude in couples','日常感恩与伴侣关系'],
['Koerner & Fitzpatrick','2002','Understanding Family Communication Patterns and Family Functioning','https://doi.org/10.1080/23808985.2002.11679010','family','Family conversation and conformity orientations','家庭谈话和一致性取向'],
['Guerrero & Afifi','1995','Some Things Are Better Left Unsaid: Topic Avoidance in Family Relationships','https://doi.org/10.1080/01463379509369977','family','Topics avoided among family members','家庭成员回避的话题'],
['Collins & Miller','1994','Self-Disclosure and Liking: A Meta-Analytic Review','https://pubmed.ncbi.nlm.nih.gov/7809308/','family','Links between disclosure and liking','自我披露与人际好感'],
['Rimé','2009','Emotion Elicits the Social Sharing of Emotion: Theory and Empirical Review','https://doi.org/10.1177/1754073908097189','family','The social sharing of emotion','情绪的社会分享'],
['Lewicki, Polin & Lount','2016','An Exploration of the Structure of Effective Apologies','https://doi.org/10.1111/ncmr.12073','family','Components of effective apologies','有效道歉的组成'],
['Das & Kramer','2013','Self-Censorship on Facebook','https://ojs.aaai.org/index.php/ICWSM/article/view/14412','before-sending','Drafted but unpublished social posts','写下却没有发布的帖子'],
['Marwick & boyd','2011','I Tweet Honestly, I Tweet Passionately: Twitter Users, Context Collapse, and the Imagined Audience','https://doi.org/10.1177/1461444810365313','before-sending','Imagined audiences across contexts','想象的受众与情境重叠'],
['Marwick & boyd','2014','Networked Privacy: How Teenagers Negotiate Context in Social Media','https://doi.org/10.1177/1461444814543995','before-sending','Privacy negotiations in social media','社交媒体隐私协商'],
['Walther','1996','Computer-Mediated Communication: Impersonal, Interpersonal, and Hyperpersonal Interaction','https://doi.org/10.1177/009365096023001001','before-sending','Communication shaped by digital media','数字媒介对沟通的影响'],
['Pennebaker & Beall','1986','Confronting a Traumatic Event: Toward an Understanding of Inhibition and Disease','https://doi.org/10.1037/0021-843X.95.3.274','before-sending','Expressive writing about difficult experiences','关于艰难经历的表达性写作'],
['Petronio','2002','Boundaries of Privacy: Dialectics of Disclosure','https://www.sunypress.edu/p-3502-boundaries-of-privacy.aspx','before-sending','Managing boundaries around disclosure','披露与隐私边界'],
['Gross','1998','The Emerging Field of Emotion Regulation: An Integrative Review','https://doi.org/10.1037/1089-2680.2.3.271','before-sending','Emotion regulation and reassessment','情绪调节'],
['Michel-Rolph Trouillot','1995','Silencing the Past: Power and the Production of History','https://www.beacon.org/Silencing-the-Past-P1109.aspx','cross','Power in producing historical records','历史记录生产中的权力'],
['James C. Scott','1990','Domination and the Arts of Resistance: Hidden Transcripts','https://yalebooks.yale.edu/book/9780300056693/domination-and-the-arts-of-resistance/','cross','Public and hidden transcripts','公开与隐藏的话语'],
['Saidiya Hartman','2008','Venus in Two Acts','https://doi.org/10.1215/-12-2-1','cross','Writing histories with fragmentary archives','如何书写残缺档案中的生命'],
['Ann Laura Stoler','2009','Along the Archival Grain: Epistemic Anxieties and Colonial Common Sense','https://press.princeton.edu/books/paperback/9780691146362/along-the-archival-grain','cross','Colonial archives as constructed records','殖民档案的形成'],
['Gayatri Chakravorty Spivak','1988','Can the Subaltern Speak?','https://www.jstor.org/stable/466624','cross','Representation and subaltern voices','从属群体的代表与发声'],
['Alessandro Portelli','1991','The Death of Luigi Trastulli and Other Stories: Form and Meaning in Oral History','https://sunypress.edu/Books/T/The-Death-of-Luigi-Trastulli-and-Other-Stories','cross','Oral testimony, meaning, and memory','口述证词与记忆'],
['Schweiger & Tomiak','2022','Researching Silence: A Methodological Inquiry','https://doi.org/10.1177/03058298221083999','cross','Methods for studying silence','如何研究沉默'],
['Open Encyclopedia of Anthropology','2023','Silence','https://www.anthroencyclopedia.com/entry/silence','cross','Anthropological approaches to silence','沉默的人类学研究']
];
const C=raws.map((r,i)=>({id:'R'+String(i+1).padStart(2,'0'),author:r[0],year:r[1],title:r[2],url:r[3],gallery:r[4],subject:r[5],zhSubject:r[6]}));
const reasonMap={
friendship:[[5,4],[3,4],[7,4],[1,6],[2,6],[1,5],[2,6]],
classroom:[[9,10],[10,13],[9,8],[8,11],[9,12],[11,12],[10,13]],
family:[[15,20],[17,20],[19,18],[20,21],[16,20],[18,17],[15,16]],
'before-sending':[[25,23],[25,27],[28,26],[24,27],[28,22],[26,22],[23,27]]
};
const historyLinks={
'franz-kafka':{ids:['R17','R19','R26'],galleries:['family','before-sending']},
'anne-lister':{ids:['R27','R30','R35'],galleries:['before-sending']},
'victorian-domestic-servants':{ids:['R11','R29','R30'],galleries:['friendship','classroom']},
'us-child-factory-workers':{ids:['R06','R29','R33'],galleries:['friendship']},
'enslaved-households-survival':{ids:['R29','R30','R31','R33'],galleries:['cross']},
'black-sharecroppers-debt':{ids:['R11','R29','R30'],galleries:['friendship','classroom']}
};
const themes=[
{en:'Silence and Social Expectations',zh:'沉默与社会期待',ids:['R01','R03','R04','R05','R07','R14'],claim:['People can anticipate a social cost from expressing disagreement. But studies measure different kinds of cost, not one universal tendency.','表达分歧时，人们可能预期会付出社会代价；但不同研究测量的代价并不相同，不能归纳成单一规律。'],diff:['Predictions about refusal, belonging, and perceived public opinion concern different populations and outcomes.','拒绝预期、归属需要与公众意见感知的研究对象及结果指标不同。']},
{en:'Silence and Power',zh:'沉默与权力',ids:['R10','R11','R12','R13','R29','R30','R33'],claim:['Speaking is not determined by personality alone; institutional conditions and unequal power can shape whose words can be heard.','发声并非只由个人性格决定，制度环境与权力差异会影响谁能够被听见。'],diff:['Modern workplaces, historical domination, and theories of representation cannot be treated as one measured setting.','现代组织研究、历史压迫与代表性理论并非同一种可合并测量的情境。']},
{en:'Silence in Relationships',zh:'亲密关系中的沉默',ids:['R15','R16','R17','R18','R19','R20','R21'],claim:['Disclosure, gratitude, and apology are different forms of expression; evidence about one cannot be generalized to them all.','自我披露、感恩与道歉属于不同表达形式，不能从其中一种研究推及全部。'],diff:['Couples, families, and general interpersonal studies use different contexts and measures.','伴侣、家庭及一般人际互动使用不同情境和测量方式。']},
{en:'Writing Without Sending',zh:'书写与未送达',ids:['R22','R23','R24','R25','R26','R27','R28'],claim:['Writing, disclosure, and publication are separate decisions. An unsent text is not proof of failure or fear.','写下、披露与发布是不同的选择；未寄出的文字不能直接证明失败或恐惧。'],diff:['Online posts, private expressive-writing exercises and handwritten letters are not interchangeable.','网络帖子、私人表达性写作与手写信件不能直接等同。']},
{en:'Silence in Historical Records',zh:'历史档案中的沉默',ids:['R29','R30','R31','R32','R33','R34','R35','R36'],claim:['Absence from archives may reflect how evidence was produced, collected, kept, and narrated.','档案中的缺席可能与史料如何被生产、收集、保存和叙述有关。'],diff:['Historical theory, testimony, and methodology advance arguments, not interchangeable experimental effect sizes.','历史理论、证词与方法论提出的是不同论证，而不是可直接汇总的实验效应量。']},
{en:'Is Silence Always a Problem?',zh:'沉默是否一定是问题？',ids:['R06','R10','R24','R26','R27','R30','R36'],claim:['Some withholding may protect privacy and autonomy; other silence is shaped by force. The distinction requires context.','有些保留可以保护隐私与自主，有些沉默则受强迫塑造；区分二者必须考虑具体情境。'],diff:['Protective non-disclosure is not equivalent to coercive suppression.','主动保护隐私不能等同于被迫压制表达。']}
];
const comparisons=[["Why Is Saying No Difficult?","为什么拒绝如此困难？",["R01","R02","R03"],"Social consequences and freedom to refuse are different outcomes.","社会后果预期与拒绝自由感属于不同的研究指标。"],["The Bystander Effect in Context","不同情境中的旁观者效应",["R08","R09","R10"],"Laboratory emergencies and workplace safety are not interchangeable settings.","实验中的紧急情况与工作场所的安全感并非相同情境。"],["When Power Shapes Voice","权力如何影响表达",["R11","R12","R13","R30"],"Organizational evidence and historical theory use different kinds of sources.","组织实证证据与历史理论所使用的材料不同。"],["Gratitude, Disclosure and Apology","感谢、披露与道歉",["R15","R16","R19","R21"],"Gratitude, liking and apology acceptance are separate constructs.","感恩、好感与道歉接受程度是不同的研究概念。"],["Family Communication and Topic Avoidance","家庭沟通与话题回避",["R17","R18","R20"],"Communication orientations and specific disclosures are not the same measure.","家庭沟通取向与具体披露行为并非同一测量指标。"],["The Imagined Audience","想象中的读者",["R22","R23","R24","R27"],"Observed nonpublication and interview or theoretical accounts of privacy need separate interpretation.","实际未发布行为与隐私访谈或理论论述需要分别解释。"],["Writing for Oneself","为自己而写作",["R22","R26","R28"],"Expressive writing experiments cannot establish why individual social posts go unpublished.","表达性写作实验不能证明个别网络帖子为什么未被发布。"],["Whose Voice Survives?","谁的声音能够留存？",["R29","R31","R32","R33","R34"],"Historical archival gaps and oral testimony require different standards of evidence.","历史档案缺失与口述证词需要不同的证据标准。"]];
const T=(en,zh)=>window.museumLangPublic?.()==='en'?en:(window.museumConvertPublic?.(zh)||zh);
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const heading=(name,sub)=>'<section class="page-hero"><div class="eyebrow">'+E(T('THE UNSENT MUSEUM · RESEARCH LIBRARY','未寄之言博物馆 · 研究资料馆'))+'</div><h1>'+E(name)+'</h1><p class="muted">'+E(sub)+'</p></section>';
const nav=()=>'<nav class="atlas-nav" aria-label="Research navigation"><a href="#/research">'+E(T('Research library','研究馆首页'))+'</a><a href="#/research/audit">'+E(T('Source verification','来源核实'))+'</a><a href="#/research/method">'+E(T('Curatorial method','策展方法'))+'</a><a href="#/history">'+E(T('Historical archives','历史档案'))+'</a></nav>';
const go=(id)=>'#/research/study/'+id;
const linkStudy=(x)=>'<a class="atlas-study-link" href="'+go(x.id)+'"><span>'+x.id+' · '+E(x.author)+' ('+E(x.year)+')</span><strong>'+E(x.title)+'</strong><small>'+E(T(x.subject,x.zhSubject))+'</small></a>';
const studies=(ids)=>'<div class="atlas-study-list">'+ids.map(id=>C.find(x=>x.id===id)).filter(Boolean).map(linkStudy).join('')+'</div>';
const reasonNamesZh={"friendship":["我不想让信任我的人失望。","我担心拒绝会显得自私或不友善。","对方曾经帮助过我，所以我觉得自己有义务。","我希望不明确回应之后，请求会自行消失。","我不习惯设立个人边界。","我害怕拒绝会破坏这段关系。","我需要更多时间组织拒绝的话语。"],"classroom":["我担心介入会让情况变得更糟。","我害怕自己成为下一个被针对的人。","我不确定自己是否正确理解了当时的情况。","我认为拥有更高权威的人应该介入。","我更愿意在事后私下提供支持。","我不相信有人会听我的话。","我需要找到更安全的帮助方式。"],"family":["我觉得对方早已知道我的感受。","我不习惯大声表达强烈的感情。","我害怕暴露脆弱的一面或感到尴尬。","我找不到足够恰当的语言。","我相信以后还会有机会。","我担心对方不欢迎这场谈话。","我更喜欢通过行动表达感情。"],"before-sending":["我担心这段文字会被误解。","我更愿意当面表达。","我需要冷静下来重新考虑。","我不希望这些文字被保存或转发。","我觉得事情可能会自行解决。","我不再认为这条消息需要被发送。","我还没有准备好接受对方的回复。"]};
const reasonName=(g,i)=>{
const labels={friendship:['I do not want to disappoint someone who trusts me.','I worry that refusing would seem selfish or unkind.','I feel obliged because this person has helped me before.','I hope the request might disappear if I do not respond clearly.','I am not used to setting boundaries.','I fear that saying no could damage our relationship.','I need more time before I can put my refusal into words.'],classroom:['I worry that intervening could make the situation worse.','I fear becoming the next target.','I am unsure whether I have understood the situation correctly.','I think someone with more authority should step in.','I would rather offer support privately afterwards.','I do not believe anyone would listen to me.','I need a safer way to help before speaking.'],family:['I expect they already know how I feel.','I am uncomfortable showing strong emotion aloud.','I fear becoming vulnerable or embarrassed.','I cannot find words that seem adequate.','I believe another opportunity will come.','I worry the other person may not welcome this conversation.','I prefer expressing my feelings through actions.'],'before-sending':['I worry that the message could be misunderstood.','I would rather say it face to face.','I need time to calm down and reconsider.','I do not want the message to be saved or shared.','I think the issue may resolve itself.','I no longer think the message needs to be sent.','I do not feel ready for the reply.']};
return T(labels[g]?.[i]||'',reasonNamesZh[g]?.[i]||'');
};
function reason(g,i){
const ids=(reasonMap[g]||[])[i]?.map(n=>'R'+String(n).padStart(2,'0'))||[];
return '<main class="container atlas-page">'+nav()+heading(T('Why might this reason matter?','这一理由与哪些研究有关？'),T('A research connection, not a diagnosis of any visitor.','这些是研究关联，不是对任何访客动机的诊断。'))+'<section class="atlas-panel"><span class="eyebrow">'+E(G[g]?.[0]||g)+' · '+String(i+1)+'/7</span><h2>'+E(reasonName(g,i))+'</h2><p>'+E(T('The studies below provide possible explanatory lenses. None establishes why one particular visitor made a choice.','以下研究提供可能的解释视角，不能据此断定某位访客为什么作出选择。'))+'</p>'+studies(ids)+'</section><a class="btn btn-outline" href="#/gallery/'+E(g)+'">'+E(T('Return to the gallery','返回展厅'))+'</a></main>';
}
function catalog(){
return '<main class="container atlas-page">'+nav()+heading('Behind the Silence',T('Read the studies. Compare the evidence. Explore what can—and cannot—be concluded.','阅读研究、比较证据，并探索我们能够与不能够得出的结论。'))+
'<section class="atlas-panel"><p>'+E(T('36 curated bibliographic entries · 4 galleries · 8 cross-disciplinary works. The catalogue is not a claim that every full text has been reviewed. Detailed methodological information is published only when supported by accessible sources.','36项策展书目 · 四个展厅 · 八项跨学科作品。本目录不代表每篇全文都已审阅；只有证据能够支持的研究方法细节才会刊登。'))+'</p><label for="atlas-search">'+E(T('Search titles, authors and research topics','搜索标题、作者和研究主题'))+'</label><input id="atlas-search" class="field" type="search" placeholder="'+E(T('Type to filter the catalogue','输入关键词筛选目录'))+'"></section>'+
'<div class="atlas-group-grid">'+Object.entries(G).map(([g,n])=>'<a class="atlas-category" href="#/research/group/'+g+'"><span class="eyebrow">'+(g==='cross'?'08':'07')+' '+E(T('sources','项文献'))+'</span><h2>'+E(T(n[0],n[1]))+'</h2><span>'+E(T('Open the research shelf ↗','打开研究书架 ↗'))+'</span></a>').join('')+'</div>'+
'<section class="section-compact"><h2>'+E(T('Comparative & synthesis essays','跨研究比较与综合文章'))+'</h2><p class="muted">'+E(T('Compare what different studies actually measure, where their conclusions meet, and where they cannot be combined.','比较各项研究实际测量了什么、结论何处相同，以及为什么某些结果不能直接合并。'))+'</p><div class="atlas-group-grid">'+themes.map((x,i)=>'<a class="atlas-category" href="#/research/synthesis/'+i+'"><span class="eyebrow">'+String(i+1).padStart(2,'0')+' / SYNTHESIS</span><h3>'+E(T(x.en,x.zh))+'</h3></a>').join('')+'</div></section>'+
'<section class="section-compact"><h2>'+E(T('Eight close comparisons','八组深入比较'))+'</h2><div class="atlas-group-grid">'+comparisons.map((c,i)=>'<a class="atlas-category" href="#/research/compare/'+i+'"><span class="eyebrow">COMPARISON '+String(i+1).padStart(2,'0')+'</span><h3>'+E(T(c[0],c[1]))+'</h3></a>').join('')+'</div></section><section class="section-compact"><h2>'+E(T('Browse all 36 sources','浏览全部36项文献'))+'</h2><div id="atlas-count" class="small muted"></div><div id="atlas-results">'+studies(C.map(x=>x.id))+'</div></section><section class="atlas-panel"><h2>'+E(T('How we study silence','我们如何研究沉默'))+'</h2><p>'+E(T('The collection separates published findings, curatorial inference, and missing evidence; it is a critical narrative review, not a systematic review or a pooled meta-analysis.','本馆区分已发表发现、策展推论与证据缺口；这是一项批判性的叙述性文献研究，并非系统性综述或合并统计的元分析。'))+'</p><a class="btn btn-outline" href="#/research/method">'+E(T('Read the curatorial method ↗','阅读策展方法说明 ↗'))+'</a></section></main>';
}
function shelf(g){
return '<main class="container atlas-page">'+nav()+heading(T(G[g]?.[0]||'Research',G[g]?.[1]||'研究'),T('Open every source for its research question, approach, findings, limitations and related objects.','打开每项文献，查看研究问题、方法、结果、局限与关联展品。'))+studies(C.filter(x=>x.gallery===g).map(x=>x.id))+(g!=='cross'?'<section class="atlas-panel"><h2>'+E(T('Original detailed research room','原有详细研究档案'))+'</h2><p>'+E(T('The museum’s earlier three-study research interpretation is preserved here, including published findings, curatorial readings and limitations.','网站原有的三项研究深入解读继续保留，包含研究发现、策展解读与研究局限。'))+'</p><a class="btn btn-outline" href="#/research/original/'+g+'">'+E(T('Read the original research room ↗','阅读原有研究档案 ↗'))+'</a></section><section class="atlas-panel"><h2>'+E(T('The seven reasons in this gallery','本展厅的七种沉默理由'))+'</h2><div class="atlas-reason-grid">'+reasonMap[g].map((_,i)=>'<a href="#/research/reason/'+g+'/'+i+'">'+(i+1)+'. '+E(reasonName(g,i))+'</a>').join('')+'</div></section>':'')+'</main>';
}
const curated12=['R01','R02','R03','R09','R15','R16','R21','R22','R26']; 
function deepStudy(id,x){
const d=window.MUSEUM_RESEARCH_FIVE?.[id]||window.MUSEUM_RESEARCH_SECOND?.[id]||window.MUSEUM_RESEARCH_THIRD_A?.[id]||window.MUSEUM_RESEARCH_THIRD_B?.[id];if(!d)return null;
const chinese=window.museumLangPublic?.()!=='en',content=chinese?d.zh:d.en;
const label=(en,zh)=>E(T(en,zh));
const traceNotes={
'R04':['Official publisher record and abstract checked; the full 2004 review was not independently accessed, so each cited primary experiment is not verified here.','已核对出版方记录和正式摘要；尚未独立审阅2004年综述全文，因此不能宣称已验证所有被引用的原始实验。'],
'R05':['Original theoretical review read, including the two-part belongingness definition; not a new experiment.','已审阅理论综述正文，包括归属需要的两个条件；并非新实验。'],
'R06':['Original theoretical integration read, including autonomy, competence and relatedness; not a new randomized trial.','已审阅原始理论论文，包含自主、胜任与关系三种需要；并非新随机试验。'],
'R12':['Original 2014 review read including evidence gaps in Table 2; its many cited primary studies were not each re-audited.','已审阅2014年综述全文及表2指出的证据空白；被引用的原始论文尚未全部逐项重新审计。'],
'R14':['Original publication metadata and conceptual account checked; do not assign a new experimental sample to this theory paper.','已核对1974年原始出版记录和理论论述；不得为理论文章虚构新实验样本。'],
'R16':['Full journal research article checked: 67 couples, 14-night protocol, 1,768 diaries and described outcome measures.','已核对论文正文：67对伴侣、14晚记录、1768份日记以及测量指标。'],
'R19':['Full meta-analysis inspected including separate effect directions and original Tables 1 and 3; study effects are heterogeneous.','已核对元分析全文、不同方向的效应和表1及表3；研究结果存在异质性。'],
'R23':['Qualitative article read including interview accounts and the concept of imagined networked audiences.','已核对定性研究正文、受访者叙述以及网络化想象受众概念。'],
'R25':['Full theoretical article read including impersonal, interpersonal and hyperpersonal models; not a new experiment.','已核对理论文章全文及非人际、人际和超人际模型；并非新实验。'],
'R26':['Original randomized writing experiment checked: 46 undergraduates, four conditions, four evenings, follow-up health records.','已核对原始随机写作实验：46名学生、四种条件、四晚写作和后续医疗记录。'],
'R01':['Original study results and participant counts checked against the research article; predictions are not actual retaliation rates.','研究对象数量与主要结果已据论文核对；预期反应并非实际报复概率。'],
'R02':['Published experiments and two different outcomes reviewed; behavior p = .053 does not establish an intervention effect.','已核对实验与两种不同结果；行为指标p = .053不能证明干预有效。'],
'R03':['Study designs and sample descriptions checked against accessible article material; not a longitudinal measurement of relationship damage.','研究设计和样本说明据可获取正文核对；不是长期追踪关系受损。'],
'R08':['Original Table 1 cross-checked: 85%, 62% and 31% refer to reporting within a specific emergency experiment.','已核对原文表1；85%、62%与31%仅适用于特定紧急情境实验的报告行为。'],
'R09':['Meta-analytic summary and effect sizes cross-checked; Hedges g is not a percentage-point change.','元分析与效应量已核对；Hedges g不是百分比变化。'],
'R10':['Field study of 51 teams; observational associations must not be represented as randomized causal evidence.','51支团队的实地研究；观察到的关联不能冒称随机实验的因果证据。'],
'R11':['Full conceptual article: theoretical propositions, not a new experimental sample.','已核对理论论文；提出的是理论命题，非重新招募的实验样本。'],
'R15':['The 2013 five-page paper is accessible only as an abstract and authorized page-one preview in this audit. Participant N, scales and coefficients must remain unreported; values from later related studies cannot be substituted.','目前只能取得2013年论文的正式摘要与授权第一页预览；样本量、量表和统计系数不能编造，也不能借用后来另一篇研究的数字。'],
'R22':['Platform sample and denominators checked; 71% refers to users and 33% / 13% to attempted posts/comments.','已核对样本与分母；71%是用户比例，33%／13%是潜在帖子／评论比例。'],
'R29':['Original Chapter 1 passage and scholarly five-chapter table of contents verified; this does not constitute a page-by-page reading of the whole book.','已核对第一章原文及全书五章学术目录；不代表完成整本书逐页阅读。']
};
const note=traceNotes[id];

const type=d.stage==='chapter-excerpt'?T('Verified chapter excerpt + publisher/academic descriptions','已核对章节选段与出版／学术资料'):(d.stage==='abstract-verified'||d.stage==='publisher-preview-and-abstract')?T('Publisher first-page preview and abstract verified · remaining methods and statistics unavailable','已核对出版方首页预览及正式摘要 · 其余方法和统计结果仍不可获取'):d.stage==='review-publisher-plus-abstract'?T('Scholarly review supported by official abstract and bibliographic record · full-text audit incomplete','学术综述：已核对正式摘要与书目 · 仍未完成全文审校'):d.stage==='full-text-theory'?T('Full-text conceptual / theoretical analysis · not an empirical experiment','已阅读理论论文全文 · 并非实证实验'):T('Source-based detailed reading','基于原始文献的深入解读');
const auditPanel=note?'<section class="atlas-panel"><span class="eyebrow">'+label('SOURCE AUDIT · 22 NOVEMBER 2026','来源核对 · 2026年11月22日')+'</span><h2>'+label('What has been verified?','哪些部分已经核实？')+'</h2><p>'+E(T(note[0],note[1]))+'</p><a href="#/research/audit">'+label('Open the research verification register ↗','查看研究核实记录 ↗')+'</a></section>':'';
const sections=content.map((s,i)=>'<section class="atlas-panel atlas-deep-section"><span class="eyebrow">'+String(i+1).padStart(2,'0')+' / '+label('RESEARCH DOSSIER','研究档案')+'</span><h2>'+E(s[0])+'</h2><p>'+E(s[1])+'</p></section>').join('');
const linkHistory=Object.entries(historyLinks).filter(([k,v])=>v.ids.includes(id)).map(([k])=>'<a href="#/'+(['franz-kafka','anne-lister'].includes(k)?'history':'collectives')+'/'+E(k)+'">'+E(k.replaceAll('-',' '))+' ↗</a>').join('');
const matching=Object.entries(reasonMap).flatMap(([g,arr])=>arr.flatMap((ids,i)=>ids.some(n=>'R'+String(n).padStart(2,'0')===id)?['<a href="#/research/reason/'+g+'/'+i+'">'+E(T(G[g][0]+' · Reason '+(i+1),G[g][1]+' · '+reasonName(g,i)))+'</a>']:[])).join('');
const related=C.filter(y=>y.gallery===x.gallery&&y.id!==id).slice(0,5);
return '<main class="container atlas-page atlas-deep">'+nav()+heading(x.title,x.id+' · '+E(x.author)+' ('+E(x.year)+') · '+E(T(G[x.gallery][0],G[x.gallery][1])))+
'<div class="atlas-panel"><span class="eyebrow">'+label('VERIFICATION AND EVIDENCE','核对范围与证据')+'</span><p>'+E(type)+'</p><p>'+label('The article is interpreted from available source materials; interpretations and historical analogies are explicitly distinguished from author findings.','以下解读依据可获取的原文材料；策展推论与历史类比均与作者的原始结论区分。')+'</p></div>'+
sections+auditPanel+
'<section class="atlas-panel"><h2>'+label('Research Connections','研究关联')+'</h2><h3>'+label('Relevant reasons','相关理由')+'</h3><div class="atlas-reason-grid">'+matching+'</div><h3>'+label('Historical archives','历史档案')+'</h3><div class="atlas-reason-grid">'+(linkHistory||'<p>'+label('No directly curated historical case association yet.','尚未建立直接关联的历史档案。')+'</p>')+'</div><h3>'+label('Further studies','延伸研究')+'</h3>'+studies(related.map(y=>y.id))+'</section>'+
'<section class="atlas-panel"><h2>'+label('Original publication and traceability','原始文献与证据追溯')+'</h2><p class="atlas-citation">'+E(d.citation)+'</p><div class="actions"><a class="btn btn-outline" target="_blank" rel="noopener noreferrer" href="'+E(d.source)+'">'+label('Publisher / DOI ↗','出版来源／DOI ↗')+'</a><a class="btn btn-outline" target="_blank" rel="noopener noreferrer" href="'+E(d.alt)+'">'+label('Accessible research text ↗','查阅可获取的研究文本 ↗')+'</a></div><p class="small muted">'+label('Numerical findings and procedures are attributed to the source; this is a museum research interpretation, not a reproduction of the paper.','研究数据和步骤均需追溯原始资料；本文为博物馆研究解读，并非论文的全文复制。')+'</p></section></main>';
}
function study(id){
const x=C.find(y=>y.id===id);if(!x)return catalog();
const deep=deepStudy(id,x);if(deep)return deep;
const linked=Object.entries(historyLinks).filter(([k,v])=>v.ids.includes(id));
const others=C.filter(y=>y.gallery===x.gallery&&y.id!==id).slice(0,4);
const group=G[x.gallery];
const primary=window.MUSEUM_RESEARCH_2026?.[x.gallery], isPrimary=({'friendship':'R01','classroom':'R09','family':'R15','before-sending':'R22'})[x.gallery]===id;
const primaryText=isPrimary?primary?.[window.museumLangPublic?.()==='en'?'en':'zh']:null;
return '<main class="container atlas-page">'+nav()+heading(x.title,x.id+' · '+x.author+' ('+x.year+') · '+T(group[0],group[1]))+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('01 · RESEARCH QUESTION','01 · 研究问题'))+'</span><h2>'+E(T('What does the work investigate?','研究探讨什么问题？'))+'</h2><p>'+E(T(x.subject,x.zhSubject))+'</p>'+ (primaryText?'<p>'+E(primaryText.question)+'</p>':'')+'</section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('02 · BACKGROUND & APPROACH','02 · 背景与研究方法'))+'</span><h2>'+E(T('How was it studied?','研究是如何进行的？'))+'</h2><p>'+E(T('This source is part of the curated bibliography. Detailed sampling, procedure, instruments and analyses must be checked against the complete work before we present them as facts.','这项文献已进入策展书目。样本、研究步骤、测量工具与分析过程，必须依据完整原文核实后才能作为事实呈现。'))+'</p>'+
(isPrimary&&id==='R09'?'<p>'+E(T('Verified abstract: a meta-analysis of 105 independent effect sizes, involving more than 7,700 participants, comparing bystander intervention in dangerous and non-dangerous situations.','已核对的摘要：一项综合105个独立效应量、超过7700名参与者的元分析，比较危险与非危险情境中的旁观者介入。'))+'</p>':'')+'</section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('03 · FINDINGS','03 · 研究发现'))+'</span><h2>'+E(T('What does the evidence show?','证据表明了什么？'))+'</h2><p>'+E(primaryText?primaryText.finding:T('A source-grounded account of individual results and any statistical estimates is being prepared; the topic label alone is not evidence of a finding.','逐项研究发现及统计数字仍需按原文核对；研究主题本身不等于研究结论。'))+'</p></section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('04 · INTERPRETATION','04 · 策展解读'))+'</span><h2>'+E(T('What can the museum ask?','本馆可以从中提出什么问题？'))+'</h2><p>'+E(T('How might '+x.subject.toLowerCase()+' illuminate the ways that people withhold words, without reducing a person to a general theory?', '我们如何借助“'+x.zhSubject+'”理解言语的保留，同时不把真实的人简化为理论标签？'))+'</p></section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('05 · LIMITATIONS','05 · 研究局限'))+'</span><h2>'+E(T('What cannot be concluded?','有哪些结论不能得出？'))+'</h2><p>'+E(primaryText?primaryText.scope:T('Do not infer an individual person’s motives, transfer results uncritically across time or culture, or merge different study outcomes as if they measured the same variable.','不能推断某个具体人物的动机，不能不加区分地跨越时代与文化使用结果，也不能把不同研究指标直接合并。'))+'</p></section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('06 · RESEARCH CONNECTIONS','06 · 研究关联'))+'</span><h2>'+E(T('Compare and explore','比较与探索'))+'</h2><div class="atlas-reason-grid">'+Object.entries(reasonMap).flatMap(([g,rs])=>rs.flatMap((nums,i)=>nums.some(n=>'R'+String(n).padStart(2,'0')===id)?['<a href="#/research/reason/'+g+'/'+i+'">'+E(T(G[g][0]+' · Reason '+(i+1),G[g][1]+' · 理由'+(i+1)))+'</a>']:[])).join('')+'</div><div class="atlas-reason-grid">'+linked.map(([k])=>'<a href="#/'+(k==='franz-kafka'||k==='anne-lister'?'history':'collectives')+'/'+k+'">'+E(k.replaceAll('-',' '))+' ↗</a>').join('')+'</div><h3>'+E(T('Related studies','相关研究'))+'</h3>'+studies(others.map(y=>y.id))+'</section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('07 · ORIGINAL SOURCE','07 · 原始出处'))+'</span><h2>'+E(T('Bibliography and source status','参考文献与核对状态'))+'</h2><p>'+E(x.author+' ('+x.year+'). '+x.title)+'</p><p>'+E(T('Bibliographic record / publication link. Full-text methods review not yet complete for this dossier.','书目信息及出版链接。此研究档案的全文研究方法审校尚未完成。'))+'</p><a class="btn btn-outline" href="'+E(x.url)+'" target="_blank" rel="noopener noreferrer">'+E(T('Open original publication ↗','查看原始文献 ↗'))+'</a></section></main>';
}
function synthesis(i){
const x=themes[Number(i)];if(!x)return catalog();
return '<main class="container atlas-page">'+nav()+heading(T(x.en,x.zh),T('A comparative reading of related sources, not a pooled effect-size estimate.','对相关文献的比较阅读，而不是合并效应量估计。'))+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('COMMON GROUND · WHAT THE WORKS SUGGEST','共同点 · 文献带来的启示'))+'</span><p>'+E(T(...x.claim))+'</p></section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('DIFFERENCES · WHAT CANNOT BE COMBINED','差异 · 不能直接合并的证据'))+'</span><p>'+E(T(...x.diff))+'</p></section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('OPEN QUESTIONS','尚未解决的问题'))+'</span><p>'+E(T('Which populations, contexts, outcomes, and source types would we need to compare before asserting a general pattern? Is silence voluntary, constrained, enforced, or a missing historical record?','在归纳一般规律之前，我们需要怎样比较研究对象、情境、结果指标与来源类型？沉默究竟是主动保留、受限制的选择、被强制压制，还是档案中的缺席？'))+'</p></section>'+
'<section><h2>'+E(T('Studies in this comparison','本专题引用的研究'))+'</h2>'+studies(x.ids)+'</section><section class="atlas-panel"><p>'+E(T('Editorial status: a structured narrative synthesis. No meta-analysis or systematic search is claimed. Detailed study-level evidence assessments remain in progress.','编辑状态：结构化叙述性综合；不宣称进行过元分析或系统性检索。逐项证据质量评估仍在进行。'))+'</p></section></main>';
}

function verifiedRefusalComparison(){
const trip=['R01','R02','R03'];
const rows=[
['R01','Seven main studies and four supplementary studies; refusals in hypothetical, recalled and incentivized contexts.','七项正式研究与四项补充研究，涵盖假设、回忆与激励情境。','Forecasts of negative reactions versus requester evaluations; power and future ties moderated misprediction.','拒绝者的负面预期与请求者评价之间的差异；权力和未来联系影响预测偏差。'],
['R02','Pilot plus two main experiments; handing over an unlocked phone under different refusal wording.','试点及两项正式实验，比较不同拒绝措辞下是否交出解锁手机。','Subjective freedom increased; combined observed compliance difference did not reach conventional significance.','主观自由感提高；合并的实际行为差异未达传统显著性标准。'],
['R03','Five studies of declined social invitations, using imagined situations and an instructed interpersonal exchange.','五项关于社交邀请被拒的研究，涵盖假设情境及按指令进行的真实人际交流。','Invitees anticipated greater negative reactions than inviters reported.','受邀者预期的负面反应通常高于邀请者报告的感受。']
];
const table='<div class="atlas-evidence-table"><table><thead><tr><th>'+E(T('Study','研究'))+'</th><th>'+E(T('Design and context','方法与情境'))+'</th><th>'+E(T('Findings','主要发现'))+'</th></tr></thead><tbody>'+rows.map(r=>'<tr><td><a href="'+go(r[0])+'">'+r[0]+'</a></td><td>'+E(T(r[1],r[2]))+'</td><td>'+E(T(r[3],r[4]))+'</td></tr>').join('')+'</tbody></table></div>';
const sections=[
['Common ground','研究共性','All three works challenge a simple assumption that anticipated refusal costs perfectly track social reality. Each finds a gap between nominal choice and a psychological or interpersonal perspective on refusal. Yet they use different dependent variables, not replicated measurements of one identical phenomenon.','三项研究都挑战了一个过于简单的假设：人们预想的拒绝代价总能准确反映社会现实。它们分别揭示表面上的自由选择与实际心理感受或人际判断之间的差距，但所测量的结果并不相同，不能当作对同一指标的重复验证。'],
['Different questions, methods and findings','研究问题、方法与结果的差异','Lu et al. compare forecast negative consequences with requester judgments and experimentally vary power and expected future connection. Schlund et al. manipulate the availability of refusal wording, measuring felt freedom and separately observing compliance. Givi and Kirk concentrate on anticipated inviter reactions after a declined leisure invitation. Power, perceptions of choice and inviter disappointment are not interchangeable constructs.','Lu等人将拒绝者对负面后果的预测与请求者的评价比较，并操纵权力和未来联系；Schlund等人改变拒绝措辞，同时测量自由感与实际同意行为；Givi与Kirk关注休闲邀请被拒后，双方对邀请者反应的不同预期。权力、选择自由感及邀请者失望并不是可以互换的概念。'],
['What the numbers say—and do not say','具体数据与不能得出的结论','Lu et al. reported seven main studies (N = 2,132) and four supplementary studies (N = 1,470); in Study 1 the negative-emotion prediction contrast yielded d = 0.54. Schlund et al. found an internal-meta-analytic effect on felt freedom (d = 0.27, p = .002), but behavioral compliance remained uncertain (OR = 1.54, p = .053). Givi and Kirk’s first study analyzed 382 participants after exclusions; its different rating scales must not be merged numerically with the other papers. None estimates a universal probability that saying no will be safe.','Lu等人报告七项正式研究（N = 2,132）及四项补充研究（N = 1,470）；其中研究1关于负面情绪预测的差异为d = 0.54。Schlund等人的内部元分析发现主观自由感的正向效应（d = 0.27，p = .002），但实际行为效应仍不确定（OR = 1.54，p = .053）。Givi与Kirk的研究1排除后分析382人，使用的评分指标与前两篇不同，不能直接拼接数字。三篇都没有估算“拒绝一定安全”的普遍概率。'],
['Where the findings fit the museum','研究对于本馆意味着什么','Gallery I should distinguish imagined punishment from actual coercion. If visitors fear losing affection, R01 and R03 help interrogate how such forecasts are formed; R02 explores making refusal feel usable. Neither design licenses telling a dependent worker, child or person facing a threatening authority figure that the consequences of refusal are merely imagined.','第一展厅需要区分想象中的惩罚与真实的胁迫。如果访客害怕失去关系，R01和R03可帮助理解这种预期如何形成；R02则考察拒绝如何在主观上变得可实行。但这不意味着我们可以告诉受雇者、儿童或面对威胁性权威的人，其拒绝代价只是想象。'],
['Open questions and limitations','尚未解决的问题','More research is needed on lasting consequences, culturally varied obligations, repeated interactions, and unequal power. The experiments are not a substitute for historical evidence of refusal rights. A museum synthesis remains narrative because the studies do not share compatible populations, interventions and outcome measures.','仍需研究拒绝的长期后果、不同文化中的义务观、重复互动以及不平等的权力关系。实验不能替代历史上关于拒绝权利的证据。这些研究没有共同的样本、干预方式与结果指标，因此本馆的综合应保持叙述性，而不是制造合并效应量。']
];
return '<main class="container atlas-page">'+nav()+heading(T('Why Is Saying No Difficult?','为什么拒绝如此困难？'),T('A verified comparison of consequences, perceptions and freedom across three different research programs.','对三组不同研究中的后果预期、人际判断与自主感作有证据支持的比较。'))+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('EVIDENCE MATRIX','证据矩阵'))+'</span>'+table+'</section>'+
sections.map((v,i)=>'<section class="atlas-panel"><span class="eyebrow">'+String(i+1).padStart(2,'0')+'</span><h2>'+E(T(v[0],v[1]))+'</h2><p>'+E(T(v[2],v[3]))+'</p></section>').join('')+
'<section class="atlas-panel"><h2>'+E(T('Read the primary studies','阅读原始研究档案'))+'</h2>'+studies(trip)+'</section></main>';
}
function verifiedWitnessComparison(i){
const workplace=Number(i)===2;
const ids=workplace?['R10','R11','R13','R12']:['R08','R09','R10'];
const sections=workplace?[
['A shared question, different evidence','共同问题，不同证据','What makes speaking up seem personally risky or collectively futile? R10 tests measured associations across 51 working teams; R11 develops an organization-level explanatory model from prior literature. These are complementary forms of evidence, not competing experiments.','什么让表达显得危险或徒劳？R10在51支团队中检验变量关联，R11综合既有文献建立组织层面的解释模型。两篇证据类型互补，却不是相互竞争的两个实验。'],
['What Edmondson actually measured','Edmondson真正测量了什么','R10 distinguishes psychological safety from team efficacy. Team psychological safety was consistently associated with learning behavior, whereas efficacy failed to add a similarly consistent prediction when safety was controlled. Six of eight tested hypotheses were supported; the other two involved efficacy.','R10明确区分心理安全与团队效能感。心理安全与学习行为之间的关联较稳定；控制心理安全后，效能感没有提供同样稳定的额外解释。论文八项假设中有六项获得支持，未获支持的两项涉及效能感。'],
['What Morrison and Milliken proposed','Morrison与Milliken提出什么理论','R11 proposes that fear of criticism and managers’ assumptions can produce structures that prevent upward feedback, followed by a shared climate in which silence seems safe or necessary. It contains no newly recruited experimental participant sample and no single causal effect estimate.','R11提出：管理者对批评的担忧及隐含信念可能塑造阻碍反馈的制度，继而形成集体认为沉默更安全的氛围。论文没有新招募的实验样本，也没有单一的因果效应估计。'],
['Synthesis and outstanding tests','综合与仍需检验的问题','Both shift attention away from supposed individual weakness toward conditions for expression. But psychological safety in work teams does not prove the full multilevel model of organizational silence. Testing that model would require additional evidence about hierarchy, communication channels, responses to criticism and change over time.','两者都将视线从个人的所谓软弱转向表达所需的外部条件。但团队心理安全的关联结果，不能证明组织沉默的整套跨层次机制。后续还需要关于权力层级、沟通渠道、批评反应及长期变化的证据。']
]:[
['Classic experiment versus research synthesis','经典实验与元分析','R08 used an apparently urgent prerecorded seizure heard through an intercom. When participants believed they were the only potential helper, 85% reported the incident within the measurement window, compared with 31% when they believed four additional witnesses were present. R09 aggregates 105 independent effect sizes and finds an overall negative standardized effect, g = −0.35 in the fixed-effect model. Neither number describes a universal helping probability.','R08让参与者通过对讲系统听见模拟癫痫发作：认为自己是唯一潜在帮助者时，85%在观察窗口内报告；认为另有四位旁观者时为31%。R09汇总105个独立效应量，固定效应模型得到总体负向标准化效应g = −0.35。任何一个数字都不能变成现实中普遍的帮助概率。'],
['Why the findings are not contradictory','这些发现为什么并不矛盾','The classic experiment isolated participants from supposed bystanders, who could not truly assist. The later meta-analysis shows that high danger, a perpetrator or real potential support can weaken inhibition. Thus one might feel less individually responsible in a simulated scenario but also recognize that a real partner can provide protection in a dangerous event.','经典实验中的参与者与想象的旁观者隔离，其他人并不能真正协作；后来的元分析发现高度危险、施害者在场或其他人能够真实协助时，抑制效应可能减弱。因此人在模拟事件中可能感觉责任被分散，也可能在真实危险情境中认为同伴能够提供保护。'],
['A different question: team psychological safety','另一种问题：团队心理安全','R10 studies whether team members feel able to admit errors, ask questions and seek feedback, not whether they immediately rescue someone in an emergency. Its 51-team field evidence links psychological safety to learning behavior. The settings, participants and outcomes differ fundamentally from R08 and R09.','R10研究的是团队成员是否敢于承认错误、提出问题或寻求反馈，而非是否在紧急事件中立即施救。51支团队的实地证据显示心理安全与学习行为相关；其情境、样本及结果指标与R08、R09本质不同。'],
['What the museum may conclude','本馆能够得出什么结论','A quiet witness may be processing uncertainty, allocating responsibility, fearing interpersonal sanctions, or choosing another form of help. No single study diagnoses a visitor. An historical case of institutional repression requires its own primary records rather than automatic classification as a bystander effect.','沉默的见证者可能面临情境不确定、责任分配、人际惩罚风险，或选择另一种帮助方式。任何单一研究都不能诊断访客；面对制度性压制的历史案例，更需要独立的原始史料，而不是自动归类为旁观者效应。']
];
return '<main class="container atlas-page">'+nav()+heading(T(workplace?'When Power Shapes Voice':'The Bystander Effect in Context',workplace?'权力如何影响表达':'不同情境中的旁观者效应'),T('Detailed comparison of methods, empirical findings, conceptual frameworks and evidence limits.','详细比较研究方法、实证结果、理论框架与证据边界。'))+
sections.map((p,i)=>'<section class="atlas-panel"><span class="eyebrow">'+String(i+1).padStart(2,'0')+' / '+E(T('EVIDENCE COMPARISON','证据比较'))+'</span><h2>'+E(T(p[0],p[1]))+'</h2><p>'+E(T(p[2],p[3]))+'</p></section>').join('')+
'<section class="atlas-panel"><h2>'+E(T('Research dossiers and further reading','研究档案与延伸阅读'))+'</h2>'+studies(ids)+'</section></main>';
}
function compare(i){
const c=comparisons[Number(i)];if(!c)return catalog();
if(Number(i)===1||Number(i)===2)return verifiedWitnessComparison(i);
if(Number(i)===0)return verifiedRefusalComparison();
const sources=c[2].map(id=>C.find(x=>x.id===id)).filter(Boolean);
return '<main class="container atlas-page">'+nav()+heading(T(c[0],c[1]),T('A structured comparison of questions, approaches, findings and limits.','围绕研究问题、方法、发现与局限展开结构化比较。'))+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('COMPARATIVE QUESTION','比较问题'))+'</span><p>'+E(T('What do these works each investigate, and do their findings really address the same question?','这些文献各自研究什么？它们的发现是否真正回答了同一个问题？'))+'</p></section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('EVIDENCE MATRIX','证据比较表'))+'</span><div class="atlas-evidence-table"><table><thead><tr><th>'+E(T('Source','文献'))+'</th><th>'+E(T('Focus','研究重点'))+'</th><th>'+E(T('Source status','证据状态'))+'</th></tr></thead><tbody>'+sources.map(x=>'<tr><td><a href="'+go(x.id)+'">'+x.id+' · '+E(x.author)+'</a></td><td>'+E(T(x.subject,x.zhSubject))+'</td><td>'+E(T('Methods review in progress','研究方法审校中'))+'</td></tr>').join('')+'</tbody></table></div></section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('SIMILARITY AND DIFFERENCE','共性与差异'))+'</span><p>'+E(T(c[3],c[4]))+'</p><p>'+E(T('Common subject matter alone does not demonstrate agreement; claims of convergence or contradiction require comparable measurements and fully reviewed results.','研究主题相近并不证明结论一致。是否相互支持或矛盾，必须在核实具体研究结果与测量指标后判断。'))+'</p></section>'+
'<section class="atlas-panel"><span class="eyebrow">'+E(T('SYNTHESIS STATUS','综合结论状态'))+'</span><p>'+E(T('This is an evidence comparison framework; findings that have not been fully verified are intentionally left open.','这是证据比较框架；尚未完成原文核实的研究结论不会被冒充为已完成的综合发现。'))+'</p>'+studies(c[2])+'</section></main>';
}

function auditRegister(){
const all=['R01','R02','R03','R08','R09','R10','R11','R15','R22','R29'];
const notes={
'R01':['Source PDF and abstract','论文PDF与摘要','Key study counts and selected contrasts','研究数量及主要比较数据'],
'R02':['Open-access research article','开放获取原始论文','Freedom outcome vs inconclusive behavioral outcome','自由感与尚不确定的行为结果'],
'R03':['Accessible article and official record','可获取论文与正式记录','Invitation-decline research and sample descriptions','拒绝邀请研究及样本说明'],
'R08':['Original experimental paper, Table 1','原始实验论文表1','Group sizes, reporting rates, observation context','组别、报告比例及实验情境'],
'R09':['Meta-analysis article, tables','元分析正文与表格','105 effects, overall standardized effect, moderators','105个效应量、总体效应与调节因素'],
'R10':['Original journal article','期刊原始论文','51 teams, measures, regression-based associations','51支团队、测量与回归关联'],
'R11':['Original theory article','理论论文原文','Model and propositions, not newly sampled results','理论模型与命题，非新样本结果'],
'R15':['Official abstract and authorized first-page preview','正式摘要及授权第一页预览','Research question and general six-month finding; complete methods, sample N and coefficients remain unavailable','研究问题及六个月一般性发现已核对；完整方法、样本量和统计系数仍缺失'],
'R22':['Original proceedings article','会议论文原文','3,941,161 users, observation and measurement denominators','3941161名用户、观察方法与比例分母'],
'R29':['First chapter excerpt and academic table of contents','第一章节选与学术目录','Four moments and verified book structure; other chapter texts not fully audited','四个环节与全书结构已核对；其他章节未逐页核实']
};
return '<main class="container atlas-page">'+nav()+heading(T('Research Verification Register','研究来源核实记录'),T('An honest distinction between source review, partial access, and the work still required.','明确区分已经审阅的资料、仅能部分获取的文献和剩余的核实工作。'))+
'<section class="atlas-panel"><h2>'+E(T('What does verified mean here?','本馆如何定义“核实”？'))+'</h2><p>'+E(T('This register reports which original-source materials were checked. A long article page is not automatically a completed scholarly peer review. Original authors’ data, museum interpretation and missing evidence remain separate.','这里记录已核对哪些原始材料。研究页面写得长，并不自动代表已经完成严格学术审查；作者数据、本馆解读与缺失证据必须分开。'))+'</p></section>'+
'<div class="atlas-study-list">'+all.map(id=>{const x=C.find(s=>s.id===id),n=notes[id];return '<article class="atlas-panel"><h2><a href="'+go(id)+'">'+id+' · '+E(x.author)+'</a></h2><p><strong>'+E(T('Available source: ','已获取来源：'))+'</strong>'+E(T(n[0],n[1]))+'</p><p><strong>'+E(T('Verified scope: ','已核实范围：'))+'</strong>'+E(T(n[2],n[3]))+'</p><p class="small muted">'+E(id==='R15'?T('Partial access — NOT complete full-text verification.','仅能部分获取——尚未完成全文核实。'):id==='R29'?T('Chapter-based verification — NOT full-book page-by-page verification.','按章节核实——尚未完成整本书逐页核实。'):T('Original-source details recorded in the dossier; further source checks remain possible.','论文的原文核查内容见档案，仍可继续补充核对。'))+'</p></article>'}).join('')+'</div></main>';
}
function method(){
const items=[
['The question and the corpus','问题与文献范围','We explore chosen withholding, pressured silence, enforced suppression, and gaps in recorded history. The initial 36 works were curated across four scenes and historical methods; this is not an exhaustive search.','本馆研究主动保留、受压力影响的沉默、被迫噤声及历史记录缺席。首批36项作品依据四个展厅与历史方法论选择，并非穷尽式检索。'],
['How each study is read','如何解读每一项研究','For empirical studies we distinguish research questions, participants, sampling, measurements, procedures, outcomes and limitations. For theoretical and historical works we examine arguments, sources and analytical methods instead of inventing experiments.','实证研究需核对问题、参与者、抽样、测量、步骤、结果和局限；理论及历史著作则分析论证、材料和方法，不虚构实验过程。'],
['Evidence versus interpretation','证据与策展推论','Published findings are not the same as our application to a gallery. Every claimed finding must be traceable to the source; an analogy is explicitly labelled as interpretation.','原研究的发现不等于本馆对展厅的应用。每项事实性发现都需要可追溯来源；类比必须标明为策展解读。'],
['Comparing works','如何比较研究','We compare research questions, populations, measures, methods, dates, contexts, convergent findings and disagreements. Distinct outcomes are not pooled into a made-up number.','比较研究问题、样本、测量、方法、年代、情境、共同发现与分歧。不同指标不应合成凭空创造的数字。'],
['Historical ethics','历史档案伦理','No modern psychological study can identify the unrecorded feelings of an historical person. We distinguish documents, later accounts, reasonable inference and irreducible uncertainty.','当代心理学研究不能识别历史人物未留下记录的内心。我们区分原始文献、后人叙述、合理推论与无法消除的不确定性。'],
['Visitor agency and privacy','访客的自主与隐私','Research links do not diagnose a visitor. The library does not store research browsing in the shared answer database. Published stories remain voluntary; private drafts are not research data.','研究关联不用于诊断访客。阅读研究不会被写入共享答题数据库；公开故事出于自愿，私人草稿不作为研究资料。'],
['Verification and corrections','核实与修订','The catalogue includes bibliographic candidates with varied verification depth. Detailed methods and statistics require access to the original publication. Corrections should update the source record and all linked comparisons.','目录中文献的核对深度不一。详细方法与统计结果需要查阅原始出版物；发现错误时应同时更新来源档案及关联比较。']
];
return '<main class="container atlas-page">'+nav()+heading(T('How We Read What Was Never Said','我们如何阅读未曾说出的话'),T('A curatorial statement on evidence, comparison, limits and responsibility.','关于证据、比较、局限与责任的策展方法说明。'))+items.map((p,i)=>'<section class="atlas-panel"><span class="eyebrow">'+String(i+1).padStart(2,'0')+'</span><h2>'+E(T(p[0],p[1]))+'</h2><p>'+E(T(p[2],p[3]))+'</p></section>').join('')+'<section class="atlas-panel"><h2>'+E(T('Methodological references','方法参考'))+'</h2><p><a href="https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-12" target="_blank" rel="noopener noreferrer">Cochrane Handbook · Synthesis without meta-analysis ↗</a></p><p><a href="https://www.bmj.com/content/368/bmj.l6890" target="_blank" rel="noopener noreferrer">SWiM reporting guideline ↗</a></p></section></main>';
}
function page(id){
if(!id)return catalog();
const bits=id.split('/');
if(bits[0]==='study')return study(bits[1]);
if(bits[0]==='group')return shelf(bits[1]);
if(bits[0]==='synthesis')return synthesis(bits[1]);
if(bits[0]==='compare')return compare(bits[1]);
if(bits[0]==='reason')return reason(bits[1],Number(bits[2]));
if(bits[0]==='audit')return auditRegister();
if(bits[0]==='method')return method();
if(G[id])return shelf(id);
return catalog();
}
function decorate(route){
if(route.type==='history'&&route.id&&historyLinks[route.id]){
 const box=document.querySelector('.history-evidence-section')||document.querySelector('.history-longform');
 if(box&&!document.getElementById('historical-research-connections')){
 const wrap=document.createElement('section');wrap.id='historical-research-connections';wrap.className='atlas-panel atlas-history-links';
 wrap.innerHTML='<h2>'+E(T('Research Connections','研究关联'))+'</h2><p>'+E(T('These works offer comparative lenses, not proof of this historical person’s private motivations.','这些研究提供比较视角，并不能证明历史人物的内心动机。'))+'</p>'+studies(historyLinks[route.id].ids);
 box.appendChild(wrap);
 }
}
if(route.type==='gallery'&&G[route.id]){
 const target=document.querySelector('.gallery-gateways');if(target&&!document.getElementById('atlas-reason-entrance')){
 const wrap=document.createElement('section');wrap.id='atlas-reason-entrance';wrap.className='atlas-panel';
 wrap.innerHTML='<h2>'+E(T('Research Connections · Seven Reasons','研究关联 · 七种沉默理由'))+'</h2><p>'+E(T('Explore possible explanations for each reason and the published research behind them.','通过公开研究探索每一种沉默理由背后的可能解释。'))+'</p><div class="atlas-reason-grid">'+reasonMap[route.id].map((_,i)=>'<a href="#/research/reason/'+route.id+'/'+i+'">'+(i+1)+'. '+E(reasonName(route.id,i))+'</a>').join('')+'</div>';
 target.insertAdjacentElement('afterend',wrap);
 }
}
if(route.type==='research-index'){
 const inp=document.getElementById('atlas-search');const results=document.getElementById('atlas-results');const count=document.getElementById('atlas-count');
 if(inp&&results)inp.addEventListener('input',()=>{const q=inp.value.trim().toLowerCase(),filtered=C.filter(x=>(x.id+' '+x.title+' '+x.author+' '+x.subject+' '+x.zhSubject).toLowerCase().includes(q));results.innerHTML=studies(filtered.map(x=>x.id))||'<p>'+E(T('No matching sources.','没有匹配的文献。'))+'</p>';if(count)count.textContent=filtered.length+' / 36';});
}
if(route.type==='lookout'&&route.id&&G[route.id]){
 const anchor=document.querySelector('.reason-panel');if(anchor&&!document.getElementById('atlas-lookout-links')){
 const w=document.createElement('section');w.id='atlas-lookout-links';w.className='atlas-panel';w.innerHTML='<h3>'+E(T('Discover research behind these reasons','探索这些理由背后的研究'))+'</h3><div class="atlas-reason-grid">'+reasonMap[route.id].map((_,i)=>'<a href="#/research/reason/'+route.id+'/'+i+'">'+(i+1)+'. '+E(reasonName(route.id,i))+'</a>').join('')+'</div>';anchor.after(w);
 }
}
}
window.MUSEUM_RESEARCH_ATLAS={page,decorate,catalog:C,reasonMap,historyLinks};
})();