const adminAuth = (req, res, next) => {
    console.log("Checking authorization");
    const token = "xyz";
    const isAuthenticated = token === "xyz";
    if(!isAuthenticated){
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
};
const userAuth = (req, res, next) => {
    console.log("Checking authorization");
    const token = "xyz";
    const isAuthenticated = token === "xyz";
    if(!isAuthenticated){
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
};

module.exports = {
    adminAuth,
    userAuth,
 };
