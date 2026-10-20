import React from 'react';
import { ArrowLeft, Sparkles, Github, Sun, Moon, Globe, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../../i18n/LanguageContext.jsx';

/**
 * Vitamin Pop & Digital Neo Application Header
 */
export const Header = ({ activeTool, onBack, theme, onToggleTheme }) => {
    const { t, language, toggleLanguage, getToolInfo } = useTranslation();
    const activeToolInfo = activeTool ? getToolInfo(activeTool.slug, activeTool) : null;

    return (
        <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md sticky top-0 z-40 border-b-2 border-gray-900 dark:border-gray-700 transition-colors duration-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Brand & Breadcrumb */}
                    <div className="flex items-center space-x-3">
                        {activeTool ? (
                            <button
                                onClick={onBack}
                                className="px-3.5 py-1.5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-600 hover:bg-[#FFE600] dark:hover:bg-[#FF2E93] text-gray-900 dark:text-white transition-all flex items-center gap-1.5 text-xs font-black pop-shadow-sm hover:-translate-y-0.5 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                                aria-label={t('header.allTools')}
                            >
                                <ArrowLeft className="h-4 w-4 stroke-[2.5]" />
                                <span>{t('header.allTools')}</span>
                            </button>
                        ) : (
                            <div className="p-2 bg-[#FF2E93] text-white rounded-2xl border-2 border-gray-900 pop-shadow-sm rotate-[-3deg] hover:rotate-0 transition-transform">
                                <Sparkles className="h-5 w-5 fill-white stroke-[2.5]" />
                            </div>
                        )}

                        <div className="flex items-center gap-2">
                            <span className="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight">
                                {t('header.title')}
                            </span>
                            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#00F0FF] text-gray-900 border border-gray-900 rotate-[2deg]">
                                POP NEO
                            </span>
                            {activeTool && (
                                <>
                                    <span className="text-gray-400 font-bold">/</span>
                                    <span className="text-xs font-black text-white bg-gradient-to-r from-[#FF2E93] to-[#8B5CF6] px-3 py-1 rounded-full border border-gray-900 pop-shadow-sm">
                                        {activeToolInfo?.name || activeTool.name}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right: Language Switcher + Privacy Pill + Dark Mode + Github (mineeric) */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Language Switcher Plugin Button */}
                        <button
                            type="button"
                            onClick={toggleLanguage}
                            className="h-9 px-3 flex items-center gap-1.5 rounded-2xl bg-[#FFE600] hover:bg-[#ffd000] text-gray-900 border-2 border-gray-900 text-xs font-black transition-all cursor-pointer pop-shadow-sm hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                            title={t('header.switchLanguage')}
                            aria-label={t('header.switchLanguage')}
                        >
                            <Globe className="h-3.5 w-3.5 stroke-[2.5]" />
                            <span>{language === 'zh-TW' ? '繁體中文' : 'English'}</span>
                        </button>

                        {/* Privacy Pill (Academic & Security) */}
                        <div className="hidden lg:flex items-center gap-1.5 h-9 px-3.5 rounded-2xl bg-[#10E599]/20 dark:bg-[#10E599]/30 border-2 border-gray-900 dark:border-gray-600 text-gray-900 dark:text-emerald-300 text-xs font-black pop-shadow-sm">
                            <ShieldCheck className="h-4 w-4 text-[#059669] dark:text-[#10E599] stroke-[2.5]" />
                            <span>{t('header.clientSidePrivate')}</span>
                        </div>

                        {/* Dark/Light Mode Switcher */}
                        <button
                            type="button"
                            onClick={onToggleTheme}
                            className="h-9 w-9 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 hover:bg-[#00F0FF] dark:hover:bg-[#8B5CF6] border-2 border-gray-900 dark:border-gray-600 text-gray-900 dark:text-gray-100 transition-all cursor-pointer pop-shadow-sm hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                            title={theme === 'dark' ? t('header.switchThemeToLight') : t('header.switchThemeToDark')}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-4 w-4 text-[#FFE600] fill-[#FFE600] stroke-[2]" />
                            ) : (
                                <Moon className="h-4 w-4 text-gray-900 stroke-[2.5]" />
                            )}
                        </button>

                        {/* GitHub Link (minereric) */}
                        <a
                            href="https://github.com/minereric"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-9 flex items-center gap-1.5 px-3.5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-600 hover:bg-[#FF2E93] hover:text-white dark:hover:bg-[#00F0FF] dark:hover:text-gray-900 text-gray-900 dark:text-gray-100 text-xs font-black transition-all pop-shadow-sm hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                            title="GitHub (minereric)"
                        >
                            <Github className="h-4 w-4 stroke-[2.5]" />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
