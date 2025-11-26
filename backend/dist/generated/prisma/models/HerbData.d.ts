import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model HerbData
 *
 */
export type HerbDataModel = runtime.Types.Result.DefaultSelection<Prisma.$HerbDataPayload>;
export type AggregateHerbData = {
    _count: HerbDataCountAggregateOutputType | null;
    _min: HerbDataMinAggregateOutputType | null;
    _max: HerbDataMaxAggregateOutputType | null;
};
export type HerbDataMinAggregateOutputType = {
    id: string | null;
    herbname: string | null;
    harvestDate: string | null;
    coordinates: string | null;
    pesticidesUsed: boolean | null;
    quantity: string | null;
    desc: string | null;
    farmerID: string | null;
};
export type HerbDataMaxAggregateOutputType = {
    id: string | null;
    herbname: string | null;
    harvestDate: string | null;
    coordinates: string | null;
    pesticidesUsed: boolean | null;
    quantity: string | null;
    desc: string | null;
    farmerID: string | null;
};
export type HerbDataCountAggregateOutputType = {
    id: number;
    herbname: number;
    harvestDate: number;
    coordinates: number;
    pesticidesUsed: number;
    quantity: number;
    desc: number;
    farmerID: number;
    _all: number;
};
export type HerbDataMinAggregateInputType = {
    id?: true;
    herbname?: true;
    harvestDate?: true;
    coordinates?: true;
    pesticidesUsed?: true;
    quantity?: true;
    desc?: true;
    farmerID?: true;
};
export type HerbDataMaxAggregateInputType = {
    id?: true;
    herbname?: true;
    harvestDate?: true;
    coordinates?: true;
    pesticidesUsed?: true;
    quantity?: true;
    desc?: true;
    farmerID?: true;
};
export type HerbDataCountAggregateInputType = {
    id?: true;
    herbname?: true;
    harvestDate?: true;
    coordinates?: true;
    pesticidesUsed?: true;
    quantity?: true;
    desc?: true;
    farmerID?: true;
    _all?: true;
};
export type HerbDataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HerbData to aggregate.
     */
    where?: Prisma.HerbDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HerbData to fetch.
     */
    orderBy?: Prisma.HerbDataOrderByWithRelationInput | Prisma.HerbDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.HerbDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HerbData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HerbData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned HerbData
    **/
    _count?: true | HerbDataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: HerbDataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: HerbDataMaxAggregateInputType;
};
export type GetHerbDataAggregateType<T extends HerbDataAggregateArgs> = {
    [P in keyof T & keyof AggregateHerbData]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHerbData[P]> : Prisma.GetScalarType<T[P], AggregateHerbData[P]>;
};
export type HerbDataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HerbDataWhereInput;
    orderBy?: Prisma.HerbDataOrderByWithAggregationInput | Prisma.HerbDataOrderByWithAggregationInput[];
    by: Prisma.HerbDataScalarFieldEnum[] | Prisma.HerbDataScalarFieldEnum;
    having?: Prisma.HerbDataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HerbDataCountAggregateInputType | true;
    _min?: HerbDataMinAggregateInputType;
    _max?: HerbDataMaxAggregateInputType;
};
export type HerbDataGroupByOutputType = {
    id: string;
    herbname: string;
    harvestDate: string;
    coordinates: string;
    pesticidesUsed: boolean;
    quantity: string;
    desc: string;
    farmerID: string;
    _count: HerbDataCountAggregateOutputType | null;
    _min: HerbDataMinAggregateOutputType | null;
    _max: HerbDataMaxAggregateOutputType | null;
};
type GetHerbDataGroupByPayload<T extends HerbDataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HerbDataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HerbDataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HerbDataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HerbDataGroupByOutputType[P]>;
}>>;
export type HerbDataWhereInput = {
    AND?: Prisma.HerbDataWhereInput | Prisma.HerbDataWhereInput[];
    OR?: Prisma.HerbDataWhereInput[];
    NOT?: Prisma.HerbDataWhereInput | Prisma.HerbDataWhereInput[];
    id?: Prisma.StringFilter<"HerbData"> | string;
    herbname?: Prisma.StringFilter<"HerbData"> | string;
    harvestDate?: Prisma.StringFilter<"HerbData"> | string;
    coordinates?: Prisma.StringFilter<"HerbData"> | string;
    pesticidesUsed?: Prisma.BoolFilter<"HerbData"> | boolean;
    quantity?: Prisma.StringFilter<"HerbData"> | string;
    desc?: Prisma.StringFilter<"HerbData"> | string;
    farmerID?: Prisma.StringFilter<"HerbData"> | string;
    farmer?: Prisma.XOR<Prisma.FarmerScalarRelationFilter, Prisma.FarmerWhereInput>;
};
export type HerbDataOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    herbname?: Prisma.SortOrder;
    harvestDate?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrder;
    pesticidesUsed?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
    farmer?: Prisma.FarmerOrderByWithRelationInput;
};
export type HerbDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HerbDataWhereInput | Prisma.HerbDataWhereInput[];
    OR?: Prisma.HerbDataWhereInput[];
    NOT?: Prisma.HerbDataWhereInput | Prisma.HerbDataWhereInput[];
    herbname?: Prisma.StringFilter<"HerbData"> | string;
    harvestDate?: Prisma.StringFilter<"HerbData"> | string;
    coordinates?: Prisma.StringFilter<"HerbData"> | string;
    pesticidesUsed?: Prisma.BoolFilter<"HerbData"> | boolean;
    quantity?: Prisma.StringFilter<"HerbData"> | string;
    desc?: Prisma.StringFilter<"HerbData"> | string;
    farmerID?: Prisma.StringFilter<"HerbData"> | string;
    farmer?: Prisma.XOR<Prisma.FarmerScalarRelationFilter, Prisma.FarmerWhereInput>;
}, "id">;
export type HerbDataOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    herbname?: Prisma.SortOrder;
    harvestDate?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrder;
    pesticidesUsed?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
    _count?: Prisma.HerbDataCountOrderByAggregateInput;
    _max?: Prisma.HerbDataMaxOrderByAggregateInput;
    _min?: Prisma.HerbDataMinOrderByAggregateInput;
};
export type HerbDataScalarWhereWithAggregatesInput = {
    AND?: Prisma.HerbDataScalarWhereWithAggregatesInput | Prisma.HerbDataScalarWhereWithAggregatesInput[];
    OR?: Prisma.HerbDataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HerbDataScalarWhereWithAggregatesInput | Prisma.HerbDataScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"HerbData"> | string;
    herbname?: Prisma.StringWithAggregatesFilter<"HerbData"> | string;
    harvestDate?: Prisma.StringWithAggregatesFilter<"HerbData"> | string;
    coordinates?: Prisma.StringWithAggregatesFilter<"HerbData"> | string;
    pesticidesUsed?: Prisma.BoolWithAggregatesFilter<"HerbData"> | boolean;
    quantity?: Prisma.StringWithAggregatesFilter<"HerbData"> | string;
    desc?: Prisma.StringWithAggregatesFilter<"HerbData"> | string;
    farmerID?: Prisma.StringWithAggregatesFilter<"HerbData"> | string;
};
export type HerbDataCreateInput = {
    id?: string;
    herbname: string;
    harvestDate: string;
    coordinates: string;
    pesticidesUsed?: boolean;
    quantity: string;
    desc: string;
    farmer: Prisma.FarmerCreateNestedOneWithoutHerbDataInput;
};
export type HerbDataUncheckedCreateInput = {
    id?: string;
    herbname: string;
    harvestDate: string;
    coordinates: string;
    pesticidesUsed?: boolean;
    quantity: string;
    desc: string;
    farmerID: string;
};
export type HerbDataUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    herbname?: Prisma.StringFieldUpdateOperationsInput | string;
    harvestDate?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.StringFieldUpdateOperationsInput | string;
    pesticidesUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    farmer?: Prisma.FarmerUpdateOneRequiredWithoutHerbDataNestedInput;
};
export type HerbDataUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    herbname?: Prisma.StringFieldUpdateOperationsInput | string;
    harvestDate?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.StringFieldUpdateOperationsInput | string;
    pesticidesUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    farmerID?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HerbDataCreateManyInput = {
    id?: string;
    herbname: string;
    harvestDate: string;
    coordinates: string;
    pesticidesUsed?: boolean;
    quantity: string;
    desc: string;
    farmerID: string;
};
export type HerbDataUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    herbname?: Prisma.StringFieldUpdateOperationsInput | string;
    harvestDate?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.StringFieldUpdateOperationsInput | string;
    pesticidesUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HerbDataUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    herbname?: Prisma.StringFieldUpdateOperationsInput | string;
    harvestDate?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.StringFieldUpdateOperationsInput | string;
    pesticidesUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    farmerID?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HerbDataListRelationFilter = {
    every?: Prisma.HerbDataWhereInput;
    some?: Prisma.HerbDataWhereInput;
    none?: Prisma.HerbDataWhereInput;
};
export type HerbDataOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HerbDataCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    herbname?: Prisma.SortOrder;
    harvestDate?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrder;
    pesticidesUsed?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
};
export type HerbDataMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    herbname?: Prisma.SortOrder;
    harvestDate?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrder;
    pesticidesUsed?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
};
export type HerbDataMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    herbname?: Prisma.SortOrder;
    harvestDate?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrder;
    pesticidesUsed?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
};
export type HerbDataCreateNestedManyWithoutFarmerInput = {
    create?: Prisma.XOR<Prisma.HerbDataCreateWithoutFarmerInput, Prisma.HerbDataUncheckedCreateWithoutFarmerInput> | Prisma.HerbDataCreateWithoutFarmerInput[] | Prisma.HerbDataUncheckedCreateWithoutFarmerInput[];
    connectOrCreate?: Prisma.HerbDataCreateOrConnectWithoutFarmerInput | Prisma.HerbDataCreateOrConnectWithoutFarmerInput[];
    createMany?: Prisma.HerbDataCreateManyFarmerInputEnvelope;
    connect?: Prisma.HerbDataWhereUniqueInput | Prisma.HerbDataWhereUniqueInput[];
};
export type HerbDataUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: Prisma.XOR<Prisma.HerbDataCreateWithoutFarmerInput, Prisma.HerbDataUncheckedCreateWithoutFarmerInput> | Prisma.HerbDataCreateWithoutFarmerInput[] | Prisma.HerbDataUncheckedCreateWithoutFarmerInput[];
    connectOrCreate?: Prisma.HerbDataCreateOrConnectWithoutFarmerInput | Prisma.HerbDataCreateOrConnectWithoutFarmerInput[];
    createMany?: Prisma.HerbDataCreateManyFarmerInputEnvelope;
    connect?: Prisma.HerbDataWhereUniqueInput | Prisma.HerbDataWhereUniqueInput[];
};
export type HerbDataUpdateManyWithoutFarmerNestedInput = {
    create?: Prisma.XOR<Prisma.HerbDataCreateWithoutFarmerInput, Prisma.HerbDataUncheckedCreateWithoutFarmerInput> | Prisma.HerbDataCreateWithoutFarmerInput[] | Prisma.HerbDataUncheckedCreateWithoutFarmerInput[];
    connectOrCreate?: Prisma.HerbDataCreateOrConnectWithoutFarmerInput | Prisma.HerbDataCreateOrConnectWithoutFarmerInput[];
    upsert?: Prisma.HerbDataUpsertWithWhereUniqueWithoutFarmerInput | Prisma.HerbDataUpsertWithWhereUniqueWithoutFarmerInput[];
    createMany?: Prisma.HerbDataCreateManyFarmerInputEnvelope;
    set?: Prisma.HerbDataWhereUniqueInput | Prisma.HerbDataWhereUniqueInput[];
    disconnect?: Prisma.HerbDataWhereUniqueInput | Prisma.HerbDataWhereUniqueInput[];
    delete?: Prisma.HerbDataWhereUniqueInput | Prisma.HerbDataWhereUniqueInput[];
    connect?: Prisma.HerbDataWhereUniqueInput | Prisma.HerbDataWhereUniqueInput[];
    update?: Prisma.HerbDataUpdateWithWhereUniqueWithoutFarmerInput | Prisma.HerbDataUpdateWithWhereUniqueWithoutFarmerInput[];
    updateMany?: Prisma.HerbDataUpdateManyWithWhereWithoutFarmerInput | Prisma.HerbDataUpdateManyWithWhereWithoutFarmerInput[];
    deleteMany?: Prisma.HerbDataScalarWhereInput | Prisma.HerbDataScalarWhereInput[];
};
export type HerbDataUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: Prisma.XOR<Prisma.HerbDataCreateWithoutFarmerInput, Prisma.HerbDataUncheckedCreateWithoutFarmerInput> | Prisma.HerbDataCreateWithoutFarmerInput[] | Prisma.HerbDataUncheckedCreateWithoutFarmerInput[];
    connectOrCreate?: Prisma.HerbDataCreateOrConnectWithoutFarmerInput | Prisma.HerbDataCreateOrConnectWithoutFarmerInput[];
    upsert?: Prisma.HerbDataUpsertWithWhereUniqueWithoutFarmerInput | Prisma.HerbDataUpsertWithWhereUniqueWithoutFarmerInput[];
    createMany?: Prisma.HerbDataCreateManyFarmerInputEnvelope;
    set?: Prisma.HerbDataWhereUniqueInput | Prisma.HerbDataWhereUniqueInput[];
    disconnect?: Prisma.HerbDataWhereUniqueInput | Prisma.HerbDataWhereUniqueInput[];
    delete?: Prisma.HerbDataWhereUniqueInput | Prisma.HerbDataWhereUniqueInput[];
    connect?: Prisma.HerbDataWhereUniqueInput | Prisma.HerbDataWhereUniqueInput[];
    update?: Prisma.HerbDataUpdateWithWhereUniqueWithoutFarmerInput | Prisma.HerbDataUpdateWithWhereUniqueWithoutFarmerInput[];
    updateMany?: Prisma.HerbDataUpdateManyWithWhereWithoutFarmerInput | Prisma.HerbDataUpdateManyWithWhereWithoutFarmerInput[];
    deleteMany?: Prisma.HerbDataScalarWhereInput | Prisma.HerbDataScalarWhereInput[];
};
export type HerbDataCreateWithoutFarmerInput = {
    id?: string;
    herbname: string;
    harvestDate: string;
    coordinates: string;
    pesticidesUsed?: boolean;
    quantity: string;
    desc: string;
};
export type HerbDataUncheckedCreateWithoutFarmerInput = {
    id?: string;
    herbname: string;
    harvestDate: string;
    coordinates: string;
    pesticidesUsed?: boolean;
    quantity: string;
    desc: string;
};
export type HerbDataCreateOrConnectWithoutFarmerInput = {
    where: Prisma.HerbDataWhereUniqueInput;
    create: Prisma.XOR<Prisma.HerbDataCreateWithoutFarmerInput, Prisma.HerbDataUncheckedCreateWithoutFarmerInput>;
};
export type HerbDataCreateManyFarmerInputEnvelope = {
    data: Prisma.HerbDataCreateManyFarmerInput | Prisma.HerbDataCreateManyFarmerInput[];
    skipDuplicates?: boolean;
};
export type HerbDataUpsertWithWhereUniqueWithoutFarmerInput = {
    where: Prisma.HerbDataWhereUniqueInput;
    update: Prisma.XOR<Prisma.HerbDataUpdateWithoutFarmerInput, Prisma.HerbDataUncheckedUpdateWithoutFarmerInput>;
    create: Prisma.XOR<Prisma.HerbDataCreateWithoutFarmerInput, Prisma.HerbDataUncheckedCreateWithoutFarmerInput>;
};
export type HerbDataUpdateWithWhereUniqueWithoutFarmerInput = {
    where: Prisma.HerbDataWhereUniqueInput;
    data: Prisma.XOR<Prisma.HerbDataUpdateWithoutFarmerInput, Prisma.HerbDataUncheckedUpdateWithoutFarmerInput>;
};
export type HerbDataUpdateManyWithWhereWithoutFarmerInput = {
    where: Prisma.HerbDataScalarWhereInput;
    data: Prisma.XOR<Prisma.HerbDataUpdateManyMutationInput, Prisma.HerbDataUncheckedUpdateManyWithoutFarmerInput>;
};
export type HerbDataScalarWhereInput = {
    AND?: Prisma.HerbDataScalarWhereInput | Prisma.HerbDataScalarWhereInput[];
    OR?: Prisma.HerbDataScalarWhereInput[];
    NOT?: Prisma.HerbDataScalarWhereInput | Prisma.HerbDataScalarWhereInput[];
    id?: Prisma.StringFilter<"HerbData"> | string;
    herbname?: Prisma.StringFilter<"HerbData"> | string;
    harvestDate?: Prisma.StringFilter<"HerbData"> | string;
    coordinates?: Prisma.StringFilter<"HerbData"> | string;
    pesticidesUsed?: Prisma.BoolFilter<"HerbData"> | boolean;
    quantity?: Prisma.StringFilter<"HerbData"> | string;
    desc?: Prisma.StringFilter<"HerbData"> | string;
    farmerID?: Prisma.StringFilter<"HerbData"> | string;
};
export type HerbDataCreateManyFarmerInput = {
    id?: string;
    herbname: string;
    harvestDate: string;
    coordinates: string;
    pesticidesUsed?: boolean;
    quantity: string;
    desc: string;
};
export type HerbDataUpdateWithoutFarmerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    herbname?: Prisma.StringFieldUpdateOperationsInput | string;
    harvestDate?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.StringFieldUpdateOperationsInput | string;
    pesticidesUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HerbDataUncheckedUpdateWithoutFarmerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    herbname?: Prisma.StringFieldUpdateOperationsInput | string;
    harvestDate?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.StringFieldUpdateOperationsInput | string;
    pesticidesUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HerbDataUncheckedUpdateManyWithoutFarmerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    herbname?: Prisma.StringFieldUpdateOperationsInput | string;
    harvestDate?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.StringFieldUpdateOperationsInput | string;
    pesticidesUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quantity?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HerbDataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    herbname?: boolean;
    harvestDate?: boolean;
    coordinates?: boolean;
    pesticidesUsed?: boolean;
    quantity?: boolean;
    desc?: boolean;
    farmerID?: boolean;
    farmer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["herbData"]>;
