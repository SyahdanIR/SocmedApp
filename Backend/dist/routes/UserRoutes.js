import { Router } from "express";
import { editProfile, getRecommendedUser, } from "../controllers/UserController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { upload } from "../lib/multer.js";
const routes = Router();
routes.patch("/", authenticate, upload.single("photo_profile"), editProfile);
routes.get("/recommended", authenticate, getRecommendedUser);
export default routes;
//# sourceMappingURL=UserRoutes.js.map