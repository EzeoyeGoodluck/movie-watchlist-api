import { prisma } from "../congig/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

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
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //Create User
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  //Generate a JWT Token
  const token = generateToken(user.id, res);

  res.status(201).json({
    status: "success",
    data: {
      user: {
        id: user.id,
        name: name,
        email: email,
      },
      token,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //Check if the user email exist in the table
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return res.status(401).json({ error: " Invalid  email or password" });
  }

  //Verify the password

  const IsPasswordValid = await bcrypt.compare(password, user.password);

  if (!IsPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  //Generate a JWT Token
  const token = generateToken(user.id, res);

  res.status(201).json({
    status: "success",
    data: {
      user: {
        id: user.id,
        email: email,
      },
      token,
    },
  });
};

const logout = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
};

export { register, login, logout };
