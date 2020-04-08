export class Err extends Error {
    static wrap(err: Error, message: string): Err {
        return new Err(`${message}: ${err.message}`)
    }
    //
    // constructor(message: string) {
    //     super(message);
    // }

    toJSON(): any {
        return {
            message: this.message,
        };
    }
}
