import { Router } from "express";
import { getReplyByThreadId } from "../controllers/ReplyController.js";
const router = Router();
router.get("/", getReplyByThreadId);
export default router;
//# sourceMappingURL=Replyroutes.js.map