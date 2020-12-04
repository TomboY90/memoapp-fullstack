// mysql Database info Object
const dbconfig = require('../config/database');
const mysql = require('mysql');

// connect to mySQL
const connection = mysql.createConnection(dbconfig);

module.exports = connection;