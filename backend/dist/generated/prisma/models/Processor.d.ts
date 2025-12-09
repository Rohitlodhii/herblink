import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Processor
 *
 */
export type ProcessorModel = runtime.Types.Result.DefaultSelection<Prisma.$ProcessorPayload>;
export type AggregateProcessor = {
    _count: ProcessorCountAggregateOutputType | null;
    _min: ProcessorMinAggregateOutputType | null;
    _max: ProcessorMaxAggregateOutputType | null;
};
export type ProcessorMinAggregateOutputType = {
    id: string | null;
    processorId: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    address: string | null;
    organization: string | null;
    isVerified: boolean | null;
    status: $Enums.StatusType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProcessorMaxAggregateOutputType = {
    id: string | null;
    processorId: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    address: string | null;
    organization: string | null;
    isVerified: boolean | null;
    status: $Enums.StatusType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProcessorCountAggregateOutputType = {
    id: number;
    processorId: number;
    email: number;
    password: number;
    name: number;
    address: number;
    organization: number;
    isVerified: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProcessorMinAggregateInputType = {
    id?: true;
    processorId?: true;
    email?: true;
    password?: true;
    name?: true;
    address?: true;
    organization?: true;
    isVerified?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProcessorMaxAggregateInputType = {
    id?: true;
    processorId?: true;
    email?: true;
    password?: true;
    name?: true;
    address?: true;
    organization?: true;
    isVerified?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProcessorCountAggregateInputType = {
    id?: true;
    processorId?: true;
    email?: true;
    password?: true;
    name?: true;
    address?: true;
    organization?: true;
    isVerified?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProcessorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Processor to aggregate.
     */
    where?: Prisma.ProcessorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Processors to fetch.
     */
    orderBy?: Prisma.ProcessorOrderByWithRelationInput | Prisma.ProcessorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProcessorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Processors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Processors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Processors
    **/
    _count?: true | ProcessorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProcessorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProcessorMaxAggregateInputType;
};
export type GetProcessorAggregateType<T extends ProcessorAggregateArgs> = {
    [P in keyof T & keyof AggregateProcessor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProcessor[P]> : Prisma.GetScalarType<T[P], AggregateProcessor[P]>;
};
export type ProcessorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProcessorWhereInput;
    orderBy?: Prisma.ProcessorOrderByWithAggregationInput | Prisma.ProcessorOrderByWithAggregationInput[];
    by: Prisma.ProcessorScalarFieldEnum[] | Prisma.ProcessorScalarFieldEnum;
    having?: Prisma.ProcessorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProcessorCountAggregateInputType | true;
    _min?: ProcessorMinAggregateInputType;
    _max?: ProcessorMaxAggregateInputType;
};
export type ProcessorGroupByOutputType = {
    id: string;
    processorId: string | null;
    email: string;
    password: string;
    name: string | null;
    address: string | null;
    organization: string | null;
    isVerified: boolean;
    status: $Enums.StatusType | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProcessorCountAggregateOutputType | null;
    _min: ProcessorMinAggregateOutputType | null;
    _max: ProcessorMaxAggregateOutputType | null;
};
type GetProcessorGroupByPayload<T extends ProcessorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProcessorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProcessorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProcessorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProcessorGroupByOutputType[P]>;
}>>;
export type ProcessorWhereInput = {
    AND?: Prisma.ProcessorWhereInput | Prisma.ProcessorWhereInput[];
    OR?: Prisma.ProcessorWhereInput[];
    NOT?: Prisma.ProcessorWhereInput | Prisma.ProcessorWhereInput[];
    id?: Prisma.StringFilter<"Processor"> | string;
    processorId?: Prisma.StringNullableFilter<"Processor"> | string | null;
    email?: Prisma.StringFilter<"Processor"> | string;
    password?: Prisma.StringFilter<"Processor"> | string;
    name?: Prisma.StringNullableFilter<"Processor"> | string | null;
    address?: Prisma.StringNullableFilter<"Processor"> | string | null;
    organization?: Prisma.StringNullableFilter<"Processor"> | string | null;
    isVerified?: Prisma.BoolFilter<"Processor"> | boolean;
    status?: Prisma.EnumStatusTypeNullableFilter<"Processor"> | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeFilter<"Processor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Processor"> | Date | string;
    inventory?: Prisma.ProcessorInventoryListRelationFilter;
    plantInfo?: Prisma.XOR<Prisma.ProcessingPlantInfoNullableScalarRelationFilter, Prisma.ProcessingPlantInfoWhereInput> | null;
};
export type ProcessorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    processorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    organization?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    inventory?: Prisma.ProcessorInventoryOrderByRelationAggregateInput;
    plantInfo?: Prisma.ProcessingPlantInfoOrderByWithRelationInput;
};
export type ProcessorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    processorId?: string;
    email?: string;
    AND?: Prisma.ProcessorWhereInput | Prisma.ProcessorWhereInput[];
    OR?: Prisma.ProcessorWhereInput[];
    NOT?: Prisma.ProcessorWhereInput | Prisma.ProcessorWhereInput[];
    password?: Prisma.StringFilter<"Processor"> | string;
    name?: Prisma.StringNullableFilter<"Processor"> | string | null;
    address?: Prisma.StringNullableFilter<"Processor"> | string | null;
    organization?: Prisma.StringNullableFilter<"Processor"> | string | null;
    isVerified?: Prisma.BoolFilter<"Processor"> | boolean;
    status?: Prisma.EnumStatusTypeNullableFilter<"Processor"> | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeFilter<"Processor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Processor"> | Date | string;
    inventory?: Prisma.ProcessorInventoryListRelationFilter;
    plantInfo?: Prisma.XOR<Prisma.ProcessingPlantInfoNullableScalarRelationFilter, Prisma.ProcessingPlantInfoWhereInput> | null;
}, "id" | "processorId" | "email">;
export type ProcessorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    processorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    organization?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProcessorCountOrderByAggregateInput;
    _max?: Prisma.ProcessorMaxOrderByAggregateInput;
    _min?: Prisma.ProcessorMinOrderByAggregateInput;
};
export type ProcessorScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProcessorScalarWhereWithAggregatesInput | Prisma.ProcessorScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProcessorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProcessorScalarWhereWithAggregatesInput | Prisma.ProcessorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Processor"> | string;
    processorId?: Prisma.StringNullableWithAggregatesFilter<"Processor"> | string | null;
    email?: Prisma.StringWithAggregatesFilter<"Processor"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Processor"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"Processor"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Processor"> | string | null;
    organization?: Prisma.StringNullableWithAggregatesFilter<"Processor"> | string | null;
    isVerified?: Prisma.BoolWithAggregatesFilter<"Processor"> | boolean;
    status?: Prisma.EnumStatusTypeNullableWithAggregatesFilter<"Processor"> | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Processor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Processor"> | Date | string;
};
export type ProcessorCreateInput = {
    id?: string;
    processorId?: string | null;
    email: string;
    password: string;
    name?: string | null;
    address?: string | null;
    organization?: string | null;
    isVerified?: boolean;
    status?: $Enums.StatusType | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ProcessorInventoryCreateNestedManyWithoutProcessoridInput;
    plantInfo?: Prisma.ProcessingPlantInfoCreateNestedOneWithoutProcessoridInput;
};
export type ProcessorUncheckedCreateInput = {
    id?: string;
    processorId?: string | null;
    email: string;
    password: string;
    name?: string | null;
    address?: string | null;
    organization?: string | null;
    isVerified?: boolean;
    status?: $Enums.StatusType | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ProcessorInventoryUncheckedCreateNestedManyWithoutProcessoridInput;
    plantInfo?: Prisma.ProcessingPlantInfoUncheckedCreateNestedOneWithoutProcessoridInput;
};
export type ProcessorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ProcessorInventoryUpdateManyWithoutProcessoridNestedInput;
    plantInfo?: Prisma.ProcessingPlantInfoUpdateOneWithoutProcessoridNestedInput;
};
export type ProcessorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ProcessorInventoryUncheckedUpdateManyWithoutProcessoridNestedInput;
    plantInfo?: Prisma.ProcessingPlantInfoUncheckedUpdateOneWithoutProcessoridNestedInput;
};
export type ProcessorCreateManyInput = {
    id?: string;
    processorId?: string | null;
    email: string;
    password: string;
    name?: string | null;
    address?: string | null;
    organization?: string | null;
    isVerified?: boolean;
    status?: $Enums.StatusType | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    organization?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    organization?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    organization?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessorScalarRelationFilter = {
    is?: Prisma.ProcessorWhereInput;
    isNot?: Prisma.ProcessorWhereInput;
};
export type ProcessorCreateNestedOneWithoutPlantInfoInput = {
    create?: Prisma.XOR<Prisma.ProcessorCreateWithoutPlantInfoInput, Prisma.ProcessorUncheckedCreateWithoutPlantInfoInput>;
    connectOrCreate?: Prisma.ProcessorCreateOrConnectWithoutPlantInfoInput;
    connect?: Prisma.ProcessorWhereUniqueInput;
};
export type ProcessorUpdateOneRequiredWithoutPlantInfoNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessorCreateWithoutPlantInfoInput, Prisma.ProcessorUncheckedCreateWithoutPlantInfoInput>;
    connectOrCreate?: Prisma.ProcessorCreateOrConnectWithoutPlantInfoInput;
    upsert?: Prisma.ProcessorUpsertWithoutPlantInfoInput;
    connect?: Prisma.ProcessorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProcessorUpdateToOneWithWhereWithoutPlantInfoInput, Prisma.ProcessorUpdateWithoutPlantInfoInput>, Prisma.ProcessorUncheckedUpdateWithoutPlantInfoInput>;
};
export type ProcessorCreateNestedOneWithoutInventoryInput = {
    create?: Prisma.XOR<Prisma.ProcessorCreateWithoutInventoryInput, Prisma.ProcessorUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: Prisma.ProcessorCreateOrConnectWithoutInventoryInput;
    connect?: Prisma.ProcessorWhereUniqueInput;
};
export type ProcessorUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessorCreateWithoutInventoryInput, Prisma.ProcessorUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: Prisma.ProcessorCreateOrConnectWithoutInventoryInput;
    upsert?: Prisma.ProcessorUpsertWithoutInventoryInput;
    connect?: Prisma.ProcessorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProcessorUpdateToOneWithWhereWithoutInventoryInput, Prisma.ProcessorUpdateWithoutInventoryInput>, Prisma.ProcessorUncheckedUpdateWithoutInventoryInput>;
};
export type ProcessorCreateWithoutPlantInfoInput = {
    id?: string;
    processorId?: string | null;
    email: string;
    password: string;
    name?: string | null;
    address?: string | null;
    organization?: string | null;
    isVerified?: boolean;
    status?: $Enums.StatusType | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ProcessorInventoryCreateNestedManyWithoutProcessoridInput;
};
export type ProcessorUncheckedCreateWithoutPlantInfoInput = {
    id?: string;
    processorId?: string | null;
    email: string;
    password: string;
    name?: string | null;
    address?: string | null;
    organization?: string | null;
    isVerified?: boolean;
    status?: $Enums.StatusType | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ProcessorInventoryUncheckedCreateNestedManyWithoutProcessoridInput;
};
export type ProcessorCreateOrConnectWithoutPlantInfoInput = {
    where: Prisma.ProcessorWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProcessorCreateWithoutPlantInfoInput, Prisma.ProcessorUncheckedCreateWithoutPlantInfoInput>;
};
export type ProcessorUpsertWithoutPlantInfoInput = {
    update: Prisma.XOR<Prisma.ProcessorUpdateWithoutPlantInfoInput, Prisma.ProcessorUncheckedUpdateWithoutPlantInfoInput>;
    create: Prisma.XOR<Prisma.ProcessorCreateWithoutPlantInfoInput, Prisma.ProcessorUncheckedCreateWithoutPlantInfoInput>;
    where?: Prisma.ProcessorWhereInput;
};
export type ProcessorUpdateToOneWithWhereWithoutPlantInfoInput = {
    where?: Prisma.ProcessorWhereInput;
    data: Prisma.XOR<Prisma.ProcessorUpdateWithoutPlantInfoInput, Prisma.ProcessorUncheckedUpdateWithoutPlantInfoInput>;
};
export type ProcessorUpdateWithoutPlantInfoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ProcessorInventoryUpdateManyWithoutProcessoridNestedInput;
};
export type ProcessorUncheckedUpdateWithoutPlantInfoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ProcessorInventoryUncheckedUpdateManyWithoutProcessoridNestedInput;
};
export type ProcessorCreateWithoutInventoryInput = {
    id?: string;
    processorId?: string | null;
    email: string;
    password: string;
    name?: string | null;
    address?: string | null;
    organization?: string | null;
    isVerified?: boolean;
    status?: $Enums.StatusType | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plantInfo?: Prisma.ProcessingPlantInfoCreateNestedOneWithoutProcessoridInput;
};
export type ProcessorUncheckedCreateWithoutInventoryInput = {
    id?: string;
    processorId?: string | null;
    email: string;
    password: string;
    name?: string | null;
    address?: string | null;
    organization?: string | null;
    isVerified?: boolean;
    status?: $Enums.StatusType | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plantInfo?: Prisma.ProcessingPlantInfoUncheckedCreateNestedOneWithoutProcessoridInput;
};
export type ProcessorCreateOrConnectWithoutInventoryInput = {
    where: Prisma.ProcessorWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProcessorCreateWithoutInventoryInput, Prisma.ProcessorUncheckedCreateWithoutInventoryInput>;
};
export type ProcessorUpsertWithoutInventoryInput = {
    update: Prisma.XOR<Prisma.ProcessorUpdateWithoutInventoryInput, Prisma.ProcessorUncheckedUpdateWithoutInventoryInput>;
    create: Prisma.XOR<Prisma.ProcessorCreateWithoutInventoryInput, Prisma.ProcessorUncheckedCreateWithoutInventoryInput>;
    where?: Prisma.ProcessorWhereInput;
};
export type ProcessorUpdateToOneWithWhereWithoutInventoryInput = {
    where?: Prisma.ProcessorWhereInput;
    data: Prisma.XOR<Prisma.ProcessorUpdateWithoutInventoryInput, Prisma.ProcessorUncheckedUpdateWithoutInventoryInput>;
};
export type ProcessorUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    plantInfo?: Prisma.ProcessingPlantInfoUpdateOneWithoutProcessoridNestedInput;
};
export type ProcessorUncheckedUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    plantInfo?: Prisma.ProcessingPlantInfoUncheckedUpdateOneWithoutProcessoridNestedInput;
};
/**
 * Count Type ProcessorCountOutputType
 */
