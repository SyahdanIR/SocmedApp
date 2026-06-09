import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma.js";
import { io } from "../index.js";

export const createReply = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = (req as any).user?.id;
  const thread_id = Number(req.params.id);
  const { content } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!thread_id) {
    return res.status(404).json({ message: "Tidak ada post untuk direply" });
  }
  const newReply = await prisma.reply.create({
    data: {
      user_id: userId,
      created_by: userId,
      updated_by: userId,
      content: content,
      thread_id: thread_id,
      image,
    },
    include: {
      user: true,
    },
  });

  io.emit("new-reply", newReply);
  io.emit("reply-notif", {
    type: newReply,
    user: userId,
  });

  return res.status(200).json({ message: "berhasil reply", data: newReply });
};
export const getReplyByThreadId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error" });
  }
};
