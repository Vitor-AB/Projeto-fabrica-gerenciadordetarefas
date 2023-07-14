import styles from './Tarefa.module.css';
import { AiFillDelete } from "react-icons/ai";
import { FaRotate } from "react-icons/fa6"

function Tarefa({id,title,text, alter, deletar}) {
    return (
        <>
        <div className={styles.container_tarefa}>
            <div className={styles.title_container}>
                <h2>{title}</h2>
                <div className={styles.btn_container}>
                    <button onClick={() => {
                        alter(id);
                    }}><FaRotate/></button>
                    <button onClick={() => {
                        deletar(id);
                    }}><AiFillDelete/></button>
                </div>
            </div>
            <hr color='black' width='95%' align='center'/>
            <p>{text}</p>
        </div>
        </>
    )
}

export default Tarefa;