import { Router } from "express";
import { likeThread } from "../controllers/LikeController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
const likeRouter = Router();
likeRouter.post("/:thread_id", authenticate, likeThread);
export default likeRouter;
//# sourceMappingURL=LikeRoutes.js.map