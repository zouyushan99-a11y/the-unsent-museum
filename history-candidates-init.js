/* Initialize all additional historical exhibits before app.js renders. */
if(!window.MUSEUM_NEW_BUILD)throw new Error("Historical exhibit builder is unavailable");
window.MUSEUM_NEW_BUILD();
if(window.MUSEUM_NEW_CASES.length!==33)throw new Error("Expected 33 new exhibits");
if((window.MUSEUM_NEW_AUDIT||[]).some(e=>e.enWords<1000||e.zhChars<1000))throw new Error("Historical exhibit narrative below minimum length");
