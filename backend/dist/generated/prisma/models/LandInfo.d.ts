import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LandInfo
 *
 */
export type LandInfoModel = runtime.Types.Result.DefaultSelection<Prisma.$LandInfoPayload>;
export type AggregateLandInfo = {
    _count: LandInfoCountAggregateOutputType | null;
    _avg: LandInfoAvgAggregateOutputType | null;
    _sum: LandInfoSumAggregateOutputType | null;
    _min: LandInfoMinAggregateOutputType | null;
    _max: LandInfoMaxAggregateOutputType | null;
};
export type LandInfoAvgAggregateOutputType = {
    totalHectare: number | null;
};
export type LandInfoSumAggregateOutputType = {
    totalHectare: number | null;
};
export type LandInfoMinAggregateOutputType = {
    id: string | null;
    totalHectare: number | null;
    khasraNumber: string | null;
    farmerID: string | null;
};
export type LandInfoMaxAggregateOutputType = {
    id: string | null;
    totalHectare: number | null;
    khasraNumber: string | null;
    farmerID: string | null;
};
export type LandInfoCountAggregateOutputType = {
    id: number;
    totalHectare: number;
    khasraNumber: number;
    coordinates: number;
    farmerID: number;
    _all: number;
};
export type LandInfoAvgAggregateInputType = {
    totalHectare?: true;
};
export type LandInfoSumAggregateInputType = {
    totalHectare?: true;
};
export type LandInfoMinAggregateInputType = {
    id?: true;
    totalHectare?: true;
    khasraNumber?: true;
    farmerID?: true;
};
export type LandInfoMaxAggregateInputType = {
    id?: true;
    totalHectare?: true;
    khasraNumber?: true;
    farmerID?: true;
};
export type LandInfoCountAggregateInputType = {
    id?: true;
    totalHectare?: true;
    khasraNumber?: true;
    coordinates?: true;
    farmerID?: true;
    _all?: true;
};
export type LandInfoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LandInfo to aggregate.
     */
    where?: Prisma.LandInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LandInfos to fetch.
     */
    orderBy?: Prisma.LandInfoOrderByWithRelationInput | Prisma.LandInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LandInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LandInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LandInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LandInfos
    **/
    _count?: true | LandInfoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LandInfoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LandInfoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LandInfoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LandInfoMaxAggregateInputType;
};
export type GetLandInfoAggregateType<T extends LandInfoAggregateArgs> = {
    [P in keyof T & keyof AggregateLandInfo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLandInfo[P]> : Prisma.GetScalarType<T[P], AggregateLandInfo[P]>;
};
export type LandInfoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LandInfoWhereInput;
    orderBy?: Prisma.LandInfoOrderByWithAggregationInput | Prisma.LandInfoOrderByWithAggregationInput[];
    by: Prisma.LandInfoScalarFieldEnum[] | Prisma.LandInfoScalarFieldEnum;
    having?: Prisma.LandInfoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LandInfoCountAggregateInputType | true;
    _avg?: LandInfoAvgAggregateInputType;
    _sum?: LandInfoSumAggregateInputType;
    _min?: LandInfoMinAggregateInputType;
    _max?: LandInfoMaxAggregateInputType;
};
export type LandInfoGroupByOutputType = {
    id: string;
    totalHectare: number;
    khasraNumber: string;
    coordinates: runtime.JsonValue | null;
    farmerID: string;
    _count: LandInfoCountAggregateOutputType | null;
    _avg: LandInfoAvgAggregateOutputType | null;
    _sum: LandInfoSumAggregateOutputType | null;
    _min: LandInfoMinAggregateOutputType | null;
    _max: LandInfoMaxAggregateOutputType | null;
};
type GetLandInfoGroupByPayload<T extends LandInfoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LandInfoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LandInfoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LandInfoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LandInfoGroupByOutputType[P]>;
}>>;
export type LandInfoWhereInput = {
    AND?: Prisma.LandInfoWhereInput | Prisma.LandInfoWhereInput[];
    OR?: Prisma.LandInfoWhereInput[];
    NOT?: Prisma.LandInfoWhereInput | Prisma.LandInfoWhereInput[];
    id?: Prisma.StringFilter<"LandInfo"> | string;
    totalHectare?: Prisma.FloatFilter<"LandInfo"> | number;
    khasraNumber?: Prisma.StringFilter<"LandInfo"> | string;
    coordinates?: Prisma.JsonNullableFilter<"LandInfo">;
    farmerID?: Prisma.StringFilter<"LandInfo"> | string;
    famer?: Prisma.XOR<Prisma.FarmerScalarRelationFilter, Prisma.FarmerWhereInput>;
};
export type LandInfoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    totalHectare?: Prisma.SortOrder;
    khasraNumber?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrderInput | Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
    famer?: Prisma.FarmerOrderByWithRelationInput;
};
export type LandInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    farmerID?: string;
    AND?: Prisma.LandInfoWhereInput | Prisma.LandInfoWhereInput[];
    OR?: Prisma.LandInfoWhereInput[];
    NOT?: Prisma.LandInfoWhereInput | Prisma.LandInfoWhereInput[];
    totalHectare?: Prisma.FloatFilter<"LandInfo"> | number;
    khasraNumber?: Prisma.StringFilter<"LandInfo"> | string;
    coordinates?: Prisma.JsonNullableFilter<"LandInfo">;
    famer?: Prisma.XOR<Prisma.FarmerScalarRelationFilter, Prisma.FarmerWhereInput>;
}, "id" | "farmerID">;
export type LandInfoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    totalHectare?: Prisma.SortOrder;
    khasraNumber?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrderInput | Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
    _count?: Prisma.LandInfoCountOrderByAggregateInput;
    _avg?: Prisma.LandInfoAvgOrderByAggregateInput;
    _max?: Prisma.LandInfoMaxOrderByAggregateInput;
    _min?: Prisma.LandInfoMinOrderByAggregateInput;
    _sum?: Prisma.LandInfoSumOrderByAggregateInput;
};
export type LandInfoScalarWhereWithAggregatesInput = {
    AND?: Prisma.LandInfoScalarWhereWithAggregatesInput | Prisma.LandInfoScalarWhereWithAggregatesInput[];
    OR?: Prisma.LandInfoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LandInfoScalarWhereWithAggregatesInput | Prisma.LandInfoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LandInfo"> | string;
    totalHectare?: Prisma.FloatWithAggregatesFilter<"LandInfo"> | number;
    khasraNumber?: Prisma.StringWithAggregatesFilter<"LandInfo"> | string;
    coordinates?: Prisma.JsonNullableWithAggregatesFilter<"LandInfo">;
    farmerID?: Prisma.StringWithAggregatesFilter<"LandInfo"> | string;
};
export type LandInfoCreateInput = {
    id?: string;
    totalHectare: number;
    khasraNumber: string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    famer: Prisma.FarmerCreateNestedOneWithoutLandInfoInput;
};
export type LandInfoUncheckedCreateInput = {
    id?: string;
    totalHectare: number;
    khasraNumber: string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    farmerID: string;
};
export type LandInfoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalHectare?: Prisma.FloatFieldUpdateOperationsInput | number;
    khasraNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    famer?: Prisma.FarmerUpdateOneRequiredWithoutLandInfoNestedInput;
};
export type LandInfoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalHectare?: Prisma.FloatFieldUpdateOperationsInput | number;
    khasraNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    farmerID?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LandInfoCreateManyInput = {
    id?: string;
    totalHectare: number;
    khasraNumber: string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    farmerID: string;
};
export type LandInfoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalHectare?: Prisma.FloatFieldUpdateOperationsInput | number;
    khasraNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type LandInfoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalHectare?: Prisma.FloatFieldUpdateOperationsInput | number;
    khasraNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    farmerID?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LandInfoListRelationFilter = {
    every?: Prisma.LandInfoWhereInput;
    some?: Prisma.LandInfoWhereInput;
    none?: Prisma.LandInfoWhereInput;
};
export type LandInfoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LandInfoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    totalHectare?: Prisma.SortOrder;
    khasraNumber?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
};
export type LandInfoAvgOrderByAggregateInput = {
    totalHectare?: Prisma.SortOrder;
};
export type LandInfoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    totalHectare?: Prisma.SortOrder;
    khasraNumber?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
};
export type LandInfoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    totalHectare?: Prisma.SortOrder;
    khasraNumber?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
};
export type LandInfoSumOrderByAggregateInput = {
    totalHectare?: Prisma.SortOrder;
};
export type LandInfoCreateNestedManyWithoutFamerInput = {
    create?: Prisma.XOR<Prisma.LandInfoCreateWithoutFamerInput, Prisma.LandInfoUncheckedCreateWithoutFamerInput> | Prisma.LandInfoCreateWithoutFamerInput[] | Prisma.LandInfoUncheckedCreateWithoutFamerInput[];
    connectOrCreate?: Prisma.LandInfoCreateOrConnectWithoutFamerInput | Prisma.LandInfoCreateOrConnectWithoutFamerInput[];
    createMany?: Prisma.LandInfoCreateManyFamerInputEnvelope;
    connect?: Prisma.LandInfoWhereUniqueInput | Prisma.LandInfoWhereUniqueInput[];
};
export type LandInfoUncheckedCreateNestedManyWithoutFamerInput = {
    create?: Prisma.XOR<Prisma.LandInfoCreateWithoutFamerInput, Prisma.LandInfoUncheckedCreateWithoutFamerInput> | Prisma.LandInfoCreateWithoutFamerInput[] | Prisma.LandInfoUncheckedCreateWithoutFamerInput[];
    connectOrCreate?: Prisma.LandInfoCreateOrConnectWithoutFamerInput | Prisma.LandInfoCreateOrConnectWithoutFamerInput[];
    createMany?: Prisma.LandInfoCreateManyFamerInputEnvelope;
    connect?: Prisma.LandInfoWhereUniqueInput | Prisma.LandInfoWhereUniqueInput[];
};
export type LandInfoUpdateManyWithoutFamerNestedInput = {
    create?: Prisma.XOR<Prisma.LandInfoCreateWithoutFamerInput, Prisma.LandInfoUncheckedCreateWithoutFamerInput> | Prisma.LandInfoCreateWithoutFamerInput[] | Prisma.LandInfoUncheckedCreateWithoutFamerInput[];
    connectOrCreate?: Prisma.LandInfoCreateOrConnectWithoutFamerInput | Prisma.LandInfoCreateOrConnectWithoutFamerInput[];
    upsert?: Prisma.LandInfoUpsertWithWhereUniqueWithoutFamerInput | Prisma.LandInfoUpsertWithWhereUniqueWithoutFamerInput[];
    createMany?: Prisma.LandInfoCreateManyFamerInputEnvelope;
    set?: Prisma.LandInfoWhereUniqueInput | Prisma.LandInfoWhereUniqueInput[];
    disconnect?: Prisma.LandInfoWhereUniqueInput | Prisma.LandInfoWhereUniqueInput[];
    delete?: Prisma.LandInfoWhereUniqueInput | Prisma.LandInfoWhereUniqueInput[];
    connect?: Prisma.LandInfoWhereUniqueInput | Prisma.LandInfoWhereUniqueInput[];
    update?: Prisma.LandInfoUpdateWithWhereUniqueWithoutFamerInput | Prisma.LandInfoUpdateWithWhereUniqueWithoutFamerInput[];
    updateMany?: Prisma.LandInfoUpdateManyWithWhereWithoutFamerInput | Prisma.LandInfoUpdateManyWithWhereWithoutFamerInput[];
    deleteMany?: Prisma.LandInfoScalarWhereInput | Prisma.LandInfoScalarWhereInput[];
};
export type LandInfoUncheckedUpdateManyWithoutFamerNestedInput = {
    create?: Prisma.XOR<Prisma.LandInfoCreateWithoutFamerInput, Prisma.LandInfoUncheckedCreateWithoutFamerInput> | Prisma.LandInfoCreateWithoutFamerInput[] | Prisma.LandInfoUncheckedCreateWithoutFamerInput[];
    connectOrCreate?: Prisma.LandInfoCreateOrConnectWithoutFamerInput | Prisma.LandInfoCreateOrConnectWithoutFamerInput[];
    upsert?: Prisma.LandInfoUpsertWithWhereUniqueWithoutFamerInput | Prisma.LandInfoUpsertWithWhereUniqueWithoutFamerInput[];
    createMany?: Prisma.LandInfoCreateManyFamerInputEnvelope;
    set?: Prisma.LandInfoWhereUniqueInput | Prisma.LandInfoWhereUniqueInput[];
    disconnect?: Prisma.LandInfoWhereUniqueInput | Prisma.LandInfoWhereUniqueInput[];
    delete?: Prisma.LandInfoWhereUniqueInput | Prisma.LandInfoWhereUniqueInput[];
    connect?: Prisma.LandInfoWhereUniqueInput | Prisma.LandInfoWhereUniqueInput[];
    update?: Prisma.LandInfoUpdateWithWhereUniqueWithoutFamerInput | Prisma.LandInfoUpdateWithWhereUniqueWithoutFamerInput[];
    updateMany?: Prisma.LandInfoUpdateManyWithWhereWithoutFamerInput | Prisma.LandInfoUpdateManyWithWhereWithoutFamerInput[];
    deleteMany?: Prisma.LandInfoScalarWhereInput | Prisma.LandInfoScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type LandInfoCreateWithoutFamerInput = {
    id?: string;
    totalHectare: number;
    khasraNumber: string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type LandInfoUncheckedCreateWithoutFamerInput = {
    id?: string;
    totalHectare: number;
    khasraNumber: string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type LandInfoCreateOrConnectWithoutFamerInput = {
    where: Prisma.LandInfoWhereUniqueInput;
    create: Prisma.XOR<Prisma.LandInfoCreateWithoutFamerInput, Prisma.LandInfoUncheckedCreateWithoutFamerInput>;
};
export type LandInfoCreateManyFamerInputEnvelope = {
    data: Prisma.LandInfoCreateManyFamerInput | Prisma.LandInfoCreateManyFamerInput[];
    skipDuplicates?: boolean;
};
export type LandInfoUpsertWithWhereUniqueWithoutFamerInput = {
    where: Prisma.LandInfoWhereUniqueInput;
    update: Prisma.XOR<Prisma.LandInfoUpdateWithoutFamerInput, Prisma.LandInfoUncheckedUpdateWithoutFamerInput>;
    create: Prisma.XOR<Prisma.LandInfoCreateWithoutFamerInput, Prisma.LandInfoUncheckedCreateWithoutFamerInput>;
};
export type LandInfoUpdateWithWhereUniqueWithoutFamerInput = {
    where: Prisma.LandInfoWhereUniqueInput;
    data: Prisma.XOR<Prisma.LandInfoUpdateWithoutFamerInput, Prisma.LandInfoUncheckedUpdateWithoutFamerInput>;
};
export type LandInfoUpdateManyWithWhereWithoutFamerInput = {
    where: Prisma.LandInfoScalarWhereInput;
    data: Prisma.XOR<Prisma.LandInfoUpdateManyMutationInput, Prisma.LandInfoUncheckedUpdateManyWithoutFamerInput>;
};
export type LandInfoScalarWhereInput = {
    AND?: Prisma.LandInfoScalarWhereInput | Prisma.LandInfoScalarWhereInput[];
    OR?: Prisma.LandInfoScalarWhereInput[];
    NOT?: Prisma.LandInfoScalarWhereInput | Prisma.LandInfoScalarWhereInput[];
    id?: Prisma.StringFilter<"LandInfo"> | string;
    totalHectare?: Prisma.FloatFilter<"LandInfo"> | number;
    khasraNumber?: Prisma.StringFilter<"LandInfo"> | string;
    coordinates?: Prisma.JsonNullableFilter<"LandInfo">;
    farmerID?: Prisma.StringFilter<"LandInfo"> | string;
};
export type LandInfoCreateManyFamerInput = {
    id?: string;
    totalHectare: number;
    khasraNumber: string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type LandInfoUpdateWithoutFamerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalHectare?: Prisma.FloatFieldUpdateOperationsInput | number;
    khasraNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type LandInfoUncheckedUpdateWithoutFamerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalHectare?: Prisma.FloatFieldUpdateOperationsInput | number;
    khasraNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type LandInfoUncheckedUpdateManyWithoutFamerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalHectare?: Prisma.FloatFieldUpdateOperationsInput | number;
    khasraNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type LandInfoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    totalHectare?: boolean;
    khasraNumber?: boolean;
    coordinates?: boolean;
    farmerID?: boolean;
    famer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["landInfo"]>;
export type LandInfoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    totalHectare?: boolean;
    khasraNumber?: boolean;
    coordinates?: boolean;
    farmerID?: boolean;
    famer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["landInfo"]>;
export type LandInfoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    totalHectare?: boolean;
    khasraNumber?: boolean;
    coordinates?: boolean;
    farmerID?: boolean;
    famer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["landInfo"]>;
export type LandInfoSelectScalar = {
    id?: boolean;
    totalHectare?: boolean;
    khasraNumber?: boolean;
    coordinates?: boolean;
    farmerID?: boolean;
};
export type LandInfoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "totalHectare" | "khasraNumber" | "coordinates" | "farmerID", ExtArgs["result"]["landInfo"]>;
export type LandInfoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    famer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
};
export type LandInfoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    famer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
};
export type LandInfoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    famer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
};
export type $LandInfoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LandInfo";
    objects: {
        famer: Prisma.$FarmerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        totalHectare: number;
        khasraNumber: string;
        coordinates: runtime.JsonValue | null;
        farmerID: string;
    }, ExtArgs["result"]["landInfo"]>;
    composites: {};
};
export type LandInfoGetPayload<S extends boolean | null | undefined | LandInfoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LandInfoPayload, S>;
export type LandInfoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LandInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LandInfoCountAggregateInputType | true;
};
export interface LandInfoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LandInfo'];
        meta: {
            name: 'LandInfo';
        };
    };
    /**
     * Find zero or one LandInfo that matches the filter.
     * @param {LandInfoFindUniqueArgs} args - Arguments to find a LandInfo
     * @example
     * // Get one LandInfo
     * const landInfo = await prisma.landInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandInfoFindUniqueArgs>(args: Prisma.SelectSubset<T, LandInfoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LandInfoClient<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LandInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandInfoFindUniqueOrThrowArgs} args - Arguments to find a LandInfo
     * @example
     * // Get one LandInfo
     * const landInfo = await prisma.landInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandInfoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LandInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LandInfoClient<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LandInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandInfoFindFirstArgs} args - Arguments to find a LandInfo
     * @example
     * // Get one LandInfo
     * const landInfo = await prisma.landInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandInfoFindFirstArgs>(args?: Prisma.SelectSubset<T, LandInfoFindFirstArgs<ExtArgs>>): Prisma.Prisma__LandInfoClient<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LandInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandInfoFindFirstOrThrowArgs} args - Arguments to find a LandInfo
     * @example
     * // Get one LandInfo
     * const landInfo = await prisma.landInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandInfoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LandInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LandInfoClient<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LandInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LandInfos
     * const landInfos = await prisma.landInfo.findMany()
     *
     * // Get first 10 LandInfos
     * const landInfos = await prisma.landInfo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const landInfoWithIdOnly = await prisma.landInfo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LandInfoFindManyArgs>(args?: Prisma.SelectSubset<T, LandInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LandInfo.
     * @param {LandInfoCreateArgs} args - Arguments to create a LandInfo.
     * @example
     * // Create one LandInfo
     * const LandInfo = await prisma.landInfo.create({
     *   data: {
     *     // ... data to create a LandInfo
     *   }
     * })
     *
     */
    create<T extends LandInfoCreateArgs>(args: Prisma.SelectSubset<T, LandInfoCreateArgs<ExtArgs>>): Prisma.Prisma__LandInfoClient<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LandInfos.
     * @param {LandInfoCreateManyArgs} args - Arguments to create many LandInfos.
     * @example
     * // Create many LandInfos
     * const landInfo = await prisma.landInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LandInfoCreateManyArgs>(args?: Prisma.SelectSubset<T, LandInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LandInfos and returns the data saved in the database.
     * @param {LandInfoCreateManyAndReturnArgs} args - Arguments to create many LandInfos.
     * @example
     * // Create many LandInfos
     * const landInfo = await prisma.landInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LandInfos and only return the `id`
     * const landInfoWithIdOnly = await prisma.landInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LandInfoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LandInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LandInfo.
     * @param {LandInfoDeleteArgs} args - Arguments to delete one LandInfo.
     * @example
     * // Delete one LandInfo
     * const LandInfo = await prisma.landInfo.delete({
     *   where: {
     *     // ... filter to delete one LandInfo
     *   }
     * })
     *
     */
    delete<T extends LandInfoDeleteArgs>(args: Prisma.SelectSubset<T, LandInfoDeleteArgs<ExtArgs>>): Prisma.Prisma__LandInfoClient<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LandInfo.
     * @param {LandInfoUpdateArgs} args - Arguments to update one LandInfo.
     * @example
     * // Update one LandInfo
     * const landInfo = await prisma.landInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LandInfoUpdateArgs>(args: Prisma.SelectSubset<T, LandInfoUpdateArgs<ExtArgs>>): Prisma.Prisma__LandInfoClient<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LandInfos.
     * @param {LandInfoDeleteManyArgs} args - Arguments to filter LandInfos to delete.
     * @example
     * // Delete a few LandInfos
     * const { count } = await prisma.landInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LandInfoDeleteManyArgs>(args?: Prisma.SelectSubset<T, LandInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LandInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LandInfos
     * const landInfo = await prisma.landInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LandInfoUpdateManyArgs>(args: Prisma.SelectSubset<T, LandInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LandInfos and returns the data updated in the database.
     * @param {LandInfoUpdateManyAndReturnArgs} args - Arguments to update many LandInfos.
     * @example
     * // Update many LandInfos
     * const landInfo = await prisma.landInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LandInfos and only return the `id`
     * const landInfoWithIdOnly = await prisma.landInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends LandInfoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LandInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LandInfo.
     * @param {LandInfoUpsertArgs} args - Arguments to update or create a LandInfo.
     * @example
     * // Update or create a LandInfo
     * const landInfo = await prisma.landInfo.upsert({
     *   create: {
     *     // ... data to create a LandInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LandInfo we want to update
     *   }
     * })
     */
    upsert<T extends LandInfoUpsertArgs>(args: Prisma.SelectSubset<T, LandInfoUpsertArgs<ExtArgs>>): Prisma.Prisma__LandInfoClient<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LandInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandInfoCountArgs} args - Arguments to filter LandInfos to count.
     * @example
     * // Count the number of LandInfos
     * const count = await prisma.landInfo.count({
     *   where: {
     *     // ... the filter for the LandInfos we want to count
     *   }
     * })
    **/
    count<T extends LandInfoCountArgs>(args?: Prisma.Subset<T, LandInfoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LandInfoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LandInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LandInfoAggregateArgs>(args: Prisma.Subset<T, LandInfoAggregateArgs>): Prisma.PrismaPromise<GetLandInfoAggregateType<T>>;
    /**
     * Group by LandInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandInfoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LandInfoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LandInfoGroupByArgs['orderBy'];
    } : {
        orderBy?: LandInfoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LandInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LandInfo model
     */
    readonly fields: LandInfoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LandInfo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LandInfoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    famer<T extends Prisma.FarmerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmerDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmerClient<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LandInfo model
 */
export interface LandInfoFieldRefs {
    readonly id: Prisma.FieldRef<"LandInfo", 'String'>;
    readonly totalHectare: Prisma.FieldRef<"LandInfo", 'Float'>;
    readonly khasraNumber: Prisma.FieldRef<"LandInfo", 'String'>;
    readonly coordinates: Prisma.FieldRef<"LandInfo", 'Json'>;
    readonly farmerID: Prisma.FieldRef<"LandInfo", 'String'>;
}
/**
 * LandInfo findUnique
 */
export type LandInfoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoInclude<ExtArgs> | null;
    /**
     * Filter, which LandInfo to fetch.
     */
    where: Prisma.LandInfoWhereUniqueInput;
};
/**
 * LandInfo findUniqueOrThrow
 */
export type LandInfoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoInclude<ExtArgs> | null;
    /**
     * Filter, which LandInfo to fetch.
     */
    where: Prisma.LandInfoWhereUniqueInput;
};
/**
 * LandInfo findFirst
 */
export type LandInfoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoInclude<ExtArgs> | null;
    /**
     * Filter, which LandInfo to fetch.
     */
    where?: Prisma.LandInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LandInfos to fetch.
     */
    orderBy?: Prisma.LandInfoOrderByWithRelationInput | Prisma.LandInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LandInfos.
     */
    cursor?: Prisma.LandInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LandInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LandInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LandInfos.
     */
    distinct?: Prisma.LandInfoScalarFieldEnum | Prisma.LandInfoScalarFieldEnum[];
};
/**
 * LandInfo findFirstOrThrow
 */
