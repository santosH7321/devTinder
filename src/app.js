const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");


app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
    res.send("User data send");
})
app.get("/admin/getAllData", (req, res) => {
    res.send("All data send");
})

app.get("/admin/deleteUser", (req, res) => {
    res.send("User deleted successfully");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});