import { Router } from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  popularThread,
  countData,
  notifications,
  followerGrowth,
} from "../controllers/AnalyticControler.js";

const route = Router();

route.get("/", authenticate, popularThread);
route.get("/count", authenticate, countData);
route.get("/notif", authenticate, notifications);
route.get("/growth", authenticate, followerGrowth);

export default route;
