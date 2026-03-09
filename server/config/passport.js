import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import User from "../models/User.js";

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, cb) => {    
    try {
      let user = await User.findOne({ email: profile.emails[0]?.value});
      
      // note: if i later add "isLoggedIn" property inside my User database, make sure to upldate this findOne to findOneAndUpdate and set "isLoggedIn" to true when user logs in
      if(!user){
        user = await User.create({
          username: profile.displayName,
          email: profile.emails[0]?.value,
          image: profile.photos[0]?.value,
        })
      }
      return cb(null, user)
    } catch (error) {
      console.log("error while creating user in passport.js file >> ", error);
      return cb(error, null)
    }
  }
));