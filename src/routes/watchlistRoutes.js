import express from "express";
import { addTowatchlist } from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", addTowatchlist);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
