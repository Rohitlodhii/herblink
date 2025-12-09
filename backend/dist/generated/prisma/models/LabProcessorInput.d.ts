import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LabProcessorInput
 *
 */
export type LabProcessorInputModel = runtime.Types.Result.DefaultSelection<Prisma.$LabProcessorInputPayload>;
export type AggregateLabProcessorInput = {
    _count: LabProcessorInputCountAggregateOutputType | null;
    _min: LabProcessorInputMinAggregateOutputType | null;
    _max: LabProcessorInputMaxAggregateOutputType | null;
};
export type LabProcessorInputMinAggregateOutputType = {
    id: string | null;
    labId: string | null;
    processorInventoryId: string | null;
    reportpath: string | null;
    description: string | null;
    isDone: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LabProcessorInputMaxAggregateOutputType = {
    id: string | null;
    labId: string | null;
    processorInventoryId: string | null;
    reportpath: string | null;
    description: string | null;
    isDone: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LabProcessorInputCountAggregateOutputType = {
    id: number;
    labId: number;
    processorInventoryId: number;
    reportpath: number;
    description: number;
    isDone: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LabProcessorInputMinAggregateInputType = {
    id?: true;
    labId?: true;
    processorInventoryId?: true;
    reportpath?: true;
    description?: true;
    isDone?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LabProcessorInputMaxAggregateInputType = {
    id?: true;
    labId?: true;
    processorInventoryId?: true;
    reportpath?: true;
    description?: true;
    isDone?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LabProcessorInputCountAggregateInputType = {
    id?: true;
    labId?: true;
    processorInventoryId?: true;
    reportpath?: true;
    description?: true;
    isDone?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LabProcessorInputAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LabProcessorInput to aggregate.
     */
    where?: Prisma.LabProcessorInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabProcessorInputs to fetch.
     */
    orderBy?: Prisma.LabProcessorInputOrderByWithRelationInput | Prisma.LabProcessorInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LabProcessorInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabProcessorInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabProcessorInputs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LabProcessorInputs
    **/
    _count?: true | LabProcessorInputCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LabProcessorInputMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LabProcessorInputMaxAggregateInputType;
};
export type GetLabProcessorInputAggregateType<T extends LabProcessorInputAggregateArgs> = {
    [P in keyof T & keyof AggregateLabProcessorInput]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLabProcessorInput[P]> : Prisma.GetScalarType<T[P], AggregateLabProcessorInput[P]>;
};
export type LabProcessorInputGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabProcessorInputWhereInput;
    orderBy?: Prisma.LabProcessorInputOrderByWithAggregationInput | Prisma.LabProcessorInputOrderByWithAggregationInput[];
    by: Prisma.LabProcessorInputScalarFieldEnum[] | Prisma.LabProcessorInputScalarFieldEnum;
    having?: Prisma.LabProcessorInputScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LabProcessorInputCountAggregateInputType | true;
    _min?: LabProcessorInputMinAggregateInputType;
    _max?: LabProcessorInputMaxAggregateInputType;
};
export type LabProcessorInputGroupByOutputType = {
    id: string;
    labId: string;
    processorInventoryId: string;
    reportpath: string | null;
    description: string | null;
    isDone: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: LabProcessorInputCountAggregateOutputType | null;
    _min: LabProcessorInputMinAggregateOutputType | null;
    _max: LabProcessorInputMaxAggregateOutputType | null;
};
type GetLabProcessorInputGroupByPayload<T extends LabProcessorInputGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LabProcessorInputGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LabProcessorInputGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LabProcessorInputGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LabProcessorInputGroupByOutputType[P]>;
}>>;
export type LabProcessorInputWhereInput = {
    AND?: Prisma.LabProcessorInputWhereInput | Prisma.LabProcessorInputWhereInput[];
    OR?: Prisma.LabProcessorInputWhereInput[];
    NOT?: Prisma.LabProcessorInputWhereInput | Prisma.LabProcessorInputWhereInput[];
    id?: Prisma.StringFilter<"LabProcessorInput"> | string;
    labId?: Prisma.StringFilter<"LabProcessorInput"> | string;
    processorInventoryId?: Prisma.StringFilter<"LabProcessorInput"> | string;
    reportpath?: Prisma.StringNullableFilter<"LabProcessorInput"> | string | null;
    description?: Prisma.StringNullableFilter<"LabProcessorInput"> | string | null;
    isDone?: Prisma.BoolFilter<"LabProcessorInput"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LabProcessorInput"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LabProcessorInput"> | Date | string;
    lab?: Prisma.XOR<Prisma.LabScalarRelationFilter, Prisma.LabWhereInput>;
    processorInventory?: Prisma.XOR<Prisma.ProcessorInventoryScalarRelationFilter, Prisma.ProcessorInventoryWhereInput>;
};
export type LabProcessorInputOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    labId?: Prisma.SortOrder;
    processorInventoryId?: Prisma.SortOrder;
    reportpath?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lab?: Prisma.LabOrderByWithRelationInput;
    processorInventory?: Prisma.ProcessorInventoryOrderByWithRelationInput;
};
export type LabProcessorInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LabProcessorInputWhereInput | Prisma.LabProcessorInputWhereInput[];
    OR?: Prisma.LabProcessorInputWhereInput[];
    NOT?: Prisma.LabProcessorInputWhereInput | Prisma.LabProcessorInputWhereInput[];
    labId?: Prisma.StringFilter<"LabProcessorInput"> | string;
    processorInventoryId?: Prisma.StringFilter<"LabProcessorInput"> | string;
    reportpath?: Prisma.StringNullableFilter<"LabProcessorInput"> | string | null;
    description?: Prisma.StringNullableFilter<"LabProcessorInput"> | string | null;
    isDone?: Prisma.BoolFilter<"LabProcessorInput"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LabProcessorInput"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LabProcessorInput"> | Date | string;
    lab?: Prisma.XOR<Prisma.LabScalarRelationFilter, Prisma.LabWhereInput>;
    processorInventory?: Prisma.XOR<Prisma.ProcessorInventoryScalarRelationFilter, Prisma.ProcessorInventoryWhereInput>;
}, "id">;
export type LabProcessorInputOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    labId?: Prisma.SortOrder;
    processorInventoryId?: Prisma.SortOrder;
    reportpath?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LabProcessorInputCountOrderByAggregateInput;
    _max?: Prisma.LabProcessorInputMaxOrderByAggregateInput;
    _min?: Prisma.LabProcessorInputMinOrderByAggregateInput;
};
export type LabProcessorInputScalarWhereWithAggregatesInput = {
    AND?: Prisma.LabProcessorInputScalarWhereWithAggregatesInput | Prisma.LabProcessorInputScalarWhereWithAggregatesInput[];
    OR?: Prisma.LabProcessorInputScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LabProcessorInputScalarWhereWithAggregatesInput | Prisma.LabProcessorInputScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LabProcessorInput"> | string;
    labId?: Prisma.StringWithAggregatesFilter<"LabProcessorInput"> | string;
    processorInventoryId?: Prisma.StringWithAggregatesFilter<"LabProcessorInput"> | string;
    reportpath?: Prisma.StringNullableWithAggregatesFilter<"LabProcessorInput"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"LabProcessorInput"> | string | null;
    isDone?: Prisma.BoolWithAggregatesFilter<"LabProcessorInput"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LabProcessorInput"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LabProcessorInput"> | Date | string;
};
export type LabProcessorInputCreateInput = {
    id?: string;
    reportpath?: string | null;
    description?: string | null;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lab: Prisma.LabCreateNestedOneWithoutLabProcessorInputsInput;
    processorInventory: Prisma.ProcessorInventoryCreateNestedOneWithoutLabProcessorInputsInput;
};
export type LabProcessorInputUncheckedCreateInput = {
    id?: string;
    labId: string;
    processorInventoryId: string;
    reportpath?: string | null;
    description?: string | null;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabProcessorInputUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportpath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lab?: Prisma.LabUpdateOneRequiredWithoutLabProcessorInputsNestedInput;
    processorInventory?: Prisma.ProcessorInventoryUpdateOneRequiredWithoutLabProcessorInputsNestedInput;
};
export type LabProcessorInputUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    labId?: Prisma.StringFieldUpdateOperationsInput | string;
    processorInventoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportpath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabProcessorInputCreateManyInput = {
    id?: string;
    labId: string;
    processorInventoryId: string;
    reportpath?: string | null;
    description?: string | null;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabProcessorInputUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportpath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabProcessorInputUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    labId?: Prisma.StringFieldUpdateOperationsInput | string;
    processorInventoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportpath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabProcessorInputListRelationFilter = {
    every?: Prisma.LabProcessorInputWhereInput;
    some?: Prisma.LabProcessorInputWhereInput;
    none?: Prisma.LabProcessorInputWhereInput;
};
export type LabProcessorInputOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LabProcessorInputCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    labId?: Prisma.SortOrder;
    processorInventoryId?: Prisma.SortOrder;
    reportpath?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LabProcessorInputMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    labId?: Prisma.SortOrder;
    processorInventoryId?: Prisma.SortOrder;
    reportpath?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LabProcessorInputMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    labId?: Prisma.SortOrder;
    processorInventoryId?: Prisma.SortOrder;
    reportpath?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LabProcessorInputCreateNestedManyWithoutLabInput = {
    create?: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutLabInput, Prisma.LabProcessorInputUncheckedCreateWithoutLabInput> | Prisma.LabProcessorInputCreateWithoutLabInput[] | Prisma.LabProcessorInputUncheckedCreateWithoutLabInput[];
    connectOrCreate?: Prisma.LabProcessorInputCreateOrConnectWithoutLabInput | Prisma.LabProcessorInputCreateOrConnectWithoutLabInput[];
    createMany?: Prisma.LabProcessorInputCreateManyLabInputEnvelope;
    connect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
};
export type LabProcessorInputUncheckedCreateNestedManyWithoutLabInput = {
    create?: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutLabInput, Prisma.LabProcessorInputUncheckedCreateWithoutLabInput> | Prisma.LabProcessorInputCreateWithoutLabInput[] | Prisma.LabProcessorInputUncheckedCreateWithoutLabInput[];
    connectOrCreate?: Prisma.LabProcessorInputCreateOrConnectWithoutLabInput | Prisma.LabProcessorInputCreateOrConnectWithoutLabInput[];
    createMany?: Prisma.LabProcessorInputCreateManyLabInputEnvelope;
    connect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
};
export type LabProcessorInputUpdateManyWithoutLabNestedInput = {
    create?: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutLabInput, Prisma.LabProcessorInputUncheckedCreateWithoutLabInput> | Prisma.LabProcessorInputCreateWithoutLabInput[] | Prisma.LabProcessorInputUncheckedCreateWithoutLabInput[];
    connectOrCreate?: Prisma.LabProcessorInputCreateOrConnectWithoutLabInput | Prisma.LabProcessorInputCreateOrConnectWithoutLabInput[];
    upsert?: Prisma.LabProcessorInputUpsertWithWhereUniqueWithoutLabInput | Prisma.LabProcessorInputUpsertWithWhereUniqueWithoutLabInput[];
    createMany?: Prisma.LabProcessorInputCreateManyLabInputEnvelope;
    set?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    disconnect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    delete?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    connect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    update?: Prisma.LabProcessorInputUpdateWithWhereUniqueWithoutLabInput | Prisma.LabProcessorInputUpdateWithWhereUniqueWithoutLabInput[];
    updateMany?: Prisma.LabProcessorInputUpdateManyWithWhereWithoutLabInput | Prisma.LabProcessorInputUpdateManyWithWhereWithoutLabInput[];
    deleteMany?: Prisma.LabProcessorInputScalarWhereInput | Prisma.LabProcessorInputScalarWhereInput[];
};
export type LabProcessorInputUncheckedUpdateManyWithoutLabNestedInput = {
    create?: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutLabInput, Prisma.LabProcessorInputUncheckedCreateWithoutLabInput> | Prisma.LabProcessorInputCreateWithoutLabInput[] | Prisma.LabProcessorInputUncheckedCreateWithoutLabInput[];
    connectOrCreate?: Prisma.LabProcessorInputCreateOrConnectWithoutLabInput | Prisma.LabProcessorInputCreateOrConnectWithoutLabInput[];
    upsert?: Prisma.LabProcessorInputUpsertWithWhereUniqueWithoutLabInput | Prisma.LabProcessorInputUpsertWithWhereUniqueWithoutLabInput[];
    createMany?: Prisma.LabProcessorInputCreateManyLabInputEnvelope;
    set?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    disconnect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    delete?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    connect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    update?: Prisma.LabProcessorInputUpdateWithWhereUniqueWithoutLabInput | Prisma.LabProcessorInputUpdateWithWhereUniqueWithoutLabInput[];
    updateMany?: Prisma.LabProcessorInputUpdateManyWithWhereWithoutLabInput | Prisma.LabProcessorInputUpdateManyWithWhereWithoutLabInput[];
    deleteMany?: Prisma.LabProcessorInputScalarWhereInput | Prisma.LabProcessorInputScalarWhereInput[];
};
export type LabProcessorInputCreateNestedManyWithoutProcessorInventoryInput = {
    create?: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutProcessorInventoryInput, Prisma.LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput> | Prisma.LabProcessorInputCreateWithoutProcessorInventoryInput[] | Prisma.LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput[];
    connectOrCreate?: Prisma.LabProcessorInputCreateOrConnectWithoutProcessorInventoryInput | Prisma.LabProcessorInputCreateOrConnectWithoutProcessorInventoryInput[];
    createMany?: Prisma.LabProcessorInputCreateManyProcessorInventoryInputEnvelope;
    connect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
};
export type LabProcessorInputUncheckedCreateNestedManyWithoutProcessorInventoryInput = {
    create?: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutProcessorInventoryInput, Prisma.LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput> | Prisma.LabProcessorInputCreateWithoutProcessorInventoryInput[] | Prisma.LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput[];
    connectOrCreate?: Prisma.LabProcessorInputCreateOrConnectWithoutProcessorInventoryInput | Prisma.LabProcessorInputCreateOrConnectWithoutProcessorInventoryInput[];
    createMany?: Prisma.LabProcessorInputCreateManyProcessorInventoryInputEnvelope;
    connect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
};
export type LabProcessorInputUpdateManyWithoutProcessorInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutProcessorInventoryInput, Prisma.LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput> | Prisma.LabProcessorInputCreateWithoutProcessorInventoryInput[] | Prisma.LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput[];
    connectOrCreate?: Prisma.LabProcessorInputCreateOrConnectWithoutProcessorInventoryInput | Prisma.LabProcessorInputCreateOrConnectWithoutProcessorInventoryInput[];
    upsert?: Prisma.LabProcessorInputUpsertWithWhereUniqueWithoutProcessorInventoryInput | Prisma.LabProcessorInputUpsertWithWhereUniqueWithoutProcessorInventoryInput[];
    createMany?: Prisma.LabProcessorInputCreateManyProcessorInventoryInputEnvelope;
    set?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    disconnect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    delete?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    connect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    update?: Prisma.LabProcessorInputUpdateWithWhereUniqueWithoutProcessorInventoryInput | Prisma.LabProcessorInputUpdateWithWhereUniqueWithoutProcessorInventoryInput[];
    updateMany?: Prisma.LabProcessorInputUpdateManyWithWhereWithoutProcessorInventoryInput | Prisma.LabProcessorInputUpdateManyWithWhereWithoutProcessorInventoryInput[];
    deleteMany?: Prisma.LabProcessorInputScalarWhereInput | Prisma.LabProcessorInputScalarWhereInput[];
};
export type LabProcessorInputUncheckedUpdateManyWithoutProcessorInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutProcessorInventoryInput, Prisma.LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput> | Prisma.LabProcessorInputCreateWithoutProcessorInventoryInput[] | Prisma.LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput[];
    connectOrCreate?: Prisma.LabProcessorInputCreateOrConnectWithoutProcessorInventoryInput | Prisma.LabProcessorInputCreateOrConnectWithoutProcessorInventoryInput[];
    upsert?: Prisma.LabProcessorInputUpsertWithWhereUniqueWithoutProcessorInventoryInput | Prisma.LabProcessorInputUpsertWithWhereUniqueWithoutProcessorInventoryInput[];
    createMany?: Prisma.LabProcessorInputCreateManyProcessorInventoryInputEnvelope;
    set?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    disconnect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    delete?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    connect?: Prisma.LabProcessorInputWhereUniqueInput | Prisma.LabProcessorInputWhereUniqueInput[];
    update?: Prisma.LabProcessorInputUpdateWithWhereUniqueWithoutProcessorInventoryInput | Prisma.LabProcessorInputUpdateWithWhereUniqueWithoutProcessorInventoryInput[];
    updateMany?: Prisma.LabProcessorInputUpdateManyWithWhereWithoutProcessorInventoryInput | Prisma.LabProcessorInputUpdateManyWithWhereWithoutProcessorInventoryInput[];
    deleteMany?: Prisma.LabProcessorInputScalarWhereInput | Prisma.LabProcessorInputScalarWhereInput[];
};
export type LabProcessorInputCreateWithoutLabInput = {
    id?: string;
    reportpath?: string | null;
    description?: string | null;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    processorInventory: Prisma.ProcessorInventoryCreateNestedOneWithoutLabProcessorInputsInput;
};
export type LabProcessorInputUncheckedCreateWithoutLabInput = {
    id?: string;
    processorInventoryId: string;
    reportpath?: string | null;
    description?: string | null;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabProcessorInputCreateOrConnectWithoutLabInput = {
    where: Prisma.LabProcessorInputWhereUniqueInput;
    create: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutLabInput, Prisma.LabProcessorInputUncheckedCreateWithoutLabInput>;
};
export type LabProcessorInputCreateManyLabInputEnvelope = {
    data: Prisma.LabProcessorInputCreateManyLabInput | Prisma.LabProcessorInputCreateManyLabInput[];
    skipDuplicates?: boolean;
};
export type LabProcessorInputUpsertWithWhereUniqueWithoutLabInput = {
    where: Prisma.LabProcessorInputWhereUniqueInput;
    update: Prisma.XOR<Prisma.LabProcessorInputUpdateWithoutLabInput, Prisma.LabProcessorInputUncheckedUpdateWithoutLabInput>;
    create: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutLabInput, Prisma.LabProcessorInputUncheckedCreateWithoutLabInput>;
};
export type LabProcessorInputUpdateWithWhereUniqueWithoutLabInput = {
    where: Prisma.LabProcessorInputWhereUniqueInput;
    data: Prisma.XOR<Prisma.LabProcessorInputUpdateWithoutLabInput, Prisma.LabProcessorInputUncheckedUpdateWithoutLabInput>;
};
export type LabProcessorInputUpdateManyWithWhereWithoutLabInput = {
    where: Prisma.LabProcessorInputScalarWhereInput;
    data: Prisma.XOR<Prisma.LabProcessorInputUpdateManyMutationInput, Prisma.LabProcessorInputUncheckedUpdateManyWithoutLabInput>;
};
export type LabProcessorInputScalarWhereInput = {
    AND?: Prisma.LabProcessorInputScalarWhereInput | Prisma.LabProcessorInputScalarWhereInput[];
    OR?: Prisma.LabProcessorInputScalarWhereInput[];
    NOT?: Prisma.LabProcessorInputScalarWhereInput | Prisma.LabProcessorInputScalarWhereInput[];
    id?: Prisma.StringFilter<"LabProcessorInput"> | string;
    labId?: Prisma.StringFilter<"LabProcessorInput"> | string;
    processorInventoryId?: Prisma.StringFilter<"LabProcessorInput"> | string;
    reportpath?: Prisma.StringNullableFilter<"LabProcessorInput"> | string | null;
    description?: Prisma.StringNullableFilter<"LabProcessorInput"> | string | null;
    isDone?: Prisma.BoolFilter<"LabProcessorInput"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LabProcessorInput"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LabProcessorInput"> | Date | string;
};
export type LabProcessorInputCreateWithoutProcessorInventoryInput = {
    id?: string;
    reportpath?: string | null;
    description?: string | null;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lab: Prisma.LabCreateNestedOneWithoutLabProcessorInputsInput;
};
export type LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput = {
    id?: string;
    labId: string;
    reportpath?: string | null;
    description?: string | null;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabProcessorInputCreateOrConnectWithoutProcessorInventoryInput = {
    where: Prisma.LabProcessorInputWhereUniqueInput;
    create: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutProcessorInventoryInput, Prisma.LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput>;
};
export type LabProcessorInputCreateManyProcessorInventoryInputEnvelope = {
    data: Prisma.LabProcessorInputCreateManyProcessorInventoryInput | Prisma.LabProcessorInputCreateManyProcessorInventoryInput[];
    skipDuplicates?: boolean;
};
export type LabProcessorInputUpsertWithWhereUniqueWithoutProcessorInventoryInput = {
    where: Prisma.LabProcessorInputWhereUniqueInput;
    update: Prisma.XOR<Prisma.LabProcessorInputUpdateWithoutProcessorInventoryInput, Prisma.LabProcessorInputUncheckedUpdateWithoutProcessorInventoryInput>;
    create: Prisma.XOR<Prisma.LabProcessorInputCreateWithoutProcessorInventoryInput, Prisma.LabProcessorInputUncheckedCreateWithoutProcessorInventoryInput>;
};
export type LabProcessorInputUpdateWithWhereUniqueWithoutProcessorInventoryInput = {
    where: Prisma.LabProcessorInputWhereUniqueInput;
    data: Prisma.XOR<Prisma.LabProcessorInputUpdateWithoutProcessorInventoryInput, Prisma.LabProcessorInputUncheckedUpdateWithoutProcessorInventoryInput>;
};
export type LabProcessorInputUpdateManyWithWhereWithoutProcessorInventoryInput = {
    where: Prisma.LabProcessorInputScalarWhereInput;
    data: Prisma.XOR<Prisma.LabProcessorInputUpdateManyMutationInput, Prisma.LabProcessorInputUncheckedUpdateManyWithoutProcessorInventoryInput>;
};
export type LabProcessorInputCreateManyLabInput = {
    id?: string;
    processorInventoryId: string;
    reportpath?: string | null;
    description?: string | null;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabProcessorInputUpdateWithoutLabInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportpath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    processorInventory?: Prisma.ProcessorInventoryUpdateOneRequiredWithoutLabProcessorInputsNestedInput;
};
export type LabProcessorInputUncheckedUpdateWithoutLabInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorInventoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportpath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabProcessorInputUncheckedUpdateManyWithoutLabInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorInventoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportpath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabProcessorInputCreateManyProcessorInventoryInput = {
    id?: string;
    labId: string;
    reportpath?: string | null;
    description?: string | null;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabProcessorInputUpdateWithoutProcessorInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportpath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lab?: Prisma.LabUpdateOneRequiredWithoutLabProcessorInputsNestedInput;
};
export type LabProcessorInputUncheckedUpdateWithoutProcessorInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    labId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportpath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabProcessorInputUncheckedUpdateManyWithoutProcessorInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    labId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportpath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabProcessorInputSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    labId?: boolean;
    processorInventoryId?: boolean;
    reportpath?: boolean;
    description?: boolean;
    isDone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lab?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labProcessorInput"]>;
export type LabProcessorInputSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    labId?: boolean;
    processorInventoryId?: boolean;
    reportpath?: boolean;
    description?: boolean;
    isDone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lab?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labProcessorInput"]>;
export type LabProcessorInputSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    labId?: boolean;
    processorInventoryId?: boolean;
    reportpath?: boolean;
    description?: boolean;
    isDone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lab?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labProcessorInput"]>;
export type LabProcessorInputSelectScalar = {
    id?: boolean;
    labId?: boolean;
    processorInventoryId?: boolean;
    reportpath?: boolean;
    description?: boolean;
    isDone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LabProcessorInputOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "labId" | "processorInventoryId" | "reportpath" | "description" | "isDone" | "createdAt" | "updatedAt", ExtArgs["result"]["labProcessorInput"]>;
export type LabProcessorInputInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lab?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
};
export type LabProcessorInputIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lab?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
};
export type LabProcessorInputIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lab?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
    processorInventory?: boolean | Prisma.ProcessorInventoryDefaultArgs<ExtArgs>;
};
export type $LabProcessorInputPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LabProcessorInput";
    objects: {
        lab: Prisma.$LabPayload<ExtArgs>;
        processorInventory: Prisma.$ProcessorInventoryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        labId: string;
        processorInventoryId: string;
        reportpath: string | null;
        description: string | null;
        isDone: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["labProcessorInput"]>;
    composites: {};
};
export type LabProcessorInputGetPayload<S extends boolean | null | undefined | LabProcessorInputDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload, S>;
export type LabProcessorInputCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LabProcessorInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LabProcessorInputCountAggregateInputType | true;
};
export interface LabProcessorInputDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LabProcessorInput'];
        meta: {
            name: 'LabProcessorInput';
        };
    };
    /**
     * Find zero or one LabProcessorInput that matches the filter.
     * @param {LabProcessorInputFindUniqueArgs} args - Arguments to find a LabProcessorInput
     * @example
     * // Get one LabProcessorInput
     * const labProcessorInput = await prisma.labProcessorInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabProcessorInputFindUniqueArgs>(args: Prisma.SelectSubset<T, LabProcessorInputFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LabProcessorInputClient<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LabProcessorInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabProcessorInputFindUniqueOrThrowArgs} args - Arguments to find a LabProcessorInput
     * @example
     * // Get one LabProcessorInput
     * const labProcessorInput = await prisma.labProcessorInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabProcessorInputFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LabProcessorInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LabProcessorInputClient<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LabProcessorInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabProcessorInputFindFirstArgs} args - Arguments to find a LabProcessorInput
     * @example
     * // Get one LabProcessorInput
     * const labProcessorInput = await prisma.labProcessorInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabProcessorInputFindFirstArgs>(args?: Prisma.SelectSubset<T, LabProcessorInputFindFirstArgs<ExtArgs>>): Prisma.Prisma__LabProcessorInputClient<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LabProcessorInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabProcessorInputFindFirstOrThrowArgs} args - Arguments to find a LabProcessorInput
     * @example
     * // Get one LabProcessorInput
     * const labProcessorInput = await prisma.labProcessorInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabProcessorInputFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LabProcessorInputFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LabProcessorInputClient<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LabProcessorInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabProcessorInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabProcessorInputs
     * const labProcessorInputs = await prisma.labProcessorInput.findMany()
     *
     * // Get first 10 LabProcessorInputs
     * const labProcessorInputs = await prisma.labProcessorInput.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const labProcessorInputWithIdOnly = await prisma.labProcessorInput.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LabProcessorInputFindManyArgs>(args?: Prisma.SelectSubset<T, LabProcessorInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LabProcessorInput.
     * @param {LabProcessorInputCreateArgs} args - Arguments to create a LabProcessorInput.
     * @example
     * // Create one LabProcessorInput
     * const LabProcessorInput = await prisma.labProcessorInput.create({
     *   data: {
     *     // ... data to create a LabProcessorInput
     *   }
     * })
     *
     */
    create<T extends LabProcessorInputCreateArgs>(args: Prisma.SelectSubset<T, LabProcessorInputCreateArgs<ExtArgs>>): Prisma.Prisma__LabProcessorInputClient<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LabProcessorInputs.
     * @param {LabProcessorInputCreateManyArgs} args - Arguments to create many LabProcessorInputs.
     * @example
     * // Create many LabProcessorInputs
     * const labProcessorInput = await prisma.labProcessorInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LabProcessorInputCreateManyArgs>(args?: Prisma.SelectSubset<T, LabProcessorInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LabProcessorInputs and returns the data saved in the database.
     * @param {LabProcessorInputCreateManyAndReturnArgs} args - Arguments to create many LabProcessorInputs.
     * @example
     * // Create many LabProcessorInputs
     * const labProcessorInput = await prisma.labProcessorInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LabProcessorInputs and only return the `id`
     * const labProcessorInputWithIdOnly = await prisma.labProcessorInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LabProcessorInputCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LabProcessorInputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LabProcessorInput.
     * @param {LabProcessorInputDeleteArgs} args - Arguments to delete one LabProcessorInput.
     * @example
     * // Delete one LabProcessorInput
     * const LabProcessorInput = await prisma.labProcessorInput.delete({
     *   where: {
     *     // ... filter to delete one LabProcessorInput
     *   }
     * })
     *
     */
    delete<T extends LabProcessorInputDeleteArgs>(args: Prisma.SelectSubset<T, LabProcessorInputDeleteArgs<ExtArgs>>): Prisma.Prisma__LabProcessorInputClient<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LabProcessorInput.
     * @param {LabProcessorInputUpdateArgs} args - Arguments to update one LabProcessorInput.
     * @example
     * // Update one LabProcessorInput
     * const labProcessorInput = await prisma.labProcessorInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LabProcessorInputUpdateArgs>(args: Prisma.SelectSubset<T, LabProcessorInputUpdateArgs<ExtArgs>>): Prisma.Prisma__LabProcessorInputClient<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LabProcessorInputs.
     * @param {LabProcessorInputDeleteManyArgs} args - Arguments to filter LabProcessorInputs to delete.
     * @example
     * // Delete a few LabProcessorInputs
     * const { count } = await prisma.labProcessorInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LabProcessorInputDeleteManyArgs>(args?: Prisma.SelectSubset<T, LabProcessorInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LabProcessorInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabProcessorInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabProcessorInputs
     * const labProcessorInput = await prisma.labProcessorInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LabProcessorInputUpdateManyArgs>(args: Prisma.SelectSubset<T, LabProcessorInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LabProcessorInputs and returns the data updated in the database.
     * @param {LabProcessorInputUpdateManyAndReturnArgs} args - Arguments to update many LabProcessorInputs.
     * @example
     * // Update many LabProcessorInputs
     * const labProcessorInput = await prisma.labProcessorInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LabProcessorInputs and only return the `id`
     * const labProcessorInputWithIdOnly = await prisma.labProcessorInput.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabProcessorInputUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LabProcessorInputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LabProcessorInput.
     * @param {LabProcessorInputUpsertArgs} args - Arguments to update or create a LabProcessorInput.
     * @example
     * // Update or create a LabProcessorInput
     * const labProcessorInput = await prisma.labProcessorInput.upsert({
     *   create: {
     *     // ... data to create a LabProcessorInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabProcessorInput we want to update
     *   }
     * })
     */
    upsert<T extends LabProcessorInputUpsertArgs>(args: Prisma.SelectSubset<T, LabProcessorInputUpsertArgs<ExtArgs>>): Prisma.Prisma__LabProcessorInputClient<runtime.Types.Result.GetResult<Prisma.$LabProcessorInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LabProcessorInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabProcessorInputCountArgs} args - Arguments to filter LabProcessorInputs to count.
     * @example
     * // Count the number of LabProcessorInputs
     * const count = await prisma.labProcessorInput.count({
     *   where: {
     *     // ... the filter for the LabProcessorInputs we want to count
     *   }
     * })
    **/
    count<T extends LabProcessorInputCountArgs>(args?: Prisma.Subset<T, LabProcessorInputCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LabProcessorInputCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LabProcessorInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabProcessorInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabProcessorInputAggregateArgs>(args: Prisma.Subset<T, LabProcessorInputAggregateArgs>): Prisma.PrismaPromise<GetLabProcessorInputAggregateType<T>>;
    /**
     * Group by LabProcessorInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabProcessorInputGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LabProcessorInputGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LabProcessorInputGroupByArgs['orderBy'];
    } : {
        orderBy?: LabProcessorInputGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LabProcessorInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabProcessorInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LabProcessorInput model
     */
    readonly fields: LabProcessorInputFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LabProcessorInput.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LabProcessorInputClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lab<T extends Prisma.LabDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LabDefaultArgs<ExtArgs>>): Prisma.Prisma__LabClient<runtime.Types.Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    processorInventory<T extends Prisma.ProcessorInventoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProcessorInventoryDefaultArgs<ExtArgs>>): Prisma.Prisma__ProcessorInventoryClient<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LabProcessorInput model
 */
export interface LabProcessorInputFieldRefs {
    readonly id: Prisma.FieldRef<"LabProcessorInput", 'String'>;
    readonly labId: Prisma.FieldRef<"LabProcessorInput", 'String'>;
    readonly processorInventoryId: Prisma.FieldRef<"LabProcessorInput", 'String'>;
    readonly reportpath: Prisma.FieldRef<"LabProcessorInput", 'String'>;
    readonly description: Prisma.FieldRef<"LabProcessorInput", 'String'>;
    readonly isDone: Prisma.FieldRef<"LabProcessorInput", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"LabProcessorInput", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LabProcessorInput", 'DateTime'>;
}
/**
 * LabProcessorInput findUnique
 */
export type LabProcessorInputFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LabProcessorInput to fetch.
     */
    where: Prisma.LabProcessorInputWhereUniqueInput;
};
/**
 * LabProcessorInput findUniqueOrThrow
 */
