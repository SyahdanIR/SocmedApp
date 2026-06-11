import { Router } from "express";
import authRoutes from "./authRoutes.js";
import threadRoutes from "./threadRoutes.js";
import replyRoute from "./Replyroutes.js";
import likeRouter from "./LikeRoutes.js";
import userRouter from "./UserRoutes.js";

const threadRoute = Router();

threadRoute.use("/auth", authRoutes);
threadRoute.use("/thread", threadRoutes);
threadRoute.use("/reply", replyRoute);
threadRoute.use("/like", likeRouter);
threadRoute.use("/user", userRouter);

export default threadRoute;
