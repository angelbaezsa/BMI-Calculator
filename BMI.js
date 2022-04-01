const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
    console.log("Connected with 5G");
});

app.get("/", function name(req, resp) {
    resp.sendFile(__dirname+ "/index.html");
});

app.post("/", function (req, resp) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/(Math.pow(height, 2));
     bmi = Math.round(bmi).toFixed(2);
    resp.send("Your body index is: "+ bmi);
  });
