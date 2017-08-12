const express = require('express');
const router = express.Router();
const settings = require('../../settings/settings');
const newsdb = require('../persistence/databases/news.database');

router.get('/list/:page/:amount', async (req, res) => {
    let page = req.params.page, amount = req.params.amount || 5;
    res.json(await newsdb.getPosts(amount, page * amount));
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    res.json(await newsdb.getPost(id));
});

module.exports = router;