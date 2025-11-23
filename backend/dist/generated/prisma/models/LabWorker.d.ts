import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LabWorker
 *
 */
export type LabWorkerModel = runtime.Types.Result.DefaultSelection<Prisma.$LabWorkerPayload>;
export type AggregateLabWorker = {
    _count: LabWorkerCountAggregateOutputType | null;
    _min: LabWorkerMinAggregateOutputType | null;
    _max: LabWorkerMaxAggregateOutputType | null;
};
export type LabWorkerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    workerId: string | null;
    role: $Enums.RoleType | null;
    desc: string | null;
    labID: string | null;
};
export type LabWorkerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    workerId: string | null;
    role: $Enums.RoleType | null;
    desc: string | null;
    labID: string | null;
};
export type LabWorkerCountAggregateOutputType = {
    id: number;
    name: number;
    workerId: number;
    role: number;
    desc: number;
    labID: number;
    _all: number;
};
export type LabWorkerMinAggregateInputType = {
    id?: true;
    name?: true;
    workerId?: true;
    role?: true;
    desc?: true;
    labID?: true;
};
export type LabWorkerMaxAggregateInputType = {
    id?: true;
    name?: true;
    workerId?: true;
    role?: true;
    desc?: true;
    labID?: true;
};
export type LabWorkerCountAggregateInputType = {
    id?: true;
    name?: true;
    workerId?: true;
    role?: true;
    desc?: true;
    labID?: true;
    _all?: true;
};
export type LabWorkerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LabWorker to aggregate.
     */
    where?: Prisma.LabWorkerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabWorkers to fetch.
     */
    orderBy?: Prisma.LabWorkerOrderByWithRelationInput | Prisma.LabWorkerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LabWorkerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabWorkers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabWorkers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LabWorkers
    **/
    _count?: true | LabWorkerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LabWorkerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LabWorkerMaxAggregateInputType;
};
export type GetLabWorkerAggregateType<T extends LabWorkerAggregateArgs> = {
    [P in keyof T & keyof AggregateLabWorker]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLabWorker[P]> : Prisma.GetScalarType<T[P], AggregateLabWorker[P]>;
};
export type LabWorkerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabWorkerWhereInput;
    orderBy?: Prisma.LabWorkerOrderByWithAggregationInput | Prisma.LabWorkerOrderByWithAggregationInput[];
    by: Prisma.LabWorkerScalarFieldEnum[] | Prisma.LabWorkerScalarFieldEnum;
    having?: Prisma.LabWorkerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LabWorkerCountAggregateInputType | true;
    _min?: LabWorkerMinAggregateInputType;
    _max?: LabWorkerMaxAggregateInputType;
};
export type LabWorkerGroupByOutputType = {
    id: string;
    name: string;
    workerId: string;
    role: $Enums.RoleType;
    desc: string | null;
    labID: string;
    _count: LabWorkerCountAggregateOutputType | null;
    _min: LabWorkerMinAggregateOutputType | null;
    _max: LabWorkerMaxAggregateOutputType | null;
};
type GetLabWorkerGroupByPayload<T extends LabWorkerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LabWorkerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LabWorkerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LabWorkerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LabWorkerGroupByOutputType[P]>;
}>>;
export type LabWorkerWhereInput = {
    AND?: Prisma.LabWorkerWhereInput | Prisma.LabWorkerWhereInput[];
    OR?: Prisma.LabWorkerWhereInput[];
    NOT?: Prisma.LabWorkerWhereInput | Prisma.LabWorkerWhereInput[];
    id?: Prisma.StringFilter<"LabWorker"> | string;
    name?: Prisma.StringFilter<"LabWorker"> | string;
    workerId?: Prisma.StringFilter<"LabWorker"> | string;
    role?: Prisma.EnumRoleTypeFilter<"LabWorker"> | $Enums.RoleType;
    desc?: Prisma.StringNullableFilter<"LabWorker"> | string | null;
    labID?: Prisma.StringFilter<"LabWorker"> | string;
    labId?: Prisma.XOR<Prisma.LabScalarRelationFilter, Prisma.LabWhereInput>;
};
export type LabWorkerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    workerId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    desc?: Prisma.SortOrderInput | Prisma.SortOrder;
    labID?: Prisma.SortOrder;
    labId?: Prisma.LabOrderByWithRelationInput;
};
export type LabWorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workerId?: string;
    AND?: Prisma.LabWorkerWhereInput | Prisma.LabWorkerWhereInput[];
    OR?: Prisma.LabWorkerWhereInput[];
    NOT?: Prisma.LabWorkerWhereInput | Prisma.LabWorkerWhereInput[];
    name?: Prisma.StringFilter<"LabWorker"> | string;
    role?: Prisma.EnumRoleTypeFilter<"LabWorker"> | $Enums.RoleType;
    desc?: Prisma.StringNullableFilter<"LabWorker"> | string | null;
    labID?: Prisma.StringFilter<"LabWorker"> | string;
    labId?: Prisma.XOR<Prisma.LabScalarRelationFilter, Prisma.LabWhereInput>;
}, "id" | "workerId">;
export type LabWorkerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    workerId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    desc?: Prisma.SortOrderInput | Prisma.SortOrder;
    labID?: Prisma.SortOrder;
    _count?: Prisma.LabWorkerCountOrderByAggregateInput;
    _max?: Prisma.LabWorkerMaxOrderByAggregateInput;
    _min?: Prisma.LabWorkerMinOrderByAggregateInput;
};
export type LabWorkerScalarWhereWithAggregatesInput = {
    AND?: Prisma.LabWorkerScalarWhereWithAggregatesInput | Prisma.LabWorkerScalarWhereWithAggregatesInput[];
    OR?: Prisma.LabWorkerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LabWorkerScalarWhereWithAggregatesInput | Prisma.LabWorkerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LabWorker"> | string;
    name?: Prisma.StringWithAggregatesFilter<"LabWorker"> | string;
    workerId?: Prisma.StringWithAggregatesFilter<"LabWorker"> | string;
    role?: Prisma.EnumRoleTypeWithAggregatesFilter<"LabWorker"> | $Enums.RoleType;
    desc?: Prisma.StringNullableWithAggregatesFilter<"LabWorker"> | string | null;
    labID?: Prisma.StringWithAggregatesFilter<"LabWorker"> | string;
};
export type LabWorkerCreateInput = {
    id?: string;
    name: string;
    workerId: string;
    role: $Enums.RoleType;
    desc?: string | null;
    labId: Prisma.LabCreateNestedOneWithoutLabWorkersInput;
};
export type LabWorkerUncheckedCreateInput = {
    id?: string;
    name: string;
    workerId: string;
    role: $Enums.RoleType;
    desc?: string | null;
    labID: string;
};
export type LabWorkerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workerId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    labId?: Prisma.LabUpdateOneRequiredWithoutLabWorkersNestedInput;
};
export type LabWorkerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workerId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    labID?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LabWorkerCreateManyInput = {
    id?: string;
    name: string;
    workerId: string;
    role: $Enums.RoleType;
    desc?: string | null;
    labID: string;
};
export type LabWorkerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workerId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LabWorkerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workerId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    labID?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LabWorkerListRelationFilter = {
    every?: Prisma.LabWorkerWhereInput;
    some?: Prisma.LabWorkerWhereInput;
    none?: Prisma.LabWorkerWhereInput;
};
export type LabWorkerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LabWorkerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    workerId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    labID?: Prisma.SortOrder;
};
export type LabWorkerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    workerId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    labID?: Prisma.SortOrder;
};
export type LabWorkerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    workerId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    labID?: Prisma.SortOrder;
};
export type LabWorkerCreateNestedManyWithoutLabIdInput = {
    create?: Prisma.XOR<Prisma.LabWorkerCreateWithoutLabIdInput, Prisma.LabWorkerUncheckedCreateWithoutLabIdInput> | Prisma.LabWorkerCreateWithoutLabIdInput[] | Prisma.LabWorkerUncheckedCreateWithoutLabIdInput[];
    connectOrCreate?: Prisma.LabWorkerCreateOrConnectWithoutLabIdInput | Prisma.LabWorkerCreateOrConnectWithoutLabIdInput[];
    createMany?: Prisma.LabWorkerCreateManyLabIdInputEnvelope;
    connect?: Prisma.LabWorkerWhereUniqueInput | Prisma.LabWorkerWhereUniqueInput[];
};
export type LabWorkerUncheckedCreateNestedManyWithoutLabIdInput = {
    create?: Prisma.XOR<Prisma.LabWorkerCreateWithoutLabIdInput, Prisma.LabWorkerUncheckedCreateWithoutLabIdInput> | Prisma.LabWorkerCreateWithoutLabIdInput[] | Prisma.LabWorkerUncheckedCreateWithoutLabIdInput[];
    connectOrCreate?: Prisma.LabWorkerCreateOrConnectWithoutLabIdInput | Prisma.LabWorkerCreateOrConnectWithoutLabIdInput[];
    createMany?: Prisma.LabWorkerCreateManyLabIdInputEnvelope;
    connect?: Prisma.LabWorkerWhereUniqueInput | Prisma.LabWorkerWhereUniqueInput[];
};
export type LabWorkerUpdateManyWithoutLabIdNestedInput = {
    create?: Prisma.XOR<Prisma.LabWorkerCreateWithoutLabIdInput, Prisma.LabWorkerUncheckedCreateWithoutLabIdInput> | Prisma.LabWorkerCreateWithoutLabIdInput[] | Prisma.LabWorkerUncheckedCreateWithoutLabIdInput[];
    connectOrCreate?: Prisma.LabWorkerCreateOrConnectWithoutLabIdInput | Prisma.LabWorkerCreateOrConnectWithoutLabIdInput[];
    upsert?: Prisma.LabWorkerUpsertWithWhereUniqueWithoutLabIdInput | Prisma.LabWorkerUpsertWithWhereUniqueWithoutLabIdInput[];
    createMany?: Prisma.LabWorkerCreateManyLabIdInputEnvelope;
    set?: Prisma.LabWorkerWhereUniqueInput | Prisma.LabWorkerWhereUniqueInput[];
    disconnect?: Prisma.LabWorkerWhereUniqueInput | Prisma.LabWorkerWhereUniqueInput[];
    delete?: Prisma.LabWorkerWhereUniqueInput | Prisma.LabWorkerWhereUniqueInput[];
    connect?: Prisma.LabWorkerWhereUniqueInput | Prisma.LabWorkerWhereUniqueInput[];
    update?: Prisma.LabWorkerUpdateWithWhereUniqueWithoutLabIdInput | Prisma.LabWorkerUpdateWithWhereUniqueWithoutLabIdInput[];
    updateMany?: Prisma.LabWorkerUpdateManyWithWhereWithoutLabIdInput | Prisma.LabWorkerUpdateManyWithWhereWithoutLabIdInput[];
    deleteMany?: Prisma.LabWorkerScalarWhereInput | Prisma.LabWorkerScalarWhereInput[];
};
export type LabWorkerUncheckedUpdateManyWithoutLabIdNestedInput = {
    create?: Prisma.XOR<Prisma.LabWorkerCreateWithoutLabIdInput, Prisma.LabWorkerUncheckedCreateWithoutLabIdInput> | Prisma.LabWorkerCreateWithoutLabIdInput[] | Prisma.LabWorkerUncheckedCreateWithoutLabIdInput[];
    connectOrCreate?: Prisma.LabWorkerCreateOrConnectWithoutLabIdInput | Prisma.LabWorkerCreateOrConnectWithoutLabIdInput[];
    upsert?: Prisma.LabWorkerUpsertWithWhereUniqueWithoutLabIdInput | Prisma.LabWorkerUpsertWithWhereUniqueWithoutLabIdInput[];
    createMany?: Prisma.LabWorkerCreateManyLabIdInputEnvelope;
    set?: Prisma.LabWorkerWhereUniqueInput | Prisma.LabWorkerWhereUniqueInput[];
    disconnect?: Prisma.LabWorkerWhereUniqueInput | Prisma.LabWorkerWhereUniqueInput[];
    delete?: Prisma.LabWorkerWhereUniqueInput | Prisma.LabWorkerWhereUniqueInput[];
    connect?: Prisma.LabWorkerWhereUniqueInput | Prisma.LabWorkerWhereUniqueInput[];
    update?: Prisma.LabWorkerUpdateWithWhereUniqueWithoutLabIdInput | Prisma.LabWorkerUpdateWithWhereUniqueWithoutLabIdInput[];
    updateMany?: Prisma.LabWorkerUpdateManyWithWhereWithoutLabIdInput | Prisma.LabWorkerUpdateManyWithWhereWithoutLabIdInput[];
    deleteMany?: Prisma.LabWorkerScalarWhereInput | Prisma.LabWorkerScalarWhereInput[];
};
export type EnumRoleTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoleType;
};
export type LabWorkerCreateWithoutLabIdInput = {
    id?: string;
    name: string;
    workerId: string;
    role: $Enums.RoleType;
    desc?: string | null;
};
export type LabWorkerUncheckedCreateWithoutLabIdInput = {
    id?: string;
    name: string;
    workerId: string;
    role: $Enums.RoleType;
    desc?: string | null;
};
export type LabWorkerCreateOrConnectWithoutLabIdInput = {
    where: Prisma.LabWorkerWhereUniqueInput;
    create: Prisma.XOR<Prisma.LabWorkerCreateWithoutLabIdInput, Prisma.LabWorkerUncheckedCreateWithoutLabIdInput>;
};
export type LabWorkerCreateManyLabIdInputEnvelope = {
    data: Prisma.LabWorkerCreateManyLabIdInput | Prisma.LabWorkerCreateManyLabIdInput[];
    skipDuplicates?: boolean;
};
export type LabWorkerUpsertWithWhereUniqueWithoutLabIdInput = {
    where: Prisma.LabWorkerWhereUniqueInput;
    update: Prisma.XOR<Prisma.LabWorkerUpdateWithoutLabIdInput, Prisma.LabWorkerUncheckedUpdateWithoutLabIdInput>;
    create: Prisma.XOR<Prisma.LabWorkerCreateWithoutLabIdInput, Prisma.LabWorkerUncheckedCreateWithoutLabIdInput>;
};
export type LabWorkerUpdateWithWhereUniqueWithoutLabIdInput = {
    where: Prisma.LabWorkerWhereUniqueInput;
    data: Prisma.XOR<Prisma.LabWorkerUpdateWithoutLabIdInput, Prisma.LabWorkerUncheckedUpdateWithoutLabIdInput>;
};
export type LabWorkerUpdateManyWithWhereWithoutLabIdInput = {
    where: Prisma.LabWorkerScalarWhereInput;
    data: Prisma.XOR<Prisma.LabWorkerUpdateManyMutationInput, Prisma.LabWorkerUncheckedUpdateManyWithoutLabIdInput>;
};
export type LabWorkerScalarWhereInput = {
    AND?: Prisma.LabWorkerScalarWhereInput | Prisma.LabWorkerScalarWhereInput[];
    OR?: Prisma.LabWorkerScalarWhereInput[];
    NOT?: Prisma.LabWorkerScalarWhereInput | Prisma.LabWorkerScalarWhereInput[];
    id?: Prisma.StringFilter<"LabWorker"> | string;
    name?: Prisma.StringFilter<"LabWorker"> | string;
    workerId?: Prisma.StringFilter<"LabWorker"> | string;
    role?: Prisma.EnumRoleTypeFilter<"LabWorker"> | $Enums.RoleType;
    desc?: Prisma.StringNullableFilter<"LabWorker"> | string | null;
    labID?: Prisma.StringFilter<"LabWorker"> | string;
};
export type LabWorkerCreateManyLabIdInput = {
    id?: string;
    name: string;
    workerId: string;
    role: $Enums.RoleType;
    desc?: string | null;
};
export type LabWorkerUpdateWithoutLabIdInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workerId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LabWorkerUncheckedUpdateWithoutLabIdInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workerId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LabWorkerUncheckedUpdateManyWithoutLabIdInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workerId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LabWorkerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    workerId?: boolean;
    role?: boolean;
    desc?: boolean;
    labID?: boolean;
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labWorker"]>;
export type LabWorkerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    workerId?: boolean;
    role?: boolean;
    desc?: boolean;
    labID?: boolean;
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labWorker"]>;
export type LabWorkerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    workerId?: boolean;
    role?: boolean;
    desc?: boolean;
    labID?: boolean;
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labWorker"]>;
export type LabWorkerSelectScalar = {
    id?: boolean;
    name?: boolean;
    workerId?: boolean;
    role?: boolean;
    desc?: boolean;
    labID?: boolean;
};
export type LabWorkerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "workerId" | "role" | "desc" | "labID", ExtArgs["result"]["labWorker"]>;
export type LabWorkerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
};
export type LabWorkerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
};
export type LabWorkerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    labId?: boolean | Prisma.LabDefaultArgs<ExtArgs>;
};
export type $LabWorkerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LabWorker";
    objects: {
        labId: Prisma.$LabPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        workerId: string;
        role: $Enums.RoleType;
        desc: string | null;
        labID: string;
    }, ExtArgs["result"]["labWorker"]>;
    composites: {};
};
export type LabWorkerGetPayload<S extends boolean | null | undefined | LabWorkerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload, S>;
export type LabWorkerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LabWorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LabWorkerCountAggregateInputType | true;
};
export interface LabWorkerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LabWorker'];
        meta: {
            name: 'LabWorker';
        };
    };
    /**
     * Find zero or one LabWorker that matches the filter.
     * @param {LabWorkerFindUniqueArgs} args - Arguments to find a LabWorker
     * @example
     * // Get one LabWorker
     * const labWorker = await prisma.labWorker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabWorkerFindUniqueArgs>(args: Prisma.SelectSubset<T, LabWorkerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LabWorkerClient<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LabWorker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabWorkerFindUniqueOrThrowArgs} args - Arguments to find a LabWorker
     * @example
     * // Get one LabWorker
     * const labWorker = await prisma.labWorker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabWorkerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LabWorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LabWorkerClient<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LabWorker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabWorkerFindFirstArgs} args - Arguments to find a LabWorker
     * @example
     * // Get one LabWorker
     * const labWorker = await prisma.labWorker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabWorkerFindFirstArgs>(args?: Prisma.SelectSubset<T, LabWorkerFindFirstArgs<ExtArgs>>): Prisma.Prisma__LabWorkerClient<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LabWorker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabWorkerFindFirstOrThrowArgs} args - Arguments to find a LabWorker
     * @example
     * // Get one LabWorker
     * const labWorker = await prisma.labWorker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabWorkerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LabWorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LabWorkerClient<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LabWorkers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabWorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabWorkers
     * const labWorkers = await prisma.labWorker.findMany()
     *
     * // Get first 10 LabWorkers
     * const labWorkers = await prisma.labWorker.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const labWorkerWithIdOnly = await prisma.labWorker.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LabWorkerFindManyArgs>(args?: Prisma.SelectSubset<T, LabWorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LabWorker.
     * @param {LabWorkerCreateArgs} args - Arguments to create a LabWorker.
     * @example
     * // Create one LabWorker
     * const LabWorker = await prisma.labWorker.create({
     *   data: {
     *     // ... data to create a LabWorker
     *   }
     * })
     *
     */
    create<T extends LabWorkerCreateArgs>(args: Prisma.SelectSubset<T, LabWorkerCreateArgs<ExtArgs>>): Prisma.Prisma__LabWorkerClient<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LabWorkers.
     * @param {LabWorkerCreateManyArgs} args - Arguments to create many LabWorkers.
     * @example
     * // Create many LabWorkers
     * const labWorker = await prisma.labWorker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LabWorkerCreateManyArgs>(args?: Prisma.SelectSubset<T, LabWorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LabWorkers and returns the data saved in the database.
     * @param {LabWorkerCreateManyAndReturnArgs} args - Arguments to create many LabWorkers.
     * @example
     * // Create many LabWorkers
     * const labWorker = await prisma.labWorker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LabWorkers and only return the `id`
     * const labWorkerWithIdOnly = await prisma.labWorker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LabWorkerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LabWorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LabWorker.
     * @param {LabWorkerDeleteArgs} args - Arguments to delete one LabWorker.
     * @example
     * // Delete one LabWorker
     * const LabWorker = await prisma.labWorker.delete({
     *   where: {
     *     // ... filter to delete one LabWorker
     *   }
     * })
     *
     */
    delete<T extends LabWorkerDeleteArgs>(args: Prisma.SelectSubset<T, LabWorkerDeleteArgs<ExtArgs>>): Prisma.Prisma__LabWorkerClient<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LabWorker.
     * @param {LabWorkerUpdateArgs} args - Arguments to update one LabWorker.
     * @example
     * // Update one LabWorker
     * const labWorker = await prisma.labWorker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LabWorkerUpdateArgs>(args: Prisma.SelectSubset<T, LabWorkerUpdateArgs<ExtArgs>>): Prisma.Prisma__LabWorkerClient<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LabWorkers.
     * @param {LabWorkerDeleteManyArgs} args - Arguments to filter LabWorkers to delete.
     * @example
     * // Delete a few LabWorkers
     * const { count } = await prisma.labWorker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LabWorkerDeleteManyArgs>(args?: Prisma.SelectSubset<T, LabWorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LabWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabWorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabWorkers
     * const labWorker = await prisma.labWorker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LabWorkerUpdateManyArgs>(args: Prisma.SelectSubset<T, LabWorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LabWorkers and returns the data updated in the database.
     * @param {LabWorkerUpdateManyAndReturnArgs} args - Arguments to update many LabWorkers.
     * @example
     * // Update many LabWorkers
     * const labWorker = await prisma.labWorker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LabWorkers and only return the `id`
     * const labWorkerWithIdOnly = await prisma.labWorker.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabWorkerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LabWorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LabWorker.
     * @param {LabWorkerUpsertArgs} args - Arguments to update or create a LabWorker.
     * @example
     * // Update or create a LabWorker
     * const labWorker = await prisma.labWorker.upsert({
     *   create: {
     *     // ... data to create a LabWorker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabWorker we want to update
     *   }
     * })
     */
    upsert<T extends LabWorkerUpsertArgs>(args: Prisma.SelectSubset<T, LabWorkerUpsertArgs<ExtArgs>>): Prisma.Prisma__LabWorkerClient<runtime.Types.Result.GetResult<Prisma.$LabWorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LabWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabWorkerCountArgs} args - Arguments to filter LabWorkers to count.
     * @example
     * // Count the number of LabWorkers
     * const count = await prisma.labWorker.count({
     *   where: {
     *     // ... the filter for the LabWorkers we want to count
     *   }
     * })
    **/
    count<T extends LabWorkerCountArgs>(args?: Prisma.Subset<T, LabWorkerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LabWorkerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LabWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabWorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabWorkerAggregateArgs>(args: Prisma.Subset<T, LabWorkerAggregateArgs>): Prisma.PrismaPromise<GetLabWorkerAggregateType<T>>;
    /**
     * Group by LabWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabWorkerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LabWorkerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LabWorkerGroupByArgs['orderBy'];
    } : {
        orderBy?: LabWorkerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LabWorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LabWorker model
     */
    readonly fields: LabWorkerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LabWorker.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LabWorkerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the LabWorker model
 */
export interface LabWorkerFieldRefs {
    readonly id: Prisma.FieldRef<"LabWorker", 'String'>;
    readonly name: Prisma.FieldRef<"LabWorker", 'String'>;
    readonly workerId: Prisma.FieldRef<"LabWorker", 'String'>;
    readonly role: Prisma.FieldRef<"LabWorker", 'RoleType'>;
    readonly desc: Prisma.FieldRef<"LabWorker", 'String'>;
    readonly labID: Prisma.FieldRef<"LabWorker", 'String'>;
}
/**
 * LabWorker findUnique
 */
export type LabWorkerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerInclude<ExtArgs> | null;
    /**
     * Filter, which LabWorker to fetch.
     */
    where: Prisma.LabWorkerWhereUniqueInput;
};
/**
 * LabWorker findUniqueOrThrow
 */
export type LabWorkerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerInclude<ExtArgs> | null;
    /**
     * Filter, which LabWorker to fetch.
     */
    where: Prisma.LabWorkerWhereUniqueInput;
};
/**
 * LabWorker findFirst
 */
export type LabWorkerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerInclude<ExtArgs> | null;
    /**
     * Filter, which LabWorker to fetch.
     */
    where?: Prisma.LabWorkerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabWorkers to fetch.
     */
    orderBy?: Prisma.LabWorkerOrderByWithRelationInput | Prisma.LabWorkerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LabWorkers.
     */
    cursor?: Prisma.LabWorkerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabWorkers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabWorkers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LabWorkers.
     */
    distinct?: Prisma.LabWorkerScalarFieldEnum | Prisma.LabWorkerScalarFieldEnum[];
};
/**
 * LabWorker findFirstOrThrow
 */
