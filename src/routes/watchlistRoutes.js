import express from "express";
import {
  addTowatchlist,
  removeFromwatchlist,
  updateWatchlistItem,
} from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { addTowatchlistSchema } from "../validators/watchlistValidators.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", validateRequest(addTowatchlistSchema), addTowatchlist);

router.put("/:id", updateWatchlistItem);

router.delete("/:id", removeFromwatchlist);

export default router;
