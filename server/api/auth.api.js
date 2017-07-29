const express = require('express');
const router = express.Router();

const accounts = require('../accounts/account.manager');

router.post('/register', (req, res) => {
    let post = req.body;
    accounts.create(post.email, post.username, post.password);
    res.json({success: true});
});

module.exports = router;