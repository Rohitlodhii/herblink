import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProcessingPlantInfo
 *
 */
export type ProcessingPlantInfoModel = runtime.Types.Result.DefaultSelection<Prisma.$ProcessingPlantInfoPayload>;
export type AggregateProcessingPlantInfo = {
    _count: ProcessingPlantInfoCountAggregateOutputType | null;
    _min: ProcessingPlantInfoMinAggregateOutputType | null;
    _max: ProcessingPlantInfoMaxAggregateOutputType | null;
};
export type ProcessingPlantInfoMinAggregateOutputType = {
    id: string | null;
    processorID: string | null;
    estb: string | null;
    GSTIN: string | null;
    Storage: string | null;
    herbs: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProcessingPlantInfoMaxAggregateOutputType = {
    id: string | null;
    processorID: string | null;
    estb: string | null;
    GSTIN: string | null;
    Storage: string | null;
    herbs: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProcessingPlantInfoCountAggregateOutputType = {
    id: number;
    processorID: number;
    estb: number;
    GSTIN: number;
    Storage: number;
    herbs: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProcessingPlantInfoMinAggregateInputType = {
    id?: true;
    processorID?: true;
    estb?: true;
    GSTIN?: true;
    Storage?: true;
    herbs?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProcessingPlantInfoMaxAggregateInputType = {
    id?: true;
    processorID?: true;
    estb?: true;
    GSTIN?: true;
    Storage?: true;
    herbs?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProcessingPlantInfoCountAggregateInputType = {
    id?: true;
    processorID?: true;
    estb?: true;
    GSTIN?: true;
    Storage?: true;
    herbs?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProcessingPlantInfoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessingPlantInfo to aggregate.
     */
    where?: Prisma.ProcessingPlantInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessingPlantInfos to fetch.
     */
    orderBy?: Prisma.ProcessingPlantInfoOrderByWithRelationInput | Prisma.ProcessingPlantInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProcessingPlantInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessingPlantInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessingPlantInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProcessingPlantInfos
    **/
    _count?: true | ProcessingPlantInfoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProcessingPlantInfoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProcessingPlantInfoMaxAggregateInputType;
};
export type GetProcessingPlantInfoAggregateType<T extends ProcessingPlantInfoAggregateArgs> = {
    [P in keyof T & keyof AggregateProcessingPlantInfo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProcessingPlantInfo[P]> : Prisma.GetScalarType<T[P], AggregateProcessingPlantInfo[P]>;
};
export type ProcessingPlantInfoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProcessingPlantInfoWhereInput;
    orderBy?: Prisma.ProcessingPlantInfoOrderByWithAggregationInput | Prisma.ProcessingPlantInfoOrderByWithAggregationInput[];
    by: Prisma.ProcessingPlantInfoScalarFieldEnum[] | Prisma.ProcessingPlantInfoScalarFieldEnum;
    having?: Prisma.ProcessingPlantInfoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProcessingPlantInfoCountAggregateInputType | true;
    _min?: ProcessingPlantInfoMinAggregateInputType;
    _max?: ProcessingPlantInfoMaxAggregateInputType;
};
export type ProcessingPlantInfoGroupByOutputType = {
    id: string;
    processorID: string;
    estb: string;
    GSTIN: string;
    Storage: string;
    herbs: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProcessingPlantInfoCountAggregateOutputType | null;
    _min: ProcessingPlantInfoMinAggregateOutputType | null;
    _max: ProcessingPlantInfoMaxAggregateOutputType | null;
};
type GetProcessingPlantInfoGroupByPayload<T extends ProcessingPlantInfoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProcessingPlantInfoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProcessingPlantInfoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProcessingPlantInfoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProcessingPlantInfoGroupByOutputType[P]>;
}>>;
export type ProcessingPlantInfoWhereInput = {
    AND?: Prisma.ProcessingPlantInfoWhereInput | Prisma.ProcessingPlantInfoWhereInput[];
    OR?: Prisma.ProcessingPlantInfoWhereInput[];
    NOT?: Prisma.ProcessingPlantInfoWhereInput | Prisma.ProcessingPlantInfoWhereInput[];
    id?: Prisma.StringFilter<"ProcessingPlantInfo"> | string;
    processorID?: Prisma.StringFilter<"ProcessingPlantInfo"> | string;
    estb?: Prisma.StringFilter<"ProcessingPlantInfo"> | string;
    GSTIN?: Prisma.StringFilter<"ProcessingPlantInfo"> | string;
    Storage?: Prisma.StringFilter<"ProcessingPlantInfo"> | string;
    herbs?: Prisma.StringFilter<"ProcessingPlantInfo"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProcessingPlantInfo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProcessingPlantInfo"> | Date | string;
    processorid?: Prisma.XOR<Prisma.ProcessorScalarRelationFilter, Prisma.ProcessorWhereInput>;
};
export type ProcessingPlantInfoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    processorID?: Prisma.SortOrder;
    estb?: Prisma.SortOrder;
    GSTIN?: Prisma.SortOrder;
    Storage?: Prisma.SortOrder;
    herbs?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    processorid?: Prisma.ProcessorOrderByWithRelationInput;
};
export type ProcessingPlantInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    processorID?: string;
    AND?: Prisma.ProcessingPlantInfoWhereInput | Prisma.ProcessingPlantInfoWhereInput[];
    OR?: Prisma.ProcessingPlantInfoWhereInput[];
    NOT?: Prisma.ProcessingPlantInfoWhereInput | Prisma.ProcessingPlantInfoWhereInput[];
    estb?: Prisma.StringFilter<"ProcessingPlantInfo"> | string;
    GSTIN?: Prisma.StringFilter<"ProcessingPlantInfo"> | string;
    Storage?: Prisma.StringFilter<"ProcessingPlantInfo"> | string;
    herbs?: Prisma.StringFilter<"ProcessingPlantInfo"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProcessingPlantInfo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProcessingPlantInfo"> | Date | string;
    processorid?: Prisma.XOR<Prisma.ProcessorScalarRelationFilter, Prisma.ProcessorWhereInput>;
}, "id" | "processorID">;
export type ProcessingPlantInfoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    processorID?: Prisma.SortOrder;
    estb?: Prisma.SortOrder;
    GSTIN?: Prisma.SortOrder;
    Storage?: Prisma.SortOrder;
    herbs?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProcessingPlantInfoCountOrderByAggregateInput;
    _max?: Prisma.ProcessingPlantInfoMaxOrderByAggregateInput;
    _min?: Prisma.ProcessingPlantInfoMinOrderByAggregateInput;
};
export type ProcessingPlantInfoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProcessingPlantInfoScalarWhereWithAggregatesInput | Prisma.ProcessingPlantInfoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProcessingPlantInfoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProcessingPlantInfoScalarWhereWithAggregatesInput | Prisma.ProcessingPlantInfoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProcessingPlantInfo"> | string;
    processorID?: Prisma.StringWithAggregatesFilter<"ProcessingPlantInfo"> | string;
    estb?: Prisma.StringWithAggregatesFilter<"ProcessingPlantInfo"> | string;
    GSTIN?: Prisma.StringWithAggregatesFilter<"ProcessingPlantInfo"> | string;
    Storage?: Prisma.StringWithAggregatesFilter<"ProcessingPlantInfo"> | string;
    herbs?: Prisma.StringWithAggregatesFilter<"ProcessingPlantInfo"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProcessingPlantInfo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProcessingPlantInfo"> | Date | string;
};
export type ProcessingPlantInfoCreateInput = {
    id?: string;
    estb: string;
    GSTIN: string;
    Storage: string;
    herbs: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    processorid: Prisma.ProcessorCreateNestedOneWithoutPlantInfoInput;
};
export type ProcessingPlantInfoUncheckedCreateInput = {
    id?: string;
    processorID: string;
    estb: string;
    GSTIN: string;
    Storage: string;
    herbs: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessingPlantInfoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estb?: Prisma.StringFieldUpdateOperationsInput | string;
    GSTIN?: Prisma.StringFieldUpdateOperationsInput | string;
    Storage?: Prisma.StringFieldUpdateOperationsInput | string;
    herbs?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    processorid?: Prisma.ProcessorUpdateOneRequiredWithoutPlantInfoNestedInput;
};
export type ProcessingPlantInfoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorID?: Prisma.StringFieldUpdateOperationsInput | string;
    estb?: Prisma.StringFieldUpdateOperationsInput | string;
    GSTIN?: Prisma.StringFieldUpdateOperationsInput | string;
    Storage?: Prisma.StringFieldUpdateOperationsInput | string;
    herbs?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessingPlantInfoCreateManyInput = {
    id?: string;
    processorID: string;
    estb: string;
    GSTIN: string;
    Storage: string;
    herbs: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessingPlantInfoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estb?: Prisma.StringFieldUpdateOperationsInput | string;
    GSTIN?: Prisma.StringFieldUpdateOperationsInput | string;
    Storage?: Prisma.StringFieldUpdateOperationsInput | string;
    herbs?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessingPlantInfoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    processorID?: Prisma.StringFieldUpdateOperationsInput | string;
    estb?: Prisma.StringFieldUpdateOperationsInput | string;
    GSTIN?: Prisma.StringFieldUpdateOperationsInput | string;
    Storage?: Prisma.StringFieldUpdateOperationsInput | string;
    herbs?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessingPlantInfoNullableScalarRelationFilter = {
    is?: Prisma.ProcessingPlantInfoWhereInput | null;
    isNot?: Prisma.ProcessingPlantInfoWhereInput | null;
};
export type ProcessingPlantInfoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorID?: Prisma.SortOrder;
    estb?: Prisma.SortOrder;
    GSTIN?: Prisma.SortOrder;
    Storage?: Prisma.SortOrder;
    herbs?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessingPlantInfoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorID?: Prisma.SortOrder;
    estb?: Prisma.SortOrder;
    GSTIN?: Prisma.SortOrder;
    Storage?: Prisma.SortOrder;
    herbs?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessingPlantInfoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    processorID?: Prisma.SortOrder;
    estb?: Prisma.SortOrder;
    GSTIN?: Prisma.SortOrder;
    Storage?: Prisma.SortOrder;
    herbs?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProcessingPlantInfoCreateNestedOneWithoutProcessoridInput = {
    create?: Prisma.XOR<Prisma.ProcessingPlantInfoCreateWithoutProcessoridInput, Prisma.ProcessingPlantInfoUncheckedCreateWithoutProcessoridInput>;
    connectOrCreate?: Prisma.ProcessingPlantInfoCreateOrConnectWithoutProcessoridInput;
    connect?: Prisma.ProcessingPlantInfoWhereUniqueInput;
};
export type ProcessingPlantInfoUncheckedCreateNestedOneWithoutProcessoridInput = {
    create?: Prisma.XOR<Prisma.ProcessingPlantInfoCreateWithoutProcessoridInput, Prisma.ProcessingPlantInfoUncheckedCreateWithoutProcessoridInput>;
    connectOrCreate?: Prisma.ProcessingPlantInfoCreateOrConnectWithoutProcessoridInput;
    connect?: Prisma.ProcessingPlantInfoWhereUniqueInput;
};
export type ProcessingPlantInfoUpdateOneWithoutProcessoridNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessingPlantInfoCreateWithoutProcessoridInput, Prisma.ProcessingPlantInfoUncheckedCreateWithoutProcessoridInput>;
    connectOrCreate?: Prisma.ProcessingPlantInfoCreateOrConnectWithoutProcessoridInput;
    upsert?: Prisma.ProcessingPlantInfoUpsertWithoutProcessoridInput;
    disconnect?: Prisma.ProcessingPlantInfoWhereInput | boolean;
    delete?: Prisma.ProcessingPlantInfoWhereInput | boolean;
    connect?: Prisma.ProcessingPlantInfoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProcessingPlantInfoUpdateToOneWithWhereWithoutProcessoridInput, Prisma.ProcessingPlantInfoUpdateWithoutProcessoridInput>, Prisma.ProcessingPlantInfoUncheckedUpdateWithoutProcessoridInput>;
};
export type ProcessingPlantInfoUncheckedUpdateOneWithoutProcessoridNestedInput = {
    create?: Prisma.XOR<Prisma.ProcessingPlantInfoCreateWithoutProcessoridInput, Prisma.ProcessingPlantInfoUncheckedCreateWithoutProcessoridInput>;
    connectOrCreate?: Prisma.ProcessingPlantInfoCreateOrConnectWithoutProcessoridInput;
    upsert?: Prisma.ProcessingPlantInfoUpsertWithoutProcessoridInput;
    disconnect?: Prisma.ProcessingPlantInfoWhereInput | boolean;
    delete?: Prisma.ProcessingPlantInfoWhereInput | boolean;
    connect?: Prisma.ProcessingPlantInfoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProcessingPlantInfoUpdateToOneWithWhereWithoutProcessoridInput, Prisma.ProcessingPlantInfoUpdateWithoutProcessoridInput>, Prisma.ProcessingPlantInfoUncheckedUpdateWithoutProcessoridInput>;
};
export type ProcessingPlantInfoCreateWithoutProcessoridInput = {
    id?: string;
    estb: string;
    GSTIN: string;
    Storage: string;
    herbs: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessingPlantInfoUncheckedCreateWithoutProcessoridInput = {
    id?: string;
    estb: string;
    GSTIN: string;
    Storage: string;
    herbs: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProcessingPlantInfoCreateOrConnectWithoutProcessoridInput = {
    where: Prisma.ProcessingPlantInfoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProcessingPlantInfoCreateWithoutProcessoridInput, Prisma.ProcessingPlantInfoUncheckedCreateWithoutProcessoridInput>;
};
export type ProcessingPlantInfoUpsertWithoutProcessoridInput = {
    update: Prisma.XOR<Prisma.ProcessingPlantInfoUpdateWithoutProcessoridInput, Prisma.ProcessingPlantInfoUncheckedUpdateWithoutProcessoridInput>;
    create: Prisma.XOR<Prisma.ProcessingPlantInfoCreateWithoutProcessoridInput, Prisma.ProcessingPlantInfoUncheckedCreateWithoutProcessoridInput>;
    where?: Prisma.ProcessingPlantInfoWhereInput;
};
export type ProcessingPlantInfoUpdateToOneWithWhereWithoutProcessoridInput = {
    where?: Prisma.ProcessingPlantInfoWhereInput;
    data: Prisma.XOR<Prisma.ProcessingPlantInfoUpdateWithoutProcessoridInput, Prisma.ProcessingPlantInfoUncheckedUpdateWithoutProcessoridInput>;
};
export type ProcessingPlantInfoUpdateWithoutProcessoridInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estb?: Prisma.StringFieldUpdateOperationsInput | string;
    GSTIN?: Prisma.StringFieldUpdateOperationsInput | string;
    Storage?: Prisma.StringFieldUpdateOperationsInput | string;
    herbs?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessingPlantInfoUncheckedUpdateWithoutProcessoridInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estb?: Prisma.StringFieldUpdateOperationsInput | string;
    GSTIN?: Prisma.StringFieldUpdateOperationsInput | string;
    Storage?: Prisma.StringFieldUpdateOperationsInput | string;
    herbs?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProcessingPlantInfoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorID?: boolean;
    estb?: boolean;
    GSTIN?: boolean;
    Storage?: boolean;
    herbs?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["processingPlantInfo"]>;
export type ProcessingPlantInfoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorID?: boolean;
    estb?: boolean;
    GSTIN?: boolean;
    Storage?: boolean;
    herbs?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["processingPlantInfo"]>;
export type ProcessingPlantInfoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    processorID?: boolean;
    estb?: boolean;
    GSTIN?: boolean;
    Storage?: boolean;
    herbs?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["processingPlantInfo"]>;
export type ProcessingPlantInfoSelectScalar = {
    id?: boolean;
    processorID?: boolean;
    estb?: boolean;
    GSTIN?: boolean;
    Storage?: boolean;
    herbs?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProcessingPlantInfoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "processorID" | "estb" | "GSTIN" | "Storage" | "herbs" | "createdAt" | "updatedAt", ExtArgs["result"]["processingPlantInfo"]>;
export type ProcessingPlantInfoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
};
export type ProcessingPlantInfoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
};
export type ProcessingPlantInfoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    processorid?: boolean | Prisma.ProcessorDefaultArgs<ExtArgs>;
};
export type $ProcessingPlantInfoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProcessingPlantInfo";
    objects: {
        processorid: Prisma.$ProcessorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        processorID: string;
        estb: string;
        GSTIN: string;
        Storage: string;
        herbs: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["processingPlantInfo"]>;
    composites: {};
};
export type ProcessingPlantInfoGetPayload<S extends boolean | null | undefined | ProcessingPlantInfoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload, S>;
export type ProcessingPlantInfoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProcessingPlantInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProcessingPlantInfoCountAggregateInputType | true;
};
export interface ProcessingPlantInfoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProcessingPlantInfo'];
        meta: {
            name: 'ProcessingPlantInfo';
        };
    };
    /**
     * Find zero or one ProcessingPlantInfo that matches the filter.
     * @param {ProcessingPlantInfoFindUniqueArgs} args - Arguments to find a ProcessingPlantInfo
     * @example
     * // Get one ProcessingPlantInfo
     * const processingPlantInfo = await prisma.processingPlantInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessingPlantInfoFindUniqueArgs>(args: Prisma.SelectSubset<T, ProcessingPlantInfoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProcessingPlantInfoClient<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProcessingPlantInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessingPlantInfoFindUniqueOrThrowArgs} args - Arguments to find a ProcessingPlantInfo
     * @example
     * // Get one ProcessingPlantInfo
     * const processingPlantInfo = await prisma.processingPlantInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessingPlantInfoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProcessingPlantInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProcessingPlantInfoClient<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProcessingPlantInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingPlantInfoFindFirstArgs} args - Arguments to find a ProcessingPlantInfo
     * @example
     * // Get one ProcessingPlantInfo
     * const processingPlantInfo = await prisma.processingPlantInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessingPlantInfoFindFirstArgs>(args?: Prisma.SelectSubset<T, ProcessingPlantInfoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProcessingPlantInfoClient<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProcessingPlantInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingPlantInfoFindFirstOrThrowArgs} args - Arguments to find a ProcessingPlantInfo
     * @example
     * // Get one ProcessingPlantInfo
     * const processingPlantInfo = await prisma.processingPlantInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessingPlantInfoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProcessingPlantInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProcessingPlantInfoClient<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProcessingPlantInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingPlantInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessingPlantInfos
     * const processingPlantInfos = await prisma.processingPlantInfo.findMany()
     *
     * // Get first 10 ProcessingPlantInfos
     * const processingPlantInfos = await prisma.processingPlantInfo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const processingPlantInfoWithIdOnly = await prisma.processingPlantInfo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProcessingPlantInfoFindManyArgs>(args?: Prisma.SelectSubset<T, ProcessingPlantInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProcessingPlantInfo.
     * @param {ProcessingPlantInfoCreateArgs} args - Arguments to create a ProcessingPlantInfo.
     * @example
     * // Create one ProcessingPlantInfo
     * const ProcessingPlantInfo = await prisma.processingPlantInfo.create({
     *   data: {
     *     // ... data to create a ProcessingPlantInfo
     *   }
     * })
     *
     */
    create<T extends ProcessingPlantInfoCreateArgs>(args: Prisma.SelectSubset<T, ProcessingPlantInfoCreateArgs<ExtArgs>>): Prisma.Prisma__ProcessingPlantInfoClient<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProcessingPlantInfos.
     * @param {ProcessingPlantInfoCreateManyArgs} args - Arguments to create many ProcessingPlantInfos.
     * @example
     * // Create many ProcessingPlantInfos
     * const processingPlantInfo = await prisma.processingPlantInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProcessingPlantInfoCreateManyArgs>(args?: Prisma.SelectSubset<T, ProcessingPlantInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProcessingPlantInfos and returns the data saved in the database.
     * @param {ProcessingPlantInfoCreateManyAndReturnArgs} args - Arguments to create many ProcessingPlantInfos.
     * @example
     * // Create many ProcessingPlantInfos
     * const processingPlantInfo = await prisma.processingPlantInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProcessingPlantInfos and only return the `id`
     * const processingPlantInfoWithIdOnly = await prisma.processingPlantInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProcessingPlantInfoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProcessingPlantInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProcessingPlantInfo.
     * @param {ProcessingPlantInfoDeleteArgs} args - Arguments to delete one ProcessingPlantInfo.
     * @example
     * // Delete one ProcessingPlantInfo
     * const ProcessingPlantInfo = await prisma.processingPlantInfo.delete({
     *   where: {
     *     // ... filter to delete one ProcessingPlantInfo
     *   }
     * })
     *
     */
    delete<T extends ProcessingPlantInfoDeleteArgs>(args: Prisma.SelectSubset<T, ProcessingPlantInfoDeleteArgs<ExtArgs>>): Prisma.Prisma__ProcessingPlantInfoClient<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProcessingPlantInfo.
     * @param {ProcessingPlantInfoUpdateArgs} args - Arguments to update one ProcessingPlantInfo.
     * @example
     * // Update one ProcessingPlantInfo
     * const processingPlantInfo = await prisma.processingPlantInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProcessingPlantInfoUpdateArgs>(args: Prisma.SelectSubset<T, ProcessingPlantInfoUpdateArgs<ExtArgs>>): Prisma.Prisma__ProcessingPlantInfoClient<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProcessingPlantInfos.
     * @param {ProcessingPlantInfoDeleteManyArgs} args - Arguments to filter ProcessingPlantInfos to delete.
     * @example
     * // Delete a few ProcessingPlantInfos
     * const { count } = await prisma.processingPlantInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProcessingPlantInfoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProcessingPlantInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProcessingPlantInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingPlantInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessingPlantInfos
     * const processingPlantInfo = await prisma.processingPlantInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProcessingPlantInfoUpdateManyArgs>(args: Prisma.SelectSubset<T, ProcessingPlantInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProcessingPlantInfos and returns the data updated in the database.
     * @param {ProcessingPlantInfoUpdateManyAndReturnArgs} args - Arguments to update many ProcessingPlantInfos.
     * @example
     * // Update many ProcessingPlantInfos
     * const processingPlantInfo = await prisma.processingPlantInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProcessingPlantInfos and only return the `id`
     * const processingPlantInfoWithIdOnly = await prisma.processingPlantInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessingPlantInfoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProcessingPlantInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProcessingPlantInfo.
     * @param {ProcessingPlantInfoUpsertArgs} args - Arguments to update or create a ProcessingPlantInfo.
     * @example
     * // Update or create a ProcessingPlantInfo
     * const processingPlantInfo = await prisma.processingPlantInfo.upsert({
     *   create: {
     *     // ... data to create a ProcessingPlantInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessingPlantInfo we want to update
     *   }
     * })
     */
    upsert<T extends ProcessingPlantInfoUpsertArgs>(args: Prisma.SelectSubset<T, ProcessingPlantInfoUpsertArgs<ExtArgs>>): Prisma.Prisma__ProcessingPlantInfoClient<runtime.Types.Result.GetResult<Prisma.$ProcessingPlantInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProcessingPlantInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingPlantInfoCountArgs} args - Arguments to filter ProcessingPlantInfos to count.
     * @example
     * // Count the number of ProcessingPlantInfos
     * const count = await prisma.processingPlantInfo.count({
     *   where: {
     *     // ... the filter for the ProcessingPlantInfos we want to count
     *   }
     * })
    **/
    count<T extends ProcessingPlantInfoCountArgs>(args?: Prisma.Subset<T, ProcessingPlantInfoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProcessingPlantInfoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProcessingPlantInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingPlantInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessingPlantInfoAggregateArgs>(args: Prisma.Subset<T, ProcessingPlantInfoAggregateArgs>): Prisma.PrismaPromise<GetProcessingPlantInfoAggregateType<T>>;
    /**
     * Group by ProcessingPlantInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingPlantInfoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProcessingPlantInfoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProcessingPlantInfoGroupByArgs['orderBy'];
    } : {
        orderBy?: ProcessingPlantInfoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProcessingPlantInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessingPlantInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProcessingPlantInfo model
     */
    readonly fields: ProcessingPlantInfoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProcessingPlantInfo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProcessingPlantInfoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    processorid<T extends Prisma.ProcessorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProcessorDefaultArgs<ExtArgs>>): Prisma.Prisma__ProcessorClient<runtime.Types.Result.GetResult<Prisma.$ProcessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProcessingPlantInfo model
 */
export interface ProcessingPlantInfoFieldRefs {
    readonly id: Prisma.FieldRef<"ProcessingPlantInfo", 'String'>;
    readonly processorID: Prisma.FieldRef<"ProcessingPlantInfo", 'String'>;
    readonly estb: Prisma.FieldRef<"ProcessingPlantInfo", 'String'>;
    readonly GSTIN: Prisma.FieldRef<"ProcessingPlantInfo", 'String'>;
    readonly Storage: Prisma.FieldRef<"ProcessingPlantInfo", 'String'>;
    readonly herbs: Prisma.FieldRef<"ProcessingPlantInfo", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProcessingPlantInfo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProcessingPlantInfo", 'DateTime'>;
}
/**
 * ProcessingPlantInfo findUnique
 */
export type ProcessingPlantInfoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProcessingPlantInfo to fetch.
     */
    where: Prisma.ProcessingPlantInfoWhereUniqueInput;
};
/**
 * ProcessingPlantInfo findUniqueOrThrow
 */