export type ProcessorCountOutputType = {
    inventory: number;
};
export type ProcessorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory?: boolean | ProcessorCountOutputTypeCountInventoryArgs;
};
/**
 * ProcessorCountOutputType without action
 */
export type ProcessorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessorCountOutputType
     */
    select?: Prisma.ProcessorCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProcessorCountOutputType without action
 */
export type ProcessorCountOutputTypeCountInventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProcessorInventoryWhereInput;
};
export type ProcessorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorId?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    address?: boolean;
    organization?: boolean;
    isVerified?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    inventory?: boolean | Prisma.Processor$inventoryArgs<ExtArgs>;
    plantInfo?: boolean | Prisma.Processor$plantInfoArgs<ExtArgs>;
    _count?: boolean | Prisma.ProcessorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["processor"]>;
export type ProcessorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorId?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    address?: boolean;
    organization?: boolean;
    isVerified?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["processor"]>;
export type ProcessorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorId?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    address?: boolean;
    organization?: boolean;
    isVerified?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["processor"]>;
export type ProcessorSelectScalar = {
    id?: boolean;
    processorId?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    address?: boolean;
    organization?: boolean;
    isVerified?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProcessorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "processorId" | "email" | "password" | "name" | "address" | "organization" | "isVerified" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["processor"]>;
export type ProcessorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory?: boolean | Prisma.Processor$inventoryArgs<ExtArgs>;
    plantInfo?: boolean | Prisma.Processor$plantInfoArgs<ExtArgs>;
    _count?: boolean | Prisma.ProcessorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProcessorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProcessorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProcessorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Processor";
    objects: {
        inventory: Prisma.$ProcessorInventoryPayload<ExtArgs>[];
        plantInfo: Prisma.$ProcessingPlantInfoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        processorId: string | null;
        email: string;
        password: string;
        name: string | null;
        address: string | null;
        organization: string | null;
        isVerified: boolean;
        status: $Enums.StatusType | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["processor"]>;
    composites: {};
};
export type ProcessorGetPayload<S extends boolean | null | undefined | ProcessorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProcessorPayload, S>;
export type ProcessorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProcessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProcessorCountAggregateInputType | true;
};
export interface ProcessorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Processor'];
        meta: {
            name: 'Processor';
        };
    };
    /**
     * Find zero or one Processor that matches the filter.
     * @param {ProcessorFindUniqueArgs} args - Arguments to find a Processor
     * @example
     * // Get one Processor
     * const processor = await prisma.processor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessorFindUniqueArgs>(args: Prisma.SelectSubset<T, ProcessorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProcessorClient<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Processor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessorFindUniqueOrThrowArgs} args - Arguments to find a Processor
     * @example
     * // Get one Processor
     * const processor = await prisma.processor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProcessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProcessorClient<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Processor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorFindFirstArgs} args - Arguments to find a Processor
     * @example
     * // Get one Processor
     * const processor = await prisma.processor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessorFindFirstArgs>(args?: Prisma.SelectSubset<T, ProcessorFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProcessorClient<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Processor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorFindFirstOrThrowArgs} args - Arguments to find a Processor
     * @example
     * // Get one Processor
     * const processor = await prisma.processor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProcessorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProcessorClient<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Processors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Processors
     * const processors = await prisma.processor.findMany()
     *
     * // Get first 10 Processors
     * const processors = await prisma.processor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const processorWithIdOnly = await prisma.processor.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProcessorFindManyArgs>(args?: Prisma.SelectSubset<T, ProcessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Processor.
     * @param {ProcessorCreateArgs} args - Arguments to create a Processor.
     * @example
     * // Create one Processor
     * const Processor = await prisma.processor.create({
     *   data: {
     *     // ... data to create a Processor
     *   }
     * })
     *
     */
    create<T extends ProcessorCreateArgs>(args: Prisma.SelectSubset<T, ProcessorCreateArgs<ExtArgs>>): Prisma.Prisma__ProcessorClient<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Processors.
     * @param {ProcessorCreateManyArgs} args - Arguments to create many Processors.
     * @example
     * // Create many Processors
     * const processor = await prisma.processor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProcessorCreateManyArgs>(args?: Prisma.SelectSubset<T, ProcessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Processors and returns the data saved in the database.
     * @param {ProcessorCreateManyAndReturnArgs} args - Arguments to create many Processors.
     * @example
     * // Create many Processors
     * const processor = await prisma.processor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Processors and only return the `id`
     * const processorWithIdOnly = await prisma.processor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProcessorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProcessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Processor.
     * @param {ProcessorDeleteArgs} args - Arguments to delete one Processor.
     * @example
     * // Delete one Processor
     * const Processor = await prisma.processor.delete({
     *   where: {
     *     // ... filter to delete one Processor
     *   }
     * })
     *
     */
    delete<T extends ProcessorDeleteArgs>(args: Prisma.SelectSubset<T, ProcessorDeleteArgs<ExtArgs>>): Prisma.Prisma__ProcessorClient<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Processor.
     * @param {ProcessorUpdateArgs} args - Arguments to update one Processor.
     * @example
     * // Update one Processor
     * const processor = await prisma.processor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProcessorUpdateArgs>(args: Prisma.SelectSubset<T, ProcessorUpdateArgs<ExtArgs>>): Prisma.Prisma__ProcessorClient<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Processors.
     * @param {ProcessorDeleteManyArgs} args - Arguments to filter Processors to delete.
     * @example
     * // Delete a few Processors
     * const { count } = await prisma.processor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProcessorDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProcessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Processors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Processors
     * const processor = await prisma.processor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProcessorUpdateManyArgs>(args: Prisma.SelectSubset<T, ProcessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Processors and returns the data updated in the database.
     * @param {ProcessorUpdateManyAndReturnArgs} args - Arguments to update many Processors.
     * @example
     * // Update many Processors
     * const processor = await prisma.processor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Processors and only return the `id`
     * const processorWithIdOnly = await prisma.processor.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProcessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Processor.
     * @param {ProcessorUpsertArgs} args - Arguments to update or create a Processor.
     * @example
     * // Update or create a Processor
     * const processor = await prisma.processor.upsert({
     *   create: {
     *     // ... data to create a Processor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Processor we want to update
     *   }
     * })
     */
    upsert<T extends ProcessorUpsertArgs>(args: Prisma.SelectSubset<T, ProcessorUpsertArgs<ExtArgs>>): Prisma.Prisma__ProcessorClient<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Processors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorCountArgs} args - Arguments to filter Processors to count.
     * @example
     * // Count the number of Processors
     * const count = await prisma.processor.count({
     *   where: {
     *     // ... the filter for the Processors we want to count
     *   }
     * })
    **/
    count<T extends ProcessorCountArgs>(args?: Prisma.Subset<T, ProcessorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProcessorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Processor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessorAggregateArgs>(args: Prisma.Subset<T, ProcessorAggregateArgs>): Prisma.PrismaPromise<GetProcessorAggregateType<T>>;
    /**
     * Group by Processor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProcessorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProcessorGroupByArgs['orderBy'];
    } : {
        orderBy?: ProcessorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProcessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Processor model
     */
    readonly fields: ProcessorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Processor.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProcessorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory<T extends Prisma.Processor$inventoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Processor$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessorInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    plantInfo<T extends Prisma.Processor$plantInfoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Processor$plantInfoArgs<ExtArgs>>): Prisma.Prisma__ProcessingPlantInfoClient<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Processor model
 */
export interface ProcessorFieldRefs {
    readonly id: Prisma.FieldRef<"Processor", 'String'>;
    readonly processorId: Prisma.FieldRef<"Processor", 'String'>;
    readonly email: Prisma.FieldRef<"Processor", 'String'>;
    readonly password: Prisma.FieldRef<"Processor", 'String'>;
    readonly name: Prisma.FieldRef<"Processor", 'String'>;
    readonly address: Prisma.FieldRef<"Processor", 'String'>;
    readonly organization: Prisma.FieldRef<"Processor", 'String'>;
    readonly isVerified: Prisma.FieldRef<"Processor", 'Boolean'>;
    readonly status: Prisma.FieldRef<"Processor", 'StatusType'>;
    readonly createdAt: Prisma.FieldRef<"Processor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Processor", 'DateTime'>;
}
/**
 * Processor findUnique
 */
export type ProcessorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInclude<ExtArgs> | null;
    /**
     * Filter, which Processor to fetch.
     */
    where: Prisma.ProcessorWhereUniqueInput;
};
/**
 * Processor findUniqueOrThrow
 */
