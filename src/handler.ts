import {Context} from "./context";

/**
 * @name Handler
 * @description Request handler interface.
 * @interface
 */
export interface Handler {
    (ctx: Context): Promise<any>;
}

/**
 * @name defaultErrorHandler
 * @description Default error handler.
 * @param {Context} ctx
 * @private
 */
export const defaultErrorHandler: Handler = async (ctx: Context) => {
    if (ctx.errored()) {
        ctx.json(500, {"errors": ctx.errors()});
        ctx.abort();
    }
};

/**
 * @name defaultNoRouteHandler
 * @description Default no route (404) handler.
 * @param {Context} ctx
 * @private
 */
export const defaultNoRouteHandler: Handler = async (ctx: Context) => {
    ctx.json(404, {
        "errors": [
            "route not found",
        ],
    });
};