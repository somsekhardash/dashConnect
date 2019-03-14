const express = require("express");
const profile = express.Router();
const secret =  require('./../../config/key');
const jwt = require('jsonwebtoken');
const profileModel = require("./../../models/profile.js");
const jwt_decode = require("jwt-decode");

verifyToken = (token, secKey) => {
    return  jwt.verify(token, secKey, (err, decoded) => {
                if(err){
                    return false;
                } return true;
            });
}

profile.get("/test", (req, res) => {
    res.json({ msg: "this is profile" });
});

profile.get('/getprofile', (req,res)=> {
    const validationResult = validateToken(req.headers.authorization);
    if(validationResult) {
        var decoded = jwt_decode(req.headers.authorization);
        profileModel.findOne({ id: decoded.email }).then( _profile => {
            console.log(_profile);
            res.json({ profile: _profile });
        });
        
    } else {
        res.json({ msg: "this is error" });
    }
});

async function validateToken(token) {
    let key = secret.secret;
    return result = await verifyToken(token, key)
}

profile.post("/setprofile", (req, res) => {
    const validationResult = validateToken(req.headers.authorization);
    const decoded = jwt_decode(req.headers.authorization);
    if(validationResult) {
        profileModel.findOne({ id: decoded.email }).then(profile => {
        if (profile) {
            profileModel.findByIdAndUpdate(profile, {
                id: decoded.email,
                userDetails: {
                    fullname: req.body.fullname, 
                    workemail: req.body.workemail,
                    aboutme: req.body.aboutme,
                    mobilenumber: req.body.mobilenumber
                }
            }, {new: true}).then(newProfile => res.status(200).json(newProfile))
            .catch(err => console.log(err));;
        } else {
            let newProfile = new profileModel({
                id: decoded.email,
                userDetails: {
                    fullname: req.body.fullname, 
                    workemail: req.body.workemail,
                    aboutme: req.body.aboutme,
                    mobilenumber: req.body.mobilenumber
                }
            });
            newProfile.save()
            .then(newProfile => res.status(200).json(newProfile))
            .catch(err => console.log(err));
        }
    });
    } else {
        res.json({ msg: "this is error" });
    }
});

module.exports = profile;