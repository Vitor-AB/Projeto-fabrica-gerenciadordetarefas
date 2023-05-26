import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.css";
import LoginForm from "./components/LoginECadastro/LoginForm";
import AcessoNegado from "./components/LoginECadastro/AcessoNegado";
import GerenciadorDeTarefas from "./components/GerenciadorDeTarefas";
import Cadastro from "./components/LoginECadastro/Cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/gerenciador" element={<GerenciadorDeTarefas />} />
        <Route path="/acessonegado" element={<AcessoNegado />} />
      </Routes>
    </Router>
  );
}

export default App;
