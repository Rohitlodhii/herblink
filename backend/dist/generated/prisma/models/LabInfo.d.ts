import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LabInfo
 *
 */
export type LabInfoModel = runtime.Types.Result.DefaultSelection<Prisma.$LabInfoPayload>;
export type AggregateLabInfo = {
    _count: LabInfoCountAggregateOutputType | null;
    _min: LabInfoMinAggregateOutputType | null;
    _max: LabInfoMaxAggregateOutputType | null;
};
export type LabInfoMinAggregateOutputType = {
    id: string | null;
    labID: string | null;
    address: string | null;
    gstin: string | null;
    type: $Enums.orgType | null;
};
export type LabInfoMaxAggregateOutputType = {
    id: string | null;
    labID: string | null;
    address: string | null;
    gstin: string | null;
    type: $Enums.orgType | null;
};
export type LabInfoCountAggregateOutputType = {
    id: number;
    labID: number;
    address: number;
    gstin: number;
    type: number;
    _all: number;
};
export type LabInfoMinAggregateInputType = {
    id?: true;
    labID?: true;
    address?: true;
    gstin?: true;
    type?: true;
};
export type LabInfoMaxAggregateInputType = {
    id?: true;
    labID?: true;
    address?: true;
    gstin?: true;
    type?: true;
};
export type LabInfoCountAggregateInputType = {
    id?: true;
    labID?: true;
    address?: true;
    gstin?: true;
    type?: true;
    _all?: true;
};
export type LabInfoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LabInfo to aggregate.
     */
    where?: Prisma.LabInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabInfos to fetch.
     */
    orderBy?: Prisma.LabInfoOrderByWithRelationInput | Prisma.LabInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LabInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LabInfos
    **/
    _count?: true | LabInfoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LabInfoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LabInfoMaxAggregateInputType;
};
export type GetLabInfoAggregateType<T extends LabInfoAggregateArgs> = {
    [P in keyof T & keyof AggregateLabInfo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLabInfo[P]> : Prisma.GetScalarType<T[P], AggregateLabInfo[P]>;
};
export type LabInfoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabInfoWhereInput;
    orderBy?: Prisma.LabInfoOrderByWithAggregationInput | Prisma.LabInfoOrderByWithAggregationInput[];
    by: Prisma.LabInfoScalarFieldEnum[] | Prisma.LabInfoScalarFieldEnum;
    having?: Prisma.LabInfoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LabInfoCountAggregateInputType | true;
    _min?: LabInfoMinAggregateInputType;
    _max?: LabInfoMaxAggregateInputType;
};
export type LabInfoGroupByOutputType = {
    id: string;
    labID: string;
    address: string | null;
    gstin: string | null;
    type: $Enums.orgType | null;
    _count: LabInfoCountAggregateOutputType | null;
    _min: LabInfoMinAggregateOutputType | null;
    _max: LabInfoMaxAggregateOutputType | null;
};
type GetLabInfoGroupByPayload<T extends LabInfoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LabInfoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LabInfoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LabInfoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LabInfoGroupByOutputType[P]>;
}>>;
export type LabInfoWhereInput = {
    AND?: Prisma.LabInfoWhereInput | Prisma.LabInfoWhereInput[];
    OR?: Prisma.LabInfoWhereInput[];
    NOT?: Prisma.LabInfoWhereInput | Prisma.LabInfoWhereInput[];
    id?: Prisma.StringFilter<"LabInfo"> | string;
    labID?: Prisma.StringFilter<"LabInfo"> | string;
    address?: Prisma.StringNullableFilter<"LabInfo"> | string | null;
    gstin?: Prisma.StringNullableFilter<"LabInfo"> | string | null;
    type?: Prisma.EnumorgTypeNullableFilter<"LabInfo"> | $Enums.orgType | null;
    labId?: Prisma.XOR<Prisma.LabScalarRelationFilter, Prisma.LabWhereInput>;
};
export type LabInfoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    labID?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    gstin?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    labId?: Prisma.LabOrderByWithRelationInput;
};
export type LabInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    labID?: string;
    AND?: Prisma.LabInfoWhereInput | Prisma.LabInfoWhereInput[];
    OR?: Prisma.LabInfoWhereInput[];
    NOT?: Prisma.LabInfoWhereInput | Prisma.LabInfoWhereInput[];
    address?: Prisma.StringNullableFilter<"LabInfo"> | string | null;
    gstin?: Prisma.StringNullableFilter<"LabInfo"> | string | null;
    type?: Prisma.EnumorgTypeNullableFilter<"LabInfo"> | $Enums.orgType | null;
    labId?: Prisma.XOR<Prisma.LabScalarRelationFilter, Prisma.LabWhereInput>;
}, "id" | "labID">;
export type LabInfoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    labID?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    gstin?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.LabInfoCountOrderByAggregateInput;
    _max?: Prisma.LabInfoMaxOrderByAggregateInput;
    _min?: Prisma.LabInfoMinOrderByAggregateInput;
};
export type LabInfoScalarWhereWithAggregatesInput = {
    AND?: Prisma.LabInfoScalarWhereWithAggregatesInput | Prisma.LabInfoScalarWhereWithAggregatesInput[];
    OR?: Prisma.LabInfoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LabInfoScalarWhereWithAggregatesInput | Prisma.LabInfoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LabInfo"> | string;
    labID?: Prisma.StringWithAggregatesFilter<"LabInfo"> | string;
    address?: Prisma.StringNullableWithAggregatesFilter<"LabInfo"> | string | null;
    gstin?: Prisma.StringNullableWithAggregatesFilter<"LabInfo"> | string | null;
    type?: Prisma.EnumorgTypeNullableWithAggregatesFilter<"LabInfo"> | $Enums.orgType | null;
};
export type LabInfoCreateInput = {
    id?: string;
    address?: string | null;
    gstin?: string | null;
    type?: $Enums.orgType | null;
    labId: Prisma.LabCreateNestedOneWithoutLabinfoInput;
};
export type LabInfoUncheckedCreateInput = {
    id?: string;
    labID: string;
    address?: string | null;
    gstin?: string | null;
    type?: $Enums.orgType | null;
};
export type LabInfoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gstin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumorgTypeFieldUpdateOperationsInput | $Enums.orgType | null;
    labId?: Prisma.LabUpdateOneRequiredWithoutLabinfoNestedInput;
};
export type LabInfoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    labID?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gstin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumorgTypeFieldUpdateOperationsInput | $Enums.orgType | null;
};
export type LabInfoCreateManyInput = {
    id?: string;
    labID: string;
    address?: string | null;
    gstin?: string | null;
    type?: $Enums.orgType | null;
};
export type LabInfoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gstin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumorgTypeFieldUpdateOperationsInput | $Enums.orgType | null;
};
export type LabInfoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    labID?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gstin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumorgTypeFieldUpdateOperationsInput | $Enums.orgType | null;
};
export type LabInfoNullableScalarRelationFilter = {
    is?: Prisma.LabInfoWhereInput | null;
    isNot?: Prisma.LabInfoWhereInput | null;
};
export type LabInfoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    labID?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    gstin?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type LabInfoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    labID?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    gstin?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type LabInfoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    labID?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    gstin?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type LabInfoCreateNestedOneWithoutLabIdInput = {
    create?: Prisma.XOR<Prisma.LabInfoCreateWithoutLabIdInput, Prisma.LabInfoUncheckedCreateWithoutLabIdInput>;
    connectOrCreate?: Prisma.LabInfoCreateOrConnectWithoutLabIdInput;
    connect?: Prisma.LabInfoWhereUniqueInput;
};
export type LabInfoUncheckedCreateNestedOneWithoutLabIdInput = {
    create?: Prisma.XOR<Prisma.LabInfoCreateWithoutLabIdInput, Prisma.LabInfoUncheckedCreateWithoutLabIdInput>;
    connectOrCreate?: Prisma.LabInfoCreateOrConnectWithoutLabIdInput;
    connect?: Prisma.LabInfoWhereUniqueInput;
};
export type LabInfoUpdateOneWithoutLabIdNestedInput = {
    create?: Prisma.XOR<Prisma.LabInfoCreateWithoutLabIdInput, Prisma.LabInfoUncheckedCreateWithoutLabIdInput>;
    connectOrCreate?: Prisma.LabInfoCreateOrConnectWithoutLabIdInput;
    upsert?: Prisma.LabInfoUpsertWithoutLabIdInput;
    disconnect?: Prisma.LabInfoWhereInput | boolean;
    delete?: Prisma.LabInfoWhereInput | boolean;
    connect?: Prisma.LabInfoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LabInfoUpdateToOneWithWhereWithoutLabIdInput, Prisma.LabInfoUpdateWithoutLabIdInput>, Prisma.LabInfoUncheckedUpdateWithoutLabIdInput>;
};
export type LabInfoUncheckedUpdateOneWithoutLabIdNestedInput = {
    create?: Prisma.XOR<Prisma.LabInfoCreateWithoutLabIdInput, Prisma.LabInfoUncheckedCreateWithoutLabIdInput>;
    connectOrCreate?: Prisma.LabInfoCreateOrConnectWithoutLabIdInput;
    upsert?: Prisma.LabInfoUpsertWithoutLabIdInput;
    disconnect?: Prisma.LabInfoWhereInput | boolean;
    delete?: Prisma.LabInfoWhereInput | boolean;
    connect?: Prisma.LabInfoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LabInfoUpdateToOneWithWhereWithoutLabIdInput, Prisma.LabInfoUpdateWithoutLabIdInput>, Prisma.LabInfoUncheckedUpdateWithoutLabIdInput>;
};
export type NullableEnumorgTypeFieldUpdateOperationsInput = {
    set?: $Enums.orgType | null;
};
export type LabInfoCreateWithoutLabIdInput = {
    id?: string;
    address?: string | null;
    gstin?: string | null;
    type?: $Enums.orgType | null;
};
export type LabInfoUncheckedCreateWithoutLabIdInput = {
    id?: string;
    address?: string | null;
    gstin?: string | null;
    type?: $Enums.orgType | null;
};
export type LabInfoCreateOrConnectWithoutLabIdInput = {
    where: Prisma.LabInfoWhereUniqueInput;
    create: Prisma.XOR<Prisma.LabInfoCreateWithoutLabIdInput, Prisma.LabInfoUncheckedCreateWithoutLabIdInput>;
};
export type LabInfoUpsertWithoutLabIdInput = {
    update: Prisma.XOR<Prisma.LabInfoUpdateWithoutLabIdInput, Prisma.LabInfoUncheckedUpdateWithoutLabIdInput>;
    create: Prisma.XOR<Prisma.LabInfoCreateWithoutLabIdInput, Prisma.LabInfoUncheckedCreateWithoutLabIdInput>;
    where?: Prisma.LabInfoWhereInput;
};
export type LabInfoUpdateToOneWithWhereWithoutLabIdInput = {
    where?: Prisma.LabInfoWhereInput;
    data: Prisma.XOR<Prisma.LabInfoUpdateWithoutLabIdInput, Prisma.LabInfoUncheckedUpdateWithoutLabIdInput>;
};
export type LabInfoUpdateWithoutLabIdInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gstin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumorgTypeFieldUpdateOperationsInput | $Enums.orgType | null;
};
export type LabInfoUncheckedUpdateWithoutLabIdInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gstin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumorgTypeFieldUpdateOperationsInput | $Enums.orgType | null;
};
export type LabInfoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    labID?: boolean;
    address?: boolean;
    gstin?: boolean;
    type?: boolean;
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labInfo"]>;
export type LabInfoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    labID?: boolean;
    address?: boolean;
    gstin?: boolean;
    type?: boolean;
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labInfo"]>;
export type LabInfoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    labID?: boolean;
    address?: boolean;
    gstin?: boolean;
    type?: boolean;
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labInfo"]>;
export type LabInfoSelectScalar = {
    id?: boolean;
    labID?: boolean;
    address?: boolean;
    gstin?: boolean;
    type?: boolean;
};
export type LabInfoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "labID" | "address" | "gstin" | "type", ExtArgs["result"]["labInfo"]>;
export type LabInfoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
};
export type LabInfoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
};
export type LabInfoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
};
export type $LabInfoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LabInfo";
    objects: {
        labId: Prisma.$LabPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        labID: string;
        address: string | null;
        gstin: string | null;
        type: $Enums.orgType | null;
    }, ExtArgs["result"]["labInfo"]>;
    composites: {};
};
export type LabInfoGetPayload<S extends boolean | null | undefined | LabInfoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LabInfoPayload, S>;
export type LabInfoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LabInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LabInfoCountAggregateInputType | true;
};
export interface LabInfoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LabInfo'];
        meta: {
            name: 'LabInfo';
        };
    };
    /**
     * Find zero or one LabInfo that matches the filter.
     * @param {LabInfoFindUniqueArgs} args - Arguments to find a LabInfo
     * @example
     * // Get one LabInfo
     * const labInfo = await prisma.labInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabInfoFindUniqueArgs>(args: Prisma.SelectSubset<T, LabInfoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LabInfoClient<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LabInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabInfoFindUniqueOrThrowArgs} args - Arguments to find a LabInfo
     * @example
     * // Get one LabInfo
     * const labInfo = await prisma.labInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabInfoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LabInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LabInfoClient<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LabInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInfoFindFirstArgs} args - Arguments to find a LabInfo
     * @example
     * // Get one LabInfo
     * const labInfo = await prisma.labInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabInfoFindFirstArgs>(args?: Prisma.SelectSubset<T, LabInfoFindFirstArgs<ExtArgs>>): Prisma.Prisma__LabInfoClient<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LabInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInfoFindFirstOrThrowArgs} args - Arguments to find a LabInfo
     * @example
     * // Get one LabInfo
     * const labInfo = await prisma.labInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabInfoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LabInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LabInfoClient<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LabInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabInfos
     * const labInfos = await prisma.labInfo.findMany()
     *
     * // Get first 10 LabInfos
     * const labInfos = await prisma.labInfo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const labInfoWithIdOnly = await prisma.labInfo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LabInfoFindManyArgs>(args?: Prisma.SelectSubset<T, LabInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LabInfo.
     * @param {LabInfoCreateArgs} args - Arguments to create a LabInfo.
     * @example
     * // Create one LabInfo
     * const LabInfo = await prisma.labInfo.create({
     *   data: {
     *     // ... data to create a LabInfo
     *   }
     * })
     *
     */
    create<T extends LabInfoCreateArgs>(args: Prisma.SelectSubset<T, LabInfoCreateArgs<ExtArgs>>): Prisma.Prisma__LabInfoClient<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LabInfos.
     * @param {LabInfoCreateManyArgs} args - Arguments to create many LabInfos.
     * @example
     * // Create many LabInfos
     * const labInfo = await prisma.labInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LabInfoCreateManyArgs>(args?: Prisma.SelectSubset<T, LabInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LabInfos and returns the data saved in the database.
     * @param {LabInfoCreateManyAndReturnArgs} args - Arguments to create many LabInfos.
     * @example
     * // Create many LabInfos
     * const labInfo = await prisma.labInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LabInfos and only return the `id`
     * const labInfoWithIdOnly = await prisma.labInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LabInfoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LabInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LabInfo.
     * @param {LabInfoDeleteArgs} args - Arguments to delete one LabInfo.
     * @example
     * // Delete one LabInfo
     * const LabInfo = await prisma.labInfo.delete({
     *   where: {
     *     // ... filter to delete one LabInfo
     *   }
     * })
     *
     */
    delete<T extends LabInfoDeleteArgs>(args: Prisma.SelectSubset<T, LabInfoDeleteArgs<ExtArgs>>): Prisma.Prisma__LabInfoClient<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LabInfo.
     * @param {LabInfoUpdateArgs} args - Arguments to update one LabInfo.
     * @example
     * // Update one LabInfo
     * const labInfo = await prisma.labInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LabInfoUpdateArgs>(args: Prisma.SelectSubset<T, LabInfoUpdateArgs<ExtArgs>>): Prisma.Prisma__LabInfoClient<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LabInfos.
     * @param {LabInfoDeleteManyArgs} args - Arguments to filter LabInfos to delete.
     * @example
     * // Delete a few LabInfos
     * const { count } = await prisma.labInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LabInfoDeleteManyArgs>(args?: Prisma.SelectSubset<T, LabInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LabInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabInfos
     * const labInfo = await prisma.labInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LabInfoUpdateManyArgs>(args: Prisma.SelectSubset<T, LabInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LabInfos and returns the data updated in the database.
     * @param {LabInfoUpdateManyAndReturnArgs} args - Arguments to update many LabInfos.
     * @example
     * // Update many LabInfos
     * const labInfo = await prisma.labInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LabInfos and only return the `id`
     * const labInfoWithIdOnly = await prisma.labInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabInfoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LabInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LabInfo.
     * @param {LabInfoUpsertArgs} args - Arguments to update or create a LabInfo.
     * @example
     * // Update or create a LabInfo
     * const labInfo = await prisma.labInfo.upsert({
     *   create: {
     *     // ... data to create a LabInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabInfo we want to update
     *   }
     * })
     */
    upsert<T extends LabInfoUpsertArgs>(args: Prisma.SelectSubset<T, LabInfoUpsertArgs<ExtArgs>>): Prisma.Prisma__LabInfoClient<runtime.Types.Result.GetResult<Prisma.$LabInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LabInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInfoCountArgs} args - Arguments to filter LabInfos to count.
     * @example
     * // Count the number of LabInfos
     * const count = await prisma.labInfo.count({
     *   where: {
     *     // ... the filter for the LabInfos we want to count
     *   }
     * })
    **/
    count<T extends LabInfoCountArgs>(args?: Prisma.Subset<T, LabInfoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LabInfoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LabInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabInfoAggregateArgs>(args: Prisma.Subset<T, LabInfoAggregateArgs>): Prisma.PrismaPromise<GetLabInfoAggregateType<T>>;
    /**
     * Group by LabInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInfoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LabInfoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LabInfoGroupByArgs['orderBy'];
    } : {
        orderBy?: LabInfoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LabInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LabInfo model
     */
    readonly fields: LabInfoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LabInfo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LabInfoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    labId<T extends Prisma.LabDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LabDefaultArgs<ExtArgs>>): Prisma.Prisma__LabClient<runtime.Types.Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LabInfo model
 */
export interface LabInfoFieldRefs {
    readonly id: Prisma.FieldRef<"LabInfo", 'String'>;
    readonly labID: Prisma.FieldRef<"LabInfo", 'String'>;
    readonly address: Prisma.FieldRef<"LabInfo", 'String'>;
    readonly gstin: Prisma.FieldRef<"LabInfo", 'String'>;
    readonly type: Prisma.FieldRef<"LabInfo", 'orgType'>;
}
/**
 * LabInfo findUnique
 */
export type LabInfoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoInclude<ExtArgs> | null;
    /**
     * Filter, which LabInfo to fetch.
     */
    where: Prisma.LabInfoWhereUniqueInput;
};
/**
 * LabInfo findUniqueOrThrow
 */
export type LabInfoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoInclude<ExtArgs> | null;
    /**
     * Filter, which LabInfo to fetch.
     */
    where: Prisma.LabInfoWhereUniqueInput;
};
/**
 * LabInfo findFirst
 */
