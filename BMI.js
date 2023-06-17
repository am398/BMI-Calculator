//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function (req, res) {
    var Name= req.body.Name;
    var Height = Number(req.body.Height)/100;
    var Weight = Number(req.body.Weight);
    var result = Weight / (Height * Height);
    res.send(Name+ ",Your BMI is " + result);
});

app.listen(5000, function () {
    console.log("Server started on port 5000");
}
);