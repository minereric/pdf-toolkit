import React from 'react';
import { Search, Sparkles, FolderKanban, ArrowLeftRight, ShieldCheck, Cpu, X, Star } from 'lucide-react';
import { categories } from '../../config/categories.js';
import { useTranslation } from '../../i18n/LanguageContext.jsx';

const categoryConfig = {
    all: { icon: Sparkles, color: 'bg-[#FF2E93] text-white', border: 'border-gray-900' },
    organize: { icon: FolderKanban, color: 'bg-[#00F0FF] text-gray-900', border: 'border-gray-900' },
    convert: { icon: ArrowLeftRight, color: 'bg-[#FFE600] text-gray-900', border: 'border-gray-900' },
    security: { icon: ShieldCheck, color: 'bg-[#10E599] text-gray-900', border: 'border-gray-900' },
    ai: { icon: Cpu, color: 'bg-[#8B5CF6] text-white', border: 'border-gray-900' }
};

/**
 * Vitamin Pop & Digital Neo Hero Component
 * Style: ビタミン・ポップ / デジタル・ネオ (タイトル・コンポジション)
 */
export const Hero = ({ 
    searchQuery, 
    onSearchChange, 
    selectedCategory, 
    onCategorySelect,
    totalToolsCount,
    toolsByCategory
}) => {
    const { t, getCategoryLabel } = useTranslation();

    return (
        <div className="relative text-center max-w-4xl mx-auto mb-14 pt-6">
            {/* 裝飾性 POP 小星芒與浮動小物件 */}
            <div className="absolute -top-2 left-8 text-[#FFE600] animate-bounce pointer-events-none hidden sm:block">
                <Star className="h-6 w-6 fill-[#FFE600] stroke-gray-900 stroke-[2]" />
            </div>
            <div className="absolute top-12 right-6 text-[#FF2E93] pointer-events-none hidden sm:block rotate-12">
                <Sparkles className="h-7 w-7 fill-[#FF2E93] stroke-gray-900 stroke-[2]" />
            </div>

            {/* 有機形狀標題容器 (Title Composition Cloud Container) */}
            <div className="relative inline-block mx-auto mb-6 px-6 sm:px-10 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 border-2 border-gray-900 dark:border-gray-600 pop-shadow sticker-tilt-1 backdrop-blur-sm">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-gray-900 dark:text-white">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-[#10E599] border border-gray-900 animate-pulse" />
                    <span>{t('hero.badge')}</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#FFE600] text-gray-900 text-[10px] font-black border border-gray-900">
                        100% PRIVATE
                    </span>
                </div>
            </div>

            {/* 大膽インパクトのメイン見出し */}
            <div className="relative mb-5">
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                    {t('hero.titlePrefix')}{' '}
                    <span className="relative inline-block px-3 py-1 bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] bg-clip-text text-transparent">
                        {t('hero.titleHighlight')}
                    </span>
                </h1>
                {/* 手繪風彩色下劃波浪線 */}
                <div className="w-48 sm:w-64 h-2.5 mx-auto mt-1 rounded-full bg-[#FFE600] border border-gray-900 pop-shadow-sm rotate-[-1deg]" />
            </div>

            <p className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-bold leading-relaxed px-4">
                {t('hero.description')}
            </p>

            {/* Neo-Pop 検索バー (Search Bar) */}
            <div className="mt-8 max-w-xl mx-auto relative px-4">
                <div className="relative flex items-center bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-600 rounded-3xl pop-shadow transition-all hover:-translate-y-0.5 focus-within:-translate-y-1 focus-within:shadow-[6px_6px_0px_#FF2E93]">
                    <Search className="absolute left-4.5 h-5 w-5 text-gray-900 dark:text-white pointer-events-none stroke-[2.5]" />
                    <input
                        type="text"
                        id="hero-search-input"
                        name="search"
                        aria-label="Search any PDF tool"
                        autoComplete="off"
                        value={searchQuery}
                        onChange={e => onSearchChange(e.target.value)}
                        placeholder={t('hero.searchPlaceholder')}
                        className="w-full pl-12 pr-20 py-4 bg-transparent rounded-3xl text-sm sm:text-base font-bold text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none"
                    />
                    <div className="absolute right-3.5 flex items-center gap-1.5">
                        {searchQuery ? (
                            <button
                                onClick={() => onSearchChange('')}
                                className="p-1.5 rounded-full bg-[#FF2E93] text-white border border-gray-900 hover:scale-110 transition-transform cursor-pointer"
                                aria-label="Clear search"
                            >
                                <X className="h-3.5 w-3.5 stroke-[3]" />
                            </button>
                        ) : (
                            <kbd className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-black text-gray-900 bg-[#FFE600] border border-gray-900 rounded-lg pop-shadow-sm">
                                Ctrl+K
                            </kbd>
                        )}
                    </div>
                </div>
            </div>

            {/* カラフル・ステッカー分類タブ (Category Filter Sticker Tabs) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 px-2">
                {categories.map(cat => {
                    const cfg = categoryConfig[cat.id] || categoryConfig.all;
                    const IconComponent = cfg.icon;
                    const isSelected = selectedCategory === cat.id;
                    const count = cat.id === 'all' 
                        ? totalToolsCount 
                        : (toolsByCategory[cat.id]?.length || 0);
                    const label = getCategoryLabel(cat.id, cat.label);

                    return (
                        <button
                            key={cat.id}
                            type="button"
                            onClick={() => onCategorySelect(cat.id)}
                            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 border-2 border-gray-900 cursor-pointer ${
                                isSelected
                                    ? `${cfg.color} pop-shadow -translate-y-1 scale-105 rotate-[-1deg]`
                                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-0.5'
                            }`}
                        >
                            <IconComponent className={`h-4 w-4 stroke-[2.5]`} />
                            <span>{label}</span>
                            <span className={`text-[11px] px-2 py-0.2 rounded-full font-black border border-gray-900 ${
                                isSelected ? 'bg-white text-gray-900' : 'bg-[#f1f5f9] dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                            }`}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Hero;
