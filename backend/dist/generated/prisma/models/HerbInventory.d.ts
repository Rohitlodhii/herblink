import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model HerbInventory
 *
 */
export type HerbInventoryModel = runtime.Types.Result.DefaultSelection<Prisma.$HerbInventoryPayload>;
export type AggregateHerbInventory = {
    _count: HerbInventoryCountAggregateOutputType | null;
    _min: HerbInventoryMinAggregateOutputType | null;
    _max: HerbInventoryMaxAggregateOutputType | null;
};
export type HerbInventoryMinAggregateOutputType = {
    id: string | null;
    processorInventoryId: string | null;
    quantityReceived: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HerbInventoryMaxAggregateOutputType = {
    id: string | null;
    processorInventoryId: string | null;
    quantityReceived: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HerbInventoryCountAggregateOutputType = {
    id: number;
    processorInventoryId: number;
    quantityReceived: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type HerbInventoryMinAggregateInputType = {
    id?: true;
    processorInventoryId?: true;
    quantityReceived?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HerbInventoryMaxAggregateInputType = {
    id?: true;
    processorInventoryId?: true;
    quantityReceived?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HerbInventoryCountAggregateInputType = {
    id?: true;
    processorInventoryId?: true;
    quantityReceived?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type HerbInventoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HerbInventory to aggregate.
     */
    where?: Prisma.HerbInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HerbInventories to fetch.
     */
    orderBy?: Prisma.HerbInventoryOrderByWithRelationInput | Prisma.HerbInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.HerbInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HerbInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HerbInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned HerbInventories
    **/
    _count?: true | HerbInventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: HerbInventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: HerbInventoryMaxAggregateInputType;
};
export type GetHerbInventoryAggregateType<T extends HerbInventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateHerbInventory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHerbInventory[P]> : Prisma.GetScalarType<T[P], AggregateHerbInventory[P]>;
};
export type HerbInventoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HerbInventoryWhereInput;
    orderBy?: Prisma.HerbInventoryOrderByWithAggregationInput | Prisma.HerbInventoryOrderByWithAggregationInput[];
    by: Prisma.HerbInventoryScalarFieldEnum[] | Prisma.HerbInventoryScalarFieldEnum;
    having?: Prisma.HerbInventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HerbInventoryCountAggregateInputType | true;
    _min?: HerbInventoryMinAggregateInputType;
    _max?: HerbInventoryMaxAggregateInputType;
};
export type HerbInventoryGroupByOutputType = {
    id: string;
    processorInventoryId: string;
    quantityReceived: string;
    createdAt: Date;
    updatedAt: Date;
    _count: HerbInventoryCountAggregateOutputType | null;
    _min: HerbInventoryMinAggregateOutputType | null;
    _max: HerbInventoryMaxAggregateOutputType | null;
};
type GetHerbInventoryGroupByPayload<T extends HerbInventoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HerbInventoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HerbInventoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HerbInventoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HerbInventoryGroupByOutputType[P]>;
}>>;
export type HerbInventoryWhereInput = {
    AND?: Prisma.HerbInventoryWhereInput | Prisma.HerbInventoryWhereInput[];
    OR?: Prisma.HerbInventoryWhereInput[];
    NOT?: Prisma.HerbInventoryWhereInput | Prisma.HerbInventoryWhereInput[];
    id?: Prisma.StringFilter<"HerbInventory"> | string;
    processorInventoryId?: Prisma.StringFilter<"HerbInventory"> | string;
    quantityReceived?: Prisma.StringFilter<"HerbInventory"> | string;
    createdAt?: Prisma.DateTimeFilter<"HerbInventory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HerbInventory"> | Date | string;
    processorInventory?: Prisma.XOR<Prisma.ProcessorInventoryScalarRelationFilter, Prisma.ProcessorInventoryWhereInput>;
    productInventory?: Prisma.XOR<Prisma.ProductInventoryNullableScalarRelationFilter, Prisma.ProductInventoryWhereInput> | null;
};
export type HerbInventoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    processorInventoryId?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    processorInventory?: Prisma.ProcessorInventoryOrderByWithRelationInput;
    productInventory?: Prisma.ProductInventoryOrderByWithRelationInput;
};
export type HerbInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HerbInventoryWhereInput | Prisma.HerbInventoryWhereInput[];
    OR?: Prisma.HerbInventoryWhereInput[];
    NOT?: Prisma.HerbInventoryWhereInput | Prisma.HerbInventoryWhereInput[];
    processorInventoryId?: Prisma.StringFilter<"HerbInventory"> | string;
    quantityReceived?: Prisma.StringFilter<"HerbInventory"> | string;
    createdAt?: Prisma.DateTimeFilter<"HerbInventory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HerbInventory"> | Date | string;
    processorInventory?: Prisma.XOR<Prisma.ProcessorInventoryScalarRelationFilter, Prisma.ProcessorInventoryWhereInput>;
    productInventory?: Prisma.XOR<Prisma.ProductInventoryNullableScalarRelationFilter, Prisma.ProductInventoryWhereInput> | null;
}, "id">;
export type HerbInventoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    processorInventoryId?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HerbInventoryCountOrderByAggregateInput;
    _max?: Prisma.HerbInventoryMaxOrderByAggregateInput;
    _min?: Prisma.HerbInventoryMinOrderByAggregateInput;
};
export type HerbInventoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.HerbInventoryScalarWhereWithAggregatesInput | Prisma.HerbInventoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.HerbInventoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HerbInventoryScalarWhereWithAggregatesInput | Prisma.HerbInventoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"HerbInventory"> | string;
    processorInventoryId?: Prisma.StringWithAggregatesFilter<"HerbInventory"> | string;
    quantityReceived?: Prisma.StringWithAggregatesFilter<"HerbInventory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HerbInventory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"HerbInventory"> | Date | string;
};
export type HerbInventoryCreateInput = {
    id?: string;
    quantityReceived: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    processorInventory: Prisma.ProcessorInventoryCreateNestedOneWithoutHerbInventoriesInput;
    productInventory?: Prisma.ProductInventoryCreateNestedOneWithoutHerbInventoryInput;
};
export type HerbInventoryUncheckedCreateInput = {
    id?: string;
    processorInventoryId: string;
    quantityReceived: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productInventory?: Prisma.ProductInventoryUncheckedCreateNestedOneWithoutHerbInventoryInput;
};
export type HerbInventoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityReceived?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    processorInventory?: Prisma.ProcessorInventoryUpdateOneRequiredWithoutHerbInventoriesNestedInput;
    productInventory?: Prisma.ProductInventoryUpdateOneWithoutHerbInventoryNestedInput;
};
export type HerbInventoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorInventoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityReceived?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productInventory?: Prisma.ProductInventoryUncheckedUpdateOneWithoutHerbInventoryNestedInput;
};
export type HerbInventoryCreateManyInput = {
    id?: string;
    processorInventoryId: string;
    quantityReceived: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HerbInventoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityReceived?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HerbInventoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorInventoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityReceived?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HerbInventoryListRelationFilter = {
    every?: Prisma.HerbInventoryWhereInput;
    some?: Prisma.HerbInventoryWhereInput;
    none?: Prisma.HerbInventoryWhereInput;
};
export type HerbInventoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HerbInventoryScalarRelationFilter = {
    is?: Prisma.HerbInventoryWhereInput;
    isNot?: Prisma.HerbInventoryWhereInput;
};
export type HerbInventoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorInventoryId?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HerbInventoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorInventoryId?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HerbInventoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorInventoryId?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HerbInventoryCreateNestedManyWithoutProcessorInventoryInput = {
    create?: Prisma.XOR<Prisma.HerbInventoryCreateWithoutProcessorInventoryInput, Prisma.HerbInventoryUncheckedCreateWithoutProcessorInventoryInput> | Prisma.HerbInventoryCreateWithoutProcessorInventoryInput[] | Prisma.HerbInventoryUncheckedCreateWithoutProcessorInventoryInput[];
    connectOrCreate?: Prisma.HerbInventoryCreateOrConnectWithoutProcessorInventoryInput | Prisma.HerbInventoryCreateOrConnectWithoutProcessorInventoryInput[];
    createMany?: Prisma.HerbInventoryCreateManyProcessorInventoryInputEnvelope;
    connect?: Prisma.HerbInventoryWhereUniqueInput | Prisma.HerbInventoryWhereUniqueInput[];
};
export type HerbInventoryUncheckedCreateNestedManyWithoutProcessorInventoryInput = {
    create?: Prisma.XOR<Prisma.HerbInventoryCreateWithoutProcessorInventoryInput, Prisma.HerbInventoryUncheckedCreateWithoutProcessorInventoryInput> | Prisma.HerbInventoryCreateWithoutProcessorInventoryInput[] | Prisma.HerbInventoryUncheckedCreateWithoutProcessorInventoryInput[];
    connectOrCreate?: Prisma.HerbInventoryCreateOrConnectWithoutProcessorInventoryInput | Prisma.HerbInventoryCreateOrConnectWithoutProcessorInventoryInput[];
    createMany?: Prisma.HerbInventoryCreateManyProcessorInventoryInputEnvelope;
    connect?: Prisma.HerbInventoryWhereUniqueInput | Prisma.HerbInventoryWhereUniqueInput[];
};
export type HerbInventoryUpdateManyWithoutProcessorInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.HerbInventoryCreateWithoutProcessorInventoryInput, Prisma.HerbInventoryUncheckedCreateWithoutProcessorInventoryInput> | Prisma.HerbInventoryCreateWithoutProcessorInventoryInput[] | Prisma.HerbInventoryUncheckedCreateWithoutProcessorInventoryInput[];
    connectOrCreate?: Prisma.HerbInventoryCreateOrConnectWithoutProcessorInventoryInput | Prisma.HerbInventoryCreateOrConnectWithoutProcessorInventoryInput[];
    upsert?: Prisma.HerbInventoryUpsertWithWhereUniqueWithoutProcessorInventoryInput | Prisma.HerbInventoryUpsertWithWhereUniqueWithoutProcessorInventoryInput[];
    createMany?: Prisma.HerbInventoryCreateManyProcessorInventoryInputEnvelope;
    set?: Prisma.HerbInventoryWhereUniqueInput | Prisma.HerbInventoryWhereUniqueInput[];
    disconnect?: Prisma.HerbInventoryWhereUniqueInput | Prisma.HerbInventoryWhereUniqueInput[];
    delete?: Prisma.HerbInventoryWhereUniqueInput | Prisma.HerbInventoryWhereUniqueInput[];
    connect?: Prisma.HerbInventoryWhereUniqueInput | Prisma.HerbInventoryWhereUniqueInput[];
    update?: Prisma.HerbInventoryUpdateWithWhereUniqueWithoutProcessorInventoryInput | Prisma.HerbInventoryUpdateWithWhereUniqueWithoutProcessorInventoryInput[];
    updateMany?: Prisma.HerbInventoryUpdateManyWithWhereWithoutProcessorInventoryInput | Prisma.HerbInventoryUpdateManyWithWhereWithoutProcessorInventoryInput[];
    deleteMany?: Prisma.HerbInventoryScalarWhereInput | Prisma.HerbInventoryScalarWhereInput[];
};
export type HerbInventoryUncheckedUpdateManyWithoutProcessorInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.HerbInventoryCreateWithoutProcessorInventoryInput, Prisma.HerbInventoryUncheckedCreateWithoutProcessorInventoryInput> | Prisma.HerbInventoryCreateWithoutProcessorInventoryInput[] | Prisma.HerbInventoryUncheckedCreateWithoutProcessorInventoryInput[];
    connectOrCreate?: Prisma.HerbInventoryCreateOrConnectWithoutProcessorInventoryInput | Prisma.HerbInventoryCreateOrConnectWithoutProcessorInventoryInput[];
    upsert?: Prisma.HerbInventoryUpsertWithWhereUniqueWithoutProcessorInventoryInput | Prisma.HerbInventoryUpsertWithWhereUniqueWithoutProcessorInventoryInput[];
    createMany?: Prisma.HerbInventoryCreateManyProcessorInventoryInputEnvelope;
    set?: Prisma.HerbInventoryWhereUniqueInput | Prisma.HerbInventoryWhereUniqueInput[];
    disconnect?: Prisma.HerbInventoryWhereUniqueInput | Prisma.HerbInventoryWhereUniqueInput[];
    delete?: Prisma.HerbInventoryWhereUniqueInput | Prisma.HerbInventoryWhereUniqueInput[];
    connect?: Prisma.HerbInventoryWhereUniqueInput | Prisma.HerbInventoryWhereUniqueInput[];
    update?: Prisma.HerbInventoryUpdateWithWhereUniqueWithoutProcessorInventoryInput | Prisma.HerbInventoryUpdateWithWhereUniqueWithoutProcessorInventoryInput[];
    updateMany?: Prisma.HerbInventoryUpdateManyWithWhereWithoutProcessorInventoryInput | Prisma.HerbInventoryUpdateManyWithWhereWithoutProcessorInventoryInput[];
    deleteMany?: Prisma.HerbInventoryScalarWhereInput | Prisma.HerbInventoryScalarWhereInput[];
};
export type HerbInventoryCreateNestedOneWithoutProductInventoryInput = {
    create?: Prisma.XOR<Prisma.HerbInventoryCreateWithoutProductInventoryInput, Prisma.HerbInventoryUncheckedCreateWithoutProductInventoryInput>;
    connectOrCreate?: Prisma.HerbInventoryCreateOrConnectWithoutProductInventoryInput;
    connect?: Prisma.HerbInventoryWhereUniqueInput;
};
export type HerbInventoryUpdateOneRequiredWithoutProductInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.HerbInventoryCreateWithoutProductInventoryInput, Prisma.HerbInventoryUncheckedCreateWithoutProductInventoryInput>;
    connectOrCreate?: Prisma.HerbInventoryCreateOrConnectWithoutProductInventoryInput;
    upsert?: Prisma.HerbInventoryUpsertWithoutProductInventoryInput;
    connect?: Prisma.HerbInventoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HerbInventoryUpdateToOneWithWhereWithoutProductInventoryInput, Prisma.HerbInventoryUpdateWithoutProductInventoryInput>, Prisma.HerbInventoryUncheckedUpdateWithoutProductInventoryInput>;
};
export type HerbInventoryCreateWithoutProcessorInventoryInput = {
    id?: string;
    quantityReceived: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productInventory?: Prisma.ProductInventoryCreateNestedOneWithoutHerbInventoryInput;
};
export type HerbInventoryUncheckedCreateWithoutProcessorInventoryInput = {
    id?: string;
    quantityReceived: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productInventory?: Prisma.ProductInventoryUncheckedCreateNestedOneWithoutHerbInventoryInput;
};
export type HerbInventoryCreateOrConnectWithoutProcessorInventoryInput = {
    where: Prisma.HerbInventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.HerbInventoryCreateWithoutProcessorInventoryInput, Prisma.HerbInventoryUncheckedCreateWithoutProcessorInventoryInput>;
};
export type HerbInventoryCreateManyProcessorInventoryInputEnvelope = {
    data: Prisma.HerbInventoryCreateManyProcessorInventoryInput | Prisma.HerbInventoryCreateManyProcessorInventoryInput[];
    skipDuplicates?: boolean;
};
export type HerbInventoryUpsertWithWhereUniqueWithoutProcessorInventoryInput = {
    where: Prisma.HerbInventoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.HerbInventoryUpdateWithoutProcessorInventoryInput, Prisma.HerbInventoryUncheckedUpdateWithoutProcessorInventoryInput>;
    create: Prisma.XOR<Prisma.HerbInventoryCreateWithoutProcessorInventoryInput, Prisma.HerbInventoryUncheckedCreateWithoutProcessorInventoryInput>;
};
export type HerbInventoryUpdateWithWhereUniqueWithoutProcessorInventoryInput = {
    where: Prisma.HerbInventoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.HerbInventoryUpdateWithoutProcessorInventoryInput, Prisma.HerbInventoryUncheckedUpdateWithoutProcessorInventoryInput>;
};
export type HerbInventoryUpdateManyWithWhereWithoutProcessorInventoryInput = {
    where: Prisma.HerbInventoryScalarWhereInput;
    data: Prisma.XOR<Prisma.HerbInventoryUpdateManyMutationInput, Prisma.HerbInventoryUncheckedUpdateManyWithoutProcessorInventoryInput>;
};
export type HerbInventoryScalarWhereInput = {
    AND?: Prisma.HerbInventoryScalarWhereInput | Prisma.HerbInventoryScalarWhereInput[];
    OR?: Prisma.HerbInventoryScalarWhereInput[];
    NOT?: Prisma.HerbInventoryScalarWhereInput | Prisma.HerbInventoryScalarWhereInput[];
    id?: Prisma.StringFilter<"HerbInventory"> | string;
    processorInventoryId?: Prisma.StringFilter<"HerbInventory"> | string;
    quantityReceived?: Prisma.StringFilter<"HerbInventory"> | string;
    createdAt?: Prisma.DateTimeFilter<"HerbInventory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HerbInventory"> | Date | string;
};
export type HerbInventoryCreateWithoutProductInventoryInput = {
    id?: string;
    quantityReceived: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    processorInventory: Prisma.ProcessorInventoryCreateNestedOneWithoutHerbInventoriesInput;
};
export type HerbInventoryUncheckedCreateWithoutProductInventoryInput = {
    id?: string;
    processorInventoryId: string;
    quantityReceived: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HerbInventoryCreateOrConnectWithoutProductInventoryInput = {
    where: Prisma.HerbInventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.HerbInventoryCreateWithoutProductInventoryInput, Prisma.HerbInventoryUncheckedCreateWithoutProductInventoryInput>;
};
export type HerbInventoryUpsertWithoutProductInventoryInput = {
    update: Prisma.XOR<Prisma.HerbInventoryUpdateWithoutProductInventoryInput, Prisma.HerbInventoryUncheckedUpdateWithoutProductInventoryInput>;
    create: Prisma.XOR<Prisma.HerbInventoryCreateWithoutProductInventoryInput, Prisma.HerbInventoryUncheckedCreateWithoutProductInventoryInput>;
    where?: Prisma.HerbInventoryWhereInput;
};
export type HerbInventoryUpdateToOneWithWhereWithoutProductInventoryInput = {
    where?: Prisma.HerbInventoryWhereInput;
    data: Prisma.XOR<Prisma.HerbInventoryUpdateWithoutProductInventoryInput, Prisma.HerbInventoryUncheckedUpdateWithoutProductInventoryInput>;
};
export type HerbInventoryUpdateWithoutProductInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityReceived?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    processorInventory?: Prisma.ProcessorInventoryUpdateOneRequiredWithoutHerbInventoriesNestedInput;
};
export type HerbInventoryUncheckedUpdateWithoutProductInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorInventoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityReceived?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HerbInventoryCreateManyProcessorInventoryInput = {
    id?: string;
    quantityReceived: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HerbInventoryUpdateWithoutProcessorInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityReceived?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productInventory?: Prisma.ProductInventoryUpdateOneWithoutHerbInventoryNestedInput;
};
export type HerbInventoryUncheckedUpdateWithoutProcessorInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityReceived?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productInventory?: Prisma.ProductInventoryUncheckedUpdateOneWithoutHerbInventoryNestedInput;
};
export type HerbInventoryUncheckedUpdateManyWithoutProcessorInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityReceived?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HerbInventorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorInventoryId?: boolean;
    quantityReceived?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
    productInventory?: boolean | Prisma.HerbInventory$productInventoryArgs<ExtArgs>;
}, ExtArgs["result"]["herbInventory"]>;
export type HerbInventorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorInventoryId?: boolean;
    quantityReceived?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["herbInventory"]>;