export type HerbDataSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    herbname?: boolean;
    harvestDate?: boolean;
    coordinates?: boolean;
    pesticidesUsed?: boolean;
    quantity?: boolean;
    desc?: boolean;
    farmerID?: boolean;
    farmer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["herbData"]>;
export type HerbDataSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    herbname?: boolean;
    harvestDate?: boolean;
    coordinates?: boolean;
    pesticidesUsed?: boolean;
    quantity?: boolean;
    desc?: boolean;
    farmerID?: boolean;
    farmer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["herbData"]>;
export type HerbDataSelectScalar = {
    id?: boolean;
    herbname?: boolean;
    harvestDate?: boolean;
    coordinates?: boolean;
    pesticidesUsed?: boolean;
    quantity?: boolean;
    desc?: boolean;
    farmerID?: boolean;
};
export type HerbDataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "herbname" | "harvestDate" | "coordinates" | "pesticidesUsed" | "quantity" | "desc" | "farmerID", ExtArgs["result"]["herbData"]>;
export type HerbDataInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farmer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
};
export type HerbDataIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farmer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
};
export type HerbDataIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farmer?: boolean | Prisma.FarmerDefaultArgs<ExtArgs>;
};
export type $HerbDataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HerbData";
    objects: {
        farmer: Prisma.$FarmerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        herbname: string;
        harvestDate: string;
        coordinates: string;
        pesticidesUsed: boolean;
        quantity: string;
        desc: string;
        farmerID: string;
    }, ExtArgs["result"]["herbData"]>;
    composites: {};
};
export type HerbDataGetPayload<S extends boolean | null | undefined | HerbDataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HerbDataPayload, S>;
export type HerbDataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HerbDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HerbDataCountAggregateInputType | true;
};
export interface HerbDataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HerbData'];
        meta: {
            name: 'HerbData';
        };
    };
    /**
     * Find zero or one HerbData that matches the filter.
     * @param {HerbDataFindUniqueArgs} args - Arguments to find a HerbData
     * @example
     * // Get one HerbData
     * const herbData = await prisma.herbData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HerbDataFindUniqueArgs>(args: Prisma.SelectSubset<T, HerbDataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HerbDataClient<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one HerbData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HerbDataFindUniqueOrThrowArgs} args - Arguments to find a HerbData
     * @example
     * // Get one HerbData
     * const herbData = await prisma.herbData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HerbDataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HerbDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HerbDataClient<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HerbData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbDataFindFirstArgs} args - Arguments to find a HerbData
     * @example
     * // Get one HerbData
     * const herbData = await prisma.herbData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HerbDataFindFirstArgs>(args?: Prisma.SelectSubset<T, HerbDataFindFirstArgs<ExtArgs>>): Prisma.Prisma__HerbDataClient<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HerbData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbDataFindFirstOrThrowArgs} args - Arguments to find a HerbData
     * @example
     * // Get one HerbData
     * const herbData = await prisma.herbData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HerbDataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HerbDataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HerbDataClient<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more HerbData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HerbData
     * const herbData = await prisma.herbData.findMany()
     *
     * // Get first 10 HerbData
     * const herbData = await prisma.herbData.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const herbDataWithIdOnly = await prisma.herbData.findMany({ select: { id: true } })
     *
     */
    findMany<T extends HerbDataFindManyArgs>(args?: Prisma.SelectSubset<T, HerbDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a HerbData.
     * @param {HerbDataCreateArgs} args - Arguments to create a HerbData.
     * @example
     * // Create one HerbData
     * const HerbData = await prisma.herbData.create({
     *   data: {
     *     // ... data to create a HerbData
     *   }
     * })
     *
     */
    create<T extends HerbDataCreateArgs>(args: Prisma.SelectSubset<T, HerbDataCreateArgs<ExtArgs>>): Prisma.Prisma__HerbDataClient<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many HerbData.
     * @param {HerbDataCreateManyArgs} args - Arguments to create many HerbData.
     * @example
     * // Create many HerbData
     * const herbData = await prisma.herbData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends HerbDataCreateManyArgs>(args?: Prisma.SelectSubset<T, HerbDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many HerbData and returns the data saved in the database.
     * @param {HerbDataCreateManyAndReturnArgs} args - Arguments to create many HerbData.
     * @example
     * // Create many HerbData
     * const herbData = await prisma.herbData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many HerbData and only return the `id`
     * const herbDataWithIdOnly = await prisma.herbData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends HerbDataCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HerbDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a HerbData.
     * @param {HerbDataDeleteArgs} args - Arguments to delete one HerbData.
     * @example
     * // Delete one HerbData
     * const HerbData = await prisma.herbData.delete({
     *   where: {
     *     // ... filter to delete one HerbData
     *   }
     * })
     *
     */
    delete<T extends HerbDataDeleteArgs>(args: Prisma.SelectSubset<T, HerbDataDeleteArgs<ExtArgs>>): Prisma.Prisma__HerbDataClient<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one HerbData.
     * @param {HerbDataUpdateArgs} args - Arguments to update one HerbData.
     * @example
     * // Update one HerbData
     * const herbData = await prisma.herbData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends HerbDataUpdateArgs>(args: Prisma.SelectSubset<T, HerbDataUpdateArgs<ExtArgs>>): Prisma.Prisma__HerbDataClient<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more HerbData.
     * @param {HerbDataDeleteManyArgs} args - Arguments to filter HerbData to delete.
     * @example
     * // Delete a few HerbData
     * const { count } = await prisma.herbData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends HerbDataDeleteManyArgs>(args?: Prisma.SelectSubset<T, HerbDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HerbData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HerbData
     * const herbData = await prisma.herbData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends HerbDataUpdateManyArgs>(args: Prisma.SelectSubset<T, HerbDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HerbData and returns the data updated in the database.
     * @param {HerbDataUpdateManyAndReturnArgs} args - Arguments to update many HerbData.
     * @example
     * // Update many HerbData
     * const herbData = await prisma.herbData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more HerbData and only return the `id`
     * const herbDataWithIdOnly = await prisma.herbData.updateManyAndReturn({
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
    updateManyAndReturn<T extends HerbDataUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HerbDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one HerbData.
     * @param {HerbDataUpsertArgs} args - Arguments to update or create a HerbData.
     * @example
     * // Update or create a HerbData
     * const herbData = await prisma.herbData.upsert({
     *   create: {
     *     // ... data to create a HerbData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HerbData we want to update
     *   }
     * })
     */
    upsert<T extends HerbDataUpsertArgs>(args: Prisma.SelectSubset<T, HerbDataUpsertArgs<ExtArgs>>): Prisma.Prisma__HerbDataClient<runtime.Types.Result.GetResult<Prisma.$HerbDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of HerbData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbDataCountArgs} args - Arguments to filter HerbData to count.
     * @example
     * // Count the number of HerbData
     * const count = await prisma.herbData.count({
     *   where: {
     *     // ... the filter for the HerbData we want to count
     *   }
     * })
    **/
    count<T extends HerbDataCountArgs>(args?: Prisma.Subset<T, HerbDataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HerbDataCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a HerbData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HerbDataAggregateArgs>(args: Prisma.Subset<T, HerbDataAggregateArgs>): Prisma.PrismaPromise<GetHerbDataAggregateType<T>>;
    /**
     * Group by HerbData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbDataGroupByArgs} args - Group by arguments.
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
    groupBy<T extends HerbDataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HerbDataGroupByArgs['orderBy'];
    } : {
        orderBy?: HerbDataGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HerbDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHerbDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the HerbData model
     */
    readonly fields: HerbDataFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for HerbData.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__HerbDataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    farmer<T extends Prisma.FarmerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmerDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmerClient<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the HerbData model
 */
export interface HerbDataFieldRefs {
    readonly id: Prisma.FieldRef<"HerbData", 'String'>;
    readonly herbname: Prisma.FieldRef<"HerbData", 'String'>;
    readonly harvestDate: Prisma.FieldRef<"HerbData", 'String'>;
    readonly coordinates: Prisma.FieldRef<"HerbData", 'String'>;
    readonly pesticidesUsed: Prisma.FieldRef<"HerbData", 'Boolean'>;
    readonly quantity: Prisma.FieldRef<"HerbData", 'String'>;
    readonly desc: Prisma.FieldRef<"HerbData", 'String'>;
    readonly farmerID: Prisma.FieldRef<"HerbData", 'String'>;
}
/**
 * HerbData findUnique
 */
export type HerbDataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataInclude<ExtArgs> | null;
    /**
     * Filter, which HerbData to fetch.
     */
    where: Prisma.HerbDataWhereUniqueInput;
};
/**
 * HerbData findUniqueOrThrow
 */
export type HerbDataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataInclude<ExtArgs> | null;
    /**
     * Filter, which HerbData to fetch.
     */
    where: Prisma.HerbDataWhereUniqueInput;
};
/**
 * HerbData findFirst
 */
export type HerbDataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataInclude<ExtArgs> | null;
    /**
     * Filter, which HerbData to fetch.
     */
    where?: Prisma.HerbDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HerbData to fetch.
     */
    orderBy?: Prisma.HerbDataOrderByWithRelationInput | Prisma.HerbDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HerbData.
     */
    cursor?: Prisma.HerbDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HerbData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HerbData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HerbData.
     */
    distinct?: Prisma.HerbDataScalarFieldEnum | Prisma.HerbDataScalarFieldEnum[];
};
/**
 * HerbData findFirstOrThrow
 */
export type HerbDataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataInclude<ExtArgs> | null;
    /**
     * Filter, which HerbData to fetch.
     */
    where?: Prisma.HerbDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HerbData to fetch.
     */
    orderBy?: Prisma.HerbDataOrderByWithRelationInput | Prisma.HerbDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HerbData.
     */
    cursor?: Prisma.HerbDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HerbData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HerbData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HerbData.
     */
    distinct?: Prisma.HerbDataScalarFieldEnum | Prisma.HerbDataScalarFieldEnum[];
};
/**
 * HerbData findMany
 */
export type HerbDataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataInclude<ExtArgs> | null;
    /**
     * Filter, which HerbData to fetch.
     */
    where?: Prisma.HerbDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HerbData to fetch.
     */
    orderBy?: Prisma.HerbDataOrderByWithRelationInput | Prisma.HerbDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing HerbData.
     */
    cursor?: Prisma.HerbDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HerbData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HerbData.
     */
    skip?: number;
    distinct?: Prisma.HerbDataScalarFieldEnum | Prisma.HerbDataScalarFieldEnum[];
};
/**
 * HerbData create
 */
export type HerbDataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataInclude<ExtArgs> | null;
    /**
     * The data needed to create a HerbData.
     */
    data: Prisma.XOR<Prisma.HerbDataCreateInput, Prisma.HerbDataUncheckedCreateInput>;
};
/**
 * HerbData createMany
 */
