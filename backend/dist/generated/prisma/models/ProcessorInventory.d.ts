import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProcessorInventory
 *
 */
export type ProcessorInventoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ProcessorInventoryPayload>;
export type AggregateProcessorInventory = {
    _count: ProcessorInventoryCountAggregateOutputType | null;
    _min: ProcessorInventoryMinAggregateOutputType | null;
    _max: ProcessorInventoryMaxAggregateOutputType | null;
};
export type ProcessorInventoryMinAggregateOutputType = {
    id: string | null;
    processorID: string | null;
    inventoryName: string | null;
    assignedGrade: string | null;
    isprocessingDone: boolean | null;
    processinglist: string | null;
    specie: string | null;
    finalQuantity: string | null;
    sendedToLab: string | null;
    moisture: string | null;
    soilType: string | null;
    WaterType: string | null;
    Season: string | null;
    Location: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProcessorInventoryMaxAggregateOutputType = {
    id: string | null;
    processorID: string | null;
    inventoryName: string | null;
    assignedGrade: string | null;
    isprocessingDone: boolean | null;
    processinglist: string | null;
    specie: string | null;
    finalQuantity: string | null;
    sendedToLab: string | null;
    moisture: string | null;
    soilType: string | null;
    WaterType: string | null;
    Season: string | null;
    Location: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProcessorInventoryCountAggregateOutputType = {
    id: number;
    processorID: number;
    inventoryName: number;
    assignedGrade: number;
    isprocessingDone: number;
    processinglist: number;
    specie: number;
    finalQuantity: number;
    sendedToLab: number;
    moisture: number;
    soilType: number;
    WaterType: number;
    Season: number;
    Location: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProcessorInventoryMinAggregateInputType = {
    id?: true;
    processorID?: true;
    inventoryName?: true;
    assignedGrade?: true;
    isprocessingDone?: true;
    processinglist?: true;
    specie?: true;
    finalQuantity?: true;
    sendedToLab?: true;
    moisture?: true;
    soilType?: true;
    WaterType?: true;
    Season?: true;
    Location?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProcessorInventoryMaxAggregateInputType = {
    id?: true;
    processorID?: true;
    inventoryName?: true;
    assignedGrade?: true;
    isprocessingDone?: true;
    processinglist?: true;
    specie?: true;
    finalQuantity?: true;
    sendedToLab?: true;
    moisture?: true;
    soilType?: true;
    WaterType?: true;
    Season?: true;
    Location?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProcessorInventoryCountAggregateInputType = {
    id?: true;
    processorID?: true;
    inventoryName?: true;
    assignedGrade?: true;
    isprocessingDone?: true;
    processinglist?: true;
    specie?: true;
    finalQuantity?: true;
    sendedToLab?: true;
    moisture?: true;
    soilType?: true;
    WaterType?: true;
    Season?: true;
    Location?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProcessorInventoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessorInventory to aggregate.
     */
    where?: Prisma.ProcessorInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessorInventories to fetch.
     */
    orderBy?: Prisma.ProcessorInventoryOrderByWithRelationInput | Prisma.ProcessorInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProcessorInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessorInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessorInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProcessorInventories
    **/
    _count?: true | ProcessorInventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProcessorInventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProcessorInventoryMaxAggregateInputType;
};
export type GetProcessorInventoryAggregateType<T extends ProcessorInventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateProcessorInventory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProcessorInventory[P]> : Prisma.GetScalarType<T[P], AggregateProcessorInventory[P]>;
};
export type ProcessorInventoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProcessorInventoryWhereInput;
    orderBy?: Prisma.ProcessorInventoryOrderByWithAggregationInput | Prisma.ProcessorInventoryOrderByWithAggregationInput[];
    by: Prisma.ProcessorInventoryScalarFieldEnum[] | Prisma.ProcessorInventoryScalarFieldEnum;
    having?: Prisma.ProcessorInventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProcessorInventoryCountAggregateInputType | true;
    _min?: ProcessorInventoryMinAggregateInputType;
    _max?: ProcessorInventoryMaxAggregateInputType;
};
export type ProcessorInventoryGroupByOutputType = {
    id: string;
    processorID: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone: boolean;
    processinglist: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture: string | null;
    soilType: string | null;
    WaterType: string | null;
    Season: string | null;
    Location: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProcessorInventoryCountAggregateOutputType | null;
    _min: ProcessorInventoryMinAggregateOutputType | null;
    _max: ProcessorInventoryMaxAggregateOutputType | null;
};
type GetProcessorInventoryGroupByPayload<T extends ProcessorInventoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProcessorInventoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProcessorInventoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProcessorInventoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProcessorInventoryGroupByOutputType[P]>;
}>>;
export type ProcessorInventoryWhereInput = {
    AND?: Prisma.ProcessorInventoryWhereInput | Prisma.ProcessorInventoryWhereInput[];
    OR?: Prisma.ProcessorInventoryWhereInput[];
    NOT?: Prisma.ProcessorInventoryWhereInput | Prisma.ProcessorInventoryWhereInput[];
    id?: Prisma.StringFilter<"ProcessorInventory"> | string;
    processorID?: Prisma.StringFilter<"ProcessorInventory"> | string;
    inventoryName?: Prisma.StringFilter<"ProcessorInventory"> | string;
    assignedGrade?: Prisma.StringFilter<"ProcessorInventory"> | string;
    isprocessingDone?: Prisma.BoolFilter<"ProcessorInventory"> | boolean;
    processinglist?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    specie?: Prisma.StringFilter<"ProcessorInventory"> | string;
    finalQuantity?: Prisma.StringFilter<"ProcessorInventory"> | string;
    sendedToLab?: Prisma.StringFilter<"ProcessorInventory"> | string;
    moisture?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    soilType?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    WaterType?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    Season?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    Location?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProcessorInventory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProcessorInventory"> | Date | string;
    processorid?: Prisma.XOR<Prisma.ProcessorScalarRelationFilter, Prisma.ProcessorWhereInput>;
    Items?: Prisma.ProcessorFarmerInputListRelationFilter;
    LabProcessorInputs?: Prisma.LabProcessorInputListRelationFilter;
    HerbInventories?: Prisma.HerbInventoryListRelationFilter;
};
export type ProcessorInventoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    processorID?: Prisma.SortOrder;
    inventoryName?: Prisma.SortOrder;
    assignedGrade?: Prisma.SortOrder;
    isprocessingDone?: Prisma.SortOrder;
    processinglist?: Prisma.SortOrderInput | Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    finalQuantity?: Prisma.SortOrder;
    sendedToLab?: Prisma.SortOrder;
    moisture?: Prisma.SortOrderInput | Prisma.SortOrder;
    soilType?: Prisma.SortOrderInput | Prisma.SortOrder;
    WaterType?: Prisma.SortOrderInput | Prisma.SortOrder;
    Season?: Prisma.SortOrderInput | Prisma.SortOrder;
    Location?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    processorid?: Prisma.ProcessorOrderByWithRelationInput;
    Items?: Prisma.ProcessorFarmerInputOrderByRelationAggregateInput;
    LabProcessorInputs?: Prisma.LabProcessorInputOrderByRelationAggregateInput;
    HerbInventories?: Prisma.HerbInventoryOrderByRelationAggregateInput;
};
export type ProcessorInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProcessorInventoryWhereInput | Prisma.ProcessorInventoryWhereInput[];
    OR?: Prisma.ProcessorInventoryWhereInput[];
    NOT?: Prisma.ProcessorInventoryWhereInput | Prisma.ProcessorInventoryWhereInput[];
    processorID?: Prisma.StringFilter<"ProcessorInventory"> | string;
    inventoryName?: Prisma.StringFilter<"ProcessorInventory"> | string;
    assignedGrade?: Prisma.StringFilter<"ProcessorInventory"> | string;
    isprocessingDone?: Prisma.BoolFilter<"ProcessorInventory"> | boolean;
    processinglist?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    specie?: Prisma.StringFilter<"ProcessorInventory"> | string;
    finalQuantity?: Prisma.StringFilter<"ProcessorInventory"> | string;
    sendedToLab?: Prisma.StringFilter<"ProcessorInventory"> | string;
    moisture?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    soilType?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    WaterType?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    Season?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    Location?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProcessorInventory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProcessorInventory"> | Date | string;
    processorid?: Prisma.XOR<Prisma.ProcessorScalarRelationFilter, Prisma.ProcessorWhereInput>;
    Items?: Prisma.ProcessorFarmerInputListRelationFilter;
    LabProcessorInputs?: Prisma.LabProcessorInputListRelationFilter;
    HerbInventories?: Prisma.HerbInventoryListRelationFilter;
}, "id">;
export type ProcessorInventoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    processorID?: Prisma.SortOrder;
    inventoryName?: Prisma.SortOrder;
    assignedGrade?: Prisma.SortOrder;
    isprocessingDone?: Prisma.SortOrder;
    processinglist?: Prisma.SortOrderInput | Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    finalQuantity?: Prisma.SortOrder;
    sendedToLab?: Prisma.SortOrder;
    moisture?: Prisma.SortOrderInput | Prisma.SortOrder;
    soilType?: Prisma.SortOrderInput | Prisma.SortOrder;
    WaterType?: Prisma.SortOrderInput | Prisma.SortOrder;
    Season?: Prisma.SortOrderInput | Prisma.SortOrder;
    Location?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProcessorInventoryCountOrderByAggregateInput;
    _max?: Prisma.ProcessorInventoryMaxOrderByAggregateInput;
    _min?: Prisma.ProcessorInventoryMinOrderByAggregateInput;
};
export type ProcessorInventoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProcessorInventoryScalarWhereWithAggregatesInput | Prisma.ProcessorInventoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProcessorInventoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProcessorInventoryScalarWhereWithAggregatesInput | Prisma.ProcessorInventoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProcessorInventory"> | string;
    processorID?: Prisma.StringWithAggregatesFilter<"ProcessorInventory"> | string;
    inventoryName?: Prisma.StringWithAggregatesFilter<"ProcessorInventory"> | string;
    assignedGrade?: Prisma.StringWithAggregatesFilter<"ProcessorInventory"> | string;
    isprocessingDone?: Prisma.BoolWithAggregatesFilter<"ProcessorInventory"> | boolean;
    processinglist?: Prisma.StringNullableWithAggregatesFilter<"ProcessorInventory"> | string | null;
    specie?: Prisma.StringWithAggregatesFilter<"ProcessorInventory"> | string;
    finalQuantity?: Prisma.StringWithAggregatesFilter<"ProcessorInventory"> | string;
    sendedToLab?: Prisma.StringWithAggregatesFilter<"ProcessorInventory"> | string;
    moisture?: Prisma.StringNullableWithAggregatesFilter<"ProcessorInventory"> | string | null;
    soilType?: Prisma.StringNullableWithAggregatesFilter<"ProcessorInventory"> | string | null;
    WaterType?: Prisma.StringNullableWithAggregatesFilter<"ProcessorInventory"> | string | null;
    Season?: Prisma.StringNullableWithAggregatesFilter<"ProcessorInventory"> | string | null;
    Location?: Prisma.StringNullableWithAggregatesFilter<"ProcessorInventory"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProcessorInventory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProcessorInventory"> | Date | string;
};
export type ProcessorInventoryCreateInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    processorid: Prisma.ProcessorCreateNestedOneWithoutInventoryInput;
    Items?: Prisma.ProcessorFarmerInputCreateNestedManyWithoutInventoryInput;
    LabProcessorInputs?: Prisma.LabProcessorInputCreateNestedManyWithoutProcessorInventoryInput;
    HerbInventories?: Prisma.HerbInventoryCreateNestedManyWithoutProcessorInventoryInput;
};
export type ProcessorInventoryUncheckedCreateInput = {
    id?: string;
    processorID: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Items?: Prisma.ProcessorFarmerInputUncheckedCreateNestedManyWithoutInventoryInput;
    LabProcessorInputs?: Prisma.LabProcessorInputUncheckedCreateNestedManyWithoutProcessorInventoryInput;
    HerbInventories?: Prisma.HerbInventoryUncheckedCreateNestedManyWithoutProcessorInventoryInput;
};
export type ProcessorInventoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    processorid?: Prisma.ProcessorUpdateOneRequiredWithoutInventoryNestedInput;
    Items?: Prisma.ProcessorFarmerInputUpdateManyWithoutInventoryNestedInput;
    LabProcessorInputs?: Prisma.LabProcessorInputUpdateManyWithoutProcessorInventoryNestedInput;
    HerbInventories?: Prisma.HerbInventoryUpdateManyWithoutProcessorInventoryNestedInput;
};
export type ProcessorInventoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorID?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Items?: Prisma.ProcessorFarmerInputUncheckedUpdateManyWithoutInventoryNestedInput;
    LabProcessorInputs?: Prisma.LabProcessorInputUncheckedUpdateManyWithoutProcessorInventoryNestedInput;
    HerbInventories?: Prisma.HerbInventoryUncheckedUpdateManyWithoutProcessorInventoryNestedInput;
};
export type ProcessorInventoryCreateManyInput = {
    id?: string;
    processorID: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessorInventoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessorInventoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorID?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessorInventoryScalarRelationFilter = {
    is?: Prisma.ProcessorInventoryWhereInput;
    isNot?: Prisma.ProcessorInventoryWhereInput;
};
export type ProcessorInventoryListRelationFilter = {
    every?: Prisma.ProcessorInventoryWhereInput;
    some?: Prisma.ProcessorInventoryWhereInput;
    none?: Prisma.ProcessorInventoryWhereInput;
};
export type ProcessorInventoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProcessorInventoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorID?: Prisma.SortOrder;
    inventoryName?: Prisma.SortOrder;
    assignedGrade?: Prisma.SortOrder;
    isprocessingDone?: Prisma.SortOrder;
    processinglist?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    finalQuantity?: Prisma.SortOrder;
    sendedToLab?: Prisma.SortOrder;
    moisture?: Prisma.SortOrder;
    soilType?: Prisma.SortOrder;
    WaterType?: Prisma.SortOrder;
    Season?: Prisma.SortOrder;
    Location?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessorInventoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorID?: Prisma.SortOrder;
    inventoryName?: Prisma.SortOrder;
    assignedGrade?: Prisma.SortOrder;
    isprocessingDone?: Prisma.SortOrder;
    processinglist?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    finalQuantity?: Prisma.SortOrder;
    sendedToLab?: Prisma.SortOrder;
    moisture?: Prisma.SortOrder;
    soilType?: Prisma.SortOrder;
    WaterType?: Prisma.SortOrder;
    Season?: Prisma.SortOrder;
    Location?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessorInventoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorID?: Prisma.SortOrder;
    inventoryName?: Prisma.SortOrder;
    assignedGrade?: Prisma.SortOrder;
    isprocessingDone?: Prisma.SortOrder;
    processinglist?: Prisma.SortOrder;
    specie?: Prisma.SortOrder;
    finalQuantity?: Prisma.SortOrder;
    sendedToLab?: Prisma.SortOrder;
    moisture?: Prisma.SortOrder;
    soilType?: Prisma.SortOrder;
    WaterType?: Prisma.SortOrder;
    Season?: Prisma.SortOrder;
    Location?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessorInventoryCreateNestedOneWithoutLabProcessorInputsInput = {
    create?: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutLabProcessorInputsInput, Prisma.ProcessorInventoryUncheckedCreateWithoutLabProcessorInputsInput>;
    connectOrCreate?: Prisma.ProcessorInventoryCreateOrConnectWithoutLabProcessorInputsInput;
    connect?: Prisma.ProcessorInventoryWhereUniqueInput;
};
export type ProcessorInventoryUpdateOneRequiredWithoutLabProcessorInputsNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutLabProcessorInputsInput, Prisma.ProcessorInventoryUncheckedCreateWithoutLabProcessorInputsInput>;
    connectOrCreate?: Prisma.ProcessorInventoryCreateOrConnectWithoutLabProcessorInputsInput;
    upsert?: Prisma.ProcessorInventoryUpsertWithoutLabProcessorInputsInput;
    connect?: Prisma.ProcessorInventoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProcessorInventoryUpdateToOneWithWhereWithoutLabProcessorInputsInput, Prisma.ProcessorInventoryUpdateWithoutLabProcessorInputsInput>, Prisma.ProcessorInventoryUncheckedUpdateWithoutLabProcessorInputsInput>;
};
export type ProcessorInventoryCreateNestedManyWithoutProcessoridInput = {
    create?: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutProcessoridInput, Prisma.ProcessorInventoryUncheckedCreateWithoutProcessoridInput> | Prisma.ProcessorInventoryCreateWithoutProcessoridInput[] | Prisma.ProcessorInventoryUncheckedCreateWithoutProcessoridInput[];
    connectOrCreate?: Prisma.ProcessorInventoryCreateOrConnectWithoutProcessoridInput | Prisma.ProcessorInventoryCreateOrConnectWithoutProcessoridInput[];
    createMany?: Prisma.ProcessorInventoryCreateManyProcessoridInputEnvelope;
    connect?: Prisma.ProcessorInventoryWhereUniqueInput | Prisma.ProcessorInventoryWhereUniqueInput[];
};
export type ProcessorInventoryUncheckedCreateNestedManyWithoutProcessoridInput = {
    create?: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutProcessoridInput, Prisma.ProcessorInventoryUncheckedCreateWithoutProcessoridInput> | Prisma.ProcessorInventoryCreateWithoutProcessoridInput[] | Prisma.ProcessorInventoryUncheckedCreateWithoutProcessoridInput[];
    connectOrCreate?: Prisma.ProcessorInventoryCreateOrConnectWithoutProcessoridInput | Prisma.ProcessorInventoryCreateOrConnectWithoutProcessoridInput[];
    createMany?: Prisma.ProcessorInventoryCreateManyProcessoridInputEnvelope;
    connect?: Prisma.ProcessorInventoryWhereUniqueInput | Prisma.ProcessorInventoryWhereUniqueInput[];
};
export type ProcessorInventoryUpdateManyWithoutProcessoridNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutProcessoridInput, Prisma.ProcessorInventoryUncheckedCreateWithoutProcessoridInput> | Prisma.ProcessorInventoryCreateWithoutProcessoridInput[] | Prisma.ProcessorInventoryUncheckedCreateWithoutProcessoridInput[];
    connectOrCreate?: Prisma.ProcessorInventoryCreateOrConnectWithoutProcessoridInput | Prisma.ProcessorInventoryCreateOrConnectWithoutProcessoridInput[];
    upsert?: Prisma.ProcessorInventoryUpsertWithWhereUniqueWithoutProcessoridInput | Prisma.ProcessorInventoryUpsertWithWhereUniqueWithoutProcessoridInput[];
    createMany?: Prisma.ProcessorInventoryCreateManyProcessoridInputEnvelope;
    set?: Prisma.ProcessorInventoryWhereUniqueInput | Prisma.ProcessorInventoryWhereUniqueInput[];
    disconnect?: Prisma.ProcessorInventoryWhereUniqueInput | Prisma.ProcessorInventoryWhereUniqueInput[];
    delete?: Prisma.ProcessorInventoryWhereUniqueInput | Prisma.ProcessorInventoryWhereUniqueInput[];
    connect?: Prisma.ProcessorInventoryWhereUniqueInput | Prisma.ProcessorInventoryWhereUniqueInput[];
    update?: Prisma.ProcessorInventoryUpdateWithWhereUniqueWithoutProcessoridInput | Prisma.ProcessorInventoryUpdateWithWhereUniqueWithoutProcessoridInput[];
    updateMany?: Prisma.ProcessorInventoryUpdateManyWithWhereWithoutProcessoridInput | Prisma.ProcessorInventoryUpdateManyWithWhereWithoutProcessoridInput[];
    deleteMany?: Prisma.ProcessorInventoryScalarWhereInput | Prisma.ProcessorInventoryScalarWhereInput[];
};
export type ProcessorInventoryUncheckedUpdateManyWithoutProcessoridNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutProcessoridInput, Prisma.ProcessorInventoryUncheckedCreateWithoutProcessoridInput> | Prisma.ProcessorInventoryCreateWithoutProcessoridInput[] | Prisma.ProcessorInventoryUncheckedCreateWithoutProcessoridInput[];
    connectOrCreate?: Prisma.ProcessorInventoryCreateOrConnectWithoutProcessoridInput | Prisma.ProcessorInventoryCreateOrConnectWithoutProcessoridInput[];
    upsert?: Prisma.ProcessorInventoryUpsertWithWhereUniqueWithoutProcessoridInput | Prisma.ProcessorInventoryUpsertWithWhereUniqueWithoutProcessoridInput[];
    createMany?: Prisma.ProcessorInventoryCreateManyProcessoridInputEnvelope;
    set?: Prisma.ProcessorInventoryWhereUniqueInput | Prisma.ProcessorInventoryWhereUniqueInput[];
    disconnect?: Prisma.ProcessorInventoryWhereUniqueInput | Prisma.ProcessorInventoryWhereUniqueInput[];
    delete?: Prisma.ProcessorInventoryWhereUniqueInput | Prisma.ProcessorInventoryWhereUniqueInput[];
    connect?: Prisma.ProcessorInventoryWhereUniqueInput | Prisma.ProcessorInventoryWhereUniqueInput[];
    update?: Prisma.ProcessorInventoryUpdateWithWhereUniqueWithoutProcessoridInput | Prisma.ProcessorInventoryUpdateWithWhereUniqueWithoutProcessoridInput[];
    updateMany?: Prisma.ProcessorInventoryUpdateManyWithWhereWithoutProcessoridInput | Prisma.ProcessorInventoryUpdateManyWithWhereWithoutProcessoridInput[];
    deleteMany?: Prisma.ProcessorInventoryScalarWhereInput | Prisma.ProcessorInventoryScalarWhereInput[];
};
export type ProcessorInventoryCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutItemsInput, Prisma.ProcessorInventoryUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ProcessorInventoryCreateOrConnectWithoutItemsInput;
    connect?: Prisma.ProcessorInventoryWhereUniqueInput;
};
export type ProcessorInventoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutItemsInput, Prisma.ProcessorInventoryUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ProcessorInventoryCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.ProcessorInventoryUpsertWithoutItemsInput;
    connect?: Prisma.ProcessorInventoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProcessorInventoryUpdateToOneWithWhereWithoutItemsInput, Prisma.ProcessorInventoryUpdateWithoutItemsInput>, Prisma.ProcessorInventoryUncheckedUpdateWithoutItemsInput>;
};
export type ProcessorInventoryCreateNestedOneWithoutHerbInventoriesInput = {
    create?: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutHerbInventoriesInput, Prisma.ProcessorInventoryUncheckedCreateWithoutHerbInventoriesInput>;
    connectOrCreate?: Prisma.ProcessorInventoryCreateOrConnectWithoutHerbInventoriesInput;
    connect?: Prisma.ProcessorInventoryWhereUniqueInput;
};
export type ProcessorInventoryUpdateOneRequiredWithoutHerbInventoriesNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutHerbInventoriesInput, Prisma.ProcessorInventoryUncheckedCreateWithoutHerbInventoriesInput>;
    connectOrCreate?: Prisma.ProcessorInventoryCreateOrConnectWithoutHerbInventoriesInput;
    upsert?: Prisma.ProcessorInventoryUpsertWithoutHerbInventoriesInput;
    connect?: Prisma.ProcessorInventoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProcessorInventoryUpdateToOneWithWhereWithoutHerbInventoriesInput, Prisma.ProcessorInventoryUpdateWithoutHerbInventoriesInput>, Prisma.ProcessorInventoryUncheckedUpdateWithoutHerbInventoriesInput>;
};
export type ProcessorInventoryCreateWithoutLabProcessorInputsInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    processorid: Prisma.ProcessorCreateNestedOneWithoutInventoryInput;
    Items?: Prisma.ProcessorFarmerInputCreateNestedManyWithoutInventoryInput;
    HerbInventories?: Prisma.HerbInventoryCreateNestedManyWithoutProcessorInventoryInput;
};
export type ProcessorInventoryUncheckedCreateWithoutLabProcessorInputsInput = {
    id?: string;
    processorID: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Items?: Prisma.ProcessorFarmerInputUncheckedCreateNestedManyWithoutInventoryInput;
    HerbInventories?: Prisma.HerbInventoryUncheckedCreateNestedManyWithoutProcessorInventoryInput;
};
export type ProcessorInventoryCreateOrConnectWithoutLabProcessorInputsInput = {
    where: Prisma.ProcessorInventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutLabProcessorInputsInput, Prisma.ProcessorInventoryUncheckedCreateWithoutLabProcessorInputsInput>;
};
export type ProcessorInventoryUpsertWithoutLabProcessorInputsInput = {
    update: Prisma.XOR<Prisma.ProcessorInventoryUpdateWithoutLabProcessorInputsInput, Prisma.ProcessorInventoryUncheckedUpdateWithoutLabProcessorInputsInput>;
    create: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutLabProcessorInputsInput, Prisma.ProcessorInventoryUncheckedCreateWithoutLabProcessorInputsInput>;
    where?: Prisma.ProcessorInventoryWhereInput;
};
export type ProcessorInventoryUpdateToOneWithWhereWithoutLabProcessorInputsInput = {
    where?: Prisma.ProcessorInventoryWhereInput;
    data: Prisma.XOR<Prisma.ProcessorInventoryUpdateWithoutLabProcessorInputsInput, Prisma.ProcessorInventoryUncheckedUpdateWithoutLabProcessorInputsInput>;
};
export type ProcessorInventoryUpdateWithoutLabProcessorInputsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    processorid?: Prisma.ProcessorUpdateOneRequiredWithoutInventoryNestedInput;
    Items?: Prisma.ProcessorFarmerInputUpdateManyWithoutInventoryNestedInput;
    HerbInventories?: Prisma.HerbInventoryUpdateManyWithoutProcessorInventoryNestedInput;
};
export type ProcessorInventoryUncheckedUpdateWithoutLabProcessorInputsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorID?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Items?: Prisma.ProcessorFarmerInputUncheckedUpdateManyWithoutInventoryNestedInput;
    HerbInventories?: Prisma.HerbInventoryUncheckedUpdateManyWithoutProcessorInventoryNestedInput;
};
export type ProcessorInventoryCreateWithoutProcessoridInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Items?: Prisma.ProcessorFarmerInputCreateNestedManyWithoutInventoryInput;
    LabProcessorInputs?: Prisma.LabProcessorInputCreateNestedManyWithoutProcessorInventoryInput;
    HerbInventories?: Prisma.HerbInventoryCreateNestedManyWithoutProcessorInventoryInput;
};
export type ProcessorInventoryUncheckedCreateWithoutProcessoridInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Items?: Prisma.ProcessorFarmerInputUncheckedCreateNestedManyWithoutInventoryInput;
    LabProcessorInputs?: Prisma.LabProcessorInputUncheckedCreateNestedManyWithoutProcessorInventoryInput;
    HerbInventories?: Prisma.HerbInventoryUncheckedCreateNestedManyWithoutProcessorInventoryInput;
};
export type ProcessorInventoryCreateOrConnectWithoutProcessoridInput = {
    where: Prisma.ProcessorInventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutProcessoridInput, Prisma.ProcessorInventoryUncheckedCreateWithoutProcessoridInput>;
};
export type ProcessorInventoryCreateManyProcessoridInputEnvelope = {
    data: Prisma.ProcessorInventoryCreateManyProcessoridInput | Prisma.ProcessorInventoryCreateManyProcessoridInput[];
    skipDuplicates?: boolean;
};
export type ProcessorInventoryUpsertWithWhereUniqueWithoutProcessoridInput = {
    where: Prisma.ProcessorInventoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProcessorInventoryUpdateWithoutProcessoridInput, Prisma.ProcessorInventoryUncheckedUpdateWithoutProcessoridInput>;
    create: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutProcessoridInput, Prisma.ProcessorInventoryUncheckedCreateWithoutProcessoridInput>;
};
export type ProcessorInventoryUpdateWithWhereUniqueWithoutProcessoridInput = {
    where: Prisma.ProcessorInventoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProcessorInventoryUpdateWithoutProcessoridInput, Prisma.ProcessorInventoryUncheckedUpdateWithoutProcessoridInput>;
};
export type ProcessorInventoryUpdateManyWithWhereWithoutProcessoridInput = {
    where: Prisma.ProcessorInventoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ProcessorInventoryUpdateManyMutationInput, Prisma.ProcessorInventoryUncheckedUpdateManyWithoutProcessoridInput>;
};
export type ProcessorInventoryScalarWhereInput = {
    AND?: Prisma.ProcessorInventoryScalarWhereInput | Prisma.ProcessorInventoryScalarWhereInput[];
    OR?: Prisma.ProcessorInventoryScalarWhereInput[];
    NOT?: Prisma.ProcessorInventoryScalarWhereInput | Prisma.ProcessorInventoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ProcessorInventory"> | string;
    processorID?: Prisma.StringFilter<"ProcessorInventory"> | string;
    inventoryName?: Prisma.StringFilter<"ProcessorInventory"> | string;
    assignedGrade?: Prisma.StringFilter<"ProcessorInventory"> | string;
    isprocessingDone?: Prisma.BoolFilter<"ProcessorInventory"> | boolean;
    processinglist?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    specie?: Prisma.StringFilter<"ProcessorInventory"> | string;
    finalQuantity?: Prisma.StringFilter<"ProcessorInventory"> | string;
    sendedToLab?: Prisma.StringFilter<"ProcessorInventory"> | string;
    moisture?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    soilType?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    WaterType?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    Season?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    Location?: Prisma.StringNullableFilter<"ProcessorInventory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProcessorInventory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProcessorInventory"> | Date | string;
};
export type ProcessorInventoryCreateWithoutItemsInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    processorid: Prisma.ProcessorCreateNestedOneWithoutInventoryInput;
    LabProcessorInputs?: Prisma.LabProcessorInputCreateNestedManyWithoutProcessorInventoryInput;
    HerbInventories?: Prisma.HerbInventoryCreateNestedManyWithoutProcessorInventoryInput;
};
export type ProcessorInventoryUncheckedCreateWithoutItemsInput = {
    id?: string;
    processorID: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    LabProcessorInputs?: Prisma.LabProcessorInputUncheckedCreateNestedManyWithoutProcessorInventoryInput;
    HerbInventories?: Prisma.HerbInventoryUncheckedCreateNestedManyWithoutProcessorInventoryInput;
};
export type ProcessorInventoryCreateOrConnectWithoutItemsInput = {
    where: Prisma.ProcessorInventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutItemsInput, Prisma.ProcessorInventoryUncheckedCreateWithoutItemsInput>;
};
export type ProcessorInventoryUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.ProcessorInventoryUpdateWithoutItemsInput, Prisma.ProcessorInventoryUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutItemsInput, Prisma.ProcessorInventoryUncheckedCreateWithoutItemsInput>;
    where?: Prisma.ProcessorInventoryWhereInput;
};
export type ProcessorInventoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.ProcessorInventoryWhereInput;
    data: Prisma.XOR<Prisma.ProcessorInventoryUpdateWithoutItemsInput, Prisma.ProcessorInventoryUncheckedUpdateWithoutItemsInput>;
};
export type ProcessorInventoryUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    processorid?: Prisma.ProcessorUpdateOneRequiredWithoutInventoryNestedInput;
    LabProcessorInputs?: Prisma.LabProcessorInputUpdateManyWithoutProcessorInventoryNestedInput;
    HerbInventories?: Prisma.HerbInventoryUpdateManyWithoutProcessorInventoryNestedInput;
};
export type ProcessorInventoryUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorID?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    LabProcessorInputs?: Prisma.LabProcessorInputUncheckedUpdateManyWithoutProcessorInventoryNestedInput;
    HerbInventories?: Prisma.HerbInventoryUncheckedUpdateManyWithoutProcessorInventoryNestedInput;
};
export type ProcessorInventoryCreateWithoutHerbInventoriesInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    processorid: Prisma.ProcessorCreateNestedOneWithoutInventoryInput;
    Items?: Prisma.ProcessorFarmerInputCreateNestedManyWithoutInventoryInput;
    LabProcessorInputs?: Prisma.LabProcessorInputCreateNestedManyWithoutProcessorInventoryInput;
};
export type ProcessorInventoryUncheckedCreateWithoutHerbInventoriesInput = {
    id?: string;
    processorID: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Items?: Prisma.ProcessorFarmerInputUncheckedCreateNestedManyWithoutInventoryInput;
    LabProcessorInputs?: Prisma.LabProcessorInputUncheckedCreateNestedManyWithoutProcessorInventoryInput;
};
export type ProcessorInventoryCreateOrConnectWithoutHerbInventoriesInput = {
    where: Prisma.ProcessorInventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutHerbInventoriesInput, Prisma.ProcessorInventoryUncheckedCreateWithoutHerbInventoriesInput>;
};
export type ProcessorInventoryUpsertWithoutHerbInventoriesInput = {
    update: Prisma.XOR<Prisma.ProcessorInventoryUpdateWithoutHerbInventoriesInput, Prisma.ProcessorInventoryUncheckedUpdateWithoutHerbInventoriesInput>;
    create: Prisma.XOR<Prisma.ProcessorInventoryCreateWithoutHerbInventoriesInput, Prisma.ProcessorInventoryUncheckedCreateWithoutHerbInventoriesInput>;
    where?: Prisma.ProcessorInventoryWhereInput;
};
export type ProcessorInventoryUpdateToOneWithWhereWithoutHerbInventoriesInput = {
    where?: Prisma.ProcessorInventoryWhereInput;
    data: Prisma.XOR<Prisma.ProcessorInventoryUpdateWithoutHerbInventoriesInput, Prisma.ProcessorInventoryUncheckedUpdateWithoutHerbInventoriesInput>;
};
export type ProcessorInventoryUpdateWithoutHerbInventoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    processorid?: Prisma.ProcessorUpdateOneRequiredWithoutInventoryNestedInput;
    Items?: Prisma.ProcessorFarmerInputUpdateManyWithoutInventoryNestedInput;
    LabProcessorInputs?: Prisma.LabProcessorInputUpdateManyWithoutProcessorInventoryNestedInput;
};
export type ProcessorInventoryUncheckedUpdateWithoutHerbInventoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorID?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Items?: Prisma.ProcessorFarmerInputUncheckedUpdateManyWithoutInventoryNestedInput;
    LabProcessorInputs?: Prisma.LabProcessorInputUncheckedUpdateManyWithoutProcessorInventoryNestedInput;
};
export type ProcessorInventoryCreateManyProcessoridInput = {
    id?: string;
    inventoryName: string;
    assignedGrade: string;
    isprocessingDone?: boolean;
    processinglist?: string | null;
    specie: string;
    finalQuantity: string;
    sendedToLab: string;
    moisture?: string | null;
    soilType?: string | null;
    WaterType?: string | null;
    Season?: string | null;
    Location?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessorInventoryUpdateWithoutProcessoridInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Items?: Prisma.ProcessorFarmerInputUpdateManyWithoutInventoryNestedInput;
    LabProcessorInputs?: Prisma.LabProcessorInputUpdateManyWithoutProcessorInventoryNestedInput;
    HerbInventories?: Prisma.HerbInventoryUpdateManyWithoutProcessorInventoryNestedInput;
};
export type ProcessorInventoryUncheckedUpdateWithoutProcessoridInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Items?: Prisma.ProcessorFarmerInputUncheckedUpdateManyWithoutInventoryNestedInput;
    LabProcessorInputs?: Prisma.LabProcessorInputUncheckedUpdateManyWithoutProcessorInventoryNestedInput;
    HerbInventories?: Prisma.HerbInventoryUncheckedUpdateManyWithoutProcessorInventoryNestedInput;
};
export type ProcessorInventoryUncheckedUpdateManyWithoutProcessoridInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventoryName?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedGrade?: Prisma.StringFieldUpdateOperationsInput | string;
    isprocessingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processinglist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specie?: Prisma.StringFieldUpdateOperationsInput | string;
    finalQuantity?: Prisma.StringFieldUpdateOperationsInput | string;
    sendedToLab?: Prisma.StringFieldUpdateOperationsInput | string;
    moisture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soilType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    WaterType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Season?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ProcessorInventoryCountOutputType
 */