export type HerbInventorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorInventoryId?: boolean;
    quantityReceived?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["herbInventory"]>;
export type HerbInventorySelectScalar = {
    id?: boolean;
    processorInventoryId?: boolean;
    quantityReceived?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type HerbInventoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "processorInventoryId" | "quantityReceived" | "createdAt" | "updatedAt", ExtArgs["result"]["herbInventory"]>;
export type HerbInventoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
    productInventory?: boolean | Prisma.HerbInventory$productInventoryArgs<ExtArgs>;
};
export type HerbInventoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
};
export type HerbInventoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
};
export type $HerbInventoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HerbInventory";
    objects: {
        processorInventory: Prisma.$ProcessorInventoryPayload<ExtArgs>;
        productInventory: Prisma.$ProductInventoryPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        processorInventoryId: string;
        quantityReceived: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["herbInventory"]>;
    composites: {};
};
export type HerbInventoryGetPayload<S extends boolean | null | undefined | HerbInventoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload, S>;
export type HerbInventoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HerbInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HerbInventoryCountAggregateInputType | true;
};
export interface HerbInventoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HerbInventory'];
        meta: {
            name: 'HerbInventory';
        };
    };
    /**
     * Find zero or one HerbInventory that matches the filter.
     * @param {HerbInventoryFindUniqueArgs} args - Arguments to find a HerbInventory
     * @example
     * // Get one HerbInventory
     * const herbInventory = await prisma.herbInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HerbInventoryFindUniqueArgs>(args: Prisma.SelectSubset<T, HerbInventoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HerbInventoryClient<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one HerbInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HerbInventoryFindUniqueOrThrowArgs} args - Arguments to find a HerbInventory
     * @example
     * // Get one HerbInventory
     * const herbInventory = await prisma.herbInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HerbInventoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HerbInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HerbInventoryClient<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HerbInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbInventoryFindFirstArgs} args - Arguments to find a HerbInventory
     * @example
     * // Get one HerbInventory
     * const herbInventory = await prisma.herbInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HerbInventoryFindFirstArgs>(args?: Prisma.SelectSubset<T, HerbInventoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__HerbInventoryClient<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HerbInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbInventoryFindFirstOrThrowArgs} args - Arguments to find a HerbInventory
     * @example
     * // Get one HerbInventory
     * const herbInventory = await prisma.herbInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HerbInventoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HerbInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HerbInventoryClient<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more HerbInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HerbInventories
     * const herbInventories = await prisma.herbInventory.findMany()
     *
     * // Get first 10 HerbInventories
     * const herbInventories = await prisma.herbInventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const herbInventoryWithIdOnly = await prisma.herbInventory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends HerbInventoryFindManyArgs>(args?: Prisma.SelectSubset<T, HerbInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a HerbInventory.
     * @param {HerbInventoryCreateArgs} args - Arguments to create a HerbInventory.
     * @example
     * // Create one HerbInventory
     * const HerbInventory = await prisma.herbInventory.create({
     *   data: {
     *     // ... data to create a HerbInventory
     *   }
     * })
     *
     */
    create<T extends HerbInventoryCreateArgs>(args: Prisma.SelectSubset<T, HerbInventoryCreateArgs<ExtArgs>>): Prisma.Prisma__HerbInventoryClient<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many HerbInventories.
     * @param {HerbInventoryCreateManyArgs} args - Arguments to create many HerbInventories.
     * @example
     * // Create many HerbInventories
     * const herbInventory = await prisma.herbInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends HerbInventoryCreateManyArgs>(args?: Prisma.SelectSubset<T, HerbInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many HerbInventories and returns the data saved in the database.
     * @param {HerbInventoryCreateManyAndReturnArgs} args - Arguments to create many HerbInventories.
     * @example
     * // Create many HerbInventories
     * const herbInventory = await prisma.herbInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many HerbInventories and only return the `id`
     * const herbInventoryWithIdOnly = await prisma.herbInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends HerbInventoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HerbInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a HerbInventory.
     * @param {HerbInventoryDeleteArgs} args - Arguments to delete one HerbInventory.
     * @example
     * // Delete one HerbInventory
     * const HerbInventory = await prisma.herbInventory.delete({
     *   where: {
     *     // ... filter to delete one HerbInventory
     *   }
     * })
     *
     */
    delete<T extends HerbInventoryDeleteArgs>(args: Prisma.SelectSubset<T, HerbInventoryDeleteArgs<ExtArgs>>): Prisma.Prisma__HerbInventoryClient<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one HerbInventory.
     * @param {HerbInventoryUpdateArgs} args - Arguments to update one HerbInventory.
     * @example
     * // Update one HerbInventory
     * const herbInventory = await prisma.herbInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends HerbInventoryUpdateArgs>(args: Prisma.SelectSubset<T, HerbInventoryUpdateArgs<ExtArgs>>): Prisma.Prisma__HerbInventoryClient<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more HerbInventories.
     * @param {HerbInventoryDeleteManyArgs} args - Arguments to filter HerbInventories to delete.
     * @example
     * // Delete a few HerbInventories
     * const { count } = await prisma.herbInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends HerbInventoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, HerbInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HerbInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HerbInventories
     * const herbInventory = await prisma.herbInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends HerbInventoryUpdateManyArgs>(args: Prisma.SelectSubset<T, HerbInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HerbInventories and returns the data updated in the database.
     * @param {HerbInventoryUpdateManyAndReturnArgs} args - Arguments to update many HerbInventories.
     * @example
     * // Update many HerbInventories
     * const herbInventory = await prisma.herbInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more HerbInventories and only return the `id`
     * const herbInventoryWithIdOnly = await prisma.herbInventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends HerbInventoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HerbInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one HerbInventory.
     * @param {HerbInventoryUpsertArgs} args - Arguments to update or create a HerbInventory.
     * @example
     * // Update or create a HerbInventory
     * const herbInventory = await prisma.herbInventory.upsert({
     *   create: {
     *     // ... data to create a HerbInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HerbInventory we want to update
     *   }
     * })
     */
    upsert<T extends HerbInventoryUpsertArgs>(args: Prisma.SelectSubset<T, HerbInventoryUpsertArgs<ExtArgs>>): Prisma.Prisma__HerbInventoryClient<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of HerbInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbInventoryCountArgs} args - Arguments to filter HerbInventories to count.
     * @example
     * // Count the number of HerbInventories
     * const count = await prisma.herbInventory.count({
     *   where: {
     *     // ... the filter for the HerbInventories we want to count
     *   }
     * })
    **/
    count<T extends HerbInventoryCountArgs>(args?: Prisma.Subset<T, HerbInventoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HerbInventoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a HerbInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HerbInventoryAggregateArgs>(args: Prisma.Subset<T, HerbInventoryAggregateArgs>): Prisma.PrismaPromise<GetHerbInventoryAggregateType<T>>;
    /**
     * Group by HerbInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbInventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends HerbInventoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HerbInventoryGroupByArgs['orderBy'];
    } : {
        orderBy?: HerbInventoryGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HerbInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHerbInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the HerbInventory model
     */
    readonly fields: HerbInventoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for HerbInventory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__HerbInventoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    processorInventory<T extends Prisma.ProcessorInventoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProcessorInventoryDefaultArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    productInventory<T extends Prisma.HerbInventory$productInventoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HerbInventory$productInventoryArgs<ExtArgs>>): Prisma.Prisma__ProductInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the HerbInventory model
 */
export interface HerbInventoryFieldRefs {
    readonly id: Prisma.FieldRef<"HerbInventory", 'String'>;
    readonly processorInventoryId: Prisma.FieldRef<"HerbInventory", 'String'>;
    readonly quantityReceived: Prisma.FieldRef<"HerbInventory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"HerbInventory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"HerbInventory", 'DateTime'>;
}
/**
 * HerbInventory findUnique
 */
export type HerbInventoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which HerbInventory to fetch.
     */
    where: Prisma.HerbInventoryWhereUniqueInput;
};
/**
 * HerbInventory findUniqueOrThrow
 */
