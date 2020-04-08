/**
 * @package fast
 * @module @lovemycity/fast
 * @description
 *  Fast http api server.
 * @copyright
 *  Simon Kamenetskii <simon@kamenetskii.ru>
 */
import {Server} from "./server";
import {MethodDelete, MethodGet, MethodOptions, MethodPost, MethodPut} from "./method";
import {statusText} from "./status";

export function fast(): Server {
    return new Server();
}

fast.statusText = statusText;

fast.MethodGet = MethodGet;
fast.MethodPost = MethodPost;
fast.MethodPut = MethodPut;
fast.MethodDelete = MethodDelete;
fast.MethodOptions = MethodOptions;



