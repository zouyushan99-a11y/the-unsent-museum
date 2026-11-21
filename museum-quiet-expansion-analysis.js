/* Five case-specific inquiry panels: conditions of endurance, evidence limits and non-leading questions. */
(function(){
 const panels={
  "joseon-widowhood": {
    "enIntro": "The records document a penalty placed on descendants, not a uniform lack of desire among widows. The decision not to remarry could involve belief, personal preference, family obligations or anticipated sanctions. The reason for each individual woman cannot be read from a national code.",
    "zhIntro": "史料证明的是国家把再嫁的代价部分转移到了妇女的子孙身上，而不是所有寡妇都想再婚、只是没有勇气。信仰、家庭责任、经济条件和个人愿望，都可能影响决定。",
    "contextEn": "The legal shift occurred within Joseon state formation and the promotion of Neo-Confucian patrilineal family order. The 1485 examination restriction shaped elite households particularly strongly, while actual experiences differed across time and status.",
    "contextZh": "朝鲜王朝逐渐以理学伦理和父系家族制度组织社会。1485年的考试资格限制，使士族家庭尤其重视妇女守节；但不同阶层与年代的妇女，受到的约束并不相同。",
    "factors": [
      [
        "The examination penalty could fall on children",
        "再嫁的后果可能由孩子承担",
        "By barring descendants from official examinations, the state gave relatives material reasons to oppose a widow's remarriage.",
        "国家以子孙科举资格作为限制，使妇女的婚姻不再只是个人选择，也影响了家庭的政治前途。"
      ],
      [
        "Kinship reputation could become pressure",
        "亲属名誉带来的压力",
        "Praise for chaste widowhood and criticism of remarriage could influence a woman's standing within the family.",
        "当守节被称作家族的荣耀，再嫁也可能被视为损害亲属利益，社会评价便有了实际力量。"
      ],
      [
        "Belief and coercion were not mutually exclusive",
        "真诚信仰与制度压力可能并存",
        "A person may value family duty while being disadvantaged by the rules attached to it. The individual balance requires evidence.",
        "一位女性可能真诚重视家庭责任，同时受到某些规则的不公平限制。不能替所有人断言她们只有一种想法。"
      ],
      [
        "Education could increase awareness of consequences",
        "教育未必带来更大的决定权",
        "Knowledge of examinations could make the stakes clearer without creating legal autonomy.",
        "了解科举制度的人可能更清楚再嫁会影响什么，但知道后果不等于能够改变后果。"
      ],
      [
        "Status changed the force of the restriction",
        "阶层改变法律的实际代价",
        "An elite family preparing sons for office had different incentives from households with little access to examinations.",
        "士族家庭尤其重视儿孙入仕，其他家庭则未必面临相同的机会损失。"
      ]
    ],
    "questionsEn": [
      "When a decision about marriage affects a child's future, whose choice is it?",
      "Does praise for chastity leave room for a widow to disagree?",
      "What can official law tell us about people whose own writings did not survive?"
    ],
    "questionsZh": [
      "当一个女人的婚姻决定会影响孩子的前途，这究竟还是谁的选择？",
      "如果守寡被社会称为美德，一个女人是否仍有不守寡而不被指责的余地？",
      "国家法律能够告诉我们什么，又无法告诉我们那些没有留下自述的妇女什么？"
    ],
    "enBoundary": "Law codes and court debates cannot show that every unmarried widow wished to remarry.",
    "zhBoundary": "法律与官员争论不能证明每一个终身守寡的女性都想过再婚。"
  },
  "rural-china-footbinding": {
    "enIntro": "Many girls had their feet bound while still children. The question is less why they failed to protest a custom than how a household's ideas about marriage, labour and social belonging came to override a girl's own control of her body.",
    "zhIntro": "不少女孩在年幼时就被安排缠足，因此不能简单问她们为什么没有起来反抗。更需要理解的是，父母对于婚姻、劳动和体面的期待，怎样获得了决定一个孩子身体的权力。",
    "contextEn": "Late-Qing and Republican-era rural China varied greatly by region, ethnicity and labour system. Marriage expectations, home textile production and local community norms have all been investigated as explanatory factors. No single theory accounts for every village.",
    "contextZh": "清末民初的中国农村并不是一种统一的生活环境。不同地方的婚姻观念、家庭手工业与邻里习惯有很大差异；这些因素如何共同维持缠足，仍需要结合地方史料讨论。",
    "factors": [
      [
        "Parents held authority over children",
        "成年人能够替孩子决定",
        "Binding often began when girls lacked the authority and experience needed to reject an adult decision.",
        "许多女孩年幼时便被安排缠足，是否继续，通常不是由她独立决定。"
      ],
      [
        "Marriage prospects were socially evaluated",
        "婚姻前途受到地方评价影响",
        "Families might fear exclusion from local marriage arrangements even when binding did not actually guarantee better matches.",
        "即使缠足未必真的带来更好的婚事，家庭仍可能担心不缠足让女儿被当地婚姻市场排斥。"
      ],
      [
        "Household labour created economic incentives",
        "家庭劳动可能强化习俗",
        "Textile and handicraft work formed part of household survival; researchers debate how this affected binding.",
        "纺织与手工劳动关系到家庭生计，研究者正在讨论这些生产方式如何影响缠足的分布。"
      ],
      [
        "Pain was reframed as preparation",
        "疼痛可能被解释为为她好",
        "A custom thought to secure a daughter's future could be defended by relatives despite physical harm.",
        "当长辈相信缠足是为了女儿的将来，孩子遭受的痛苦便可能被解释成必须忍耐的过程。"
      ],
      [
        "Local changes were uneven",
        "习俗的消退并不同步",
        "Schooling, manufacturing and new marriage expectations changed conditions at different times across regions.",
        "学校、纺织工业与婚姻观念的变化并未同时发生，各地女孩因此拥有不同的选择空间。"
      ]
    ],
    "questionsEn": [
      "Who gets to decide what is done to a child's body in the name of her future?",
      "What happens when a parent fears the consequences of defying a harmful custom?",
      "Can a widespread practice survive even when the benefits expected from it rarely appear?"
    ],
    "questionsZh": [
      "当成年人说一项身体上的痛苦是为了孩子的未来，谁应拥有最终的决定权？",
      "如果父母相信拒绝习俗会损害女儿婚事，他们为什么可能继续做自己也知道会让孩子疼痛的事？",
      "一种习俗即使未必带来人们期待的好处，为什么仍可能长期延续？"
    ],
    "enBoundary": "Prevalence and motives varied widely. Reconstructed explanations are not first-person proof of every child's wishes.",
    "zhBoundary": "缠足的普遍程度与家庭动机因地区而异。对于没有留下证词的儿童，不能凭习俗推断内心是否认同。"
  },
  "colonial-java-cultivation": {
    "enIntro": "Java's forced cultivation was enforced through colonial taxation and local authority. Village households continued farming not necessarily because they approved, but because subsistence land, social relationships and official obligations were intertwined.",
    "zhIntro": "爪哇农民并不是因为普遍认同殖民制度才继续种植。土地、食粮、村庄管理和强制劳动被联系在一起，拒绝某项任务便可能影响整个家庭的生活。",
    "contextEn": "The Dutch colonial regime built export production through the Cultivation System after 1830. Local elites mediated quotas and obligations, and implementation differed among districts. The state extracted revenue while households retained subsistence needs.",
    "contextZh": "十九世纪三十年代开始，荷兰殖民政府通过强制种植制度组织出口作物生产，并依靠地方权力实施征收。不同地区负担有差异，但农民仍须在完成任务之外维持家庭的基本生计。",
    "factors": [
      [
        "Officials controlled the labour obligations",
        "征收要求由权力机构执行",
        "Refusal targeted an administrative order, not simply a voluntary commercial transaction.",
        "农民面对的不是可以自由拒绝的买卖，而是具有行政约束力的劳动任务。"
      ],
      [
        "Local intermediaries tied power to daily life",
        "地方管理者介入普通生活",
        "Village leaders could enforce demands while also managing land or local affairs.",
        "负责执行征收的人，也可能管理当地的土地与村庄事务，农民难以避开这些关系。"
      ],
      [
        "Food production competed with export quotas",
        "出口任务与家庭食粮争夺农时",
        "A household still needed to grow food while producing crops demanded by the state.",
        "即使承担出口作物种植，家庭仍然需要耕种粮食；耽误农时可能影响一整年的生活。"
      ],
      [
        "Community obligations could restrain refusal",
        "邻里关系也可能造成压力",
        "A household might anticipate criticism or redistributed duties if it refused a collective demand.",
        "一户人家拒绝任务，可能让邻居担心自己要承担更多负担。集体责任有时会反过来限制个人。"
      ],
      [
        "Access to appeal was unequal",
        "申诉渠道没有平等开放",
        "Understanding an order did not guarantee an accessible official capable of changing it.",
        "农民即使知道要求过重，也未必拥有能够使规定改变的正式渠道。"
      ]
    ],
    "questionsEn": [
      "Who can refuse when the official demanding labour also governs the village?",
      "How does export wealth coexist with household food insecurity?",
      "Does the absence of a petition prove anything about a farmer's consent?"
    ],
    "questionsZh": [
      "当要求强制劳动的人也管理村庄生活，农民还能向谁提出拒绝？",
      "殖民出口创造的财富，为什么可能与当地家庭的食粮困难同时存在？",
      "如果没有留下请愿书，我们能否由此认定农民接受了那些任务？"
    ],
    "enBoundary": "Colonial rules and economic effects were uneven. We cannot assign motives to unnamed farmers from production data alone.",
    "zhBoundary": "强制劳动在各地区的实施不一致；产量与征收记录不足以证明个别农民的内心选择。"
  },
  "black-sharecroppers-debt": {
    "enIntro": "After slavery ended, legal freedom and economic independence were not the same. For a sharecropping family that needed land, supplies and credit, a poor contract might still be the only way to cultivate the next crop.",
    "zhIntro": "奴隶制结束后，黑人家庭获得了法律自由，却未必拥有土地和资金。一份不公平的分成合同，仍可能是他们获得来年种子、食物和住处的唯一现实渠道。",
    "contextEn": "Southern landownership remained highly unequal after 1865. Sharecropping and crop-lien credit arrangements could create recurring debt, while racial intimidation and unequal public power affected the ability to challenge landlords or merchants.",
    "contextZh": "1865年以后，美国南部的土地分配仍然不平等。佃农依靠地主和商人赊购用品，债务可能逐年累积；种族歧视与地方权力差异，又使经济争议不容易得到公平处理。",
    "factors": [
      [
        "Land remained concentrated in other hands",
        "土地仍然掌握在别人手中",
        "Legal emancipation did not automatically provide a farm or capital for independent work.",
        "法律承认他们已经自由，却没有为每个家庭提供赖以独立生活的土地和资金。"
      ],
      [
        "Credit linked current survival to future crops",
        "赊欠把未来收成提前抵押",
        "Food and supplies were advanced on credit; poor harvests could leave debts that carried forward.",
        "眼前生活需要借款，未来收成又必须先偿还旧债，使家庭很难轻易离开原来的安排。"
      ],
      [
        "The merchant often kept the decisive accounts",
        "账本由拥有经济权力的一方掌握",
        "Those controlling valuations and records could have an advantage in disputes.",
        "商人或地主掌握估价与结算，农民即使认定账目有误，也未必有能力纠正。"
      ],
      [
        "Racial hierarchy shaped conflict",
        "经济争议受到种族权力影响",
        "Unequal legal and social protection could raise the risks of contesting a white landlord or creditor.",
        "当争议双方在当地司法和社会关系中处于不同地位，公开讨要公平的代价可能更高。"
      ],
      [
        "A family might choose the least dangerous option",
        "保护家人可能先于改变制度",
        "Moving requires resources; staying might protect immediate food and housing even with exploitative terms.",
        "搬走需要钱和安全的去处；留下即使仍然吃亏，也可能暂时保住一家人的食宿。"
      ]
    ],
    "questionsEn": [
      "How useful is the right to leave if debts and land access make leaving impossible?",
      "Who has the power to decide what a year's labour was worth?",
      "Can staying in a bad arrangement be evidence of survival rather than approval?"
    ],
    "questionsZh": [
      "如果离开必须先还清债务并找到土地，法律上的离开自由还有多少实际意义？",
      "一年的劳动究竟值多少钱，为什么往往由另一方掌握最后的解释权？",
      "继续留在不公平的安排中，是否可能只是为了让一家人暂时活下去？"
    ],
    "enBoundary": "Sharecropping gave some families more autonomy than wage labour, but also often produced debt; no farm represents all Black tenant families.",
    "zhBoundary": "分成耕种的自主程度和债务负担因家庭而异，不能以一份合同解释所有黑人农民的经历。"
  },
  "us-child-factory-workers": {
    "enIntro": "Children employed in American industries were not free adults who had simply declined to object. Their jobs were often chosen and managed by adults, while their wages could be important to family survival.",
    "zhIntro": "美国工业时代的童工并不是能够独立决定去留的成年人。工作常由家长和雇主安排，工资又可能用于维持整个家庭，因此拒绝工作不只是孩子个人的决定。",
    "contextEn": "Industrial expansion, uneven state labour laws and differing school requirements shaped child employment around 1900. Children's earnings, employer demand and adult control overlapped; conditions varied by region and occupation.",
    "contextZh": "十九世纪末至二十世纪初，美国工业发展迅速，但童工限制和义务教育在不同州实施不一。家长需要收入，雇主希望获得廉价劳动力，而孩子通常缺少决定自己劳动安排的权力。",
    "factors": [
      [
        "Children lacked adult decision-making power",
        "孩子缺少独立决定权",
        "Parents and employers often controlled attendance and working arrangements.",
        "家长和雇主拥有较大的决定权，孩子未必能够独自决定是否上工。"
      ],
      [
        "Family income depended on wages",
        "孩子工资可能支撑家庭生活",
        "Refusing a shift could mean less money for immediate food, rent or household needs.",
        "如果孩子不去工作，一家人便可能失去本来就不充裕的一部分生活费。"
      ],
      [
        "School rules and labour protections were uneven",
        "学校与劳动保护并不一致",
        "State laws differed and enforcement could be weak, limiting children's alternatives.",
        "所在州的制度不同，决定了一个孩子究竟有多少机会进入学校而不是工厂。"
      ],
      [
        "Obedience was presented as good conduct",
        "服从成年人被当作好孩子的表现",
        "Adult instructions at home and work were difficult for a child to challenge.",
        "孩子即使感到辛苦，也可能认为反对大人是不应该的事。"
      ],
      [
        "Work could be framed as family responsibility",
        "劳动被解释为为家里分担",
        "Children could value helping their families even where work harmed health or education.",
        "孩子可能真心想帮助家人，却未必有能力评估长期劳动给自己带来的损失。"
      ]
    ],
    "questionsEn": [
      "When children are expected to help support their families, who truly chooses their employment?",
      "Can a child understand injustice but lack anyone authorised to hear the complaint?",
      "What does schooling offer when a household cannot survive without the child's wages?"
    ],
    "questionsZh": [
      "当孩子挣的钱用于养家，让他去上工究竟是谁的决定？",
      "孩子即使知道自己被不公平对待，应该向谁提出反对才会有人认真听？",
      "如果一个家庭没有孩子的工资便无法维生，单纯要求孩子去上学能解决什么？"
    ],
    "enBoundary": "No census statistic or photograph can establish an individual child's unspoken preferences. Child labour conditions varied by industry and location.",
    "zhBoundary": "统计数字与照片不能代替儿童的个人自述，不同地区和行业的劳动条件也不完全相同。"
  }
};
 const current=window.MUSEUM_QUIET_ANALYSES||{};
 for(const [id,panel] of Object.entries(panels))current[id]=panel;
 window.MUSEUM_QUIET_ANALYSES=current;
})();