export class DefaultLogger
    implements Logger {
    public log(...args: any[]): void {
        console.log(...DefaultLogger.args(...args));
    }

    public error(...args: Error[]): void {
        console.error(...DefaultLogger.args(...args));
    }

    private static args(...args): any[] {
        return [
            DefaultLogger.date(),
            '[fast]',
            ...args,
        ]
    }

    private static date(): string {
        const d = new Date();
        return d.toUTCString();
    }
}

export interface Logger {
    log(...args: any[]): void

    error(...args: Error[]): void
}

module.exports = {
    DefaultLogger,
};