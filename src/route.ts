import {Handler} from "./handler";

export class Route {
    readonly _regExp: RegExp;
    readonly _method: string;
    readonly _handler: Handler;

    constructor(method: string, path: string, handler: Handler) {
        this._method = method;
        this._regExp = Route.makeRegExp(path);
        this._handler = handler;
    }

    private static makeRegExp(path: string): RegExp {
        const p = path
            .replace(/(:[a-zA-Z0-9\-_]+)/g, '([a-z0-9\-_]+)');
        return new RegExp(`^${p}$`);
    }

    public method(): string {
        return this._method;
    }

    public get handler(): Handler {
        return this._handler;
    }

    public exec(path: string): RouteExecResult {
        const v = this._regExp.exec(path);
        console.log(v);
        return new RouteExecResult(false, new Map());
    }

    public test(path): boolean {
        return this._regExp.test(path);
    }
}

export class RouteExecResult {
    readonly match: boolean;
    readonly params: Map<string, string>;

    constructor(match: boolean, params: Map<string, string>) {

    }

}