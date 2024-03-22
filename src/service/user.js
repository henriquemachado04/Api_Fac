const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getALLUser() {
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query("SELECT * FROM user");

    await connection.end();

    return rows;
}

async function createUser(name, email, password){
    const connection = await mysql.createConnection(databaseConfig);

    const insertUser = 'INSERT INTO user(name, email, password) VALUES(?,?,?)';

    await connection.query(insertUser, [name, email, password]);

    await connection.end();
}

async function updateUser(id, name, email, password){
    const connection = await mysql.createConnection(databaseConfig);

    const updateUser = 'UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?';

    await connection.query(updateUser, [name, email, password, id]);

    await connection.end()
}

async function deleteUser(id) {
    const connection = mysql.createConnection(databaseConfig);

    await connection.query('DELETE FROM user WHERE id = ?', [id])

    await connection.end()
}

module.exports = {
    getALLUser,
    createUser,
    updateUser,
}