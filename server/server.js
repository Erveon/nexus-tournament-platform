const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const database = require('./persistence/database.manager');

const server = require('http').createServer(app);
const passport = require('passport');
const jwtStrategy = require('./accounts/auth/jwtstrategy');

const helmet = require('helmet');
const morgan = require('morgan');

const api = require('./api');

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at:', p, 'reason:', reason);
});

process.on('uncaughtException', err => {
	console.error(err);
});

database.init();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist')));

passport.use(jwtStrategy);

// Process API endpoint routes
app.use('/api', api);
app.set('port', 3000);
app.use(passport.initialize());

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

server.listen(3000, () => {
    console.log(`API running on localhost:3000`);
});