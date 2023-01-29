const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {

    let n1 = Number(req.body.num1), n2 = Number(req.body.num2);
    let ans = n1 + n2;
    res.send("The answer is " + ans);
});


app.post("/bmiCalculator", function(req, res) {
    console.log(req.body);
    console.log(req.body.num1);

    let n1 = Number(req.body.height), n2 = Number(req.body.weight);
    var ans = n2/(n1*n1);
    res.send("The answer is " + ans);
});

app.listen(3000, function() {
    console.log("Server started at 3000");
});
