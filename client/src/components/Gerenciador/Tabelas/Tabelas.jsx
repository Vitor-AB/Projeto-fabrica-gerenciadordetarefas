import Tarefa from "./Tarefa";
import styles from "./Tabelas.module.css";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/api_Supa";


function Tabelas() {
    const [tabelas,setTabelas] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const { data: { user } } = await supabase.auth.getUser();
            const {data,error} = await supabase
            .from('Tabelas')
            .select(`
            id_tables,
            name_table,
            id_user,
            Tarefas!Tarefas_id_tables_fkey(
                id_tarefas,
                title_tarefa,
                text_tarefa
            )
            `)
            .eq('id_user', user.id);
            console.log(data);
            return data;
        }
         fetchData().then(res => setTabelas(res));
         console.log(tabelas);
        }, [])
    

    return (
        <>
        <div className={styles.colunas}>
            {tabelas? tabelas.map((tabela) => {
                return <div className={styles.coluna} key={tabela.id_tables}>
                    <h1>{tabela.name_table}</h1>
                    {tabela.Tarefas.map((tarefa) => {
                        return <Tarefa key={tarefa.id_tarefas} id={tarefa.id_tarefas} title={tarefa.title_tarefa} text={tarefa.text_tarefa}/>
                    })}
                </div>
            }): <h1>Falha</h1>}
            
            <div className={styles.coluna}>
                    <h1>Nome Tabela</h1>
                    <Tarefa />
                    <Tarefa />
                    <Tarefa />
                
            </div>
            
            
            
            
        </div>
        </>
    )
}

export default Tabelas;