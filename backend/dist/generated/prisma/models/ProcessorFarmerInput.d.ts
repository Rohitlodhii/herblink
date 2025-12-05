import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProcessorFarmerInput
 *
 */
export type ProcessorFarmerInputModel = runtime.Types.Result.DefaultSelection<Prisma.$ProcessorFarmerInputPayload>;
export type AggregateProcessorFarmerInput = {
    _count: ProcessorFarmerInputCountAggregateOutputType | null;
    _min: ProcessorFarmerInputMinAggregateOutputType | null;
    _max: ProcessorFarmerInputMaxAggregateOutputType | null;
};
export type ProcessorFarmerInputMinAggregateOutputType = {
    id: string | null;
    inventoryID: string | null;
    quantity: string | null;
    eventId: string | null;
    specie: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProcessorFarmerInputMaxAggregateOutputType = {
    id: string | null;
    inventoryID: string | null;
    quantity: string | null;
    eventId: string | null;
    specie: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProcessorFarmerInputCountAggregateOutputType = {
    id: number;
    inventoryID: number;
    quantity: number;
    eventId: number;
    specie: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProcessorFarmerInputMinAggregateInputType = {
    id?: true;
    inventoryID?: true;
    quantity?: true;
    eventId?: true;
    specie?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProcessorFarmerInputMaxAggregateInputType = {
    id?: true;
    inventoryID?: true;
    quantity?: true;
    eventId?: true;
    specie?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProcessorFarmerInputCountAggregateInputType = {
    id?: true;
    inventoryID?: true;
    quantity?: true;
    eventId?: true;
    specie?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProcessorFarmerInputAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessorFarmerInput to aggregate.
     */
    where?: Prisma.ProcessorFarmerInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessorFarmerInputs to fetch.
     */
    orderBy?: Prisma.ProcessorFarmerInputOrderByWithRelationInput | Prisma.ProcessorFarmerInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProcessorFarmerInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessorFarmerInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessorFarmerInputs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProcessorFarmerInputs
    **/
    _count?: true | ProcessorFarmerInputCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProcessorFarmerInputMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProcessorFarmerInputMaxAggregateInputType;
};
export type GetProcessorFarmerInputAggregateType<T extends ProcessorFarmerInputAggregateArgs> = {
    [P in keyof T & keyof AggregateProcessorFarmerInput]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProcessorFarmerInput[P]> : Prisma.GetScalarType<T[P], AggregateProcessorFarmerInput[P]>;
};
export type ProcessorFarmerInputGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProcessorFarmerInputWhereInput;
    orderBy?: Prisma.ProcessorFarmerInputOrderByWithAggregationInput | Prisma.ProcessorFarmerInputOrderByWithAggregationInput[];
    by: Prisma.ProcessorFarmerInputScalarFieldEnum[] | Prisma.ProcessorFarmerInputScalarFieldEnum;
    having?: Prisma.ProcessorFarmerInputScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProcessorFarmerInputCountAggregateInputType | true;
    _min?: ProcessorFarmerInputMinAggregateInputType;
    _max?: ProcessorFarmerInputMaxAggregateInputType;
};
export type ProcessorFarmerInputGroupByOutputType = {
    id: string;
    inventoryID: string;
    quantity: string;
    eventId: string;
    specie: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProcessorFarmerInputCountAggregateOutputType | null;
    _min: ProcessorFarmerInputMinAggregateOutputType | null;
    _max: ProcessorFarmerInputMaxAggregateOutputType | null;
};
type GetProcessorFarmerInputGroupByPayload<T extends ProcessorFarmerInputGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProcessorFarmerInputGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProcessorFarmerInputGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProcessorFarmerInputGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProcessorFarmerInputGroupByOutputType[P]>;
}>>;
export type ProcessorFarmerInputWhereInput = {
    AND?: Prisma.ProcessorFarmerInputWhereInput | Prisma.ProcessorFarmerInputWhereInput[];
    OR?: Prisma.ProcessorFarmerInputWhereInput[];
    NOT?: Prisma.ProcessorFarmerInputWhereInput | Prisma.ProcessorFarmerInputWhereInput[];
    id?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    inventoryID?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    quantity?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    eventId?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    specie?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProcessorFarmerInput"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProcessorFarmerInput"> | Date | string;
    inventory?: Prisma.XOR<Prisma.ProcessorInventoryScalarRelationFilter, Prisma.ProcessorInventoryWhereInput>;
};
export type ProcessorFarmerInputOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    inventoryID?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    inventory?: Prisma.ProcessorInventoryOrderByWithRelationInput;
};
export type ProcessorFarmerInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId?: string;
    AND?: Prisma.ProcessorFarmerInputWhereInput | Prisma.ProcessorFarmerInputWhereInput[];
    OR?: Prisma.ProcessorFarmerInputWhereInput[];
    NOT?: Prisma.ProcessorFarmerInputWhereInput | Prisma.ProcessorFarmerInputWhereInput[];
    inventoryID?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    quantity?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    specie?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProcessorFarmerInput"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProcessorFarmerInput"> | Date | string;
    inventory?: Prisma.XOR<Prisma.ProcessorInventoryScalarRelationFilter, Prisma.ProcessorInventoryWhereInput>;
}, "id" | "eventId">;
export type ProcessorFarmerInputOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    inventoryID?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProcessorFarmerInputCountOrderByAggregateInput;
    _max?: Prisma.ProcessorFarmerInputMaxOrderByAggregateInput;
    _min?: Prisma.ProcessorFarmerInputMinOrderByAggregateInput;
};
export type ProcessorFarmerInputScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProcessorFarmerInputScalarWhereWithAggregatesInput | Prisma.ProcessorFarmerInputScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProcessorFarmerInputScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProcessorFarmerInputScalarWhereWithAggregatesInput | Prisma.ProcessorFarmerInputScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProcessorFarmerInput"> | string;
    inventoryID?: Prisma.StringWithAggregatesFilter<"ProcessorFarmerInput"> | string;
    quantity?: Prisma.StringWithAggregatesFilter<"ProcessorFarmerInput"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"ProcessorFarmerInput"> | string;
    specie?: Prisma.StringWithAggregatesFilter<"ProcessorFarmerInput"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProcessorFarmerInput"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProcessorFarmerInput"> | Date | string;
};
export type ProcessorFarmerInputCreateInput = {
    id?: string;
    quantity: string;
    eventId: string;
    specie: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory: Prisma.ProcessorInventoryCreateNestedOneWithoutItemsInput;
};
export type ProcessorFarmerInputUncheckedCreateInput = {
    id?: string;
    inventoryID: string;
    quantity: string;
    eventId: string;
    specie: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessorFarmerInputUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ProcessorInventoryUpdateOneRequiredWithoutItemsNestedInput;
};
export type ProcessorFarmerInputUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryID?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessorFarmerInputCreateManyInput = {
    id?: string;
    inventoryID: string;
    quantity: string;
    eventId: string;
    specie: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessorFarmerInputUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessorFarmerInputUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryID?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessorFarmerInputListRelationFilter = {
    every?: Prisma.ProcessorFarmerInputWhereInput;
    some?: Prisma.ProcessorFarmerInputWhereInput;
    none?: Prisma.ProcessorFarmerInputWhereInput;
};
export type ProcessorFarmerInputOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProcessorFarmerInputCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventoryID?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessorFarmerInputMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventoryID?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessorFarmerInputMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventoryID?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessorFarmerInputCreateNestedManyWithoutInventoryInput = {
    create?: Prisma.XOR<Prisma.ProcessorFarmerInputCreateWithoutInventoryInput, Prisma.ProcessorFarmerInputUncheckedCreateWithoutInventoryInput> | Prisma.ProcessorFarmerInputCreateWithoutInventoryInput[] | Prisma.ProcessorFarmerInputUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: Prisma.ProcessorFarmerInputCreateOrConnectWithoutInventoryInput | Prisma.ProcessorFarmerInputCreateOrConnectWithoutInventoryInput[];
    createMany?: Prisma.ProcessorFarmerInputCreateManyInventoryInputEnvelope;
    connect?: Prisma.ProcessorFarmerInputWhereUniqueInput | Prisma.ProcessorFarmerInputWhereUniqueInput[];
};
export type ProcessorFarmerInputUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: Prisma.XOR<Prisma.ProcessorFarmerInputCreateWithoutInventoryInput, Prisma.ProcessorFarmerInputUncheckedCreateWithoutInventoryInput> | Prisma.ProcessorFarmerInputCreateWithoutInventoryInput[] | Prisma.ProcessorFarmerInputUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: Prisma.ProcessorFarmerInputCreateOrConnectWithoutInventoryInput | Prisma.ProcessorFarmerInputCreateOrConnectWithoutInventoryInput[];
    createMany?: Prisma.ProcessorFarmerInputCreateManyInventoryInputEnvelope;
    connect?: Prisma.ProcessorFarmerInputWhereUniqueInput | Prisma.ProcessorFarmerInputWhereUniqueInput[];
};
export type ProcessorFarmerInputUpdateManyWithoutInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessorFarmerInputCreateWithoutInventoryInput, Prisma.ProcessorFarmerInputUncheckedCreateWithoutInventoryInput> | Prisma.ProcessorFarmerInputCreateWithoutInventoryInput[] | Prisma.ProcessorFarmerInputUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: Prisma.ProcessorFarmerInputCreateOrConnectWithoutInventoryInput | Prisma.ProcessorFarmerInputCreateOrConnectWithoutInventoryInput[];
    upsert?: Prisma.ProcessorFarmerInputUpsertWithWhereUniqueWithoutInventoryInput | Prisma.ProcessorFarmerInputUpsertWithWhereUniqueWithoutInventoryInput[];
    createMany?: Prisma.ProcessorFarmerInputCreateManyInventoryInputEnvelope;
    set?: Prisma.ProcessorFarmerInputWhereUniqueInput | Prisma.ProcessorFarmerInputWhereUniqueInput[];
    disconnect?: Prisma.ProcessorFarmerInputWhereUniqueInput | Prisma.ProcessorFarmerInputWhereUniqueInput[];
    delete?: Prisma.ProcessorFarmerInputWhereUniqueInput | Prisma.ProcessorFarmerInputWhereUniqueInput[];
    connect?: Prisma.ProcessorFarmerInputWhereUniqueInput | Prisma.ProcessorFarmerInputWhereUniqueInput[];
    update?: Prisma.ProcessorFarmerInputUpdateWithWhereUniqueWithoutInventoryInput | Prisma.ProcessorFarmerInputUpdateWithWhereUniqueWithoutInventoryInput[];
    updateMany?: Prisma.ProcessorFarmerInputUpdateManyWithWhereWithoutInventoryInput | Prisma.ProcessorFarmerInputUpdateManyWithWhereWithoutInventoryInput[];
    deleteMany?: Prisma.ProcessorFarmerInputScalarWhereInput | Prisma.ProcessorFarmerInputScalarWhereInput[];
};
export type ProcessorFarmerInputUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessorFarmerInputCreateWithoutInventoryInput, Prisma.ProcessorFarmerInputUncheckedCreateWithoutInventoryInput> | Prisma.ProcessorFarmerInputCreateWithoutInventoryInput[] | Prisma.ProcessorFarmerInputUncheckedCreateWithoutInventoryInput[];
    connectOrCreate?: Prisma.ProcessorFarmerInputCreateOrConnectWithoutInventoryInput | Prisma.ProcessorFarmerInputCreateOrConnectWithoutInventoryInput[];
    upsert?: Prisma.ProcessorFarmerInputUpsertWithWhereUniqueWithoutInventoryInput | Prisma.ProcessorFarmerInputUpsertWithWhereUniqueWithoutInventoryInput[];
    createMany?: Prisma.ProcessorFarmerInputCreateManyInventoryInputEnvelope;
    set?: Prisma.ProcessorFarmerInputWhereUniqueInput | Prisma.ProcessorFarmerInputWhereUniqueInput[];
    disconnect?: Prisma.ProcessorFarmerInputWhereUniqueInput | Prisma.ProcessorFarmerInputWhereUniqueInput[];
    delete?: Prisma.ProcessorFarmerInputWhereUniqueInput | Prisma.ProcessorFarmerInputWhereUniqueInput[];
    connect?: Prisma.ProcessorFarmerInputWhereUniqueInput | Prisma.ProcessorFarmerInputWhereUniqueInput[];
    update?: Prisma.ProcessorFarmerInputUpdateWithWhereUniqueWithoutInventoryInput | Prisma.ProcessorFarmerInputUpdateWithWhereUniqueWithoutInventoryInput[];
    updateMany?: Prisma.ProcessorFarmerInputUpdateManyWithWhereWithoutInventoryInput | Prisma.ProcessorFarmerInputUpdateManyWithWhereWithoutInventoryInput[];
    deleteMany?: Prisma.ProcessorFarmerInputScalarWhereInput | Prisma.ProcessorFarmerInputScalarWhereInput[];
};
export type ProcessorFarmerInputCreateWithoutInventoryInput = {
    id?: string;
    quantity: string;
    eventId: string;
    specie: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessorFarmerInputUncheckedCreateWithoutInventoryInput = {
    id?: string;
    quantity: string;
    eventId: string;
    specie: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessorFarmerInputCreateOrConnectWithoutInventoryInput = {
    where: Prisma.ProcessorFarmerInputWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProcessorFarmerInputCreateWithoutInventoryInput, Prisma.ProcessorFarmerInputUncheckedCreateWithoutInventoryInput>;
};
export type ProcessorFarmerInputCreateManyInventoryInputEnvelope = {
    data: Prisma.ProcessorFarmerInputCreateManyInventoryInput | Prisma.ProcessorFarmerInputCreateManyInventoryInput[];
    skipDuplicates?: boolean;
};
export type ProcessorFarmerInputUpsertWithWhereUniqueWithoutInventoryInput = {
    where: Prisma.ProcessorFarmerInputWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProcessorFarmerInputUpdateWithoutInventoryInput, Prisma.ProcessorFarmerInputUncheckedUpdateWithoutInventoryInput>;
    create: Prisma.XOR<Prisma.ProcessorFarmerInputCreateWithoutInventoryInput, Prisma.ProcessorFarmerInputUncheckedCreateWithoutInventoryInput>;
};
export type ProcessorFarmerInputUpdateWithWhereUniqueWithoutInventoryInput = {
    where: Prisma.ProcessorFarmerInputWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProcessorFarmerInputUpdateWithoutInventoryInput, Prisma.ProcessorFarmerInputUncheckedUpdateWithoutInventoryInput>;
};
export type ProcessorFarmerInputUpdateManyWithWhereWithoutInventoryInput = {
    where: Prisma.ProcessorFarmerInputScalarWhereInput;
    data: Prisma.XOR<Prisma.ProcessorFarmerInputUpdateManyMutationInput, Prisma.ProcessorFarmerInputUncheckedUpdateManyWithoutInventoryInput>;
};
export type ProcessorFarmerInputScalarWhereInput = {
    AND?: Prisma.ProcessorFarmerInputScalarWhereInput | Prisma.ProcessorFarmerInputScalarWhereInput[];
    OR?: Prisma.ProcessorFarmerInputScalarWhereInput[];
    NOT?: Prisma.ProcessorFarmerInputScalarWhereInput | Prisma.ProcessorFarmerInputScalarWhereInput[];
    id?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    inventoryID?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    quantity?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    eventId?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    specie?: Prisma.StringFilter<"ProcessorFarmerInput"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProcessorFarmerInput"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProcessorFarmerInput"> | Date | string;
};
export type ProcessorFarmerInputCreateManyInventoryInput = {
    id?: string;
    quantity: string;
    eventId: string;
    specie: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessorFarmerInputUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessorFarmerInputUncheckedUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessorFarmerInputUncheckedUpdateManyWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessorFarmerInputSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventoryID?: boolean;
    quantity?: boolean;
    eventId?: boolean;
    specie?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    inventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["processorFarmerInput"]>;
export type ProcessorFarmerInputSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventoryID?: boolean;
    quantity?: boolean;
    eventId?: boolean;
    specie?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    inventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["processorFarmerInput"]>;
export type ProcessorFarmerInputSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventoryID?: boolean;
    quantity?: boolean;
    eventId?: boolean;
    specie?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    inventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["processorFarmerInput"]>;
export type ProcessorFarmerInputSelectScalar = {
    id?: boolean;
    inventoryID?: boolean;
    quantity?: boolean;
    eventId?: boolean;
    specie?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProcessorFarmerInputOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "inventoryID" | "quantity" | "eventId" | "specie" | "createdAt" | "updatedAt", ExtArgs["result"]["processorFarmerInput"]>;
export type ProcessorFarmerInputInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
};
export type ProcessorFarmerInputIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
};
export type ProcessorFarmerInputIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
};
export type $ProcessorFarmerInputPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProcessorFarmerInput";
    objects: {
        inventory: Prisma.$ProcessorInventoryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        inventoryID: string;
        quantity: string;
        eventId: string;
        specie: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["processorFarmerInput"]>;
    composites: {};
};
export type ProcessorFarmerInputGetPayload<S extends boolean | null | undefined | ProcessorFarmerInputDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload, S>;
export type ProcessorFarmerInputCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProcessorFarmerInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProcessorFarmerInputCountAggregateInputType | true;
};
export interface ProcessorFarmerInputDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProcessorFarmerInput'];
        meta: {
            name: 'ProcessorFarmerInput';
        };
    };
    /**
     * Find zero or one ProcessorFarmerInput that matches the filter.
     * @param {ProcessorFarmerInputFindUniqueArgs} args - Arguments to find a ProcessorFarmerInput
     * @example
     * // Get one ProcessorFarmerInput
     * const processorFarmerInput = await prisma.processorFarmerInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessorFarmerInputFindUniqueArgs>(args: Prisma.SelectSubset<T, ProcessorFarmerInputFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProcessorFarmerInputClient<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProcessorFarmerInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessorFarmerInputFindUniqueOrThrowArgs} args - Arguments to find a ProcessorFarmerInput
     * @example
     * // Get one ProcessorFarmerInput
     * const processorFarmerInput = await prisma.processorFarmerInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessorFarmerInputFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProcessorFarmerInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProcessorFarmerInputClient<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProcessorFarmerInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorFarmerInputFindFirstArgs} args - Arguments to find a ProcessorFarmerInput
     * @example
     * // Get one ProcessorFarmerInput
     * const processorFarmerInput = await prisma.processorFarmerInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessorFarmerInputFindFirstArgs>(args?: Prisma.SelectSubset<T, ProcessorFarmerInputFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProcessorFarmerInputClient<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProcessorFarmerInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorFarmerInputFindFirstOrThrowArgs} args - Arguments to find a ProcessorFarmerInput
     * @example
     * // Get one ProcessorFarmerInput
     * const processorFarmerInput = await prisma.processorFarmerInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessorFarmerInputFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProcessorFarmerInputFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProcessorFarmerInputClient<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProcessorFarmerInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorFarmerInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessorFarmerInputs
     * const processorFarmerInputs = await prisma.processorFarmerInput.findMany()
     *
     * // Get first 10 ProcessorFarmerInputs
     * const processorFarmerInputs = await prisma.processorFarmerInput.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const processorFarmerInputWithIdOnly = await prisma.processorFarmerInput.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProcessorFarmerInputFindManyArgs>(args?: Prisma.SelectSubset<T, ProcessorFarmerInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProcessorFarmerInput.
     * @param {ProcessorFarmerInputCreateArgs} args - Arguments to create a ProcessorFarmerInput.
     * @example
     * // Create one ProcessorFarmerInput
     * const ProcessorFarmerInput = await prisma.processorFarmerInput.create({
     *   data: {
     *     // ... data to create a ProcessorFarmerInput
     *   }
     * })
     *
     */
    create<T extends ProcessorFarmerInputCreateArgs>(args: Prisma.SelectSubset<T, ProcessorFarmerInputCreateArgs<ExtArgs>>): Prisma.Prisma__ProcessorFarmerInputClient<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProcessorFarmerInputs.
     * @param {ProcessorFarmerInputCreateManyArgs} args - Arguments to create many ProcessorFarmerInputs.
     * @example
     * // Create many ProcessorFarmerInputs
     * const processorFarmerInput = await prisma.processorFarmerInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProcessorFarmerInputCreateManyArgs>(args?: Prisma.SelectSubset<T, ProcessorFarmerInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProcessorFarmerInputs and returns the data saved in the database.
     * @param {ProcessorFarmerInputCreateManyAndReturnArgs} args - Arguments to create many ProcessorFarmerInputs.
     * @example
     * // Create many ProcessorFarmerInputs
     * const processorFarmerInput = await prisma.processorFarmerInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProcessorFarmerInputs and only return the `id`
     * const processorFarmerInputWithIdOnly = await prisma.processorFarmerInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProcessorFarmerInputCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProcessorFarmerInputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProcessorFarmerInput.
     * @param {ProcessorFarmerInputDeleteArgs} args - Arguments to delete one ProcessorFarmerInput.
     * @example
     * // Delete one ProcessorFarmerInput
     * const ProcessorFarmerInput = await prisma.processorFarmerInput.delete({
     *   where: {
     *     // ... filter to delete one ProcessorFarmerInput
     *   }
     * })
     *
     */
    delete<T extends ProcessorFarmerInputDeleteArgs>(args: Prisma.SelectSubset<T, ProcessorFarmerInputDeleteArgs<ExtArgs>>): Prisma.Prisma__ProcessorFarmerInputClient<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProcessorFarmerInput.
     * @param {ProcessorFarmerInputUpdateArgs} args - Arguments to update one ProcessorFarmerInput.
     * @example
     * // Update one ProcessorFarmerInput
     * const processorFarmerInput = await prisma.processorFarmerInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProcessorFarmerInputUpdateArgs>(args: Prisma.SelectSubset<T, ProcessorFarmerInputUpdateArgs<ExtArgs>>): Prisma.Prisma__ProcessorFarmerInputClient<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProcessorFarmerInputs.
     * @param {ProcessorFarmerInputDeleteManyArgs} args - Arguments to filter ProcessorFarmerInputs to delete.
     * @example
     * // Delete a few ProcessorFarmerInputs
     * const { count } = await prisma.processorFarmerInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProcessorFarmerInputDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProcessorFarmerInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProcessorFarmerInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorFarmerInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessorFarmerInputs
     * const processorFarmerInput = await prisma.processorFarmerInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProcessorFarmerInputUpdateManyArgs>(args: Prisma.SelectSubset<T, ProcessorFarmerInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProcessorFarmerInputs and returns the data updated in the database.
     * @param {ProcessorFarmerInputUpdateManyAndReturnArgs} args - Arguments to update many ProcessorFarmerInputs.
     * @example
     * // Update many ProcessorFarmerInputs
     * const processorFarmerInput = await prisma.processorFarmerInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProcessorFarmerInputs and only return the `id`
     * const processorFarmerInputWithIdOnly = await prisma.processorFarmerInput.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessorFarmerInputUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProcessorFarmerInputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProcessorFarmerInput.
     * @param {ProcessorFarmerInputUpsertArgs} args - Arguments to update or create a ProcessorFarmerInput.
     * @example
     * // Update or create a ProcessorFarmerInput
     * const processorFarmerInput = await prisma.processorFarmerInput.upsert({
     *   create: {
     *     // ... data to create a ProcessorFarmerInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessorFarmerInput we want to update
     *   }
     * })
     */
    upsert<T extends ProcessorFarmerInputUpsertArgs>(args: Prisma.SelectSubset<T, ProcessorFarmerInputUpsertArgs<ExtArgs>>): Prisma.Prisma__ProcessorFarmerInputClient<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProcessorFarmerInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorFarmerInputCountArgs} args - Arguments to filter ProcessorFarmerInputs to count.
     * @example
     * // Count the number of ProcessorFarmerInputs
     * const count = await prisma.processorFarmerInput.count({
     *   where: {
     *     // ... the filter for the ProcessorFarmerInputs we want to count
     *   }
     * })
    **/
    count<T extends ProcessorFarmerInputCountArgs>(args?: Prisma.Subset<T, ProcessorFarmerInputCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProcessorFarmerInputCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProcessorFarmerInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorFarmerInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessorFarmerInputAggregateArgs>(args: Prisma.Subset<T, ProcessorFarmerInputAggregateArgs>): Prisma.PrismaPromise<GetProcessorFarmerInputAggregateType<T>>;
    /**
     * Group by ProcessorFarmerInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorFarmerInputGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProcessorFarmerInputGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProcessorFarmerInputGroupByArgs['orderBy'];
    } : {
        orderBy?: ProcessorFarmerInputGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProcessorFarmerInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessorFarmerInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProcessorFarmerInput model
     */
    readonly fields: ProcessorFarmerInputFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProcessorFarmerInput.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProcessorFarmerInputClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory<T extends Prisma.ProcessorInventoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProcessorInventoryDefaultArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProcessorFarmerInput model
 */
export interface ProcessorFarmerInputFieldRefs {
    readonly id: Prisma.FieldRef<"ProcessorFarmerInput", 'String'>;
    readonly inventoryID: Prisma.FieldRef<"ProcessorFarmerInput", 'String'>;
    readonly quantity: Prisma.FieldRef<"ProcessorFarmerInput", 'String'>;
    readonly eventId: Prisma.FieldRef<"ProcessorFarmerInput", 'String'>;
    readonly specie: Prisma.FieldRef<"ProcessorFarmerInput", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProcessorFarmerInput", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProcessorFarmerInput", 'DateTime'>;
}
/**
 * ProcessorFarmerInput findUnique
 */
export type ProcessorFarmerInputFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessorFarmerInput to fetch.
     */
    where: Prisma.ProcessorFarmerInputWhereUniqueInput;
};
/**
 * ProcessorFarmerInput findUniqueOrThrow
 */
export type ProcessorFarmerInputFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessorFarmerInput to fetch.
     */
    where: Prisma.ProcessorFarmerInputWhereUniqueInput;
};
/**
 * ProcessorFarmerInput findFirst
 */
