import { prisma } from "../config/db";

const addTowatchlist = async (req, res) => {
  const { movieId, status, rating, notes } = req.body;

  //verify movie exists
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!movie) {
    return res.status(404).json({ error: "moview not found" });
  }

  // Check if already added
  const existInWatchlist = await prisma.watchlistItem.findUnique({
    where: { id: movieId },
  });
};
