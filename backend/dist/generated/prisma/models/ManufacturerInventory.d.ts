import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ManufacturerInventory
 *
 */
export type ManufacturerInventoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ManufacturerInventoryPayload>;
export type AggregateManufacturerInventory = {
    _count: ManufacturerInventoryCountAggregateOutputType | null;
    _min: ManufacturerInventoryMinAggregateOutputType | null;
    _max: ManufacturerInventoryMaxAggregateOutputType | null;
};
export type ManufacturerInventoryMinAggregateOutputType = {
    id: string | null;
    manufacturerId: string | null;
    inventoryName: string | null;
    assignedGrade: string | null;
    isprocessingDone: boolean | null;
    processinglist: string | null;
    specie: string | null;
    finalQuantity: string | null;
    sendedToLab: string | null;
};
export type ManufacturerInventoryMaxAggregateOutputType = {
    id: string | null;
    manufacturerId: string | null;
    inventoryName: string | null;
    assignedGrade: string | null;
    isprocessingDone: boolean | null;
    processinglist: string | null;
    specie: string | null;
    finalQuantity: string | null;
    sendedToLab: string | null;
};
export type ManufacturerInventoryCountAggregateOutputType = {
    id: number;
    manufacturerId: number;
    inventoryName: number;
    assignedGrade: number;
    isprocessingDone: number;
    processinglist: number;
    specie: number;
    finalQuantity: number;
    sendedToLab: number;
    _all: number;
};
export type ManufacturerInventoryMinAggregateInputType = {
    id?: true;
    manufacturerId?: true;
    inventoryName?: true;
    assignedGrade?: true;
    isprocessingDone?: true;
    processinglist?: true;
    specie?: true;
    finalQuantity?: true;
    sendedToLab?: true;
};
export type ManufacturerInventoryMaxAggregateInputType = {
    id?: true;
    manufacturerId?: true;
    inventoryName?: true;
    assignedGrade?: true;
    isprocessingDone?: true;
    processinglist?: true;
    specie?: true;
    finalQuantity?: true;
    sendedToLab?: true;
};
export type ManufacturerInventoryCountAggregateInputType = {
    id?: true;
    manufacturerId?: true;
    inventoryName?: true;
    assignedGrade?: true;
    isprocessingDone?: true;
    processinglist?: true;
    specie?: true;
    finalQuantity?: true;
    sendedToLab?: true;
    _all?: true;
};
export type ManufacturerInventoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ManufacturerInventory to aggregate.
     */
    where?: Prisma.ManufacturerInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ManufacturerInventories to fetch.
     */
    orderBy?: Prisma.ManufacturerInventoryOrderByWithRelationInput | Prisma.ManufacturerInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ManufacturerInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ManufacturerInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ManufacturerInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ManufacturerInventories
    **/
    _count?: true | ManufacturerInventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ManufacturerInventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ManufacturerInventoryMaxAggregateInputType;
};
export type GetManufacturerInventoryAggregateType<T extends ManufacturerInventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateManufacturerInventory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateManufacturerInventory[P]> : Prisma.GetScalarType<T[P], AggregateManufacturerInventory[P]>;
};
export type ManufacturerInventoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ManufacturerInventoryWhereInput;
    orderBy?: Prisma.ManufacturerInventoryOrderByWithAggregationInput | Prisma.ManufacturerInventoryOrderByWithAggregationInput[];
    by: Prisma.ManufacturerInventoryScalarFieldEnum[] | Prisma.ManufacturerInventoryScalarFieldEnum;
    having?: Prisma.ManufacturerInventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ManufacturerInventoryCountAggregateInputType | true;
    _min?: ManufacturerInventoryMinAggregateInputType;
    _max?: ManufacturerInventoryMaxAggregateInputType;
};
export type ManufacturerInventoryGroupByOutputType = {
    id: string;
    manufacturerId: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone: boolean;
    processinglist: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    _count: ManufacturerInventoryCountAggregateOutputType | null;
    _min: ManufacturerInventoryMinAggregateOutputType | null;
    _max: ManufacturerInventoryMaxAggregateOutputType | null;
};
type GetManufacturerInventoryGroupByPayload<T extends ManufacturerInventoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ManufacturerInventoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ManufacturerInventoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ManufacturerInventoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ManufacturerInventoryGroupByOutputType[P]>;
}>>;
export type ManufacturerInventoryWhereInput = {
    AND?: Prisma.ManufacturerInventoryWhereInput | Prisma.ManufacturerInventoryWhereInput[];
    OR?: Prisma.ManufacturerInventoryWhereInput[];
    NOT?: Prisma.ManufacturerInventoryWhereInput | Prisma.ManufacturerInventoryWhereInput[];
    id?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    manufacturerId?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    inventoryName?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    assignedGrade?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    isprocessingDone?: Prisma.BoolFilter<"ManufacturerInventory"> | boolean;
    processinglist?: Prisma.StringNullableFilter<"ManufacturerInventory"> | string | null;
    specie?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    finalQuantity?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    sendedToLab?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    manufacturer?: Prisma.XOR<Prisma.ManufacturerScalarRelationFilter, Prisma.ManufacturerWhereInput>;
};
export type ManufacturerInventoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    manufacturerId?: Prisma.SortOrder;
    inventoryName?: Prisma.SortOrder;
    assignedGrade?: Prisma.SortOrder;
    isprocessingDone?: Prisma.SortOrder;
    processinglist?: Prisma.SortOrderInput | Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    finalQuantity?: Prisma.SortOrder;
    sendedToLab?: Prisma.SortOrder;
    manufacturer?: Prisma.ManufacturerOrderByWithRelationInput;
};
export type ManufacturerInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ManufacturerInventoryWhereInput | Prisma.ManufacturerInventoryWhereInput[];
    OR?: Prisma.ManufacturerInventoryWhereInput[];
    NOT?: Prisma.ManufacturerInventoryWhereInput | Prisma.ManufacturerInventoryWhereInput[];
    manufacturerId?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    inventoryName?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    assignedGrade?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    isprocessingDone?: Prisma.BoolFilter<"ManufacturerInventory"> | boolean;
    processinglist?: Prisma.StringNullableFilter<"ManufacturerInventory"> | string | null;
    specie?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    finalQuantity?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    sendedToLab?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    manufacturer?: Prisma.XOR<Prisma.ManufacturerScalarRelationFilter, Prisma.ManufacturerWhereInput>;
}, "id">;
export type ManufacturerInventoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    manufacturerId?: Prisma.SortOrder;
    inventoryName?: Prisma.SortOrder;
    assignedGrade?: Prisma.SortOrder;
    isprocessingDone?: Prisma.SortOrder;
    processinglist?: Prisma.SortOrderInput | Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    finalQuantity?: Prisma.SortOrder;
    sendedToLab?: Prisma.SortOrder;
    _count?: Prisma.ManufacturerInventoryCountOrderByAggregateInput;
    _max?: Prisma.ManufacturerInventoryMaxOrderByAggregateInput;
    _min?: Prisma.ManufacturerInventoryMinOrderByAggregateInput;
};
export type ManufacturerInventoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ManufacturerInventoryScalarWhereWithAggregatesInput | Prisma.ManufacturerInventoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ManufacturerInventoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ManufacturerInventoryScalarWhereWithAggregatesInput | Prisma.ManufacturerInventoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ManufacturerInventory"> | string;
    manufacturerId?: Prisma.StringWithAggregatesFilter<"ManufacturerInventory"> | string;
    inventoryName?: Prisma.StringWithAggregatesFilter<"ManufacturerInventory"> | string;
    assignedGrade?: Prisma.StringWithAggregatesFilter<"ManufacturerInventory"> | string;
    isprocessingDone?: Prisma.BoolWithAggregatesFilter<"ManufacturerInventory"> | boolean;
    processinglist?: Prisma.StringNullableWithAggregatesFilter<"ManufacturerInventory"> | string | null;
    specie?: Prisma.StringWithAggregatesFilter<"ManufacturerInventory"> | string;
    finalQuantity?: Prisma.StringWithAggregatesFilter<"ManufacturerInventory"> | string;
    sendedToLab?: Prisma.StringWithAggregatesFilter<"ManufacturerInventory"> | string;
};
export type ManufacturerInventoryCreateInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    manufacturer: Prisma.ManufacturerCreateNestedOneWithoutInventoriesInput;
};
export type ManufacturerInventoryUncheckedCreateInput = {
    id?: string;
    manufacturerId: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
};
export type ManufacturerInventoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.ManufacturerUpdateOneRequiredWithoutInventoriesNestedInput;
};
export type ManufacturerInventoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturerId?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerInventoryCreateManyInput = {
    id?: string;
    manufacturerId: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
};
export type ManufacturerInventoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerInventoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturerId?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerInventoryListRelationFilter = {
    every?: Prisma.ManufacturerInventoryWhereInput;
    some?: Prisma.ManufacturerInventoryWhereInput;
    none?: Prisma.ManufacturerInventoryWhereInput;
};
export type ManufacturerInventoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ManufacturerInventoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    manufacturerId?: Prisma.SortOrder;
    inventoryName?: Prisma.SortOrder;
    assignedGrade?: Prisma.SortOrder;
    isprocessingDone?: Prisma.SortOrder;
    processinglist?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    finalQuantity?: Prisma.SortOrder;
    sendedToLab?: Prisma.SortOrder;
};
export type ManufacturerInventoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    manufacturerId?: Prisma.SortOrder;
    inventoryName?: Prisma.SortOrder;
    assignedGrade?: Prisma.SortOrder;
    isprocessingDone?: Prisma.SortOrder;
    processinglist?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    finalQuantity?: Prisma.SortOrder;
    sendedToLab?: Prisma.SortOrder;
};
export type ManufacturerInventoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    manufacturerId?: Prisma.SortOrder;
    inventoryName?: Prisma.SortOrder;
    assignedGrade?: Prisma.SortOrder;
    isprocessingDone?: Prisma.SortOrder;
    processinglist?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    finalQuantity?: Prisma.SortOrder;
    sendedToLab?: Prisma.SortOrder;
};
export type ManufacturerInventoryCreateNestedManyWithoutManufacturerInput = {
    create?: Prisma.XOR<Prisma.ManufacturerInventoryCreateWithoutManufacturerInput, Prisma.ManufacturerInventoryUncheckedCreateWithoutManufacturerInput> | Prisma.ManufacturerInventoryCreateWithoutManufacturerInput[] | Prisma.ManufacturerInventoryUncheckedCreateWithoutManufacturerInput[];
    connectOrCreate?: Prisma.ManufacturerInventoryCreateOrConnectWithoutManufacturerInput | Prisma.ManufacturerInventoryCreateOrConnectWithoutManufacturerInput[];
    createMany?: Prisma.ManufacturerInventoryCreateManyManufacturerInputEnvelope;
    connect?: Prisma.ManufacturerInventoryWhereUniqueInput | Prisma.ManufacturerInventoryWhereUniqueInput[];
};
export type ManufacturerInventoryUncheckedCreateNestedManyWithoutManufacturerInput = {
    create?: Prisma.XOR<Prisma.ManufacturerInventoryCreateWithoutManufacturerInput, Prisma.ManufacturerInventoryUncheckedCreateWithoutManufacturerInput> | Prisma.ManufacturerInventoryCreateWithoutManufacturerInput[] | Prisma.ManufacturerInventoryUncheckedCreateWithoutManufacturerInput[];
    connectOrCreate?: Prisma.ManufacturerInventoryCreateOrConnectWithoutManufacturerInput | Prisma.ManufacturerInventoryCreateOrConnectWithoutManufacturerInput[];
    createMany?: Prisma.ManufacturerInventoryCreateManyManufacturerInputEnvelope;
    connect?: Prisma.ManufacturerInventoryWhereUniqueInput | Prisma.ManufacturerInventoryWhereUniqueInput[];
};
export type ManufacturerInventoryUpdateManyWithoutManufacturerNestedInput = {
    create?: Prisma.XOR<Prisma.ManufacturerInventoryCreateWithoutManufacturerInput, Prisma.ManufacturerInventoryUncheckedCreateWithoutManufacturerInput> | Prisma.ManufacturerInventoryCreateWithoutManufacturerInput[] | Prisma.ManufacturerInventoryUncheckedCreateWithoutManufacturerInput[];
    connectOrCreate?: Prisma.ManufacturerInventoryCreateOrConnectWithoutManufacturerInput | Prisma.ManufacturerInventoryCreateOrConnectWithoutManufacturerInput[];
    upsert?: Prisma.ManufacturerInventoryUpsertWithWhereUniqueWithoutManufacturerInput | Prisma.ManufacturerInventoryUpsertWithWhereUniqueWithoutManufacturerInput[];
    createMany?: Prisma.ManufacturerInventoryCreateManyManufacturerInputEnvelope;
    set?: Prisma.ManufacturerInventoryWhereUniqueInput | Prisma.ManufacturerInventoryWhereUniqueInput[];
    disconnect?: Prisma.ManufacturerInventoryWhereUniqueInput | Prisma.ManufacturerInventoryWhereUniqueInput[];
    delete?: Prisma.ManufacturerInventoryWhereUniqueInput | Prisma.ManufacturerInventoryWhereUniqueInput[];
    connect?: Prisma.ManufacturerInventoryWhereUniqueInput | Prisma.ManufacturerInventoryWhereUniqueInput[];
    update?: Prisma.ManufacturerInventoryUpdateWithWhereUniqueWithoutManufacturerInput | Prisma.ManufacturerInventoryUpdateWithWhereUniqueWithoutManufacturerInput[];
    updateMany?: Prisma.ManufacturerInventoryUpdateManyWithWhereWithoutManufacturerInput | Prisma.ManufacturerInventoryUpdateManyWithWhereWithoutManufacturerInput[];
    deleteMany?: Prisma.ManufacturerInventoryScalarWhereInput | Prisma.ManufacturerInventoryScalarWhereInput[];
};
export type ManufacturerInventoryUncheckedUpdateManyWithoutManufacturerNestedInput = {
    create?: Prisma.XOR<Prisma.ManufacturerInventoryCreateWithoutManufacturerInput, Prisma.ManufacturerInventoryUncheckedCreateWithoutManufacturerInput> | Prisma.ManufacturerInventoryCreateWithoutManufacturerInput[] | Prisma.ManufacturerInventoryUncheckedCreateWithoutManufacturerInput[];
    connectOrCreate?: Prisma.ManufacturerInventoryCreateOrConnectWithoutManufacturerInput | Prisma.ManufacturerInventoryCreateOrConnectWithoutManufacturerInput[];
    upsert?: Prisma.ManufacturerInventoryUpsertWithWhereUniqueWithoutManufacturerInput | Prisma.ManufacturerInventoryUpsertWithWhereUniqueWithoutManufacturerInput[];
    createMany?: Prisma.ManufacturerInventoryCreateManyManufacturerInputEnvelope;
    set?: Prisma.ManufacturerInventoryWhereUniqueInput | Prisma.ManufacturerInventoryWhereUniqueInput[];
    disconnect?: Prisma.ManufacturerInventoryWhereUniqueInput | Prisma.ManufacturerInventoryWhereUniqueInput[];
    delete?: Prisma.ManufacturerInventoryWhereUniqueInput | Prisma.ManufacturerInventoryWhereUniqueInput[];
    connect?: Prisma.ManufacturerInventoryWhereUniqueInput | Prisma.ManufacturerInventoryWhereUniqueInput[];
    update?: Prisma.ManufacturerInventoryUpdateWithWhereUniqueWithoutManufacturerInput | Prisma.ManufacturerInventoryUpdateWithWhereUniqueWithoutManufacturerInput[];
    updateMany?: Prisma.ManufacturerInventoryUpdateManyWithWhereWithoutManufacturerInput | Prisma.ManufacturerInventoryUpdateManyWithWhereWithoutManufacturerInput[];
    deleteMany?: Prisma.ManufacturerInventoryScalarWhereInput | Prisma.ManufacturerInventoryScalarWhereInput[];
};
export type ManufacturerInventoryCreateWithoutManufacturerInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
};
export type ManufacturerInventoryUncheckedCreateWithoutManufacturerInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
};
export type ManufacturerInventoryCreateOrConnectWithoutManufacturerInput = {
    where: Prisma.ManufacturerInventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ManufacturerInventoryCreateWithoutManufacturerInput, Prisma.ManufacturerInventoryUncheckedCreateWithoutManufacturerInput>;
};
export type ManufacturerInventoryCreateManyManufacturerInputEnvelope = {
    data: Prisma.ManufacturerInventoryCreateManyManufacturerInput | Prisma.ManufacturerInventoryCreateManyManufacturerInput[];
    skipDuplicates?: boolean;
};
export type ManufacturerInventoryUpsertWithWhereUniqueWithoutManufacturerInput = {
    where: Prisma.ManufacturerInventoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ManufacturerInventoryUpdateWithoutManufacturerInput, Prisma.ManufacturerInventoryUncheckedUpdateWithoutManufacturerInput>;
    create: Prisma.XOR<Prisma.ManufacturerInventoryCreateWithoutManufacturerInput, Prisma.ManufacturerInventoryUncheckedCreateWithoutManufacturerInput>;
};
export type ManufacturerInventoryUpdateWithWhereUniqueWithoutManufacturerInput = {
    where: Prisma.ManufacturerInventoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ManufacturerInventoryUpdateWithoutManufacturerInput, Prisma.ManufacturerInventoryUncheckedUpdateWithoutManufacturerInput>;
};
export type ManufacturerInventoryUpdateManyWithWhereWithoutManufacturerInput = {
    where: Prisma.ManufacturerInventoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ManufacturerInventoryUpdateManyMutationInput, Prisma.ManufacturerInventoryUncheckedUpdateManyWithoutManufacturerInput>;
};
export type ManufacturerInventoryScalarWhereInput = {
    AND?: Prisma.ManufacturerInventoryScalarWhereInput | Prisma.ManufacturerInventoryScalarWhereInput[];
    OR?: Prisma.ManufacturerInventoryScalarWhereInput[];
    NOT?: Prisma.ManufacturerInventoryScalarWhereInput | Prisma.ManufacturerInventoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    manufacturerId?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    inventoryName?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    assignedGrade?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    isprocessingDone?: Prisma.BoolFilter<"ManufacturerInventory"> | boolean;
    processinglist?: Prisma.StringNullableFilter<"ManufacturerInventory"> | string | null;
    specie?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    finalQuantity?: Prisma.StringFilter<"ManufacturerInventory"> | string;
    sendedToLab?: Prisma.StringFilter<"ManufacturerInventory"> | string;
};
export type ManufacturerInventoryCreateManyManufacturerInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
};
export type ManufacturerInventoryUpdateWithoutManufacturerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerInventoryUncheckedUpdateWithoutManufacturerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerInventoryUncheckedUpdateManyWithoutManufacturerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerInventorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    manufacturerId?: boolean;
    inventoryName?: boolean;
    assignedGrade?: boolean;
    isprocessingDone?: boolean;
    processinglist?: boolean;
    specie?: boolean;
    finalQuantity?: boolean;
    sendedToLab?: boolean;
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["manufacturerInventory"]>;
export type ManufacturerInventorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    manufacturerId?: boolean;
    inventoryName?: boolean;
    assignedGrade?: boolean;
    isprocessingDone?: boolean;
    processinglist?: boolean;
    specie?: boolean;
    finalQuantity?: boolean;
    sendedToLab?: boolean;
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["manufacturerInventory"]>;
export type ManufacturerInventorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    manufacturerId?: boolean;
    inventoryName?: boolean;
    assignedGrade?: boolean;
    isprocessingDone?: boolean;
    processinglist?: boolean;
    specie?: boolean;
    finalQuantity?: boolean;
    sendedToLab?: boolean;
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["manufacturerInventory"]>;
export type ManufacturerInventorySelectScalar = {
    id?: boolean;
    manufacturerId?: boolean;
    inventoryName?: boolean;
    assignedGrade?: boolean;
    isprocessingDone?: boolean;
    processinglist?: boolean;
    specie?: boolean;
    finalQuantity?: boolean;
    sendedToLab?: boolean;
};
export type ManufacturerInventoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "manufacturerId" | "inventoryName" | "assignedGrade" | "isprocessingDone" | "processinglist" | "specie" | "finalQuantity" | "sendedToLab", ExtArgs["result"]["manufacturerInventory"]>;
export type ManufacturerInventoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
};
export type ManufacturerInventoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
};
export type ManufacturerInventoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
};
export type $ManufacturerInventoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ManufacturerInventory";
    objects: {
        manufacturer: Prisma.$ManufacturerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        manufacturerId: string;
        inventoryName: string;
        assignedGrade: string;
        isprocessingDone: boolean;
        processinglist: string | null;
        specie: string;
        finalQuantity: string;
        sendedToLab: string;
    }, ExtArgs["result"]["manufacturerInventory"]>;
    composites: {};
};
export type ManufacturerInventoryGetPayload<S extends boolean | null | undefined | ManufacturerInventoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload, S>;
export type ManufacturerInventoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ManufacturerInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ManufacturerInventoryCountAggregateInputType | true;
};
export interface ManufacturerInventoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ManufacturerInventory'];
        meta: {
            name: 'ManufacturerInventory';
        };
    };
    /**
     * Find zero or one ManufacturerInventory that matches the filter.
     * @param {ManufacturerInventoryFindUniqueArgs} args - Arguments to find a ManufacturerInventory
     * @example
     * // Get one ManufacturerInventory
     * const manufacturerInventory = await prisma.manufacturerInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManufacturerInventoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ManufacturerInventoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ManufacturerInventoryClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ManufacturerInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManufacturerInventoryFindUniqueOrThrowArgs} args - Arguments to find a ManufacturerInventory
     * @example
     * // Get one ManufacturerInventory
     * const manufacturerInventory = await prisma.manufacturerInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManufacturerInventoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ManufacturerInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ManufacturerInventoryClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ManufacturerInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerInventoryFindFirstArgs} args - Arguments to find a ManufacturerInventory
     * @example
     * // Get one ManufacturerInventory
     * const manufacturerInventory = await prisma.manufacturerInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManufacturerInventoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ManufacturerInventoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ManufacturerInventoryClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ManufacturerInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerInventoryFindFirstOrThrowArgs} args - Arguments to find a ManufacturerInventory
     * @example
     * // Get one ManufacturerInventory
     * const manufacturerInventory = await prisma.manufacturerInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManufacturerInventoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ManufacturerInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ManufacturerInventoryClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ManufacturerInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManufacturerInventories
     * const manufacturerInventories = await prisma.manufacturerInventory.findMany()
     *
     * // Get first 10 ManufacturerInventories
     * const manufacturerInventories = await prisma.manufacturerInventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const manufacturerInventoryWithIdOnly = await prisma.manufacturerInventory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ManufacturerInventoryFindManyArgs>(args?: Prisma.SelectSubset<T, ManufacturerInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ManufacturerInventory.
     * @param {ManufacturerInventoryCreateArgs} args - Arguments to create a ManufacturerInventory.
     * @example
     * // Create one ManufacturerInventory
     * const ManufacturerInventory = await prisma.manufacturerInventory.create({
     *   data: {
     *     // ... data to create a ManufacturerInventory
     *   }
     * })
     *
     */
    create<T extends ManufacturerInventoryCreateArgs>(args: Prisma.SelectSubset<T, ManufacturerInventoryCreateArgs<ExtArgs>>): Prisma.Prisma__ManufacturerInventoryClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ManufacturerInventories.
     * @param {ManufacturerInventoryCreateManyArgs} args - Arguments to create many ManufacturerInventories.
     * @example
     * // Create many ManufacturerInventories
     * const manufacturerInventory = await prisma.manufacturerInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ManufacturerInventoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ManufacturerInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ManufacturerInventories and returns the data saved in the database.
     * @param {ManufacturerInventoryCreateManyAndReturnArgs} args - Arguments to create many ManufacturerInventories.
     * @example
     * // Create many ManufacturerInventories
     * const manufacturerInventory = await prisma.manufacturerInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ManufacturerInventories and only return the `id`
     * const manufacturerInventoryWithIdOnly = await prisma.manufacturerInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ManufacturerInventoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ManufacturerInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ManufacturerInventory.
     * @param {ManufacturerInventoryDeleteArgs} args - Arguments to delete one ManufacturerInventory.
     * @example
     * // Delete one ManufacturerInventory
     * const ManufacturerInventory = await prisma.manufacturerInventory.delete({
     *   where: {
     *     // ... filter to delete one ManufacturerInventory
     *   }
     * })
     *
     */
    delete<T extends ManufacturerInventoryDeleteArgs>(args: Prisma.SelectSubset<T, ManufacturerInventoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ManufacturerInventoryClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ManufacturerInventory.
     * @param {ManufacturerInventoryUpdateArgs} args - Arguments to update one ManufacturerInventory.
     * @example
     * // Update one ManufacturerInventory
     * const manufacturerInventory = await prisma.manufacturerInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ManufacturerInventoryUpdateArgs>(args: Prisma.SelectSubset<T, ManufacturerInventoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ManufacturerInventoryClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ManufacturerInventories.
     * @param {ManufacturerInventoryDeleteManyArgs} args - Arguments to filter ManufacturerInventories to delete.
     * @example
     * // Delete a few ManufacturerInventories
     * const { count } = await prisma.manufacturerInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ManufacturerInventoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ManufacturerInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ManufacturerInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManufacturerInventories
     * const manufacturerInventory = await prisma.manufacturerInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ManufacturerInventoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ManufacturerInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ManufacturerInventories and returns the data updated in the database.
     * @param {ManufacturerInventoryUpdateManyAndReturnArgs} args - Arguments to update many ManufacturerInventories.
     * @example
     * // Update many ManufacturerInventories
     * const manufacturerInventory = await prisma.manufacturerInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ManufacturerInventories and only return the `id`
     * const manufacturerInventoryWithIdOnly = await prisma.manufacturerInventory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ManufacturerInventoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ManufacturerInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ManufacturerInventory.
     * @param {ManufacturerInventoryUpsertArgs} args - Arguments to update or create a ManufacturerInventory.
     * @example
     * // Update or create a ManufacturerInventory
     * const manufacturerInventory = await prisma.manufacturerInventory.upsert({
     *   create: {
     *     // ... data to create a ManufacturerInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManufacturerInventory we want to update
     *   }
     * })
     */
    upsert<T extends ManufacturerInventoryUpsertArgs>(args: Prisma.SelectSubset<T, ManufacturerInventoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ManufacturerInventoryClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ManufacturerInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerInventoryCountArgs} args - Arguments to filter ManufacturerInventories to count.
     * @example
     * // Count the number of ManufacturerInventories
     * const count = await prisma.manufacturerInventory.count({
     *   where: {
     *     // ... the filter for the ManufacturerInventories we want to count
     *   }
     * })
    **/
    count<T extends ManufacturerInventoryCountArgs>(args?: Prisma.Subset<T, ManufacturerInventoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ManufacturerInventoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ManufacturerInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManufacturerInventoryAggregateArgs>(args: Prisma.Subset<T, ManufacturerInventoryAggregateArgs>): Prisma.PrismaPromise<GetManufacturerInventoryAggregateType<T>>;
    /**
     * Group by ManufacturerInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerInventoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ManufacturerInventoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ManufacturerInventoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ManufacturerInventoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ManufacturerInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacturerInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ManufacturerInventory model
     */
    readonly fields: ManufacturerInventoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ManufacturerInventory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ManufacturerInventoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    manufacturer<T extends Prisma.ManufacturerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ManufacturerDefaultArgs<ExtArgs>>): Prisma.Prisma__ManufacturerClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ManufacturerInventory model
 */
export interface ManufacturerInventoryFieldRefs {
    readonly id: Prisma.FieldRef<"ManufacturerInventory", 'String'>;
    readonly manufacturerId: Prisma.FieldRef<"ManufacturerInventory", 'String'>;
    readonly inventoryName: Prisma.FieldRef<"ManufacturerInventory", 'String'>;
    readonly assignedGrade: Prisma.FieldRef<"ManufacturerInventory", 'String'>;
    readonly isprocessingDone: Prisma.FieldRef<"ManufacturerInventory", 'Boolean'>;
    readonly processinglist: Prisma.FieldRef<"ManufacturerInventory", 'String'>;
    readonly specie: Prisma.FieldRef<"ManufacturerInventory", 'String'>;
    readonly finalQuantity: Prisma.FieldRef<"ManufacturerInventory", 'String'>;
    readonly sendedToLab: Prisma.FieldRef<"ManufacturerInventory", 'String'>;
}
/**
 * ManufacturerInventory findUnique
 */
export type ManufacturerInventoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ManufacturerInventory to fetch.
     */
    where: Prisma.ManufacturerInventoryWhereUniqueInput;
};
/**
 * ManufacturerInventory findUniqueOrThrow
 */
export type ManufacturerInventoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ManufacturerInventory to fetch.
     */
    where: Prisma.ManufacturerInventoryWhereUniqueInput;
};
/**
 * ManufacturerInventory findFirst
 */
