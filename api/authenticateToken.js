const express = require("express");
const Router = express.Router();
const jwt = require("jsonwebtoken");

Router.post("/", (req, res) => {
    const data = {
        name: req.body.name
    }
    try {
        const token = req.header("tokenHeaderKey");

        const verified = jwt.verify(token, `secretShrek ${data.name}`);
        if (verified) {
            return res.send("Successfully Verified");
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});

module.exports = Router;