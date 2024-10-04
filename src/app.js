const express = require("express");
const connectDB = require("./config/database");
const app = express();


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


