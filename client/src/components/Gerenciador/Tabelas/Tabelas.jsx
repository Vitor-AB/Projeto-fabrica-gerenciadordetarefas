import Tarefa from "./Tarefa";
import styles from "./Tabelas.module.css";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/api_Supa";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { FaRotate } from "react-icons/fa6"


function Tabelas() {
    const [tabelas,setTabelas] = useState([]);
    const [change,setChange] = useState(0);
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
        },[change])
        
        async function insertTarefa(id_table) {
            let title = prompt("Titulo da Tarefa:");
            let text = prompt("Descrição da Tarefa:");
            
            const { data, error } = await supabase
            .from('Tarefas')
            .insert([
                { title_tarefa: title, text_tarefa: text,id_tables: id_table },
            ])
            .select();
            setChange(c => c + 1);
        }
        
        async function alterTarefa(id_tarefa) {
            let changeTitle = prompt("Novo Titulo:");
            let changeText = prompt("Nova Descrição:");
            
            const { data, error } = await supabase
            .from('Tarefas')
            .update({ title_tarefa: changeTitle, text_tarefa: changeText})
            .eq('id_tarefas', id_tarefa)
            .select();
            setChange(c => c+1);

        }

        async function deleteTarefa(id_tarefa) {
            const { error } = await supabase
            .from('Tarefas')
            .delete()
            .eq('id_tarefas', id_tarefa);
            setChange(c => c+1);
        }

        async function insertTable() {
            let name = prompt("Titulo da Coluna:");

            const { data: { user } } = await supabase.auth.getUser();
            const { data, error } = await supabase
            .from('Tabelas')
            .insert([
                { name_table: name, id_user: user.id },
            ])
            .select();
            setChange(c => c+1);
        }

        async function alterTable(id_table) {
            let changedName = prompt("Novo Titulo:")
            
            const { data, error } = await supabase
            .from('Tabelas')
            .update({ name_table: changedName })
            .eq('id_tables', id_table)
            .select();
            setChange(c => c+1);
        }

        async function deleteTable(id_table) {
            const { error } = await supabase
            .from('Tabelas')
            .delete()
            .eq('id_tables',  id_table);
            setChange(c => c+1);
        }


    return (
        <>
        <div className={styles.colunas}>
            <button className={styles.insert_button} onClick={() => {
                insertTable();
            }}><AiOutlinePlus /></button>
            {tabelas? tabelas.map((tabela) => {
                return <div className={styles.coluna} key={tabela.id_tables}>
                    <div className={styles.table_title_container}>
                        <h1>{tabela.name_table}</h1>
                        <div className={styles.table_btn_container}>
                            <button onClick={() => {
                                insertTarefa(tabela.id_tables);
                            }}><AiOutlinePlus /></button>
                            <button onClick={() => {
                                alterTable(tabela.id_tables);
                            }}><FaRotate/></button>
                            <button onClick={() => {
                                deleteTable(tabela.id_tables);
                            }}><AiFillDelete/></button>
                        </div>
                    </div>

                    {tabela.Tarefas.map((tarefa) => {
                        return <Tarefa key={tarefa.id_tarefas} id={tarefa.id_tarefas} title={tarefa.title_tarefa} text={tarefa.text_tarefa} alter={alterTarefa} deletar={deleteTarefa}/>
                    })}
                </div>
            }): <h1>Falha</h1>}
        </div>
        </>
    )
}

export default Tabelas;