export type ProcessorInventoryCountOutputType = {
    Items: number;
    LabProcessorInputs: number;
    HerbInventories: number;
};
export type ProcessorInventoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Items?: boolean | ProcessorInventoryCountOutputTypeCountItemsArgs;
    LabProcessorInputs?: boolean | ProcessorInventoryCountOutputTypeCountLabProcessorInputsArgs;
    HerbInventories?: boolean | ProcessorInventoryCountOutputTypeCountHerbInventoriesArgs;
};
/**
 * ProcessorInventoryCountOutputType without action
 */
export type ProcessorInventoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventoryCountOutputType
     */
    select?: Prisma.ProcessorInventoryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProcessorInventoryCountOutputType without action
 */
export type ProcessorInventoryCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProcessorFarmerInputWhereInput;
};
/**
 * ProcessorInventoryCountOutputType without action
 */
export type ProcessorInventoryCountOutputTypeCountLabProcessorInputsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabProcessorInputWhereInput;
};
/**
 * ProcessorInventoryCountOutputType without action
 */
export type ProcessorInventoryCountOutputTypeCountHerbInventoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HerbInventoryWhereInput;
};
export type ProcessorInventorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorID?: boolean;
    inventoryName?: boolean;
    assignedGrade?: boolean;
    isprocessingDone?: boolean;
    processinglist?: boolean;
    specie?: boolean;
    finalQuantity?: boolean;
    sendedToLab?: boolean;
    moisture?: boolean;
    soilType?: boolean;
    WaterType?: boolean;
    Season?: boolean;
    Location?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
    Items?: boolean | Prisma.ProcessorInventory$ItemsArgs<ExtArgs>;
    LabProcessorInputs?: boolean | Prisma.ProcessorInventory$LabProcessorInputsArgs<ExtArgs>;
    HerbInventories?: boolean | Prisma.ProcessorInventory$HerbInventoriesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProcessorInventoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["processorInventory"]>;
