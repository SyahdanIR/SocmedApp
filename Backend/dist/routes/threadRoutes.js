import Router from "express";
import { createThread, getThreads } from "../controllers/ThreadController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
const router = Router();
router.post("/create", authenticate, createThread);
router.get("/", getThreads);
export default router;
//# sourceMappingURL=threadRoutes.js.map