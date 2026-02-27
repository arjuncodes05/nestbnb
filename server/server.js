import express from "express"
import "dotenv/config"
import cors from "cors"

import "./config/passport.js"
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import userRouter from "./routes/UserRoutes.js"

connectDB()
const app = express();

app.use(cors())
app.use(express.json());

app.use('/auth', authRoute)

app.use("/api/user", userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))