export type LandInfoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoInclude<ExtArgs> | null;
    /**
     * Filter, which LandInfo to fetch.
     */
    where?: Prisma.LandInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LandInfos to fetch.
     */
    orderBy?: Prisma.LandInfoOrderByWithRelationInput | Prisma.LandInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LandInfos.
     */
    cursor?: Prisma.LandInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LandInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LandInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LandInfos.
     */
    distinct?: Prisma.LandInfoScalarFieldEnum | Prisma.LandInfoScalarFieldEnum[];
};
/**
 * LandInfo findMany
 */
export type LandInfoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoInclude<ExtArgs> | null;
    /**
     * Filter, which LandInfos to fetch.
     */
    where?: Prisma.LandInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LandInfos to fetch.
     */
    orderBy?: Prisma.LandInfoOrderByWithRelationInput | Prisma.LandInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LandInfos.
     */
    cursor?: Prisma.LandInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LandInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LandInfos.
     */
    skip?: number;
    distinct?: Prisma.LandInfoScalarFieldEnum | Prisma.LandInfoScalarFieldEnum[];
};
/**
 * LandInfo create
 */
export type LandInfoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoInclude<ExtArgs> | null;
    /**
     * The data needed to create a LandInfo.
     */
    data: Prisma.XOR<Prisma.LandInfoCreateInput, Prisma.LandInfoUncheckedCreateInput>;
};
/**
 * LandInfo createMany
 */
