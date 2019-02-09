const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("./../../models/user.js");
const config = require('./../../config/key');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const saltRound = 10;
const validateLogin = require("./../../validators/vLogin.js");

router.get("/test", (req, res) => {
    res.json({ msg: "this is user" });
});


router.post("/register", (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "email is there" });
        } else {
            let newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                date: req.body.date
            });

            bcrypt.genSalt(saltRound, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err2, hash) => {
                    if (err2) console.log(err2);
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.status(200).json(user))
                        .catch(err => console.log(err))
                });
            });

        }
    })
});

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({ email: "email is not there" });
        }
      
        bcrypt.compare(password, user.password).then((isTrue) => {
            if (isTrue) {
                var token = jwt.sign({ date: user.date }, config.secret, {
                    expiresIn: 36000
                });
                return res.status(200).send({ auth: true, token: `Bearer ${token}` });
            } else {
                return res.status(400).json({ password: "sorry password is incorrect" });
            }
        });
    })
});

module.exports = router;