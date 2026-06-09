import { Router } from "express";
import authRoutes from "./authRoutes.js";
import threadRoutes from "./threadRoutes.js";
import replyRoute from "./Replyroutes.js";

const threadRoute = Router();

threadRoute.use("/auth", authRoutes);
threadRoute.use("/thread", threadRoutes);
threadRoute.use("/reply", replyRoute);

export default threadRoute;
