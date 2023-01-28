const express = require("express");

const app = express();


app.get("/", function(req, res) {
    console.log(req);
    res.send("Hello");
});

app.get("/about", function(req, res) {
    res.send("a fun and punchy intro");
});

app.listen(3000, function() {
    console.log("Server started at 3000");
});
