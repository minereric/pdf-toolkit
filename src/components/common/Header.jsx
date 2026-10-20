import React from 'react';
import { ArrowLeft, FileText, Shield, Github, Sun, Moon, Coffee, Globe } from 'lucide-react';
import { useTranslation } from '../../i18n/LanguageContext.jsx';

/**
 * Top Application Header with Breadcrumb, Language Switcher, Theme Switcher, and Links
 */
export const Header = ({ activeTool, onBack, theme, onToggleTheme, onOpenCommandPalette }) => {
    const { t, language, toggleLanguage, getToolInfo } = useTranslation();
    const activeToolInfo = activeTool ? getToolInfo(activeTool.slug, activeTool) : null;

    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 dark:border-gray-800 shadow-2xs transition-colors duration-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Brand & Breadcrumb */}
                    <div className="flex items-center space-x-3">
                        {activeTool ? (
                            <button
                                onClick={onBack}
                                className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors flex items-center gap-1.5 text-xs font-bold shadow-2xs cursor-pointer"
                                aria-label={t('header.allTools')}
                            >
                                <ArrowLeft className="h-4 w-4" />
                                <span>{t('header.allTools')}</span>
                            </button>
                        ) : (
                            <div className="p-2 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-xl shadow-xs shadow-blue-500/20">
                                <FileText className="h-5 w-5" />
                            </div>
                        )}

                        <div className="flex items-center gap-2">
                            <span className="text-base font-black text-gray-900 dark:text-white tracking-tight">
                                {t('header.title')}
                            </span>
                            {activeTool && (
                                <>
                                    <span className="text-gray-300 dark:text-gray-600 font-light">/</span>
                                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2.5 py-0.5 rounded-full border border-blue-100 dark:border-blue-800">
                                        {activeToolInfo?.name || activeTool.name}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right: Language Switcher + Privacy Pill + Dark Mode + Github */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Language Switcher Plugin Button */}
                        <button
                            type="button"
                            onClick={toggleLanguage}
                            className="h-9 px-3 flex items-center gap-1.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold transition-all cursor-pointer shadow-2xs"
                            title={t('header.switchLanguage')}
                            aria-label={t('header.switchLanguage')}
                        >
                            <Globe className="h-3.5 w-3.5" />
                            <span>{language === 'zh-TW' ? '繁體中文' : 'English'}</span>
                        </button>

                        {/* Privacy Pill */}
                        <div className="hidden lg:flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                            <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                            <span>{t('header.clientSidePrivate')}</span>
                        </div>

                        {/* Dark/Light Mode Switcher */}
                        <button
                            type="button"
                            onClick={onToggleTheme}
                            className="h-9 w-9 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-all cursor-pointer"
                            title={theme === 'dark' ? t('header.switchThemeToLight') : t('header.switchThemeToDark')}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-4 w-4 text-amber-400 fill-amber-400/20" />
                            ) : (
                                <Moon className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                            )}
                        </button>

                        {/* Buy Me A Coffee */}
                        <a
                            href="https://www.buymeacoffee.com/dhananiyash"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-9 hidden sm:flex items-center gap-1.5 px-3 rounded-xl bg-[#FFDD00] hover:bg-[#ffe433] text-gray-900 text-xs font-bold transition-all hover:scale-102"
                            title="Support the developer"
                        >
                            <Coffee className="h-4 w-4 text-gray-900" />
                            <span className="hidden md:inline">Coffee</span>
                        </a>

                        {/* GitHub Link */}
                        <a
                            href="https://github.com/yashdhanani/pdf-toolkit-app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-9 flex items-center gap-1.5 px-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-bold transition-all"
                            title="GitHub Repository"
                        >
                            <Github className="h-4 w-4" />
                            <span className="hidden md:inline">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
