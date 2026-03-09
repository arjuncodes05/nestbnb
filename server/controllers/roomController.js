import {v2 as cloudinary} from "cloudinary";

import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import mongoose from "mongoose";

export const createRoom = async(req, res) => {
    try {
        const {roomType, pricePerNight, amenities} = req.body;
        const userId = req.userId;

        const hotelId = await Hotel.findOne({owner: userId}, '_id')

        if(!hotelId){
            return res.json({success: false, message: "No hotel Found"})
        }

        // upload image to cloudinary
        const uploadImages = req.files.map(async(file) => {
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;
        })

        // wait for all uploads to complete
        const images = await Promise.all(uploadImages)
        
        await Room.create({
            hotel: hotelId,
            roomType, 
            pricePerNight: +pricePerNight,
            amenities: JSON.parse(amenities),
            images,
        })
        return res.json({success: true, message: "Room Added."})
    } catch (error) {
        console.log("error while adding room ", error.message);
        return res.json({success: false, message: "Failed to add room"})
    } 
}


export const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find({isAvailable: true}).populate({
            path: 'hotel', 
            populate: {
                path: 'owner',
                select: 'image username'
            }
        }).sort({createdAt: -1});
        return res.json({success: true, rooms})
    } catch (error) {
        console.log("Error while fetching rooms >> ", error.message);
        return res.json({success: false, message: "Failed to fetch Rooms"})  
    } 
}

export const getOwnerRooms = async(req, res) => {
    try {
        const userId = req.userId;
        const hotelId = await Hotel.findOne({owner: userId}, "_id");
        
        if(!hotelId){
            return res.json({success: false, message: "No Hotel Registered By owner"})
        };

        const rooms = await Room.find({hotel: hotelId}).populate("hotel");
        return res.json({success: true, rooms})
    } catch (error) {
        console.log("Error while fetching owner rooms >> ", error.message);
        return res.json({success: false, message: "Failed To fetch owner rooms"})
    }
}

export const toggleRoomAvailability = async(req, res)=>{
    try {
        const roomId = new mongoose.Types.ObjectId(req.body.roomId);
        
        const roomData = await Room.findById(roomId);
        if(!roomData){
            return res.status(404).json({
                success: false, 
                messsage: "Room Not Found"
            });
        }
        roomData.isAvailable = !roomData.isAvailable;
        await roomData.save();
        return res.json({success: true, message: roomData.isAvailable ? "Room is now available" : "Room is now unavailable"})
    } catch (error) {
       console.log("Error while updating isAvailability >> ", error.message);
       return res.json({success: false, message: "Error while updating room availability"});
    }  
}