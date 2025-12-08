import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ManufacturerProduct
 *
 */
export type ManufacturerProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ManufacturerProductPayload>;
export type AggregateManufacturerProduct = {
    _count: ManufacturerProductCountAggregateOutputType | null;
    _min: ManufacturerProductMinAggregateOutputType | null;
    _max: ManufacturerProductMaxAggregateOutputType | null;
};
export type ManufacturerProductMinAggregateOutputType = {
    id: string | null;
    manufacturerId: string | null;
};
export type ManufacturerProductMaxAggregateOutputType = {
    id: string | null;
    manufacturerId: string | null;
};
export type ManufacturerProductCountAggregateOutputType = {
    id: number;
    manufacturerId: number;
    _all: number;
};
export type ManufacturerProductMinAggregateInputType = {
    id?: true;
    manufacturerId?: true;
};
export type ManufacturerProductMaxAggregateInputType = {
    id?: true;
    manufacturerId?: true;
};
export type ManufacturerProductCountAggregateInputType = {
    id?: true;
    manufacturerId?: true;
    _all?: true;
};
export type ManufacturerProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ManufacturerProduct to aggregate.
     */
    where?: Prisma.ManufacturerProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ManufacturerProducts to fetch.
     */
    orderBy?: Prisma.ManufacturerProductOrderByWithRelationInput | Prisma.ManufacturerProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ManufacturerProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ManufacturerProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ManufacturerProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ManufacturerProducts
    **/
    _count?: true | ManufacturerProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ManufacturerProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ManufacturerProductMaxAggregateInputType;
};
export type GetManufacturerProductAggregateType<T extends ManufacturerProductAggregateArgs> = {
    [P in keyof T & keyof AggregateManufacturerProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateManufacturerProduct[P]> : Prisma.GetScalarType<T[P], AggregateManufacturerProduct[P]>;
};
export type ManufacturerProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ManufacturerProductWhereInput;
    orderBy?: Prisma.ManufacturerProductOrderByWithAggregationInput | Prisma.ManufacturerProductOrderByWithAggregationInput[];
    by: Prisma.ManufacturerProductScalarFieldEnum[] | Prisma.ManufacturerProductScalarFieldEnum;
    having?: Prisma.ManufacturerProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ManufacturerProductCountAggregateInputType | true;
    _min?: ManufacturerProductMinAggregateInputType;
    _max?: ManufacturerProductMaxAggregateInputType;
};
export type ManufacturerProductGroupByOutputType = {
    id: string;
    manufacturerId: string;
    _count: ManufacturerProductCountAggregateOutputType | null;
    _min: ManufacturerProductMinAggregateOutputType | null;
    _max: ManufacturerProductMaxAggregateOutputType | null;
};
type GetManufacturerProductGroupByPayload<T extends ManufacturerProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ManufacturerProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ManufacturerProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ManufacturerProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ManufacturerProductGroupByOutputType[P]>;
}>>;
export type ManufacturerProductWhereInput = {
    AND?: Prisma.ManufacturerProductWhereInput | Prisma.ManufacturerProductWhereInput[];
    OR?: Prisma.ManufacturerProductWhereInput[];
    NOT?: Prisma.ManufacturerProductWhereInput | Prisma.ManufacturerProductWhereInput[];
    id?: Prisma.StringFilter<"ManufacturerProduct"> | string;
    manufacturerId?: Prisma.StringFilter<"ManufacturerProduct"> | string;
    manufacturer?: Prisma.XOR<Prisma.ManufacturerScalarRelationFilter, Prisma.ManufacturerWhereInput>;
};
export type ManufacturerProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    manufacturerId?: Prisma.SortOrder;
    manufacturer?: Prisma.ManufacturerOrderByWithRelationInput;
};
export type ManufacturerProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ManufacturerProductWhereInput | Prisma.ManufacturerProductWhereInput[];
    OR?: Prisma.ManufacturerProductWhereInput[];
    NOT?: Prisma.ManufacturerProductWhereInput | Prisma.ManufacturerProductWhereInput[];
    manufacturerId?: Prisma.StringFilter<"ManufacturerProduct"> | string;
    manufacturer?: Prisma.XOR<Prisma.ManufacturerScalarRelationFilter, Prisma.ManufacturerWhereInput>;
}, "id">;
export type ManufacturerProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    manufacturerId?: Prisma.SortOrder;
    _count?: Prisma.ManufacturerProductCountOrderByAggregateInput;
    _max?: Prisma.ManufacturerProductMaxOrderByAggregateInput;
    _min?: Prisma.ManufacturerProductMinOrderByAggregateInput;
};
export type ManufacturerProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ManufacturerProductScalarWhereWithAggregatesInput | Prisma.ManufacturerProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ManufacturerProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ManufacturerProductScalarWhereWithAggregatesInput | Prisma.ManufacturerProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ManufacturerProduct"> | string;
    manufacturerId?: Prisma.StringWithAggregatesFilter<"ManufacturerProduct"> | string;
};
export type ManufacturerProductCreateInput = {
    id?: string;
    manufacturer: Prisma.ManufacturerCreateNestedOneWithoutProductsInput;
};
export type ManufacturerProductUncheckedCreateInput = {
    id?: string;
    manufacturerId: string;
};
export type ManufacturerProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.ManufacturerUpdateOneRequiredWithoutProductsNestedInput;
};
export type ManufacturerProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerProductCreateManyInput = {
    id?: string;
    manufacturerId: string;
};
export type ManufacturerProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerProductListRelationFilter = {
    every?: Prisma.ManufacturerProductWhereInput;
    some?: Prisma.ManufacturerProductWhereInput;
    none?: Prisma.ManufacturerProductWhereInput;
};
export type ManufacturerProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ManufacturerProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    manufacturerId?: Prisma.SortOrder;
};
export type ManufacturerProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    manufacturerId?: Prisma.SortOrder;
};
export type ManufacturerProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    manufacturerId?: Prisma.SortOrder;
};
export type ManufacturerProductCreateNestedManyWithoutManufacturerInput = {
    create?: Prisma.XOR<Prisma.ManufacturerProductCreateWithoutManufacturerInput, Prisma.ManufacturerProductUncheckedCreateWithoutManufacturerInput> | Prisma.ManufacturerProductCreateWithoutManufacturerInput[] | Prisma.ManufacturerProductUncheckedCreateWithoutManufacturerInput[];
    connectOrCreate?: Prisma.ManufacturerProductCreateOrConnectWithoutManufacturerInput | Prisma.ManufacturerProductCreateOrConnectWithoutManufacturerInput[];
    createMany?: Prisma.ManufacturerProductCreateManyManufacturerInputEnvelope;
    connect?: Prisma.ManufacturerProductWhereUniqueInput | Prisma.ManufacturerProductWhereUniqueInput[];
};
export type ManufacturerProductUncheckedCreateNestedManyWithoutManufacturerInput = {
    create?: Prisma.XOR<Prisma.ManufacturerProductCreateWithoutManufacturerInput, Prisma.ManufacturerProductUncheckedCreateWithoutManufacturerInput> | Prisma.ManufacturerProductCreateWithoutManufacturerInput[] | Prisma.ManufacturerProductUncheckedCreateWithoutManufacturerInput[];
    connectOrCreate?: Prisma.ManufacturerProductCreateOrConnectWithoutManufacturerInput | Prisma.ManufacturerProductCreateOrConnectWithoutManufacturerInput[];
    createMany?: Prisma.ManufacturerProductCreateManyManufacturerInputEnvelope;
    connect?: Prisma.ManufacturerProductWhereUniqueInput | Prisma.ManufacturerProductWhereUniqueInput[];
};
export type ManufacturerProductUpdateManyWithoutManufacturerNestedInput = {
    create?: Prisma.XOR<Prisma.ManufacturerProductCreateWithoutManufacturerInput, Prisma.ManufacturerProductUncheckedCreateWithoutManufacturerInput> | Prisma.ManufacturerProductCreateWithoutManufacturerInput[] | Prisma.ManufacturerProductUncheckedCreateWithoutManufacturerInput[];
    connectOrCreate?: Prisma.ManufacturerProductCreateOrConnectWithoutManufacturerInput | Prisma.ManufacturerProductCreateOrConnectWithoutManufacturerInput[];
    upsert?: Prisma.ManufacturerProductUpsertWithWhereUniqueWithoutManufacturerInput | Prisma.ManufacturerProductUpsertWithWhereUniqueWithoutManufacturerInput[];
    createMany?: Prisma.ManufacturerProductCreateManyManufacturerInputEnvelope;
    set?: Prisma.ManufacturerProductWhereUniqueInput | Prisma.ManufacturerProductWhereUniqueInput[];
    disconnect?: Prisma.ManufacturerProductWhereUniqueInput | Prisma.ManufacturerProductWhereUniqueInput[];
    delete?: Prisma.ManufacturerProductWhereUniqueInput | Prisma.ManufacturerProductWhereUniqueInput[];
    connect?: Prisma.ManufacturerProductWhereUniqueInput | Prisma.ManufacturerProductWhereUniqueInput[];
    update?: Prisma.ManufacturerProductUpdateWithWhereUniqueWithoutManufacturerInput | Prisma.ManufacturerProductUpdateWithWhereUniqueWithoutManufacturerInput[];
    updateMany?: Prisma.ManufacturerProductUpdateManyWithWhereWithoutManufacturerInput | Prisma.ManufacturerProductUpdateManyWithWhereWithoutManufacturerInput[];
    deleteMany?: Prisma.ManufacturerProductScalarWhereInput | Prisma.ManufacturerProductScalarWhereInput[];
};
export type ManufacturerProductUncheckedUpdateManyWithoutManufacturerNestedInput = {
    create?: Prisma.XOR<Prisma.ManufacturerProductCreateWithoutManufacturerInput, Prisma.ManufacturerProductUncheckedCreateWithoutManufacturerInput> | Prisma.ManufacturerProductCreateWithoutManufacturerInput[] | Prisma.ManufacturerProductUncheckedCreateWithoutManufacturerInput[];
    connectOrCreate?: Prisma.ManufacturerProductCreateOrConnectWithoutManufacturerInput | Prisma.ManufacturerProductCreateOrConnectWithoutManufacturerInput[];
    upsert?: Prisma.ManufacturerProductUpsertWithWhereUniqueWithoutManufacturerInput | Prisma.ManufacturerProductUpsertWithWhereUniqueWithoutManufacturerInput[];
    createMany?: Prisma.ManufacturerProductCreateManyManufacturerInputEnvelope;
    set?: Prisma.ManufacturerProductWhereUniqueInput | Prisma.ManufacturerProductWhereUniqueInput[];
    disconnect?: Prisma.ManufacturerProductWhereUniqueInput | Prisma.ManufacturerProductWhereUniqueInput[];
    delete?: Prisma.ManufacturerProductWhereUniqueInput | Prisma.ManufacturerProductWhereUniqueInput[];
    connect?: Prisma.ManufacturerProductWhereUniqueInput | Prisma.ManufacturerProductWhereUniqueInput[];
    update?: Prisma.ManufacturerProductUpdateWithWhereUniqueWithoutManufacturerInput | Prisma.ManufacturerProductUpdateWithWhereUniqueWithoutManufacturerInput[];
    updateMany?: Prisma.ManufacturerProductUpdateManyWithWhereWithoutManufacturerInput | Prisma.ManufacturerProductUpdateManyWithWhereWithoutManufacturerInput[];
    deleteMany?: Prisma.ManufacturerProductScalarWhereInput | Prisma.ManufacturerProductScalarWhereInput[];
};
export type ManufacturerProductCreateWithoutManufacturerInput = {
    id?: string;
};
export type ManufacturerProductUncheckedCreateWithoutManufacturerInput = {
    id?: string;
};
export type ManufacturerProductCreateOrConnectWithoutManufacturerInput = {
    where: Prisma.ManufacturerProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ManufacturerProductCreateWithoutManufacturerInput, Prisma.ManufacturerProductUncheckedCreateWithoutManufacturerInput>;
};
export type ManufacturerProductCreateManyManufacturerInputEnvelope = {
    data: Prisma.ManufacturerProductCreateManyManufacturerInput | Prisma.ManufacturerProductCreateManyManufacturerInput[];
    skipDuplicates?: boolean;
};
export type ManufacturerProductUpsertWithWhereUniqueWithoutManufacturerInput = {
    where: Prisma.ManufacturerProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ManufacturerProductUpdateWithoutManufacturerInput, Prisma.ManufacturerProductUncheckedUpdateWithoutManufacturerInput>;
    create: Prisma.XOR<Prisma.ManufacturerProductCreateWithoutManufacturerInput, Prisma.ManufacturerProductUncheckedCreateWithoutManufacturerInput>;
};
export type ManufacturerProductUpdateWithWhereUniqueWithoutManufacturerInput = {
    where: Prisma.ManufacturerProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ManufacturerProductUpdateWithoutManufacturerInput, Prisma.ManufacturerProductUncheckedUpdateWithoutManufacturerInput>;
};
export type ManufacturerProductUpdateManyWithWhereWithoutManufacturerInput = {
    where: Prisma.ManufacturerProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ManufacturerProductUpdateManyMutationInput, Prisma.ManufacturerProductUncheckedUpdateManyWithoutManufacturerInput>;
};
export type ManufacturerProductScalarWhereInput = {
    AND?: Prisma.ManufacturerProductScalarWhereInput | Prisma.ManufacturerProductScalarWhereInput[];
    OR?: Prisma.ManufacturerProductScalarWhereInput[];
    NOT?: Prisma.ManufacturerProductScalarWhereInput | Prisma.ManufacturerProductScalarWhereInput[];
    id?: Prisma.StringFilter<"ManufacturerProduct"> | string;
    manufacturerId?: Prisma.StringFilter<"ManufacturerProduct"> | string;
};
export type ManufacturerProductCreateManyManufacturerInput = {
    id?: string;
};
export type ManufacturerProductUpdateWithoutManufacturerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerProductUncheckedUpdateWithoutManufacturerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerProductUncheckedUpdateManyWithoutManufacturerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ManufacturerProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    manufacturerId?: boolean;
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["manufacturerProduct"]>;
export type ManufacturerProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    manufacturerId?: boolean;
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["manufacturerProduct"]>;
export type ManufacturerProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    manufacturerId?: boolean;
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["manufacturerProduct"]>;
export type ManufacturerProductSelectScalar = {
    id?: boolean;
    manufacturerId?: boolean;
};
export type ManufacturerProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "manufacturerId", ExtArgs["result"]["manufacturerProduct"]>;
export type ManufacturerProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
};
export type ManufacturerProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
};
export type ManufacturerProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manufacturer?: boolean | Prisma.ManufacturerDefaultArgs<ExtArgs>;
};
export type $ManufacturerProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ManufacturerProduct";
    objects: {
        manufacturer: Prisma.$ManufacturerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        manufacturerId: string;
    }, ExtArgs["result"]["manufacturerProduct"]>;
    composites: {};
};
export type ManufacturerProductGetPayload<S extends boolean | null | undefined | ManufacturerProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload, S>;
export type ManufacturerProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ManufacturerProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ManufacturerProductCountAggregateInputType | true;
};
export interface ManufacturerProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ManufacturerProduct'];
        meta: {
            name: 'ManufacturerProduct';
        };
    };
    /**
     * Find zero or one ManufacturerProduct that matches the filter.
     * @param {ManufacturerProductFindUniqueArgs} args - Arguments to find a ManufacturerProduct
     * @example
     * // Get one ManufacturerProduct
     * const manufacturerProduct = await prisma.manufacturerProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManufacturerProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ManufacturerProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ManufacturerProductClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ManufacturerProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManufacturerProductFindUniqueOrThrowArgs} args - Arguments to find a ManufacturerProduct
     * @example
     * // Get one ManufacturerProduct
     * const manufacturerProduct = await prisma.manufacturerProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManufacturerProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ManufacturerProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ManufacturerProductClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ManufacturerProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerProductFindFirstArgs} args - Arguments to find a ManufacturerProduct
     * @example
     * // Get one ManufacturerProduct
     * const manufacturerProduct = await prisma.manufacturerProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManufacturerProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ManufacturerProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ManufacturerProductClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ManufacturerProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerProductFindFirstOrThrowArgs} args - Arguments to find a ManufacturerProduct
     * @example
     * // Get one ManufacturerProduct
     * const manufacturerProduct = await prisma.manufacturerProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManufacturerProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ManufacturerProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ManufacturerProductClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ManufacturerProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManufacturerProducts
     * const manufacturerProducts = await prisma.manufacturerProduct.findMany()
     *
     * // Get first 10 ManufacturerProducts
     * const manufacturerProducts = await prisma.manufacturerProduct.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const manufacturerProductWithIdOnly = await prisma.manufacturerProduct.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ManufacturerProductFindManyArgs>(args?: Prisma.SelectSubset<T, ManufacturerProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ManufacturerProduct.
     * @param {ManufacturerProductCreateArgs} args - Arguments to create a ManufacturerProduct.
     * @example
     * // Create one ManufacturerProduct
     * const ManufacturerProduct = await prisma.manufacturerProduct.create({
     *   data: {
     *     // ... data to create a ManufacturerProduct
     *   }
     * })
     *
     */
    create<T extends ManufacturerProductCreateArgs>(args: Prisma.SelectSubset<T, ManufacturerProductCreateArgs<ExtArgs>>): Prisma.Prisma__ManufacturerProductClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ManufacturerProducts.
     * @param {ManufacturerProductCreateManyArgs} args - Arguments to create many ManufacturerProducts.
     * @example
     * // Create many ManufacturerProducts
     * const manufacturerProduct = await prisma.manufacturerProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ManufacturerProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ManufacturerProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ManufacturerProducts and returns the data saved in the database.
     * @param {ManufacturerProductCreateManyAndReturnArgs} args - Arguments to create many ManufacturerProducts.
     * @example
     * // Create many ManufacturerProducts
     * const manufacturerProduct = await prisma.manufacturerProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ManufacturerProducts and only return the `id`
     * const manufacturerProductWithIdOnly = await prisma.manufacturerProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ManufacturerProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ManufacturerProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ManufacturerProduct.
     * @param {ManufacturerProductDeleteArgs} args - Arguments to delete one ManufacturerProduct.
     * @example
     * // Delete one ManufacturerProduct
     * const ManufacturerProduct = await prisma.manufacturerProduct.delete({
     *   where: {
     *     // ... filter to delete one ManufacturerProduct
     *   }
     * })
     *
     */
    delete<T extends ManufacturerProductDeleteArgs>(args: Prisma.SelectSubset<T, ManufacturerProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ManufacturerProductClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ManufacturerProduct.
     * @param {ManufacturerProductUpdateArgs} args - Arguments to update one ManufacturerProduct.
     * @example
     * // Update one ManufacturerProduct
     * const manufacturerProduct = await prisma.manufacturerProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ManufacturerProductUpdateArgs>(args: Prisma.SelectSubset<T, ManufacturerProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ManufacturerProductClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ManufacturerProducts.
     * @param {ManufacturerProductDeleteManyArgs} args - Arguments to filter ManufacturerProducts to delete.
     * @example
     * // Delete a few ManufacturerProducts
     * const { count } = await prisma.manufacturerProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ManufacturerProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ManufacturerProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ManufacturerProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManufacturerProducts
     * const manufacturerProduct = await prisma.manufacturerProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ManufacturerProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ManufacturerProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ManufacturerProducts and returns the data updated in the database.
     * @param {ManufacturerProductUpdateManyAndReturnArgs} args - Arguments to update many ManufacturerProducts.
     * @example
     * // Update many ManufacturerProducts
     * const manufacturerProduct = await prisma.manufacturerProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ManufacturerProducts and only return the `id`
     * const manufacturerProductWithIdOnly = await prisma.manufacturerProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends ManufacturerProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ManufacturerProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ManufacturerProduct.
     * @param {ManufacturerProductUpsertArgs} args - Arguments to update or create a ManufacturerProduct.
     * @example
     * // Update or create a ManufacturerProduct
     * const manufacturerProduct = await prisma.manufacturerProduct.upsert({
     *   create: {
     *     // ... data to create a ManufacturerProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManufacturerProduct we want to update
     *   }
     * })
     */
    upsert<T extends ManufacturerProductUpsertArgs>(args: Prisma.SelectSubset<T, ManufacturerProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ManufacturerProductClient<runtime.Types.Result.GetResult<Prisma.$ManufacturerProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ManufacturerProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerProductCountArgs} args - Arguments to filter ManufacturerProducts to count.
     * @example
     * // Count the number of ManufacturerProducts
     * const count = await prisma.manufacturerProduct.count({
     *   where: {
     *     // ... the filter for the ManufacturerProducts we want to count
     *   }
     * })
    **/
    count<T extends ManufacturerProductCountArgs>(args?: Prisma.Subset<T, ManufacturerProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ManufacturerProductCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ManufacturerProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManufacturerProductAggregateArgs>(args: Prisma.Subset<T, ManufacturerProductAggregateArgs>): Prisma.PrismaPromise<GetManufacturerProductAggregateType<T>>;
    /**
     * Group by ManufacturerProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerProductGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ManufacturerProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ManufacturerProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ManufacturerProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ManufacturerProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacturerProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ManufacturerProduct model
     */
    readonly fields: ManufacturerProductFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ManufacturerProduct.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ManufacturerProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ManufacturerProduct model
 */
export interface ManufacturerProductFieldRefs {
    readonly id: Prisma.FieldRef<"ManufacturerProduct", 'String'>;
    readonly manufacturerId: Prisma.FieldRef<"ManufacturerProduct", 'String'>;
}
/**
 * ManufacturerProduct findUnique
 */
export type ManufacturerProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductInclude<ExtArgs> | null;
    /**
     * Filter, which ManufacturerProduct to fetch.
     */
    where: Prisma.ManufacturerProductWhereUniqueInput;
};
/**
 * ManufacturerProduct findUniqueOrThrow
 */
export type ManufacturerProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductInclude<ExtArgs> | null;
    /**
     * Filter, which ManufacturerProduct to fetch.
     */
    where: Prisma.ManufacturerProductWhereUniqueInput;
};
/**
 * ManufacturerProduct findFirst
 */
export type ManufacturerProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductInclude<ExtArgs> | null;
    /**
     * Filter, which ManufacturerProduct to fetch.
     */
    where?: Prisma.ManufacturerProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ManufacturerProducts to fetch.
     */
    orderBy?: Prisma.ManufacturerProductOrderByWithRelationInput | Prisma.ManufacturerProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ManufacturerProducts.
     */
    cursor?: Prisma.ManufacturerProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ManufacturerProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ManufacturerProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ManufacturerProducts.
     */
    distinct?: Prisma.ManufacturerProductScalarFieldEnum | Prisma.ManufacturerProductScalarFieldEnum[];
};
/**
 * ManufacturerProduct findFirstOrThrow
 */
