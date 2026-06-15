import { Router } from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  followingProcess,
  getFollowData,
} from "../controllers/FollowController.js";

const router = Router();

/**
 * @swagger
 * /follow:
 *   post:
 *     summary: Follow / unfollow user
 *     tags:
 *       - Follow
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userToFollow_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Berhasil follow / unfollow user
 *       401:
 *         description: Unauthorized
 */
router.post("/", authenticate, followingProcess);

/**
 * @swagger
 * /follow:
 *   get:
 *     summary: Follow Data
 *     tags:
 *       - Follow
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan follow data
 *       401:
 *         description: Unauthorized
 */
router.get("/", authenticate, getFollowData);

export default router;
