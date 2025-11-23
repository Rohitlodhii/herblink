import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Farmers
 * const farmers = await prisma.farmer.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Farmer
 *
 */
export type Farmer = Prisma.FarmerModel;
/**
 * Model LandInfo
 *
 */
export type LandInfo = Prisma.LandInfoModel;
/**
 * Model Document
 *
 */
export type Document = Prisma.DocumentModel;
/**
 * Model Crop
 *
 */
export type Crop = Prisma.CropModel;
/**
 * Model OTP
 *
 */
export type OTP = Prisma.OTPModel;
/**
 * Model Lab
 *
 */
export type Lab = Prisma.LabModel;
/**
 * Model LabInfo
 *
 */
export type LabInfo = Prisma.LabInfoModel;
/**
 * Model LabWorker
 *
 */
export type LabWorker = Prisma.LabWorkerModel;
//# sourceMappingURL=client.d.ts.map