import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Farmer
 *
 */
export type FarmerModel = runtime.Types.Result.DefaultSelection<Prisma.$FarmerPayload>;
export type AggregateFarmer = {
    _count: FarmerCountAggregateOutputType | null;
    _min: FarmerMinAggregateOutputType | null;
    _max: FarmerMaxAggregateOutputType | null;
};
export type FarmerMinAggregateOutputType = {
    id: string | null;
    mobileNumber: string | null;
    mobileNumberVerified: boolean | null;
    farmerID: string | null;
    password: string | null;
    fullName: string | null;
    dob: string | null;
    address: string | null;
    isVerified: boolean | null;
    isProfileCompleted: boolean | null;
    createdAt: Date | null;
    updateAt: Date | null;
};
export type FarmerMaxAggregateOutputType = {
    id: string | null;
    mobileNumber: string | null;
    mobileNumberVerified: boolean | null;
    farmerID: string | null;
    password: string | null;
    fullName: string | null;
    dob: string | null;
    address: string | null;
    isVerified: boolean | null;
    isProfileCompleted: boolean | null;
    createdAt: Date | null;
    updateAt: Date | null;
};
export type FarmerCountAggregateOutputType = {
    id: number;
    mobileNumber: number;
    mobileNumberVerified: number;
    farmerID: number;
    password: number;
    fullName: number;
    dob: number;
    address: number;
    isVerified: number;
    isProfileCompleted: number;
    createdAt: number;
    updateAt: number;
    _all: number;
};
export type FarmerMinAggregateInputType = {
    id?: true;
    mobileNumber?: true;
    mobileNumberVerified?: true;
    farmerID?: true;
    password?: true;
    fullName?: true;
    dob?: true;
    address?: true;
    isVerified?: true;
    isProfileCompleted?: true;
    createdAt?: true;
    updateAt?: true;
};
export type FarmerMaxAggregateInputType = {
    id?: true;
    mobileNumber?: true;
    mobileNumberVerified?: true;
    farmerID?: true;
    password?: true;
    fullName?: true;
    dob?: true;
    address?: true;
    isVerified?: true;
    isProfileCompleted?: true;
    createdAt?: true;
    updateAt?: true;
};
export type FarmerCountAggregateInputType = {
    id?: true;
    mobileNumber?: true;
    mobileNumberVerified?: true;
    farmerID?: true;
    password?: true;
    fullName?: true;
    dob?: true;
    address?: true;
    isVerified?: true;
    isProfileCompleted?: true;
    createdAt?: true;
    updateAt?: true;
    _all?: true;
};
export type FarmerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Farmer to aggregate.
     */
    where?: Prisma.FarmerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Farmers to fetch.
     */
    orderBy?: Prisma.FarmerOrderByWithRelationInput | Prisma.FarmerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FarmerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Farmers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Farmers
    **/
    _count?: true | FarmerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FarmerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FarmerMaxAggregateInputType;
};
export type GetFarmerAggregateType<T extends FarmerAggregateArgs> = {
    [P in keyof T & keyof AggregateFarmer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFarmer[P]> : Prisma.GetScalarType<T[P], AggregateFarmer[P]>;
};
export type FarmerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FarmerWhereInput;
    orderBy?: Prisma.FarmerOrderByWithAggregationInput | Prisma.FarmerOrderByWithAggregationInput[];
    by: Prisma.FarmerScalarFieldEnum[] | Prisma.FarmerScalarFieldEnum;
    having?: Prisma.FarmerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FarmerCountAggregateInputType | true;
    _min?: FarmerMinAggregateInputType;
    _max?: FarmerMaxAggregateInputType;
};
export type FarmerGroupByOutputType = {
    id: string;
    mobileNumber: string;
    mobileNumberVerified: boolean;
    farmerID: string | null;
    password: string | null;
    fullName: string | null;
    dob: string | null;
    address: string | null;
    isVerified: boolean;
    isProfileCompleted: boolean;
    createdAt: Date;
    updateAt: Date;
    _count: FarmerCountAggregateOutputType | null;
    _min: FarmerMinAggregateOutputType | null;
    _max: FarmerMaxAggregateOutputType | null;
};
type GetFarmerGroupByPayload<T extends FarmerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FarmerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FarmerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FarmerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FarmerGroupByOutputType[P]>;
}>>;
export type FarmerWhereInput = {
    AND?: Prisma.FarmerWhereInput | Prisma.FarmerWhereInput[];
    OR?: Prisma.FarmerWhereInput[];
    NOT?: Prisma.FarmerWhereInput | Prisma.FarmerWhereInput[];
    id?: Prisma.StringFilter<"Farmer"> | string;
    mobileNumber?: Prisma.StringFilter<"Farmer"> | string;
    mobileNumberVerified?: Prisma.BoolFilter<"Farmer"> | boolean;
    farmerID?: Prisma.StringNullableFilter<"Farmer"> | string | null;
    password?: Prisma.StringNullableFilter<"Farmer"> | string | null;
    fullName?: Prisma.StringNullableFilter<"Farmer"> | string | null;
    dob?: Prisma.StringNullableFilter<"Farmer"> | string | null;
    address?: Prisma.StringNullableFilter<"Farmer"> | string | null;
    isVerified?: Prisma.BoolFilter<"Farmer"> | boolean;
    isProfileCompleted?: Prisma.BoolFilter<"Farmer"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Farmer"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"Farmer"> | Date | string;
    landInfo?: Prisma.LandInfoListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    crops?: Prisma.CropListRelationFilter;
};
export type FarmerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    mobileNumberVerified?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    dob?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isProfileCompleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
    landInfo?: Prisma.LandInfoOrderByRelationAggregateInput;
    documents?: Prisma.DocumentOrderByRelationAggregateInput;
    crops?: Prisma.CropOrderByRelationAggregateInput;
};
export type FarmerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    mobileNumber?: string;
    farmerID?: string;
    AND?: Prisma.FarmerWhereInput | Prisma.FarmerWhereInput[];
    OR?: Prisma.FarmerWhereInput[];
    NOT?: Prisma.FarmerWhereInput | Prisma.FarmerWhereInput[];
    mobileNumberVerified?: Prisma.BoolFilter<"Farmer"> | boolean;
    password?: Prisma.StringNullableFilter<"Farmer"> | string | null;
    fullName?: Prisma.StringNullableFilter<"Farmer"> | string | null;
    dob?: Prisma.StringNullableFilter<"Farmer"> | string | null;
    address?: Prisma.StringNullableFilter<"Farmer"> | string | null;
    isVerified?: Prisma.BoolFilter<"Farmer"> | boolean;
    isProfileCompleted?: Prisma.BoolFilter<"Farmer"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Farmer"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"Farmer"> | Date | string;
    landInfo?: Prisma.LandInfoListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    crops?: Prisma.CropListRelationFilter;
}, "id" | "mobileNumber" | "farmerID">;
export type FarmerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    mobileNumberVerified?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    dob?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isProfileCompleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
    _count?: Prisma.FarmerCountOrderByAggregateInput;
    _max?: Prisma.FarmerMaxOrderByAggregateInput;
    _min?: Prisma.FarmerMinOrderByAggregateInput;
};
export type FarmerScalarWhereWithAggregatesInput = {
    AND?: Prisma.FarmerScalarWhereWithAggregatesInput | Prisma.FarmerScalarWhereWithAggregatesInput[];
    OR?: Prisma.FarmerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FarmerScalarWhereWithAggregatesInput | Prisma.FarmerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Farmer"> | string;
    mobileNumber?: Prisma.StringWithAggregatesFilter<"Farmer"> | string;
    mobileNumberVerified?: Prisma.BoolWithAggregatesFilter<"Farmer"> | boolean;
    farmerID?: Prisma.StringNullableWithAggregatesFilter<"Farmer"> | string | null;
    password?: Prisma.StringNullableWithAggregatesFilter<"Farmer"> | string | null;
    fullName?: Prisma.StringNullableWithAggregatesFilter<"Farmer"> | string | null;
    dob?: Prisma.StringNullableWithAggregatesFilter<"Farmer"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Farmer"> | string | null;
    isVerified?: Prisma.BoolWithAggregatesFilter<"Farmer"> | boolean;
    isProfileCompleted?: Prisma.BoolWithAggregatesFilter<"Farmer"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Farmer"> | Date | string;
    updateAt?: Prisma.DateTimeWithAggregatesFilter<"Farmer"> | Date | string;
};
export type FarmerCreateInput = {
    id?: string;
    mobileNumber: string;
    mobileNumberVerified?: boolean;
    farmerID?: string | null;
    password?: string | null;
    fullName?: string | null;
    dob?: string | null;
    address?: string | null;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: Date | string;
    updateAt?: Date | string;
    landInfo?: Prisma.LandInfoCreateNestedManyWithoutFamerInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutFamerInput;
    crops?: Prisma.CropCreateNestedManyWithoutFarmerInput;
};
export type FarmerUncheckedCreateInput = {
    id?: string;
    mobileNumber: string;
    mobileNumberVerified?: boolean;
    farmerID?: string | null;
    password?: string | null;
    fullName?: string | null;
    dob?: string | null;
    address?: string | null;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: Date | string;
    updateAt?: Date | string;
    landInfo?: Prisma.LandInfoUncheckedCreateNestedManyWithoutFamerInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutFamerInput;
    crops?: Prisma.CropUncheckedCreateNestedManyWithoutFarmerInput;
};
export type FarmerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumberVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    farmerID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isProfileCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    landInfo?: Prisma.LandInfoUpdateManyWithoutFamerNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutFamerNestedInput;
    crops?: Prisma.CropUpdateManyWithoutFarmerNestedInput;
};
export type FarmerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumberVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    farmerID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isProfileCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    landInfo?: Prisma.LandInfoUncheckedUpdateManyWithoutFamerNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutFamerNestedInput;
    crops?: Prisma.CropUncheckedUpdateManyWithoutFarmerNestedInput;
};
export type FarmerCreateManyInput = {
    id?: string;
    mobileNumber: string;
    mobileNumberVerified?: boolean;
    farmerID?: string | null;
    password?: string | null;
    fullName?: string | null;
    dob?: string | null;
    address?: string | null;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: Date | string;
    updateAt?: Date | string;
};
export type FarmerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumberVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    farmerID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isProfileCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumberVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    farmerID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isProfileCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    mobileNumberVerified?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isProfileCompleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type FarmerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    mobileNumberVerified?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isProfileCompleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type FarmerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    mobileNumberVerified?: Prisma.SortOrder;
    farmerID?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isProfileCompleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type FarmerScalarRelationFilter = {
    is?: Prisma.FarmerWhereInput;
    isNot?: Prisma.FarmerWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type FarmerCreateNestedOneWithoutLandInfoInput = {
    create?: Prisma.XOR<Prisma.FarmerCreateWithoutLandInfoInput, Prisma.FarmerUncheckedCreateWithoutLandInfoInput>;
    connectOrCreate?: Prisma.FarmerCreateOrConnectWithoutLandInfoInput;
    connect?: Prisma.FarmerWhereUniqueInput;
};
export type FarmerUpdateOneRequiredWithoutLandInfoNestedInput = {
    create?: Prisma.XOR<Prisma.FarmerCreateWithoutLandInfoInput, Prisma.FarmerUncheckedCreateWithoutLandInfoInput>;
    connectOrCreate?: Prisma.FarmerCreateOrConnectWithoutLandInfoInput;
    upsert?: Prisma.FarmerUpsertWithoutLandInfoInput;
    connect?: Prisma.FarmerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmerUpdateToOneWithWhereWithoutLandInfoInput, Prisma.FarmerUpdateWithoutLandInfoInput>, Prisma.FarmerUncheckedUpdateWithoutLandInfoInput>;
};
export type FarmerCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.FarmerCreateWithoutDocumentsInput, Prisma.FarmerUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.FarmerCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.FarmerWhereUniqueInput;
};
export type FarmerUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.FarmerCreateWithoutDocumentsInput, Prisma.FarmerUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.FarmerCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.FarmerUpsertWithoutDocumentsInput;
    connect?: Prisma.FarmerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmerUpdateToOneWithWhereWithoutDocumentsInput, Prisma.FarmerUpdateWithoutDocumentsInput>, Prisma.FarmerUncheckedUpdateWithoutDocumentsInput>;
};
export type FarmerCreateNestedOneWithoutCropsInput = {
    create?: Prisma.XOR<Prisma.FarmerCreateWithoutCropsInput, Prisma.FarmerUncheckedCreateWithoutCropsInput>;
    connectOrCreate?: Prisma.FarmerCreateOrConnectWithoutCropsInput;
    connect?: Prisma.FarmerWhereUniqueInput;
};
export type FarmerUpdateOneRequiredWithoutCropsNestedInput = {
    create?: Prisma.XOR<Prisma.FarmerCreateWithoutCropsInput, Prisma.FarmerUncheckedCreateWithoutCropsInput>;
    connectOrCreate?: Prisma.FarmerCreateOrConnectWithoutCropsInput;
    upsert?: Prisma.FarmerUpsertWithoutCropsInput;
    connect?: Prisma.FarmerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmerUpdateToOneWithWhereWithoutCropsInput, Prisma.FarmerUpdateWithoutCropsInput>, Prisma.FarmerUncheckedUpdateWithoutCropsInput>;
};
export type FarmerCreateWithoutLandInfoInput = {
    id?: string;
    mobileNumber: string;
    mobileNumberVerified?: boolean;
    farmerID?: string | null;
    password?: string | null;
    fullName?: string | null;
    dob?: string | null;
    address?: string | null;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: Date | string;
    updateAt?: Date | string;
    documents?: Prisma.DocumentCreateNestedManyWithoutFamerInput;
    crops?: Prisma.CropCreateNestedManyWithoutFarmerInput;
};
export type FarmerUncheckedCreateWithoutLandInfoInput = {
    id?: string;
    mobileNumber: string;
    mobileNumberVerified?: boolean;
    farmerID?: string | null;
    password?: string | null;
    fullName?: string | null;
    dob?: string | null;
    address?: string | null;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: Date | string;
    updateAt?: Date | string;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutFamerInput;
    crops?: Prisma.CropUncheckedCreateNestedManyWithoutFarmerInput;
};
export type FarmerCreateOrConnectWithoutLandInfoInput = {
    where: Prisma.FarmerWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmerCreateWithoutLandInfoInput, Prisma.FarmerUncheckedCreateWithoutLandInfoInput>;
};
export type FarmerUpsertWithoutLandInfoInput = {
    update: Prisma.XOR<Prisma.FarmerUpdateWithoutLandInfoInput, Prisma.FarmerUncheckedUpdateWithoutLandInfoInput>;
    create: Prisma.XOR<Prisma.FarmerCreateWithoutLandInfoInput, Prisma.FarmerUncheckedCreateWithoutLandInfoInput>;
    where?: Prisma.FarmerWhereInput;
};
export type FarmerUpdateToOneWithWhereWithoutLandInfoInput = {
    where?: Prisma.FarmerWhereInput;
    data: Prisma.XOR<Prisma.FarmerUpdateWithoutLandInfoInput, Prisma.FarmerUncheckedUpdateWithoutLandInfoInput>;
};
export type FarmerUpdateWithoutLandInfoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumberVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    farmerID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isProfileCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUpdateManyWithoutFamerNestedInput;
    crops?: Prisma.CropUpdateManyWithoutFarmerNestedInput;
};
export type FarmerUncheckedUpdateWithoutLandInfoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumberVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    farmerID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isProfileCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutFamerNestedInput;
    crops?: Prisma.CropUncheckedUpdateManyWithoutFarmerNestedInput;
};
export type FarmerCreateWithoutDocumentsInput = {
    id?: string;
    mobileNumber: string;
    mobileNumberVerified?: boolean;
    farmerID?: string | null;
    password?: string | null;
    fullName?: string | null;
    dob?: string | null;
    address?: string | null;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: Date | string;
    updateAt?: Date | string;
    landInfo?: Prisma.LandInfoCreateNestedManyWithoutFamerInput;
    crops?: Prisma.CropCreateNestedManyWithoutFarmerInput;
};
export type FarmerUncheckedCreateWithoutDocumentsInput = {
    id?: string;
    mobileNumber: string;
    mobileNumberVerified?: boolean;
    farmerID?: string | null;
    password?: string | null;
    fullName?: string | null;
    dob?: string | null;
    address?: string | null;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: Date | string;
    updateAt?: Date | string;
    landInfo?: Prisma.LandInfoUncheckedCreateNestedManyWithoutFamerInput;
    crops?: Prisma.CropUncheckedCreateNestedManyWithoutFarmerInput;
};
export type FarmerCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.FarmerWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmerCreateWithoutDocumentsInput, Prisma.FarmerUncheckedCreateWithoutDocumentsInput>;
};
export type FarmerUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.FarmerUpdateWithoutDocumentsInput, Prisma.FarmerUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.FarmerCreateWithoutDocumentsInput, Prisma.FarmerUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.FarmerWhereInput;
};
export type FarmerUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.FarmerWhereInput;
    data: Prisma.XOR<Prisma.FarmerUpdateWithoutDocumentsInput, Prisma.FarmerUncheckedUpdateWithoutDocumentsInput>;
};
export type FarmerUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumberVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    farmerID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isProfileCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    landInfo?: Prisma.LandInfoUpdateManyWithoutFamerNestedInput;
    crops?: Prisma.CropUpdateManyWithoutFarmerNestedInput;
};
export type FarmerUncheckedUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumberVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    farmerID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isProfileCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    landInfo?: Prisma.LandInfoUncheckedUpdateManyWithoutFamerNestedInput;
    crops?: Prisma.CropUncheckedUpdateManyWithoutFarmerNestedInput;
};
export type FarmerCreateWithoutCropsInput = {
    id?: string;
    mobileNumber: string;
    mobileNumberVerified?: boolean;
    farmerID?: string | null;
    password?: string | null;
    fullName?: string | null;
    dob?: string | null;
    address?: string | null;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: Date | string;
    updateAt?: Date | string;
    landInfo?: Prisma.LandInfoCreateNestedManyWithoutFamerInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutFamerInput;
};
export type FarmerUncheckedCreateWithoutCropsInput = {
    id?: string;
    mobileNumber: string;
    mobileNumberVerified?: boolean;
    farmerID?: string | null;
    password?: string | null;
    fullName?: string | null;
    dob?: string | null;
    address?: string | null;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: Date | string;
    updateAt?: Date | string;
    landInfo?: Prisma.LandInfoUncheckedCreateNestedManyWithoutFamerInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutFamerInput;
};
export type FarmerCreateOrConnectWithoutCropsInput = {
    where: Prisma.FarmerWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmerCreateWithoutCropsInput, Prisma.FarmerUncheckedCreateWithoutCropsInput>;
};
export type FarmerUpsertWithoutCropsInput = {
    update: Prisma.XOR<Prisma.FarmerUpdateWithoutCropsInput, Prisma.FarmerUncheckedUpdateWithoutCropsInput>;
    create: Prisma.XOR<Prisma.FarmerCreateWithoutCropsInput, Prisma.FarmerUncheckedCreateWithoutCropsInput>;
    where?: Prisma.FarmerWhereInput;
};
export type FarmerUpdateToOneWithWhereWithoutCropsInput = {
    where?: Prisma.FarmerWhereInput;
    data: Prisma.XOR<Prisma.FarmerUpdateWithoutCropsInput, Prisma.FarmerUncheckedUpdateWithoutCropsInput>;
};
export type FarmerUpdateWithoutCropsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumberVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    farmerID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isProfileCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    landInfo?: Prisma.LandInfoUpdateManyWithoutFamerNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutFamerNestedInput;
};
export type FarmerUncheckedUpdateWithoutCropsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    mobileNumberVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    farmerID?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isProfileCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    landInfo?: Prisma.LandInfoUncheckedUpdateManyWithoutFamerNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutFamerNestedInput;
};
/**
 * Count Type FarmerCountOutputType
 */