export type ProcessingPlantInfoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProcessingPlantInfo to fetch.
     */
    where: Prisma.ProcessingPlantInfoWhereUniqueInput;
};
/**
 * ProcessingPlantInfo findFirst
 */
export type ProcessingPlantInfoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProcessingPlantInfo to fetch.
     */
    where?: Prisma.ProcessingPlantInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessingPlantInfos to fetch.
     */
    orderBy?: Prisma.ProcessingPlantInfoOrderByWithRelationInput | Prisma.ProcessingPlantInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProcessingPlantInfos.
     */
    cursor?: Prisma.ProcessingPlantInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessingPlantInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessingPlantInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProcessingPlantInfos.
     */
    distinct?: Prisma.ProcessingPlantInfoScalarFieldEnum | Prisma.ProcessingPlantInfoScalarFieldEnum[];
};
/**
 * ProcessingPlantInfo findFirstOrThrow
 */
export type ProcessingPlantInfoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProcessingPlantInfo to fetch.
     */
    where?: Prisma.ProcessingPlantInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessingPlantInfos to fetch.
     */
    orderBy?: Prisma.ProcessingPlantInfoOrderByWithRelationInput | Prisma.ProcessingPlantInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProcessingPlantInfos.
     */
    cursor?: Prisma.ProcessingPlantInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessingPlantInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessingPlantInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProcessingPlantInfos.
     */
    distinct?: Prisma.ProcessingPlantInfoScalarFieldEnum | Prisma.ProcessingPlantInfoScalarFieldEnum[];
};
/**
 * ProcessingPlantInfo findMany
 */
