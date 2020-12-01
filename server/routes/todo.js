const express = require("express");
const router = express.Router();

const connection = require('../middlewares/mysql-connect');

router.get('/', (req, res) => {
  connection.query('select name from todos', (err, rows) => {
    if (err) throw err;
    res.json({ todos: rows });
  });
})

module.exports = router;