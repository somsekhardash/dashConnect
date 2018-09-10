const express = require("express");
const mongoose = require("mongoose");
const key = require('./config/key.js');
const port = process.env.post || 3000;

const user = require("./routes/api/user");
const profile = require("./routes/api/profile");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(key.mongooseKey, { useNewUrlParser: true })
    .then((message) => console.log(`connected to mongoose`), (error) => console.log(`${error}`));

app.get("/", (req, res) => res.send('hello!!'));

app.use("/api/user", user);
app.use("/api/profile", profile);

app.listen(port, () => {
    console.log(`The server running on ${port}`);
}); 