export type ProcessingPlantInfoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProcessingPlantInfos to fetch.
     */
    where?: Prisma.ProcessingPlantInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessingPlantInfos to fetch.
     */
    orderBy?: Prisma.ProcessingPlantInfoOrderByWithRelationInput | Prisma.ProcessingPlantInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProcessingPlantInfos.
     */
    cursor?: Prisma.ProcessingPlantInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessingPlantInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessingPlantInfos.
     */
    skip?: number;
    distinct?: Prisma.ProcessingPlantInfoScalarFieldEnum | Prisma.ProcessingPlantInfoScalarFieldEnum[];
};
/**
 * ProcessingPlantInfo create
 */
export type ProcessingPlantInfoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProcessingPlantInfo.
     */
    data: Prisma.XOR<Prisma.ProcessingPlantInfoCreateInput, Prisma.ProcessingPlantInfoUncheckedCreateInput>;
};
/**
 * ProcessingPlantInfo createMany
 */
export type ProcessingPlantInfoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessingPlantInfos.
     */
    data: Prisma.ProcessingPlantInfoCreateManyInput | Prisma.ProcessingPlantInfoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProcessingPlantInfo createManyAndReturn
 */
export type ProcessingPlantInfoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingPlantInfo
     */
    select?: Prisma.ProcessingPlantInfoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingPlantInfo
     */
    omit?: Prisma.ProcessingPlantInfoOmit<ExtArgs> | null;
    /**
     * The data used to create many ProcessingPlantInfos.
     */
    data: Prisma.ProcessingPlantInfoCreateManyInput | Prisma.ProcessingPlantInfoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessingPlantInfoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProcessingPlantInfo update
 */
