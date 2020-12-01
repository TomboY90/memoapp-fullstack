const express = require('express');
const mysql = require('mysql');

// mysql Database info Object
const dbconfig = require('./config/database');
// connect to mySQL
const connection = mysql.createConnection(dbconfig);

const app = express();

app.set('port', process.env.PORT || 3000);

// for connecting test
app.get('/ping', (req, res) => {
  res.send('pong');
})

app.get('/users', (req, res) => {
  connection.query('select name from users', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
})

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
})