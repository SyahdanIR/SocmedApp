import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Following
 *
 */
export type FollowingModel = runtime.Types.Result.DefaultSelection<Prisma.$FollowingPayload>;
export type AggregateFollowing = {
    _count: FollowingCountAggregateOutputType | null;
    _avg: FollowingAvgAggregateOutputType | null;
    _sum: FollowingSumAggregateOutputType | null;
    _min: FollowingMinAggregateOutputType | null;
    _max: FollowingMaxAggregateOutputType | null;
};
export type FollowingAvgAggregateOutputType = {
    id: number | null;
    following_id: number | null;
    follower_id: number | null;
    usersId: number | null;
};
export type FollowingSumAggregateOutputType = {
    id: number | null;
    following_id: number | null;
    follower_id: number | null;
    usersId: number | null;
};
export type FollowingMinAggregateOutputType = {
    id: number | null;
    following_id: number | null;
    follower_id: number | null;
    created_at: Date | null;
    uodate_at: Date | null;
    usersId: number | null;
};
export type FollowingMaxAggregateOutputType = {
    id: number | null;
    following_id: number | null;
    follower_id: number | null;
    created_at: Date | null;
    uodate_at: Date | null;
    usersId: number | null;
};
export type FollowingCountAggregateOutputType = {
    id: number;
    following_id: number;
    follower_id: number;
    created_at: number;
    uodate_at: number;
    usersId: number;
    _all: number;
};
export type FollowingAvgAggregateInputType = {
    id?: true;
    following_id?: true;
    follower_id?: true;
    usersId?: true;
};
export type FollowingSumAggregateInputType = {
    id?: true;
    following_id?: true;
    follower_id?: true;
    usersId?: true;
};
export type FollowingMinAggregateInputType = {
    id?: true;
    following_id?: true;
    follower_id?: true;
    created_at?: true;
    uodate_at?: true;
    usersId?: true;
};
export type FollowingMaxAggregateInputType = {
    id?: true;
    following_id?: true;
    follower_id?: true;
    created_at?: true;
    uodate_at?: true;
    usersId?: true;
};
export type FollowingCountAggregateInputType = {
    id?: true;
    following_id?: true;
    follower_id?: true;
    created_at?: true;
    uodate_at?: true;
    usersId?: true;
    _all?: true;
};
export type FollowingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Following to aggregate.
     */
    where?: Prisma.FollowingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Followings to fetch.
     */
    orderBy?: Prisma.FollowingOrderByWithRelationInput | Prisma.FollowingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FollowingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Followings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Followings
    **/
    _count?: true | FollowingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FollowingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FollowingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FollowingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FollowingMaxAggregateInputType;
};
export type GetFollowingAggregateType<T extends FollowingAggregateArgs> = {
    [P in keyof T & keyof AggregateFollowing]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFollowing[P]> : Prisma.GetScalarType<T[P], AggregateFollowing[P]>;
};
export type FollowingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FollowingWhereInput;
    orderBy?: Prisma.FollowingOrderByWithAggregationInput | Prisma.FollowingOrderByWithAggregationInput[];
    by: Prisma.FollowingScalarFieldEnum[] | Prisma.FollowingScalarFieldEnum;
    having?: Prisma.FollowingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FollowingCountAggregateInputType | true;
    _avg?: FollowingAvgAggregateInputType;
    _sum?: FollowingSumAggregateInputType;
    _min?: FollowingMinAggregateInputType;
    _max?: FollowingMaxAggregateInputType;
};
export type FollowingGroupByOutputType = {
    id: number;
    following_id: number;
    follower_id: number;
    created_at: Date;
    uodate_at: Date;
    usersId: number | null;
    _count: FollowingCountAggregateOutputType | null;
    _avg: FollowingAvgAggregateOutputType | null;
    _sum: FollowingSumAggregateOutputType | null;
    _min: FollowingMinAggregateOutputType | null;
    _max: FollowingMaxAggregateOutputType | null;
};
export type GetFollowingGroupByPayload<T extends FollowingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FollowingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FollowingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FollowingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FollowingGroupByOutputType[P]>;
}>>;
export type FollowingWhereInput = {
    AND?: Prisma.FollowingWhereInput | Prisma.FollowingWhereInput[];
    OR?: Prisma.FollowingWhereInput[];
    NOT?: Prisma.FollowingWhereInput | Prisma.FollowingWhereInput[];
    id?: Prisma.IntFilter<"Following"> | number;
    following_id?: Prisma.IntFilter<"Following"> | number;
    follower_id?: Prisma.IntFilter<"Following"> | number;
    created_at?: Prisma.DateTimeFilter<"Following"> | Date | string;
    uodate_at?: Prisma.DateTimeFilter<"Following"> | Date | string;
    usersId?: Prisma.IntNullableFilter<"Following"> | number | null;
    followingId?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    followerId?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FollowingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    following_id?: Prisma.SortOrder;
    follower_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    uodate_at?: Prisma.SortOrder;
    usersId?: Prisma.SortOrderInput | Prisma.SortOrder;
    followingId?: Prisma.UserOrderByWithRelationInput;
    followerId?: Prisma.UserOrderByWithRelationInput;
};
export type FollowingWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FollowingWhereInput | Prisma.FollowingWhereInput[];
    OR?: Prisma.FollowingWhereInput[];
    NOT?: Prisma.FollowingWhereInput | Prisma.FollowingWhereInput[];
    following_id?: Prisma.IntFilter<"Following"> | number;
    follower_id?: Prisma.IntFilter<"Following"> | number;
    created_at?: Prisma.DateTimeFilter<"Following"> | Date | string;
    uodate_at?: Prisma.DateTimeFilter<"Following"> | Date | string;
    usersId?: Prisma.IntNullableFilter<"Following"> | number | null;
    followingId?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    followerId?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type FollowingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    following_id?: Prisma.SortOrder;
    follower_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    uodate_at?: Prisma.SortOrder;
    usersId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.FollowingCountOrderByAggregateInput;
    _avg?: Prisma.FollowingAvgOrderByAggregateInput;
    _max?: Prisma.FollowingMaxOrderByAggregateInput;
    _min?: Prisma.FollowingMinOrderByAggregateInput;
    _sum?: Prisma.FollowingSumOrderByAggregateInput;
};
export type FollowingScalarWhereWithAggregatesInput = {
    AND?: Prisma.FollowingScalarWhereWithAggregatesInput | Prisma.FollowingScalarWhereWithAggregatesInput[];
    OR?: Prisma.FollowingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FollowingScalarWhereWithAggregatesInput | Prisma.FollowingScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Following"> | number;
    following_id?: Prisma.IntWithAggregatesFilter<"Following"> | number;
    follower_id?: Prisma.IntWithAggregatesFilter<"Following"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Following"> | Date | string;
    uodate_at?: Prisma.DateTimeWithAggregatesFilter<"Following"> | Date | string;
    usersId?: Prisma.IntNullableWithAggregatesFilter<"Following"> | number | null;
};
export type FollowingCreateInput = {
    created_at?: Date | string;
    uodate_at?: Date | string;
    usersId?: number | null;
    followingId: Prisma.UserCreateNestedOneWithoutFollowingsInput;
    followerId: Prisma.UserCreateNestedOneWithoutFollowersInput;
};
export type FollowingUncheckedCreateInput = {
    id?: number;
    following_id: number;
    follower_id: number;
    created_at?: Date | string;
    uodate_at?: Date | string;
    usersId?: number | null;
};
export type FollowingUpdateInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uodate_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usersId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    followingId?: Prisma.UserUpdateOneRequiredWithoutFollowingsNestedInput;
    followerId?: Prisma.UserUpdateOneRequiredWithoutFollowersNestedInput;
};
export type FollowingUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    following_id?: Prisma.IntFieldUpdateOperationsInput | number;
    follower_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uodate_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usersId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type FollowingCreateManyInput = {
    id?: number;
    following_id: number;
    follower_id: number;
    created_at?: Date | string;
    uodate_at?: Date | string;
    usersId?: number | null;
};
export type FollowingUpdateManyMutationInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uodate_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usersId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type FollowingUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    following_id?: Prisma.IntFieldUpdateOperationsInput | number;
    follower_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uodate_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usersId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type FollowingListRelationFilter = {
    every?: Prisma.FollowingWhereInput;
    some?: Prisma.FollowingWhereInput;
    none?: Prisma.FollowingWhereInput;
};
export type FollowingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FollowingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    following_id?: Prisma.SortOrder;
    follower_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    uodate_at?: Prisma.SortOrder;
    usersId?: Prisma.SortOrder;
};
export type FollowingAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    following_id?: Prisma.SortOrder;
    follower_id?: Prisma.SortOrder;
    usersId?: Prisma.SortOrder;
};
export type FollowingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    following_id?: Prisma.SortOrder;
    follower_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    uodate_at?: Prisma.SortOrder;
    usersId?: Prisma.SortOrder;
};
export type FollowingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    following_id?: Prisma.SortOrder;
    follower_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    uodate_at?: Prisma.SortOrder;
    usersId?: Prisma.SortOrder;
};
export type FollowingSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    following_id?: Prisma.SortOrder;
    follower_id?: Prisma.SortOrder;
    usersId?: Prisma.SortOrder;
};
export type FollowingCreateNestedManyWithoutFollowingIdInput = {
    create?: Prisma.XOR<Prisma.FollowingCreateWithoutFollowingIdInput, Prisma.FollowingUncheckedCreateWithoutFollowingIdInput> | Prisma.FollowingCreateWithoutFollowingIdInput[] | Prisma.FollowingUncheckedCreateWithoutFollowingIdInput[];
    connectOrCreate?: Prisma.FollowingCreateOrConnectWithoutFollowingIdInput | Prisma.FollowingCreateOrConnectWithoutFollowingIdInput[];
    createMany?: Prisma.FollowingCreateManyFollowingIdInputEnvelope;
    connect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
};
export type FollowingCreateNestedManyWithoutFollowerIdInput = {
    create?: Prisma.XOR<Prisma.FollowingCreateWithoutFollowerIdInput, Prisma.FollowingUncheckedCreateWithoutFollowerIdInput> | Prisma.FollowingCreateWithoutFollowerIdInput[] | Prisma.FollowingUncheckedCreateWithoutFollowerIdInput[];
    connectOrCreate?: Prisma.FollowingCreateOrConnectWithoutFollowerIdInput | Prisma.FollowingCreateOrConnectWithoutFollowerIdInput[];
    createMany?: Prisma.FollowingCreateManyFollowerIdInputEnvelope;
    connect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
};
export type FollowingUncheckedCreateNestedManyWithoutFollowingIdInput = {
    create?: Prisma.XOR<Prisma.FollowingCreateWithoutFollowingIdInput, Prisma.FollowingUncheckedCreateWithoutFollowingIdInput> | Prisma.FollowingCreateWithoutFollowingIdInput[] | Prisma.FollowingUncheckedCreateWithoutFollowingIdInput[];
    connectOrCreate?: Prisma.FollowingCreateOrConnectWithoutFollowingIdInput | Prisma.FollowingCreateOrConnectWithoutFollowingIdInput[];
    createMany?: Prisma.FollowingCreateManyFollowingIdInputEnvelope;
    connect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
};
export type FollowingUncheckedCreateNestedManyWithoutFollowerIdInput = {
    create?: Prisma.XOR<Prisma.FollowingCreateWithoutFollowerIdInput, Prisma.FollowingUncheckedCreateWithoutFollowerIdInput> | Prisma.FollowingCreateWithoutFollowerIdInput[] | Prisma.FollowingUncheckedCreateWithoutFollowerIdInput[];
    connectOrCreate?: Prisma.FollowingCreateOrConnectWithoutFollowerIdInput | Prisma.FollowingCreateOrConnectWithoutFollowerIdInput[];
    createMany?: Prisma.FollowingCreateManyFollowerIdInputEnvelope;
    connect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
};
export type FollowingUpdateManyWithoutFollowingIdNestedInput = {
    create?: Prisma.XOR<Prisma.FollowingCreateWithoutFollowingIdInput, Prisma.FollowingUncheckedCreateWithoutFollowingIdInput> | Prisma.FollowingCreateWithoutFollowingIdInput[] | Prisma.FollowingUncheckedCreateWithoutFollowingIdInput[];
    connectOrCreate?: Prisma.FollowingCreateOrConnectWithoutFollowingIdInput | Prisma.FollowingCreateOrConnectWithoutFollowingIdInput[];
    upsert?: Prisma.FollowingUpsertWithWhereUniqueWithoutFollowingIdInput | Prisma.FollowingUpsertWithWhereUniqueWithoutFollowingIdInput[];
    createMany?: Prisma.FollowingCreateManyFollowingIdInputEnvelope;
    set?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    disconnect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    delete?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    connect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    update?: Prisma.FollowingUpdateWithWhereUniqueWithoutFollowingIdInput | Prisma.FollowingUpdateWithWhereUniqueWithoutFollowingIdInput[];
    updateMany?: Prisma.FollowingUpdateManyWithWhereWithoutFollowingIdInput | Prisma.FollowingUpdateManyWithWhereWithoutFollowingIdInput[];
    deleteMany?: Prisma.FollowingScalarWhereInput | Prisma.FollowingScalarWhereInput[];
};
export type FollowingUpdateManyWithoutFollowerIdNestedInput = {
    create?: Prisma.XOR<Prisma.FollowingCreateWithoutFollowerIdInput, Prisma.FollowingUncheckedCreateWithoutFollowerIdInput> | Prisma.FollowingCreateWithoutFollowerIdInput[] | Prisma.FollowingUncheckedCreateWithoutFollowerIdInput[];
    connectOrCreate?: Prisma.FollowingCreateOrConnectWithoutFollowerIdInput | Prisma.FollowingCreateOrConnectWithoutFollowerIdInput[];
    upsert?: Prisma.FollowingUpsertWithWhereUniqueWithoutFollowerIdInput | Prisma.FollowingUpsertWithWhereUniqueWithoutFollowerIdInput[];
    createMany?: Prisma.FollowingCreateManyFollowerIdInputEnvelope;
    set?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    disconnect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    delete?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    connect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    update?: Prisma.FollowingUpdateWithWhereUniqueWithoutFollowerIdInput | Prisma.FollowingUpdateWithWhereUniqueWithoutFollowerIdInput[];
    updateMany?: Prisma.FollowingUpdateManyWithWhereWithoutFollowerIdInput | Prisma.FollowingUpdateManyWithWhereWithoutFollowerIdInput[];
    deleteMany?: Prisma.FollowingScalarWhereInput | Prisma.FollowingScalarWhereInput[];
};
export type FollowingUncheckedUpdateManyWithoutFollowingIdNestedInput = {
    create?: Prisma.XOR<Prisma.FollowingCreateWithoutFollowingIdInput, Prisma.FollowingUncheckedCreateWithoutFollowingIdInput> | Prisma.FollowingCreateWithoutFollowingIdInput[] | Prisma.FollowingUncheckedCreateWithoutFollowingIdInput[];
    connectOrCreate?: Prisma.FollowingCreateOrConnectWithoutFollowingIdInput | Prisma.FollowingCreateOrConnectWithoutFollowingIdInput[];
    upsert?: Prisma.FollowingUpsertWithWhereUniqueWithoutFollowingIdInput | Prisma.FollowingUpsertWithWhereUniqueWithoutFollowingIdInput[];
    createMany?: Prisma.FollowingCreateManyFollowingIdInputEnvelope;
    set?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    disconnect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    delete?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    connect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    update?: Prisma.FollowingUpdateWithWhereUniqueWithoutFollowingIdInput | Prisma.FollowingUpdateWithWhereUniqueWithoutFollowingIdInput[];
    updateMany?: Prisma.FollowingUpdateManyWithWhereWithoutFollowingIdInput | Prisma.FollowingUpdateManyWithWhereWithoutFollowingIdInput[];
    deleteMany?: Prisma.FollowingScalarWhereInput | Prisma.FollowingScalarWhereInput[];
};
export type FollowingUncheckedUpdateManyWithoutFollowerIdNestedInput = {
    create?: Prisma.XOR<Prisma.FollowingCreateWithoutFollowerIdInput, Prisma.FollowingUncheckedCreateWithoutFollowerIdInput> | Prisma.FollowingCreateWithoutFollowerIdInput[] | Prisma.FollowingUncheckedCreateWithoutFollowerIdInput[];
    connectOrCreate?: Prisma.FollowingCreateOrConnectWithoutFollowerIdInput | Prisma.FollowingCreateOrConnectWithoutFollowerIdInput[];
    upsert?: Prisma.FollowingUpsertWithWhereUniqueWithoutFollowerIdInput | Prisma.FollowingUpsertWithWhereUniqueWithoutFollowerIdInput[];
    createMany?: Prisma.FollowingCreateManyFollowerIdInputEnvelope;
    set?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    disconnect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    delete?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    connect?: Prisma.FollowingWhereUniqueInput | Prisma.FollowingWhereUniqueInput[];
    update?: Prisma.FollowingUpdateWithWhereUniqueWithoutFollowerIdInput | Prisma.FollowingUpdateWithWhereUniqueWithoutFollowerIdInput[];
    updateMany?: Prisma.FollowingUpdateManyWithWhereWithoutFollowerIdInput | Prisma.FollowingUpdateManyWithWhereWithoutFollowerIdInput[];
    deleteMany?: Prisma.FollowingScalarWhereInput | Prisma.FollowingScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FollowingCreateWithoutFollowingIdInput = {
    created_at?: Date | string;
    uodate_at?: Date | string;
    usersId?: number | null;
    followerId: Prisma.UserCreateNestedOneWithoutFollowersInput;
};
export type FollowingUncheckedCreateWithoutFollowingIdInput = {
    id?: number;
    follower_id: number;
    created_at?: Date | string;
    uodate_at?: Date | string;
    usersId?: number | null;
};
export type FollowingCreateOrConnectWithoutFollowingIdInput = {
    where: Prisma.FollowingWhereUniqueInput;
    create: Prisma.XOR<Prisma.FollowingCreateWithoutFollowingIdInput, Prisma.FollowingUncheckedCreateWithoutFollowingIdInput>;
};
export type FollowingCreateManyFollowingIdInputEnvelope = {
    data: Prisma.FollowingCreateManyFollowingIdInput | Prisma.FollowingCreateManyFollowingIdInput[];
    skipDuplicates?: boolean;
};
export type FollowingCreateWithoutFollowerIdInput = {
    created_at?: Date | string;
    uodate_at?: Date | string;
    usersId?: number | null;
    followingId: Prisma.UserCreateNestedOneWithoutFollowingsInput;
};
export type FollowingUncheckedCreateWithoutFollowerIdInput = {
    id?: number;
    following_id: number;
    created_at?: Date | string;
    uodate_at?: Date | string;
    usersId?: number | null;
};
export type FollowingCreateOrConnectWithoutFollowerIdInput = {
    where: Prisma.FollowingWhereUniqueInput;
    create: Prisma.XOR<Prisma.FollowingCreateWithoutFollowerIdInput, Prisma.FollowingUncheckedCreateWithoutFollowerIdInput>;
};
export type FollowingCreateManyFollowerIdInputEnvelope = {
    data: Prisma.FollowingCreateManyFollowerIdInput | Prisma.FollowingCreateManyFollowerIdInput[];
    skipDuplicates?: boolean;
};
export type FollowingUpsertWithWhereUniqueWithoutFollowingIdInput = {
    where: Prisma.FollowingWhereUniqueInput;
    update: Prisma.XOR<Prisma.FollowingUpdateWithoutFollowingIdInput, Prisma.FollowingUncheckedUpdateWithoutFollowingIdInput>;
    create: Prisma.XOR<Prisma.FollowingCreateWithoutFollowingIdInput, Prisma.FollowingUncheckedCreateWithoutFollowingIdInput>;
};
export type FollowingUpdateWithWhereUniqueWithoutFollowingIdInput = {
    where: Prisma.FollowingWhereUniqueInput;
    data: Prisma.XOR<Prisma.FollowingUpdateWithoutFollowingIdInput, Prisma.FollowingUncheckedUpdateWithoutFollowingIdInput>;
};
export type FollowingUpdateManyWithWhereWithoutFollowingIdInput = {
    where: Prisma.FollowingScalarWhereInput;
    data: Prisma.XOR<Prisma.FollowingUpdateManyMutationInput, Prisma.FollowingUncheckedUpdateManyWithoutFollowingIdInput>;
};
export type FollowingScalarWhereInput = {
    AND?: Prisma.FollowingScalarWhereInput | Prisma.FollowingScalarWhereInput[];
    OR?: Prisma.FollowingScalarWhereInput[];
    NOT?: Prisma.FollowingScalarWhereInput | Prisma.FollowingScalarWhereInput[];
    id?: Prisma.IntFilter<"Following"> | number;
    following_id?: Prisma.IntFilter<"Following"> | number;
    follower_id?: Prisma.IntFilter<"Following"> | number;
    created_at?: Prisma.DateTimeFilter<"Following"> | Date | string;
    uodate_at?: Prisma.DateTimeFilter<"Following"> | Date | string;
    usersId?: Prisma.IntNullableFilter<"Following"> | number | null;
};
export type FollowingUpsertWithWhereUniqueWithoutFollowerIdInput = {
    where: Prisma.FollowingWhereUniqueInput;
    update: Prisma.XOR<Prisma.FollowingUpdateWithoutFollowerIdInput, Prisma.FollowingUncheckedUpdateWithoutFollowerIdInput>;
    create: Prisma.XOR<Prisma.FollowingCreateWithoutFollowerIdInput, Prisma.FollowingUncheckedCreateWithoutFollowerIdInput>;
};
export type FollowingUpdateWithWhereUniqueWithoutFollowerIdInput = {
    where: Prisma.FollowingWhereUniqueInput;
    data: Prisma.XOR<Prisma.FollowingUpdateWithoutFollowerIdInput, Prisma.FollowingUncheckedUpdateWithoutFollowerIdInput>;
};
export type FollowingUpdateManyWithWhereWithoutFollowerIdInput = {
    where: Prisma.FollowingScalarWhereInput;
    data: Prisma.XOR<Prisma.FollowingUpdateManyMutationInput, Prisma.FollowingUncheckedUpdateManyWithoutFollowerIdInput>;
};
export type FollowingCreateManyFollowingIdInput = {
    id?: number;
    follower_id: number;
    created_at?: Date | string;
    uodate_at?: Date | string;
    usersId?: number | null;
};
export type FollowingCreateManyFollowerIdInput = {
    id?: number;
    following_id: number;
    created_at?: Date | string;
    uodate_at?: Date | string;
    usersId?: number | null;
};
export type FollowingUpdateWithoutFollowingIdInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uodate_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usersId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    followerId?: Prisma.UserUpdateOneRequiredWithoutFollowersNestedInput;
};
export type FollowingUncheckedUpdateWithoutFollowingIdInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    follower_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uodate_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usersId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type FollowingUncheckedUpdateManyWithoutFollowingIdInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    follower_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uodate_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usersId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type FollowingUpdateWithoutFollowerIdInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uodate_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usersId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    followingId?: Prisma.UserUpdateOneRequiredWithoutFollowingsNestedInput;
};
export type FollowingUncheckedUpdateWithoutFollowerIdInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    following_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uodate_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usersId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type FollowingUncheckedUpdateManyWithoutFollowerIdInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    following_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uodate_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usersId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type FollowingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    following_id?: boolean;
    follower_id?: boolean;
    created_at?: boolean;
    uodate_at?: boolean;
    usersId?: boolean;
    followingId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    followerId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["following"]>;