export type ProcessingPlantInfoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProcessingPlantInfo.
     */
    data: Prisma.XOR<Prisma.ProcessingPlantInfoUpdateInput, Prisma.ProcessingPlantInfoUncheckedUpdateInput>;
    /**
     * Choose, which ProcessingPlantInfo to update.
     */
    where: Prisma.ProcessingPlantInfoWhereUniqueInput;
};
/**
 * ProcessingPlantInfo updateMany
 */
export type ProcessingPlantInfoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessingPlantInfos.
     */
    data: Prisma.XOR<Prisma.ProcessingPlantInfoUpdateManyMutationInput, Prisma.ProcessingPlantInfoUncheckedUpdateManyInput>;
    /**
     * Filter which ProcessingPlantInfos to update
     */
    where?: Prisma.ProcessingPlantInfoWhereInput;
    /**
     * Limit how many ProcessingPlantInfos to update.
     */
    limit?: number;
};
/**
 * ProcessingPlantInfo updateManyAndReturn
 */
export type ProcessingPlantInfoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingPlantInfo
     */
    select?: Prisma.ProcessingPlantInfoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingPlantInfo
     */
    omit?: Prisma.ProcessingPlantInfoOmit<ExtArgs> | null;
    /**
     * The data used to update ProcessingPlantInfos.
     */
    data: Prisma.XOR<Prisma.ProcessingPlantInfoUpdateManyMutationInput, Prisma.ProcessingPlantInfoUncheckedUpdateManyInput>;
    /**
     * Filter which ProcessingPlantInfos to update
     */
    where?: Prisma.ProcessingPlantInfoWhereInput;
    /**
     * Limit how many ProcessingPlantInfos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProcessingPlantInfoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProcessingPlantInfo upsert
 */
