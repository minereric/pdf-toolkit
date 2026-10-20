import React from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';
import { useTranslation } from '../../i18n/LanguageContext.jsx';

/**
 * Vitamin Pop Reusable Drag-and-Drop file uploader component
 */
export const FileUploader = ({ onFilesAccepted, accept, multiple = false, text }) => {
    const { t } = useTranslation();
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: onFilesAccepted,
        accept,
        multiple
    });

    const displayText = text || t('fileUploader.defaultText');
    const multipleText = multiple ? t('fileUploader.multipleSupported') : t('fileUploader.singleFile');
    const formatsLabel = t('fileUploader.acceptedFormats');

    return (
        <div
            {...getRootProps()}
            className={`w-full p-8 sm:p-10 border-3 border-dashed rounded-3xl text-center cursor-pointer transition-all box-border select-none pop-shadow-sm
                ${isDragActive 
                    ? 'border-[#FF2E93] bg-[#FF2E93]/10 scale-[0.99] pop-shadow' 
                    : 'border-gray-900 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-[#00F0FF] hover:bg-[#00F0FF]/5 hover:-translate-y-1'}`}
        >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center pointer-events-none">
                <div className="p-4 bg-[#FFE600] text-gray-900 rounded-3xl border-2 border-gray-900 mb-3 pop-shadow-sm rotate-[-3deg]">
                    <UploadCloud className="w-9 h-9 stroke-[2.5]" />
                </div>
                <p className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-1">{displayText}</p>
                <p className="text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-300">
                    <span className="px-2 py-0.5 rounded-full bg-[#10E599]/30 text-emerald-800 dark:text-emerald-300 border border-gray-900">
                        {multipleText}
                    </span>
                </p>
                {accept && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 font-semibold">
                        {formatsLabel}: {Object.values(accept).flat().join(', ')}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FileUploader;
