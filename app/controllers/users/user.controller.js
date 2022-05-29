const User = require("../../model/user.model");

exports.showOneUser = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send("The required path variable id is missing");
  }

  User.showOneUser(id, function (err, user) {
    if (err)
      return res
        .status(500)
        .send("Error occured during fetching user for id " + id);

    return res.send(user);
  });
};

exports.newUser = (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    job: req.body.job,
    reports_to: req.body.reports_to,
  };


  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    return res.status(400).send("One or more required fields are missing");
  }
  if (!newUser.name || !newUser.email || !newUser.job || !newUser.reports_to) {
    return res.status(400).send("One or more required fields are missing");
  } else {
    User.newUser(newUser, function (err, user_id) {

      if (err || user_id <= 0)
        return res.status(500).send("Error occured during saving user");

      return res.sendStatus(200);
    });
  }
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send("The required path variable id is missing");
  }

  User.delete(id, function (err, user) {
    if (err) return res.status(500).send("Error occured during deleting user");

    return res.sendStatus(200);
  });
};

exports.showUsers = (req, res) => {
  User.showUsers(function (err, users) {
    if (err) return res.status(500).send("Error occured during fetching users");

    return res.send(users);
  });
};

exports.editUser = (req, res) => {
  const id = req.params.id;
  const user = {
    id,
    name: req.body.name,
    email: req.body.email,
    job: req.body.job,
    reports_to: req.body.reports_to,
  };

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    return res.status(400).send("One or more required fields are missing");
  }
  if (!user.name || !user.email || !user.job || !user.reports_to) {
    return res.status(400).send("One or more required fields are missing");
  } else {
    User.editUser(user, function (err, result) {
      if (err || result <= 0)
        return res.status(500).send("Error occured during updating user");

      return res.sendStatus(200);
    });
  }
};
