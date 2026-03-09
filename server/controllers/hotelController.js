import mongoose from "mongoose";
import Hotel from "../models/Hotel.js"
import User from "../models/User.js"

export const registerHotel = async(req, res) => {
    const {name, address, city, contact} = req.body;
    const ownerId = req.userId
    try {
        const hotel = await Hotel.findOne({owner: new mongoose.Types.ObjectId(ownerId)})

        if(hotel){
            return res.json({success: false, message: "Hotel Already Registered."})
        }  

        await Hotel.create({ name, address, city, contact, owner: new mongoose.Types.ObjectId(ownerId) })

        await User.findByIdAndUpdate(ownerId,  {role: "hotelOwner"})

        return res.json({success: true, message: "Hotel Registered Successfully"})
    } catch (error) {
        console.log(error.message);   
        return res.json({success: false, message: "Failed to Register Hotel"})
    }
} 