export type ProcessorInventorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorID?: boolean;
    inventoryName?: boolean;
    assignedGrade?: boolean;
    isprocessingDone?: boolean;
    processinglist?: boolean;
    specie?: boolean;
    finalQuantity?: boolean;
    sendedToLab?: boolean;
    moisture?: boolean;
    soilType?: boolean;
    WaterType?: boolean;
    Season?: boolean;
    Location?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["processorInventory"]>;
export type ProcessorInventorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorID?: boolean;
    inventoryName?: boolean;
    assignedGrade?: boolean;
    isprocessingDone?: boolean;
    processinglist?: boolean;
    specie?: boolean;
    finalQuantity?: boolean;
    sendedToLab?: boolean;
    moisture?: boolean;
    soilType?: boolean;
    WaterType?: boolean;
    Season?: boolean;
    Location?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["processorInventory"]>;
export type ProcessorInventorySelectScalar = {
    id?: boolean;
    processorID?: boolean;
    inventoryName?: boolean;
    assignedGrade?: boolean;
    isprocessingDone?: boolean;
    processinglist?: boolean;
    specie?: boolean;
    finalQuantity?: boolean;
    sendedToLab?: boolean;
    moisture?: boolean;
    soilType?: boolean;
    WaterType?: boolean;
    Season?: boolean;
    Location?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProcessorInventoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "processorID" | "inventoryName" | "assignedGrade" | "isprocessingDone" | "processinglist" | "specie" | "finalQuantity" | "sendedToLab" | "moisture" | "soilType" | "WaterType" | "Season" | "Location" | "createdAt" | "updatedAt", ExtArgs["result"]["processorInventory"]>;
export type ProcessorInventoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
    Items?: boolean | Prisma.ProcessorInventory$ItemsArgs<ExtArgs>;
    LabProcessorInputs?: boolean | Prisma.ProcessorInventory$LabProcessorInputsArgs<ExtArgs>;
    HerbInventories?: boolean | Prisma.ProcessorInventory$HerbInventoriesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProcessorInventoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProcessorInventoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
};
export type ProcessorInventoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
};
export type $ProcessorInventoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProcessorInventory";
    objects: {
        processorid: Prisma.$ProcessorPayload<ExtArgs>;
        Items: Prisma.$ProcessorFarmerInputPayload<ExtArgs>[];
        LabProcessorInputs: Prisma.$LabProcessorInputPayload<ExtArgs>[];
        HerbInventories: Prisma.$HerbInventoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        processorID: string;
        inventoryName: string;
        assignedGrade: string;
        isprocessingDone: boolean;
        processinglist: string | null;
        specie: string;
        finalQuantity: string;
        sendedToLab: string;
        moisture: string | null;
        soilType: string | null;
        WaterType: string | null;
        Season: string | null;
        Location: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["processorInventory"]>;
    composites: {};
};
export type ProcessorInventoryGetPayload<S extends boolean | null | undefined | ProcessorInventoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload, S>;
export type ProcessorInventoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProcessorInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProcessorInventoryCountAggregateInputType | true;
};
export interface ProcessorInventoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProcessorInventory'];
        meta: {
            name: 'ProcessorInventory';
        };
    };
    /**
     * Find zero or one ProcessorInventory that matches the filter.
     * @param {ProcessorInventoryFindUniqueArgs} args - Arguments to find a ProcessorInventory
     * @example
     * // Get one ProcessorInventory
     * const processorInventory = await prisma.processorInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessorInventoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ProcessorInventoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProcessorInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessorInventoryFindUniqueOrThrowArgs} args - Arguments to find a ProcessorInventory
     * @example
     * // Get one ProcessorInventory
     * const processorInventory = await prisma.processorInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessorInventoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProcessorInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProcessorInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorInventoryFindFirstArgs} args - Arguments to find a ProcessorInventory
     * @example
     * // Get one ProcessorInventory
     * const processorInventory = await prisma.processorInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessorInventoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ProcessorInventoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProcessorInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorInventoryFindFirstOrThrowArgs} args - Arguments to find a ProcessorInventory
     * @example
     * // Get one ProcessorInventory
     * const processorInventory = await prisma.processorInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessorInventoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProcessorInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProcessorInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessorInventories
     * const processorInventories = await prisma.processorInventory.findMany()
     *
     * // Get first 10 ProcessorInventories
     * const processorInventories = await prisma.processorInventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const processorInventoryWithIdOnly = await prisma.processorInventory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProcessorInventoryFindManyArgs>(args?: Prisma.SelectSubset<T, ProcessorInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProcessorInventory.
     * @param {ProcessorInventoryCreateArgs} args - Arguments to create a ProcessorInventory.
     * @example
     * // Create one ProcessorInventory
     * const ProcessorInventory = await prisma.processorInventory.create({
     *   data: {
     *     // ... data to create a ProcessorInventory
     *   }
     * })
     *
     */
    create<T extends ProcessorInventoryCreateArgs>(args: Prisma.SelectSubset<T, ProcessorInventoryCreateArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProcessorInventories.
     * @param {ProcessorInventoryCreateManyArgs} args - Arguments to create many ProcessorInventories.
     * @example
     * // Create many ProcessorInventories
     * const processorInventory = await prisma.processorInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProcessorInventoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ProcessorInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProcessorInventories and returns the data saved in the database.
     * @param {ProcessorInventoryCreateManyAndReturnArgs} args - Arguments to create many ProcessorInventories.
     * @example
     * // Create many ProcessorInventories
     * const processorInventory = await prisma.processorInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProcessorInventories and only return the `id`
     * const processorInventoryWithIdOnly = await prisma.processorInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProcessorInventoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProcessorInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProcessorInventory.
     * @param {ProcessorInventoryDeleteArgs} args - Arguments to delete one ProcessorInventory.
     * @example
     * // Delete one ProcessorInventory
     * const ProcessorInventory = await prisma.processorInventory.delete({
     *   where: {
     *     // ... filter to delete one ProcessorInventory
     *   }
     * })
     *
     */
    delete<T extends ProcessorInventoryDeleteArgs>(args: Prisma.SelectSubset<T, ProcessorInventoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProcessorInventory.
     * @param {ProcessorInventoryUpdateArgs} args - Arguments to update one ProcessorInventory.
     * @example
     * // Update one ProcessorInventory
     * const processorInventory = await prisma.processorInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProcessorInventoryUpdateArgs>(args: Prisma.SelectSubset<T, ProcessorInventoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProcessorInventories.
     * @param {ProcessorInventoryDeleteManyArgs} args - Arguments to filter ProcessorInventories to delete.
     * @example
     * // Delete a few ProcessorInventories
     * const { count } = await prisma.processorInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProcessorInventoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProcessorInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProcessorInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessorInventories
     * const processorInventory = await prisma.processorInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProcessorInventoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ProcessorInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProcessorInventories and returns the data updated in the database.
     * @param {ProcessorInventoryUpdateManyAndReturnArgs} args - Arguments to update many ProcessorInventories.
     * @example
     * // Update many ProcessorInventories
     * const processorInventory = await prisma.processorInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProcessorInventories and only return the `id`
     * const processorInventoryWithIdOnly = await prisma.processorInventory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessorInventoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProcessorInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProcessorInventory.
     * @param {ProcessorInventoryUpsertArgs} args - Arguments to update or create a ProcessorInventory.
     * @example
     * // Update or create a ProcessorInventory
     * const processorInventory = await prisma.processorInventory.upsert({
     *   create: {
     *     // ... data to create a ProcessorInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessorInventory we want to update
     *   }
     * })
     */
    upsert<T extends ProcessorInventoryUpsertArgs>(args: Prisma.SelectSubset<T, ProcessorInventoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProcessorInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorInventoryCountArgs} args - Arguments to filter ProcessorInventories to count.
     * @example
     * // Count the number of ProcessorInventories
     * const count = await prisma.processorInventory.count({
     *   where: {
     *     // ... the filter for the ProcessorInventories we want to count
     *   }
     * })
    **/
    count<T extends ProcessorInventoryCountArgs>(args?: Prisma.Subset<T, ProcessorInventoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProcessorInventoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProcessorInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessorInventoryAggregateArgs>(args: Prisma.Subset<T, ProcessorInventoryAggregateArgs>): Prisma.PrismaPromise<GetProcessorInventoryAggregateType<T>>;
    /**
     * Group by ProcessorInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorInventoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProcessorInventoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProcessorInventoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ProcessorInventoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProcessorInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessorInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProcessorInventory model
     */
    readonly fields: ProcessorInventoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProcessorInventory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProcessorInventoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    processorid<T extends Prisma.ProcessorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProcessorDefaultArgs<ExtArgs>>): Prisma.Prisma__ProcessorClient<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Items<T extends Prisma.ProcessorInventory$ItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProcessorInventory$ItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorFarmerInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    LabProcessorInputs<T extends Prisma.ProcessorInventory$LabProcessorInputsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProcessorInventory$LabProcessorInputsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    HerbInventories<T extends Prisma.ProcessorInventory$HerbInventoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProcessorInventory$HerbInventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HerbInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ProcessorInventory model
 */
export interface ProcessorInventoryFieldRefs {
    readonly id: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly processorID: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly inventoryName: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly assignedGrade: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly isprocessingDone: Prisma.FieldRef<"ProcessorInventory", 'Boolean'>;
    readonly processinglist: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly specie: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly finalQuantity: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly sendedToLab: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly moisture: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly soilType: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly WaterType: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly Season: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly Location: Prisma.FieldRef<"ProcessorInventory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProcessorInventory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProcessorInventory", 'DateTime'>;
}
/**
 * ProcessorInventory findUnique
 */
export type ProcessorInventoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessorInventory to fetch.
     */
    where: Prisma.ProcessorInventoryWhereUniqueInput;
};
/**
 * ProcessorInventory findUniqueOrThrow
 */
export type ProcessorInventoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessorInventory to fetch.
     */
    where: Prisma.ProcessorInventoryWhereUniqueInput;
};
/**
 * ProcessorInventory findFirst
 */
export type ProcessorInventoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessorInventory to fetch.
     */
    where?: Prisma.ProcessorInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessorInventories to fetch.
     */
    orderBy?: Prisma.ProcessorInventoryOrderByWithRelationInput | Prisma.ProcessorInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProcessorInventories.
     */
    cursor?: Prisma.ProcessorInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessorInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessorInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProcessorInventories.
     */
    distinct?: Prisma.ProcessorInventoryScalarFieldEnum | Prisma.ProcessorInventoryScalarFieldEnum[];
};
/**
 * ProcessorInventory findFirstOrThrow
 */
