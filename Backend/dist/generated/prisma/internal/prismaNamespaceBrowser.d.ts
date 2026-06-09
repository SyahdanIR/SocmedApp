import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Like: "Like";
    readonly Following: "Following";
    readonly Thread: "Thread";
    readonly Reply: "Reply";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly full_name: "full_name";
    readonly email: "email";
    readonly password: "password";
    readonly photo_profile: "photo_profile";
    readonly bio: "bio";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const LikeScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly thread_id: "thread_id";
    readonly createdAt: "createdAt";
    readonly created_by: "created_by";
    readonly updated_at: "updated_at";
    readonly updated_by: "updated_by";
};
export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum];
export declare const FollowingScalarFieldEnum: {
    readonly id: "id";
    readonly following_id: "following_id";
    readonly follower_id: "follower_id";
    readonly created_at: "created_at";
    readonly uodate_at: "uodate_at";
    readonly usersId: "usersId";
};
export type FollowingScalarFieldEnum = (typeof FollowingScalarFieldEnum)[keyof typeof FollowingScalarFieldEnum];
export declare const ThreadScalarFieldEnum: {
    readonly id: "id";
    readonly content: "content";
    readonly image: "image";
    readonly number_of_replies: "number_of_replies";
    readonly createdAt: "createdAt";
    readonly created_by: "created_by";
    readonly updated_at: "updated_at";
    readonly updated_by: "updated_by";
};
export type ThreadScalarFieldEnum = (typeof ThreadScalarFieldEnum)[keyof typeof ThreadScalarFieldEnum];
export declare const ReplyScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly thread_id: "thread_id";
    readonly image: "image";
    readonly content: "content";
    readonly createdAt: "createdAt";
    readonly created_by: "created_by";
    readonly updated_at: "updated_at";
    readonly updated_by: "updated_by";
};
export type ReplyScalarFieldEnum = (typeof ReplyScalarFieldEnum)[keyof typeof ReplyScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map