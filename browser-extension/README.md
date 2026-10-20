# PDF Toolkit 繁體中文化外掛（油猴 UserScript / 擴充套件）

本外掛專門為 **PDF Toolkit App** 設計，能將網站主要操作介面、工具卡片、篩選標籤等即時替換為繁體中文。

---

## 支援環境
- 本機啟動網址：`http://localhost:5173/`、`http://127.0.0.1:5173/`
- 原版線上演示：`https://yashdhanani.github.io/pdf-toolkit-app/`

---

## 安裝步驟

### 方法一：使用 Tampermonkey / Violentmonkey 擴充套件（推薦）
1. 在瀏覽器安裝 **Tampermonkey（油猴）** 或 **Violentmonkey（暴力猴）**。
2. 點擊擴充功能圖示，選擇「新增腳本 (Create a new script)」。
3. 將本目錄下的 [`pdf-toolkit-zh-tw.user.js`](./pdf-toolkit-zh-tw.user.js) 內容全選複製並貼入編輯器中。
4. 按 `Ctrl + S` 儲存。
5. 重新整理或開啟 PDF Toolkit 網頁，介面將自動變為繁體中文！

> **備註**：本專案程式庫內部已預先內建完整的繁體中文語言模組（可於右上角隨時切換 繁中 / EN）。本油猴外掛則是額外提供給在官方線上版本或未修改版本時使用的獨立外掛。
