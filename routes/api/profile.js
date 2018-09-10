const express = require("express");
const profile = express.Router();

profile.get("/test", (req, res) => {
    res.json({ msg: "this is profile" });
});

module.exports = profile;