export type ProcessorFarmerInputFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessorFarmerInput to fetch.
     */
    where?: Prisma.ProcessorFarmerInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessorFarmerInputs to fetch.
     */
    orderBy?: Prisma.ProcessorFarmerInputOrderByWithRelationInput | Prisma.ProcessorFarmerInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProcessorFarmerInputs.
     */
    cursor?: Prisma.ProcessorFarmerInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessorFarmerInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessorFarmerInputs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProcessorFarmerInputs.
     */
    distinct?: Prisma.ProcessorFarmerInputScalarFieldEnum | Prisma.ProcessorFarmerInputScalarFieldEnum[];
};
/**
 * ProcessorFarmerInput findFirstOrThrow
 */
export type ProcessorFarmerInputFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessorFarmerInput to fetch.
     */
    where?: Prisma.ProcessorFarmerInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessorFarmerInputs to fetch.
     */
    orderBy?: Prisma.ProcessorFarmerInputOrderByWithRelationInput | Prisma.ProcessorFarmerInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProcessorFarmerInputs.
     */
    cursor?: Prisma.ProcessorFarmerInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessorFarmerInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessorFarmerInputs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProcessorFarmerInputs.
     */
    distinct?: Prisma.ProcessorFarmerInputScalarFieldEnum | Prisma.ProcessorFarmerInputScalarFieldEnum[];
};
/**
 * ProcessorFarmerInput findMany
 */
