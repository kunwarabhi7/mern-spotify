import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import {
  checkAdmin,
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "../controllers/admin.controller.js";

const router = Router();

// router.use(protectRoute, requireAdmin);
router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
router.get("/check", checkAdmin);
router.post("/songs", createSong);
router.delete("songs/:id", deleteSong);
router.post("/albums", createAlbum);
router.delete("albums/:id", deleteAlbum);

export default router;
