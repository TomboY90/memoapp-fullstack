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
    if (error) {
      res.status(500).send({ error: '서버 오류입니다.' }).end();
      return;
    }

    if (!rows || rows.length === 0) {
      res.status(400).send({ error: "등록되지 않은 사용자입니다. 아이디와 비밀번호를 확인해주세요."}).end();
      return;
    }

    res.status(200).json(rows[0])
  });
})

module.exports = router;