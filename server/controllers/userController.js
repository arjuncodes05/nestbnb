import User from "../models/User.js"

export const getUserData = async(req, res) => {
    try {
        const user = await User.findById(req.userId)        
        if(!user){
            console.log("User does not exists");
            return res.status(404).json({message: "User does not exists"})
        }
        return res.json(user)
    } catch (error) {
        console.log("Error while fetching user data from DB >> ", error);
        
    }
}