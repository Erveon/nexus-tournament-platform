const express = require('express');
const router = express.Router();

const accounts = require('../accounts/account.manager');

router.post('/register', async (req, res) => {
    let post = req.body;
    let emailExists = await accounts.emailExists(post.email);
    let usernameExists = await accounts.usernameExists(post.username);
    console.log(usernameExists);
    console.log(emailExists);
    if(emailExists || usernameExists) {
        let errors = [];
        if(emailExists) errors.push("email");
        if(usernameExists) errors.push("username");
        res.json({errors: errors});
    } else {
        let account = await accounts.create(post.email, post.username, post.password);
        accounts.createActivationCode(account, req.get('host'));
        res.json({success: true});
    }
});

router.post('/activate', async (req, res) => {
    let key = req.body.key;
    if(!key) {
        res.sendStatus(400);
    } else {
        let success = await accounts.activate(key);
        res.sendStatus(success ? 200 : 403);
    }
});

module.exports = router;