export type FarmerCountOutputType = {
    landInfo: number;
    documents: number;
    crops: number;
};
export type FarmerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    landInfo?: boolean | FarmerCountOutputTypeCountLandInfoArgs;
    documents?: boolean | FarmerCountOutputTypeCountDocumentsArgs;
    crops?: boolean | FarmerCountOutputTypeCountCropsArgs;
};
/**
 * FarmerCountOutputType without action
 */
export type FarmerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerCountOutputType
     */
    select?: Prisma.FarmerCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FarmerCountOutputType without action
 */
export type FarmerCountOutputTypeCountLandInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LandInfoWhereInput;
};
/**
 * FarmerCountOutputType without action
 */
export type FarmerCountOutputTypeCountDocumentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
};
/**
 * FarmerCountOutputType without action
 */
export type FarmerCountOutputTypeCountCropsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CropWhereInput;
};
export type FarmerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mobileNumber?: boolean;
    mobileNumberVerified?: boolean;
    farmerID?: boolean;
    password?: boolean;
    fullName?: boolean;
    dob?: boolean;
    address?: boolean;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
    landInfo?: boolean | Prisma.Farmer$landInfoArgs<ExtArgs>;
    documents?: boolean | Prisma.Farmer$documentsArgs<ExtArgs>;
    crops?: boolean | Prisma.Farmer$cropsArgs<ExtArgs>;
    _count?: boolean | Prisma.FarmerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["farmer"]>;