export type FollowingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    following_id?: boolean;
    follower_id?: boolean;
    created_at?: boolean;
    uodate_at?: boolean;
    usersId?: boolean;
    followingId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    followerId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["following"]>;
export type FollowingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    following_id?: boolean;
    follower_id?: boolean;
    created_at?: boolean;
    uodate_at?: boolean;
    usersId?: boolean;
    followingId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    followerId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["following"]>;
export type FollowingSelectScalar = {
    id?: boolean;
    following_id?: boolean;
    follower_id?: boolean;
    created_at?: boolean;
    uodate_at?: boolean;
    usersId?: boolean;
};
export type FollowingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "following_id" | "follower_id" | "created_at" | "uodate_at" | "usersId", ExtArgs["result"]["following"]>;
export type FollowingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    followingId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    followerId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FollowingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    followingId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    followerId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FollowingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    followingId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    followerId?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FollowingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Following";
    objects: {
        followingId: Prisma.$UserPayload<ExtArgs>;
        followerId: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        following_id: number;
        follower_id: number;
        created_at: Date;
        uodate_at: Date;
        usersId: number | null;
    }, ExtArgs["result"]["following"]>;
    composites: {};
};
export type FollowingGetPayload<S extends boolean | null | undefined | FollowingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FollowingPayload, S>;
export type FollowingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FollowingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FollowingCountAggregateInputType | true;
};
export interface FollowingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Following'];
        meta: {
            name: 'Following';
        };
    };
    /**
     * Find zero or one Following that matches the filter.
     * @param {FollowingFindUniqueArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowingFindUniqueArgs>(args: Prisma.SelectSubset<T, FollowingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FollowingClient<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Following that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowingFindUniqueOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FollowingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FollowingClient<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Following that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindFirstArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowingFindFirstArgs>(args?: Prisma.SelectSubset<T, FollowingFindFirstArgs<ExtArgs>>): Prisma.Prisma__FollowingClient<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Following that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindFirstOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FollowingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FollowingClient<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Followings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followings
     * const followings = await prisma.following.findMany()
     *
     * // Get first 10 Followings
     * const followings = await prisma.following.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const followingWithIdOnly = await prisma.following.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FollowingFindManyArgs>(args?: Prisma.SelectSubset<T, FollowingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Following.
     * @param {FollowingCreateArgs} args - Arguments to create a Following.
     * @example
     * // Create one Following
     * const Following = await prisma.following.create({
     *   data: {
     *     // ... data to create a Following
     *   }
     * })
     *
     */
    create<T extends FollowingCreateArgs>(args: Prisma.SelectSubset<T, FollowingCreateArgs<ExtArgs>>): Prisma.Prisma__FollowingClient<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Followings.
     * @param {FollowingCreateManyArgs} args - Arguments to create many Followings.
     * @example
     * // Create many Followings
     * const following = await prisma.following.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FollowingCreateManyArgs>(args?: Prisma.SelectSubset<T, FollowingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Followings and returns the data saved in the database.
     * @param {FollowingCreateManyAndReturnArgs} args - Arguments to create many Followings.
     * @example
     * // Create many Followings
     * const following = await prisma.following.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Followings and only return the `id`
     * const followingWithIdOnly = await prisma.following.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FollowingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FollowingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Following.
     * @param {FollowingDeleteArgs} args - Arguments to delete one Following.
     * @example
     * // Delete one Following
     * const Following = await prisma.following.delete({
     *   where: {
     *     // ... filter to delete one Following
     *   }
     * })
     *
     */
    delete<T extends FollowingDeleteArgs>(args: Prisma.SelectSubset<T, FollowingDeleteArgs<ExtArgs>>): Prisma.Prisma__FollowingClient<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Following.
     * @param {FollowingUpdateArgs} args - Arguments to update one Following.
     * @example
     * // Update one Following
     * const following = await prisma.following.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FollowingUpdateArgs>(args: Prisma.SelectSubset<T, FollowingUpdateArgs<ExtArgs>>): Prisma.Prisma__FollowingClient<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Followings.
     * @param {FollowingDeleteManyArgs} args - Arguments to filter Followings to delete.
     * @example
     * // Delete a few Followings
     * const { count } = await prisma.following.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FollowingDeleteManyArgs>(args?: Prisma.SelectSubset<T, FollowingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followings
     * const following = await prisma.following.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FollowingUpdateManyArgs>(args: Prisma.SelectSubset<T, FollowingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Followings and returns the data updated in the database.
     * @param {FollowingUpdateManyAndReturnArgs} args - Arguments to update many Followings.
     * @example
     * // Update many Followings
     * const following = await prisma.following.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Followings and only return the `id`
     * const followingWithIdOnly = await prisma.following.updateManyAndReturn({
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
    updateManyAndReturn<T extends FollowingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FollowingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Following.
     * @param {FollowingUpsertArgs} args - Arguments to update or create a Following.
     * @example
     * // Update or create a Following
     * const following = await prisma.following.upsert({
     *   create: {
     *     // ... data to create a Following
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Following we want to update
     *   }
     * })
     */
    upsert<T extends FollowingUpsertArgs>(args: Prisma.SelectSubset<T, FollowingUpsertArgs<ExtArgs>>): Prisma.Prisma__FollowingClient<runtime.Types.Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingCountArgs} args - Arguments to filter Followings to count.
     * @example
     * // Count the number of Followings
     * const count = await prisma.following.count({
     *   where: {
     *     // ... the filter for the Followings we want to count
     *   }
     * })
    **/
    count<T extends FollowingCountArgs>(args?: Prisma.Subset<T, FollowingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FollowingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowingAggregateArgs>(args: Prisma.Subset<T, FollowingAggregateArgs>): Prisma.PrismaPromise<GetFollowingAggregateType<T>>;
    /**
     * Group by Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FollowingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FollowingGroupByArgs['orderBy'];
    } : {
        orderBy?: FollowingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FollowingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Following model
     */
    readonly fields: FollowingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Following.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FollowingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    followingId<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    followerId<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Following model
 */
export interface FollowingFieldRefs {
    readonly id: Prisma.FieldRef<"Following", 'Int'>;
    readonly following_id: Prisma.FieldRef<"Following", 'Int'>;
    readonly follower_id: Prisma.FieldRef<"Following", 'Int'>;
    readonly created_at: Prisma.FieldRef<"Following", 'DateTime'>;
    readonly uodate_at: Prisma.FieldRef<"Following", 'DateTime'>;
    readonly usersId: Prisma.FieldRef<"Following", 'Int'>;
}
/**
 * Following findUnique
 */
export type FollowingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingInclude<ExtArgs> | null;
    /**
     * Filter, which Following to fetch.
     */
    where: Prisma.FollowingWhereUniqueInput;
};
/**
 * Following findUniqueOrThrow
 */
export type FollowingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingInclude<ExtArgs> | null;
    /**
     * Filter, which Following to fetch.
     */
    where: Prisma.FollowingWhereUniqueInput;
};
/**
 * Following findFirst
 */
export type FollowingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingInclude<ExtArgs> | null;
    /**
     * Filter, which Following to fetch.
     */
    where?: Prisma.FollowingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Followings to fetch.
     */
    orderBy?: Prisma.FollowingOrderByWithRelationInput | Prisma.FollowingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Followings.
     */
    cursor?: Prisma.FollowingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Followings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Followings.
     */
    distinct?: Prisma.FollowingScalarFieldEnum | Prisma.FollowingScalarFieldEnum[];
};
/**
 * Following findFirstOrThrow
 */
export type FollowingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingInclude<ExtArgs> | null;
    /**
     * Filter, which Following to fetch.
     */
    where?: Prisma.FollowingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Followings to fetch.
     */
    orderBy?: Prisma.FollowingOrderByWithRelationInput | Prisma.FollowingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Followings.
     */
    cursor?: Prisma.FollowingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Followings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Followings.
     */
    distinct?: Prisma.FollowingScalarFieldEnum | Prisma.FollowingScalarFieldEnum[];
};
/**
 * Following findMany
 */
export type FollowingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingInclude<ExtArgs> | null;
    /**
     * Filter, which Followings to fetch.
     */
    where?: Prisma.FollowingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Followings to fetch.
     */
    orderBy?: Prisma.FollowingOrderByWithRelationInput | Prisma.FollowingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Followings.
     */
    cursor?: Prisma.FollowingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Followings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Followings.
     */
    distinct?: Prisma.FollowingScalarFieldEnum | Prisma.FollowingScalarFieldEnum[];
};
/**
 * Following create
 */