export type ProcessorInventoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessorInventory to fetch.
     */
    where?: Prisma.ProcessorInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessorInventories to fetch.
     */
    orderBy?: Prisma.ProcessorInventoryOrderByWithRelationInput | Prisma.ProcessorInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProcessorInventories.
     */
    cursor?: Prisma.ProcessorInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessorInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessorInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProcessorInventories.
     */
    distinct?: Prisma.ProcessorInventoryScalarFieldEnum | Prisma.ProcessorInventoryScalarFieldEnum[];
};
/**
 * ProcessorInventory findMany
 */
export type ProcessorInventoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessorInventories to fetch.
     */
    where?: Prisma.ProcessorInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessorInventories to fetch.
     */
    orderBy?: Prisma.ProcessorInventoryOrderByWithRelationInput | Prisma.ProcessorInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProcessorInventories.
     */
    cursor?: Prisma.ProcessorInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessorInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessorInventories.
     */
    skip?: number;
    distinct?: Prisma.ProcessorInventoryScalarFieldEnum | Prisma.ProcessorInventoryScalarFieldEnum[];
};
/**
 * ProcessorInventory create
 */
export type ProcessorInventoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProcessorInventory.
     */
    data: Prisma.XOR<Prisma.ProcessorInventoryCreateInput, Prisma.ProcessorInventoryUncheckedCreateInput>;
};
/**
 * ProcessorInventory createMany
 */