export type ProcessorFarmerInputFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessorFarmerInputs to fetch.
     */
    where?: Prisma.ProcessorFarmerInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessorFarmerInputs to fetch.
     */
    orderBy?: Prisma.ProcessorFarmerInputOrderByWithRelationInput | Prisma.ProcessorFarmerInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProcessorFarmerInputs.
     */
    cursor?: Prisma.ProcessorFarmerInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessorFarmerInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessorFarmerInputs.
     */
    skip?: number;
    distinct?: Prisma.ProcessorFarmerInputScalarFieldEnum | Prisma.ProcessorFarmerInputScalarFieldEnum[];
};
/**
 * ProcessorFarmerInput create
 */
export type ProcessorFarmerInputCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProcessorFarmerInput.
     */
    data: Prisma.XOR<Prisma.ProcessorFarmerInputCreateInput, Prisma.ProcessorFarmerInputUncheckedCreateInput>;
};
/**
 * ProcessorFarmerInput createMany
 */
export type ProcessorFarmerInputCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessorFarmerInputs.
     */
    data: Prisma.ProcessorFarmerInputCreateManyInput | Prisma.ProcessorFarmerInputCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProcessorFarmerInput createManyAndReturn
 */
export type ProcessorFarmerInputCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * The data used to create many ProcessorFarmerInputs.
     */
    data: Prisma.ProcessorFarmerInputCreateManyInput | Prisma.ProcessorFarmerInputCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProcessorFarmerInput update
 */
