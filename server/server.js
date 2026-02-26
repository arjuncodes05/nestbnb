import express from "express"
import "dotenv/config"
import "./config/passport.js"
import cors from "cors"

import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

connectDB()
const app = express();

app.use(cors())
app.use('/auth', authRoute)

app.use((req, res, next) => {
    console.log("HI from middleware");
    next();
})

app.get("/", (req, res) => {
    res.send("Hello world")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))