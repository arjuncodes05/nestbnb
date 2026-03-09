import User from "../models/User.js";
import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.GOOGLE_CLIENT_SECRET
    );

    // decoded = { id, email, iat, exp }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({success: false, message: "User not found" });
    }

    req.user = user;
    req.userId = user._id
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;