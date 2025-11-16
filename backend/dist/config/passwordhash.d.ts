export declare class PasswordHash {
    private SaltRounds;
    constructor();
    generateHash(password: string): Promise<string>;
    comparePassword(password: string, hashedPassword: string): Promise<boolean>;
}
//# sourceMappingURL=passwordhash.d.ts.map