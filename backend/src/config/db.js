import mongoose, { mongo } from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("Connected to DB SUCESSFULLY ✅");
  } catch (error) {
    console.log("Error connectiong to MONGODB");
    process.exit(1);
  }
};
