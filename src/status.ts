export const StatusContinue = 100;
export const StatusSwitchingProtocols = 101;
export const StatusProcessing = 102;
export const StatusEarlyHints = 103;

export const StatusOK = 200;
export const StatusCreated = 201;
export const StatusAccepted = 202;
export const StatusNonAuthoritativeInfo = 203;
export const StatusNoContent = 204;
export const StatusResetContent = 205;
export const StatusPartialContent = 206;
export const StatusMultiStatus = 207;
export const StatusAlreadyReported = 208;
export const StatusIMUsed = 226;

export const StatusMultipleChoices = 300;
export const StatusMovedPermanently = 301;
export const StatusFound = 302;
export const StatusSeeOther = 303;
export const StatusNotModified = 304;
export const StatusUseProxy = 305;
export const StatusTemporaryRedirect = 307;
export const StatusPermanentRedirect = 308;

export const StatusBadRequest = 400;
export const StatusUnauthorized = 401;
export const StatusPaymentRequired = 402;
export const StatusForbidden = 403;
export const StatusNotFound = 404;
export const StatusMethodNotAllowed = 405;
export const StatusNotAcceptable = 406;
export const StatusProxyAuthRequired = 407;
export const StatusRequestTimeout = 408;
export const StatusConflict = 409;
export const StatusGone = 410;
export const StatusLengthRequired = 411;
export const StatusPreconditionFailed = 412;
export const StatusRequestEntityTooLarge = 413;
export const StatusRequestURITooLong = 414;
export const StatusUnsupportedMediaType = 415;
export const StatusRequestedRangeNotSatisfiable = 416;
export const StatusExpectationFailed = 417;
export const StatusTeapot = 418;
export const StatusMisdirectedRequest = 421;
export const StatusUnprocessableEntity = 422;
export const StatusLocked = 423;
export const StatusFailedDependency = 424;
export const StatusTooEarly = 425;
export const StatusUpgradeRequired = 426;
export const StatusPreconditionRequired = 428;
export const StatusTooManyRequests = 429;
export const StatusRequestHeaderFieldsTooLarge = 431;
export const StatusUnavailableForLegalReasons = 451;

export const StatusInternalServerError = 500;
export const StatusNotImplemented = 501;
export const StatusBadGateway = 502;
export const StatusServiceUnavailable = 503;
export const StatusGatewayTimeout = 504;
export const StatusHTTPVersionNotSupported = 505;
export const StatusVariantAlsoNegotiates = 506;
export const StatusInsufficientStorage = 507;
export const StatusLoopDetected = 508;
export const StatusNotExtended = 510;
export const StatusNetworkAuthenticationRequired = 511;

const text = {
    StatusContinue: "Continue",
    StatusSwitchingProtocols: "Switching Protocols",
    StatusProcessing: "Processing",
    StatusEarlyHints: "Early Hints",

    StatusOK: "OK",
    StatusCreated: "Created",
    StatusAccepted: "Accepted",
    StatusNonAuthoritativeInfo: "Non-Authoritative Information",
    StatusNoContent: "No Content",
    StatusResetContent: "Reset Content",
    StatusPartialContent: "Partial Content",
    StatusMultiStatus: "Multi-Status",
    StatusAlreadyReported: "Already Reported",
    StatusIMUsed: "IM Used",

    StatusMultipleChoices: "Multiple Choices",
    StatusMovedPermanently: "Moved Permanently",
    StatusFound: "Found",
    StatusSeeOther: "See Other",
    StatusNotModified: "Not Modified",
    StatusUseProxy: "Use Proxy",
    StatusTemporaryRedirect: "Temporary Redirect",
    StatusPermanentRedirect: "Permanent Redirect",

    StatusBadRequest: "Bad Request",
    StatusUnauthorized: "Unauthorized",
    StatusPaymentRequired: "Payment Required",
    StatusForbidden: "Forbidden",
    StatusNotFound: "Not Found",
    StatusMethodNotAllowed: "Method Not Allowed",
    StatusNotAcceptable: "Not Acceptable",
    StatusProxyAuthRequired: "Proxy Authentication Required",
    StatusRequestTimeout: "Request Timeout",
    StatusConflict: "Conflict",
    StatusGone: "Gone",
    StatusLengthRequired: "Length Required",
    StatusPreconditionFailed: "Precondition Failed",
    StatusRequestEntityTooLarge: "Request Entity Too Large",
    StatusRequestURITooLong: "Request URI Too Long",
    StatusUnsupportedMediaType: "Unsupported Media Type",
    StatusRequestedRangeNotSatisfiable: "Requested Range Not Satisfiable",
    StatusExpectationFailed: "Expectation Failed",
    StatusTeapot: "I'm a teapot",
    StatusMisdirectedRequest: "Misdirected Request",
    StatusUnprocessableEntity: "Unprocessable Entity",
    StatusLocked: "Locked",
    StatusFailedDependency: "Failed Dependency",
    StatusTooEarly: "Too Early",
    StatusUpgradeRequired: "Upgrade Required",
    StatusPreconditionRequired: "Precondition Required",
    StatusTooManyRequests: "Too Many Requests",
    StatusRequestHeaderFieldsTooLarge: "Request Header Fields Too Large",
    StatusUnavailableForLegalReasons: "Unavailable For Legal Reasons",

    StatusInternalServerError: "Internal Server Error",
    StatusNotImplemented: "Not Implemented",
    StatusBadGateway: "Bad Gateway",
    StatusServiceUnavailable: "Service Unavailable",
    StatusGatewayTimeout: "Gateway Timeout",
    StatusHTTPVersionNotSupported: "HTTP Version Not Supported",
    StatusVariantAlsoNegotiates: "Variant Also Negotiates",
    StatusInsufficientStorage: "Insufficient Storage",
    StatusLoopDetected: "Loop Detected",
    StatusNotExtended: "Not Extended",
    StatusNetworkAuthenticationRequired: "Network Authentication Required",
};

/**
 * @name statusText
 * @description Returns http status as text
 * @param {number} status
 * @returns string
 * @throws Error
 * @public
 */
export function statusText(status: number): string {
    if (status in text) {
        return text[status];
    }
    throw new Error(`invalid status ${status}`);
}
