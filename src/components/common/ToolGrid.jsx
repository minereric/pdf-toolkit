import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import ToolCard from './ToolCard.jsx';
import { useTranslation } from '../../i18n/LanguageContext.jsx';

/**
 * Vitamin Pop Filterable Tool Grid
 */
export const ToolGrid = ({ tools, onSelect, onResetFilters }) => {
    const { t } = useTranslation();

    if (tools.length === 0) {
        return (
            <div className="text-center py-16 px-6 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-600 rounded-3xl max-w-md mx-auto pop-shadow">
                <div className="p-4 bg-[#FFE600] rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-gray-900 pop-shadow-sm rotate-6">
                    <SearchX className="h-8 w-8 text-gray-900 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                    {t('toolGrid.noResultsTitle')}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-6 font-medium">
                    {t('toolGrid.noResultsDesc')}
                </p>
                <button
                    onClick={onResetFilters}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF2E93] hover:bg-[#ff1a88] text-white rounded-2xl text-xs font-black border-2 border-gray-900 pop-shadow-sm transition-all hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                >
                    <RotateCcw className="h-4 w-4 stroke-[2.5]" /> {t('toolGrid.showAllTools')}
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map(tool => (
                <ToolCard key={tool.slug} tool={tool} onSelect={onSelect} />
            ))}
        </div>
    );
};

export default ToolGrid;