export type ManufacturerProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductInclude<ExtArgs> | null;
    /**
     * Filter, which ManufacturerProduct to fetch.
     */
    where?: Prisma.ManufacturerProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ManufacturerProducts to fetch.
     */
    orderBy?: Prisma.ManufacturerProductOrderByWithRelationInput | Prisma.ManufacturerProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ManufacturerProducts.
     */
    cursor?: Prisma.ManufacturerProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ManufacturerProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ManufacturerProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ManufacturerProducts.
     */
    distinct?: Prisma.ManufacturerProductScalarFieldEnum | Prisma.ManufacturerProductScalarFieldEnum[];
};
/**
 * ManufacturerProduct findMany
 */
export type ManufacturerProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductInclude<ExtArgs> | null;
    /**
     * Filter, which ManufacturerProducts to fetch.
     */
    where?: Prisma.ManufacturerProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ManufacturerProducts to fetch.
     */
    orderBy?: Prisma.ManufacturerProductOrderByWithRelationInput | Prisma.ManufacturerProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ManufacturerProducts.
     */
    cursor?: Prisma.ManufacturerProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ManufacturerProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ManufacturerProducts.
     */
    skip?: number;
    distinct?: Prisma.ManufacturerProductScalarFieldEnum | Prisma.ManufacturerProductScalarFieldEnum[];
};
/**
 * ManufacturerProduct create
 */
