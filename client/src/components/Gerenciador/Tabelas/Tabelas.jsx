import Coluna from "./Coluna";
import styles from "./Tabelas.module.css";

function Tabelas() {
    return (
        <>
        <div className={styles.colunas}>
            <div className={styles.coluna}>
                
                    <Coluna />
                
            </div>
            <div className={styles.coluna}>
                
                    <Coluna />
                
            </div>
            <div className={styles.coluna}>
                
                    <Coluna />
                
            </div>
            
            
        </div>
        </>
    )
}

export default Tabelas;