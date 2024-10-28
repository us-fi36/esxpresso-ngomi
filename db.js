

import mariadb from 'mariadb';
import secrets from './secrets.js';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'diane',
    password: 'Louise',
    database: 'project_db',
    connectionLimit: 200000

});

export default pool;
