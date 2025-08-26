import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const connectDB = async (): Promise<void> => {
    try {
        const uri: string | undefined = process.env.MONGODB_URI;
        if (!uri) {
            console.log("MONGODB_URI undefined");
            return;
        }
        await mongoose.connect(uri);
        console.log("Mongodb Connected Successfully...");
    } catch (error) {
        throw error;
    }
}

export default connectDB;