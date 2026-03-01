import express from "express"
import { registerHotel } from "../controllers/hotelController.js"
import authMiddleware from "../middleware/authMiddleware.js";

const hotelRouter = express.Router()

hotelRouter.post("/", authMiddleware, registerHotel);


export default hotelRouter