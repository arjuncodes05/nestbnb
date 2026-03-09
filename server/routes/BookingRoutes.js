import express from "express"
import { checkAvailabilityAPI, createBooking, getHotelBookings, getUserBookings } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js"

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", checkAvailabilityAPI);
bookingRouter.post("/book", authMiddleware,  createBooking);
bookingRouter.get("/user", authMiddleware, getUserBookings);
bookingRouter.get("/hotel", authMiddleware, getHotelBookings);

export default bookingRouter;