import Tarefa from "./Tarefa";
import styles from "./Tabelas.module.css";
import { useEffect } from "react";


function Tabelas() {

    

    return (
        <>
        <div className={styles.colunas}>
            <div className={styles.coluna}>
                
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                
            </div>
            <div className={styles.coluna}>
                
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                
            </div>
            <div className={styles.coluna}>
                
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                
            </div>
            
            
        </div>
        </>
    )
}

export default Tabelas;