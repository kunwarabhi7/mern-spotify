import { Router } from "express";
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware.js";
import {
  checkAdmin,
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "../controllers/admin.controller.js";

const router = Router();

router.use(protectedRoute, requireAdmin);
router.get("/check", checkAdmin);
router.post("/songs", createSong);
router.delete("songs/:id", deleteSong);
router.post("/albums", createAlbum);
router.delete("albums/:id", deleteAlbum);

export default router;
