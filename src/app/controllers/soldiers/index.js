import Soldier from "../../models/soldiers";

const SoldierController = function () {
  this.model = Soldier;
};

SoldierController.getAllSoldiers = function (req, res) {
  Soldier.getAll(function (err, user) {
    if (err) {
      res.send(err);
    } else {
      console.log("res", user);
      res.send(user);
    }
  });
};

SoldierController.getSoldierById = function (req, res) {
  Soldier.getSoldier(req.params.userId, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

SoldierController.createNewSoldier = function (req, res) {
  const newUser = new Soldier(req.body);
  if (
    !newUser.userName ||
    !newUser.userSurname ||
    !newUser.userPatronymic ||
    !newUser.userIdRank ||
    !newUser.userIdCompany ||
    !newUser.userPassword
  ) {
    res.status(404).send({
      error: true,
      message: "Please provide all information about new soldier",
    });
  } else {
    Soldier.createSoldier(newUser, function (err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  }
};

SoldierController.loginSoldier = function (req, res) {
  const { userId, userPassword } = req.body;
  if (!userId || !userPassword) {
    res.status(404).send({
      error: true,
      message: "Please provide user id and user password",
    });
  } else {
    Soldier.loginSoldier(userId, userPassword, function (err, user) {
      if (err) {
        res.send(err);
      }
      res.send(user);
    });
  }
};

export default SoldierController;
