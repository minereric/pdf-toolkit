import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import ToolCard from './ToolCard.jsx';
import { useTranslation } from '../../i18n/LanguageContext.jsx';

/**
 * Filterable Categorized Grid Layout for PDF Tools
 */
export const ToolGrid = ({ tools, onSelect, onResetFilters }) => {
    const { t } = useTranslation();

    if (tools.length === 0) {
        return (
            <div className="text-center py-16 px-4 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-3xl max-w-md mx-auto shadow-sm">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center text-gray-400">
                    <SearchX className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {t('toolGrid.noResultsTitle')}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                    {t('toolGrid.noResultsDesc')}
                </p>
                <button
                    onClick={onResetFilters}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer"
                >
                    <RotateCcw className="h-3.5 w-3.5" /> {t('toolGrid.showAllTools')}
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {tools.map(tool => (
                <ToolCard key={tool.slug} tool={tool} onSelect={onSelect} />
            ))}
        </div>
    );
};

export default ToolGrid;
