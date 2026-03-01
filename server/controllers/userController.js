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


export const storeRecentSearchedCities = async (req, res) => {
    const userId = req.userId;
    const {recentSearchedCity} = req.body;

    if(!recentSearchedCity || typeof recentSearchedCity !== "string"){
        return res.status(400).json({success: false});
    }
    let updatedRecentSearchedCities = []

    try {
        // let a = ["simpler approch =>", `if(recentSearchedCities.length < 3){
        //     updatedRecentSearchedCities = await User.findByIdAndUpdate(userId, { $push: 
        //         {recentSearchedCities: recentSearchedCity} 
        //     }, {
        //         new: true, 
        //         select: "recentSearchedCities"
        //     })
        // }else{
        //     updatedRecentSearchedCities = await User.findByIdAndUpdate(userId, {
        //         $pop: {recentSearchedCities: -1},
        //         $push: {recentSearchedCities: recentSearchedCity}
        //     }, {
        //         new: true, 
        //         select: "recentSearchedCities"
        //     })
        // }`]
        updatedRecentSearchedCities = await User.findByIdAndUpdate(userId, {
            $push: {
                recentSearchedCities: {
                    $each: [recentSearchedCity.trim()],
                    $slice: -3
                }
            }}, {
                new: true,
                select: "recentSearchedCities"
            })
        return res.status(200).json({success: true, message: "successfully updated", updatedRecentSearchedCities})
    } catch (error) {
        console.log("Error while updating recently Searched Cities in database ", error);
        return res.status(500).json({success: false, message: error.message})
    }
}