export type ManufacturerInventoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ManufacturerInventory to fetch.
     */
    where?: Prisma.ManufacturerInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ManufacturerInventories to fetch.
     */
    orderBy?: Prisma.ManufacturerInventoryOrderByWithRelationInput | Prisma.ManufacturerInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ManufacturerInventories.
     */
    cursor?: Prisma.ManufacturerInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ManufacturerInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ManufacturerInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ManufacturerInventories.
     */
    distinct?: Prisma.ManufacturerInventoryScalarFieldEnum | Prisma.ManufacturerInventoryScalarFieldEnum[];
};
/**
 * ManufacturerInventory findFirstOrThrow
 */
export type ManufacturerInventoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ManufacturerInventory to fetch.
     */
    where?: Prisma.ManufacturerInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ManufacturerInventories to fetch.
     */
    orderBy?: Prisma.ManufacturerInventoryOrderByWithRelationInput | Prisma.ManufacturerInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ManufacturerInventories.
     */
    cursor?: Prisma.ManufacturerInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ManufacturerInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ManufacturerInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ManufacturerInventories.
     */
    distinct?: Prisma.ManufacturerInventoryScalarFieldEnum | Prisma.ManufacturerInventoryScalarFieldEnum[];
};
/**
 * ManufacturerInventory findMany
 */
