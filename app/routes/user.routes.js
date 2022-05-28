const controller = require("../controllers/users/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Rota para criar usuário
  app.post("new", controller.newUser);

  // Rota para listar usuário
  app.get("list", controller.showUsers);

  app.get(":id", controller.showOneUser);

  // Rota para editar usuário
  app.put("edit/:id", controller.editUser);

  // Rota para deletar usuário
  app.delete("delete", controller.deleteUser);
};
