const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.send("Hello from Santosh");
})
app.use("/hello", (req, res) => {
    res.send("Hello my dear!"); 
})
app.use("/test", (req, res) => {
    res.send("Hello from the server");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});