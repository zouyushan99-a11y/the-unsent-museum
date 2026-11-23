/* The Unsent Museum: a single persistent MP3 player.
   Mount its control immediately outside #app, so SPA navigation and asynchronous
   network checks cannot remove or delay the music icon. */
(() => {
  'use strict';
  const AUDIO_URL = new URL('Underneath.mp3', document.baseURI).href;
  // Same original MP3 bytes, served via a second route if the main route stalls.
  // Pin to a commit so CDN cache always contains the same recording.
  const BACKUP_AUDIO_URL = 'https://cdn.jsdelivr.net/gh/zouyushan99-a11y/the-unsent-museum@7b3ddce6a650f8c2c83609f09d005b1208c00dd1/Underneath.mp3';
  const SONG_URL = 'https://suno.com/song/f2512b38-495a-4288-92f0-78acc6a752f5';
  const labels = {
    en: {music:'Music', play:'Play Underneath', pause:'Pause Underneath',
      expand:'Music settings', close:'Close music settings', title:'Underneath',
      subtitle:'Original museum soundtrack', eyebrow:'THE SOUND OF THE UNSAID',
      loop:'Single-track repeat is on · No other songs will play',
      volume:'Volume', progress:'Song position', loading:'Loading audio…', problem:'The audio could not be played. Please try again.',
      line:'Audio route', main:'Main', backup:'Backup CDN', switchHint:'Still buffering? Try the backup route.', source:'Original song on Suno'},
    'zh-Hans': {music:'音乐', play:'播放《Underneath》', pause:'暂停《Underneath》',
      expand:'音乐设置', close:'关闭音乐设置', title:'Underneath · 沉默之下',
      subtitle:'博物馆原创配乐', eyebrow:'沉默里的声音',
      loop:'已开启单曲循环 · 不会播放其他歌曲',
      volume:'音量', progress:'歌曲进度', loading:'正在缓冲音乐…', problem:'音乐暂时无法播放，请稍后再试。',
      line:'音乐线路', main:'主线路', backup:'备用 CDN', switchHint:'如果缓冲太久，可以尝试备用线路。', source:'在 Suno 查看原曲'},
    'zh-Hant': {music:'音樂', play:'播放《Underneath》', pause:'暫停《Underneath》',
      expand:'音樂設定', close:'關閉音樂設定', title:'Underneath · 沉默之下',
      subtitle:'博物館原創配樂', eyebrow:'沉默裡的聲音',
      loop:'已開啟單曲循環 · 不會播放其他歌曲',
      volume:'音量', progress:'歌曲進度', loading:'正在緩衝音樂…', problem:'音樂暫時無法播放，請稍後再試。',
      line:'音樂線路', main:'主線路', backup:'備用 CDN', switchHint:'如果緩衝太久，可以嘗試備用線路。', source:'在 Suno 查看原曲'}
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
    audio.preload = 'none';         // Never compete with initial page assets by default.
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
    const routeRow = el('div', 'museum-native-route-row');
    const routeTitle = el('span', 'museum-native-route-label');
    const mainRoute = el('button', 'museum-native-route is-active');
    const backupRoute = el('button', 'museum-native-route');
    mainRoute.type = backupRoute.type = 'button';
    routeRow.append(routeTitle, mainRoute, backupRoute);
    body.append(routeRow);
    const hint = el('p', 'museum-music-note-text museum-native-hint');
    const status = el('p', 'museum-native-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    const error = el('p', 'museum-native-error');
    error.setAttribute('role', 'status');
    const link = el('a', 'museum-music-link');
    link.href = SONG_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    panel.append(head, body, hint, status, error, link);
    dock.append(audio, bar, panel);
    // Replace any legacy dock in a single DOM operation; never leave a gap.
    // Crucially, this player sits in document.body, outside the re-rendered #app.
    if (existing) existing.replaceWith(dock);
    else document.body.append(dock);

    let buffering = false;
    let selectedRoute = 'main';
    let stallTimer = null;
    let suggestedFallback = false;
    function clearStallTimer() {
      if (stallTimer !== null) { clearTimeout(stallTimer); stallTimer = null; }
    }
    function watchBuffering() {
      clearStallTimer();
      if (!buffering || selectedRoute !== 'main') return;
      stallTimer = setTimeout(() => {
        // Never silently redirect or restart audio: the visitor decides.
        if (buffering && selectedRoute === 'main') {
          suggestedFallback = true;
          setPanel(true);
          sync();
        }
      }, 8500);
    }
    function sync() {
      const t = lang(), playing = !audio.paused && !audio.ended;
      symbol.textContent = playing ? 'Ⅱ' : '♫';
      status.textContent = suggestedFallback && buffering ? t.switchHint : (buffering ? t.loading : '');
      routeTitle.textContent = t.line;
      mainRoute.textContent = t.main;
      backupRoute.textContent = t.backup;
      mainRoute.classList.toggle('is-active', selectedRoute === 'main');
      backupRoute.classList.toggle('is-active', selectedRoute === 'backup');
      mainRoute.setAttribute('aria-pressed', selectedRoute === 'main' ? 'true' : 'false');
      backupRoute.setAttribute('aria-pressed', selectedRoute === 'backup' ? 'true' : 'false');
      play.classList.toggle('is-buffering', buffering);
      play.setAttribute('aria-busy', buffering ? 'true' : 'false');
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
    // Begin preparing audio only when the user signals listening intent.
    // This can save a round trip before the eventual click without forcing every
    // visitor on mobile data to download the entire soundtrack.
    function prepareAudio() {
      if (audio.preload === 'none' && audio.networkState !== HTMLMediaElement.NETWORK_LOADING) {
        audio.preload = 'auto';
        audio.load();
      }
    }
    play.addEventListener('pointerenter', prepareAudio, { once: true });
    play.addEventListener('focus', prepareAudio, { once: true });
    function chooseRoute(nextRoute) {
      if (nextRoute === selectedRoute) return;
      // Called directly from a click, preserving mobile playback permission.
      const wasPlaying = !audio.paused || buffering;
      const position = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
      audio.pause();
      selectedRoute = nextRoute;
      suggestedFallback = false;
      clearStallTimer();
      buffering = wasPlaying;
      error.dataset.failed = 'false';
      audio.src = nextRoute === 'backup' ? BACKUP_AUDIO_URL : AUDIO_URL;
      audio.preload = 'auto';
      if (position > 0) audio.addEventListener('loadedmetadata', () => {
        if (Number.isFinite(audio.duration) && position < audio.duration) audio.currentTime = position;
      }, { once:true });
      if (wasPlaying) {
        watchBuffering();
        audio.play().catch(() => { buffering = false; clearStallTimer(); error.dataset.failed = 'true'; setPanel(true); sync(); });
      } else audio.load();
      sync();
    }
    mainRoute.addEventListener('click', () => chooseRoute('main'));
    backupRoute.addEventListener('click', () => chooseRoute('backup'));
    async function toggle() {
      if (audio.paused) {
        try {
          error.dataset.failed = 'false';
          buffering = true;
          watchBuffering();
          sync();
          await audio.play(); // Must run directly from the click gesture on mobile.
        } catch (_) {
          error.dataset.failed = 'true';
          setPanel(true);
        } finally {
          buffering = false;
          clearStallTimer();
          suggestedFallback = false;
        }
      } else { buffering = false; clearStallTimer(); suggestedFallback = false; audio.pause(); }
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
    audio.addEventListener('waiting', () => { buffering = true; watchBuffering(); sync(); });
    audio.addEventListener('playing', () => { buffering = false; clearStallTimer(); suggestedFallback = false; sync(); });
    audio.addEventListener('canplay', () => { buffering = false; clearStallTimer(); suggestedFallback = false; sync(); });
    audio.addEventListener('error', () => {
      buffering = false;
      clearStallTimer();
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
