import { Router } from "express";
import {
  getReplyByThreadId,
  createReply,
} from "../controllers/ReplyController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { upload } from "../lib/multer.js";

const router = Router();

router.get("/", getReplyByThreadId);
router.post("/:id", authenticate, upload.single("image"), createReply);

export default router;
