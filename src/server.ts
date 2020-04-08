import {createServer, IncomingMessage, Server as HttpServer, ServerResponse} from "http";
import {Route} from "./route";
import {defaultErrorHandler, defaultNoRouteHandler, Handler} from "./handler";
import {DefaultLogger, Logger} from "./logger";
import {version} from "../package.json";
import {Context} from "./context";
import {MethodDelete, MethodGet, MethodOptions, MethodPost, MethodPut} from "./method";

export class Server {
    readonly _server: HttpServer = createServer(this._handler.bind(this));
    readonly _requestHandlers: Route[] = [];
    readonly _middlewareHandlers: Handler[] = [];

    private _errorHandler: Handler = defaultErrorHandler;
    private _noRouteHandler: Handler = defaultNoRouteHandler;
    private _logger: Logger = new DefaultLogger();

    private async _handler(request: IncomingMessage, response: ServerResponse) {
        const ctx = new Context(request, response, this._logger);
        ctx.setHeader('server', `fast ${version}`);
        ctx.setHeader('content-type', 'application/json');
        try {
            console.log('connection', this);
            await this._execMiddleware(ctx);
            const route = this.getRoute(ctx);
            console.log('route', route);
            if (route) {
                const res = await route.handler(ctx);
                if (res) {
                    if (!ctx.response().writableEnded) {
                        ctx.json(200, res);
                    } else {
                        console.error('response ended, cannot write');
                    }
                } else {
                    if (!ctx.response().writableEnded) {
                        ctx.response().end();
                    }
                }
            } else {
                this._noRouteHandler(ctx);
            }
        } catch (err) {
            ctx.error(err);
            console.error(err);
            await this._errorHandler(ctx);
            return;
        }
        if (ctx.aborted()) {
            try {
                await this._errorHandler(ctx);
            } catch (err) {
                console.error(err);
            }
            return;
        }
    }

    private async _execMiddleware(ctx: Context) {
        for (let i = 0; i < this._middlewareHandlers.length; i++) {
            console.log(`middleware ${i}`);
            await this._middlewareHandlers[i](ctx);
        }
    }

    private getRoute(ctx: Context): Route | undefined {
        return this._requestHandlers
            .find(h => {
                if (!ctx.isMethod(h.method())) {
                    return false;
                }
                return h.test(ctx.path());
            });
    }

    public use(handler: Handler): Server {
        this._middlewareHandlers.push(handler);
        return this;
    }

    public handle(method: string, path: string, handler: Handler): Server {
        this._logger.log(`registered ${method} handler on ${path}`);
        this._requestHandlers.push(new Route(method, path, handler));
        return this;
    }

    public handleNoRoute(handler: Handler): Server {
        this._noRouteHandler = handler;
        return this;
    }

    public handleError(handler: Handler): Server {
        this._errorHandler = handler;
        return this;
    }

    public get(path: string, handler: Handler): Server {
        return this.handle(MethodGet, path, handler);
    }

    public post(path: string, handler: Handler): Server {
        return this.handle(MethodPost, path, handler);
    }

    public put(path: string, handler: Handler): Server {
        return this.handle(MethodPut, path, handler);
    }

    public delete(path: string, handler: Handler): Server {
        return this.handle(MethodDelete, path, handler);
    }

    public options(path: string, handler: Handler): Server {
        return this.handle(MethodOptions, path, handler);
    }

    public listen(port = 7000, hostname?): void {
        this._logger.log(`starting http server on port ${port}`);
        this._server.listen(port, hostname);
    }

    public logger(logger: Logger): Server {
        this._logger = logger;
        return this;
    }

}