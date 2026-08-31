import { prisma } from "../config/db.js";




const updateWatchlistItem = async (req, res) => {

  const { status, rating,  notes} = req.body;

  // Find watchlist item and verify ownership
   const watchlistItem = await prisma.watchlistItem.findUnique({
    where: { id: req.params.id },
  });

  if (!watchlistItem) {
    return res.status(404).json({ error: "watchlist item not found" });
  }

   //Ensure only owner can update watchlistitem
  if (watchlistItem.userId !== req.user.id) {
    return res
      .status(403)
      .json({ error: "Not allowed to update this watchlist item" });
  }

  //Build update data
  const updateData = {};
  if ( status !== undefined) updateData.status = status.toUppercase();
  if ( rating !== undefined) updateData.rating = rating;
  if ( notes !== undefined) updateData.notes = notes;



  //Update watchlist item 

  const updatedItem = await prisma.updateWatchlistItem.update({
    where: { id: req.params.id},
    data: updateData,
  });

  res.status(200).json({
    status: "success",
    data: {
      watchlistItem: updatedItem
    },
  });


}

const removeFromwatchlist = async (req, res) => {
  //find watchlist item and verify ownership
  const watchlistItem = await prisma.watchlistItem.findUnique({
    where: { id: req.params.id },
  });

  if (!watchlistItem) {
    return res.status(404).json({ error: "watchlist item not found" });
  }

  //Ensure only owner can delete
  if (watchlistItem.userId !== req.user.id) {
    return res
      .status(403)
      .json({ error: "Not allowed to update this watchlist item" });
  }

  await prisma.watchlistItem.delete({
    where: { id: req.params.id },
  });

  res.status(200).json({
    status: "success",
    message: " Movie removed from watchlist",
  });
};

const addTowatchlist = async (req, res) => {
  const { movieId, status, rating, notes } = req.body;

  // Verify movie exists
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!movie) {
    return res.status(404).json({ error: "movie not found" });
  }

  // Check if already added
  const existingInWatchlist = await prisma.watchlistItem.findUnique({
    where: {
      userId_movieId: {
        userId: req.user.id,
        movieId: movieId,
      },
    },
  });

  if (existingInWatchlist) {
    return res.status(400).json({ error: "movie already in the watchlist" });
  }

  const watchlistItem = await prisma.watchlistItem.create({
    data: {
      userId: req.user.id,
      movieId,
      status: status || "PLANNED",
      rating,
      notes,
    },
  });

  res.status(201).json({
    status: "success",
    data: {
      watchlistItem,
    },
  });
};

export { addTowatchlist, removeFromwatchlist, updateWatchlistItem };
