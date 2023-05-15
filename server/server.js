const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const qs = require("querystring");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/validateLogin", (req, res) => {
  if (req.body.username === "Vitor" && req.body.password === "vitor") {
    res.redirect("http://localhost:5173/acessopermitido");
  }
  res.redirect("http://localhost:5173/acessonegado");
});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
