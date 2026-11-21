/* Curator interpretations for all 69 individual history exhibits.
   These annotations are interpretations, not private thoughts or invented testimony. */
(function(){
 'use strict';
 const ANGLES={
  "franz-kafka": "卡夫卡把难以当面解释的父子冲突改写成书信，写作既是表达，也是在回避可能再次发生的权威压迫；没有寄出不等于从未尝试沟通。",
  "abraham-lincoln": "林肯将即时的愤怒留在未发出的文字里，说明政治判断不能总按私人情绪的速度作出，领导者还必须考虑与他人共同承担的后果。",
  "anne-lister": "李斯特的日记保留了她对私人关系的清晰认识；在当时社会道德与性别规范下，私人写作和公开身份之间不可能毫无代价地连接。",
  "sophie-germain": "热尔曼的男性化名暴露学术世界对女性资格的预先排斥。她改变的是进入通信网络的方式，而不是数学论证本身的价值。",
  "fanny-mendelssohn": "范妮的创作被家庭期望和女性公共角色限制，私人认可与公开署名之间存在难以忽略的落差。",
  "emily-dickinson": "狄金森保留部分诗作与控制读者范围，也可能包含她对文字形式和私人空间的坚持，不能简单写成害怕发表。",
  "nicolaus-copernicus": "哥白尼的迟延出版涉及论证、读者、出版网络及学术权威，不应只归结为单一的怯懦。",
  "anna-akhmatova": "阿赫玛托娃在政治高压中保存诗句，甚至依靠记忆传递文字；这种沉默带有保护自己与身边人的现实成本。",
  "harriet-jacobs": "雅各布斯需要向公众揭露奴役制度，又需要保护自己的尊严与私人经历，公开见证和保留边界并不矛盾。",
  "alan-turing": "图灵面临的国家机密要求和私人身份受法律压制是两种不同的沉默；混为一谈会抹去制度造成的差异。",
  "oscar-wilde": "王尔德不是没有表达能力，而是私人生活被社会偏见和司法权力变成惩罚对象，使公开身份充满风险。",
  "harriet-tubman": "塔布曼的保密是一种保护行动与同伴安全的策略，公开路线和身份反而可能让其他人付出生命代价。",
  "anne-frank": "安妮无法在藏匿处之外安全发言，却始终在日记里表达；外部压迫与私人书写应当同时被看见。",
  "white-rose": "白玫瑰成员已经通过传单明确表达立场，国家暴力试图终止的不是他们的思想，而是思想继续被传播的机会。",
  "liu-xiaobo": "刘晓波公开表达政治意见之后遭遇法律限制，重点应是表达权与国家权力的冲突，而非猜测私人恐惧。",
  "galileo-galilei": "伽利略的研究论证与制度裁决发生冲突，公开表述受到限制并不意味着证据本身被否定。",
  "eileen-chang": "张爱玲允许文学作品走向公众，不代表她愿意将所有私事一并公开；读者的好奇与作者的边界需要区分。",
  "charlotte-bronte": "夏洛蒂通过笔名争取作品在性别判断出现之前先被阅读，这是一种对出版市场结构的回应。",
  "emily-bronte": "艾米莉选择笔名的后果与当时女性作者的接受环境相连，不能用简单的羞怯解释。",
  "anne-bronte": "安妮使用化名意味着要处理作品、性别与公众期待之间的关系，而不是否认自己的文学才能。",
  "jane-austen": "奥斯汀的匿名出版反映女性文学活动的公共身份受到约束，小说发表与作者姓名曝光并非同一步骤。",
  "george-eliot": "乔治·艾略特的笔名使文学文本能够暂时脱离对女性作者私生活的预判，改变了读者接触作品的次序。",
  "louisa-may-alcott": "奥尔科特的不同署名与题材和出版市场相连，作者身份是一种被现实条件塑造的选择。",
  "thomas-more": "莫尔的拒绝与沉默发生在信仰和法律风险相互挤压之处，未表态本身也可能包含坚决的立场。",
  "elizabeth-i": "伊丽莎白一世利用不明确的政治表态维持谈判空间，权力者的策略性保留不应与弱势者被迫失语等同。",
  "queen-victoria": "维多利亚女王日记的身后删节体现保存者与编辑者对公开记忆的控制，书写者未必拥有最后的解释权。",
  "thomas-hardy": "哈代对私人记录的整理和销毁提出了一个难题：后人的研究兴趣能否凌驾于作者对自身档案命运的选择？",
  "rosa-parks": "帕克斯明确拒绝服从种族隔离规定，讨论应聚焦制度如何剥夺平等行动的权利，而不是赞美她的沉默。",
  "claudette-colvin": "科尔文通过拒绝让座表达立场，她在集体记忆中较少被提及，说明社会会选择哪些反抗者成为故事主角。",
  "janusz-korczak": "科尔恰克所照顾的孩子被剥夺决定命运的机会，重点不是浪漫化牺牲，而是讨论谁有权倾听或忽略儿童。",
  "etty-hillesum": "希勒苏姆的日记记录迫害中的个体思考，不能被当作所有受害者的共同心理答案。",
  "ida-b-wells": "威尔斯已经通过报道发声，暴力毁坏报馆说明权力可以通过摧毁传播条件来阻断公共讨论。",
  "rosalind-franklin": "富兰克林留下了自己的论文和实验贡献；问题是资料如何流通、成果怎样署名，以及后来的记忆如何分配荣誉。",
  "artemisia-gentileschi": "真蒂莱斯基的法庭证词与绘画都属于表达，但她需要在不平等制度中反复证明自身可信。",
  "elizabeth-keckley": "凯克利公开个人经历引发隐私和忠诚争议，但这不能让上层人士的感受自动凌驾于她的叙述权。",
  "mary-berg": "玛丽·伯格的战时日记有见证价值，却不能代表所有受迫害者的心声，她之后仍有保留私人生活的权利。",
  "rene-descartes": "笛卡尔在伽利略受审消息后延缓出版，面对的是思想发表的风险，而非单纯丧失科学判断。",
  "baruch-spinoza": "斯宾诺莎的匿名发表涉及宗教争论与公共安全，思想能够被传递，不必依赖作者身份完全暴露。",
  "benjamin-franklin": "富兰克林使用化名创造不同的公共声音，说明匿名有时并非逃避，而是对权威与印刷文化的回应。",
  "thomas-paine": "潘恩的出版选择与革命政治的传播和惩罚机制相连；稿件能否发行取决于个人与出版网络共同承担的风险。",
  "frances-burney": "伯尼匿名发表，不应误解为缺乏野心；家庭声誉与女性社会角色影响她如何进入文学市场。",
  "ludwig-van-beethoven": "贝多芬的未交付书信包含对疾病、孤独与未来的思考，不能断言未寄出就是不愿寻求理解。",
  "elizabeth-inchbald": "英奇博尔德的作品与私人手稿具有不同的公开命运，作者或保存者的选择会改变我们今天能够读到的范围。",
  "george-sand": "乔治·桑的笔名改变作者与公众之间的关系，也挑战了男性主导的文学市场如何判断作品。",
  "elizabeth-gaskell": "盖斯凯尔讲述别人经历时需考虑事实、名誉和责任，发表与删节不能只从作者个人情绪解释。",
  "nikolai-gogol": "果戈里焚毁手稿与精神和宗教困境相连，但不应把一个复杂选择压缩成简单的心理诊断。",
  "lewis-carroll": "卡罗尔私人记录中的缺页和删节牵涉家人保存与编辑行为，遗失材料不能自动被想象补足。",
  "florence-nightingale": "南丁格尔对公开报告和私人往来的不同处理，是影响改革的一部分，而非退离公共讨论。",
  "gerard-manley-hopkins": "霍普金斯在信仰承诺、写作实践与发表机会之间安排作品命运，生前少量出版不等于否定诗歌。",
  "vernon-lee": "弗农·李使用笔名进入思想讨论，强调了学术与文学读者可能先按性别判断作者的问题。",
  "katharine-bradley": "布拉德利与库珀共用笔名，表现作者身份可以被两个人共同塑造，不能把合作简化为隐瞒。",
  "edith-cooper": "库珀与布拉德利的共同署名让作品与私人关系产生交集，作者身份不等于单人的固定标签。",
  "mark-twain": "吐温延后发表部分文字，关联声誉、题材与读者反应，写下并不自动意味着立即授权公开。",
  "em-forster": "福斯特某些作品延后出版，与同性情感在当时面临的社会和法律压力有关，不是作品缺乏文学价值。",
  "cecilia-payne": "佩恩面对学术等级调整科学结论的表达力度，证明谁能强烈提出判断也受机构地位影响。",
  "mikhail-bulgakov": "布尔加科夫的出版限制首先是审查制度在发挥作用，不能把外部阻碍写成作者自愿不说。",
  "george-orwell": "奥威尔某些出版受阻，表现出版机构面对政治风险的计算，需区分作者主动保留和被编辑拒绝。",
  "willa-cather": "凯瑟限制私人书信的流通，说明公众阅读文学作品不等于拥有作家全部私人通信。",
  "barbara-mcclintock": "麦克林托克的成果与认可存在时间差，研究者表达过的发现也可能暂时不被学术共同体听见。",
  "patricia-highsmith": "海史密斯的私人笔记、小说与公众身份有不同边界，读者可以讨论作品而不必占有作者私生活。",
  "cs-lewis": "刘易斯以不同署名处理不同类型的情感与宗教文字，公开受众的区别本身值得考察。",
  "jd-salinger": "塞林格控制发表和私人生活的界限，公众对神秘作者的想象不能替代可证实的动机。",
  "anais-nin": "阿娜伊斯·宁的日记有不同出版版本，文本公开也伴随隐私保护和作者自我呈现的选择。",
  "alice-bradley-sheldon": "谢尔登使用男性笔名发表科幻，作品的接受与读者对性别的猜测交织，凸显署名偏见。",
  "se-hinton": "欣顿采用名字首字母发表，说明出版市场对女性和年轻作者的预设影响了作品的第一印象。",
  "romain-gary": "加里的不同笔名挑战读者对名气与文学价值的判断，同时引发奖项与公众身份争论。",
  "vladimir-nabokov": "纳博科夫关于手稿保存的意愿和后人的出版选择之间存在冲突，保存文学遗产并非总是无争议。",
  "elena-ferrante": "费兰特明确保留真实身份，是对文学市场要求作者私人传记的拒绝；匿名并不妨碍小说公开。",
  "jk-rowling": "罗琳使用另一笔名写作，是对既有名气与读者期待的重新安排，不必被看成羞于承认作品。"
};
 const opening=[
  '我更愿意把这个决定放回具体的关系中看，而不是急着评判当事人的胆量。能够写下或者说出一件事，与有条件把它送达预期听众，是两个不同的问题。',
  '在我看来，沉默不是一个可以单独贴在人物身上的性格标签。真正需要分析的是：当事人面对哪些受众、哪些代价，以及他们实际上能够控制哪些环节。',
  '我不认为后来留下了文字，就意味着当时所有表达障碍都不存在。我们今天从档案里看见一个结果，却不应该把当时尚未发生的未来，当作人物已经掌握的信息。'
 ];
 const power={
  withheld:'对于主动延后、匿名或选择保留的情况，我尤其在意选择本身是否受到限制。一个人有权决定署名、交付对象与发表时间，但这种选择可能建立在名誉、家庭、市场或制度风险之上。既要承认其行动能力，也不能将代价推回个人性格，好像只要勇敢便能消除环境。',
  protective:'这里的保密与日常生活里的犹豫不同，信息一旦外泄，可能直接影响安全或生存。不能以和平时期对公开表达的期待，要求身处危险的人交出本来用于保护自己或别人的信息。承认保密的正当性，也不等于赞同制造危险的制度。',
  suppressed:'这份档案涉及已经发生的表达，或表达机会被权力剥夺的过程。因此我不会把受阻的结局包装成当事人的主动沉默。应当将发表、反抗、证言与限制、威胁和惩罚分别写清，才能看见是谁使公共讨论无法继续。'
 };
 const ethics=[
  '我在这里使用的是一种有限的解释，而不是一份替当事人下结论的心理鉴定。史料可以固定行为、日期或文本，有时还可以解释外部压力，却未必能够证明一个人内心所有念头。遇到这种空白，承认不知道，比编造一个漂亮而确定的答案更诚实。',
  '历史材料能为我们的判断划出边界，却不保证每种动机都有原封不动的记录。后世读者尤其容易从结果倒推动机，好像人物知道自己后来会怎样被记住。我认为这种写法会抹去选择发生时的不确定性，也会让真正的制度责任失去位置。',
  '这不是要给沉默寻找一个放之四海而皆准的理由。我只能根据可查的行动与环境提出判断，并保留其他解释存在的可能；正因为私人动机并不完全透明，策展人才更应该把自己的立场与档案中可直接确认的事实区分开来。'
 ];
 const closing=[
  '最后，我更关心谁得到了选择听众的权利，谁必须为同样一句话承担更高的风险。一个人的文字何时变成公共材料，既取决于他自己的行动，也受他所处时代的权力关系影响。',
  '我不想让这份档案最后只剩“勇敢”或“软弱”两个形容词。真正值得保留下来的，是一个具体的人怎样在有限条件里作出判断，以及这种条件为什么没有平等地提供给每个人。',
  '如果今天的参观者能看见保留、表达和被迫停止之间的区别，这份分析才算完成了工作。不是所有没有抵达公众的文字都来自相同的心理，也不是所有已经说出的话都能被听见。'
 ];
 const enPower={
  withheld:'In a case of deliberate withholding, anonymity or delayed publication, authorship and control of audience matter. Yet choice under constraint is not the same as unrestricted freedom. A person might retain agency over a manuscript while still facing social, professional, family or institutional penalties for publication.',
  protective:'Secrecy in a threatening environment should not be judged by the standards of an ordinary disagreement. Information about identities, routes or private thoughts may affect someone else’s safety. The existence of a protective decision does not excuse the system that made protection necessary.',
  suppressed:'In a case of suppression, we must not confuse the act of speaking with the pressure that tried to stop it. The relevant question is who held coercive or institutional power over circulation, safety and the right to be heard. Calling the outcome voluntary silence would wrongly shift responsibility onto the person who spoke.'
 };
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
 window.MUSEUM_HISTORY_CURATOR_IDS=Object.keys(ANGLES);
 window.museumHistoryCuratorial=function(id,essay,lang,category){
  const key=Object.prototype.hasOwnProperty.call(ANGLES,id)?id:null;
  if(!key||!essay)return null;
  const zh=lang!=='en', idx=Object.keys(ANGLES).indexOf(id),type=power[category]?category:'withheld';
  const z=window.MUSEUM_HISTORY_ZH?.[id]||{};
  const chosen=(z.cause||'').trim(),proof=(z.proof||'').trim(),event=(z.act||'').trim();
  const translate=v=>lang==='zh-Hant'&&window.OpenCC?.Converter?window.OpenCC.Converter({from:'cn',to:'hk'})(v):v;
  const setting=(z.setting||'').trim(),after=(z.after||'').trim();
  const situate={
   withheld:'我的判断是，这里的选择既有个人主动权，也有必须付出的现实代价。把“不公开”仅解释为恐惧，会忽略当事人如何安排读者、身份及时间；把它完全解释为自主，则又会把社会的不平等推到视野之外。',
   protective:'此处的保密必须与现实风险一起衡量。即便一个人十分渴望被理解，也未必能承担让他人知道的代价；尤其当信息还涉及同伴、家人或其他人的安全时，公开不是纯粹的私人勇气测验。',
   suppressed:'在这里，我不愿把遭到阻断的表达称作“自愿沉默”。当事人已经采取的行动，与后来由法律、警察、审查机构或其他权威施加的限制，是两类应当分别归责的事实。'
  };
  const enSetting=english=>String(english||'').trim();
  const enSettingText=essay.analysis?.[0]?.[1]||'The institutions and social expectations surrounding this decision shaped the available choices.';
  const enActText=essay.analysis?.[1]?.[1]||enM.intended||'The record documents an act concerning who could speak and who could listen.';
  const enWhyText=essay.analysis?.[2]?.[1]||enM.why||'The surviving record suggests multiple pressures rather than one certain personal motive.';
  const enProofText=essay.analysis?.[3]?.[1]||enM.certainty||'The records do not establish every private thought.';
  const enAfterText=essay.analysis?.[4]?.[1]||'Later reception altered the public meaning of the surviving record.';
  const zhParagraphs=[
    ANGLES[id]+' '+(setting?'这一判断必须放在当时的社会里理解：'+setting+' ':'')+'我特别留意这一环境怎样改变一个人解释自己、发表作品或维护私人边界的实际可能，而不把时代仅仅当成故事的背景。',
    (event?'首先需要分清已经发生的行为：'+event+' ':'')+(chosen?'就动机与压力而言，现有材料提示：'+chosen+' ':'')+situate[type]+' 一段关系里的情感需求，和制度允许一个人做什么，往往同时作用；但不能在没有当事人证词的情况下，替他指定唯一的内心理由。',
    (proof?'证据能够支持的部分包括：'+proof+' ':'')+'因此，我会把史料所证明的行动与自己推测的心理机制分开。作者可能需要自尊、理解、独立或安全，也可能同时顾及他人；这些都是值得讨论的解释方向，不是我能够替历史人物宣告的秘密。将沉默直接定义为懦弱、顺从或高尚，都可能掩盖这份资料里真正复杂的选择。',
    (after?'再看随后发生的事：'+after+' ':'')+'我更在意的是这段经历怎样改变了谁有权说话、谁能够阅读、谁承担言说的成本。后世已经知道的结果，不能自动当成当时人物的预期。我的策展结论是：'+ANGLES[id]+' 这是一种有边界的判断，既希望看清社会文化造成的压力，也愿意承认档案无法进入当事人全部的情感世界。'
  ];
  const enParagraphs=[
   'My curatorial argument begins with this specific historical circumstance: '+enSettingText+' In that social setting, norms about authority, reputation and who could address whom were not merely background; they altered what choices were realistically available. I am interested in the unequal cost of being heard, rather than in assigning a simple personality trait to the individual.',
   'What was actually done must be distinguished from the motives later attributed to it: '+enActText+' The most relevant explanation in the surviving account is: '+enWhyText+' '+enPower[type]+' I read this as an interaction between personal agency, relationships and social expectations, not a test of whether the individual possessed sufficient courage.',
   'My interpretation has an evidentiary limit: '+enProofText+' We can discuss the emotional stakes suggested by a letter, a testimony, a publication decision or a restriction without claiming access to unrecorded private thoughts. The archive helps us identify pressure and observable choices, but it cannot prove that every possible feeling was present.',
   'The aftermath changes how we view the original choice: '+enAfterText+' As curator, I ask who controlled circulation and what that meant for the people involved. Hindsight may make a decision look inevitable when it was anything but inevitable to those living through it. This is my reading of the available material, not a retrospective confession placed in the historical person’s mouth.'
  ];
  const originalQuestion=zh?(z.question||'这份记录怎样改变我们理解沉默的方式？'):(essay.question||'What does this history change about how we listen?');
  const zhPowerQuestions={
   withheld:['如果发表的代价由当事人承担，旁观者有资格要求他立刻说出来吗？','当一份文字可能改变作者的生活，发表时间应该由谁决定？','选择化名或不公开姓名，是否会改变作品本身的价值？','个人对文字的控制权，在公共利益面前应该如何被理解？'],
   protective:['如果表达会危及自身或他人的安全，我们该如何理解保留信息的权利？','当一份记录可能成为迫害他人的证据时，保存与公开之间该如何权衡？','为了保护一个人的声音，是否有时必须先保护他的沉默？','谁能够决定保密何时结束，以及由谁承担后果？'],
   suppressed:['在这段经历里，究竟是谁掌握着决定一个声音能否继续被听见的权力？','如果一个人的表达被惩罚，责任应该落在发声者还是惩罚者身上？','一种观点已经被说出却没能传播，这样的失语应如何被记录？','当公众只记得结果，我们是否忽略了让表达中断的制度？']
  };
  const zhEvidenceQuestions=[
   '当档案无法告诉我们全部私人动机时，读者应该把自己的想象停在哪里？',
   '一份留下来的文献，能够证明行动，却能否证明行动者全部的感受？',
   '如果后人知道事情的结局，怎样避免把事后的理解强加给当时的人？',
   '保存者、编辑者与当事人对同一份文字的理解，可能有怎样的差别？',
   '当一段历史有重要空白时，我们能不能尊重它，而不急着替当事人补写？',
   '我们如何区分文献写下的事实和策展人提出的解释？'
  ];
  const enPowerQuestions={
   withheld:['Who should decide when a private text becomes public?','What changes when publication carries a cost for its author?','Can anonymity alter how a reader judges a piece of writing?','Does a public interest in reading override an author’s control over publication?'],
   protective:['When speaking can endanger others, who has the right to demand disclosure?','When might preserving a voice require preserving secrecy first?','Who bears the consequences when private information is exposed?','When, and by whom, should a dangerous secret become public?'],
   suppressed:['Who had the power to stop this voice from reaching its audience?','Who bears responsibility when public expression is punished?','How should archives record a voice that was expressed but forcibly interrupted?','What systems disappear from view if we remember only the famous individual?']
  };
  const enEvidenceQuestions=[
   'Where should a reader stop interpreting when the surviving evidence cannot reveal private motives?',
   'What can a document prove about an action, and what feelings must remain uncertain?',
   'How can we avoid mistaking our knowledge of the outcome for the person’s knowledge at the time?',
   'How might an author, editor and later reader disagree about a document’s meaning?',
   'Can an important historical silence remain unanswered without being treated as a flaw?',
   'How do we separate what the archive records from what the curator proposes?'
  ];
  const zhQ=[originalQuestion,zhPowerQuestions[type][idx%4],zhEvidenceQuestions[idx%6]];
  const enQ=[originalQuestion,enPowerQuestions[type][idx%4],enEvidenceQuestions[idx%6]];
  const paragraphs=zh?zhParagraphs.map(translate):enParagraphs;
  const questions=zh?zhQ.map(translate):enQ;
  return {paragraphs,questions,hanCount:(zhParagraphs.join('').match(/[\u3400-\u9fff]/g)||[]).length};
 };
})();