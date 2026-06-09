import prisma from "../lib/prisma.js";
export const getReplyByThreadId = async (req, res, next) => {
    try {
        const { thread_id } = req.query;
        if (!thread_id) {
            return res.status(404).json({ message: "Thread id masih kosong" });
        }
        const replies = await prisma.thread.findMany({
            where: { id: Number(thread_id) },
            orderBy: { createdAt: "desc" },
            include: {
                threads: true,
                replies: true,
            },
        });
        return res.status(200).json({
            message: "Get Data thread successfully",
            data: replies,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error" });
    }
};
//# sourceMappingURL=ReplyController.js.map