import prisma from "../lib/prisma.js";
export const likeThread = async (req, res, next) => {
    const userId = req.user?.id;
    const thread_id = Number(req.params.thread_id);
    try {
        const thread = await prisma.thread.findUnique({
            where: {
                id: thread_id,
            },
        });
        if (!thread) {
            return res.status(404).json({ message: "Thread tidak ditemukan" });
        }
        const existingLike = await prisma.like.findFirst({
            where: {
                user_id: userId,
                thread_id: thread_id,
            },
        });
        if (existingLike) {
            await prisma.like.delete({
                where: {
                    id: existingLike.id,
                },
            });
            return res
                .status(200)
                .json({ message: "Unlike berhasil", isLiked: false });
        }
        await prisma.like.create({
            data: {
                user_id: userId,
                thread_id: thread_id,
                created_by: userId,
                updated_by: userId,
            },
        });
        return res
            .status(200)
            .json({ message: "Berhasil like thread", isLiked: true });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", error });
    }
};
//# sourceMappingURL=LikeController.js.map