import Navbar from "./Navbar";
import styles from './GerenciadorDeTarefas.module.css'
import Tabelas from "./Tabelas/Tabelas";

export default function GerenciadorDeTarefas() {

  return (
    <div className={styles.gerenciador}>
        <Navbar/>
      <div className={styles.tabelas}>
        <Tabelas />
      </div>
      <h1>Gerenciador de Tarefas!</h1>
    </div>
  );
}
