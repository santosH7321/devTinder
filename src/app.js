const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");


app.post("/signup", async (req, res) => {
    // const userObj = {
    //     firstName: "Nishant",
    //     lastName: "Ranjan",
    //     email: "nishant@gmail.com",
    //     password: "tiger@123" 
    // }

    const user = new User({ 
        firstName: "Nishant",
        lastName: "Ranjan",
        email: "nishant@gmail.com",
        password: "123456"
    });

    // Creating a new instance of the User model
    // const user = new User(userObj);
    await user.save();
    res.send("User Added successfully!");
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


