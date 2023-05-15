const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// const mysql = require("mysql");

// // Create Connnection

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
// });

// // Connect
// connection.connect((err) => {
//   if (err) throw err;
//   console.log("MySql Connected...");
// });

// // Create Database
// app.get("/createdb", (req, res) => {
//   let sql = "CREATE DATABASE mysql_server";
//   connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Database created...");
//   });
// });

// // Create Table
// app.get("/createvalidlogintable", (req, res) => {
//   let sql =
//     "CREATE TABLE validlogin(id int AUTO_INCREMENT, user VARCHAR(255), password VARCHAR(255) PRIMARY KEY id)";
//   connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Valid Login table created...");
//   });
// });

// // Create login
// app.get("/addlogin1", (req, res) => {
//   let login = { user: "Vitor", password: "vitor" };
//   let sql = "INSERT INTO validlogin SET ?";
//   let query = db.query(sql, login, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Login created...");
//   });
// });

// // Select ALL logins
// app.get("/getlogins", (req, res) => {
//   let sql = "SELECT * FROM validlogin";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     console.log(results);
//     res.send("Logins fetched...");
//   });
// });

// // Select 1 Login
// app.get("/getpost/:id", (req, res) => {
//   let sql = `SELECT * FROM validlogin WHERE id = ${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Login fetched...");
//   });
// });

// // Update Login
// app.get("/updatepost/:id", (req, res) => {
//   let newLogin = "Ant";
//   let sql = `UPDATE validlogin SET user = '${newLogin}' WHERE id = ${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Username updated...");
//   });
// });

// // Delete login
// app.get("/deletepost/:id", (req, res) => {
//   let newLogin = "Ant";
//   let sql = `DELETE FROM validlogin WHERE id = ${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Login deleted...");
//   });
// });

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
