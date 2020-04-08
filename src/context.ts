import {IncomingMessage, ServerResponse} from "http";
import {UrlObject} from "url";
import {Logger} from "./logger";
import {Err} from "./error";

const {parse} = require('url');

export class Context {

    readonly _request: IncomingMessage;
    readonly _response: ServerResponse;
    readonly _errors: Err[] = [];
    readonly _logger: Logger;

    private _aborted: boolean = false;
    private _url: UrlObject | undefined;

    constructor(request: IncomingMessage, response: ServerResponse, logger: Logger) {
        this._request = request;
        this._response = response;
        this._logger = logger;
        this._url = parse(request.url);
    }

    public request(): IncomingMessage {
        return this._request;
    }

    public response(): ServerResponse {
        return this._response;
    }

    public logger(): Logger {
        return this._logger;
    }

    public abort() {
        this._aborted = true;
    }

    public aborted() {
        return !!this._aborted;
    }

    public error(err) {
        if (err instanceof Err) {
            this._errors.push(err);
        } else {
            this._errors.push(new Err(err))
        }
    }

    public errored() {
        return this._errors.length > 0;
    }

    public errors() {
        return this._errors.slice(0);
    }

    public json(status: number, data: any) {
        this.response().statusCode = status;
        this.response().end(JSON.stringify(data));
        this.logger().log(status, this.path());
    }

    public method() {
        return this._request.method;
    }

    public isMethod(method: string) {
        return this.method() === method;
    }

    public setHeader(name: string, value: string) {
        this.response().setHeader(name, value);
    }

    public getHeader(name: string): string | string[] {
        return this.request().headers[name.toLowerCase()];
    }

    public setCookie() {
    }

    public getCookie() {
    }

    public url(): UrlObject {
        if (!this._url) {
            this._url = parse(this._request.url);
        }
        return this._url;
    }

    public path(): string {
        return this.url().pathname;
    }

    public toJSON() {
        return {
            method: this.method(),
            path: this.path(),
        };
    }
}
