const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const mySQLStore = require('express-mysql-session')(session);
const Router = require('./Router');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

// Database connection.
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'taskdb'
});

db.connect(function(err) {
	if (err) {
		console.log("DB Error!");
		throw err;
	}
});

const sessionStore = new mySQLStore({
	expiration: (1825 * 86400 * 1000),
	endConnectionOnClose: false
}, db);

app.use(session({
	key: 'jf98w80098fj9e8udfj90aw83jaslfj8',
	secret: 'nfisop8uvoi3vnslf89lsnrlxnvnxo73xfwqpw',
	store: sessionStore,
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: (1825 * 86400 * 1000),
		httpOnly: false
	}
}));

new Router(app, db);

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);
