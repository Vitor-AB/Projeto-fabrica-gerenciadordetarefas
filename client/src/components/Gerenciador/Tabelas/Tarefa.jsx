import styles from './Tarefa.module.css';

function Tarefa({id,title,text}) {
    return (
        <>
        <div className={styles.container_tarefa}>
            <h2>{title}</h2>
            <hr color='black' width='95%' align='center'/>
            <p>{text}</p>
        </div>
        </>
    )
}

export default Tarefa;