export type ProcessorFarmerInputUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProcessorFarmerInput.
     */
    data: Prisma.XOR<Prisma.ProcessorFarmerInputUpdateInput, Prisma.ProcessorFarmerInputUncheckedUpdateInput>;
    /**
     * Choose, which ProcessorFarmerInput to update.
     */
    where: Prisma.ProcessorFarmerInputWhereUniqueInput;
};
/**
 * ProcessorFarmerInput updateMany
 */
export type ProcessorFarmerInputUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessorFarmerInputs.
     */
    data: Prisma.XOR<Prisma.ProcessorFarmerInputUpdateManyMutationInput, Prisma.ProcessorFarmerInputUncheckedUpdateManyInput>;
    /**
     * Filter which ProcessorFarmerInputs to update
     */
    where?: Prisma.ProcessorFarmerInputWhereInput;
    /**
     * Limit how many ProcessorFarmerInputs to update.
     */
    limit?: number;
};
/**
 * ProcessorFarmerInput updateManyAndReturn
 */
export type ProcessorFarmerInputUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * The data used to update ProcessorFarmerInputs.
     */
    data: Prisma.XOR<Prisma.ProcessorFarmerInputUpdateManyMutationInput, Prisma.ProcessorFarmerInputUncheckedUpdateManyInput>;
    /**
     * Filter which ProcessorFarmerInputs to update
     */
    where?: Prisma.ProcessorFarmerInputWhereInput;
    /**
     * Limit how many ProcessorFarmerInputs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProcessorFarmerInput upsert
 */