export type FollowingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingInclude<ExtArgs> | null;
    /**
     * The data needed to create a Following.
     */
    data: Prisma.XOR<Prisma.FollowingCreateInput, Prisma.FollowingUncheckedCreateInput>;
};
/**
 * Following createMany
 */
export type FollowingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Followings.
     */
    data: Prisma.FollowingCreateManyInput | Prisma.FollowingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Following createManyAndReturn
 */
export type FollowingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * The data used to create many Followings.
     */
    data: Prisma.FollowingCreateManyInput | Prisma.FollowingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Following update
 */
export type FollowingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingInclude<ExtArgs> | null;
    /**
     * The data needed to update a Following.
     */
    data: Prisma.XOR<Prisma.FollowingUpdateInput, Prisma.FollowingUncheckedUpdateInput>;
    /**
     * Choose, which Following to update.
     */
    where: Prisma.FollowingWhereUniqueInput;
};
/**
 * Following updateMany
 */
export type FollowingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Followings.
     */
    data: Prisma.XOR<Prisma.FollowingUpdateManyMutationInput, Prisma.FollowingUncheckedUpdateManyInput>;
    /**
     * Filter which Followings to update
     */
    where?: Prisma.FollowingWhereInput;
    /**
     * Limit how many Followings to update.
     */
    limit?: number;
};
/**
 * Following updateManyAndReturn
 */