export type FarmerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mobileNumber?: boolean;
    mobileNumberVerified?: boolean;
    farmerID?: boolean;
    password?: boolean;
    fullName?: boolean;
    dob?: boolean;
    address?: boolean;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
}, ExtArgs["result"]["farmer"]>;
export type FarmerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mobileNumber?: boolean;
    mobileNumberVerified?: boolean;
    farmerID?: boolean;
    password?: boolean;
    fullName?: boolean;
    dob?: boolean;
    address?: boolean;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
}, ExtArgs["result"]["farmer"]>;
export type FarmerSelectScalar = {
    id?: boolean;
    mobileNumber?: boolean;
    mobileNumberVerified?: boolean;
    farmerID?: boolean;
    password?: boolean;
    fullName?: boolean;
    dob?: boolean;
    address?: boolean;
    isVerified?: boolean;
    isProfileCompleted?: boolean;
    createdAt?: boolean;
    updateAt?: boolean;
};
export type FarmerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "mobileNumber" | "mobileNumberVerified" | "farmerID" | "password" | "fullName" | "dob" | "address" | "isVerified" | "isProfileCompleted" | "createdAt" | "updateAt", ExtArgs["result"]["farmer"]>;
export type FarmerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    landInfo?: boolean | Prisma.Farmer$landInfoArgs<ExtArgs>;
    documents?: boolean | Prisma.Farmer$documentsArgs<ExtArgs>;
    crops?: boolean | Prisma.Farmer$cropsArgs<ExtArgs>;
    _count?: boolean | Prisma.FarmerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FarmerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type FarmerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $FarmerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Farmer";
    objects: {
        landInfo: Prisma.$LandInfoPayload<ExtArgs>[];
        documents: Prisma.$DocumentPayload<ExtArgs>[];
        crops: Prisma.$CropPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        mobileNumber: string;
        mobileNumberVerified: boolean;
        farmerID: string | null;
        password: string | null;
        fullName: string | null;
        dob: string | null;
        address: string | null;
        isVerified: boolean;
        isProfileCompleted: boolean;
        createdAt: Date;
        updateAt: Date;
    }, ExtArgs["result"]["farmer"]>;
    composites: {};
};
export type FarmerGetPayload<S extends boolean | null | undefined | FarmerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FarmerPayload, S>;
export type FarmerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FarmerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FarmerCountAggregateInputType | true;
};
export interface FarmerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Farmer'];
        meta: {
            name: 'Farmer';
        };
    };
    /**
     * Find zero or one Farmer that matches the filter.
     * @param {FarmerFindUniqueArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmerFindUniqueArgs>(args: Prisma.SelectSubset<T, FarmerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FarmerClient<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Farmer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmerFindUniqueOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FarmerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FarmerClient<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Farmer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindFirstArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmerFindFirstArgs>(args?: Prisma.SelectSubset<T, FarmerFindFirstArgs<ExtArgs>>): Prisma.Prisma__FarmerClient<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Farmer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindFirstOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FarmerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FarmerClient<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Farmers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farmers
     * const farmers = await prisma.farmer.findMany()
     *
     * // Get first 10 Farmers
     * const farmers = await prisma.farmer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const farmerWithIdOnly = await prisma.farmer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FarmerFindManyArgs>(args?: Prisma.SelectSubset<T, FarmerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Farmer.
     * @param {FarmerCreateArgs} args - Arguments to create a Farmer.
     * @example
     * // Create one Farmer
     * const Farmer = await prisma.farmer.create({
     *   data: {
     *     // ... data to create a Farmer
     *   }
     * })
     *
     */
    create<T extends FarmerCreateArgs>(args: Prisma.SelectSubset<T, FarmerCreateArgs<ExtArgs>>): Prisma.Prisma__FarmerClient<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Farmers.
     * @param {FarmerCreateManyArgs} args - Arguments to create many Farmers.
     * @example
     * // Create many Farmers
     * const farmer = await prisma.farmer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FarmerCreateManyArgs>(args?: Prisma.SelectSubset<T, FarmerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Farmers and returns the data saved in the database.
     * @param {FarmerCreateManyAndReturnArgs} args - Arguments to create many Farmers.
     * @example
     * // Create many Farmers
     * const farmer = await prisma.farmer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Farmers and only return the `id`
     * const farmerWithIdOnly = await prisma.farmer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FarmerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FarmerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Farmer.
     * @param {FarmerDeleteArgs} args - Arguments to delete one Farmer.
     * @example
     * // Delete one Farmer
     * const Farmer = await prisma.farmer.delete({
     *   where: {
     *     // ... filter to delete one Farmer
     *   }
     * })
     *
     */
    delete<T extends FarmerDeleteArgs>(args: Prisma.SelectSubset<T, FarmerDeleteArgs<ExtArgs>>): Prisma.Prisma__FarmerClient<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Farmer.
     * @param {FarmerUpdateArgs} args - Arguments to update one Farmer.
     * @example
     * // Update one Farmer
     * const farmer = await prisma.farmer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FarmerUpdateArgs>(args: Prisma.SelectSubset<T, FarmerUpdateArgs<ExtArgs>>): Prisma.Prisma__FarmerClient<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Farmers.
     * @param {FarmerDeleteManyArgs} args - Arguments to filter Farmers to delete.
     * @example
     * // Delete a few Farmers
     * const { count } = await prisma.farmer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FarmerDeleteManyArgs>(args?: Prisma.SelectSubset<T, FarmerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farmers
     * const farmer = await prisma.farmer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FarmerUpdateManyArgs>(args: Prisma.SelectSubset<T, FarmerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Farmers and returns the data updated in the database.
     * @param {FarmerUpdateManyAndReturnArgs} args - Arguments to update many Farmers.
     * @example
     * // Update many Farmers
     * const farmer = await prisma.farmer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Farmers and only return the `id`
     * const farmerWithIdOnly = await prisma.farmer.updateManyAndReturn({
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
    updateManyAndReturn<T extends FarmerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FarmerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Farmer.
     * @param {FarmerUpsertArgs} args - Arguments to update or create a Farmer.
     * @example
     * // Update or create a Farmer
     * const farmer = await prisma.farmer.upsert({
     *   create: {
     *     // ... data to create a Farmer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farmer we want to update
     *   }
     * })
     */
    upsert<T extends FarmerUpsertArgs>(args: Prisma.SelectSubset<T, FarmerUpsertArgs<ExtArgs>>): Prisma.Prisma__FarmerClient<runtime.Types.Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCountArgs} args - Arguments to filter Farmers to count.
     * @example
     * // Count the number of Farmers
     * const count = await prisma.farmer.count({
     *   where: {
     *     // ... the filter for the Farmers we want to count
     *   }
     * })
    **/
    count<T extends FarmerCountArgs>(args?: Prisma.Subset<T, FarmerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FarmerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmerAggregateArgs>(args: Prisma.Subset<T, FarmerAggregateArgs>): Prisma.PrismaPromise<GetFarmerAggregateType<T>>;
    /**
     * Group by Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FarmerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FarmerGroupByArgs['orderBy'];
    } : {
        orderBy?: FarmerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FarmerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Farmer model
     */
    readonly fields: FarmerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Farmer.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FarmerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    landInfo<T extends Prisma.Farmer$landInfoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farmer$landInfoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documents<T extends Prisma.Farmer$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farmer$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    crops<T extends Prisma.Farmer$cropsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farmer$cropsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Farmer model
 */
export interface FarmerFieldRefs {
    readonly id: Prisma.FieldRef<"Farmer", 'String'>;
    readonly mobileNumber: Prisma.FieldRef<"Farmer", 'String'>;
    readonly mobileNumberVerified: Prisma.FieldRef<"Farmer", 'Boolean'>;
    readonly farmerID: Prisma.FieldRef<"Farmer", 'String'>;
    readonly password: Prisma.FieldRef<"Farmer", 'String'>;
    readonly fullName: Prisma.FieldRef<"Farmer", 'String'>;
    readonly dob: Prisma.FieldRef<"Farmer", 'String'>;
    readonly address: Prisma.FieldRef<"Farmer", 'String'>;
    readonly isVerified: Prisma.FieldRef<"Farmer", 'Boolean'>;
    readonly isProfileCompleted: Prisma.FieldRef<"Farmer", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Farmer", 'DateTime'>;
    readonly updateAt: Prisma.FieldRef<"Farmer", 'DateTime'>;
}
/**
 * Farmer findUnique
 */
export type FarmerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmerInclude<ExtArgs> | null;
    /**
     * Filter, which Farmer to fetch.
     */
    where: Prisma.FarmerWhereUniqueInput;
};
/**
 * Farmer findUniqueOrThrow
 */
export type FarmerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmerInclude<ExtArgs> | null;
    /**
     * Filter, which Farmer to fetch.
     */
    where: Prisma.FarmerWhereUniqueInput;
};
/**
 * Farmer findFirst
 */
export type FarmerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmerInclude<ExtArgs> | null;
    /**
     * Filter, which Farmer to fetch.
     */
    where?: Prisma.FarmerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Farmers to fetch.
     */
    orderBy?: Prisma.FarmerOrderByWithRelationInput | Prisma.FarmerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Farmers.
     */
    cursor?: Prisma.FarmerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Farmers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Farmers.
     */
    distinct?: Prisma.FarmerScalarFieldEnum | Prisma.FarmerScalarFieldEnum[];
};
/**
 * Farmer findFirstOrThrow
 */
export type FarmerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmerInclude<ExtArgs> | null;
    /**
     * Filter, which Farmer to fetch.
     */
    where?: Prisma.FarmerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Farmers to fetch.
     */
    orderBy?: Prisma.FarmerOrderByWithRelationInput | Prisma.FarmerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Farmers.
     */
    cursor?: Prisma.FarmerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Farmers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Farmers.
     */
    distinct?: Prisma.FarmerScalarFieldEnum | Prisma.FarmerScalarFieldEnum[];
};
/**
 * Farmer findMany
 */
export type FarmerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmerInclude<ExtArgs> | null;
    /**
     * Filter, which Farmers to fetch.
     */
    where?: Prisma.FarmerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Farmers to fetch.
     */
    orderBy?: Prisma.FarmerOrderByWithRelationInput | Prisma.FarmerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Farmers.
     */
    cursor?: Prisma.FarmerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Farmers.
     */
    skip?: number;
    distinct?: Prisma.FarmerScalarFieldEnum | Prisma.FarmerScalarFieldEnum[];
};
/**
 * Farmer create
 */
