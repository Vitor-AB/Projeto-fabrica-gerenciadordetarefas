<<<<<<< HEAD
=======
const postgres = require("postgres");
const url = "db.zfkjduqqqghwsyspbbka.supabase.co";

const sql = postgres({
  host: "db.zfkjduqqqghwsyspbbka.supabase.co", // Postgres ip address[s] or domain name[s]
  port: 5432, // Postgres server port[s]
  database: "postgres", // Name of database to connect to
  username: "postgres", // Username of database user
  password: "Fpja3Albf3BG8D1a", // Password of database user
  debug: true,
});

module.exports = {
  sql,
};
>>>>>>> branch01
