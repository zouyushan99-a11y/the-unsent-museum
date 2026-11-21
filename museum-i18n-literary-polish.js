/* Final literary polish of interface translations, archival labels and names.
   Preserve visitor-submitted prose in its original language. */
(function(){
 const zh=window.MUSEUM_I18N?.zh;if(!zh)return;
 Object.assign(zh,{
 "Home":"序厅","Galleries":"主题展厅","History":"历史馆藏","Historical Wing":"历史馆藏",
 "The Lookout":"星河瞭望台","Story Archive":"故事收藏室","My Stories":"我的手稿",
 "About":"关于本馆","Privacy":"隐私与守护","Method & Reflection":"策展方法与余思",
 "The Unsent Museum":"未寄之言博物馆","The Unsent":"未寄之言","Silence in History":"历史的静默处",
 "Silence in History.":"历史的静默处。","The Story":"故事本身","An Anatomy of Silence":"沉默的纹理",
 "Author’s Note & Sources":"策展手记与史料","Sources & Reflection":"史料与余思",
 "The Unsent Moment":"那一刻，话语没有抵达","The Moment of Expression":"声音出现的那一刻",
 "Read the story":"走进这段往事","Read the story ↗":"展开这份档案 ↗",
 "I · The Story":"第一卷 · 故事","II · An Anatomy of Silence":"第二卷 · 沉默的纹理",
 "III · Sources & Reflection":"第三卷 · 史料与余思",
 "I · The Unsent":"第一馆 · 未曾寄出的声音",
 "II · Silence for Survival":"第二馆 · 为了生存而保留",
 "III · Voices Forced to Stop":"第三馆 · 被迫中断的声音",
 "The Historical Archive":"历史藏馆",
 "THE HISTORICAL WING · DOCUMENTED ACCOUNTS":"历史馆藏 · 有据可查的往事",
 "HISTORICAL NONFICTION":"历史非虚构",
 "THE HISTORICAL OBJECT":"留存于世的实物",
 "HISTORICAL NONFICTION ·":"历史非虚构 ·",
 "HISTORICAL NONFICTION · Withheld manuscript":"历史非虚构 · 暂缓公开的手稿",
 "PART I · HISTORICAL NONFICTION":"第一卷 · 往事与现场",
 "PART II · INTERPRETATION":"第二卷 · 沉默的纹理",
 "PART III · METHOD & REFERENCES":"第三卷 · 史料与余思",
 "DOCUMENTED EXPRESSION · CONTEXT AND EVIDENCE":"留下证据的表达 · 时代与来处",
 "Not all silence means the same thing.":"每一种沉默，都有自己的来处。",
 "Choose an exhibit to read a long-form story, study the silence within it, and follow the historical sources.":"请从一份档案开始，循着文字走近当时的人，再沿着史料寻找故事能够抵达的边界。",
 "Begin with what was never said":"从那些未能抵达的话开始",
 "The central gallery studies chosen withholding. The other two clarify protective secrecy and expression forcibly stopped after it began.":"第一馆收藏主动留下的话语；另外两馆则分别追问生存压力下的隐匿，以及已经发出的声音如何被迫中断。",
 "What happens between wanting to express something and deciding not to deliver it? Begin with real letters, hidden identities and private manuscripts. Other wings examine protective secrecy and the voices of people forced to stop speaking after resisting.":"一句话从心中生起，到最终不再抵达别人，中间究竟发生了什么？请从真实的书信、隐去的姓名与未付印的手稿开始，走近那些曾经试图表达、保留或被迫止声的人。",
 "The narrative uses historical evidence; the analysis is a curatorial interpretation. Sources are provided for readers to check the record independently.":"故事以可以核查的史料为根；对于沉默的理解，则是策展人的尝试。资料列在下方，欢迎沿着来源亲自查证。",
 "The narrative uses historical evidence; the analysis is a curatorial interpretation. Sources are provided for readers to check the record independently.":"故事有史料作根，解释却应保留余地。每一条资料都在这里，供你亲自追溯。",
 "The full account could not load.":"这份档案暂时未能展开。",
 "Refresh the page to load the historical narrative.":"请重新载入页面，再试着打开这段往事。",
 "AN INVITATION TO LOOK CLOSER":"请再走近一些",
 "AN INVITATION TO LOOK CLOSER":"邀你走近",
 "Not every figure here chose silence: the case record specifies what was actually withheld or contested.":"并非所有人都主动选择沉默。请留意每份档案里，究竟是谁决定了话语的去向。",
 "Who was the intended audience?":"这些话原本要说给谁听？",
 "What was there to express?":"那些文字原本承载着什么？",
 "What was withheld — if anything?":"最终留下、隐去或撤回了什么？",
 "Why did it happen?":"是什么使它停在这里？",
 "What do the records actually establish?":"史料能将我们带到哪里？",
 "Why it happened · What form it took · What the evidence allows us to say":"沉默的缘由与形状，以及史料所能照见的边界",
 "The interpretation is qualified in the research notes.":"解释的限度，请参见下方研究手记。",
 "See the historical account":"请阅读上方的历史故事",
 "The evidence does not determine a single cause.":"留存证据不足以指向唯一的原因。",
 "Explore other historical accounts":"还有哪些话，留在历史里",
 "Explore the contemporary galleries ↗":"走进当代情境展厅 ↗",
 "Visit the research library ↗":"前往研究资料馆 ↗",
 "Historical exhibition directory":"历史馆藏目录",
 "Choose a type of silence":"选择沉默的类型",
 "Historical stories, ordered chronologically":"依年代展开的历史档案",
 "Find a historical account":"在历史里寻找一段故事",
 "Search names, places, themes…":"搜索人物、地点或主题……",
 "View original source & rights ↗":"查看原始图片及使用说明 ↗",
 "Open the original archive photograph ↗":"查看馆藏原始图像 ↗",
 "Open the original archive record":"查看馆藏原始记录",
 "Examine the original record ↗":"追溯原始文献 ↗",
 "Evidence and context are discussed in the references below.":"史料根据与相关讨论，详见下方参考资料。",
 "Historical record":"历史文献","A documented act of expression":"留有史料的表达",
 "Words, identities, manuscripts and decisions intentionally kept from an audience.":"有些文字已写成，有些姓名已被隐去；它们曾被有意留在读者之外。",
 "Secrecy chosen under threats or strong external pressure: choice under constraint.":"为了活下去，有时必须藏起自己，也藏起原本能够说出的话。",
 "People who spoke or protested and were then subjected to imprisonment, forced retraction or execution.":"有些人已经发出声音，却遭遇监禁、强制撤回，甚至失去生命。",
 "The Exhibition":"展览漫游","Choose a room.":"推开一扇门。",
 "Explore the rooms of silence":"走进沉默生长的地方",
 "Stories, held among the stars":"将故事托付星河",
 "A place for the thoughts, feelings, and stories that were never sent.":"愿那些未能抵达的心事，在这里有一处安放之所。",
 "Every story has a place.":"每个故事，都值得有一处归所。",
 "The Story Archive":"故事收藏室",
 "Enter the Museum":"步入博物馆",
 "Enter the Museum ↗":"步入博物馆 ↗",
 "Explore all stories ↗":"翻阅全部故事 ↗",
 "The Historical Wing":"历史馆藏",
 "The Unsent Archive":"未寄之言藏馆",
 "A MUSEUM OF UNSPOKEN WORDS · Choices become stars; stories appear only when their authors choose to share.":"未寄之言博物馆 · 每一次抉择都化作星光，故事只在主人愿意时才被展出。",
 "THE RESEARCH LIBRARY · BEHIND THE SILENCE":"研究资料馆 · 沉默背后",
 "Why do we remain silent?":"那些话，为什么最终没有说出口？",
 "Historical evidence":"历史证据","Publication and privacy":"出版与隐私",
 "Withheld manuscript":"暂未公开的手稿","Anonymous publication":"匿名出版",
 "Hidden author":"隐去的作者","Undelivered letter":"未寄出的信",
 "Destroyed manuscript":"焚毁的手稿","Pseudonymous authorship":"笔名写作",
 "Anonymous novel":"匿名小说","Destroyed poetry":"焚毁的诗稿",
 "Shared pseudonym":"共同笔名","Delayed autobiography":"迟到的自传",
 "Qualified scientific claim":"被弱化的科学结论",
 "Reduced scientific publication":"减少公开的研究",
 "Withheld publication":"停止公开出版",
 "Edited diary":"经过删节的日记",
 "Requested destruction":"曾要求销毁的遗稿",
 "Protected author identity":"被保护的作者身份",
 "Initialed author name":"首字母署名",
 "Pseudonymous publication":"使用笔名出版",
 "Pseudonymous novel":"笔名小说",
 "Pseudonymous memoir":"笔名回忆录",
 "Restricted correspondence":"限制公开的通信",
 "Privately printed text":"私人印刷的作品",
 "Concealed literary authorship":"隐匿真实作者",
 "Long-form archival reading":"完整历史长篇",
 "Fifteen minute read":"约十五分钟阅读",
 "The Lookout ·":"星河瞭望台 ·",
 "Long-form archival reading":"完整的历史故事"
 });
 const sources={
 "Stanford Encyclopedia of Philosophy":"斯坦福哲学百科全书",
 "The Spinoza Web":"斯宾诺莎文献馆",
 "Library of Congress":"美国国会图书馆",
 "The Morgan Library & Museum":"摩根图书馆与博物馆",
 "Beethoven-Haus Bonn":"波恩贝多芬故居",
 "Cambridge University Press":"剑桥大学出版社",
 "University of Manchester Library":"曼彻斯特大学图书馆",
 "Gogol's House Memorial Museum":"果戈里纪念馆",
 "Orlando":"女性文学史资料库",
 "Irish Jesuit Archives":"爱尔兰耶稣会档案馆",
 "Oxford Academic":"牛津大学学术出版社",
 "British Library Archives":"英国国家图书馆档案",
 "National Endowment for the Humanities":"美国国家人文基金会",
 "British Library":"英国国家图书馆",
 "Harvard Plate Stacks":"哈佛天文台底片档案",
 "Bulgakov Museum":"布尔加科夫博物馆",
 "Brown University Library":"布朗大学图书馆",
 "National Willa Cather Center":"凯瑟纪念中心",
 "European Molecular Biology Laboratory":"欧洲分子生物学实验室",
 "Penguin Books":"企鹅图书",
 "C. S. Lewis official biography":"刘易斯官方资料",
 "Harry Ransom Center":"哈里·兰瑟姆研究中心",
 "Anaïs Nin Foundation":"阿娜伊丝·宁基金会",
 "University of Oregon Digital Exhibits":"俄勒冈大学数字展览",
 "New York Press":"《纽约新闻报》",
 "PEN America":"美国笔会",
 "Cornell Chronicle":"康奈尔大学校刊",
 "The Paris Review":"《巴黎评论》",
 "Robert Galbraith official author site":"加尔布雷思作者官方网站"
 };
 const names={
 "E. M. Forster":"爱德华·摩根·福斯特",
 "C. S. Lewis":"克莱夫·斯泰普尔斯·刘易斯",
 "J. D. Salinger":"杰罗姆·大卫·塞林格",
 "S. E. Hinton":"苏珊·埃洛伊丝·欣顿",
 "J. K. Rowling":"乔安妮·罗琳",
 "Ida B. Wells":"艾达·威尔斯"
 };
 Object.assign(zh,names);
 const swap=[
 ["PEN America","美国笔会"],["DNA X","脱氧核糖核酸的射线"],
 ["M. LeBlanc","勒布朗先生"],
 ["Currer Bell","柯勒·贝尔"],["Ellis Bell","埃利斯·贝尔"],
 ["Acton Bell","阿克顿·贝尔"],["By a Lady","一位女士所著"],
 ["George Eliot","乔治·艾略特"],["A. M. Barnard","巴纳德"],
 ["E. M.","爱德华·摩根·"],["C. S.","克莱夫·斯泰普尔斯·"],
 ["N. W.","恩·沃·"],["J. D.","杰罗姆·大卫·"],
 ["S. E.","苏珊·埃洛伊丝·"],["J. K.","乔安妮·"],
 ["B·","·"],["B",""]
 ];
 const fix=value=>{let v=String(value??'');for(const [a,b] of swap){if(a==="B")continue;v=v.split(a).join(b)}return v};
 for(const c of window.MUSEUM_NEW_CASES||[]) {
   const label=window.MUSEUM_HISTORY_LABELS?.[c.id];
   if(label)label.source=sources[c.sourceName]||c.sourceName;
   zh[c.name]=names[c.name]||c.cnName;
 }
 for(const [k,v] of Object.entries(window.MUSEUM_HISTORY_LABELS||{})){
   if(sources[v.source])v.source=sources[v.source];
 }
 for(const [id,r] of Object.entries(window.MUSEUM_HISTORY_ZH||{})){
   for(const [k,v] of Object.entries(r)){
     if(typeof v==="string")r[k]=fix(v);
     else if(Array.isArray(v))r[k]=v.map(x=>typeof x==="string"?fix(x):x);
   }
 }
 for(const [k,v] of Object.entries(zh))if(typeof v==="string")zh[k]=fix(v);

 const missingHistorical={
  "rosa-parks":["罗莎·帕克斯","蒙哥马利 · 1955年","公共巴士逮捕记录与民权运动资料","逮捕记录与司法档案","美国国家档案馆"],
  "claudette-colvin":["克劳黛特·科尔文","蒙哥马利 · 1955年","拒绝让座的逮捕记录与联邦诉讼材料","逮捕记录与司法档案","美国国家档案馆"],
  "janusz-korczak":["雅努什·科尔恰克","华沙 · 1942年","孤儿院资料与华沙隔离区历史文献","教育记录与战争档案","美国大屠杀纪念馆"],
  "etty-hillesum":["埃蒂·希勒瑟姆","阿姆斯特丹与韦斯特博克 · 1941—1943年","保存下来的日记与营地书信","手稿、日记与书信","希勒瑟姆纪念馆"],
  "ida-b-wells":["艾达·威尔斯","孟菲斯 · 1892年","反私刑报道、出版物与报馆遭袭记录","新闻报道与社会档案","芝加哥大学图书馆"],
  "rosalind-franklin":["罗莎琳德·富兰克林","伦敦 · 1952—1953年","第五十一号衍射照片与原始科研论文","实验图像与学术论文","伦敦国王学院"],
  "artemisia-gentileschi":["阿尔泰米西娅·真蒂莱斯基","罗马与佛罗伦萨 · 1612年及其后","庭审笔录与存世绘画","法庭材料与艺术作品","伦敦国家美术馆"],
  "elizabeth-keckley":["伊丽莎白·凯克利","华盛顿 · 1868年及其后","回忆录《幕后》与同时代出版记录","回忆录与社会评论","美国国会图书馆"],
  "mary-berg":["玛丽·伯格","华沙与纽约 · 1939—1945年","华沙隔离区日记及战后出版记录","日记与出版史料","波兰犹太人历史博物馆"]
 };
 const enNames={
 "rosa-parks":"Rosa Parks","claudette-colvin":"Claudette Colvin","janusz-korczak":"Janusz Korczak",
 "etty-hillesum":"Etty Hillesum","ida-b-wells":"Ida B. Wells","rosalind-franklin":"Rosalind Franklin",
 "artemisia-gentileschi":"Artemisia Gentileschi","elizabeth-keckley":"Elizabeth Keckley","mary-berg":"Mary Berg"
 };
 for(const [id,fields] of Object.entries(missingHistorical)){
   const [name,period,object,kind,source]=fields;
   zh[enNames[id]]=name;
   const label=window.MUSEUM_HISTORY_LABELS[id]||{};
   Object.assign(label,{period,object,kind,source,image:"与人物或事件相关的历史图像；请打开馆藏来源核查"});
   window.MUSEUM_HISTORY_LABELS[id]=label;
 }
 const well=window.MUSEUM_HISTORY_ZH?.["ida-b-wells"];
 if(well)for(const [k,v] of Object.entries(well)){
   if(typeof v==="string")well[k]=v.replaceAll("艾达·B·威尔斯","艾达·威尔斯");
   else if(Array.isArray(v))well[k]=v.map(x=>typeof x==="string"?x.replaceAll("艾达·B·威尔斯","艾达·威尔斯"):x);
 }
 zh["Scientific contributions and recognition"]="科学贡献与被忽略的署名";
 zh["Coerced courtroom testimony"]="受权力制约的法庭证词";
 zh["Preserved wartime testimony"]="保存下来的战时见证";

})();
