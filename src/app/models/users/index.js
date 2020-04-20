import connection from "../../../helpers/db";

const User = function(user) {
  this.userId = user.id;
  this.userName = user.name;
  this.userSurname = user.surname;
  this.userCompanyId = user.companyId;
};

User.getAll = function(result) {
  connection.query("Select * from users", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

User.getUser = function(userId, result) {
  connection.query("Select * from users where id = ?", userId, function(
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

User.createUser = function(newUser, result) {
  connection.query(
    "Insert into users set ?",
    {
      name: newUser.userName,
      surname: newUser.userSurname,
      companyId: newUser.userCompanyId
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

export default User;
