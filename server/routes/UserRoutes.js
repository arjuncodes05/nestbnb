import express from "express"
import { getUserData } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.get("/", authMiddleware, getUserData)

export default userRouter;

