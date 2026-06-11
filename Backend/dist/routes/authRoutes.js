import { Router } from "express";
import { register, login, getUser } from "../controllers/authController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
const authRoutes = Router();
authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.get("/me", authenticate, getUser);
export default authRoutes;
//# sourceMappingURL=authRoutes.js.map