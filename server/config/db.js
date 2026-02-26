import mongoose from "mongoose";

const connectDB = async() => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("DB connected");
        })
        // we add the event before the mongoose.connect because if we add this event later, and in case the db is connected immediately- the event will be registered later, due to which, it is never fired.
        await mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.log("error while connecting to db >> ", error);
    }
}

export default connectDB;