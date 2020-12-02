const express = require("express");
const router = express.Router();

const connection = require('../middlewares/mysql-connect');

router.get('/', (req, res) => {
  connection.query('select name from users', (err, rows) => {
    if (err) throw err;
    res.json({ users: rows });
  });
})

router.post('/', (req, res) => {
  const { name, password } = req.body;

  const sql = "insert into users (name, password) VALUES (?, ?)";
  const values = [name, password];
  
  connection.query(sql, values, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err })
    }

    res.status(200).json({ name })
  });
})

module.exports = router;