import express from "express";
import { validateSignupData } from "../utils/validation.js";
import User from "../models/userShema.js";
import bcrypt from "bcrypt";

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    validateSignupData(req);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if(!user) {
      return res.status(400).json({message: "Invalid credential"});
    }
    const isValidPassword = await user.validatePassword(password);
    if(!isValidPassword){
      return res.status(401).json({message: "Invalid credential"});
    }
    const token = await user.getJWT();
    res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000)})
    res.status(200).json({message: "Login successful", user});

  } catch (error) {
    res.status(500).send("User not found" + error);
  }
})

export default authRouter;