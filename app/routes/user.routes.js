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
  app.post("/user/new", controller.newUser);

  // Rota para listar usuário
  app.get("/user/", controller.showUsers);

  app.get("/user/:id", controller.showOneUser);

  // Rota para editar usuário
  app.patch("/user/:id", controller.editUser);

  // Rota para deletar usuário
  app.delete("/user/delete", controller.deleteUser);
};
