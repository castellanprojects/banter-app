import mongoose from "mongoose";

export const connectDB = async () => {
    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connection ensured successfully: ", conn.connection.host)
    }

    catch (error) {
        console.error("Oops! Something catched a flu! MongoDB connection failed: ", error)
        process.exit(1); // 1 => Failed, 0 => Success
    }

}