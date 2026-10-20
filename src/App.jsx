import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import Hero from './components/common/Hero.jsx';
import ToolGrid from './components/common/ToolGrid.jsx';
import MessageBox from './components/common/MessageBox.jsx';
import CommandPalette from './components/common/CommandPalette.jsx';
import { tools } from './config/tools.js';
import { loadPdfLibraries } from './utils/scriptLoader.js';
import { LanguageProvider, useTranslation } from './i18n/LanguageContext.jsx';

/**
 * PDF Toolkit Root Application Content
 */
const AppContent = () => {
    const [activeTool, setActiveTool] = useState(null);
    const [libsReady, setLibsReady] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
    const { t, getToolInfo } = useTranslation();

    // Theme Management (Light / Dark)
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('pdf_toolkit_theme');
        if (saved) return saved;
        return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('pdf_toolkit_theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    // Global Cmd+K / Ctrl+K keyboard shortcut
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setIsCommandPaletteOpen(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        loadPdfLibraries().then(() => {
            setLibsReady(true);
        });
    }, []);

    // Group tools by category for tab counts
    const toolsByCategory = useMemo(() => {
        const map = {
            organize: [],
            convert: [],
            security: [],
            ai: []
        };
        tools.forEach(t => {
            if (map[t.category]) {
                map[t.category].push(t);
            }
        });
        return map;
    }, []);

    // Filter tools based on category and search text (supports both English and Traditional Chinese)
    const filteredTools = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        return tools.filter(tool => {
            const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
            if (!matchesCategory) return false;
            if (!query) return true;

            const toolInfo = getToolInfo(tool.slug, tool);

            return (
                tool.name.toLowerCase().includes(query) ||
                (toolInfo.name && toolInfo.name.toLowerCase().includes(query)) ||
                tool.description.toLowerCase().includes(query) ||
                (toolInfo.description && toolInfo.description.toLowerCase().includes(query)) ||
                tool.slug.toLowerCase().includes(query) ||
                (tool.badge && tool.badge.toLowerCase().includes(query)) ||
                (toolInfo.badge && toolInfo.badge.toLowerCase().includes(query))
            );
        });
    }, [searchQuery, selectedCategory, getToolInfo]);

    const handleToolSelect = (slug) => {
        const tool = tools.find(t => t.slug === slug);
        if (tool) {
            setActiveTool(tool);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        setActiveTool(null);
    };

    const handleResetFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
    };

    const currentToolInfo = activeTool ? getToolInfo(activeTool.slug, activeTool) : null;

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0f1e] font-sans text-gray-900 dark:text-gray-100 antialiased selection:bg-[#FF2E93] selection:text-white transition-colors duration-200 bg-dot-pattern">
            {/* Global Spotlight Cmd+K Search Palette */}
            <CommandPalette
                isOpen={isCommandPaletteOpen}
                onClose={() => setIsCommandPaletteOpen(false)}
                onSelectTool={handleToolSelect}
            />

            {/* Pop Neo Header */}
            <Header 
                activeTool={activeTool} 
                onBack={handleBack} 
                theme={theme} 
                onToggleTheme={toggleTheme}
                onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            />

            {/* Main Content Area */}
            <main className="flex-1 container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl relative">
                {!activeTool ? (
                    <div>
                        {/* Hero Section with Search & Category Pills */}
                        <Hero
                            searchQuery={searchQuery}
                            onSearchChange={setSearchQuery}
                            selectedCategory={selectedCategory}
                            onCategorySelect={setSelectedCategory}
                            totalToolsCount={tools.length}
                            toolsByCategory={toolsByCategory}
                        />

                        {/* Filtered Tool Grid */}
                        <ToolGrid
                            tools={filteredTools}
                            onSelect={handleToolSelect}
                            onResetFilters={handleResetFilters}
                        />
                    </div>
                ) : (
                    /* Active Tool Workspace */
                    <div className="max-w-5xl mx-auto animate-in fade-in duration-200">
                        {/* Pop Neo Tool Header */}
                        <div className="text-center mb-8 relative">
                            {/* 有機形ツールアイコン (Organic Tool Icon) */}
                            <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-[#FFE600] text-gray-900 mb-4 border-2 border-gray-900 pop-shadow rotate-[-4deg] group-hover:rotate-0 transition-transform">
                                {React.createElement(activeTool.icon, { className: "h-8 w-8 stroke-[2.5]" })}
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                                {currentToolInfo?.name || activeTool.name}
                            </h2>
                            {/* 手繪下劃線 */}
                            <div className="w-24 h-2 mx-auto mt-1 rounded-full bg-[#FF2E93] border border-gray-900 pop-shadow-sm rotate-[-1deg]" />
                            <p className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-xl mx-auto font-medium">
                                {currentToolInfo?.description || activeTool.description}
                            </p>
                        </div>

                        {/* Tool Canvas / Workspace */}
                        <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-3xl border-2 border-gray-900 dark:border-gray-600 pop-shadow transition-colors duration-200">
                            {libsReady ? (
                                React.createElement(activeTool.component, { tool: activeTool })
                            ) : (
                                <MessageBox type="loading" message={t('app.loadingEngine')} />
                            )}
                        </div>
                    </div>
                )}
            </main>

            {/* Pop Neo Footer */}
            <Footer />
        </div>
    );
};

export const App = () => {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
};

export default App;
