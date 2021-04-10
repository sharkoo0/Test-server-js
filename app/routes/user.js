const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
    res.send("User string");
});

module.exports.router = router;