import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        trim: true,
        validator(value){
            if(!validator.isAlpha(value)){
                throw new Error("First name should only contain alphabets");
            }
        }
    },
    lastName: {
        type: String,
        trim: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20,
        trim: true,
        validator(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Password is weak. It should contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
            }
        }
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        validator(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Invalid gender!, must be male, female or others");
            }
        }
    },
    about: {
        type: String,
        maxLength: 200,
        trim: true,
    },
    photoUrl: {
        type: String,
        default: "https://www.w3schools.com/howto/img_avatar.png",
        validator(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL!");
            }
        }
    },
    skills: {
        type: [String],
        validator(value){
            if(!validator.isArray(value)){
                throw new Error("Skills should be an array of strings!");
            }
        }
    }
}, {timestamps: true});



const User = mongoose.model("User", userSchema);
export default User;