export type HerbInventoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which HerbInventory to fetch.
     */
    where: Prisma.HerbInventoryWhereUniqueInput;
};
/**
 * HerbInventory findFirst
 */
export type HerbInventoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which HerbInventory to fetch.
     */
    where?: Prisma.HerbInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HerbInventories to fetch.
     */
    orderBy?: Prisma.HerbInventoryOrderByWithRelationInput | Prisma.HerbInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HerbInventories.
     */
    cursor?: Prisma.HerbInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HerbInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HerbInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HerbInventories.
     */
    distinct?: Prisma.HerbInventoryScalarFieldEnum | Prisma.HerbInventoryScalarFieldEnum[];
};
/**
 * HerbInventory findFirstOrThrow
 */
export type HerbInventoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which HerbInventory to fetch.
     */
    where?: Prisma.HerbInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HerbInventories to fetch.
     */
    orderBy?: Prisma.HerbInventoryOrderByWithRelationInput | Prisma.HerbInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HerbInventories.
     */
    cursor?: Prisma.HerbInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HerbInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HerbInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HerbInventories.
     */
    distinct?: Prisma.HerbInventoryScalarFieldEnum | Prisma.HerbInventoryScalarFieldEnum[];
};
/**
 * HerbInventory findMany
 */
