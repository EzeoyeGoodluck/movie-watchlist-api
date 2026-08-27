import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});
const userId = process.env.CREATORID;

if (!userId) {
  throw new Error("CREATORID is not defined in your .env file");
}

const movies = [
  {
    title: "Inception",
    overview:
      "A skilled thief who steals secrets through dreams is given a chance to have his past erased by completing an impossible task.",
    releaseYear: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    runtime: 148,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    createdBy: userId,
  },
  {
    title: "The Dark Knight",
    overview:
      "Batman faces a criminal mastermind whose reign of chaos pushes Gotham City and its heroes to their limits.",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    createdBy: userId,
  },
  {
    title: "Interstellar",
    overview:
      "A group of explorers travel through a wormhole in space in search of a new home for humanity.",
    releaseYear: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    createdBy: userId,
  },
  {
    title: "The Matrix",
    overview:
      "A computer programmer discovers that reality as he knows it is a simulated world controlled by intelligent machines.",
    releaseYear: 1999,
    genres: ["Action", "Sci-Fi"],
    runtime: 136,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    createdBy: userId,
  },
  {
    title: "Parasite",
    overview:
      "A struggling family gradually becomes involved with a wealthy household, leading to unexpected and dangerous consequences.",
    releaseYear: 2019,
    genres: ["Drama", "Thriller", "Comedy"],
    runtime: 132,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    createdBy: userId,
  },
  {
    title: "Avengers: Endgame",
    overview:
      "The remaining Avengers must find a way to undo the devastating consequences of a battle that changed the universe forever.",
    releaseYear: 2019,
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 181,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    createdBy: userId,
  },
  {
    title: "Get Out",
    overview:
      "A young man visiting his girlfriend's family discovers a disturbing secret hidden beneath their seemingly welcoming behavior.",
    releaseYear: 2017,
    genres: ["Horror", "Mystery", "Thriller"],
    runtime: 104,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfBpvCGLCzN6T.jpg",
    createdBy: userId,
  },
  {
    title: "The Shawshank Redemption",
    overview:
      "A banker sentenced to life in prison forms an unlikely friendship while holding onto hope for a better future.",
    releaseYear: 1994,
    genres: ["Drama"],
    runtime: 142,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    createdBy: userId,
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    overview:
      "A teenager discovers that there are multiple Spider-People across different dimensions and must learn to become a hero himself.",
    releaseYear: 2018,
    genres: ["Animation", "Action", "Adventure"],
    runtime: 117,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    createdBy: userId,
  },
  {
    title: "Everything Everywhere All at Once",
    overview:
      "An overwhelmed woman is drawn into a bizarre multiverse adventure where she must connect with alternate versions of herself.",
    releaseYear: 2022,
    genres: ["Action", "Adventure", "Comedy"],
    runtime: 139,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    createdBy: userId,
  },
  {
    title: "Dune",
    overview:
      "A young nobleman must travel to a dangerous desert planet and confront a destiny that could reshape the future of his people.",
    releaseYear: 2021,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 155,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    createdBy: userId,
  },
  {
    title: "Whiplash",
    overview:
      "An ambitious young drummer enrolls at a prestigious music conservatory where an intense instructor pushes him beyond his limits.",
    releaseYear: 2014,
    genres: ["Drama", "Music"],
    runtime: 107,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    createdBy: userId,
  },
  {
    title: "The Grand Budapest Hotel",
    overview:
      "A legendary hotel concierge and his young protégé become involved in a mystery surrounding a priceless painting and an inheritance.",
    releaseYear: 2014,
    genres: ["Comedy", "Drama", "Adventure"],
    runtime: 100,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    createdBy: userId,
  },
  {
    title: "Mad Max: Fury Road",
    overview:
      "In a post-apocalyptic wasteland, a determined survivor joins forces with a group of rebels fleeing a tyrannical ruler.",
    releaseYear: 2015,
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 120,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    createdBy: userId,
  },
  {
    title: "La La Land",
    overview:
      "A musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    releaseYear: 2016,
    genres: ["Comedy", "Drama", "Music", "Romance"],
    runtime: 128,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    createdBy: userId,
  },
];

const main = async () => {
  console.log("seeding movies");

  for (const movie of movies) {
    await prisma.movie.create({
      data: movie,
    });

    console.log(`Created movie: ${movie.title}`);
  }

  console.log("seeding completed");
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
