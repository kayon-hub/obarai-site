# OBARAI SEO restructure

Date: 2026-08-14

## What changed

- Added indexable solution landing pages for ERP, POS, CRM, WMS, HR, AI, manufacturing, education, restaurant, retail, and accounting.
- Added unique titles, descriptions, canonicals, Open Graph, Twitter metadata, headings, FAQs, and internal links.
- Added WebPage, Product, SoftwareApplication, and FAQPage structured data for solution pages.
- Expanded the homepage navigation to link directly to priority product pages.
- Updated `robots.txt` and `sitemap.xml`.
- Added missing metadata to public legal and consultation pages.
- Kept internal analytics, customer manuals, login, and survey pages out of the search index.
- Used directory-based URLs such as `/erp/` so clean URLs work on GitHub Pages.

## Keyword map

| Path | Primary search intent |
| --- | --- |
| `/erp/` | ERP 系統、中小企業 ERP、台灣 ERP |
| `/pos/` | POS 系統、多門市收銀系統 |
| `/crm/` | CRM 系統、會員管理、LINE CRM |
| `/wms/` | WMS、倉儲管理、庫存管理系統 |
| `/hr/` | 人事考勤、排班打卡系統 |
| `/ai/` | 企業 AI 導入、AI 自動化流程、AI 企業化（2026-08-16 擴寫為完整專頁） |
| `/manufacturing/` | 製造業 ERP、BOM、生產管理 |
| `/education/` | 補習班管理、學生點名、學費管理 |
| `/restaurant/` | 餐飲 POS、桌位與食材庫存 |
| `/retail/` | 零售 POS、多門市進銷存 |
| `/accounting/` | 會計系統、應收應付、電子單據 |

## Validation

- All 19 indexable HTML pages have one title, description, canonical, and H1.
- Sitemap XML parses successfully.
- JSON-LD parses successfully.
- Every new clean URL returned HTTP 200 in a local static-server test.
- `git diff --check` passed.

## Follow-up

- Submit `https://www.obarai.com/sitemap.xml` in Google Search Console after deployment.
- Request indexing for the homepage and priority solution pages.
- Monitor indexing, Core Web Vitals, and query/page performance after the next crawl.

## 2026-08-16 addendum — AI keyword push (AX)

- KAYON 指示強化「AI 導入」「AI 自動化流程」「AI 企業化」關鍵字。
- 首頁：title／description／keywords／OG／Twitter 全部帶入三組關鍵字；Organization 加 `knowsAbout`；Service 的 serviceType／description／featureList 改寫；FAQPage 8 題（原 6 題 AI 兩題改寫＋新增「什麼是 AI 企業化」「AI 自動化流程可以接進既有工具嗎」）；hero 眉標加「企業 AI 導入平台」（手機版獨立第二行）；生態 01、AI 模組卡、AI banner、關於段落各補一句關鍵字文案；AI 模組卡與 banner 新增指向 `/ai` 的關鍵字錨文字連結。
- `/ai/`：從共用模板（3 卡 2 FAQ）擴寫成完整專頁——AI 企業化定義（洞察／建議／執行）、導入四步驟、6 項能力、4 組自動化流程範例（連回各模組頁）、6 個產業入口、6 題 FAQ、CTA。`solution-data.js` 的 ai 條目同步（新增 `seoTitle` 欄位，`solution-page.js` 支援 `d.seoTitle||預設`），靜態 `<script id="schema">` 預填與 JS 產出一致的 Service/FAQPage JSON-LD 作為無 JS 備援。
- 11 個方案頁 nav 的 `/ai` 錨文字「AI」→「AI 導入」、related 區「AI」→「企業 AI 導入」。
- `solutions.css` 新增 `.grid.two`／`.grid.four`／`.step-num`，≤760px 一律單欄。
- 同時合併 AX 網頁端 8/15 未合併分支 `claude/handle-this-t264px`（方案頁 SoftwareApplication → Service，commit 744df66）。
- 驗證：18 個可索引頁 title/description/canonical/H1 各 1 且唯一；JSON-LD 全部 parse；`node --check` 兩支 JS；`xmllint` sitemap；headless Chrome 渲染 `/ai/` 最終 DOM title＝seoTitle、6 卡 6 FAQ、schema 為 Service；375px iframe 截圖檢查首頁 hero／AI 卡／banner／FAQ 與 `/ai/` 全頁。
