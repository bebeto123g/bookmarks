// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

export enum EMimeTypes {
    AAC = 'audio/aac',
    ABW = 'application/x-abiword',
    ARC = 'application/x-freearc',
    AVI = 'video/x-msvideo',
    AZW = 'application/vnd.amazon.ebook',
    BIN = 'application/octet-stream',
    BMP = 'image/bmp',
    BZ = 'application/x-bzip',
    BZ2 = 'application/x-bzip2',
    CSH = 'application/x-csh',
    CSS = 'text/css',
    CSV = 'text/csv',
    DOC = 'application/msword',
    DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    EOT = 'application/vnd.ms-fontobject',
    EPUB = 'application/epub+zip',
    GZ = 'application/gzip',
    GIF = 'image/gif',
    HTM = 'text/html',
    HTML = 'text/html',
    ICO = 'image/vnd.microsoft.icon',
    ICS = 'text/calendar',
    JAR = 'application/java-archive',
    JPEG = '.jpg',
    JS = 'text/javascript',
    JSON = 'application/json',
    JSONLD = 'application/ld+json',
    MID = '.midi',
    MJS = 'text/javascript',
    MP3 = 'audio/mpeg',
    MPEG = 'video/mpeg',
    MPKG = 'application/vnd.apple.installer+xml',
    ODP = 'application/vnd.oasis.opendocument.presentation',
    ODS = 'application/vnd.oasis.opendocument.spreadsheet',
    ODT = 'application/vnd.oasis.opendocument.text',
    OGA = 'audio/ogg',
    OGV = 'video/ogg',
    OGX = 'application/ogg',
    OPUS = 'audio/opus',
    OTF = 'font/otf',
    PNG = 'image/png',
    PDF = 'application/pdf',
    PHP = 'application/php',
    PPT = 'application/vnd.ms-powerpoint',
    PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    RAR = 'application/vnd.rar',
    RTF = 'application/rtf',
    SH = 'application/x-sh',
    SVG = 'image/svg+xml',
    SWF = 'application/x-shockwave-flash',
    TAR = 'application/x-tar',
    TIF = 'image/tiff',
    TIFF = 'image/tiff',
    TS = 'video/mp2t',
    TTF = 'font/ttf',
    TXT = 'text/plain',
    VSD = 'application/vnd.visio',
    WAV = 'audio/wav',
    WEBA = 'audio/webm',
    WEBM = 'video/webm',
    WEBP = 'image/webp',
    WOFF = 'font/woff',
    WOFF2 = 'font/woff2',
    XHTML = 'application/xhtml+xml',
    XLS = 'application/vnd.ms-excel',
    XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    XML = 'XML',
    AXML = 'application/xml',
    XUL = 'application/vnd.mozilla.xul+xml',
    ZIP = 'application/zip',
    V3GP = 'video/3gpp',
    V3G2 = 'video/3gpp2',
    X7Z = 'application/x-7z-compressed',
}

// or as object
export const MIME_TYPES = {
    'aac': 'audio/aac',
    'abw': 'application/x-abiword',
    'arc': 'application/x-freearc',
    'avi': 'video/x-msvideo',
    'azw': 'application/vnd.amazon.ebook',
    'bin': 'application/octet-stream',
    'bmp': 'image/bmp',
    'bz': 'application/x-bzip',
    'bz2': 'application/x-bzip2',
    'csh': 'application/x-csh',
    'css': 'text/css',
    'csv': 'text/csv',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'eot': 'application/vnd.ms-fontobject',
    'epub': 'application/epub+zip',
    'gz': 'application/gzip',
    'gif': 'image/gif',
    'htm': 'text/html',
    'html': 'text/html',
    'ico': 'image/vnd.microsoft.icon',
    'ics': 'text/calendar',
    'jar': 'application/java-archive',
    'jpeg': '.jpg',
    'js': 'text/javascript',
    'json': 'application/json',
    'jsonld': 'application/ld+json',
    'mid': '.midi',
    'mjs': 'text/javascript',
    'mp3': 'audio/mpeg',
    'mpeg': 'video/mpeg',
    'mpkg': 'application/vnd.apple.installer+xml',
    'odp': 'application/vnd.oasis.opendocument.presentation',
    'ods': 'application/vnd.oasis.opendocument.spreadsheet',
    'odt': 'application/vnd.oasis.opendocument.text',
    'oga': 'audio/ogg',
    'ogv': 'video/ogg',
    'ogx': 'application/ogg',
    'opus': 'audio/opus',
    'otf': 'font/otf',
    'png': 'image/png',
    'pdf': 'application/pdf',
    'php': 'application/php',
    'ppt': 'application/vnd.ms-powerpoint',
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'rar': 'application/vnd.rar',
    'rtf': 'application/rtf',
    'sh': 'application/x-sh',
    'svg': 'image/svg+xml',
    'swf': 'application/x-shockwave-flash',
    'tar': 'application/x-tar',
    'tif': 'image/tiff',
    'tiff': 'image/tiff',
    'ts': 'video/mp2t',
    'ttf': 'font/ttf',
    'txt': 'text/plain',
    'vsd': 'application/vnd.visio',
    'wav': 'audio/wav',
    'weba': 'audio/webm',
    'webm': 'video/webm',
    'webp': 'image/webp',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'xhtml': 'application/xhtml+xml',
    'xls': 'application/vnd.ms-excel',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'xml': 'XML',
    'xul': 'application/vnd.mozilla.xul+xml',
    'zip': 'application/zip',
    '3gp': 'video/3gpp',
    '3g2': 'video/3gpp2',
    '7z': 'application/x-7z-compressed',
};