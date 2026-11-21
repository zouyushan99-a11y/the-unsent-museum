/* Final three historical cases: political succession and editorial control of personal records. */
(function(){const cases={
  "elizabeth-i": [
    "Elizabeth I repeatedly resisted pressure to identify a successor while unmarried and without children. Naming a particular heir could strengthen that person's political faction, weaken the reigning queen's bargaining position and turn debate over the future into a conflict over present authority. These consequences are grounded in the political circumstances of Tudor succession and diplomatic marriage negotiations. The silence was about a specific state decision with immediate effects, not a general inability to speak. No single surviving confession establishes a private motive sufficient to explain every occasion on which she avoided committing herself.",
    "伊丽莎白一世在没有子女继承王位的情况下，多次拒绝公开确定继承人。指定人选可能使其支持派系立即壮大，也可能削弱在位女王对朝臣及外国势力的政治影响力。这与都铎王朝的继位争议、婚姻外交和宫廷派系有关。她未明确宣布继承人属于特定政治决定，并非一般意义上的无法发声。"
  ],
  "queen-victoria": [
    "Queen Victoria wrote extensively in personal journals, but the surviving record was later shaped by her daughter Princess Beatrice, who copied and edited much of the material after her mother's death and destroyed many originals. Royal privacy, family reputation and the presentation of a reign influenced how diaries were treated as historical documents. Because the editions were produced by another person, the removal of passages cannot automatically be attributed to Victoria's own wish to withhold each specific detail. The central mechanism is posthumous editorial control over a private royal archive.",
    "维多利亚女王长期写日记，但她去世后，女儿比阿特丽斯公主重新抄录、删改了大量内容，部分原稿随后被销毁。王室隐私、家族声誉及统治历史的呈现方式都与这一编辑过程有关。因此，某段记录未能保存下来，不一定是女王本人作出的沉默选择，还涉及后人对档案的管理。"
  ],
  "thomas-hardy": [
    "Thomas Hardy's surviving papers reflect deliberate management of manuscripts, notebooks and personal correspondence, including documents that were destroyed or altered near the end of his life. His relationship with his first wife Emma, the making of his authorised biography and concern for how private events would appear to posterity are relevant to this documentary history. The existence of destroyed materials is recorded, but their complete contents are not recoverable. The strongest explanation is control over personal evidence and future biography, rather than a single proven fear attached to each absent page.",
    "哈代晚年对手稿、笔记及私人信件的保存作出过选择，部分文件遭到销毁或整理。这与他和第一任妻子艾玛的复杂关系、授权传记的撰写，以及私人生活如何被后人记述有关。史料能够证明一些材料被删除或损毁，却无法复原所有内容，因此不能把每一页消失的原因都归结为同一种恐惧。"
  ]
};for(const [id,v] of Object.entries(cases)){const d=window.MUSEUM_HISTORY_LONGFORM?.[id],zh=window.MUSEUM_HISTORY_ZH?.[id];if(!d||!zh)continue;d.analysis[2]=["Specific historical pressure and evidence",v[0]];d.moment={...(d.moment||{}),why:v[0]};zh.cause=v[1];}})();