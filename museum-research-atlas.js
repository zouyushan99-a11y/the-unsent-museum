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
const T=(en,zh)=>window.museumLangPublic?.()==='en'?en:(window.museumConvertPublic?.(zh)||zh);
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const heading=(name,sub)=>'<section class="page-hero"><div class="eyebrow">'+E(T('THE UNSENT MUSEUM · RESEARCH LIBRARY','未寄之言博物馆 · 研究资料馆'))+'</div><h1>'+E(name)+'</h1><p class="muted">'+E(sub)+'</p></section>';
const nav=()=>'<nav class="atlas-nav" aria-label="Research navigation"><a href="#/research">'+E(T('Research library','研究馆首页'))+'</a><a href="#/research/method">'+E(T('Curatorial method','策展方法'))+'</a><a href="#/history">'+E(T('Historical archives','历史档案'))+'</a></nav>';
const go=(id)=>'#/research/study/'+id;
const linkStudy=(x)=>'<a class="atlas-study-link" href="'+go(x.id)+'"><span>'+x.id+' · '+E(x.author)+' ('+E(x.year)+')</span><strong>'+E(x.title)+'</strong><small>'+E(T(x.subject,x.zhSubject))+'</small></a>';
const studies=(ids)=>'<div class="atlas-study-list">'+ids.map(id=>C.find(x=>x.id===id)).filter(Boolean).map(linkStudy).join('')+'</div>';
const reasonName=(g,i)=>{
const labels={friendship:['I do not want to disappoint someone who trusts me.','I worry that refusing would seem selfish or unkind.','I feel obliged because this person has helped me before.','I hope the request might disappear if I do not respond clearly.','I am not used to setting boundaries.','I fear that saying no could damage our relationship.','I need more time before I can put my refusal into words.'],classroom:['I worry that intervening could make the situation worse.','I fear becoming the next target.','I am unsure whether I have understood the situation correctly.','I think someone with more authority should step in.','I would rather offer support privately afterwards.','I do not believe anyone would listen to me.','I need a safer way to help before speaking.'],family:['I expect they already know how I feel.','I am uncomfortable showing strong emotion aloud.','I fear becoming vulnerable or embarrassed.','I cannot find words that seem adequate.','I believe another opportunity will come.','I worry the other person may not welcome this conversation.','I prefer expressing my feelings through actions.'],'before-sending':['I worry that the message could be misunderstood.','I would rather say it face to face.','I need time to calm down and reconsider.','I do not want the message to be saved or shared.','I think the issue may resolve itself.','I no longer think the message needs to be sent.','I do not feel ready for the reply.']};
return labels[g]?.[i]||'';
};
function reason(g,i){
const ids=(reasonMap[g]||[])[i]?.map(n=>'R'+String(n).padStart(2,'0'))||[];
return '<main class="container atlas-page">'+nav()+heading(T('Why might this reason matter?','这一理由与哪些研究有关？'),T('A research connection, not a diagnosis of any visitor.','这些是研究关联，不是对任何访客动机的诊断。'))+'<section class="atlas-panel"><span class="eyebrow">'+E(G[g]?.[0]||g)+' · '+String(i+1)+'/7</span><h2>'+E(T(reasonName(g,i),'第'+(i+1)+'种沉默理由'))+'</h2><p>'+E(T('The studies below provide possible explanatory lenses. None establishes why one particular visitor made a choice.','以下研究提供可能的解释视角，不能据此断定某位访客为什么作出选择。'))+'</p>'+studies(ids)+'</section><a class="btn btn-outline" href="#/gallery/'+E(g)+'">'+E(T('Return to the gallery','返回展厅'))+'</a></main>';
}
function catalog(){
return '<main class="container atlas-page">'+nav()+heading('Behind the Silence',T('Read the studies. Compare the evidence. Explore what can—and cannot—be concluded.','阅读研究、比较证据，并探索我们能够与不能够得出的结论。'))+
'<section class="atlas-panel"><p>'+E(T('36 curated bibliographic entries · 4 galleries · 8 cross-disciplinary works. The catalogue is not a claim that every full text has been reviewed. Detailed methodological information is published only when supported by accessible sources.','36项策展书目 · 四个展厅 · 八项跨学科作品。本目录不代表每篇全文都已审阅；只有证据能够支持的研究方法细节才会刊登。'))+'</p><label for="atlas-search">'+E(T('Search titles, authors and research topics','搜索标题、作者和研究主题'))+'</label><input id="atlas-search" class="field" type="search" placeholder="'+E(T('Type to filter the catalogue','输入关键词筛选目录'))+'"></section>'+
'<div class="atlas-group-grid">'+Object.entries(G).map(([g,n])=>'<a class="atlas-category" href="#/research/group/'+g+'"><span class="eyebrow">'+(g==='cross'?'08':'07')+' '+E(T('sources','项文献'))+'</span><h2>'+E(T(n[0],n[1]))+'</h2><span>'+E(T('Open the research shelf ↗','打开研究书架 ↗'))+'</span></a>').join('')+'</div>'+
'<section class="section-compact"><h2>'+E(T('Comparative & synthesis essays','跨研究比较与综合文章'))+'</h2><p class="muted">'+E(T('Compare what different studies actually measure, where their conclusions meet, and where they cannot be combined.','比较各项研究实际测量了什么、结论何处相同，以及为什么某些结果不能直接合并。'))+'</p><div class="atlas-group-grid">'+themes.map((x,i)=>'<a class="atlas-category" href="#/research/synthesis/'+i+'"><span class="eyebrow">'+String(i+1).padStart(2,'0')+' / SYNTHESIS</span><h3>'+E(T(x.en,x.zh))+'</h3></a>').join('')+'</div></section>'+
'<section class="section-compact"><h2>'+E(T('Browse all 36 sources','浏览全部36项文献'))+'</h2><div id="atlas-count" class="small muted"></div><div id="atlas-results">'+studies(C.map(x=>x.id))+'</div></section><section class="atlas-panel"><h2>'+E(T('How we study silence','我们如何研究沉默'))+'</h2><p>'+E(T('The collection separates published findings, curatorial inference, and missing evidence; it is a critical narrative review, not a systematic review or a pooled meta-analysis.','本馆区分已发表发现、策展推论与证据缺口；这是一项批判性的叙述性文献研究，并非系统性综述或合并统计的元分析。'))+'</p><a class="btn btn-outline" href="#/research/method">'+E(T('Read the curatorial method ↗','阅读策展方法说明 ↗'))+'</a></section></main>';
}
function shelf(g){
return '<main class="container atlas-page">'+nav()+heading(T(G[g]?.[0]||'Research',G[g]?.[1]||'研究'),T('Open every source for its research question, approach, findings, limitations and related objects.','打开每项文献，查看研究问题、方法、结果、局限与关联展品。'))+studies(C.filter(x=>x.gallery===g).map(x=>x.id))+(g!=='cross'?'<section class="atlas-panel"><h2>'+E(T('The seven reasons in this gallery','本展厅的七种沉默理由'))+'</h2><div class="atlas-reason-grid">'+reasonMap[g].map((_,i)=>'<a href="#/research/reason/'+g+'/'+i+'">'+(i+1)+'. '+E(T(reasonName(g,i),'研究关联 '+(i+1)))+'</a>').join('')+'</div></section>':'')+'</main>';
}
const curated12=['R01','R02','R03','R09','R15','R16','R21','R22','R26']; 
function study(id){
const x=C.find(y=>y.id===id);if(!x)return catalog();
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
if(bits[0]==='reason')return reason(bits[1],Number(bits[2]));
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
 wrap.innerHTML='<h2>'+E(T('Research Connections · Seven Reasons','研究关联 · 七种沉默理由'))+'</h2><p>'+E(T('Explore possible explanations for each reason and the published research behind them.','通过公开研究探索每一种沉默理由背后的可能解释。'))+'</p><div class="atlas-reason-grid">'+reasonMap[route.id].map((_,i)=>'<a href="#/research/reason/'+route.id+'/'+i+'">'+(i+1)+'. '+E(T(reasonName(route.id,i),'理由 '+(i+1)))+'</a>').join('')+'</div>';
 target.insertAdjacentElement('afterend',wrap);
 }
}
if(route.type==='research-index'){
 const inp=document.getElementById('atlas-search');const results=document.getElementById('atlas-results');const count=document.getElementById('atlas-count');
 if(inp&&results)inp.addEventListener('input',()=>{const q=inp.value.trim().toLowerCase(),filtered=C.filter(x=>(x.id+' '+x.title+' '+x.author+' '+x.subject+' '+x.zhSubject).toLowerCase().includes(q));results.innerHTML=studies(filtered.map(x=>x.id))||'<p>'+E(T('No matching sources.','没有匹配的文献。'))+'</p>';if(count)count.textContent=filtered.length+' / 36';});
}
if(route.type==='lookout'&&route.id&&G[route.id]){
 const anchor=document.querySelector('.reason-panel');if(anchor&&!document.getElementById('atlas-lookout-links')){
 const w=document.createElement('section');w.id='atlas-lookout-links';w.className='atlas-panel';w.innerHTML='<h3>'+E(T('Discover research behind these reasons','探索这些理由背后的研究'))+'</h3><div class="atlas-reason-grid">'+reasonMap[route.id].map((_,i)=>'<a href="#/research/reason/'+route.id+'/'+i+'">'+(i+1)+'. '+E(T(reasonName(route.id,i),'理由 '+(i+1)))+'</a>').join('')+'</div>';anchor.after(w);
 }
}
}
window.MUSEUM_RESEARCH_ATLAS={page,decorate,catalog:C,reasonMap,historyLinks};
})();