import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url = process.env.MONGO_URL;

const startMongoDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected");
    } catch (error) {
        console.error("Error connectiong to database ", error);
    }
};

startMongoDB();