export type LandInfoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LandInfos.
     */
    data: Prisma.LandInfoCreateManyInput | Prisma.LandInfoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LandInfo createManyAndReturn
 */
export type LandInfoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * The data used to create many LandInfos.
     */
    data: Prisma.LandInfoCreateManyInput | Prisma.LandInfoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LandInfo update
 */
export type LandInfoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoInclude<ExtArgs> | null;
    /**
     * The data needed to update a LandInfo.
     */
    data: Prisma.XOR<Prisma.LandInfoUpdateInput, Prisma.LandInfoUncheckedUpdateInput>;
    /**
     * Choose, which LandInfo to update.
     */
    where: Prisma.LandInfoWhereUniqueInput;
};
/**
 * LandInfo updateMany
 */
export type LandInfoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LandInfos.
     */
    data: Prisma.XOR<Prisma.LandInfoUpdateManyMutationInput, Prisma.LandInfoUncheckedUpdateManyInput>;
    /**
     * Filter which LandInfos to update
     */
    where?: Prisma.LandInfoWhereInput;
    /**
     * Limit how many LandInfos to update.
     */
    limit?: number;
};
/**
 * LandInfo updateManyAndReturn
 */
export type LandInfoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * The data used to update LandInfos.
     */
    data: Prisma.XOR<Prisma.LandInfoUpdateManyMutationInput, Prisma.LandInfoUncheckedUpdateManyInput>;
    /**
     * Filter which LandInfos to update
     */
    where?: Prisma.LandInfoWhereInput;
    /**
     * Limit how many LandInfos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LandInfo upsert
 */
export type LandInfoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoInclude<ExtArgs> | null;
    /**
     * The filter to search for the LandInfo to update in case it exists.
     */
    where: Prisma.LandInfoWhereUniqueInput;
    /**
     * In case the LandInfo found by the `where` argument doesn't exist, create a new LandInfo with this data.
     */
    create: Prisma.XOR<Prisma.LandInfoCreateInput, Prisma.LandInfoUncheckedCreateInput>;
    /**
     * In case the LandInfo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LandInfoUpdateInput, Prisma.LandInfoUncheckedUpdateInput>;
};
/**
 * LandInfo delete
 */
export type LandInfoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoInclude<ExtArgs> | null;
    /**
     * Filter which LandInfo to delete.
     */
    where: Prisma.LandInfoWhereUniqueInput;
};
/**
 * LandInfo deleteMany
 */
export type LandInfoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LandInfos to delete
     */
    where?: Prisma.LandInfoWhereInput;
    /**
     * Limit how many LandInfos to delete.
     */
    limit?: number;
};
/**
 * LandInfo without action
 */
export type LandInfoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandInfo
     */
    select?: Prisma.LandInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LandInfo
     */
    omit?: Prisma.LandInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LandInfoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LandInfo.d.ts.map