import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../Database/database.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());



connectDB()
  .then(() => {
    console.log("Connection is established!!");
    app.listen(PORT, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database can not be connected");
  });
