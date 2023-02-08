const jwt = require("jsonwebtoken");
require("dotenv").config();

const HASH_KEY = process.env.HASH_KEY || "zeesh1234@";

// Middleware for token authentication
const tokenAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({
            status: "Failed",
            message: "Token is Missing"
        })
    }
    try {
        jwt.verify(token, HASH_KEY, function (err, decoded) {
            if (err) return res.status(403).json({
                status: "Failed",
                mesage: "Not a valid token"
            })
            req.logged_in_email = decoded.data;
            next();
        });
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: "Internal Server Error" + err.message
        })
    }
}

module.exports = tokenAuth;