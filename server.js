const hbs = require("hbs");

const port = process.env.PORT || 3000 ; 

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

app.listen(port , () => { console.log(`server is up on port ${port}`);}) ; 
