import React, { useState, useEffect, useRef } from 'react';
import { Search, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { tools } from '../../config/tools.js';
import { useTranslation } from '../../i18n/LanguageContext.jsx';

/**
 * Vitamin Pop Spotlight-Style Cmd+K / Ctrl+K Command Palette
 */
export const CommandPalette = ({ isOpen, onClose, onSelectTool }) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const listRef = useRef(null);
    const { t, getToolInfo } = useTranslation();

    // Filter tools based on query (supports both English and Chinese matching)
    const filteredTools = React.useMemo(() => {
        const enriched = tools.map(tool => {
            const info = getToolInfo(tool.slug, tool);
            return {
                ...tool,
                displayName: info.name,
                displayDescription: info.description,
                displayBadge: info.badge,
            };
        });

        if (!query.trim()) return enriched.slice(0, 8); // Top 8 by default
        const q = query.toLowerCase().trim();
        return enriched.filter(t => 
            t.name.toLowerCase().includes(q) ||
            t.displayName.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            t.displayDescription.toLowerCase().includes(q) ||
            t.category.toLowerCase().includes(q) ||
            t.slug.toLowerCase().includes(q) ||
            (t.badge && t.badge.toLowerCase().includes(q)) ||
            (t.displayBadge && t.displayBadge.toLowerCase().includes(q))
        );
    }, [query, getToolInfo]);

    useEffect(() => {
        if (isOpen) {
            setQuery('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    // Handle Keyboard Navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredTools.length));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredTools.length) % Math.max(1, filteredTools.length));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredTools[selectedIndex]) {
                    onSelectTool(filteredTools[selectedIndex].slug);
                    onClose();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, selectedIndex, filteredTools, onSelectTool, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-100">
            {/* Backdrop click */}
            <div className="fixed inset-0" onClick={onClose} />

            <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-600 rounded-3xl pop-shadow-lg overflow-hidden z-10 animate-in zoom-in-95 duration-150">
                {/* Search Bar Input */}
                <div className="relative flex items-center px-5 py-4 border-b-2 border-gray-900 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <Search className="h-5 w-5 text-gray-900 dark:text-white mr-3 shrink-0 stroke-[2.5]" />
                    <input
                        ref={inputRef}
                        type="text"
                        id="palette-search-input"
                        name="command-palette-search"
                        aria-label="Search tools or type a command"
                        autoComplete="off"
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value);
                            setSelectedIndex(0);
                        }}
                        placeholder={t('commandPalette.placeholder')}
                        className="w-full bg-transparent text-sm sm:text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none font-bold"
                    />
                    {query ? (
                        <button onClick={() => setQuery('')} className="p-1 rounded-full bg-[#FF2E93] text-white hover:scale-110 transition-transform cursor-pointer">
                            <X className="h-3.5 w-3.5 stroke-[3]" />
                        </button>
                    ) : (
                        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-black text-gray-900 bg-[#FFE600] border border-gray-900 rounded-md">
                            ESC
                        </kbd>
                    )}
                </div>

                {/* Results List */}
                <div ref={listRef} className="max-h-[380px] overflow-y-auto p-3 space-y-1.5">
                    {filteredTools.length === 0 ? (
                        <div className="text-center py-12 text-sm text-gray-500 dark:text-gray-400 font-bold">
                            {t('commandPalette.noResults')} "{query}"
                        </div>
                    ) : (
                        filteredTools.map((tool, idx) => {
                            const IconComponent = tool.icon;
                            const isSelected = idx === selectedIndex;

                            return (
                                <button
                                    key={tool.slug}
                                    type="button"
                                    onClick={() => {
                                        onSelectTool(tool.slug);
                                        onClose();
                                    }}
                                    onMouseEnter={() => setSelectedIndex(idx)}
                                    className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all cursor-pointer border-2 ${
                                        isSelected 
                                            ? 'bg-[#00F0FF]/20 text-gray-900 dark:text-white border-gray-900 pop-shadow-sm -translate-y-0.5' 
                                            : 'border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className={`p-2 rounded-xl shrink-0 border-2 border-gray-900 ${
                                            isSelected ? 'bg-[#FF2E93] text-white' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                                        }`}>
                                            {IconComponent && <IconComponent className="h-4 w-4 stroke-[2.5]" />}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs sm:text-sm font-black text-gray-900 dark:text-white truncate">
                                                    {tool.displayName}
                                                </span>
                                                {tool.displayBadge && (
                                                    <span className="text-[10px] font-black px-2 py-0.2 rounded-full bg-[#FFE600] text-gray-900 border border-gray-900">
                                                        {tool.displayBadge}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate max-w-md font-medium">
                                                {tool.displayDescription}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 text-xs text-gray-400 shrink-0 ml-2">
                                        {isSelected && (
                                            <span className="inline-flex items-center gap-1 text-[11px] text-gray-900 dark:text-white font-black bg-[#FFE600] px-2 py-0.5 rounded-lg border border-gray-900">
                                                <span>{t('commandPalette.hintOpen')}</span>
                                                <CornerDownLeft className="h-3 w-3 stroke-[3]" />
                                            </span>
                                        )}
                                    </div>
                                </button>
                            );
                        })
                    )}
                </div>

                {/* Footer Tip */}
                <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/80 border-t-2 border-gray-900 dark:border-gray-700 flex items-center justify-between text-xs text-gray-600 dark:text-gray-300 font-bold">
                    <div className="flex items-center gap-3">
                        <span><kbd className="font-sans px-1.5 py-0.5 bg-white dark:bg-gray-700 border border-gray-900 rounded text-[10px]">↑</kbd> <kbd className="font-sans px-1.5 py-0.5 bg-white dark:bg-gray-700 border border-gray-900 rounded text-[10px]">↓</kbd> {t('commandPalette.hintNavigate')}</span>
                        <span><kbd className="font-sans px-1.5 py-0.5 bg-white dark:bg-gray-700 border border-gray-900 rounded text-[10px]">↵</kbd> {t('commandPalette.hintOpen')}</span>
                        <span><kbd className="font-sans px-1.5 py-0.5 bg-white dark:bg-gray-700 border border-gray-900 rounded text-[10px]">esc</kbd> {t('commandPalette.hintClose')}</span>
                    </div>
                    <span className="font-black text-[#FF2E93] flex items-center gap-1">
                        <Sparkles className="h-3.5 w-3.5 fill-[#FF2E93]" /> POP NEO
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
