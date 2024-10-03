const express = require("express");

const app = express();


app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong");
    }
});
app.get("/getUserData", (req, res) => {
    try{
        throw new Error("Random data is entered");
        res.send("User data send");
    } catch(err){
        res.status(500).send("Something goes wrong");
    }
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});