export type HerbInventoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which HerbInventories to fetch.
     */
    where?: Prisma.HerbInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HerbInventories to fetch.
     */
    orderBy?: Prisma.HerbInventoryOrderByWithRelationInput | Prisma.HerbInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing HerbInventories.
     */
    cursor?: Prisma.HerbInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HerbInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HerbInventories.
     */
    skip?: number;
    distinct?: Prisma.HerbInventoryScalarFieldEnum | Prisma.HerbInventoryScalarFieldEnum[];
};
/**
 * HerbInventory create
 */
export type HerbInventoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a HerbInventory.
     */
    data: Prisma.XOR<Prisma.HerbInventoryCreateInput, Prisma.HerbInventoryUncheckedCreateInput>;
};
/**
 * HerbInventory createMany
 */
export type HerbInventoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many HerbInventories.
     */
    data: Prisma.HerbInventoryCreateManyInput | Prisma.HerbInventoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * HerbInventory createManyAndReturn
 */
export type HerbInventoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * The data used to create many HerbInventories.
     */
    data: Prisma.HerbInventoryCreateManyInput | Prisma.HerbInventoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * HerbInventory update
 */
export type HerbInventoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a HerbInventory.
     */
    data: Prisma.XOR<Prisma.HerbInventoryUpdateInput, Prisma.HerbInventoryUncheckedUpdateInput>;
    /**
     * Choose, which HerbInventory to update.
     */
    where: Prisma.HerbInventoryWhereUniqueInput;
};
/**
 * HerbInventory updateMany
 */