export type LabProcessorInputFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LabProcessorInput to fetch.
     */
    where: Prisma.LabProcessorInputWhereUniqueInput;
};
/**
 * LabProcessorInput findFirst
 */
export type LabProcessorInputFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LabProcessorInput to fetch.
     */
    where?: Prisma.LabProcessorInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabProcessorInputs to fetch.
     */
    orderBy?: Prisma.LabProcessorInputOrderByWithRelationInput | Prisma.LabProcessorInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LabProcessorInputs.
     */
    cursor?: Prisma.LabProcessorInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabProcessorInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabProcessorInputs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LabProcessorInputs.
     */
    distinct?: Prisma.LabProcessorInputScalarFieldEnum | Prisma.LabProcessorInputScalarFieldEnum[];
};
/**
 * LabProcessorInput findFirstOrThrow
 */
export type LabProcessorInputFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LabProcessorInput to fetch.
     */
    where?: Prisma.LabProcessorInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabProcessorInputs to fetch.
     */
    orderBy?: Prisma.LabProcessorInputOrderByWithRelationInput | Prisma.LabProcessorInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LabProcessorInputs.
     */
    cursor?: Prisma.LabProcessorInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabProcessorInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabProcessorInputs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LabProcessorInputs.
     */
    distinct?: Prisma.LabProcessorInputScalarFieldEnum | Prisma.LabProcessorInputScalarFieldEnum[];
};
/**
 * LabProcessorInput findMany
 */
