const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    const endpoint = "https://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "appid=e2fa3deae77869dbe9594cc725d51515";
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
