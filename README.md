# 土地法與稅法・案例邏輯課本（PWA）

不動產經紀人「土地法與土地相關稅法概要」的深度閱讀課本：逐條要旨 + 案例 + 交叉比對表 + 邏輯拆解。
純靜態網頁，放 GitHub Pages，手機「加到主畫面」後像 App 一樣全螢幕開啟，可離線複習，並記住上次讀到的章節。

## 結構
- `index.html`：閱讀引擎（章節目錄、迷你 Markdown 渲染、進度條、記住上次位置）
- `data/book.js`：課本內容（`window.BOOK`，要加／改章節就改這裡）
- `manifest.json` / `sw.js` / `icons/`：PWA（App 圖示、離線快取）

內容源頭在 vault：`不動產經紀人_Vault/課本/`（改講義後重編 `book.js`）。

## 更新內容後
1. 改 `data/book.js`。
2. 把 `sw.js` 裡的 `CACHE = "broker-book-vN"` 版本號 +1，
   這樣手機下次連網開啟會自動抓到新內容。
3. commit + push。

## 加到手機主畫面
- iPhone（Safari）：分享 → 加入主畫面。
- Android（Chrome）：右上選單 → 安裝應用程式／加到主畫面。
