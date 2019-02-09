const express = require("express");
const profile = express.Router();
const passport = require('passport');
const secret =  require('./../../config/key');

profile.get("/test", (req, res) => {
    res.json({ msg: "this is profile" });
});

profile.get('/details', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        console.log("====================================================================================");
        console.log(res);
        return res.status(200).send(res.send(req.user));
    }
);

// function verifyToken(token, secKey) {
//     return jwt.verify(token, 'shhhhh', function(err, decoded) {
//         console.log(decoded.foo) // bar
//     });
// }

verifyToken = (token, secKey) => {
    return  jwt.verify(token, secKey, (err, decoded) => {
                if(err){
                    return false;
                } return true;
            });
}

async function validateToken(token) {
    console.log('calling');
    let key = secret.secret;
    return result = await verifyToken(token, key)
    console.log(result);
    // expected output: 'resolved'
}

profile.post("/saveprofile", (req, res) => {

    const validationResult = validateToken(req.headers.authorization);

    if(validationResult) {
        console.log('hello');
    } else {
        console.log('hi');
    }
});


module.exports = profile;