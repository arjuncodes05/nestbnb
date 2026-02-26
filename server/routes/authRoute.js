import express from "express";
import passport from "passport";
import jwt from 'jsonwebtoken'
import isAuthenticated from "../middleware/isAuthenticated.js";

const authRoute = express.Router()

// Step -1 redirect to google login
authRoute.get('/google', passport.authenticate("google", {scope:["profile", "email"]}))

authRoute.get(
    "/google/callback",
    passport.authenticate("google", {session:false}),
    (req, res) => {
        try {
            const token = jwt.sign({id: req.user.id, email: req.user.email}, process.env.GOOGLE_CLIENT_SECRET, {expiresIn: "7d"});

            res.redirect(`${process.env.CLIENT_URL}/auth-success?token=${token}`)
        } catch (error) {
            console.log("error while google auth callback >> ", error);
            res.redirect(`${process.env.CLIENT_URL}/login?error="google_failed`)
        }
    }
)


authRoute.get("/me", isAuthenticated, (req, res) => {
    res.json({success: true, user:req.user})
} )

export default authRoute
