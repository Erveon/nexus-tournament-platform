const express = require('express');
const router = express.Router();
const settings = require('../../settings/settings');

const accounts = require('../accounts/account.manager');

router.post('/register', async (req, res) => {
    let post = req.body;
    let username = post.username.trim().replace(/[^A-Za-z0-9 ]/g, '');
    let emailExists = await accounts.emailExists(post.email);
    let usernameExists = await accounts.usernameExists(username);
    if(emailExists || usernameExists) {
        let errors = [];
        if(emailExists) errors.push("email");
        if(usernameExists) errors.push("username");
        res.json({errors: errors});
    } else {
        let account = await accounts.create(post.email, username, post.password);
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

router.post('/login', async (req, res) => {
    let post = req.body;
    let email = post.email, password = post.password;
    let token = await accounts.authenticate(email, password);
    //res.cookie('auth_token', token, { secure: settings.production, httpOnly: true, sameSite: true });
    if(token) {
        res.json({ token: token });
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;