export type ManufacturerInventoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ManufacturerInventories to fetch.
     */
    where?: Prisma.ManufacturerInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ManufacturerInventories to fetch.
     */
    orderBy?: Prisma.ManufacturerInventoryOrderByWithRelationInput | Prisma.ManufacturerInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ManufacturerInventories.
     */
    cursor?: Prisma.ManufacturerInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ManufacturerInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ManufacturerInventories.
     */
    skip?: number;
    distinct?: Prisma.ManufacturerInventoryScalarFieldEnum | Prisma.ManufacturerInventoryScalarFieldEnum[];
};
/**
 * ManufacturerInventory create
 */
export type ManufacturerInventoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a ManufacturerInventory.
     */
    data: Prisma.XOR<Prisma.ManufacturerInventoryCreateInput, Prisma.ManufacturerInventoryUncheckedCreateInput>;
};
/**
 * ManufacturerInventory createMany
 */
export type ManufacturerInventoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManufacturerInventories.
     */
    data: Prisma.ManufacturerInventoryCreateManyInput | Prisma.ManufacturerInventoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ManufacturerInventory createManyAndReturn
 */
export type ManufacturerInventoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * The data used to create many ManufacturerInventories.
     */
    data: Prisma.ManufacturerInventoryCreateManyInput | Prisma.ManufacturerInventoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ManufacturerInventory update
 */