export type FollowingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * The data used to update Followings.
     */
    data: Prisma.XOR<Prisma.FollowingUpdateManyMutationInput, Prisma.FollowingUncheckedUpdateManyInput>;
    /**
     * Filter which Followings to update
     */
    where?: Prisma.FollowingWhereInput;
    /**
     * Limit how many Followings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Following upsert
 */
export type FollowingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingInclude<ExtArgs> | null;
    /**
     * The filter to search for the Following to update in case it exists.
     */
    where: Prisma.FollowingWhereUniqueInput;
    /**
     * In case the Following found by the `where` argument doesn't exist, create a new Following with this data.
     */
    create: Prisma.XOR<Prisma.FollowingCreateInput, Prisma.FollowingUncheckedCreateInput>;
    /**
     * In case the Following was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FollowingUpdateInput, Prisma.FollowingUncheckedUpdateInput>;
};
/**
 * Following delete
 */
export type FollowingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingInclude<ExtArgs> | null;
    /**
     * Filter which Following to delete.
     */
    where: Prisma.FollowingWhereUniqueInput;
};
/**
 * Following deleteMany
 */
export type FollowingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Followings to delete
     */
    where?: Prisma.FollowingWhereInput;
    /**
     * Limit how many Followings to delete.
     */
    limit?: number;
};
/**
 * Following without action
 */
export type FollowingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: Prisma.FollowingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Following
     */
    omit?: Prisma.FollowingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowingInclude<ExtArgs> | null;
};
//# sourceMappingURL=Following.d.ts.map