const con = require("../config/db.config");

exports.showOneUser = (id, result) => {
  let sql = "SELECT * FROM users WHERE id = ?";

  con.query(sql, id, (err, rows, fields) => {
    if (err) result(err, null);

    result(null, rows);
  });
};

exports.newUser = (newUser, result) => {
  let data = [newUser.name, newUser.email, newUser.job, newUser.reports_to];

  let sql =
    "INSERT INTO users(name, email, job, reports_to) VALUES(?, ?, ?, ?)";

  con.query(sql, data, (err, row, fields) => {
    if (err) result(err, null);

    result(null, row.insertId);
  });
};

exports.showUsers = (result) => {
  let sql = "SELECT * FROM users";

  con.query(sql, (err, rows, fields) => {
    if (err) result(err, null);

    result(null, rows);
  });
};

exports.editUser = (user, result) => {
  let data = [user.name, user.email, user.job, user.reports_to, user.id];

  let sql =
    "UPDATE users SET name = ?, email = ?, job = ?, reports_to = ? WHERE id = ?";

  con.query(sql, data, (err, row, fields) => {
    if (err) result(err, null);

    result(null, row.affectedRows);
  });
};
