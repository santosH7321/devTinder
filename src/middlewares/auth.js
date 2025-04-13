import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();


const UserAuth = async (req, res, next) => {
    try {
        const cookies = req.cookies;
        const token = cookies;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decodedObject = jwt.verify(token, process.env.JWT_SECRET);
        const { _id } = decodedObject;

        const user = await User.findById({ _id });
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();

    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
        
    }
};

export default UserAuth;