export type LabProcessorInputFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LabProcessorInputs to fetch.
     */
    where?: Prisma.LabProcessorInputWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabProcessorInputs to fetch.
     */
    orderBy?: Prisma.LabProcessorInputOrderByWithRelationInput | Prisma.LabProcessorInputOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LabProcessorInputs.
     */
    cursor?: Prisma.LabProcessorInputWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabProcessorInputs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabProcessorInputs.
     */
    skip?: number;
    distinct?: Prisma.LabProcessorInputScalarFieldEnum | Prisma.LabProcessorInputScalarFieldEnum[];
};
/**
 * LabProcessorInput create
 */
export type LabProcessorInputCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a LabProcessorInput.
     */
    data: Prisma.XOR<Prisma.LabProcessorInputCreateInput, Prisma.LabProcessorInputUncheckedCreateInput>;
};
/**
 * LabProcessorInput createMany
 */
export type LabProcessorInputCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabProcessorInputs.
     */
    data: Prisma.LabProcessorInputCreateManyInput | Prisma.LabProcessorInputCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LabProcessorInput createManyAndReturn
 */
export type LabProcessorInputCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabProcessorInput
     */
    select?: Prisma.LabProcessorInputSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LabProcessorInput
     */
    omit?: Prisma.LabProcessorInputOmit<ExtArgs> | null;
    /**
     * The data used to create many LabProcessorInputs.
     */
    data: Prisma.LabProcessorInputCreateManyInput | Prisma.LabProcessorInputCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabProcessorInputIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LabProcessorInput update
 */
