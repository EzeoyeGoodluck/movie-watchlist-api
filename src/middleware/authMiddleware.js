import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";


// Read the token from the request
// Check if the token is valid
export const authMiddleware = async (req, res, next) => {
    console.log("Auth middleware reached");

     let token;

     if(req.headers.authorization && req.headers.authorization.startswith("Bearer") ){
        token = req.headers.authorization.split(" ")[1]  //["Bearer",  "token"]
     } else if (req.cookies?.jwt){
        token = req.ccokies.jwt;
     }

     if(!token) {
        return res.status(401).json({ error: "Not authorized, no token provided"});
     }

     try {
        // Verify token and extra the user Id
        const  decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await prisma.user.findUnique({
            where: { id: decoded.id},
        });

        if(!user) {
            return res
            .status(401)
            .json({ error: "User no longer exist"});
        }

        req.user = user

     }  catch (err) {

     }

     
};
