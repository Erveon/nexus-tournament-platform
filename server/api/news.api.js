const express = require('express');
const router = express.Router();
const settings = require('../../settings/settings');

router.get('/:page', async (req, res) => {
    let page = req.params.page;
});

module.exports = router;