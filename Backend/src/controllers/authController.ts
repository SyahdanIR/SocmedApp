import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { full_name, username, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        full_name,
        username,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" },
    );

    res.status(200).json({
      code: 200,
      status: "success",
      message: "Pembuatan akun berhasil",
      token: token,
      data: {
        id: user.id,
        username: user.username,
        full_name: user.full_name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "error",
      message: "Error saat membuat akun",
      error,
    });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { emailorusername, password } = req.body;
  try {
    if (emailorusername.includes("@")) {
      // log pke email
      const email = emailorusername;

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ message: "Email atau Password salah" });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(401).json({
          message: "Email atau Password salah",
        });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" },
      );

      return res.status(200).json({
        code: 200,
        status: "success",
        message: "Login menggunakan email berhasil",
        token: token,
        data: {
          user_id: user.id,
          username: user.username,
          name: user.full_name,
          email: user.email,
        },
      });
    } else {
      // log pke usn
      const username = emailorusername;
      const user = await prisma.user.findUnique({
        where: { username },
      });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Username atau Password salah" });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res
          .status(401)
          .json({ message: "Username atau Password salah" });
      }

      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" },
      );

      return res.status(200).json({
        code: 200,
        status: "success",
        message: "Login menggunakan username berhasil",
        token: token,
        data: {
          user_id: user.id,
          username: user.username,
          name: user.full_name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "error",
      message: "Error saat login",
      error,
    });
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = (req as any).user.id;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      followers: {
        include: {
          followerId: true,
        },
      },
      followings: {
        include: {
          followingId: true,
        },
      },
      threads: true,
      _count: {
        select: {
          followers: true,
          followings: true,
          threads: true,
        },
      },
    },
  });
  const formattedUser = {
    id: user?.id,
    username: user?.username,
    full_name: user?.full_name,
    bio: user?.bio,
    photo_profile: user?.photo_profile,
    followerCount: user?._count.followers,
    followingCount: user?._count.followings,
    threadCount: user?._count.threads,
    created_at: user?.createdAt,
    followerList: user?.followers,
    followingList: user?.followings,
  };
  return res.json(formattedUser);
};