export type ManufacturerInventoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a ManufacturerInventory.
     */
    data: Prisma.XOR<Prisma.ManufacturerInventoryUpdateInput, Prisma.ManufacturerInventoryUncheckedUpdateInput>;
    /**
     * Choose, which ManufacturerInventory to update.
     */
    where: Prisma.ManufacturerInventoryWhereUniqueInput;
};
/**
 * ManufacturerInventory updateMany
 */
export type ManufacturerInventoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ManufacturerInventories.
     */
    data: Prisma.XOR<Prisma.ManufacturerInventoryUpdateManyMutationInput, Prisma.ManufacturerInventoryUncheckedUpdateManyInput>;
    /**
     * Filter which ManufacturerInventories to update
     */
    where?: Prisma.ManufacturerInventoryWhereInput;
    /**
     * Limit how many ManufacturerInventories to update.
     */
    limit?: number;
};
/**
 * ManufacturerInventory updateManyAndReturn
 */
export type ManufacturerInventoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * The data used to update ManufacturerInventories.
     */
    data: Prisma.XOR<Prisma.ManufacturerInventoryUpdateManyMutationInput, Prisma.ManufacturerInventoryUncheckedUpdateManyInput>;
    /**
     * Filter which ManufacturerInventories to update
     */
    where?: Prisma.ManufacturerInventoryWhereInput;
    /**
     * Limit how many ManufacturerInventories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ManufacturerInventory upsert
 */