export type HerbInventoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update HerbInventories.
     */
    data: Prisma.XOR<Prisma.HerbInventoryUpdateManyMutationInput, Prisma.HerbInventoryUncheckedUpdateManyInput>;
    /**
     * Filter which HerbInventories to update
     */
    where?: Prisma.HerbInventoryWhereInput;
    /**
     * Limit how many HerbInventories to update.
     */
    limit?: number;
};
/**
 * HerbInventory updateManyAndReturn
 */
export type HerbInventoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * The data used to update HerbInventories.
     */
    data: Prisma.XOR<Prisma.HerbInventoryUpdateManyMutationInput, Prisma.HerbInventoryUncheckedUpdateManyInput>;
    /**
     * Filter which HerbInventories to update
     */
    where?: Prisma.HerbInventoryWhereInput;
    /**
     * Limit how many HerbInventories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * HerbInventory upsert
 */
export type HerbInventoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the HerbInventory to update in case it exists.
     */
    where: Prisma.HerbInventoryWhereUniqueInput;
    /**
     * In case the HerbInventory found by the `where` argument doesn't exist, create a new HerbInventory with this data.
     */
    create: Prisma.XOR<Prisma.HerbInventoryCreateInput, Prisma.HerbInventoryUncheckedCreateInput>;
    /**
     * In case the HerbInventory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.HerbInventoryUpdateInput, Prisma.HerbInventoryUncheckedUpdateInput>;
};
/**
 * HerbInventory delete
 */
export type HerbInventoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryInclude<ExtArgs> | null;
    /**
     * Filter which HerbInventory to delete.
     */
    where: Prisma.HerbInventoryWhereUniqueInput;
};
/**
 * HerbInventory deleteMany
 */
export type HerbInventoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HerbInventories to delete
     */
    where?: Prisma.HerbInventoryWhereInput;
    /**
     * Limit how many HerbInventories to delete.
     */
    limit?: number;
};
/**
 * HerbInventory.productInventory
 */
export type HerbInventory$productInventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: Prisma.ProductInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: Prisma.ProductInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductInventoryInclude<ExtArgs> | null;
    where?: Prisma.ProductInventoryWhereInput;
};
/**
 * HerbInventory without action
 */
export type HerbInventoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbInventory
     */
    select?: Prisma.HerbInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbInventory
     */
    omit?: Prisma.HerbInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbInventoryInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=HerbInventory.d.ts.map