const hbs = require("hbs");

const express = require("express");
var app = express();
hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});
app.get("/", (req, res) => {
  res.send("Hello Bitches");
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "abouta"

    //new Date().getFullYear()
  });
});

app.listen(3000);
