const express = require("express");
const router = express.Router();

const connection = require('../middlewares/mysql-connect');

router.get('/', (req, res) => {
  connection.query('select * from memos', (err, rows) => {
    if (err) throw err;
    res.status(200).json(rows);
  });
})

router.post('/', (req, res) => {
  const sql = "insert into memos (title, content, user) values (?, ?, ?)"
  const values = ["제목", "내용", req.body.user];

  connection.query(sql, values, (error, response) => {
    if (error) throw error;
    res.status(200).send(true);
  })
})

router.patch('/', (req, res) => {
  const { id, title, content } = req.body;

  const sql = "UPDATE memos SET title=?, content=? WHERE id=?"
  const values = [title, content, id];

  connection.query(sql, values, (error, response) => {
    if (error) throw error;
    res.status(200).send(true);
  })
})

router.delete('/', (req, res) => {
  const { id } = req.body;

  const sql = `DELETE from memos WHERE id = ${id}`  // 뭐여? backtick 먹히네??!

  connection.query(sql, (err, response) => {
    if (err) throw err;
    res.send(true);
  })
})

module.exports = router;