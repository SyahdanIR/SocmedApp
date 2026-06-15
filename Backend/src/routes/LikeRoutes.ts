import { Router } from "express";
import { likeThread } from "../controllers/LikeController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const likeRouter = Router();

/**
 * @swagger
 * /like/{thread_id}:
 *   post:
 *     summary: Like atau unlike thread
 *     tags:
 *       - Like
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: thread_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID thread yang akan di-like
 *     responses:
 *       200:
 *         description: Berhasil like atau unlike thread
 *       404:
 *         description: Thread tidak ditemukan
 *       401:
 *         description: Unauthorized
 */
likeRouter.post("/:thread_id", authenticate, likeThread);

export default likeRouter;
