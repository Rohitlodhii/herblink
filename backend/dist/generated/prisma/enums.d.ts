export declare const RoleType: {
    readonly ADMIN: "ADMIN";
    readonly WORKER: "WORKER";
};
export type RoleType = (typeof RoleType)[keyof typeof RoleType];
export declare const orgType: {
    readonly GOVT: "GOVT";
    readonly PVT: "PVT";
};
export type orgType = (typeof orgType)[keyof typeof orgType];
export declare const DocumentType: {
    readonly INCOME_CERTIFICATE: "INCOME_CERTIFICATE";
    readonly FARMER_PHOTOGRAPH: "FARMER_PHOTOGRAPH";
    readonly LAND_CERTIFICATE: "LAND_CERTIFICATE";
};
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
export declare const StatusType: {
    readonly pending: "pending";
    readonly acknowledge: "acknowledge";
    readonly verified: "verified";
    readonly rejected: "rejected";
};
export type StatusType = (typeof StatusType)[keyof typeof StatusType];
//# sourceMappingURL=enums.d.ts.map