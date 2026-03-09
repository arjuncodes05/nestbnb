import express from "express"
import { createRoom, getOwnerRooms, getRooms, toggleRoomAvailability } from "../controllers/roomController.js"
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const roomRouter = express.Router()

roomRouter.post("/", upload.array("images", 4), authMiddleware, createRoom)
roomRouter.get("/", getRooms)
roomRouter.get("/owner", authMiddleware, getOwnerRooms)
roomRouter.post("/toggle-availability", authMiddleware, toggleRoomAvailability)

export default roomRouter;