export type ProcessingPlantInfoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProcessingPlantInfo to update in case it exists.
     */
    where: Prisma.ProcessingPlantInfoWhereUniqueInput;
    /**
     * In case the ProcessingPlantInfo found by the `where` argument doesn't exist, create a new ProcessingPlantInfo with this data.
     */
    create: Prisma.XOR<Prisma.ProcessingPlantInfoCreateInput, Prisma.ProcessingPlantInfoUncheckedCreateInput>;
    /**
     * In case the ProcessingPlantInfo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProcessingPlantInfoUpdateInput, Prisma.ProcessingPlantInfoUncheckedUpdateInput>;
};
/**
 * ProcessingPlantInfo delete
 */
export type ProcessingPlantInfoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProcessingPlantInfo to delete.
     */
    where: Prisma.ProcessingPlantInfoWhereUniqueInput;
};
/**
 * ProcessingPlantInfo deleteMany
 */
export type ProcessingPlantInfoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessingPlantInfos to delete
     */
    where?: Prisma.ProcessingPlantInfoWhereInput;
    /**
     * Limit how many ProcessingPlantInfos to delete.
     */
    limit?: number;
};
/**
 * ProcessingPlantInfo without action
 */
export type ProcessingPlantInfoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ProcessingPlantInfo.d.ts.map