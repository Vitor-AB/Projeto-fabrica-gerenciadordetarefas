const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getUserPass, createTable, insertTable, createDatabase,getTabelasTarefas} = require("./db-manipulation");
const { restart } = require("nodemon");
const { supabase } = require("./Connection_Supabase");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/validateLogin", (req, res) => {
  async function validateLogin(name) {
    const user = await getUserPass(name);
    console.log(user);
    if (user.length !== 0) {
      const { username } = user[0];
      const { password } = user[0];
      if (req.body.username === username && req.body.password === password) {
        res.redirect("http://localhost:3000/tabelas");
        // res.redirect("http://localhost:5173/gerenciador");
      } else {
        res.redirect("http://localhost:5173/acessonegado");
      }
    } else {
      res.redirect("http://localhost:5173/acessonegado");
    }
  }
  validateLogin(req.body.username);
});

// app.post("/loginSupa", (req,res) => {
//   async function login(loginData) {
//     let { data, error } = await supabase.auth.signInWithPassword({
//       email: loginData.email,
//       password: loginData.password
//     })
//   }
//   if(login({email:req.body.email, password:req.body.password})){
//     res.redirect("http://localhost:5173/gerenciador");

//   };
// });


app.post("/cadastroTable", (req,res) => {
  async function cadastro(usuario, senha) {
    if (usuario !== null && senha !== null) {
      insertTable(usuario,senha);
      res.redirect("http://localhost:5173/");
    }
  }
  cadastro(req.body.username , req.body.password);
});

app.post("/tabelas", (req, res) => {
  async function getTabelas() {
    return await getTabelasTarefas();
  }
  getTabelas();
  res.redirect("http://localhost:5173/gerenciador");
});


app.listen("3000", () => {
  console.log("Server started on port 3000");
});
