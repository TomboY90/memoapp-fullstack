const express = require('express');
const router = express.Router();

// for connecting test
router.get('/ping', (req, res) => {
  res.json({ res: 'pong' });
});

module.exports = router;