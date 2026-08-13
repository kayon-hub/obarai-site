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
| `/ai/` | 企業 AI 導入、AI 自動化 |
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
