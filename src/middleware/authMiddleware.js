import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";


// Read the token from the request
// Check if the token is valid
export const authMiddleware = async (req, res, next) => {
    console.log("Auth middleware reached");

    next()
};