export type ProcessorInventoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessorInventories.
     */
    data: Prisma.ProcessorInventoryCreateManyInput | Prisma.ProcessorInventoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProcessorInventory createManyAndReturn
 */
export type ProcessorInventoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * The data used to create many ProcessorInventories.
     */
    data: Prisma.ProcessorInventoryCreateManyInput | Prisma.ProcessorInventoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProcessorInventory update
 */
export type ProcessorInventoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProcessorInventory.
     */
    data: Prisma.XOR<Prisma.ProcessorInventoryUpdateInput, Prisma.ProcessorInventoryUncheckedUpdateInput>;
    /**
     * Choose, which ProcessorInventory to update.
     */
    where: Prisma.ProcessorInventoryWhereUniqueInput;
};
/**
 * ProcessorInventory updateMany
 */
export type ProcessorInventoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessorInventories.
     */
    data: Prisma.XOR<Prisma.ProcessorInventoryUpdateManyMutationInput, Prisma.ProcessorInventoryUncheckedUpdateManyInput>;
    /**
     * Filter which ProcessorInventories to update
     */
    where?: Prisma.ProcessorInventoryWhereInput;
    /**
     * Limit how many ProcessorInventories to update.
     */
    limit?: number;
};
/**
 * ProcessorInventory updateManyAndReturn
 */
