import sql from "./Connection.js";

export default async function insert() {
    const xs = await sql`
      insert into users (
        name, age
      ) values (
        'Murray', 68
      )`

    console.log(xs);
    
}

insert();