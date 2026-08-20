import { prisma } from "../congig/db.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  //Check to see if user already exist
  const userExist = await prisma.user.findUnique({
    where: { email: email },
  });

  if (userExist) {
    return res
      .status(400)
      .json({ error: " User already exist with this email" });
  }


  //Hash Password
  


};

export { register };
