const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

const request = require("request");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});





app.listen(3000, () => {
    console.log("Server started on port 3000");
});
