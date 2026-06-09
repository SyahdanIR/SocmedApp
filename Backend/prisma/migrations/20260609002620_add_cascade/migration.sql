-- DropForeignKey
ALTER TABLE "followings" DROP CONSTRAINT "followings_follower_id_fkey";

-- DropForeignKey
ALTER TABLE "followings" DROP CONSTRAINT "followings_following_id_fkey";

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_created_by_fkey";

-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_thread_id_fkey";

-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_user_id_fkey";

-- DropForeignKey
ALTER TABLE "threads" DROP CONSTRAINT "threads_created_by_fkey";

-- AlterTable
ALTER TABLE "replies" ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followings" ADD CONSTRAINT "followings_following_id_fkey" FOREIGN KEY ("following_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followings" ADD CONSTRAINT "followings_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE;
