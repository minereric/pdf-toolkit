import React from 'react';
import { useTranslation } from '../../i18n/LanguageContext.jsx';

// ビタミン・ポップカラーパレット (Vitamin Pop Palette)
const categoryPalette = {
    organize: {
        bg: 'bg-[#00F0FF]/15 text-[#0891b2] dark:text-[#00F0FF]',
        badge: 'bg-[#00F0FF] text-gray-900 border-gray-900',
        hoverBorder: 'hover:border-[#00F0FF]'
    },
    convert: {
        bg: 'bg-[#FFE600]/20 text-[#b45309] dark:text-[#FFE600]',
        badge: 'bg-[#FFE600] text-gray-900 border-gray-900',
        hoverBorder: 'hover:border-[#FFE600]'
    },
    security: {
        bg: 'bg-[#10E599]/20 text-[#059669] dark:text-[#10E599]',
        badge: 'bg-[#10E599] text-gray-900 border-gray-900',
        hoverBorder: 'hover:border-[#10E599]'
    },
    ai: {
        bg: 'bg-[#8B5CF6]/20 text-[#7C3AED] dark:text-[#C084FC]',
        badge: 'bg-[#8B5CF6] text-white border-gray-900',
        hoverBorder: 'hover:border-[#8B5CF6]'
    },
    default: {
        bg: 'bg-[#FF2E93]/15 text-[#FF2E93]',
        badge: 'bg-[#FF2E93] text-white border-gray-900',
        hoverBorder: 'hover:border-[#FF2E93]'
    }
};

/**
 * Vitamin Pop & Digital Neo Tool Card Component
 * Style: ステッカー・グリッド (Sticker Grid)
 */
export const ToolCard = ({ tool, onSelect }) => {
    const { getToolInfo } = useTranslation();
    const info = getToolInfo(tool.slug, tool);

    const IconComponent = tool.icon;
    const palette = categoryPalette[tool.category] || categoryPalette.default;
    const badgeText = info.badge || tool.badge;

    return (
        <button
            onClick={() => onSelect(tool.slug)}
            className="flex flex-col text-left p-6 bg-white dark:bg-gray-800 rounded-3xl border-2 border-gray-900 dark:border-gray-600 pop-shadow hover:-translate-y-1.5 hover:rotate-[-0.6deg] hover:shadow-[6px_6px_0px_#0f172a] dark:hover:shadow-[6px_6px_0px_#00F0FF] transition-all duration-200 group w-full cursor-pointer relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#FF2E93]/20"
        >
            {/* Top Row: Icon + Sticker Badge */}
            <div className="flex items-center justify-between w-full mb-4">
                <div className={`p-3.5 rounded-2xl border-2 border-gray-900 ${palette.bg} group-hover:bg-[#FF2E93] group-hover:text-white transition-all duration-200 pop-shadow-sm group-hover:scale-110 group-hover:rotate-6`}>
                    {IconComponent && <IconComponent className="h-6 w-6 stroke-[2.5]" />}
                </div>

                {badgeText && (
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-gray-900 rotate-[3deg] group-hover:rotate-0 transition-transform pop-shadow-sm ${palette.badge}`}>
                        {badgeText}
                    </span>
                )}
            </div>

            {/* Title & Description */}
            <h3 className="text-base font-black text-gray-900 dark:text-white mb-2 group-hover:text-[#FF2E93] dark:group-hover:text-[#00F0FF] transition-colors flex items-center justify-between">
                <span>{info.name}</span>
                <span className="h-6 w-6 rounded-full bg-[#FFE600] text-gray-900 border border-gray-900 text-xs font-black flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                    →
                </span>
            </h3>

            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 font-medium">
                {info.description}
            </p>
        </button>
    );
};

export default ToolCard;
