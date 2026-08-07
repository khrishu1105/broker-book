# 不動產經紀人 · 電子參考書（PWA）

土地法與稅法概要的電子書：課文 13 章 + 歷屆題庫 + 錯題本。
純靜態網頁，可放 GitHub Pages，手機「加到主畫面」後像 App 一樣全螢幕開啟，並可離線複習。

## 結構
- `index.html`：閱讀器引擎（TOC、章節、精選練習、歷屆題庫、錯題本）
- `data/土地稅法_課文.js`：課文內容（要加章節就改這裡）
- `data/土地稅法_題庫.js`：歷屆題庫
- `manifest.json` / `sw.js` / `icons/`：PWA（App 圖示、離線快取）

## 更新內容後
1. 改 `data/` 裡的檔案。
2. 把 `sw.js` 裡的 `CACHE = "broker-book-v1"` 版本號 +1（例如 v2），
   這樣手機下次連網開啟會自動抓到新內容。
3. commit + push。

## 加到手機主畫面
- iPhone（Safari）：分享 → 加入主畫面。
- Android（Chrome）：右上選單 → 安裝應用程式／加到主畫面。
