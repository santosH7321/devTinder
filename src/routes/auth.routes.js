import express from "express";
import { validateSignupData } from "../utils/validation.js";
import User from "../models/userShema.js";
import bcrypt from "bcrypt";

const authRouter = express.Router();

authRouter.post("/api/v1/signup", async (req, res) => {
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
