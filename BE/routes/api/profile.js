const express = require("express");
const profile = express.Router();
const secret =  require('./../../config/key');
const jwt = require('jsonwebtoken');

profile.get("/test", (req, res) => {
    res.json({ msg: "this is profile" });
});

profile.get('/getprofile', (req,res)=> {
    const validationResult = validateToken(req.headers.authorization);
    if(validationResult) {
        res.json({ msg: "this is profile" });
    } else {
        res.json({ msg: "this is error" });
    }
});
   
verifyToken = (token, secKey) => {
    return  jwt.verify(token, secKey, (err, decoded) => {
                if(err){
                    return false;
                } return true;
            });
}

async function validateToken(token) {
    let key = secret.secret;
    return result = await verifyToken(token, key)
}

profile.post("/saveprofile", (req, res) => {
    const validationResult = validateToken(req.headers.authorization);
    if(validationResult) {
        res.json({ msg: "this is profile" });
    } else {
        res.json({ msg: "this is error" });
    }
});

module.exports = profile;