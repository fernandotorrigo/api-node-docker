const con = require("../config/db.config");

exports.showOneUser = (id, result) => {
  const sql = "SELECT * FROM users WHERE id = ?";

  con.query(sql, id, (err, rows, fields) => {
    if (err) result(err, null);

    result(null, rows);
  });
};

exports.newUser = (newUser, result) => {
  const data = [newUser.name, newUser.email, newUser.job, newUser.reports_to];

  const sql =
    "INSERT INTO users(name, email, job, reports_to) VALUES(?, ?, ?, ?)";

  con.query(sql, data, (err, row, fields) => {
    if (err) result(err, null);

    result(null, row.insertId);
  });
};

exports.showUsers = (result) => {
  const sql = "SELECT * FROM users";

  con.query(sql, (err, rows, fields) => {
    if (err) result(err, null);

    result(null, rows);
  });
};

exports.editUser = (user, result) => {
  const data = [user.name, user.email, user.job, user.reports_to, user.id];

  const sql =
    "UPDATE users SET name = ?, email = ?, job = ?, reports_to = ? WHERE id = ?";

  con.query(sql, data, (err, row, fields) => {
    if (err) result(err, null);

    result(null, row.affectedRows);
  });
};

exports.deconste = (id, result) => {
	const validateSql = "SELECT * FROM users WHERE reports_to = ?";
	const sql = 'DELETE FROM users WHERE id = ?';

	con.query(validateSql, id, (err, row, fields) => {
    if (err) result(err, null);

	if(row.length > 0) {
		const error = "you need to change the subordinates reference";
		result(null, error);
	}else {
		con.query(sql, id, (err, row, fields) => {
		if (err) result(err, null);

		result(null, row.affectedRows);
		});
	}   
  });
};