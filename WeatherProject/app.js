const express = require("express");
const app = express();

const https = require("https");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    const endpoint = "https://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "appid==";
    const city = "&q=" + req.body.cityName;
    const unit = "&units=metric"; 
    const url = endpoint + apiKey + city + unit;
    https.get(url, (response) => {
        
        response.on("data", (data) => {
            //console.log(data);
            const weatherData = JSON.parse(data);
            //console.log(weatherData);
            
            const ico = weatherData.weather[0].icon;
            const icon_url = "http://openweathermap.org/img/wn/" + ico + "@2x.png";
            res.write("<img src=" + icon_url + ">");
            res.send();
        });
    });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
