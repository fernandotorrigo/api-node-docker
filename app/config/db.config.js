const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "database_edilabs",
});

connection.connect(function(err) {
	if (err){
    throw err;
  }
	console.log("Connected to MySQL!");
});

module.exports = connection;