export type ProcessorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInclude<ExtArgs> | null;
    /**
     * Filter, which Processor to fetch.
     */
    where: Prisma.ProcessorWhereUniqueInput;
};
/**
 * Processor findFirst
 */
export type ProcessorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInclude<ExtArgs> | null;
    /**
     * Filter, which Processor to fetch.
     */
    where?: Prisma.ProcessorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Processors to fetch.
     */
    orderBy?: Prisma.ProcessorOrderByWithRelationInput | Prisma.ProcessorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Processors.
     */
    cursor?: Prisma.ProcessorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Processors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Processors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Processors.
     */
    distinct?: Prisma.ProcessorScalarFieldEnum | Prisma.ProcessorScalarFieldEnum[];
};
/**
 * Processor findFirstOrThrow
 */
export type ProcessorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInclude<ExtArgs> | null;
    /**
     * Filter, which Processor to fetch.
     */
    where?: Prisma.ProcessorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Processors to fetch.
     */
    orderBy?: Prisma.ProcessorOrderByWithRelationInput | Prisma.ProcessorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Processors.
     */
    cursor?: Prisma.ProcessorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Processors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Processors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Processors.
     */
    distinct?: Prisma.ProcessorScalarFieldEnum | Prisma.ProcessorScalarFieldEnum[];
};
/**
 * Processor findMany
 */
export type ProcessorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInclude<ExtArgs> | null;
    /**
     * Filter, which Processors to fetch.
     */
    where?: Prisma.ProcessorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Processors to fetch.
     */
    orderBy?: Prisma.ProcessorOrderByWithRelationInput | Prisma.ProcessorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Processors.
     */
    cursor?: Prisma.ProcessorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Processors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Processors.
     */
    skip?: number;
    distinct?: Prisma.ProcessorScalarFieldEnum | Prisma.ProcessorScalarFieldEnum[];
};
/**
 * Processor create
 */
