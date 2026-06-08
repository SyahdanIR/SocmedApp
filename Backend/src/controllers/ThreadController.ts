import { NextFunction, Request, Response } from "express";
import prisma from "../lib/prisma.js";
import { io } from "../index.js";

export const createThread = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = (req as any).user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Loginkan dulu le" });
    }

    const { content } = req.body;
    const image = req.file ? req.file.filename : null;

    const newThread = await prisma.thread.create({
      data: {
        content: content,
        image,
        number_of_replies: 0,
        created_by: userId,
        updated_by: userId,
      },
      include: {
        threads: {
          select: {
            id: true,
            username: true,
            full_name: true,
            email: true,
            photo_profile: true,
          },
        },
      },
    });

    const formattedThreads = {
      id: newThread.id,
      content: newThread.content,
      image: newThread.image,
      createdAt: newThread.createdAt,
      username: newThread.threads.username,
      likes: 0,
      replies: 0,
      created_by: newThread.created_by,
      updated_at: newThread.updated_at,
      updated_by: newThread.updated_by,
      threads: {
        id: newThread.threads.id,
        username: newThread.threads.username,
        full_name: newThread.threads.full_name,
        email: newThread.threads.email,
        photo_profile: newThread.threads.photo_profile,
      },
    };

    io.emit("new-thread", formattedThreads);
    io.emit("notip", {
      type: "new-thread",
      username: newThread.threads.username,
      threadId: newThread.id,
    });

    res
      .status(200)
      .json({ message: "Thread berhasil dibuat", data: newThread });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error saat membuat thread" });
  }
};

export const getThreads = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const threads = await prisma.thread.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        threads: {
          select: {
            id: true,
            username: true,
            full_name: true,
            email: true,
            photo_profile: true,
          },
        },
        _count: {
          select: {
            replies: true,
            likes: true,
          },
        },
      },
    });

    if (!threads) {
      return res
        .status(404)
        .json({ message: "Tidak ada thread yang ditemukan" });
    }

    //format threads
    const formattedThreads = threads.map((thread) => ({
      id: thread.id,
      content: thread.content,
      image: thread.image,
      createdAt: thread.createdAt,
      username: thread.threads.username,
      likes: thread._count.likes,
      replies: thread._count.replies,
      created_by: thread.created_by,
      updated_at: thread.updated_at,
      updated_by: thread.updated_by,
      threads: {
        id: thread.threads.id,
        username: thread.threads.username,
        full_name: thread.threads.full_name,
        email: thread.threads.email,
        photo_profile: thread.threads.photo_profile,
      },
    }));

    res.status(200).json({ threads: formattedThreads });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error saat mendapatkan thread" });
  }
};
