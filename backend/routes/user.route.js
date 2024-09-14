import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getSuggestionsConnection,
  getPublicProfile,
  updateProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/suggestions", protectRoute, getSuggestionsConnection);
router.get("/:username", protectRoute, getPublicProfile);

router.put("/profile", protectRoute, updateProfile);

export default router;