export type FarmerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Farmer.
     */
    data: Prisma.XOR<Prisma.FarmerCreateInput, Prisma.FarmerUncheckedCreateInput>;
};
/**
 * Farmer createMany
 */
export type FarmerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farmers.
     */
    data: Prisma.FarmerCreateManyInput | Prisma.FarmerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Farmer createManyAndReturn
 */
export type FarmerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * The data used to create many Farmers.
     */
    data: Prisma.FarmerCreateManyInput | Prisma.FarmerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Farmer update
 */
export type FarmerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Farmer.
     */
    data: Prisma.XOR<Prisma.FarmerUpdateInput, Prisma.FarmerUncheckedUpdateInput>;
    /**
     * Choose, which Farmer to update.
     */
    where: Prisma.FarmerWhereUniqueInput;
};
/**
 * Farmer updateMany
 */
export type FarmerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Farmers.
     */
    data: Prisma.XOR<Prisma.FarmerUpdateManyMutationInput, Prisma.FarmerUncheckedUpdateManyInput>;
    /**
     * Filter which Farmers to update
     */
    where?: Prisma.FarmerWhereInput;
    /**
     * Limit how many Farmers to update.
     */
    limit?: number;
};
/**
 * Farmer updateManyAndReturn
 */
export type FarmerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * The data used to update Farmers.
     */
    data: Prisma.XOR<Prisma.FarmerUpdateManyMutationInput, Prisma.FarmerUncheckedUpdateManyInput>;
    /**
     * Filter which Farmers to update
     */
    where?: Prisma.FarmerWhereInput;
    /**
     * Limit how many Farmers to update.
     */
    limit?: number;
};
/**
 * Farmer upsert
 */
