// Type definitions for EVP_BytesToKey
export = EVP_BytesToKey

declare function EVP_BytesToKey(password: string, salt: Buffer | null, keyBits: number, ivLen: number) : {key: Buffer, iv: Buffer}