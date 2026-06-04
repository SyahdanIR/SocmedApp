import { Router } from "express";
import authRoutes from "./authRoutes.js";
import threadRoutes from "./threadRoutes.js";

const threadRoute = Router();

threadRoute.use("/auth", authRoutes);
threadRoute.use("/thread", threadRoutes);

export default threadRoute;
