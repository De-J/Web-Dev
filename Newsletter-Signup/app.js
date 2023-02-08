const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

const request = require("request");

app.use(express.static("Public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    console.log(req.body.FirstName);
    console.log(req.body.LastName);
    console.log(req.body.Email);
    res.send();
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