export type FarmerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Farmer to update in case it exists.
     */
    where: Prisma.FarmerWhereUniqueInput;
    /**
     * In case the Farmer found by the `where` argument doesn't exist, create a new Farmer with this data.
     */
    create: Prisma.XOR<Prisma.FarmerCreateInput, Prisma.FarmerUncheckedCreateInput>;
    /**
     * In case the Farmer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FarmerUpdateInput, Prisma.FarmerUncheckedUpdateInput>;
};
/**
 * Farmer delete
 */
export type FarmerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmerInclude<ExtArgs> | null;
    /**
     * Filter which Farmer to delete.
     */
    where: Prisma.FarmerWhereUniqueInput;
};
/**
 * Farmer deleteMany
 */
export type FarmerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Farmers to delete
     */
    where?: Prisma.FarmerWhereInput;
    /**
     * Limit how many Farmers to delete.
     */
    limit?: number;
};
/**
 * Farmer.landInfo
 */
export type Farmer$landInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.LandInfoWhereInput;
    orderBy?: Prisma.LandInfoOrderByWithRelationInput | Prisma.LandInfoOrderByWithRelationInput[];
    cursor?: Prisma.LandInfoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LandInfoScalarFieldEnum | Prisma.LandInfoScalarFieldEnum[];
};
/**
 * Farmer.documents
 */
export type Farmer$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
/**
 * Farmer.crops
 */
export type Farmer$cropsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
    where?: Prisma.CropWhereInput;
    orderBy?: Prisma.CropOrderByWithRelationInput | Prisma.CropOrderByWithRelationInput[];
    cursor?: Prisma.CropWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CropScalarFieldEnum | Prisma.CropScalarFieldEnum[];
};
/**
 * Farmer without action
 */
export type FarmerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: Prisma.FarmerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farmer
     */
    omit?: Prisma.FarmerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Farmer.d.ts.map