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
      close: 'Close music player', open: 'Listen on Suno', reset: 'Return to Underneath',
      note: 'Suno may play other songs after this one. To stay with Underneath, enable Repeat One (↻) in the Suno player if that control is available. The museum cannot change Suno’s autoplay setting.',
      panel: 'Optional background soundtrack'
    },
    'zh-Hans': {
      toggle: '音乐', title: '沉默之下', subtitle: '博物馆原创配乐',
      close: '关闭音乐播放器', open: '在 Suno 收听', reset: '重新打开 Underneath',
      note: 'Suno 可能在本曲结束后自动播放其他歌曲。如果播放器提供单曲循环（↻）选项，请先开启。本馆无法直接控制 Suno 的自动连播设置。',
      panel: '可选背景音乐'
    },
    'zh-Hant': {
      toggle: '音樂', title: '沉默之下', subtitle: '博物館原創配樂',
      close: '關閉音樂播放器', open: '在 Suno 收聽', reset: '重新開啟 Underneath',
      note: 'Suno 可能在本曲結束後自動播放其他歌曲。如果播放器提供單曲循環（↻）選項，請先開啟。本館無法直接控制 Suno 的自動連播設定。',
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
    // Keep the Suno iframe mounted even when its controls are tucked away.
    panel.classList.add('is-collapsed');
    panel.setAttribute('aria-hidden', 'true');
    panel.inert = true;
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
    const reset = document.createElement('button');
    reset.className = 'museum-music-reset';
    reset.type = 'button';
    link.href = SHARE_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    panel.append(head, frame, note, reset, link);
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
      reset.textContent = '↻ ' + t.reset;
      link.textContent = t.open + ' ↗';
      button.setAttribute('aria-label', t.toggle);
    }
    function setOpen(open) {
      panel.classList.toggle('is-collapsed', !open);
      panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      panel.inert = !open;
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      // Only load once after the visitor chooses to open the player.
      // Closing the panel never resets the iframe or interrupts playback.
      if (open && !frame.getAttribute('src')) frame.src = EMBED_URL;
    }
    button.addEventListener('click', () => setOpen(panel.classList.contains('is-collapsed')));
    reset.addEventListener('click', () => {
      // Only a visitor action can restart the embedded player; Suno controls
      // what happens once the iframe begins playing, including its next track.
      frame.src = EMBED_URL;
      setOpen(true);
    });
    close.addEventListener('click', () => { setOpen(false); button.focus(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !panel.classList.contains('is-collapsed')) { setOpen(false); button.focus(); }
    });
    new MutationObserver(translate).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    translate();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
})();
