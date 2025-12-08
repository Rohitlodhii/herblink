import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.farmer`: Exposes CRUD operations for the **Farmer** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Farmers
  * const farmers = await prisma.farmer.findMany()
  * ```
  */
    get farmer(): Prisma.FarmerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.landInfo`: Exposes CRUD operations for the **LandInfo** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LandInfos
      * const landInfos = await prisma.landInfo.findMany()
      * ```
      */
    get landInfo(): Prisma.LandInfoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.herbData`: Exposes CRUD operations for the **HerbData** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more HerbData
      * const herbData = await prisma.herbData.findMany()
      * ```
      */
    get herbData(): Prisma.HerbDataDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.document`: Exposes CRUD operations for the **Document** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Documents
      * const documents = await prisma.document.findMany()
      * ```
      */
    get document(): Prisma.DocumentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.oTP`: Exposes CRUD operations for the **OTP** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OTPS
      * const oTPS = await prisma.oTP.findMany()
      * ```
      */
    get oTP(): Prisma.OTPDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lab`: Exposes CRUD operations for the **Lab** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Labs
      * const labs = await prisma.lab.findMany()
      * ```
      */
    get lab(): Prisma.LabDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.labInfo`: Exposes CRUD operations for the **LabInfo** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LabInfos
      * const labInfos = await prisma.labInfo.findMany()
      * ```
      */
    get labInfo(): Prisma.LabInfoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.labWorker`: Exposes CRUD operations for the **LabWorker** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LabWorkers
      * const labWorkers = await prisma.labWorker.findMany()
      * ```
      */
    get labWorker(): Prisma.LabWorkerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.labProcessorInput`: Exposes CRUD operations for the **LabProcessorInput** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LabProcessorInputs
      * const labProcessorInputs = await prisma.labProcessorInput.findMany()
      * ```
      */
    get labProcessorInput(): Prisma.LabProcessorInputDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.processor`: Exposes CRUD operations for the **Processor** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Processors
      * const processors = await prisma.processor.findMany()
      * ```
      */
    get processor(): Prisma.ProcessorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.processingPlantInfo`: Exposes CRUD operations for the **ProcessingPlantInfo** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProcessingPlantInfos
      * const processingPlantInfos = await prisma.processingPlantInfo.findMany()
      * ```
      */
    get processingPlantInfo(): Prisma.ProcessingPlantInfoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.processorInventory`: Exposes CRUD operations for the **ProcessorInventory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProcessorInventories
      * const processorInventories = await prisma.processorInventory.findMany()
      * ```
      */
    get processorInventory(): Prisma.ProcessorInventoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.processorFarmerInput`: Exposes CRUD operations for the **ProcessorFarmerInput** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProcessorFarmerInputs
      * const processorFarmerInputs = await prisma.processorFarmerInput.findMany()
      * ```
      */
    get processorFarmerInput(): Prisma.ProcessorFarmerInputDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.manufacturer`: Exposes CRUD operations for the **Manufacturer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Manufacturers
      * const manufacturers = await prisma.manufacturer.findMany()
      * ```
      */
    get manufacturer(): Prisma.ManufacturerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.product`: Exposes CRUD operations for the **Product** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Products
      * const products = await prisma.product.findMany()
      * ```
      */
    get product(): Prisma.ProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productInventory`: Exposes CRUD operations for the **ProductInventory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductInventories
      * const productInventories = await prisma.productInventory.findMany()
      * ```
      */
    get productInventory(): Prisma.ProductInventoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.herbInventory`: Exposes CRUD operations for the **HerbInventory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more HerbInventories
      * const herbInventories = await prisma.herbInventory.findMany()
      * ```
      */
    get herbInventory(): Prisma.HerbInventoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map