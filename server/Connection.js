const postgres = require('postgres');
const url = "postgres://gerenciadordetarefas_user:eYXMo4JqtmUR3sWOEQMqVIP6HX2lukIK@dpg-chhcnf8rddl9a73subvg-a/gerenciadordetarefas";

const sql = postgres(url);
module.exports = {
  sql
}