import React from 'react';
import { Github, Sparkles, Heart } from 'lucide-react';
import { useTranslation } from '../../i18n/LanguageContext.jsx';

/**
 * Vitamin Pop & Digital Neo Application Footer
 */
export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="relative mt-24 py-12 border-t-2 border-gray-900 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-200 overflow-hidden">
            {/* 裝飾性有機雲朵/氣泡微背景 */}
            <div className="absolute -bottom-10 left-10 w-40 h-40 bg-[#00F0FF]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-10 right-10 w-44 h-44 bg-[#FF2E93]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand and security note */}
                    <div className="space-y-2 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2.5">
                            <span className="font-black text-gray-900 dark:text-white text-base tracking-tight flex items-center gap-1.5">
                                <Sparkles className="h-4 w-4 text-[#FF2E93] fill-[#FF2E93]" />
                                {t('footer.studioTitle')}
                            </span>
                            <span className="text-xs bg-[#FFE600] text-gray-900 px-2.5 py-0.5 rounded-full font-black border border-gray-900 pop-shadow-sm rotate-[2deg]">
                                v2.0 POP
                            </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300 max-w-md font-medium leading-relaxed">
                            {t('footer.privacyNote')}
                        </p>
                    </div>

                    {/* Developer Github (minereric) & SNS Badge */}
                    <div className="flex flex-col items-center md:items-end gap-3 text-xs">
                        <div className="flex items-center gap-3">
                            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-gray-500 dark:text-gray-400">
                                Crafted with <Heart className="h-3.5 w-3.5 text-[#FF2E93] fill-[#FF2E93]" /> for Community
                            </span>

                            {/* GitHub (minereric) */}
                            <a
                                href="https://github.com/minereric"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-600 text-gray-900 dark:text-white font-black text-xs pop-shadow hover:-translate-y-1 hover:bg-[#00F0FF] hover:text-gray-900 dark:hover:bg-[#FF2E93] dark:hover:text-white transition-all cursor-pointer"
                                title="Visit minereric on GitHub"
                            >
                                <Github className="h-4 w-4 stroke-[2.5]" />
                                <span>github.com/minereric</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
