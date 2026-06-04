import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token tidak ditemukan" });
    }

    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    console.log(decoded);
    (req as any).user = decoded; // Menambahkan user ke request

    next(); // Lanjutkan ke route handler berikutnya
  } catch (error) {
    return res.status(401).json({
      message: "Token tidak valid atau sudah kadaluarsa",
      error,
    });
  }
};
