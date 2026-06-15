import prisma from "../lib/prisma.js";
import { Request, Response } from "express";

export const followingProcess = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { userToFollow_id } = req.body;

  if (userId === userToFollow_id) {
    return res.status(404).json("Tidak bisa follow diri sendiri");
  }

  const existingFollowers = await prisma.following.findFirst({
    where: { follower_id: userId, following_id: userToFollow_id },
  });

  if (existingFollowers) {
    await prisma.following.delete({
      where: { id: existingFollowers.id },
    });
    return res
      .status(200)
      .json({ message: "Berhasil unfollow user", isFollowed: false });
  }
  const followers = await prisma.following.create({
    data: {
      follower_id: userId,
      following_id: userToFollow_id,
    },
    include: {
      followerId: true,
      followingId: true,
    },
  });
  const formattedFollowers = {
    id: followers.id,
    follower_id: followers.follower_id,
    folowing_id: followers.following_id,
    followersUser: followers.followerId,
    followingUser: followers.followingId,
  };
  return res.status(200).json({
    status: 200,
    message: `si @${followers.followerId.username} follow @${followers.followingId.username}`,
    data: formattedFollowers,
    isFollowed: true,
  });
};

export const getFollowData = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;

  const followers = await prisma.following.findMany({
    where: {
      follower_id: userId,
    },
    include: {
      followingId: {
        select: {
          id: true,
          full_name: true,
          username: true,
          photo_profile: true,
        },
      },
    },
  });

  const following = await prisma.following.findMany({
    where: {
      following_id: userId,
    },
    include: {
      followerId: {
        select: {
          id: true,
          full_name: true,
          username: true,
          photo_profile: true,
          bio: true,
        },
      },
    },
  });

  const myFollowings = await prisma.following.findMany({
    where: {
      follower_id: userId,
    },
    select: {
      following_id: true,
    },
  });

  const followingIds = new Set(myFollowings.map((f) => f.following_id));
  res.json({
    // following: following.map((f) => f.followerId),
    // followers: followers.map((f) => f.followingId),
    followers: followers.map((f) => ({
      ...f.followingId,
      isFollowed: true,
    })),
    following: following.map((f) => ({
      ...f.followerId,
      isFollowed: followingIds.has(f.followerId.id),
    })),
  });
};
