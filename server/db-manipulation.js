const { sql } = require("./Connection");

async function createDatabase() {
  const database = await sql`
  CREATE DATABASE gerenciadordetarefas
  `;
}

async function createTable() {
  const table = await sql`
    CREATE TABLE IF NOT EXISTS valid_users( username TEXT , password TEXT )
    `;
}

async function insertTable(nome, senha) {
  const insert = await sql`
    INSERT INTO valid_users ( username , password )
    VALUES ( ${nome} , ${senha} )
    `;
}

async function getUserPass(user = "null") {
  const getuser = await sql`
    SELECT username , password FROM valid_users WHERE username = ${user}
    `;
  return getuser;
}

async function getTabelasTarefas() {
  const tabelas = await sql` SELECT tb.name_tabela, tf.name_tarefa, tf.text_tarefa FROM tabelas tb INNER JOIN tarefas tf ON tb.id_tabela = tf.id_tarefa`;
  console.log(tabelas);
  return tabelas;
}

module.exports = {
  getUserPass,
  insertTable,
  createTable,
  createDatabase,
  getTabelasTarefas,
};
