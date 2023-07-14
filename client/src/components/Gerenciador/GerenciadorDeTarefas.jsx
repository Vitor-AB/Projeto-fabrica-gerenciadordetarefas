import Navbar from "./Navbar";
import styles from './GerenciadorDeTarefas.module.css'
import Tabelas from "./Tabelas/Tabelas";
import { useEffect } from "react";

export default function GerenciadorDeTarefas({signOut,user}) {
  

  return (
    <div className={styles.gerenciador}>
        <Navbar signOut={signOut}/>
      <div className={styles.tabelas}>
        <Tabelas user={user}/>
      </div>
    </div>
  );
}