export type ManufacturerProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a ManufacturerProduct.
     */
    data: Prisma.XOR<Prisma.ManufacturerProductCreateInput, Prisma.ManufacturerProductUncheckedCreateInput>;
};
/**
 * ManufacturerProduct createMany
 */
export type ManufacturerProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManufacturerProducts.
     */
    data: Prisma.ManufacturerProductCreateManyInput | Prisma.ManufacturerProductCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ManufacturerProduct createManyAndReturn
 */
export type ManufacturerProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * The data used to create many ManufacturerProducts.
     */
    data: Prisma.ManufacturerProductCreateManyInput | Prisma.ManufacturerProductCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ManufacturerProduct update
 */
export type ManufacturerProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a ManufacturerProduct.
     */
    data: Prisma.XOR<Prisma.ManufacturerProductUpdateInput, Prisma.ManufacturerProductUncheckedUpdateInput>;
    /**
     * Choose, which ManufacturerProduct to update.
     */
    where: Prisma.ManufacturerProductWhereUniqueInput;
};
/**
 * ManufacturerProduct updateMany
 */
export type ManufacturerProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ManufacturerProducts.
     */
    data: Prisma.XOR<Prisma.ManufacturerProductUpdateManyMutationInput, Prisma.ManufacturerProductUncheckedUpdateManyInput>;
    /**
     * Filter which ManufacturerProducts to update
     */
    where?: Prisma.ManufacturerProductWhereInput;
    /**
     * Limit how many ManufacturerProducts to update.
     */
    limit?: number;
};
/**
 * ManufacturerProduct updateManyAndReturn
 */