export type ManufacturerInventoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the ManufacturerInventory to update in case it exists.
     */
    where: Prisma.ManufacturerInventoryWhereUniqueInput;
    /**
     * In case the ManufacturerInventory found by the `where` argument doesn't exist, create a new ManufacturerInventory with this data.
     */
    create: Prisma.XOR<Prisma.ManufacturerInventoryCreateInput, Prisma.ManufacturerInventoryUncheckedCreateInput>;
    /**
     * In case the ManufacturerInventory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ManufacturerInventoryUpdateInput, Prisma.ManufacturerInventoryUncheckedUpdateInput>;
};
/**
 * ManufacturerInventory delete
 */
export type ManufacturerInventoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryInclude<ExtArgs> | null;
    /**
     * Filter which ManufacturerInventory to delete.
     */
    where: Prisma.ManufacturerInventoryWhereUniqueInput;
};
/**
 * ManufacturerInventory deleteMany
 */
export type ManufacturerInventoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ManufacturerInventories to delete
     */
    where?: Prisma.ManufacturerInventoryWhereInput;
    /**
     * Limit how many ManufacturerInventories to delete.
     */
    limit?: number;
};
/**
 * ManufacturerInventory without action
 */
export type ManufacturerInventoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerInventory
     */
    select?: Prisma.ManufacturerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerInventory
     */
    omit?: Prisma.ManufacturerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerInventoryInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ManufacturerInventory.d.ts.map