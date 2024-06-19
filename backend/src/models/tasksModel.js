const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks'); //executando query no banco
    return tasks[0];
};

module.exports = {
    getAll
};