/* Curator-authored trilingual music note, maintained independently of existing exhibits. */
(() => {
  'use strict';
  const texts = {
  "en": {
    "kicker": "THE SOUND OF THE UNSAID",
    "title": "Underneath",
    "lead": "A song about what we carry in silence.",
    "paragraphs": [
      "I originally hoped to use Coldplay’s “❤️ (Human Heart)” as the soundtrack for this museum. Its quiet, close harmonies felt right for a place about things left unsaid. But the song is copyrighted, and I am still seeking permission to use it. For now, the music in this museum is “Underneath,” a song I developed with ChatGPT and created using Suno.",
      "I began with one thought: silence is part of who we are. As we grow up, we learn when to speak and when to hold things back. Our families, schools, friendships, and the wider world shape that ability. Sometimes silence is considerate or necessary; sometimes it comes from fear, embarrassment, or the wish to avoid conflict. I do not think silence is always good or always bad. We spend so much of our lives observing, hesitating, and keeping things to ourselves. That is one reason I believe silence deserves to be studied.",
      "This song is not only about why we fall silent, but also about what remains inside that silence. I wanted to write down thoughts we might never say to family, friends, someone we love, or even ourselves: jealousy, shame, disagreement, loneliness, the need for help, and love we struggle to express. I imagined those words spoken by different voices, one after another, with gentle harmonies bringing them together. I hope listeners will recognize something of their own lives in those voices, even if it is only one sentence they have never dared to say.",
      "Most of the creative ideas came from me: the meaning of the song, its confessional structure, the different voices, its harmonies, and the quiet atmosphere I wanted it to have. ChatGPT helped me understand, organize, summarize, and refine these ideas as we worked on the lyrics and music instructions. We revised them together, then used Suno to generate the recording. “Underneath” is another way for me to explore the museum’s central question: what are we keeping beneath the surface when we say nothing?"
    ],
    "link": "Listen to Underneath on Suno"
  },
  "zh-Hans": {
    "kicker": "沉默里的声音",
    "title": "Underneath · 沉默之下",
    "lead": "写给那些没有说出口、却始终存在的话。",
    "paragraphs": [
      "最初，我想用 Coldplay 的《❤️ (Human Heart)》作为这座博物馆的背景音乐。那首歌安静、贴近人声的和声，让我觉得它很适合一个收藏未曾说出口的话语的地方。但由于版权问题，我还在申请相关使用许可，所以目前馆内播放的是我与 ChatGPT 共同创作歌词、并借助 Suno 生成的《Underneath》。",
      "创作这首歌，源于我对沉默的一种理解：沉默也是我们的一部分。随着成长，我们逐渐学会什么时候该说话，什么时候该把话留在心里。家庭、学校、朋友以及更广阔的社会环境，都在塑造这种能力。有时沉默是一种体贴或必要的克制，有时则来自恐惧、难堪，或避免冲突的愿望。我不觉得沉默一定是好事，也不觉得它一定意味着软弱。我们人生里有那么多时间在旁观、犹豫、忍耐，或者把已经到了嘴边的话收回去。正因如此，我觉得沉默是一件很值得研究的事情。",
      "我写这首歌，不只是想讨论人们为什么沉默，更想把沉默里究竟藏着什么写出来。我把一些我们可能不会对家人、朋友、喜欢的人，甚至自己说出口的想法放进歌词：嫉妒、羞愧、不认同、孤独、想要求助，以及那些难以表达的爱。我希望这些话由不同的人声依次说出，再被轻轻的和声连接起来。也许听歌的人会在其中认出自己的某一种感受，哪怕只有一句话，让你觉得：原来我也这样想过。",
      "这首歌的大部分创意都来自我，包括它想表达的意义、不同人声轮流倾诉的方式、和声的想法，以及我希望它拥有的安静氛围。ChatGPT 主要帮助我理解、整理、概括和打磨这些想法，并与我一起反复修改歌词和音乐描述。最后，我们借助 Suno 生成了现在的录音。对我来说，《Underneath》也是这座博物馆的另一种表达：当我们什么都不说的时候，心里究竟还藏着多少话？"
    ],
    "link": "在 Suno 收听 Underneath"
  },
  "zh-Hant": {
    "kicker": "沉默裡的聲音",
    "title": "Underneath · 沉默之下",
    "lead": "寫給那些沒有說出口、卻始終存在的話。",
    "paragraphs": [
      "最初，我想用 Coldplay 的《❤️ (Human Heart)》作為這座博物館的背景音樂。那首歌安靜、貼近人聲的和聲，讓我覺得它很適合一個收藏未曾說出口的話語的地方。但由於版權問題，我還在申請相關使用許可，所以目前館內播放的是我與 ChatGPT 共同創作歌詞、並借助 Suno 生成的《Underneath》。",
      "創作這首歌，源於我對沉默的一種理解：沉默也是我們的一部分。隨著成長，我們逐漸學會甚麼時候該說話，甚麼時候該把話留在心裡。家庭、學校、朋友以及更廣闊的社會環境，都在塑造這種能力。有時沉默是一種體貼或必要的克制，有時則來自恐懼、難堪，或避免衝突的願望。我不覺得沉默一定是好事，也不覺得它一定意味著軟弱。我們人生裡有那麼多時間在旁觀、猶豫、忍耐，或者把已經到了嘴邊的話收回去。正因如此，我覺得沉默是一件很值得研究的事情。",
      "我寫這首歌，不只是想討論人們為甚麼沉默，更想把沉默裡究竟藏著甚麼寫出來。我把一些我們可能不會對家人、朋友、喜歡的人，甚至自己說出口的想法放進歌詞：嫉妒、羞愧、不認同、孤獨、想要求助，以及那些難以表達的愛。我希望這些話由不同的人聲依次說出，再被輕輕的和聲連接起來。也許聽歌的人會在其中認出自己的某一種感受，哪怕只有一句話，讓你覺得：原來我也這樣想過。",
      "這首歌的大部分創意都來自我，包括它想表達的意義、不同人聲輪流傾訴的方式、和聲的想法，以及我希望它擁有的安靜氛圍。ChatGPT 主要幫助我理解、整理、概括和打磨這些想法，並與我一起反覆修改歌詞和音樂描述。最後，我們借助 Suno 生成了現在的錄音。對我來說，《Underneath》也是這座博物館的另一種表達：當我們甚麼都不說的時候，心裡究竟還藏著多少話？"
    ],
    "link": "在 Suno 收聽 Underneath"
  }
};
  const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.museumMusicStatement = function () {
    const lang = window.museumLangPublic?.() || 'en';
    const v = texts[lang] || texts.en;
    const e = escapeHtml;
    return '<section class="museum-soundtrack" aria-labelledby="museum-soundtrack-title"><div class="museum-soundtrack-frame">' +
      '<header class="museum-soundtrack-head"><div class="museum-soundtrack-ornament" aria-hidden="true">♫ &nbsp; ✦ &nbsp; ♫</div>' +
      '<div class="eyebrow">' + e(v.kicker) + '</div><h2 id="museum-soundtrack-title">' + e(v.title) + '</h2>' +
      '<p class="museum-soundtrack-lead">' + e(v.lead) + '</p></header>' +
      '<div class="museum-soundtrack-body">' + v.paragraphs.map(p => '<p>' + e(p) + '</p>').join('') + '</div>' +
      '<div class="museum-soundtrack-foot"><a href="https://suno.com/song/f2512b38-495a-4288-92f0-78acc6a752f5" target="_blank" rel="noopener noreferrer">' + e(v.link) + ' ↗</a></div>' +
      '</div></section>';
  };
})();
