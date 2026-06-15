import prisma from "../lib/prisma.js";
import { Request, Response } from "express";

export const editProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { full_name, bio } = req.body;
    const photo_profile = req.file ? req.file.filename : null;

    if (!userId) {
      return res.status(400).json({ message: "User tidak ditemukan" });
    }

    const updatedData: any = {};
    if (full_name) updatedData.full_name = full_name;
    if (bio !== undefined) updatedData.bio = bio;
    if (photo_profile) updatedData.photo_profile = photo_profile;

    if (Object.keys(updatedData).length === 0) {
      throw new Error("Tidak ada data yang diupdate");
    }

    const apdetProfile = await prisma.user.update({
      where: { id: userId },
      data: updatedData,
      select: {
        id: true,
        username: true,
        full_name: true,
        bio: true,
        photo_profile: true,
        email: true,
        _count: {
          select: {
            followers: true,
            followings: true,
          },
        },
      },
    });
    return res.status(200).json({
      status: 200,
      message: "berhasil update data",
      data: {
        id: apdetProfile.id,
        username: apdetProfile.username,
        full_name: apdetProfile.full_name,
        email: apdetProfile.email,
        photo_profile: apdetProfile.photo_profile,
        bio: apdetProfile.bio,
        followingCount: apdetProfile._count.followings,
        followerCount: apdetProfile._count.followers,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
};

export const getRecommendedUser = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;

  const userList = await prisma.user.findMany({
    where: {
      id: {
        not: userId,
      },
      followings: {
        none: {
          follower_id: userId,
        },
      },
    },
    include: {
      followings: {
        where: {
          follower_id: userId,
        },
      },
    },
  });
  const recommendations = userList.sort(() => Math.random() - 0.5).slice(0, 5);

  const recommended = recommendations.map((user) => ({
    ...user,

    isFollowed: user.followings.length > 0,
  }));

  return res.status(200).json({
    message: "Daftar rekomendasi user untuk difollow",
    data: recommended,
  });
};

export const searchUser = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { userData } = req.query;

  if (!userData || typeof userData !== "string") {
    return res.status(200).json({ status: 200, data: [] });
  }
  try {
    const searchResult = await prisma.user.findMany({
      where: {
        AND: [
          { id: { not: userId } },
          {
            OR: [
              {
                full_name: { contains: userData, mode: "insensitive" },
              },
              { username: { contains: userData, mode: "insensitive" } },
            ],
          },
        ],
      },
      select: {
        id: true,
        username: true,
        full_name: true,
        bio: true,
        photo_profile: true,
        followers: true,
        followings: {
          where: {
            follower_id: userId,
          },
          select: {
            id: true,
          },
        },
      },
    });
    const result = searchResult.map((user) => ({
      ...user,

      isFollowed: user.followings.length > 0,
    }));
    console.log(JSON.stringify(searchResult, null, 2));
    return res.status(200).json({ message: "daftar user", data: result });
  } catch (error) {
    console.log("Error searching user: ", error);
  }
};
