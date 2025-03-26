import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return; // Use the existing connection
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Database connection failed");
    }
};

export default connectDB;
