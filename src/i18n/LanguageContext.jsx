import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { zhTW } from './locales/zh-TW.js';
import { en } from './locales/en.js';

const translations = {
    'zh-TW': zhTW,
    'en': en,
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('pdf_toolkit_lang');
        return saved || 'zh-TW'; // 預設使用繁體中文
    });

    useEffect(() => {
        localStorage.setItem('pdf_toolkit_lang', language);
        document.documentElement.lang = language === 'zh-TW' ? 'zh-Hant' : 'en';
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'zh-TW' ? 'en' : 'zh-TW'));
    };

    const currentTranslations = useMemo(() => {
        return translations[language] || zhTW;
    }, [language]);

    // t('hero.titlePrefix') 等深層字串讀取
    const t = (path, fallback = '') => {
        if (!path) return fallback;
        const keys = path.split('.');
        let val = currentTranslations;
        for (const key of keys) {
            if (val && typeof val === 'object' && key in val) {
                val = val[key];
            } else {
                return fallback || path;
            }
        }
        return val ?? fallback ?? path;
    };

    // 取得工具的多語系資訊（名稱、描述、徽章）
    const getToolInfo = (slug, fallbackTool = {}) => {
        const toolTrans = currentTranslations?.tools?.[slug];
        return {
            name: toolTrans?.name || fallbackTool.name,
            description: toolTrans?.description || fallbackTool.description,
            badge: toolTrans?.badge !== undefined ? toolTrans.badge : fallbackTool.badge,
        };
    };

    // 取得分類標籤名稱
    const getCategoryLabel = (catId, fallbackLabel = '') => {
        return currentTranslations?.categories?.[catId] || fallbackLabel;
    };

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            toggleLanguage,
            t,
            getToolInfo,
            getCategoryLabel,
            isZh: language === 'zh-TW'
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
