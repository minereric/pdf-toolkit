import React from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';
import { useTranslation } from '../../i18n/LanguageContext.jsx';

/**
 * Reusable Drag-and-Drop file uploader component using react-dropzone
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
            className={`w-full p-8 border-2 border-dashed rounded-xl text-center cursor-pointer transition-all box-border select-none
                ${isDragActive ? 'border-blue-500 bg-blue-50/70 scale-[0.99]' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50/70'}`}
        >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center pointer-events-none">
                <div className="p-3 bg-blue-50 rounded-full mb-3 text-blue-500">
                    <UploadCloud className="w-8 h-8" />
                </div>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{displayText}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {multipleText}
                </p>
                {accept && (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                        {formatsLabel}: {Object.values(accept).flat().join(', ')}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FileUploader;