export type HerbDataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many HerbData.
     */
    data: Prisma.HerbDataCreateManyInput | Prisma.HerbDataCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * HerbData createManyAndReturn
 */
export type HerbDataCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * The data used to create many HerbData.
     */
    data: Prisma.HerbDataCreateManyInput | Prisma.HerbDataCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * HerbData update
 */
export type HerbDataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataInclude<ExtArgs> | null;
    /**
     * The data needed to update a HerbData.
     */
    data: Prisma.XOR<Prisma.HerbDataUpdateInput, Prisma.HerbDataUncheckedUpdateInput>;
    /**
     * Choose, which HerbData to update.
     */
    where: Prisma.HerbDataWhereUniqueInput;
};
/**
 * HerbData updateMany
 */
export type HerbDataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update HerbData.
     */
    data: Prisma.XOR<Prisma.HerbDataUpdateManyMutationInput, Prisma.HerbDataUncheckedUpdateManyInput>;
    /**
     * Filter which HerbData to update
     */
    where?: Prisma.HerbDataWhereInput;
    /**
     * Limit how many HerbData to update.
     */
    limit?: number;
};
/**
 * HerbData updateManyAndReturn
 */
export type HerbDataUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * The data used to update HerbData.
     */
    data: Prisma.XOR<Prisma.HerbDataUpdateManyMutationInput, Prisma.HerbDataUncheckedUpdateManyInput>;
    /**
     * Filter which HerbData to update
     */
    where?: Prisma.HerbDataWhereInput;
    /**
     * Limit how many HerbData to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * HerbData upsert
 */
export type HerbDataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataInclude<ExtArgs> | null;
    /**
     * The filter to search for the HerbData to update in case it exists.
     */
    where: Prisma.HerbDataWhereUniqueInput;
    /**
     * In case the HerbData found by the `where` argument doesn't exist, create a new HerbData with this data.
     */
    create: Prisma.XOR<Prisma.HerbDataCreateInput, Prisma.HerbDataUncheckedCreateInput>;
    /**
     * In case the HerbData was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.HerbDataUpdateInput, Prisma.HerbDataUncheckedUpdateInput>;
};
/**
 * HerbData delete
 */
export type HerbDataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataInclude<ExtArgs> | null;
    /**
     * Filter which HerbData to delete.
     */
    where: Prisma.HerbDataWhereUniqueInput;
};
/**
 * HerbData deleteMany
 */
export type HerbDataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HerbData to delete
     */
    where?: Prisma.HerbDataWhereInput;
    /**
     * Limit how many HerbData to delete.
     */
    limit?: number;
};
/**
 * HerbData without action
 */
export type HerbDataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbData
     */
    select?: Prisma.HerbDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HerbData
     */
    omit?: Prisma.HerbDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HerbDataInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=HerbData.d.ts.map