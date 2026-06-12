import { Router } from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  followingProcess,
  getFollowData,
} from "../controllers/FollowController.js";

const router = Router();

router.post("/", authenticate, followingProcess);
router.get("/", authenticate, getFollowData);

export default router;
