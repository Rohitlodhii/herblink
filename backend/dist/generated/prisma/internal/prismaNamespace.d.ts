import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
 * Metrics
 */
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 6.19.0
 * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
    readonly Product: "Product";
    readonly ProductInventory: "ProductInventory";
    readonly HerbInventory: "HerbInventory";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "farmer" | "landInfo" | "herbData" | "document" | "oTP" | "lab" | "labInfo" | "labWorker" | "labProcessorInput" | "processor" | "processingPlantInfo" | "processorInventory" | "processorFarmerInput" | "manufacturer" | "product" | "productInventory" | "herbInventory";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Farmer: {
            payload: Prisma.$FarmerPayload<ExtArgs>;
            fields: Prisma.FarmerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FarmerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FarmerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload>;
                };
                findFirst: {
                    args: Prisma.FarmerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FarmerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload>;
                };
                findMany: {
                    args: Prisma.FarmerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload>[];
                };
                create: {
                    args: Prisma.FarmerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload>;
                };
                createMany: {
                    args: Prisma.FarmerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FarmerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload>[];
                };
                delete: {
                    args: Prisma.FarmerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload>;
                };
                update: {
                    args: Prisma.FarmerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload>;
                };
                deleteMany: {
                    args: Prisma.FarmerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FarmerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FarmerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload>[];
                };
                upsert: {
                    args: Prisma.FarmerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FarmerPayload>;
                };
                aggregate: {
                    args: Prisma.FarmerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFarmer>;
                };
                groupBy: {
                    args: Prisma.FarmerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FarmerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FarmerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FarmerCountAggregateOutputType> | number;
                };
            };
        };
        LandInfo: {
            payload: Prisma.$LandInfoPayload<ExtArgs>;
            fields: Prisma.LandInfoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LandInfoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LandInfoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload>;
                };
                findFirst: {
                    args: Prisma.LandInfoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LandInfoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload>;
                };
                findMany: {
                    args: Prisma.LandInfoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload>[];
                };
                create: {
                    args: Prisma.LandInfoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload>;
                };
                createMany: {
                    args: Prisma.LandInfoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LandInfoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload>[];
                };
                delete: {
                    args: Prisma.LandInfoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload>;
                };
                update: {
                    args: Prisma.LandInfoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload>;
                };
                deleteMany: {
                    args: Prisma.LandInfoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LandInfoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LandInfoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload>[];
                };
                upsert: {
                    args: Prisma.LandInfoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LandInfoPayload>;
                };
                aggregate: {
                    args: Prisma.LandInfoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLandInfo>;
                };
                groupBy: {
                    args: Prisma.LandInfoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LandInfoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LandInfoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LandInfoCountAggregateOutputType> | number;
                };
            };
        };
        HerbData: {
            payload: Prisma.$HerbDataPayload<ExtArgs>;
            fields: Prisma.HerbDataFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HerbDataFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HerbDataFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload>;
                };
                findFirst: {
                    args: Prisma.HerbDataFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HerbDataFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload>;
                };
                findMany: {
                    args: Prisma.HerbDataFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload>[];
                };
                create: {
                    args: Prisma.HerbDataCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload>;
                };
                createMany: {
                    args: Prisma.HerbDataCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HerbDataCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload>[];
                };
                delete: {
                    args: Prisma.HerbDataDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload>;
                };
                update: {
                    args: Prisma.HerbDataUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload>;
                };
                deleteMany: {
                    args: Prisma.HerbDataDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HerbDataUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HerbDataUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload>[];
                };
                upsert: {
                    args: Prisma.HerbDataUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbDataPayload>;
                };
                aggregate: {
                    args: Prisma.HerbDataAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHerbData>;
                };
                groupBy: {
                    args: Prisma.HerbDataGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HerbDataGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HerbDataCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HerbDataCountAggregateOutputType> | number;
                };
            };
        };
        Document: {
            payload: Prisma.$DocumentPayload<ExtArgs>;
            fields: Prisma.DocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                findFirst: {
                    args: Prisma.DocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                findMany: {
                    args: Prisma.DocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                };
                create: {
                    args: Prisma.DocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                createMany: {
                    args: Prisma.DocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                };
                delete: {
                    args: Prisma.DocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                update: {
                    args: Prisma.DocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.DocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                };
                upsert: {
                    args: Prisma.DocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                aggregate: {
                    args: Prisma.DocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDocument>;
                };
                groupBy: {
                    args: Prisma.DocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentCountAggregateOutputType> | number;
                };
            };
        };
        OTP: {
            payload: Prisma.$OTPPayload<ExtArgs>;
            fields: Prisma.OTPFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OTPFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OTPFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                findFirst: {
                    args: Prisma.OTPFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OTPFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                findMany: {
                    args: Prisma.OTPFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>[];
                };
                create: {
                    args: Prisma.OTPCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                createMany: {
                    args: Prisma.OTPCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OTPCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>[];
                };
                delete: {
                    args: Prisma.OTPDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                update: {
                    args: Prisma.OTPUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                deleteMany: {
                    args: Prisma.OTPDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OTPUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OTPUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>[];
                };
                upsert: {
                    args: Prisma.OTPUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                aggregate: {
                    args: Prisma.OTPAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOTP>;
                };
                groupBy: {
                    args: Prisma.OTPGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OTPGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OTPCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OTPCountAggregateOutputType> | number;
                };
            };
        };
        Lab: {
            payload: Prisma.$LabPayload<ExtArgs>;
            fields: Prisma.LabFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LabFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LabFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload>;
                };
                findFirst: {
                    args: Prisma.LabFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LabFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload>;
                };
                findMany: {
                    args: Prisma.LabFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload>[];
                };
                create: {
                    args: Prisma.LabCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload>;
                };
                createMany: {
                    args: Prisma.LabCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LabCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload>[];
                };
                delete: {
                    args: Prisma.LabDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload>;
                };
                update: {
                    args: Prisma.LabUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload>;
                };
                deleteMany: {
                    args: Prisma.LabDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LabUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LabUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload>[];
                };
                upsert: {
                    args: Prisma.LabUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabPayload>;
                };
                aggregate: {
                    args: Prisma.LabAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLab>;
                };
                groupBy: {
                    args: Prisma.LabGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LabCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabCountAggregateOutputType> | number;
                };
            };
        };
        LabInfo: {
            payload: Prisma.$LabInfoPayload<ExtArgs>;
            fields: Prisma.LabInfoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LabInfoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LabInfoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload>;
                };
                findFirst: {
                    args: Prisma.LabInfoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LabInfoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload>;
                };
                findMany: {
                    args: Prisma.LabInfoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload>[];
                };
                create: {
                    args: Prisma.LabInfoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload>;
                };
                createMany: {
                    args: Prisma.LabInfoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LabInfoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload>[];
                };
                delete: {
                    args: Prisma.LabInfoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload>;
                };
                update: {
                    args: Prisma.LabInfoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload>;
                };
                deleteMany: {
                    args: Prisma.LabInfoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LabInfoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LabInfoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload>[];
                };
                upsert: {
                    args: Prisma.LabInfoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabInfoPayload>;
                };
                aggregate: {
                    args: Prisma.LabInfoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLabInfo>;
                };
                groupBy: {
                    args: Prisma.LabInfoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabInfoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LabInfoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabInfoCountAggregateOutputType> | number;
                };
            };
        };
        LabWorker: {
            payload: Prisma.$LabWorkerPayload<ExtArgs>;
            fields: Prisma.LabWorkerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LabWorkerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LabWorkerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload>;
                };
                findFirst: {
                    args: Prisma.LabWorkerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LabWorkerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload>;
                };
                findMany: {
                    args: Prisma.LabWorkerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload>[];
                };
                create: {
                    args: Prisma.LabWorkerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload>;
                };
                createMany: {
                    args: Prisma.LabWorkerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LabWorkerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload>[];
                };
                delete: {
                    args: Prisma.LabWorkerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload>;
                };
                update: {
                    args: Prisma.LabWorkerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload>;
                };
                deleteMany: {
                    args: Prisma.LabWorkerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LabWorkerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LabWorkerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload>[];
                };
                upsert: {
                    args: Prisma.LabWorkerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabWorkerPayload>;
                };
                aggregate: {
                    args: Prisma.LabWorkerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLabWorker>;
                };
                groupBy: {
                    args: Prisma.LabWorkerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabWorkerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LabWorkerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabWorkerCountAggregateOutputType> | number;
                };
            };
        };
        LabProcessorInput: {
            payload: Prisma.$LabProcessorInputPayload<ExtArgs>;
            fields: Prisma.LabProcessorInputFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LabProcessorInputFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LabProcessorInputFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload>;
                };
                findFirst: {
                    args: Prisma.LabProcessorInputFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LabProcessorInputFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload>;
                };
                findMany: {
                    args: Prisma.LabProcessorInputFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload>[];
                };
                create: {
                    args: Prisma.LabProcessorInputCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload>;
                };
                createMany: {
                    args: Prisma.LabProcessorInputCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LabProcessorInputCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload>[];
                };
                delete: {
                    args: Prisma.LabProcessorInputDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload>;
                };
                update: {
                    args: Prisma.LabProcessorInputUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload>;
                };
                deleteMany: {
                    args: Prisma.LabProcessorInputDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LabProcessorInputUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LabProcessorInputUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload>[];
                };
                upsert: {
                    args: Prisma.LabProcessorInputUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabProcessorInputPayload>;
                };
                aggregate: {
                    args: Prisma.LabProcessorInputAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLabProcessorInput>;
                };
                groupBy: {
                    args: Prisma.LabProcessorInputGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabProcessorInputGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LabProcessorInputCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabProcessorInputCountAggregateOutputType> | number;
                };
            };
        };
        Processor: {
            payload: Prisma.$ProcessorPayload<ExtArgs>;
            fields: Prisma.ProcessorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProcessorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProcessorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload>;
                };
                findFirst: {
                    args: Prisma.ProcessorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProcessorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload>;
                };
                findMany: {
                    args: Prisma.ProcessorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload>[];
                };
                create: {
                    args: Prisma.ProcessorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload>;
                };
                createMany: {
                    args: Prisma.ProcessorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProcessorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload>[];
                };
                delete: {
                    args: Prisma.ProcessorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload>;
                };
                update: {
                    args: Prisma.ProcessorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload>;
                };
                deleteMany: {
                    args: Prisma.ProcessorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProcessorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProcessorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload>[];
                };
                upsert: {
                    args: Prisma.ProcessorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorPayload>;
                };
                aggregate: {
                    args: Prisma.ProcessorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProcessor>;
                };
                groupBy: {
                    args: Prisma.ProcessorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProcessorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProcessorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProcessorCountAggregateOutputType> | number;
                };
            };
        };
        ProcessingPlantInfo: {
            payload: Prisma.$ProcessingPlantInfoPayload<ExtArgs>;
            fields: Prisma.ProcessingPlantInfoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProcessingPlantInfoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProcessingPlantInfoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload>;
                };
                findFirst: {
                    args: Prisma.ProcessingPlantInfoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProcessingPlantInfoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload>;
                };
                findMany: {
                    args: Prisma.ProcessingPlantInfoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload>[];
                };
                create: {
                    args: Prisma.ProcessingPlantInfoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload>;
                };
                createMany: {
                    args: Prisma.ProcessingPlantInfoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProcessingPlantInfoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload>[];
                };
                delete: {
                    args: Prisma.ProcessingPlantInfoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload>;
                };
                update: {
                    args: Prisma.ProcessingPlantInfoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload>;
                };
                deleteMany: {
                    args: Prisma.ProcessingPlantInfoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProcessingPlantInfoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProcessingPlantInfoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload>[];
                };
                upsert: {
                    args: Prisma.ProcessingPlantInfoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessingPlantInfoPayload>;
                };
                aggregate: {
                    args: Prisma.ProcessingPlantInfoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProcessingPlantInfo>;
                };
                groupBy: {
                    args: Prisma.ProcessingPlantInfoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProcessingPlantInfoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProcessingPlantInfoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProcessingPlantInfoCountAggregateOutputType> | number;
                };
            };
        };
        ProcessorInventory: {
            payload: Prisma.$ProcessorInventoryPayload<ExtArgs>;
            fields: Prisma.ProcessorInventoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProcessorInventoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProcessorInventoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload>;
                };
                findFirst: {
                    args: Prisma.ProcessorInventoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProcessorInventoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload>;
                };
                findMany: {
                    args: Prisma.ProcessorInventoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload>[];
                };
                create: {
                    args: Prisma.ProcessorInventoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload>;
                };
                createMany: {
                    args: Prisma.ProcessorInventoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProcessorInventoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload>[];
                };
                delete: {
                    args: Prisma.ProcessorInventoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload>;
                };
                update: {
                    args: Prisma.ProcessorInventoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ProcessorInventoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProcessorInventoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProcessorInventoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload>[];
                };
                upsert: {
                    args: Prisma.ProcessorInventoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorInventoryPayload>;
                };
                aggregate: {
                    args: Prisma.ProcessorInventoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProcessorInventory>;
                };
                groupBy: {
                    args: Prisma.ProcessorInventoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProcessorInventoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProcessorInventoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProcessorInventoryCountAggregateOutputType> | number;
                };
            };
        };
        ProcessorFarmerInput: {
            payload: Prisma.$ProcessorFarmerInputPayload<ExtArgs>;
            fields: Prisma.ProcessorFarmerInputFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProcessorFarmerInputFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProcessorFarmerInputFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload>;
                };
                findFirst: {
                    args: Prisma.ProcessorFarmerInputFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProcessorFarmerInputFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload>;
                };
                findMany: {
                    args: Prisma.ProcessorFarmerInputFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload>[];
                };
                create: {
                    args: Prisma.ProcessorFarmerInputCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload>;
                };
                createMany: {
                    args: Prisma.ProcessorFarmerInputCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProcessorFarmerInputCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload>[];
                };
                delete: {
                    args: Prisma.ProcessorFarmerInputDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload>;
                };
                update: {
                    args: Prisma.ProcessorFarmerInputUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload>;
                };
                deleteMany: {
                    args: Prisma.ProcessorFarmerInputDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProcessorFarmerInputUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProcessorFarmerInputUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload>[];
                };
                upsert: {
                    args: Prisma.ProcessorFarmerInputUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProcessorFarmerInputPayload>;
                };
                aggregate: {
                    args: Prisma.ProcessorFarmerInputAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProcessorFarmerInput>;
                };
                groupBy: {
                    args: Prisma.ProcessorFarmerInputGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProcessorFarmerInputGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProcessorFarmerInputCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProcessorFarmerInputCountAggregateOutputType> | number;
                };
            };
        };
        Manufacturer: {
            payload: Prisma.$ManufacturerPayload<ExtArgs>;
            fields: Prisma.ManufacturerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ManufacturerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ManufacturerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload>;
                };
                findFirst: {
                    args: Prisma.ManufacturerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ManufacturerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload>;
                };
                findMany: {
                    args: Prisma.ManufacturerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload>[];
                };
                create: {
                    args: Prisma.ManufacturerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload>;
                };
                createMany: {
                    args: Prisma.ManufacturerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ManufacturerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload>[];
                };
                delete: {
                    args: Prisma.ManufacturerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload>;
                };
                update: {
                    args: Prisma.ManufacturerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload>;
                };
                deleteMany: {
                    args: Prisma.ManufacturerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ManufacturerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ManufacturerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload>[];
                };
                upsert: {
                    args: Prisma.ManufacturerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ManufacturerPayload>;
                };
                aggregate: {
                    args: Prisma.ManufacturerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateManufacturer>;
                };
                groupBy: {
                    args: Prisma.ManufacturerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ManufacturerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ManufacturerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ManufacturerCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        ProductInventory: {
            payload: Prisma.$ProductInventoryPayload<ExtArgs>;
            fields: Prisma.ProductInventoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductInventoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductInventoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload>;
                };
                findFirst: {
                    args: Prisma.ProductInventoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductInventoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload>;
                };
                findMany: {
                    args: Prisma.ProductInventoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload>[];
                };
                create: {
                    args: Prisma.ProductInventoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload>;
                };
                createMany: {
                    args: Prisma.ProductInventoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductInventoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload>[];
                };
                delete: {
                    args: Prisma.ProductInventoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload>;
                };
                update: {
                    args: Prisma.ProductInventoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductInventoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductInventoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductInventoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload>[];
                };
                upsert: {
                    args: Prisma.ProductInventoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductInventoryPayload>;
                };
                aggregate: {
                    args: Prisma.ProductInventoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductInventory>;
                };
                groupBy: {
                    args: Prisma.ProductInventoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductInventoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductInventoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductInventoryCountAggregateOutputType> | number;
                };
            };
        };
        HerbInventory: {
            payload: Prisma.$HerbInventoryPayload<ExtArgs>;
            fields: Prisma.HerbInventoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HerbInventoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HerbInventoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload>;
                };
                findFirst: {
                    args: Prisma.HerbInventoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HerbInventoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload>;
                };
                findMany: {
                    args: Prisma.HerbInventoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload>[];
                };
                create: {
                    args: Prisma.HerbInventoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload>;
                };
                createMany: {
                    args: Prisma.HerbInventoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HerbInventoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload>[];
                };
                delete: {
                    args: Prisma.HerbInventoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload>;
                };
                update: {
                    args: Prisma.HerbInventoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload>;
                };
                deleteMany: {
                    args: Prisma.HerbInventoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HerbInventoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HerbInventoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload>[];
                };
                upsert: {
                    args: Prisma.HerbInventoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HerbInventoryPayload>;
                };
                aggregate: {
                    args: Prisma.HerbInventoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHerbInventory>;
                };
                groupBy: {
                    args: Prisma.HerbInventoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HerbInventoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HerbInventoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HerbInventoryCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly isVerified: "isVerified";
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
    readonly description: "description";
    readonly isDone: "isDone";
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
    readonly moisture: "moisture";
    readonly soilType: "soilType";
    readonly WaterType: "WaterType";
    readonly Season: "Season";
    readonly Location: "Location";
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
    readonly manufacturerId: "manufacturerId";
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
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly manufacturerId: "manufacturerId";
    readonly productName: "productName";
    readonly productDescription: "productDescription";
    readonly productImage: "productImage";
    readonly productionDate: "productionDate";
    readonly productionBatch: "productionBatch";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductInventoryScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly HerbName: "HerbName";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductInventoryScalarFieldEnum = (typeof ProductInventoryScalarFieldEnum)[keyof typeof ProductInventoryScalarFieldEnum];
export declare const HerbInventoryScalarFieldEnum: {
    readonly id: "id";
    readonly processorInventoryId: "processorInventoryId";
    readonly quantityReceived: "quantityReceived";
    readonly productInventoryId: "productInventoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HerbInventoryScalarFieldEnum = (typeof HerbInventoryScalarFieldEnum)[keyof typeof HerbInventoryScalarFieldEnum];
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'FarmerType'
 */
export type EnumFarmerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FarmerType'>;
/**
 * Reference to a field of type 'FarmerType[]'
 */
export type ListEnumFarmerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FarmerType[]'>;
/**
 * Reference to a field of type 'StatusType'
 */
export type EnumStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusType'>;
/**
 * Reference to a field of type 'StatusType[]'
 */
export type ListEnumStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusType[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'DocumentType'
 */
export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>;
/**
 * Reference to a field of type 'DocumentType[]'
 */
export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>;
/**
 * Reference to a field of type 'orgType'
 */
export type EnumorgTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orgType'>;
/**
 * Reference to a field of type 'orgType[]'
 */
export type ListEnumorgTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orgType[]'>;
/**
 * Reference to a field of type 'RoleType'
 */
export type EnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType'>;
/**
 * Reference to a field of type 'RoleType[]'
 */
export type ListEnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    farmer?: Prisma.FarmerOmit;
    landInfo?: Prisma.LandInfoOmit;
    herbData?: Prisma.HerbDataOmit;
    document?: Prisma.DocumentOmit;
    oTP?: Prisma.OTPOmit;
    lab?: Prisma.LabOmit;
    labInfo?: Prisma.LabInfoOmit;
    labWorker?: Prisma.LabWorkerOmit;
    labProcessorInput?: Prisma.LabProcessorInputOmit;
    processor?: Prisma.ProcessorOmit;
    processingPlantInfo?: Prisma.ProcessingPlantInfoOmit;
    processorInventory?: Prisma.ProcessorInventoryOmit;
    processorFarmerInput?: Prisma.ProcessorFarmerInputOmit;
    manufacturer?: Prisma.ManufacturerOmit;
    product?: Prisma.ProductOmit;
    productInventory?: Prisma.ProductInventoryOmit;
    herbInventory?: Prisma.HerbInventoryOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map