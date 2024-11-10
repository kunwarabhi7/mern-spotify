import { Router } from "express";
import { getStats } from "../controllers/stat.controller.js";
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware.js";
const router = Router();

router.get("/", protectedRoute, requireAdmin, getStats);

export default router;
