import express from "express";
import { addTowatchlist, removeFromwatchlist } from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", addTowatchlist);



router.delete("/:id", removeFromwatchlist)

export default router;
