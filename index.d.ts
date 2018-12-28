// Type definitions for EVP_BytesToKey
export = EVP_BytesToKey

declare function EVP_BytesToKey(options: Options) : Key

interface Options {
    password: string,
    salt: Buffer | null,
    keyBits: number,
    ivLen: number
}

interface Key {
    key: Buffer,
    iv: Buffer
}