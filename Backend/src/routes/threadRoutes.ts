import { Router } from "express";
import {
  createThread,
  getThreads,
  getThreadById,
} from "../controllers/ThreadController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { upload } from "../lib/multer.js";

const router = Router();

router.post("/", authenticate, upload.single("image"), createThread);
router.get("/", getThreads);
router.get("/:id", getThreadById);

export default router;
