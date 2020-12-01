const express = require("express");
const router = express.Router();

const connection = require('../middlewares/mysql-connect');

router.get('/', (req, res) => {
  connection.query('select name from users', (err, rows) => {
    if (err) throw err;
    res.json({ users: rows });
  });
})

module.exports = router;