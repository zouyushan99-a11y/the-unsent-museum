/* The Unsent Museum: a single persistent MP3 player.
   Mount its control immediately outside #app, so SPA navigation and asynchronous
   network checks cannot remove or delay the music icon. */
(() => {
  'use strict';
  const AUDIO_URL = new URL('Underneath.mp3', document.baseURI).href;
  const SONG_URL = 'https://suno.com/song/f2512b38-495a-4288-92f0-78acc6a752f5';
  const labels = {
    en: {music:'Music', play:'Play Underneath', pause:'Pause Underneath',
      expand:'Music settings', close:'Close music settings', title:'Underneath',
      subtitle:'Original museum soundtrack', eyebrow:'THE SOUND OF THE UNSAID',
      loop:'Single-track repeat is on · No other songs will play',
      volume:'Volume', progress:'Song position', problem:'The audio could not be played. Please try again.',
      source:'Original song on Suno'},
    'zh-Hans': {music:'音乐', play:'播放《Underneath》', pause:'暂停《Underneath》',
      expand:'音乐设置', close:'关闭音乐设置', title:'Underneath · 沉默之下',
      subtitle:'博物馆原创配乐', eyebrow:'沉默里的声音',
      loop:'已开启单曲循环 · 不会播放其他歌曲',
      volume:'音量', progress:'歌曲进度', problem:'音乐暂时无法播放，请稍后再试。',
      source:'在 Suno 查看原曲'},
    'zh-Hant': {music:'音樂', play:'播放《Underneath》', pause:'暫停《Underneath》',
      expand:'音樂設定', close:'關閉音樂設定', title:'Underneath · 沉默之下',
      subtitle:'博物館原創配樂', eyebrow:'沉默裡的聲音',
      loop:'已開啟單曲循環 · 不會播放其他歌曲',
      volume:'音量', progress:'歌曲進度', problem:'音樂暫時無法播放，請稍後再試。',
      source:'在 Suno 查看原曲'}
  };
  const lang = () => labels[document.documentElement.lang] || labels.en;
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const timestamp = seconds => {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const n = Math.floor(seconds);
    return Math.floor(n / 60) + ':' + String(n % 60).padStart(2, '0');
  };
  function mountWhenReady() {
    // Underneath.mp3 is hosted in this repository. Do not delay the floating
    // button behind a HEAD request: transient failures made the icon unreliable.
    if (document.getElementById('museum-native-audio')) return;
    const existing = document.getElementById('museum-music-dock');
    const dock = el('aside', 'museum-music-dock museum-native-dock');
    dock.id = 'museum-music-dock';
    const audio = document.createElement('audio');
    audio.id = 'museum-native-audio';
    audio.src = AUDIO_URL;
    audio.loop = true;             // The only track is Underneath.
    audio.preload = 'metadata';     // Avoid downloading the full file before listening.
    audio.volume = 0.75;
    audio.setAttribute('playsinline', '');
    audio.hidden = true;

    const bar = el('div', 'museum-native-bar');
    const play = el('button', 'museum-music-toggle museum-native-toggle');
    play.type = 'button';
    const symbol = el('span', 'museum-music-note', '♫');
    symbol.setAttribute('aria-hidden', 'true');
    const playLabel = el('span', 'museum-music-toggle-text');
    play.append(symbol, playLabel);
    const more = el('button', 'museum-native-expand', '⋯');
    more.type = 'button';
    more.setAttribute('aria-controls', 'museum-music-panel');
    more.setAttribute('aria-expanded', 'false');
    bar.append(play, more);

    const panel = el('section', 'museum-music-panel museum-native-panel is-collapsed');
    panel.id = 'museum-music-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.inert = true;
    const head = el('div', 'museum-music-head');
    const info = el('div', 'museum-music-info');
    const eyebrow = el('span', 'museum-music-eyebrow');
    const title = el('strong', 'museum-music-title');
    const subtitle = el('span', 'museum-music-subtitle');
    info.append(eyebrow, title, subtitle);
    const close = el('button', 'museum-music-close', '×');
    close.type = 'button';
    head.append(info, close);

    const body = el('div', 'museum-native-controls');
    const progress = el('input', 'museum-native-progress');
    progress.type = 'range';
    progress.min = '0';
    progress.max = '1000';
    progress.step = '1';
    progress.value = '0';
    const time = el('div', 'museum-native-times');
    const current = el('span', null, '0:00');
    const duration = el('span', null, '0:00');
    time.append(current, duration);
    const row = el('div', 'museum-native-volume-row');
    const volumeLabel = el('label', null);
    volumeLabel.htmlFor = 'museum-native-volume';
    const volume = el('input', 'museum-native-volume');
    volume.id = 'museum-native-volume';
    volume.type = 'range';
    volume.min = '0';
    volume.max = '100';
    volume.value = '75';
    volume.step = '1';
    row.append(volumeLabel, volume);
    body.append(progress, time, row);
    const hint = el('p', 'museum-music-note-text museum-native-hint');
    const error = el('p', 'museum-native-error');
    error.setAttribute('role', 'status');
    const link = el('a', 'museum-music-link');
    link.href = SONG_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    panel.append(head, body, hint, error, link);
    dock.append(audio, bar, panel);
    // Replace any legacy dock in a single DOM operation; never leave a gap.
    // Crucially, this player sits in document.body, outside the re-rendered #app.
    if (existing) existing.replaceWith(dock);
    else document.body.append(dock);

    function sync() {
      const t = lang(), playing = !audio.paused && !audio.ended;
      symbol.textContent = playing ? 'Ⅱ' : '♫';
      playLabel.textContent = t.music;
      play.setAttribute('aria-label', playing ? t.pause : t.play);
      play.setAttribute('aria-pressed', playing ? 'true' : 'false');
      play.classList.toggle('is-playing', playing);
      more.setAttribute('aria-label', t.expand);
      eyebrow.textContent = t.eyebrow;
      title.textContent = t.title;
      subtitle.textContent = t.subtitle;
      close.setAttribute('aria-label', t.close);
      hint.textContent = t.loop;
      error.textContent = error.dataset.failed === 'true' ? t.problem : '';
      volumeLabel.textContent = t.volume;
      progress.setAttribute('aria-label', t.progress);
      volume.setAttribute('aria-label', t.volume);
      link.textContent = t.source + ' ↗';
      current.textContent = timestamp(audio.currentTime);
      duration.textContent = timestamp(audio.duration);
      if (Number.isFinite(audio.duration) && audio.duration > 0)
        progress.value = String(Math.round((audio.currentTime / audio.duration) * 1000));
    }
    function setPanel(open) {
      panel.classList.toggle('is-collapsed', !open);
      panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      panel.inert = !open;
      more.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    async function toggle() {
      if (audio.paused) {
        try {
          error.dataset.failed = 'false';
          await audio.play(); // Must run directly from the click gesture on mobile.
        } catch (_) {
          error.dataset.failed = 'true';
          setPanel(true);
        }
      } else audio.pause();
      sync();
    }
    play.addEventListener('click', toggle);
    more.addEventListener('click', () => setPanel(panel.classList.contains('is-collapsed')));
    close.addEventListener('click', () => { setPanel(false); more.focus(); });
    progress.addEventListener('input', () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0)
        audio.currentTime = (Number(progress.value) / 1000) * audio.duration;
      sync();
    });
    volume.addEventListener('input', () => { audio.volume = Number(volume.value) / 100; });
    for (const event of ['play', 'pause', 'timeupdate', 'loadedmetadata', 'durationchange', 'ended'])
      audio.addEventListener(event, sync);
    audio.addEventListener('error', () => {
      error.dataset.failed = 'true';
      setPanel(true);
      sync();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !panel.classList.contains('is-collapsed')) {
        setPanel(false);
        more.focus();
      }
    });
    new MutationObserver(sync).observe(document.documentElement, {
      attributes: true, attributeFilter: ['lang']
    });
    sync();
  }
  // The script is loaded immediately after <body>; mount before the museum's
  // many deferred archive scripts finish, instead of waiting for DOMContentLoaded.
  if (document.body) mountWhenReady();
  else document.addEventListener('DOMContentLoaded', mountWhenReady, { once: true });
})();
