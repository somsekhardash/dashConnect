const express = require("express");
const mongoose = require("mongoose");
const key = require('./config/key.js');
const port = process.env.post || 3000;
const passport = require('passport');
const user = require("./routes/api/user");
const profile = require("./routes/api/profile");
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(key.mongooseKey, {
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then((message) => console.log(`connected to mongoose`), (error) => console.log(`${error}`));


require('./config/passport')(passport);

app.get("/", (req, res) => res.send('hello!!'));
app.use("/api/user", user);
app.use("/api/profile", profile);

app.listen(port, () => {
    console.log(`The server running on ${port}`);
});