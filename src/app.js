import express from "express";
import {connectDB} from "./config/database.js";
import User from "./models/user.js";


const app = express();


app.post("/signup", async (req, res) => {
  

  const user = new User({
    firstName: "Nishant",
    lastName: "Kumar",
    email: "robin@gmail.com",
    password: "robiN@123",
  });

  try {
    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    console.error(err);
  }
});

connectDB()
  .then(() => {
    console.log("Connection is established!!");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database can not be connected");
  });