export type ManufacturerProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * The data used to update ManufacturerProducts.
     */
    data: Prisma.XOR<Prisma.ManufacturerProductUpdateManyMutationInput, Prisma.ManufacturerProductUncheckedUpdateManyInput>;
    /**
     * Filter which ManufacturerProducts to update
     */
    where?: Prisma.ManufacturerProductWhereInput;
    /**
     * Limit how many ManufacturerProducts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ManufacturerProduct upsert
 */
export type ManufacturerProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the ManufacturerProduct to update in case it exists.
     */
    where: Prisma.ManufacturerProductWhereUniqueInput;
    /**
     * In case the ManufacturerProduct found by the `where` argument doesn't exist, create a new ManufacturerProduct with this data.
     */
    create: Prisma.XOR<Prisma.ManufacturerProductCreateInput, Prisma.ManufacturerProductUncheckedCreateInput>;
    /**
     * In case the ManufacturerProduct was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ManufacturerProductUpdateInput, Prisma.ManufacturerProductUncheckedUpdateInput>;
};
/**
 * ManufacturerProduct delete
 */
export type ManufacturerProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductInclude<ExtArgs> | null;
    /**
     * Filter which ManufacturerProduct to delete.
     */
    where: Prisma.ManufacturerProductWhereUniqueInput;
};
/**
 * ManufacturerProduct deleteMany
 */
export type ManufacturerProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ManufacturerProducts to delete
     */
    where?: Prisma.ManufacturerProductWhereInput;
    /**
     * Limit how many ManufacturerProducts to delete.
     */
    limit?: number;
};
/**
 * ManufacturerProduct without action
 */
export type ManufacturerProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerProduct
     */
    select?: Prisma.ManufacturerProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ManufacturerProduct
     */
    omit?: Prisma.ManufacturerProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ManufacturerProductInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ManufacturerProduct.d.ts.map