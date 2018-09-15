const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("./../../models/user.js");
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
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.status(400).json(user))
                        .catch(err => console.log(err))
                });
            });

        }
    })
});

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // const { errors, isValid } = validateLogin(req.body);

    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({ email: "email is not there" });
        }
        debugger;
        bcrypt.compare(password, user.password).then((isTrue) => {
            if (isTrue) {
                return res.json({ msg: "sucess" });
            } else {
                return res.status(400).json({ password: "sorry password is incorrect" });
            }
        });
    })
});

module.exports = router;