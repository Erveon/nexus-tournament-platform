const express = require('express');
const router = express.Router();

const accounts = require('../accounts/account.manager');

router.post('/register', async (req, res) => {
    let post = req.body;
    let account = await accounts.create(post.email, post.username, post.password);
    accounts.createActivationCode(account, req.get('host'));
    res.sendStatus(200);
});

module.exports = router;