import { Router } from "express";
import authRoutes from "./authRoutes.js";
import threadRoutes from "./threadRoutes.js";
import replyRoute from "./Replyroutes.js";
import likeRouter from "./LikeRoutes.js";
import userRouter from "./UserRoutes.js";
import followRouter from "./FollowRoutes.js";
import AnalyticRouter from "./AnalyticRoutes.js";
const threadRoute = Router();
threadRoute.use("/auth", authRoutes);
threadRoute.use("/thread", threadRoutes);
threadRoute.use("/reply", replyRoute);
threadRoute.use("/like", likeRouter);
threadRoute.use("/user", userRouter);
threadRoute.use("/follow", followRouter);
threadRoute.use("/analytic", AnalyticRouter);
export default threadRoute;
//# sourceMappingURL=index.js.map