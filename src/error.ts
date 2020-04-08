class Err extends Error {
    static wrap(err: Error, message: string): Err {
        return new Err(`${message}: ${err.message}`)
    }

    constructor(message: string) {
        super(message);
    }
}

module.exports = {
    Err,
};