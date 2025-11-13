import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const tokenverify = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export const allowRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Access denied. No user found." });
    if (!roles.includes(req.user.role))
      return res.status(403).json({ message: "Access denied. Insufficient permissions." });
    next();
  };
};


