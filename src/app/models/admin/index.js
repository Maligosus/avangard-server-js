import connection from "../../../helpers/db";
import * as md5 from "md5";

/*
 * adminMain -> era-menu-admin
 * adminHelper -> era-menu-helper
 * */

class AdminPanel {
  loginAdmin = (login, password, result) => {
    connection.query(
      "Select password from Admins where login = ?",
      login,
      (err, res) => {
        if (err) {
          console.log(`error: ${err}`);
          result(null, err);
        } else {
          const comparePassword = JSON.parse(JSON.stringify(res))[0].password;
          if (md5(password) === comparePassword) {
            result(null, { err: false, message: `logged as ${login}` });
          } else {
            result(null, { err: true, message: `wrong password` });
          }
        }
      }
    );
  };

  isAuth = (token, result) => {};
}

export default AdminPanel;
