/* Optional museum soundtrack. Uses Suno's own page/player: no audio is extracted or stored. */
(() => {
  'use strict';
  const SHARE_URL = 'https://suno.com/s/q8Smy0l3GVtSERsU';
  // Suno-hosted embed, derived from the published song's canonical ID.
  // Playback and repeat behavior are controlled by Suno's player.
  const EMBED_URL = 'https://suno.com/embed/f2512b38-495a-4288-92f0-78acc6a752f5';
  const labels = {
    en: {
      toggle: 'Music', title: 'Underneath', subtitle: 'Original museum soundtrack',
      close: 'Close music player', open: 'Listen on Suno',
      note: 'Press play inside the Suno player. If the player is unavailable here, open the song on Suno.',
      panel: 'Optional background soundtrack'
    },
    'zh-Hans': {
      toggle: '音乐', title: '沉默之下', subtitle: '博物馆原创配乐',
      close: '关闭音乐播放器', open: '在 Suno 收听',
      note: '请在 Suno 播放器内点击播放。若播放器无法显示，可前往 Suno 收听。',
      panel: '可选背景音乐'
    },
    'zh-Hant': {
      toggle: '音樂', title: '沉默之下', subtitle: '博物館原創配樂',
      close: '關閉音樂播放器', open: '在 Suno 收聽',
      note: '請在 Suno 播放器內點擊播放。若播放器無法顯示，可前往 Suno 收聽。',
      panel: '可選背景音樂'
    }
  };
  const getLanguage = () => {
    const lang = document.documentElement.lang;
    return Object.prototype.hasOwnProperty.call(labels, lang) ? lang : 'en';
  };
  function mount() {
    if (document.getElementById('museum-music-dock')) return;
    const dock = document.createElement('aside');
    dock.id = 'museum-music-dock';
    dock.className = 'museum-music-dock';
    const button = document.createElement('button');
    button.className = 'museum-music-toggle';
    button.type = 'button';
    button.setAttribute('aria-controls', 'museum-music-panel');
    button.setAttribute('aria-expanded', 'false');
    const icon = document.createElement('span');
    icon.className = 'museum-music-note';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '♫';
    const buttonText = document.createElement('span');
    buttonText.className = 'museum-music-toggle-text';
    button.append(icon, buttonText);

    const panel = document.createElement('section');
    panel.id = 'museum-music-panel';
    panel.className = 'museum-music-panel';
    panel.hidden = true;
    const head = document.createElement('div');
    head.className = 'museum-music-head';
    const info = document.createElement('div');
    info.className = 'museum-music-info';
    const eyebrow = document.createElement('span');
    eyebrow.className = 'museum-music-eyebrow';
    const title = document.createElement('strong');
    title.className = 'museum-music-title';
    const subtitle = document.createElement('span');
    subtitle.className = 'museum-music-subtitle';
    info.append(eyebrow, title, subtitle);
    const close = document.createElement('button');
    close.className = 'museum-music-close';
    close.type = 'button';
    close.textContent = '×';
    head.append(info, close);
    const frame = document.createElement('iframe');
    frame.className = 'museum-music-iframe';
    frame.title = 'Underneath — Suno';
    frame.setAttribute('allow', 'autoplay; encrypted-media');
    frame.setAttribute('loading', 'lazy');
    frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    const note = document.createElement('p');
    note.className = 'museum-music-note-text';
    const link = document.createElement('a');
    link.className = 'museum-music-link';
    link.href = SHARE_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    panel.append(head, frame, note, link);
    dock.append(button, panel);
    document.body.append(dock);
    function translate() {
      const t = labels[getLanguage()];
      buttonText.textContent = t.toggle;
      eyebrow.textContent = t.panel;
      title.textContent = t.title;
      subtitle.textContent = t.subtitle;
      close.setAttribute('aria-label', t.close);
      note.textContent = t.note;
      link.textContent = t.open + ' ↗';
      button.setAttribute('aria-label', t.toggle);
    }
    function setOpen(open) {
      panel.hidden = !open;
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        if (!frame.getAttribute('src')) frame.src = EMBED_URL;
      } else {
        // An explicit close stops the third-party player, avoiding surprise playback.
        frame.removeAttribute('src');
      }
    }
    button.addEventListener('click', () => setOpen(panel.hidden));
    close.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !panel.hidden) { setOpen(false); button.focus(); }
    });
    new MutationObserver(translate).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    translate();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
})();
