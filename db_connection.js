var prop = require('./db_properties');

var mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host: prop.host,
        user: prop.user,
        password: prop.password,
        database: prop.database
    }

);

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});
module.exports = connection;