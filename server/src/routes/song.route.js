import { Router } from "express";
import {
  getAllSongs,
  getFeaturedSongs,
  getMadeForYouSongs,
  getTrendingSongs,
} from "../controllers/song.controller.js";
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectedRoute, requireAdmin, getAllSongs);
router.get("/featured", getFeaturedSongs);
router.get("/madeForYou", getMadeForYouSongs);
router.get("/trending", getTrendingSongs);

export default router;
