import { DEFAULT_DOWNLOAD_FILE_TRUSTED_CONTENT_TYPES } from './constants';
import { EMimeTypes } from './enum';
import { IRequestProperty } from './interfaces';

/** Метод безопасного вызова revokeObjectURL */
const deleteBlobURL = (downloadURL: string) => {
    setTimeout(() => {
        window.URL.revokeObjectURL(downloadURL);
    }, 0);
};

export const downloadFile = async <TData = unknown>(
    property: IRequestProperty,
    trustedContentType: EMimeTypes[] = DEFAULT_DOWNLOAD_FILE_TRUSTED_CONTENT_TYPES
): Promise<void> => {
    const requestProperty = {
        ...property,
        config: {
            responseType: 'blob',
            ...(property?.config || {}),
        },
    };
};
