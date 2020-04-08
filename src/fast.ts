import {Server} from "./server";
import {MethodDelete, MethodGet, MethodOptions, MethodPost, MethodPut} from "./method";
import {statusText} from "./status";

/**
 * @name fast
 * @description Main library entry point.
 * @returns {Server}
 * @public
 */
export function fast(): Server {
    return new Server();
}

fast.statusText = statusText;

fast.MethodGet = MethodGet;
fast.MethodPost = MethodPost;
fast.MethodPut = MethodPut;
fast.MethodDelete = MethodDelete;
fast.MethodOptions = MethodOptions;



