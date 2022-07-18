var express = require("express");
var app = express();
require("./connection/connection.js");
var Contact = require("./model/model.js");
var hbs = require("hbs");
var path = require("path");
require("dotenv");
var port = process.env.PORT || 8000;

var partialPath = path.join(__dirname, "../partials");
var cssPath = path.join(__dirname, "../public");
var imgPath = path.join(__dirname, "../img");

app.set("view engine", "hbs");

app.use(express.json());
app.use(express.static(cssPath));
app.use(express.static(imgPath));
hbs.registerPartials(partialPath);
app.use(express.urlencoded({ extended: false }));

app.get("/portfolio", (req, res) => {
    res.render("portfolio");
});
app.get("/", (req, res) => {
    res.render("portfolio");
});

app.post("/portfolio", async(req, res) => {
    try {
        var visitordata = new Contact({
            Name: req.body.name,
            Email: req.body.email,
            Message: req.body.msg,
        });

        await visitordata.save();
        res.render("portfolio");
    } catch (err) {
        res
            .status(500)
            .send("error Occuried white enter the data into the database");
    }
});

app.listen(port, () => {
    console.log("Listening Your Request at the Port Number..." + port);
});