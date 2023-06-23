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

module.exports = {
  getUserPass,
  insertTable,
  createTable,
  createDatabase,
};
