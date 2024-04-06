import { EMimeTypes } from './enum';

export const DEFAULT_DOWNLOAD_FILE_TRUSTED_CONTENT_TYPES: EMimeTypes[] = [
    /** Документы */
    EMimeTypes.AXML,
    EMimeTypes.DOC,
    EMimeTypes.DOCX,
    EMimeTypes.XLS,
    EMimeTypes.XLSX,
    EMimeTypes.TXT,
    EMimeTypes.PDF,
    EMimeTypes.PPT,
    EMimeTypes.PPTX,

    /** Картинки */
    EMimeTypes.PNG,
    EMimeTypes.JPEG,
    EMimeTypes.GIF,
];
