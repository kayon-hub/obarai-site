(function(){
var DEMO_URL = 'https://50clock.obarai.com';
var LINE_URL = 'https://lin.ee/yjUWCM8';

var LEAD_TRIGGERS = ['報價','客製','優惠','折扣','議價','quote','合約','試用','免費','體驗','try','demo','聯繫','聯絡','業務','諮詢','洽詢','contact','合作','開通','導入','開始','預約','展示'];
var msgCount = 0;
var leadShown = false;

var LEAD_MSG = '想進一步了解的話，可以直接預約展示或聯絡業務：';

var KB = [
  {
    keys: ['什麼','是什麼','orbit','介紹','做什麼','幹嘛','功能'],
    a: 'ORBIT 是模組化企業營運平台，內建 POS 智慧收銀、CRM 會員經營、AI 智慧自動化三大核心，另有 RSVP 預約、ERP 資源規劃、HR 人事考勤、LINE 串接、FLOW 多門市管理、AUTH 權限管控、WMS 倉儲、QR Shop 掃碼點餐等模組可自由選配。\n\n想了解哪個模組的細節嗎？'
  },
  {
    keys: ['方案','價','費用','多少錢','收費','定價','cost','price','plan'],
    a: 'ORBIT 提供三種方案：\n\n• START — NT$1,488/月（1 帳號，選 3 個模組）\n• PLUS — NT$1,988/月（3 帳號，選 5 個模組）\n• PRO — NT$3,988/月（5 帳號，全模組開通）\n\n所有方案皆含 POS + CRM + AI 基礎，另有 14 天免費試用。',
    lead: true
  },
  {
    keys: ['試用','免費','體驗','try','free','demo'],
    a: '我們提供 14 天免費試用，期間可完整體驗所有功能。試用期內隨時取消，不會產生任何費用。',
    lead: true
  },
  {
    keys: ['行業','產業','餐飲','零售','美髮','補習','旅宿','飯店','傳產','適合','industry'],
    a: 'ORBIT 有針對不同行業的推薦套餐（皆 NT$1,988/月起）：\n\n• 餐飲業 — POS + 預約 + 廚房出單 + QR 點餐\n• 零售業 — POS + 庫存 + 倉儲 + QR 商城\n• 美髮沙龍 — 預約 + LINE + HR 考勤\n• 補教機構 — 預約 + ERP + HR\n• 旅宿業 — 預約 + ERP + 倉儲\n• 傳產/多角化 — PRO 全模組\n\n不確定哪個適合你？告訴我你的行業，我來推薦。'
  },
  {
    keys: ['pos','收銀','結帳','收款','支付','付款','刷卡'],
    a: 'ORBIT POS 智慧收銀功能包含：\n\n• 快速結帳與購物車管理\n• 多元支付（現金、信用卡、行動支付）\n• 廚房出單（KDS）\n• 即時銷售報表\n\nPOS 是所有方案的標配模組。'
  },
  {
    keys: ['crm','會員','客戶','積分','點數','等級','生日'],
    a: 'ORBIT CRM 會員經營功能：\n\n• 消費自動建檔，不用手動登記\n• 會員等級與積分兌換\n• 生日禮推播\n• 消費行為分析\n\nCRM 是所有方案的標配模組。'
  },
  {
    keys: ['ai','人工智慧','智慧','預測','分析','自動'],
    a: 'ORBIT AI 智慧自動化功能：\n\n• 銷售趨勢預測\n• 智慧補貨建議\n• 客戶消費洞察\n• 自然語言查詢（用白話問問題就能查資料）\n\n所有方案皆含 AI 基礎功能，如需更多 AI 用量可加購 AI+ 方案。'
  },
  {
    keys: ['預約','訂位','候位','rsvp','reservation','booking'],
    a: 'ORBIT RSVP 預約管理模組：\n\n• 線上訂位 / 候位\n• 座位容量管理\n• 推播提醒通知\n• 適用餐廳、沙龍、診所等預約制行業'
  },
  {
    keys: ['erp','庫存','進貨','採購','財務','供應商'],
    a: 'ORBIT ERP 資源規劃模組：\n\n• 庫存即時追蹤\n• 採購與供應商管理\n• 財務分析報表\n• 適用需要管理進銷存的企業'
  },
  {
    keys: ['hr','人事','考勤','打卡','薪資','請假','出勤'],
    a: 'ORBIT HR 人事考勤模組：\n\n• 手機 GPS 打卡\n• 請假 / 加班申請\n• 薪資自動計算\n• 適用需要管理員工出勤的企業'
  },
  {
    keys: ['line','通知','推播','訊息'],
    a: 'ORBIT LINE 串接模組：\n\n• LINE 官方帳號整合\n• 消費通知推播\n• 預約提醒\n• 會員互動訊息'
  },
  {
    keys: ['flow','多門市','分店','調貨','門市'],
    a: 'ORBIT FLOW 營運管理模組：\n\n• 多門市即時看板\n• 分店間調貨\n• 人員跨店調度\n• 適用連鎖或多據點企業'
  },
  {
    keys: ['auth','權限','角色','管控','pin'],
    a: 'ORBIT AUTH 權限管控模組：\n\n• 四級角色權限設定\n• 主管 PIN 驗證\n• 操作稽核紀錄\n• 保護敏感資料與關鍵操作'
  },
  {
    keys: ['wms','倉儲','倉庫','盤點','進出貨'],
    a: 'ORBIT WMS 倉儲管理模組：\n\n• 進出貨管理\n• 盤點作業\n• 多倉同步\n• 適用需要倉儲管理的零售與批發業'
  },
  {
    keys: ['pms','旅宿','飯店','民宿','旅館','房態','訂房','入住','退房','hotel'],
    a: 'ORBIT PMS 旅宿管理模組：\n\n• 即時房態看板與房型管理\n• 線上訂房與渠道整合\n• 入住 / 退房自動化流程\n• 房客歷史紀錄與偏好管理\n• 營收報表與住房率分析\n\n專為飯店、民宿、旅館設計的物業管理系統。'
  },
  {
    keys: ['qr','掃碼','點餐','自助','menu'],
    a: 'ORBIT QR Shop 掃碼商務模組：\n\n• 客人掃碼自助點餐\n• 免下載、免登入\n• 訂單直送廚房/櫃台\n• 減少排隊等候時間'
  },
  {
    keys: ['退費','退款','取消','解約','違約'],
    a: '退費相關規定：\n\n• 14 天試用期內取消：不收任何費用\n• 月費訂閱：扣款後不退還，可於下月停用\n• 合約期內提前解約：需支付 30% 違約金\n• 系統故障超過 72 小時等特殊情況可申請退款\n\n退款申請請寄信至 hello@obarai.com，5 個工作日內審查。'
  },
  {
    keys: ['隱私','資料','安全','加密','個資','保護'],
    a: '我們重視您的資料安全：\n\n• 全站 HTTPS 加密傳輸\n• 資料庫層級存取控制（RLS）\n• 定期安全稽核\n• 帳號刪除後 90 天內清除資料\n• 財務資料依法保存 5 年\n\n詳見我們的隱私權政策。'
  },
  {
    keys: ['開通','導入','設定','上線','開始'],
    a: '開通流程：\n\n1. 聯繫業務團隊，確認適合的方案與模組\n2. 支付一次性開通費 NT$888\n3. 系統設定與資料導入\n4. 教育訓練\n5. 正式上線\n\n從簽約到上線通常 1-2 週。',
    lead: true
  },
  {
    keys: ['聯繫','聯絡','電話','客服','業務','諮詢','洽詢','contact','合作'],
    a: '歡迎聯繫我們：\n\n電話：03-6109005\n信箱：hello@obarai.com',
    lead: true
  },
  {
    keys: ['報價','客製','優惠','折扣','議價','quote','合約'],
    a: '詳細報價與客製化需求，需要由業務團隊根據您的實際情況提供規劃。',
    lead: true
  },
  {
    keys: ['公司','obarai','鎧洋','統編'],
    a: 'OBARAI INTELLIGENCE Co., Ltd.（鎧洋聲影科技）\n\n統一編號：61210989\n電話：03-6109005\n信箱：hello@obarai.com'
  },
  {
    keys: ['升級','降級','換方案','變更'],
    a: '方案變更說明：\n\n• 升級：隨時可升級，立即生效\n• 降級：可隨時申請，下個計費週期生效\n• 當月已付費用不退差額\n\n如需變更方案，請聯繫業務團隊。'
  },
  {
    keys: ['帳號','人數','幾個人','使用者'],
    a: '各方案的帳號數量：\n\n• START — 1 個帳號\n• PLUS — 3 個帳號\n• PRO — 5 個帳號\n\n如需更多帳號，請洽業務團隊討論客製方案。'
  }
];

var GREETING = '你好！我是 ORBIT 智慧助理。\n\n有任何關於 ORBIT 平台的問題都可以問我，例如：\n• 功能介紹\n• 方案與價格\n• 適合什麼行業\n• 試用申請\n\n請問有什麼可以幫您的？';

var FALLBACK = '抱歉，這個問題我不太確定怎麼回答。\n\n建議您直接聯繫我們的團隊：\n電話：03-6109005\n信箱：hello@obarai.com\n\n或者您可以換個方式問我，例如「ORBIT 有哪些功能」「適合餐飲業嗎」「方案多少錢」。';

function findAnswer(input) {
  var q = input.toLowerCase();
  var best = null, bestScore = 0;
  for (var i = 0; i < KB.length; i++) {
    var score = 0;
    for (var j = 0; j < KB[i].keys.length; j++) {
      if (q.indexOf(KB[i].keys[j].toLowerCase()) !== -1) score++;
    }
    if (score > bestScore) { bestScore = score; best = KB[i]; }
  }
  return best && bestScore > 0 ? best : null;
}

function shouldShowLead(input, kbMatch) {
  if (leadShown) return false;
  if (kbMatch && kbMatch.lead) return true;
  var q = input.toLowerCase();
  for (var i = 0; i < LEAD_TRIGGERS.length; i++) {
    if (q.indexOf(LEAD_TRIGGERS[i].toLowerCase()) !== -1) return true;
  }
  if (msgCount >= 3) return true;
  return false;
}

function injectStyles() {
  var s = document.createElement('style');
  s.textContent = '\
.ob-chat-btn{position:fixed;bottom:28px;right:28px;display:flex;align-items:center;gap:10px;padding:13px 24px 13px 18px;border-radius:50px;background:#0c0c0c;border:1px solid rgba(200,169,110,.5);cursor:pointer;z-index:9998;transition:all .25s;animation:ob-breathe 2.8s ease-in-out infinite;font-family:Inter,-apple-system,BlinkMacSystemFont,"Noto Sans TC",sans-serif}\
.ob-chat-btn:hover{animation:none;border-color:rgba(200,169,110,.8);box-shadow:0 8px 32px rgba(200,169,110,.35);transform:translateY(-2px)}\
.ob-chat-btn svg{width:20px;height:20px;stroke:#c8a96e;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}\
.ob-chat-btn .ob-btn-text{font-size:12.5px;font-weight:500;color:#c8a96e;letter-spacing:.04em;white-space:nowrap}\
.ob-chat-btn.open{padding:12px;border-radius:50%;width:48px;height:48px;justify-content:center;animation:none;border-color:rgba(255,255,255,.15)}\
.ob-chat-btn.open .ob-btn-text{display:none}\
.ob-chat-btn.open svg.ico-chat{display:none}\
.ob-chat-btn:not(.open) svg.ico-x{display:none}\
@keyframes ob-breathe{0%,100%{box-shadow:0 0 0 0 rgba(200,169,110,0),0 4px 16px rgba(0,0,0,.3)}50%{box-shadow:0 0 20px 6px rgba(200,169,110,.2),0 4px 16px rgba(0,0,0,.3)}}\
.ob-chat-box{position:fixed;bottom:84px;right:24px;width:380px;max-width:calc(100vw - 32px);height:520px;max-height:calc(100vh - 120px);background:#fff;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.18);z-index:9999;display:none;flex-direction:column;overflow:hidden;font-family:Inter,-apple-system,BlinkMacSystemFont,"Noto Sans TC",sans-serif}\
.ob-chat-box.show{display:flex}\
.ob-chat-head{background:#0a0a0a;color:#fff;padding:16px 20px;display:flex;align-items:center;gap:12px;flex-shrink:0}\
.ob-chat-head .av{width:36px;height:36px;border-radius:50%;background:#2563eb;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#fff;flex-shrink:0}\
.ob-chat-head .info .name{font-size:14px;font-weight:700;letter-spacing:.5px}\
.ob-chat-head .info .status{font-size:11px;color:#9ca3af}\
.ob-chat-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:#f8f9fa}\
.ob-msg{max-width:85%;padding:10px 14px;border-radius:10px;font-size:13px;line-height:1.7;white-space:pre-wrap;word-break:break-word}\
.ob-msg.bot{background:#fff;color:#111827;align-self:flex-start;border:1px solid #e5e7eb;border-bottom-left-radius:4px}\
.ob-msg.user{background:#0a0a0a;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}\
.ob-cta-card{align-self:flex-start;max-width:90%;background:#fff;border:1.5px solid #2563eb;border-radius:10px;padding:16px;border-bottom-left-radius:4px}\
.ob-cta-card p{font-size:12px;color:#6b7280;margin-bottom:12px;line-height:1.6}\
.ob-cta-btns{display:flex;flex-direction:column;gap:8px}\
.ob-cta-btns a{display:block;text-align:center;padding:10px 16px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;transition:opacity .15s}\
.ob-cta-btns a:hover{opacity:.85}\
.ob-cta-btns .cta-demo{background:#0a0a0a;color:#fff}\
.ob-cta-btns .cta-line{background:#06c755;color:#fff}\
.ob-cta-btns .cta-tel{background:none;border:1px solid #e5e7eb;color:#111827;font-size:12px}\
.ob-chat-input{display:flex;padding:12px;gap:8px;border-top:1px solid #e5e7eb;background:#fff;flex-shrink:0}\
.ob-chat-input input{flex:1;border:1px solid #e5e7eb;border-radius:8px;padding:10px 14px;font-size:13px;outline:none;font-family:inherit;transition:border-color .15s}\
.ob-chat-input input:focus{border-color:#2563eb}\
.ob-chat-input button{background:#0a0a0a;color:#fff;border:none;border-radius:8px;padding:10px 16px;font-size:13px;font-weight:600;cursor:pointer;transition:background .15s;white-space:nowrap}\
.ob-chat-input button:hover{background:#1f2937}\
.ob-chat-footer{text-align:center;padding:6px;font-size:9px;color:#9ca3af;letter-spacing:.5px;background:#fff;border-top:1px solid #f3f4f6}';
  document.head.appendChild(s);
}

function createUI() {
  var btn = document.createElement('button');
  btn.className = 'ob-chat-btn';
  btn.innerHTML = '<svg class="ico-chat" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg><span class="ob-btn-text">ORBIT 智慧助理</span><svg class="ico-x" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>';
  document.body.appendChild(btn);

  var box = document.createElement('div');
  box.className = 'ob-chat-box';
  box.innerHTML = '\
<div class="ob-chat-head"><div class="av">O.</div><div class="info"><div class="name">ORBIT 智慧助理</div><div class="status">隨時為您服務</div></div></div>\
<div class="ob-chat-msgs" id="ob-msgs"></div>\
<div class="ob-chat-input"><input id="ob-input" placeholder="請輸入您的問題..." autocomplete="off"><button id="ob-send">送出</button></div>\
<div class="ob-chat-footer">Powered by OBARAI INTELLIGENCE</div>';
  document.body.appendChild(box);

  var msgsEl = document.getElementById('ob-msgs');
  var input = document.getElementById('ob-input');
  var sendBtn = document.getElementById('ob-send');
  var isOpen = false;

  function addMsg(text, isUser) {
    var el = document.createElement('div');
    el.className = 'ob-msg ' + (isUser ? 'user' : 'bot');
    el.textContent = text;
    msgsEl.appendChild(el);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function showCtaCard() {
    leadShown = true;
    var card = document.createElement('div');
    card.className = 'ob-cta-card';
    card.innerHTML = '\
<p>' + LEAD_MSG + '</p>\
<div class="ob-cta-btns">\
<a href="' + DEMO_URL + '" target="_blank" rel="noopener" class="cta-demo">預約私人展示</a>\
<a href="' + LINE_URL + '" target="_blank" rel="noopener" class="cta-line">LINE 聯絡業務</a>\
<a href="tel:036109005" class="cta-tel">撥打 03-6109005</a>\
</div>';
    msgsEl.appendChild(card);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function send() {
    var q = input.value.trim();
    if (!q) return;
    addMsg(q, true);
    input.value = '';
    msgCount++;

    setTimeout(function() {
      var match = findAnswer(q);
      var text = match ? match.a : FALLBACK;
      addMsg(text, false);

      if (shouldShowLead(q, match)) {
        setTimeout(function() { showCtaCard(); }, 500);
      }
    }, 300 + Math.random() * 400);
  }

  btn.addEventListener('click', function() {
    isOpen = !isOpen;
    box.classList.toggle('show', isOpen);
    btn.classList.toggle('open', isOpen);
    if (isOpen && msgsEl.children.length === 0) {
      addMsg(GREETING, false);
    }
    if (isOpen) input.focus();
  });

  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') send();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { injectStyles(); createUI(); });
} else {
  injectStyles();
  createUI();
}
})();
