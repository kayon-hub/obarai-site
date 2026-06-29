(function(){
var GAS = 'https://script.google.com/macros/s/AKfycbwurdEwtQMWAcgtnFj5nJ8U19z3uE4TnbIqXs1rMLxvQqXV7y65oBXPZ7RSh-V1pqzt/exec';
var KEY = 'ob_vid';

function getVid() {
  var v = localStorage.getItem(KEY);
  if (!v) { v = Date.now().toString(36) + Math.random().toString(36).slice(2, 8); localStorage.setItem(KEY, v); }
  return v;
}

function track() {
  var data = {
    type: 'pageview',
    vid: getVid(),
    page: location.pathname,
    ref: document.referrer || '',
    ua: navigator.userAgent,
    sw: screen.width,
    sh: screen.height,
    lang: navigator.language,
    ts: new Date().toISOString()
  };
  if (navigator.sendBeacon) {
    navigator.sendBeacon(GAS, JSON.stringify(data));
  } else {
    fetch(GAS, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(data), keepalive: true }).catch(function(){});
  }
}

if (document.readyState === 'complete') track();
else window.addEventListener('load', track);
})();
