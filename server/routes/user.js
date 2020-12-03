const express = require("express");
const router = express.Router();

const connection = require('../middlewares/mysql-connect');

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

router.post('/login', (req, res) => {
  const { name, password } = req.body;

  const sql = "select name from users where name = ? and password = ?";
  const values = [name, password];

  connection.query(sql, values, (error, rows) => {
    // 에러 처리 해야함 !
    if (error) throw error;
    res.status(200).json(rows[0])
  });
})

module.exports = router;