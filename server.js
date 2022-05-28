const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

const userRoutes = require('./app/routes/user.routes')

app.use('/api', userRoutes)

app.get("/", (req, res, next) => {
	res.json({ message: "Welcome to application." });
});

const PORT = 21061;
app.listen(PORT, () => {
    console.log('Listening on port: ' + port);
});