export type LabInfoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoInclude<ExtArgs> | null;
    /**
     * Filter, which LabInfo to fetch.
     */
    where?: Prisma.LabInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabInfos to fetch.
     */
    orderBy?: Prisma.LabInfoOrderByWithRelationInput | Prisma.LabInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LabInfos.
     */
    cursor?: Prisma.LabInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LabInfos.
     */
    distinct?: Prisma.LabInfoScalarFieldEnum | Prisma.LabInfoScalarFieldEnum[];
};
/**
 * LabInfo findFirstOrThrow
 */
export type LabInfoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoInclude<ExtArgs> | null;
    /**
     * Filter, which LabInfo to fetch.
     */
    where?: Prisma.LabInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabInfos to fetch.
     */
    orderBy?: Prisma.LabInfoOrderByWithRelationInput | Prisma.LabInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LabInfos.
     */
    cursor?: Prisma.LabInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LabInfos.
     */
    distinct?: Prisma.LabInfoScalarFieldEnum | Prisma.LabInfoScalarFieldEnum[];
};
/**
 * LabInfo findMany
 */
export type LabInfoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoInclude<ExtArgs> | null;
    /**
     * Filter, which LabInfos to fetch.
     */
    where?: Prisma.LabInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabInfos to fetch.
     */
    orderBy?: Prisma.LabInfoOrderByWithRelationInput | Prisma.LabInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LabInfos.
     */
    cursor?: Prisma.LabInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabInfos.
     */
    skip?: number;
    distinct?: Prisma.LabInfoScalarFieldEnum | Prisma.LabInfoScalarFieldEnum[];
};
/**
 * LabInfo create
 */