export type LabWorkerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerInclude<ExtArgs> | null;
    /**
     * Filter, which LabWorker to fetch.
     */
    where?: Prisma.LabWorkerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabWorkers to fetch.
     */
    orderBy?: Prisma.LabWorkerOrderByWithRelationInput | Prisma.LabWorkerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LabWorkers.
     */
    cursor?: Prisma.LabWorkerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabWorkers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabWorkers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LabWorkers.
     */
    distinct?: Prisma.LabWorkerScalarFieldEnum | Prisma.LabWorkerScalarFieldEnum[];
};
/**
 * LabWorker findMany
 */
export type LabWorkerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerInclude<ExtArgs> | null;
    /**
     * Filter, which LabWorkers to fetch.
     */
    where?: Prisma.LabWorkerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LabWorkers to fetch.
     */
    orderBy?: Prisma.LabWorkerOrderByWithRelationInput | Prisma.LabWorkerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LabWorkers.
     */
    cursor?: Prisma.LabWorkerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LabWorkers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LabWorkers.
     */
    skip?: number;
    distinct?: Prisma.LabWorkerScalarFieldEnum | Prisma.LabWorkerScalarFieldEnum[];
};
/**
 * LabWorker create
 */
export type LabWorkerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerInclude<ExtArgs> | null;
    /**
     * The data needed to create a LabWorker.
     */
    data: Prisma.XOR<Prisma.LabWorkerCreateInput, Prisma.LabWorkerUncheckedCreateInput>;
};
/**
 * LabWorker createMany
 */
