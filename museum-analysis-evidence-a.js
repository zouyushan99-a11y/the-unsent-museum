/* First 16 case-specific causal explanations, distinct from end-of-reading reflection questions. */
(function(){const cases={
  "rene-descartes": [
    "Descartes had prepared The World, but news of Galileo’s condemnation made the public presentation of heliocentric cosmology newly consequential. His correspondence records his decision not to publish it at that time. The relevant restraint was therefore not an inability to formulate the scientific claim, but the conflict between publication and the religious authorities whose judgment could affect its reception. His continued writing and later publications show that he withheld a particular work rather than abandoning inquiry altogether.",
    "笛卡尔已经准备好《世界》，但伽利略受审后，以日心说为基础的论述面临更明确的宗教审查风险。他在通信中提到暂停出版。真正发生的是特定著作的公开发行被推迟，而不是数学家不再思考或完全停止研究。"
  ],
  "baruch-spinoza": [
    "The Theological-Political Treatise appeared without its author’s name and with a deliberately misleading imprint. Its criticism of scriptural authority and defence of freedom of philosophical inquiry could expose both the writer and the printing network to religious and civil pressure. Concealing the publishing location and authorship reduced immediate exposure while allowing the argument to circulate. This was a decision about how to publish dangerous ideas, not a decision to remain silent about them.",
    "《神学政治论》使用匿名方式和不真实的出版信息，主要涉及当时宗教与政治权威对相关论述的限制。隐藏作者和印刷来源，使思想能够传播，同时减少作者与出版者被直接识别的风险。因此，他隐去的是身份和出版地点，而不是书中的观点。"
  ],
  "benjamin-franklin": [
    "Franklin's Silence Dogood letters were printed under an invented female identity while he was a young apprentice working in his brother's newspaper. His later autobiography describes slipping material under the printing-house door and concealing authorship. The disguise allowed the writing to be assessed independently of his age and subordinate place in the workshop. It also circumvented the ordinary hierarchy between apprentice and publisher. The surviving evidence supports a publishing tactic within a family business, not a claim that Franklin was permanently unable to speak.",
    "富兰克林年轻时在兄长的印刷所当学徒，以虚构的女性身份发表文章。后来自传记述他把稿件放在印刷所门下，隐瞒作者身份。这种做法使文章不必首先接受兄长对年轻学徒的评价，也绕过了当时的工作等级关系。他隐藏的是写作者身份，以便让文章获得刊登机会。"
  ],
  "thomas-paine": [
    "Common Sense was first published anonymously in 1776, when its case for independence was politically incendiary. Anonymity made it possible for the argument to circulate without requiring readers to receive it under Paine's personal name. The immediate circumstances included the risks of radical political publishing and the convention of unnamed pamphlet authorship. It is inaccurate to claim that Paine did not speak: the pamphlet was publicly distributed. What he initially withheld was attribution of authorship.",
    "《常识》在1776年最初以匿名方式出版，内容直接主张北美殖民地独立。在政治冲突日益激烈的背景下，不署名能够降低个人被立即识别的风险，也符合当时部分政治小册子的出版惯例。潘恩并没有隐去政治观点，而是暂时隐去了作者身份。"
  ],
  "frances-burney": [
    "Burney's first novel Evelina circulated without her public authorial identity. Archival discussion of the manuscript and disguised handwriting indicates that withholding identification involved practical steps, not merely an unrecorded feeling of embarrassment. A young woman entering the literary marketplace faced family expectations and judgments about respectable female authorship. Concealing the name allowed the work to be read before the author's identity became the subject of discussion. It does not prove that every relative opposed her writing.",
    "伯尼出版《伊芙琳娜》时没有公开作者身份，相关手稿材料还显示她采取过掩饰笔迹的措施。这与十八世纪女性从事小说创作时面临的家庭期待和社会评价有关。匿名使作品能够先进入阅读市场，而不是让年轻女性作者的身份成为讨论中心。但现存材料不能证明所有家人都反对她写作。"
  ],
  "ludwig-van-beethoven": [
    "The Heiligenstadt Testament was addressed to Beethoven's brothers and described his worsening hearing and the isolation it caused. It remained among his papers rather than becoming a delivered family letter. The manuscript itself establishes emotional distress and the circumstances he wished to explain. No surviving statement identifies a single final decision not to deliver it. An analysis can link the document to concealment of deafness, shame and strained communication, but it cannot legitimately turn those pressures into a fictional scene of Beethoven choosing silence.",
    "贝多芬在海利根施塔特遗书中向兄弟说明听力恶化及其造成的孤立，文稿最终保留在私人文件中。文本直接表明他承受的困扰，也涉及当时向他人公开听力问题的困难。但没有一份记录能确认他为什么最后没有交付这份文字，因此不能把羞耻、疾病或恐惧中的任何一项写成唯一原因。"
  ],
  "elizabeth-inchbald": [
    "Inchbald destroyed an autobiographical manuscript late in life. Later biographical testimony connects the decision with concern for the feelings or reputations of living people mentioned in the work. Her long career as an actress, dramatist and novelist gave her public experience, so the destruction cannot be explained by a simple fear of publishing as a woman. It concerned a particular autobiographical record and the claims other people might have on their representation within it. Because the manuscript no longer survives, its full contents and the relative weight of motives remain uncertain.",
    "英奇博尔德晚年销毁自传手稿。后来的传记材料提到，她顾虑作品中涉及的在世人物会受到影响。她已经有公开写作和演出的经历，销毁不能简单归因为女性不敢出版，而是与自传会暴露哪些私人关系有关。由于原稿已不存在，无法核实全部内容，也难以确定各项顾虑的重要程度。"
  ],
  "george-sand": [
    "Aurore Dupin published under the name George Sand in a literary economy that assigned different expectations to male and female writers. A masculine pen name helped create a recognisable authorial identity and reduced the pressure of judging a novel solely through its author's gender. The change did not erase the person behind the publications, and her later public career was extensive. Here the withheld information was part of the author's name and social identity at publication, not the substance of her writing.",
    "奥萝尔·迪潘以乔治·桑的名字出版作品，当时文学市场对男女作者有不同期待。男性化笔名使作品能够以新的作者身份进入阅读市场，降低女性身份对作品接受方式的直接影响。她后来仍然积极参与公共文学生活，所以不能把使用笔名解释为一生不敢公开表达。"
  ],
  "elizabeth-gaskell": [
    "Mary Barton first appeared anonymously in a period when unnamed novels were common and women writers could face particular scrutiny. Gaskell's book addressed industrial Manchester and working-class distress, subjects that might invite arguments about both politics and domestic respectability. Anonymity separated the immediate reception of the novel from a public judgment of its author and her family. Published evidence does not identify one exclusive personal fear; the practice should be understood within the conventions and social pressures of Victorian publishing.",
    "盖斯凯尔的《玛丽·巴顿》初版没有署名。维多利亚时代匿名小说并不少见，而一位女性以小说讨论曼彻斯特工业社会与工人处境，可能同时面对文学和家庭声誉的评价。匿名让作品先受到阅读与讨论，作者本人则暂时不进入公众判断。现存材料不足以把这个决定归结为一种单独的恐惧。"
  ],
  "nikolai-gogol": [
    "Gogol destroyed material associated with a later volume of Dead Souls during his final period of religious and artistic turmoil. Accounts by contemporaries and biographers associate the event with his increasingly severe views about the moral purpose of literature and the value of his own unfinished work. The act removed pages from future readers, but the exact contents of the destroyed version are no longer recoverable. It is consequently more accurate to discuss an unstable relationship between religious conviction, authorship and self-judgment than to assert a single command or motive.",
    "果戈里在生命晚期销毁与《死魂灵》后续部分有关的稿件。传记材料将此事与他越来越严苛的宗教追求、对作品道德意义的要求及对写作成果的不满联系起来。原稿已经不能完整复原，因此不能确定哪一个因素最终促成毁稿，也不能把复杂的创作危机写成一条单一命令。"
  ],
  "lewis-carroll": [
    "Charles Lutwidge Dodgson used Lewis Carroll for imaginative literature while continuing to publish mathematical and academic work under his own name. The separation reflected different professional settings and readerships. Archival evidence establishes the deliberate use of two signatures, allowing him to keep his Oxford and literary identities distinct. Nothing in that division requires the assumption that he was afraid to be a writer or secretly detested mathematics. The silence consisted of a managed connection between two public identities.",
    "道奇森以刘易斯·卡罗尔的名字发表文学作品，同时继续以本名从事数学与学术写作。两个名字分别面向不同读者和职业环境，使文学与牛津大学的学者身份保持距离。这是一种可从出版记录确认的身份管理，不等于他不敢承认自己写作，也不能据此推断他讨厌原来的职业。"
  ],
  "florence-nightingale": [
    "Nightingale wrote Cassandra within a broader discussion of women's frustrated education and domestic expectations, but the text circulated in limited publication settings before receiving wider readership much later. The form of distribution belonged to her position within religious, medical and reform networks, where private printing and selective circulation could carry argument to particular audiences. The record does not establish a simple refusal to speak publicly: she wrote extensively on policy and nursing. It establishes the distinct publication history of this one essay.",
    "南丁格尔写《卡珊德拉》时关注女性教育与家庭责任造成的限制，文本起初只在有限范围内流通。她同时通过护理改革、政策写作和私人印刷品积极参与公共事务，因此不能把小范围发行解释为她完全不敢谈女性问题。较明确的事实是这篇文章在不同时期经历了不同范围的传播。"
  ],
  "gerard-manley-hopkins": [
    "Hopkins's decision to destroy early poems was linked by later evidence to his entrance into Jesuit religious life and concern that poetry might distract from that vocation. The act reflected a concrete change in the organisation of his life: obedience, religious formation and the duties he anticipated as a priest. He later resumed writing poetry, demonstrating that the destruction was not an enduring rejection of artistic expression. The source record supports tension between vocation and composition, while details about every destroyed poem are unavailable.",
    "霍普金斯早期烧毁诗稿，与他进入耶稣会、担忧诗歌影响宗教使命有关。当时修会训练与服从要求改变了他的生活安排。此后他重新创作诗歌，说明毁稿不等于永久否定写作。现存资料能说明宗教使命与诗歌活动之间的矛盾，却无法复原被烧掉的作品。"
  ],
  "vernon-lee": [
    "Violet Paget adopted the name Vernon Lee for a public literary career. Historical discussion of her correspondence links the choice with expectations about women's intellectual authority and the reception of critical writing. The pseudonym placed a different identity at the threshold of a reader's encounter with the work. Her essays and books were not suppressed; indeed, she published extensively. The decision therefore concerns authorship and attribution rather than an absence of speech. Its significance lies in which identities were more readily accepted as authoritative.",
    "维奥莱特·佩吉特以弗农·李作为公开笔名，相关通信与研究将此选择联系到当时对女性评论家学术权威的评价。她并非不发表作品，而是选择让作品先以另一种名字获得阅读。笔名遮蔽的是作者的部分身份，而不是思想本身；她后来持续发表大量文学与评论作品。"
  ],
  "katharine-bradley": [
    "Katharine Bradley and Edith Cooper jointly used the name Michael Field for their poems and plays. The shared male signature created a single authorial figure for work produced by two women, and their correspondence shows the identity was maintained deliberately. It could help shape reception in a literary world that often categorised women authors differently. Yet the work also expressed an artistic partnership rather than merely a defensive disguise. The name withheld the full arrangement of authorship from some readers while allowing a collaborative body of work to circulate.",
    "凯瑟琳·布拉德利与伊迪丝·库珀共同使用迈克尔·菲尔德这一笔名发表诗歌和戏剧。男性化的单一署名使读者先看到一个作者形象，真实创作关系则不一定立即被了解。这个名字既可能影响作品在文学市场中的接受，也表达了两位作者主动经营的合作身份，不能只解释成害怕暴露性别。"
  ]
};for(const [id,v] of Object.entries(cases)){const d=window.MUSEUM_HISTORY_LONGFORM?.[id],zh=window.MUSEUM_HISTORY_ZH?.[id];if(!d||!zh)continue;d.analysis[2]=["What constrained the decision",v[0]];d.moment={...(d.moment||{}),why:v[0]};zh.cause=v[1];}})();