// ==UserScript==
// @name         PDF Toolkit 繁體中文化外掛
// @namespace    https://github.com/minereric/pdf-toolkit
// @version      1.0.1
// @description  將 PDF Toolkit 主要介面自動翻譯為繁體中文（支援本地服務與 GitHub Pages 官方版本）
// @author       PDF Toolkit Localizer
// @match        *://minereric.github.io/pdf-toolkit/*
// @match        *://yashdhanani.github.io/pdf-toolkit-app/*
// @match        *://localhost:*/*
// @match        *://127.0.0.1:*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const translations = {
        // Headers & Badges
        "All Tools": "全部工具",
        "PDF Toolkit": "PDF 工具箱",
        "100% Client-Side Private": "100% 本地處理 • 零雲端上傳",
        "100% Client-Side Private Processing • Zero Cloud Uploads": "100% 客戶端純本機處理 • 零資料上傳雲端 • 隱私安全無虞",
        "All-in-One": "一站式",
        "PDF Studio": "PDF 萬能工具箱",
        "Merge, compress, sign, organize, convert, and OCR documents with client-side privacy.": "支援 PDF 合併、分割、壓縮、簽名、浮水印、轉檔與 OCR 辨識，完全在瀏覽器本機沙盒內執行，速度極快且完全免費。",
        "Search any PDF tool (or press ⌘K)...": "搜尋任何 PDF 工具（或按 Ctrl+K）...",

        // Categories
        "Organize & Manage": "組織與頁面管理",
        "Convert & Export": "格式轉換與匯出",
        "Security & Sign": "安全防護與簽署",
        "AI & Smart Tools": "智慧與實用工具",

        // Tool Names
        "Merge PDF": "PDF 合併",
        "Split PDF": "PDF 分割",
        "Organize PDF": "PDF 頁面整理",
        "Rotate PDF": "PDF 旋轉",
        "Crop PDF": "PDF 裁切",
        "Page Numbers": "添加頁碼",
        "N-Up Handouts": "多頁拼版 / 講義排版",
        "Compress PDF": "PDF 壓縮",
        "HTML to PDF": "HTML 轉 PDF",
        "PDF to Word (.DOC)": "PDF 轉 Word (.DOC)",
        "PDF to JPG": "PDF 轉 JPG",
        "PDF to PNG": "PDF 轉 PNG",
        "JPG to PDF": "JPG 轉 PDF",
        "PNG to PDF": "PNG 轉 PDF",
        "Extract Text": "擷取純文字",
        "Extract Images": "擷取嵌入圖片",
        "Sign PDF": "PDF 電子簽名",
        "Redact & Blackout": "機密塗黑遮蔽",
        "Watermark PDF": "PDF 浮水印",
        "Header & Footer": "頁首與頁尾",
        "Flatten PDF": "PDF 扁平化",
        "PDF Form Filler": "PDF 表單填寫器",
        "Protect PDF": "PDF 密碼加密",
        "Unlock PDF": "PDF 解密移除密碼",
        "PDF Properties": "PDF 屬性編輯",
        "OCR PDF": "PDF 文字辨識 (OCR)",
        "Compare PDF": "PDF 視覺比對",
        "Edit PDF": "PDF 編輯標註",
        "Grayscale PDF": "PDF 轉灰階黑白",
        "Dark Mode Invert": "夜間深色反相",
        "Repair PDF": "PDF 損壞修復",

        // Tool Badges
        "Popular": "熱門",
        "Visual Pick": "視覺選取",
        "Studio": "工作台",
        "Print Ready": "列印就緒",
        "Client-Side": "本機處理",
        "Rich Editor": "富文本編輯",
        "Editable": "可編輯",
        "High-Res": "高解析",
        "Instant": "即時極速",
        "Assets": "素材萃取",
        "Interactive": "互動簽署",
        "Permanent": "永久遮蔽",
        "Live Preview": "即時預覽",
        "Tamper-Proof": "防竄改",
        "Gemini 2.0 AI": "Gemini AI",
        "Pixel Diff": "像素比對",
        "Ink Saver": "節省墨水",
        "Night Reader": "夜讀模式",
        "Recovery": "檔案修復",

        // Common UI & Buttons
        "Drag & drop files here, or click to browse": "將檔案拖曳至此處，或點擊以選取檔案",
        "Multiple files supported": "支援選取多個檔案",
        "Single file": "單一檔案",
        "No Matching Tools Found": "找不到相符的工具",
        "Try searching for another keyword or browse all tool categories.": "請嘗試搜尋其他關鍵字，或點擊下方按鈕瀏覽全部工具分類。",
        "Show All Tools": "顯示全部工具"
    };

    function replaceTextInNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const original = node.textContent.trim();
            if (translations[original]) {
                node.textContent = node.textContent.replace(original, translations[original]);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === 'INPUT' && node.placeholder && translations[node.placeholder]) {
                node.placeholder = translations[node.placeholder];
            }
            node.childNodes.forEach(replaceTextInNode);
        }
    }

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            mutation.addedNodes.forEach(replaceTextInNode);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    replaceTextInNode(document.body);
})();
