import Booking from "../models/Bookings.js"
import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"

const checkAvailability = async({checkInDate, checkOutDate, roomId}) =>{
    try {
        const bookings = await Booking.find({
            roomId, 
            checkInDate: {$lte: checkOutDate},
            checkOutDate: {$gte: checkInDate}
        })
        const isAvailable = bookings.length === 0;
        return isAvailable
    } catch (error) {
        console.error(error.message);
        return false;
    }
}


export const checkAvailabilityAPI = async (req, res) => {
    try {
        const {roomId, checkInDate, checkOutDate} = req.body;
        const isAvailable = await checkAvailability({ checkInDate, checkOutDate, roomId});
        res.json({success: true, isAvailable})
    } catch (error) {
        console.error("Error while checking roomI availability >> ", error.message);
        return res.json({success: false, message: "Error while checking room availability"})
    }
}



export const createBooking = async(req, res) => {
    try {
        const {roomId, checkInDate, checkOutDate, guests} = req.body;

        if (checkOut <= checkIn) {
            return res.json({ success: false, message: "Invalid date range" });
        }

        if (!guests || guests < 1) {
            return res.json({success: false, message: "Invalid number of guests"});
        }

        const userId = req.userId;
        const isAvailable = await checkAvailability({checkInDate, checkOutDate, roomId});
        if(!isAvailable){
            return res.json({success: false, message: "Room is not available during this period."})
        }

        const roomData = await Room.findById(roomId).populate("hotel");
        let totalPrice = roomData.pricePerNight;

        // calculate total price based on night
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const timeDiff = checkOut.getTime() - checkIn.getTime()
        const nights = Math.ceil(timeDiff/(1000 * 3600 * 24))
        totalPrice *= nights

        const booking = await Booking.create({
            userId,
            roomId, 
            hotel: 
            roomData.hotel._id, 
            guests: +guests, 
            checkInDate, 
            checkOutDate,
            totalPrice
        })

        return res.json({success: true, message: "Booking created Successfully"})

    } catch (error) {
        console.error("Error while booking >> ", error.message);
        return res.json({success: false, message: "Failed to create Booking"})
    }
}


export const getUserBookings = async(req, res) => {
    try {
        const userId = req.userId;
        const bookings = await Booking.find({userId}).populate("room hotel").sort({createdAt: -1})
        return res.json({success: true, bookings})
    } catch (error) {
        console.log("Error occured at getUserBookings >> ", error.message);
        return res.json({success: false, message: "Failed to fetch bookings."});   
    }
}

export const getHotelBookings = async(req, res) => {
    try {
        const userId = req.userId
        const hotel = await Hotel.findOne({owner: userId})
        if(!hotel){
            return res.json({success: false, message: "No hotel found"})
        }
        const bookings = await Booking.find({hotel: hotel._id}).populate("room hotel user").sort({createdAt: -1})

        const totalBookings = bookings.length;
        const totalRevenue = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0)
        return res.json({success: true, dashboardData: {totalBookings, totalRevenue, bookings}})
    } catch (error) {
        console.log("Error while fetching hotel bookings on  getHotelBookings >> ", error.message);
        return res.json({success: false, message: "Failed to fetch Hotel Bookings"})
    }
}