module.exports = {};

class Session {
    readonly _id: string;
    readonly _expires: Date;
    readonly _data: Map<string, any> = new Map();

    constructor(id: string) {
        this._id = id;
    }
}

interface SessionStore {
    Get(id: string): Promise<Session>;

    Set(id: string, session: Session): Promise<Session>;
}