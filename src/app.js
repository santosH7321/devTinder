const express = require("express");

const app = express();

app.use("/admin", (req, res, next) => {
    console.log("Checking authorization");
    const token = "xyz";
    const isAuthenticated = token === "xyz";
    if(!isAuthenticated){
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
});

app.get("/admin/getAllData", (req, res) => {
    res.send("All data send");
})

app.get("/admin/deleteUser", (req, res) => {
    res.send("User deleted successfully");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});