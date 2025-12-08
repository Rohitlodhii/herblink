import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly Farmer: "Farmer";
    readonly LandInfo: "LandInfo";
    readonly HerbData: "HerbData";
    readonly Document: "Document";
    readonly OTP: "OTP";
    readonly Lab: "Lab";
    readonly LabInfo: "LabInfo";
    readonly LabWorker: "LabWorker";
    readonly LabProcessorInput: "LabProcessorInput";
    readonly Processor: "Processor";
    readonly ProcessingPlantInfo: "ProcessingPlantInfo";
    readonly ProcessorInventory: "ProcessorInventory";
    readonly ProcessorFarmerInput: "ProcessorFarmerInput";
    readonly Manufacturer: "Manufacturer";
    readonly ManufacturerProduct: "ManufacturerProduct";
    readonly ManufacturerInventory: "ManufacturerInventory";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const FarmerScalarFieldEnum: {
    readonly id: "id";
    readonly mobileNumber: "mobileNumber";
    readonly mobileNumberVerified: "mobileNumberVerified";
    readonly farmerID: "farmerID";
    readonly password: "password";
    readonly fullName: "fullName";
    readonly dob: "dob";
    readonly address: "address";
    readonly fatherName: "fatherName";
    readonly gender: "gender";
    readonly aadharNumber: "aadharNumber";
    readonly annualIncome: "annualIncome";
    readonly farmerType: "farmerType";
    readonly status: "status";
    readonly isVerified: "isVerified";
    readonly isProfileCompleted: "isProfileCompleted";
    readonly createdAt: "createdAt";
    readonly updateAt: "updateAt";
};
export type FarmerScalarFieldEnum = (typeof FarmerScalarFieldEnum)[keyof typeof FarmerScalarFieldEnum];
export declare const LandInfoScalarFieldEnum: {
    readonly id: "id";
    readonly totalHectare: "totalHectare";
    readonly khasraNumber: "khasraNumber";
    readonly coordinates: "coordinates";
    readonly kisanCardNumber: "kisanCardNumber";
    readonly farmerID: "farmerID";
};
export type LandInfoScalarFieldEnum = (typeof LandInfoScalarFieldEnum)[keyof typeof LandInfoScalarFieldEnum];
export declare const HerbDataScalarFieldEnum: {
    readonly id: "id";
    readonly herbname: "herbname";
    readonly harvestDate: "harvestDate";
    readonly coordinates: "coordinates";
    readonly pesticidesUsed: "pesticidesUsed";
    readonly quantity: "quantity";
    readonly desc: "desc";
    readonly farmerID: "farmerID";
};
export type HerbDataScalarFieldEnum = (typeof HerbDataScalarFieldEnum)[keyof typeof HerbDataScalarFieldEnum];
export declare const DocumentScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly url: "url";
    readonly farmerID: "farmerID";
};
export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];
export declare const OTPScalarFieldEnum: {
    readonly id: "id";
    readonly mobile: "mobile";
    readonly otp: "otp";
    readonly expiresAt: "expiresAt";
    readonly verified: "verified";
    readonly createdAt: "createdAt";
};
export type OTPScalarFieldEnum = (typeof OTPScalarFieldEnum)[keyof typeof OTPScalarFieldEnum];
export declare const LabScalarFieldEnum: {
    readonly id: "id";
    readonly labId: "labId";
    readonly password: "password";
    readonly email: "email";
};
export type LabScalarFieldEnum = (typeof LabScalarFieldEnum)[keyof typeof LabScalarFieldEnum];
export declare const LabInfoScalarFieldEnum: {
    readonly id: "id";
    readonly labID: "labID";
    readonly address: "address";
    readonly type: "type";
    readonly labName: "labName";
    readonly nablCertificateNo: "nablCertificateNo";
    readonly nablExp: "nablExp";
    readonly isFssaiReg: "isFssaiReg";
    readonly fssaiRegNo: "fssaiRegNo";
    readonly about: "about";
};
export type LabInfoScalarFieldEnum = (typeof LabInfoScalarFieldEnum)[keyof typeof LabInfoScalarFieldEnum];
export declare const LabWorkerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly workerId: "workerId";
    readonly role: "role";
    readonly desc: "desc";
    readonly labID: "labID";
};
export type LabWorkerScalarFieldEnum = (typeof LabWorkerScalarFieldEnum)[keyof typeof LabWorkerScalarFieldEnum];
export declare const LabProcessorInputScalarFieldEnum: {
    readonly id: "id";
    readonly labId: "labId";
    readonly processorInventoryId: "processorInventoryId";
    readonly reportpath: "reportpath";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LabProcessorInputScalarFieldEnum = (typeof LabProcessorInputScalarFieldEnum)[keyof typeof LabProcessorInputScalarFieldEnum];
export declare const ProcessorScalarFieldEnum: {
    readonly id: "id";
    readonly processorId: "processorId";
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
    readonly address: "address";
    readonly organization: "organization";
    readonly isVerified: "isVerified";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProcessorScalarFieldEnum = (typeof ProcessorScalarFieldEnum)[keyof typeof ProcessorScalarFieldEnum];
export declare const ProcessingPlantInfoScalarFieldEnum: {
    readonly id: "id";
    readonly processorID: "processorID";
    readonly estb: "estb";
    readonly GSTIN: "GSTIN";
    readonly Storage: "Storage";
    readonly herbs: "herbs";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProcessingPlantInfoScalarFieldEnum = (typeof ProcessingPlantInfoScalarFieldEnum)[keyof typeof ProcessingPlantInfoScalarFieldEnum];
export declare const ProcessorInventoryScalarFieldEnum: {
    readonly id: "id";
    readonly processorID: "processorID";
    readonly inventoryName: "inventoryName";
    readonly assignedGrade: "assignedGrade";
    readonly isprocessingDone: "isprocessingDone";
    readonly processinglist: "processinglist";
    readonly specie: "specie";
    readonly finalQuantity: "finalQuantity";
    readonly sendedToLab: "sendedToLab";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProcessorInventoryScalarFieldEnum = (typeof ProcessorInventoryScalarFieldEnum)[keyof typeof ProcessorInventoryScalarFieldEnum];
export declare const ProcessorFarmerInputScalarFieldEnum: {
    readonly id: "id";
    readonly inventoryID: "inventoryID";
    readonly quantity: "quantity";
    readonly eventId: "eventId";
    readonly specie: "specie";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProcessorFarmerInputScalarFieldEnum = (typeof ProcessorFarmerInputScalarFieldEnum)[keyof typeof ProcessorFarmerInputScalarFieldEnum];
export declare const ManufacturerScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
    readonly address: "address";
    readonly organization: "organization";
    readonly isVerified: "isVerified";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ManufacturerScalarFieldEnum = (typeof ManufacturerScalarFieldEnum)[keyof typeof ManufacturerScalarFieldEnum];
export declare const ManufacturerProductScalarFieldEnum: {
    readonly id: "id";
    readonly manufacturerId: "manufacturerId";
};
export type ManufacturerProductScalarFieldEnum = (typeof ManufacturerProductScalarFieldEnum)[keyof typeof ManufacturerProductScalarFieldEnum];
export declare const ManufacturerInventoryScalarFieldEnum: {
    readonly id: "id";
    readonly manufacturerId: "manufacturerId";
    readonly inventoryName: "inventoryName";
    readonly assignedGrade: "assignedGrade";
    readonly isprocessingDone: "isprocessingDone";
    readonly processinglist: "processinglist";
    readonly specie: "specie";
    readonly finalQuantity: "finalQuantity";
    readonly sendedToLab: "sendedToLab";
};
export type ManufacturerInventoryScalarFieldEnum = (typeof ManufacturerInventoryScalarFieldEnum)[keyof typeof ManufacturerInventoryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map