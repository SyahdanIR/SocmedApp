import Router from "express";
import { createThread, getThreads } from "../controllers/ThreadController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { upload } from "../lib/multer.js";

const router = Router();

router.post("/", authenticate, upload.single("image"), createThread);
router.get("/", getThreads);

export default router;