export type LabWorkerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabWorkers.
     */
    data: Prisma.LabWorkerCreateManyInput | Prisma.LabWorkerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LabWorker createManyAndReturn
 */
export type LabWorkerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * The data used to create many LabWorkers.
     */
    data: Prisma.LabWorkerCreateManyInput | Prisma.LabWorkerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LabWorker update
 */
export type LabWorkerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerInclude<ExtArgs> | null;
    /**
     * The data needed to update a LabWorker.
     */
    data: Prisma.XOR<Prisma.LabWorkerUpdateInput, Prisma.LabWorkerUncheckedUpdateInput>;
    /**
     * Choose, which LabWorker to update.
     */
    where: Prisma.LabWorkerWhereUniqueInput;
};
/**
 * LabWorker updateMany
 */
export type LabWorkerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LabWorkers.
     */
    data: Prisma.XOR<Prisma.LabWorkerUpdateManyMutationInput, Prisma.LabWorkerUncheckedUpdateManyInput>;
    /**
     * Filter which LabWorkers to update
     */
    where?: Prisma.LabWorkerWhereInput;
    /**
     * Limit how many LabWorkers to update.
     */
    limit?: number;
};
/**
 * LabWorker updateManyAndReturn
 */
export type LabWorkerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * The data used to update LabWorkers.
     */
    data: Prisma.XOR<Prisma.LabWorkerUpdateManyMutationInput, Prisma.LabWorkerUncheckedUpdateManyInput>;
    /**
     * Filter which LabWorkers to update
     */
    where?: Prisma.LabWorkerWhereInput;
    /**
     * Limit how many LabWorkers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LabWorker upsert
 */
export type LabWorkerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerInclude<ExtArgs> | null;
    /**
     * The filter to search for the LabWorker to update in case it exists.
     */
    where: Prisma.LabWorkerWhereUniqueInput;
    /**
     * In case the LabWorker found by the `where` argument doesn't exist, create a new LabWorker with this data.
     */
    create: Prisma.XOR<Prisma.LabWorkerCreateInput, Prisma.LabWorkerUncheckedCreateInput>;
    /**
     * In case the LabWorker was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LabWorkerUpdateInput, Prisma.LabWorkerUncheckedUpdateInput>;
};
/**
 * LabWorker delete
 */
export type LabWorkerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerInclude<ExtArgs> | null;
    /**
     * Filter which LabWorker to delete.
     */
    where: Prisma.LabWorkerWhereUniqueInput;
};
/**
 * LabWorker deleteMany
 */
export type LabWorkerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LabWorkers to delete
     */
    where?: Prisma.LabWorkerWhereInput;
    /**
     * Limit how many LabWorkers to delete.
     */
    limit?: number;
};
/**
 * LabWorker without action
 */
export type LabWorkerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabWorker
     */
    select?: Prisma.LabWorkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LabWorker
     */
    omit?: Prisma.LabWorkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LabWorkerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LabWorker.d.ts.map