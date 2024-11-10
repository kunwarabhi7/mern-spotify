import express, { Router } from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectedRoute, getAllUsers);

export default router;
