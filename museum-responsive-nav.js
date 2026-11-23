/* Keep the active room visible inside the horizontal phone/iPad masthead. */
(() => {
  'use strict';
  function updateActiveRoom() {
    if (window.innerWidth > 1366) return;
    const nav = document.querySelector('#app > .site-header .nav');
    const active = nav?.querySelector('a.active');
    if (!nav || !active || nav.scrollWidth <= nav.clientWidth + 2) return;
    const navBox = nav.getBoundingClientRect();
    const itemBox = active.getBoundingClientRect();
    const desired = nav.scrollLeft + itemBox.left - navBox.left - (navBox.width - itemBox.width) / 2;
    // Avoid jumping the entire page: only scroll the room list horizontally.
    nav.scrollLeft = Math.max(0, Math.min(nav.scrollWidth - nav.clientWidth, desired));
  }
  let pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      updateActiveRoom();
    });
  }
  function initialize() {
    const app = document.getElementById('app');
    if (!app) return;
    const observer = new MutationObserver(schedule);
    observer.observe(app, {childList:true});
    window.addEventListener('hashchange', schedule);
    window.addEventListener('resize', schedule, {passive:true});
    schedule();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, {once:true});
  else initialize();
})();