export type LabInfoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoInclude<ExtArgs> | null;
    /**
     * The data needed to create a LabInfo.
     */
    data: Prisma.XOR<Prisma.LabInfoCreateInput, Prisma.LabInfoUncheckedCreateInput>;
};
/**
 * LabInfo createMany
 */
export type LabInfoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabInfos.
     */
    data: Prisma.LabInfoCreateManyInput | Prisma.LabInfoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LabInfo createManyAndReturn
 */
export type LabInfoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * The data used to create many LabInfos.
     */
    data: Prisma.LabInfoCreateManyInput | Prisma.LabInfoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LabInfo update
 */
export type LabInfoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoInclude<ExtArgs> | null;
    /**
     * The data needed to update a LabInfo.
     */
    data: Prisma.XOR<Prisma.LabInfoUpdateInput, Prisma.LabInfoUncheckedUpdateInput>;
    /**
     * Choose, which LabInfo to update.
     */
    where: Prisma.LabInfoWhereUniqueInput;
};
/**
 * LabInfo updateMany
 */
export type LabInfoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LabInfos.
     */
    data: Prisma.XOR<Prisma.LabInfoUpdateManyMutationInput, Prisma.LabInfoUncheckedUpdateManyInput>;
    /**
     * Filter which LabInfos to update
     */
    where?: Prisma.LabInfoWhereInput;
    /**
     * Limit how many LabInfos to update.
     */
    limit?: number;
};
/**
 * LabInfo updateManyAndReturn
 */
