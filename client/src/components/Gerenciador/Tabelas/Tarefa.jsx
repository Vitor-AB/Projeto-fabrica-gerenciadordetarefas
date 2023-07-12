import styles from './Tarefa.module.css';

function Tarefa() {
    return (
        <>
        <div className={styles.container_tarefa}><h2>Titulo tarefa</h2>
        <hr color='black' width='95%' align='center'/>
        <p>Texto da tarefa</p>
        </div>
        </>
    )
}

export default Tarefa;