const express = require("express");

const app = express();


// app.use("/user", (req, res) => {
//     res.send("Haaaahaaa");
// })
app.get("/user", (req, res) => {
    res.send({firstName: "Santosh", lastName: "Kumar"});
})

app.post("/user", (req, res) => {
    res.send("Data successfully, saved to the database");
})

app.delete("/user", (req, res) => {
    res.send("User deleted successfully");
})

//  this will match all the HTTP methods API calls to /test
app.use("/test", (req, res) => {
    res.send("Hello from the server");
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});