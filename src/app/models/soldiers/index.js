import connection from "../../../helpers/db";
import * as md5 from "md5";

const Soldier = function(user) {
  this.userId = user.userId;
  this.userName = user.userName;
  this.userSurname = user.userSurname;
  this.userPatronymic = user.userPatronymic;
  this.userIdRank = user.userIdRank;
  this.userIdCompany = user.userIdCompany;
  this.userPassword = md5(user.userPassword);
};

Soldier.getAll = function(result) {
  connection.query("Select * from Soldiers", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

Soldier.getSoldier = function(userId, result) {
  connection.query("Select * from Soldiers where id = ?", userId, function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

Soldier.createSoldier = function(newUser, result) {
  connection.query(
    "Insert into Soldiers set ?",
    {
      name: newUser.userName,
      surname: newUser.userSurname,
      patronymic: newUser.userPatronymic,
      id_rank: newUser.userIdRank,
      id_company: newUser.userIdCompany,
      password: newUser.userPassword
    },
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    }
  );
};

Soldier.loginSoldier = function(soldierId, soldierPassword, result) {
  connection.query(
    "Select `password` from Soldiers where id = ?",
    soldierId,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(soldierPassword, res[0].password);
        if (md5(soldierPassword) === res[0].password) {
          console.log(`soldier with id = ${soldierId} has logged in`);
          result(null, { logged: true });
        } else {
          console.log(`wrong key`);
          result(null, { logged: false });
        }
      }
    }
  );
};

export default Soldier;
