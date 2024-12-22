import mongoose from "mongoose";

export const connectMongoDB = async () => {
    if (!process.env.MONGODB_DATABASE_URL) {
        throw new Error('MONGODB_DATABASE_URL environment variable is not defined');
    }
    const uri: string = process.env.MONGODB_DATABASE_URL;
    try {
        await mongoose.connect(uri);
        console.log("Connected to db");
    } catch (err) {
        console.log("Error connecting to db: ", err);
    }
};
