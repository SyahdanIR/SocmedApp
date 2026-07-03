import prisma from "../lib/prisma.js";
export const popularThread = async (req, res) => {
    const userId = req.user.id;
    const { selectedFilter } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    let dateFilter = {};
    if (selectedFilter === "7_days") {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        dateFilter = {
            createdAt: {
                gte: sevenDaysAgo,
            },
        };
    }
    if (selectedFilter === "14_days") {
        const fourteenDaysAgo = new Date();
        fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
        dateFilter = {
            createdAt: {
                gte: fourteenDaysAgo,
            },
        };
    }
    const threads = await prisma.thread.findMany({
        where: { created_by: userId, ...dateFilter },
        include: {
            _count: {
                select: {
                    replies: true,
                    likes: true,
                },
            },
        },
    });
    const analytics = threads.map((thread) => ({
        ...thread,
        popularity: thread._count.likes + thread._count.replies,
        likeCount: thread._count.likes,
        replyCount: thread._count.replies,
        threadImg: thread.image,
    }));
    analytics.sort((a, b) => b.popularity - a.popularity);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedResults = analytics.slice(startIndex, endIndex);
    res.json({
        data: paginatedResults,
        meta: {
            currentPage: page,
            limit: limit,
            totalData: analytics.length,
            totalPages: Math.ceil(analytics.length / limit),
            hasNextPage: endIndex < analytics.length,
        },
    });
};
export const countData = async (req, res) => {
    const userId = req.user.id;
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            _count: {
                select: {
                    threads: true,
                    followers: true,
                    followings: true,
                },
            },
        },
    });
    const countLikes = await prisma.thread.findMany({
        where: { created_by: userId },
        include: {
            _count: {
                select: {
                    likes: true,
                    replies: true,
                },
            },
        },
    });
    const totalLikes = countLikes.reduce((acc, thread) => acc + thread._count.likes, 0);
    const totalReply = countLikes.reduce((acc, likes) => acc + likes._count.replies, 0);
    res.json({
        threadCount: user?._count.threads,
        likeCount: totalLikes,
        followerCount: user?._count.followings,
        followingCount: user?._count.followers,
        replyCount: totalReply,
    });
};
export const notifications = async (req, res) => {
    const userId = req.user.id;
    const likes = await prisma.like.findMany({
        where: {
            threadLike: {
                created_by: userId,
            },
            NOT: { user_id: userId },
        },
        include: {
            userid: true,
            threadLike: true,
        },
    });
    const follows = await prisma.following.findMany({
        where: { following_id: userId },
        include: {
            followerId: true,
        },
    });
    const replies = await prisma.reply.findMany({
        where: {
            thread: {
                created_by: userId,
            },
            NOT: { user_id: userId },
        },
        include: {
            user: true,
            thread: true,
        },
    });
    const followNotif = follows.map((f) => ({
        id: f.id,
        type: "follow",
        actor: f.followerId,
        createdAt: f.created_at,
        action: "started following you",
    }));
    const likeNotif = likes.map((l) => ({
        id: l.id,
        type: "like",
        actor: l.userid,
        threadId: l.threadLike,
        createdAt: l.createdAt,
        action: "liked your thread",
    }));
    const replyNotif = replies.map((r) => ({
        id: r.id,
        type: "reply",
        actor: r.user,
        content: r.content,
        image: r.image,
        threadId: r.thread,
        createdAt: r.createdAt,
        action: "replied to your thread",
    }));
    const notifications = [...likeNotif, ...followNotif, ...replyNotif].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json({ data: notifications });
};
export const followerGrowth = async (req, res) => {
    const userId = req.user.id;
    const follows = await prisma.following.findMany({
        where: {
            following_id: userId,
        },
        select: {
            created_at: true,
        },
        orderBy: {
            created_at: "asc",
        },
    });
    const grouped = follows.reduce((acc, follow) => {
        const date = follow.created_at.toISOString().slice(0, 10);
        acc[date] = (acc[date] || 0) + 1;
        return acc;
    }, {});
    const result = Object.entries(grouped).map(([date, count]) => ({
        date,
        newFollowers: count,
    }));
    res.json(result);
};
//# sourceMappingURL=AnalyticControler.js.map