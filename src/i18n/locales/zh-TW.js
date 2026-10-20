export const zhTW = {
    app: {
        title: 'PDF 工具箱',
        loadingEngine: '正在初始化高效率 PDF 處理引擎...',
        backToTools: '返回全部工具',
    },
    header: {
        title: 'PDF 工具箱',
        clientSidePrivate: '100% 本地處理 • 零雲端上傳',
        switchThemeToLight: '切換至淺色模式',
        switchThemeToDark: '切換至深色模式',
        allTools: '全部工具',
        switchLanguage: '切換語言',
        langName: '繁體中文',
    },
    hero: {
        badge: '100% 客戶端純本機處理 • 零資料上傳雲端 • 隱私安全無虞',
        titlePrefix: '一站式',
        titleHighlight: 'PDF 萬能工具箱',
        description: '支援 PDF 合併、分割、壓縮、簽名、浮水印、轉檔與 OCR 辨識，完全在瀏覽器本機沙盒內執行，速度極快且完全免費。',
        searchPlaceholder: '搜尋任何 PDF 工具（或按 Ctrl+K）...',
    },
    categories: {
        all: '全部工具',
        organize: '組織與頁面管理',
        convert: '格式轉換與匯出',
        security: '安全防護與簽署',
        ai: '智慧與實用工具',
    },
    tools: {
        // 1. Organize
        'merge': {
            name: 'PDF 合併',
            description: '將多個 PDF 檔案依自訂順序快速合併為單一文件，支援拖曳即時排序。',
            badge: '熱門',
        },
        'split': {
            name: 'PDF 分割',
            description: '透過視覺化縮圖選取器，精確擷取特定頁面或自訂範圍匯出為獨立 PDF。',
            badge: '視覺選取',
        },
        'organize': {
            name: 'PDF 頁面整理',
            description: '視覺化頁面工作台，自由調整頁面順序、旋轉(90°)、複製、刪除或反轉整份文件。',
            badge: '工作台',
        },
        'rotate': {
            name: 'PDF 旋轉',
            description: '一鍵批次旋轉全部或指定頁面（90°、180° 或 270°），旋轉即時生效。',
            badge: '',
        },
        'crop': {
            name: 'PDF 裁切',
            description: '精確自訂與調整頁面邊界，裁切掉多餘留白與調整可視顯示區域。',
            badge: '',
        },
        'page-numbers': {
            name: '添加頁碼',
            description: '在頁首或頁尾插入動態頁碼，支援多種樣式、位置設定與即時視覺預覽。',
            badge: '',
        },
        'n-up': {
            name: '多頁拼版 / 講義排版',
            description: '每張紙排印 2、4 或 6 頁，製作精簡講義、手冊與節省列印紙張。',
            badge: '列印就緒',
        },

        // 2. Convert & Export
        'compress': {
            name: 'PDF 壓縮',
            description: '在瀏覽器本機最佳化圖片串流與減少檔案大小，保護隱私且無損品質。',
            badge: '本機處理',
        },
        'html-to-pdf': {
            name: 'HTML 轉 PDF',
            description: '即時渲染並將 HTML、CSS、報價單與發票範本編譯為乾淨優質的 PDF 文件。',
            badge: '富文本編輯',
        },
        'pdf-to-docx': {
            name: 'PDF 轉 Word (.DOC)',
            description: '將 PDF 內容轉換為可編輯的 Word 格式文件 (.doc) 或結構化 Markdown。',
            badge: '可編輯',
        },
        'pdf-to-jpg': {
            name: 'PDF 轉 JPG',
            description: '將 PDF 頁面批次匯出為高解析度 JPG 圖片，支援自由選擇 DPI 品質。',
            badge: '高解析',
        },
        'pdf-to-png': {
            name: 'PDF 轉 PNG',
            description: '將 PDF 各頁匯出為清晰透明的無損高解析度 PNG 圖片檔。',
            badge: '',
        },
        'jpg-to-pdf': {
            name: 'JPG 轉 PDF',
            description: '將單張或多張 JPG/JPEG 圖片合併轉成乾淨標準的 PDF 文件。',
            badge: '',
        },
        'png-to-pdf': {
            name: 'PNG 轉 PDF',
            description: '將多張透明或無損 PNG 圖片匯整為 A4 或原始比例的標準 PDF。',
            badge: '',
        },
        'extract-text': {
            name: '擷取純文字',
            description: '快速提取 PDF 文件中的全部純文字內容，完全在本機執行無需聯網。',
            badge: '即時極速',
        },
        'extract-images': {
            name: '擷取嵌入圖片',
            description: '深度掃描並批次匯出 PDF 各頁面中嵌入的所有原始高解析度圖片。',
            badge: '素材萃取',
        },

        // 3. Security & Sign
        'sign': {
            name: 'PDF 電子簽名',
            description: '手寫繪製簽名、鍵盤輸入藝術字草寫，或蓋印核准圖章並放置於任意頁面。',
            badge: '互動簽名',
        },
        'redact': {
            name: '機密塗黑遮蔽',
            description: '對個資、身分證號、金額等機密資訊進行永久性、不可逆的黑底遮蔽覆蓋。',
            badge: '永久遮蔽',
        },
        'watermark': {
            name: 'PDF 浮水印',
            description: '加入自訂文字浮水印，支援即時不透明度、顏色、旋轉角度與排版預覽。',
            badge: '即時預覽',
        },
        'header-footer': {
            name: '頁首與頁尾',
            description: '插入包含文件標題、日期與頁碼巨集標籤的動態頁首頁尾資訊。',
            badge: '',
        },
        'flatten': {
            name: 'PDF 扁平化',
            description: '將互動式表單欄位、標籤註解與圖層固定鎖定，防止內容被後續竄改。',
            badge: '防竄改',
        },
        'form-filler': {
            name: 'PDF 表單填寫器',
            description: '檢視並填寫互動式 AcroForm 文字欄位、核取方塊與下拉選單項目。',
            badge: '',
        },
        'protect': {
            name: 'PDF 密碼加密',
            description: '使用標準 AES 加密保護您的 PDF 文件，防止未授權人員開啟瀏覽。',
            badge: '',
        },
        'unlock': {
            name: 'PDF 解密移除密碼',
            description: '輸入擁有者密碼後，一鍵移除 PDF 檔案的密碼限制與開啟鎖定。',
            badge: '',
        },
        'metadata': {
            name: 'PDF 屬性編輯',
            description: '檢視與自訂編輯文件的標題、作者、主旨、關鍵字與建立者資訊。',
            badge: '',
        },

        // 4. AI & Smart
        'ocr': {
            name: 'PDF 文字辨識 (OCR)',
            description: '運用 Gemini AI 智慧辨識掃描版 PDF 與圖片中的繁簡體文字與結構。',
            badge: 'Gemini AI',
        },
        'compare': {
            name: 'PDF 視覺比對',
            description: '使用 Pixelmatch 逐像素比對兩份 PDF 版本，快速標記出內容異動之處。',
            badge: '像素比對',
        },
        'edit': {
            name: 'PDF 編輯標註',
            description: '直接在 PDF 頁面的任意精確位置上新增文字註釋、標籤與文字內容。',
            badge: '',
        },
        'grayscale': {
            name: 'PDF 轉灰階黑白',
            description: '將全彩文件轉換為簡潔的灰階單色，節省列印耗材與碳粉墨水。',
            badge: '節省墨水',
        },
        'invert': {
            name: '夜間深色反相',
            description: '反轉 PDF 色彩為高對比深色模式，保護雙眼，適合夜間舒適閱讀。',
            badge: '夜讀模式',
        },
        'repair': {
            name: 'PDF 損壞修復',
            description: '嘗試重建損毀的位元組串流、修正 xref 交叉參照表與修復檔案結構。',
            badge: '檔案修復',
        },
    },
    commandPalette: {
        placeholder: '輸入關鍵字搜尋 PDF 工具...',
        noResults: '找不到相關工具',
        hintNavigate: '移動',
        hintOpen: '開啟',
        hintClose: '關閉',
    },
    toolGrid: {
        noResultsTitle: '找不到相符的工具',
        noResultsDesc: '請嘗試搜尋其他關鍵字，或點擊下方按鈕瀏覽全部工具分類。',
        showAllTools: '顯示全部工具',
    },
    fileUploader: {
        defaultText: '將檔案拖曳至此處，或點擊以選取檔案',
        multipleSupported: '支援選取多個檔案',
        singleFile: '單一檔案',
        acceptedFormats: '支援格式',
    },
    footer: {
        studioTitle: 'PDF 工具箱工作台',
        privacyNote: '所有的 PDF 轉換、壓縮、簽名與編輯都在您瀏覽器的本機沙盒中運作，100% 絕對隱私安全。',
    }
};
