"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusMessage = exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    // Informational responses (100–199)
    HttpStatus[HttpStatus["CONTINUE"] = 100] = "CONTINUE";
    HttpStatus[HttpStatus["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatus[HttpStatus["PROCESSING"] = 102] = "PROCESSING";
    HttpStatus[HttpStatus["EARLY_HINTS"] = 103] = "EARLY_HINTS";
    // Success (200–299)
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    HttpStatus[HttpStatus["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatus[HttpStatus["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus[HttpStatus["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatus[HttpStatus["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatus[HttpStatus["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    HttpStatus[HttpStatus["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    HttpStatus[HttpStatus["IM_USED"] = 226] = "IM_USED";
    // Redirection (300–399)
    HttpStatus[HttpStatus["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatus[HttpStatus["FOUND"] = 302] = "FOUND";
    HttpStatus[HttpStatus["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatus[HttpStatus["USE_PROXY"] = 305] = "USE_PROXY";
    HttpStatus[HttpStatus["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatus[HttpStatus["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    // Client errors (400–499)
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatus[HttpStatus["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatus[HttpStatus["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatus[HttpStatus["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatus[HttpStatus["CONFLICT"] = 409] = "CONFLICT";
    HttpStatus[HttpStatus["GONE"] = 410] = "GONE";
    HttpStatus[HttpStatus["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatus[HttpStatus["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatus[HttpStatus["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatus[HttpStatus["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatus[HttpStatus["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatus[HttpStatus["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
    HttpStatus[HttpStatus["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatus[HttpStatus["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
    HttpStatus[HttpStatus["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    HttpStatus[HttpStatus["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatus[HttpStatus["LOCKED"] = 423] = "LOCKED";
    HttpStatus[HttpStatus["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatus[HttpStatus["TOO_EARLY"] = 425] = "TOO_EARLY";
    HttpStatus[HttpStatus["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    HttpStatus[HttpStatus["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpStatus[HttpStatus["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatus[HttpStatus["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    HttpStatus[HttpStatus["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    // Server errors (500–599)
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatus[HttpStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatus[HttpStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatus[HttpStatus["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpStatus[HttpStatus["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    HttpStatus[HttpStatus["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HttpStatus[HttpStatus["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    HttpStatus[HttpStatus["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    HttpStatus[HttpStatus["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(HttpStatus || (exports.HttpStatus = HttpStatus = {}));
// Map of status messages
exports.HttpStatusMessage = {
    // Informational responses
    [HttpStatus.CONTINUE]: "Continue",
    [HttpStatus.SWITCHING_PROTOCOLS]: "Switching Protocols",
    [HttpStatus.PROCESSING]: "Processing",
    [HttpStatus.EARLY_HINTS]: "Early Hints",
    // Success
    [HttpStatus.OK]: "OK",
    [HttpStatus.CREATED]: "Created",
    [HttpStatus.ACCEPTED]: "Accepted",
    [HttpStatus.NON_AUTHORITATIVE_INFORMATION]: "Non-Authoritative Information",
    [HttpStatus.NO_CONTENT]: "No Content",
    [HttpStatus.RESET_CONTENT]: "Reset Content",
    [HttpStatus.PARTIAL_CONTENT]: "Partial Content",
    [HttpStatus.MULTI_STATUS]: "Multi-Status",
    [HttpStatus.ALREADY_REPORTED]: "Already Reported",
    [HttpStatus.IM_USED]: "IM Used",
    // Redirection
    [HttpStatus.MULTIPLE_CHOICES]: "Multiple Choices",
    [HttpStatus.MOVED_PERMANENTLY]: "Moved Permanently",
    [HttpStatus.FOUND]: "Found",
    [HttpStatus.SEE_OTHER]: "See Other",
    [HttpStatus.NOT_MODIFIED]: "Not Modified",
    [HttpStatus.USE_PROXY]: "Use Proxy",
    [HttpStatus.TEMPORARY_REDIRECT]: "Temporary Redirect",
    [HttpStatus.PERMANENT_REDIRECT]: "Permanent Redirect",
    // Client errors
    [HttpStatus.BAD_REQUEST]: "Bad Request",
    [HttpStatus.UNAUTHORIZED]: "Unauthorized",
    [HttpStatus.PAYMENT_REQUIRED]: "Payment Required",
    [HttpStatus.FORBIDDEN]: "Forbidden",
    [HttpStatus.NOT_FOUND]: "Not Found",
    [HttpStatus.METHOD_NOT_ALLOWED]: "Method Not Allowed",
    [HttpStatus.NOT_ACCEPTABLE]: "Not Acceptable",
    [HttpStatus.PROXY_AUTHENTICATION_REQUIRED]: "Proxy Authentication Required",
    [HttpStatus.REQUEST_TIMEOUT]: "Request Timeout",
    [HttpStatus.CONFLICT]: "Conflict",
    [HttpStatus.GONE]: "Gone",
    [HttpStatus.LENGTH_REQUIRED]: "Length Required",
    [HttpStatus.PRECONDITION_FAILED]: "Precondition Failed",
    [HttpStatus.PAYLOAD_TOO_LARGE]: "Payload Too Large",
    [HttpStatus.URI_TOO_LONG]: "URI Too Long",
    [HttpStatus.UNSUPPORTED_MEDIA_TYPE]: "Unsupported Media Type",
    [HttpStatus.RANGE_NOT_SATISFIABLE]: "Range Not Satisfiable",
    [HttpStatus.EXPECTATION_FAILED]: "Expectation Failed",
    [HttpStatus.IM_A_TEAPOT]: "I'm a teapot",
    [HttpStatus.MISDIRECTED_REQUEST]: "Misdirected Request",
    [HttpStatus.UNPROCESSABLE_ENTITY]: "Unprocessable Entity",
    [HttpStatus.LOCKED]: "Locked",
    [HttpStatus.FAILED_DEPENDENCY]: "Failed Dependency",
    [HttpStatus.TOO_EARLY]: "Too Early",
    [HttpStatus.UPGRADE_REQUIRED]: "Upgrade Required",
    [HttpStatus.PRECONDITION_REQUIRED]: "Precondition Required",
    [HttpStatus.TOO_MANY_REQUESTS]: "Too Many Requests",
    [HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE]: "Request Header Fields Too Large",
    [HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS]: "Unavailable For Legal Reasons",
    // Server errors
    [HttpStatus.INTERNAL_SERVER_ERROR]: "Internal Server Error",
    [HttpStatus.NOT_IMPLEMENTED]: "Not Implemented",
    [HttpStatus.BAD_GATEWAY]: "Bad Gateway",
    [HttpStatus.SERVICE_UNAVAILABLE]: "Service Unavailable",
    [HttpStatus.GATEWAY_TIMEOUT]: "Gateway Timeout",
    [HttpStatus.HTTP_VERSION_NOT_SUPPORTED]: "HTTP Version Not Supported",
    [HttpStatus.VARIANT_ALSO_NEGOTIATES]: "Variant Also Negotiates",
    [HttpStatus.INSUFFICIENT_STORAGE]: "Insufficient Storage",
    [HttpStatus.LOOP_DETECTED]: "Loop Detected",
    [HttpStatus.NOT_EXTENDED]: "Not Extended",
    [HttpStatus.NETWORK_AUTHENTICATION_REQUIRED]: "Network Authentication Required",
};
