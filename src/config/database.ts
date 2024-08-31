import mongoose from "mongoose";

// To avoid complexity in the source code I've removed the need to use dotenv to get this running locally.
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/digital-garden";

const db = mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
    process.exit(1);
  });

export default await db;