export type LabProcessorInputUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a LabProcessorInput.
     */
    data: Prisma.XOR<Prisma.LabProcessorInputUpdateInput, Prisma.LabProcessorInputUncheckedUpdateInput>;
    /**
     * Choose, which LabProcessorInput to update.
     */
    where: Prisma.LabProcessorInputWhereUniqueInput;
};
/**
 * LabProcessorInput updateMany
 */
export type LabProcessorInputUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LabProcessorInputs.
     */
    data: Prisma.XOR<Prisma.LabProcessorInputUpdateManyMutationInput, Prisma.LabProcessorInputUncheckedUpdateManyInput>;
    /**
     * Filter which LabProcessorInputs to update
     */
    where?: Prisma.LabProcessorInputWhereInput;
    /**
     * Limit how many LabProcessorInputs to update.
     */
    limit?: number;
};
/**
 * LabProcessorInput updateManyAndReturn
 */
export type LabProcessorInputUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabProcessorInput
     */
    select?: Prisma.LabProcessorInputSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LabProcessorInput
     */
    omit?: Prisma.LabProcessorInputOmit<ExtArgs> | null;
    /**
     * The data used to update LabProcessorInputs.
     */
    data: Prisma.XOR<Prisma.LabProcessorInputUpdateManyMutationInput, Prisma.LabProcessorInputUncheckedUpdateManyInput>;
    /**
     * Filter which LabProcessorInputs to update
     */
    where?: Prisma.LabProcessorInputWhereInput;
    /**
     * Limit how many LabProcessorInputs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabProcessorInputIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LabProcessorInput upsert
 */
export type LabProcessorInputUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the LabProcessorInput to update in case it exists.
     */
    where: Prisma.LabProcessorInputWhereUniqueInput;
    /**
     * In case the LabProcessorInput found by the `where` argument doesn't exist, create a new LabProcessorInput with this data.
     */
    create: Prisma.XOR<Prisma.LabProcessorInputCreateInput, Prisma.LabProcessorInputUncheckedCreateInput>;
    /**
     * In case the LabProcessorInput was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LabProcessorInputUpdateInput, Prisma.LabProcessorInputUncheckedUpdateInput>;
};
/**
 * LabProcessorInput delete
 */
export type LabProcessorInputDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which LabProcessorInput to delete.
     */
    where: Prisma.LabProcessorInputWhereUniqueInput;
};
/**
 * LabProcessorInput deleteMany
 */
export type LabProcessorInputDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LabProcessorInputs to delete
     */
    where?: Prisma.LabProcessorInputWhereInput;
    /**
     * Limit how many LabProcessorInputs to delete.
     */
    limit?: number;
};
/**
 * LabProcessorInput without action
 */
export type LabProcessorInputDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=LabProcessorInput.d.ts.map