export type ProcessorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Processor.
     */
    data: Prisma.XOR<Prisma.ProcessorCreateInput, Prisma.ProcessorUncheckedCreateInput>;
};
/**
 * Processor createMany
 */
export type ProcessorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Processors.
     */
    data: Prisma.ProcessorCreateManyInput | Prisma.ProcessorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Processor createManyAndReturn
 */
export type ProcessorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * The data used to create many Processors.
     */
    data: Prisma.ProcessorCreateManyInput | Prisma.ProcessorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Processor update
 */
export type ProcessorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Processor.
     */
    data: Prisma.XOR<Prisma.ProcessorUpdateInput, Prisma.ProcessorUncheckedUpdateInput>;
    /**
     * Choose, which Processor to update.
     */
    where: Prisma.ProcessorWhereUniqueInput;
};
/**
 * Processor updateMany
 */
export type ProcessorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Processors.
     */
    data: Prisma.XOR<Prisma.ProcessorUpdateManyMutationInput, Prisma.ProcessorUncheckedUpdateManyInput>;
    /**
     * Filter which Processors to update
     */
    where?: Prisma.ProcessorWhereInput;
    /**
     * Limit how many Processors to update.
     */
    limit?: number;
};
/**
 * Processor updateManyAndReturn
 */
export type ProcessorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * The data used to update Processors.
     */
    data: Prisma.XOR<Prisma.ProcessorUpdateManyMutationInput, Prisma.ProcessorUncheckedUpdateManyInput>;
    /**
     * Filter which Processors to update
     */
    where?: Prisma.ProcessorWhereInput;
    /**
     * Limit how many Processors to update.
     */
    limit?: number;
};
/**
 * Processor upsert
 */
