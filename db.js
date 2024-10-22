

import mariadb from 'mariadb';


const pool = mariadb.createPool({
    host: 'localhost',
    user: 'diane',
    password: 'Louise',
    database: 'todo_list',
    connectionLimit: 200000

});

export default pool;

