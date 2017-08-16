const express = require('express');
const router = express.Router();
const settings = require('../../settings/settings');
const newsdb = require('../persistence/databases/news.database');
const passport = require('passport');

router.get('/list/:page/:amount', async (req, res) => {
    let page = req.params.page, amount = req.params.amount || 5;
    res.json(await newsdb.getPosts(amount, page * amount));
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    res.json(await newsdb.getPost(id));
});

// New post
router.post('/', auth(), async (req, res) => {
    let user = req.user;
    if(!user) {
        res.sendStatus(401);
    } else if(user.level < 6) {
        res.sendStatus(403);
    } else {
        let title = req.body.title, content = req.body.content;
        let by = user.id;
        newsdb.createPost(title, content, by)
        .then(() => res.sendStatus(200));
    }
});

// Edit post
router.post('/:id', auth(), async (req, res) => {
    let id = req.params.id;
    let user = req.user;
    if(!user) {
        res.sendStatus(401);
    } else if(user.level < 6) {
        res.sendStatus(403);
    } else {
        let title = req.body.title, content = req.body.content;
        newsdb.editPost(id, title, content)
        .then(() => res.sendStatus(200));
    }
});

router.delete('/:id', auth(), async (req, res) => {
    let id = req.params.id;
    let user = req.user;
    if(!user) {
        res.sendStatus(401);
    } else if(user.level < 6) {
        res.sendStatus(403);
    } else {
        newsdb.removePost(id)
        .then(() => res.sendStatus(200));
    }
});

function auth() {
    return passport.authenticate('jwt', { session: false});
};

module.exports = router;