export type ProcessorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Processor to update in case it exists.
     */
    where: Prisma.ProcessorWhereUniqueInput;
    /**
     * In case the Processor found by the `where` argument doesn't exist, create a new Processor with this data.
     */
    create: Prisma.XOR<Prisma.ProcessorCreateInput, Prisma.ProcessorUncheckedCreateInput>;
    /**
     * In case the Processor was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProcessorUpdateInput, Prisma.ProcessorUncheckedUpdateInput>;
};
/**
 * Processor delete
 */
export type ProcessorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInclude<ExtArgs> | null;
    /**
     * Filter which Processor to delete.
     */
    where: Prisma.ProcessorWhereUniqueInput;
};
/**
 * Processor deleteMany
 */
export type ProcessorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Processors to delete
     */
    where?: Prisma.ProcessorWhereInput;
    /**
     * Limit how many Processors to delete.
     */
    limit?: number;
};
/**
 * Processor.inventory
 */
export type Processor$inventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ProcessorInventoryWhereInput;
    orderBy?: Prisma.ProcessorInventoryOrderByWithRelationInput | Prisma.ProcessorInventoryOrderByWithRelationInput[];
    cursor?: Prisma.ProcessorInventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProcessorInventoryScalarFieldEnum | Prisma.ProcessorInventoryScalarFieldEnum[];
};
/**
 * Processor.plantInfo
 */
export type Processor$plantInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingPlantInfo
     */
    select?: Prisma.ProcessingPlantInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingPlantInfo
     */
    omit?: Prisma.ProcessingPlantInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessingPlantInfoInclude<ExtArgs> | null;
    where?: Prisma.ProcessingPlantInfoWhereInput;
};
/**
 * Processor without action
 */
export type ProcessorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processor
     */
    select?: Prisma.ProcessorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Processor
     */
    omit?: Prisma.ProcessorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessorInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Processor.d.ts.map