export type ProcessorFarmerInputUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProcessorFarmerInput to update in case it exists.
     */
    where: Prisma.ProcessorFarmerInputWhereUniqueInput;
    /**
     * In case the ProcessorFarmerInput found by the `where` argument doesn't exist, create a new ProcessorFarmerInput with this data.
     */
    create: Prisma.XOR<Prisma.ProcessorFarmerInputCreateInput, Prisma.ProcessorFarmerInputUncheckedCreateInput>;
    /**
     * In case the ProcessorFarmerInput was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProcessorFarmerInputUpdateInput, Prisma.ProcessorFarmerInputUncheckedUpdateInput>;
};
/**
 * ProcessorFarmerInput delete
 */
export type ProcessorFarmerInputDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputInclude<ExtArgs> | null;
    /**
     * Filter which ProcessorFarmerInput to delete.
     */
    where: Prisma.ProcessorFarmerInputWhereUniqueInput;
};
/**
 * ProcessorFarmerInput deleteMany
 */
export type ProcessorFarmerInputDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessorFarmerInputs to delete
     */
    where?: Prisma.ProcessorFarmerInputWhereInput;
    /**
     * Limit how many ProcessorFarmerInputs to delete.
     */
    limit?: number;
};
/**
 * ProcessorFarmerInput without action
 */
export type ProcessorFarmerInputDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorFarmerInput
     */
    select?: Prisma.ProcessorFarmerInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorFarmerInput
     */
    omit?: Prisma.ProcessorFarmerInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorFarmerInputInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ProcessorFarmerInput.d.ts.map