const mysql = require('mysql');

// mysql Database info Object
const dbconfig = require('../config/database');
// connect to mySQL
const connection = mysql.createConnection(dbconfig);

module.exports = connection;