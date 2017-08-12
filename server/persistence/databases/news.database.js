const database = require('../database.manager');

let Database = {};

Database.getPosts = (amount, offset) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT news.id, title, content, accounts.username as by, at FROM news
            LEFT JOIN accounts ON accounts.id = news.by
            ORDER BY at DESC
            LIMIT $1 OFFSET $2`, 
            [amount, offset])
        .then(res => {
            let posts = [];
            for(let i = 0; i < res.rows.length; i++) {
                let post = res.rows[i];
                posts.push(post);
            }
            resolve(posts);
        }).catch(reject);
    });
};

Database.getPost = (id) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT news.id, title, content, accounts.username as by, at FROM news
            LEFT JOIN accounts ON accounts.id = news.by
            WHERE news.id = $1`, 
            [id])
        .then(res => {
            if(res.rows.length > 0) resolve(res.rows[0]);
            else resolve({});
        }).catch(reject);
    });
};

Database.createPost = (title, content, by) => {
    return new Promise((resolve, reject) => {
        database.query(`INSERT INTO news(title, content, by, at) 
            VALUES ($1, $2, $3, current_timestamp) RETURNING id`,
            [title, content, by])
        .then(res => {
            resolve(res.rows[0].id);
        }).catch(reject);
    });
};

Database.editPost = (id, title, content) => {
    return new Promise((resolve, reject) => {
        database.query(`UPDATE news
            SET title = $2, content = $3
            WHERE id = $1`,
            [id, title, content])
        .then(res => {
            resolve();
        }).catch(reject);
    });
};

Database.removePost = (id) => {
    database.query(`DELETE FROM news WHERE id = $1`, [id]);
}

module.exports = Database;