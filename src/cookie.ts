class Cookie {
    readonly name: string;
    readonly value: string;
    readonly domain: string;
    readonly path?: string;
    readonly expires?: Date;
    readonly maxAge?: number;
    readonly secure?: boolean;
    readonly httpOnly?: boolean;
    readonly sameSite?: CookieSameSite;
    // Name  string
    // Value string
    //
    // Path       string    // optional
    // Domain     string    // optional
    // Expires    time.Time // optional
    // RawExpires string    // for reading cookies only
    //
    // // MaxAge=0 means no 'Max-Age' attribute specified.
    // // MaxAge<0 means delete cookie now, equivalently 'Max-Age: 0'
    // // MaxAge>0 means Max-Age attribute present and given in seconds
    // MaxAge   int
    // Secure   bool
    // HttpOnly bool
    // SameSite SameSite
    // Raw      string
    // Unparsed []string // Raw text of unparsed attribute-value pairs

    public static from(raw: string): Cookie {
        return new Cookie()
    }

    public toString(): string {
        return '';
    }
}

type CookieSameSite = 'lax' | 'strict' | 'none' | '';

module.exports = {
    Cookie
};