export type ProcessorInventoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * The data used to update ProcessorInventories.
     */
    data: Prisma.XOR<Prisma.ProcessorInventoryUpdateManyMutationInput, Prisma.ProcessorInventoryUncheckedUpdateManyInput>;
    /**
     * Filter which ProcessorInventories to update
     */
    where?: Prisma.ProcessorInventoryWhereInput;
    /**
     * Limit how many ProcessorInventories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProcessorInventory upsert
 */
export type ProcessorInventoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProcessorInventory to update in case it exists.
     */
    where: Prisma.ProcessorInventoryWhereUniqueInput;
    /**
     * In case the ProcessorInventory found by the `where` argument doesn't exist, create a new ProcessorInventory with this data.
     */
    create: Prisma.XOR<Prisma.ProcessorInventoryCreateInput, Prisma.ProcessorInventoryUncheckedCreateInput>;
    /**
     * In case the ProcessorInventory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProcessorInventoryUpdateInput, Prisma.ProcessorInventoryUncheckedUpdateInput>;
};
/**
 * ProcessorInventory delete
 */
export type ProcessorInventoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryInclude<ExtArgs> | null;
    /**
     * Filter which ProcessorInventory to delete.
     */
    where: Prisma.ProcessorInventoryWhereUniqueInput;
};
/**
 * ProcessorInventory deleteMany
 */
