import User from "../../models/users";

const UserController = function() {
  this.model = User;
};

UserController.getAllUsers = function(req, res) {
  User.getAll(function(err, user) {
    console.log("controller");
    if (err) {
      res.send(err);
    } else {
      console.log("res", user);
      res.send(user);
    }
  });
};

UserController.getUserById = function(req, res) {
  User.getUser(req.params.userId, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

UserController.createNewUser = function(req, res) {
  const newUser = new User(req.body);
  if (!newUser.userName || !newUser.userSurname || !newUser.userCompanyId) {
    res.status(404).send({
      error: true,
      message: "Please provide user name, surname and companyId"
    });
  } else {
    User.createUser(newUser, function(err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  }
};

export default UserController;
