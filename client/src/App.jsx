import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.css";
import LoginForm from "./components/LoginForm";
import AcessPermitido from "./components/AcessPermitido";
import AcessNegado from "./components/AcessNegado";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/acessopermitido" element={<AcessPermitido />} />
        <Route path="/acessonegado" element={<AcessNegado />} />
      </Routes>
    </Router>
  );
}

export default App;