export type ProcessorInventoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessorInventories to delete
     */
    where?: Prisma.ProcessorInventoryWhereInput;
    /**
     * Limit how many ProcessorInventories to delete.
     */
    limit?: number;
};
/**
 * ProcessorInventory.Items
 */
export type ProcessorInventory$ItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ProcessorFarmerInputWhereInput;
    orderBy?: Prisma.ProcessorFarmerInputOrderByWithRelationInput | Prisma.ProcessorFarmerInputOrderByWithRelationInput[];
    cursor?: Prisma.ProcessorFarmerInputWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProcessorFarmerInputScalarFieldEnum | Prisma.ProcessorFarmerInputScalarFieldEnum[];
};
/**
 * ProcessorInventory.LabProcessorInputs
 */
export type ProcessorInventory$LabProcessorInputsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabProcessorInput
     */
    select?: Prisma.LabProcessorInputSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabProcessorInput
     */
    omit?: Prisma.LabProcessorInputOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabProcessorInputInclude<ExtArgs> | null;
    where?: Prisma.LabProcessorInputWhereInput;
    orderBy?: Prisma.LabProcessorInputOrderByWithRelationInput | Prisma.LabProcessorInputOrderByWithRelationInput[];
    cursor?: Prisma.LabProcessorInputWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LabProcessorInputScalarFieldEnum | Prisma.LabProcessorInputScalarFieldEnum[];
};
/**
 * ProcessorInventory.HerbInventories
 */
export type ProcessorInventory$HerbInventoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.HerbInventoryWhereInput;
    orderBy?: Prisma.HerbInventoryOrderByWithRelationInput | Prisma.HerbInventoryOrderByWithRelationInput[];
    cursor?: Prisma.HerbInventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HerbInventoryScalarFieldEnum | Prisma.HerbInventoryScalarFieldEnum[];
};
/**
 * ProcessorInventory without action
 */
export type ProcessorInventoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorInventory
     */
    select?: Prisma.ProcessorInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessorInventory
     */
    omit?: Prisma.ProcessorInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInventoryInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ProcessorInventory.d.ts.map