export type LabInfoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * The data used to update LabInfos.
     */
    data: Prisma.XOR<Prisma.LabInfoUpdateManyMutationInput, Prisma.LabInfoUncheckedUpdateManyInput>;
    /**
     * Filter which LabInfos to update
     */
    where?: Prisma.LabInfoWhereInput;
    /**
     * Limit how many LabInfos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LabInfo upsert
 */
export type LabInfoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoInclude<ExtArgs> | null;
    /**
     * The filter to search for the LabInfo to update in case it exists.
     */
    where: Prisma.LabInfoWhereUniqueInput;
    /**
     * In case the LabInfo found by the `where` argument doesn't exist, create a new LabInfo with this data.
     */
    create: Prisma.XOR<Prisma.LabInfoCreateInput, Prisma.LabInfoUncheckedCreateInput>;
    /**
     * In case the LabInfo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LabInfoUpdateInput, Prisma.LabInfoUncheckedUpdateInput>;
};
/**
 * LabInfo delete
 */
export type LabInfoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoInclude<ExtArgs> | null;
    /**
     * Filter which LabInfo to delete.
     */
    where: Prisma.LabInfoWhereUniqueInput;
};
/**
 * LabInfo deleteMany
 */
export type LabInfoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LabInfos to delete
     */
    where?: Prisma.LabInfoWhereInput;
    /**
     * Limit how many LabInfos to delete.
     */
    limit?: number;
};
/**
 * LabInfo without action
 */
export type LabInfoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInfo
     */
    select?: Prisma.LabInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabInfo
     */
    omit?: Prisma.LabInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabInfoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LabInfo.d.ts.map