import AdminPanel from "../../models/admin";
import * as jwt from "jsonwebtoken";

class AdminController {
  constructor() {
    this.model = new AdminPanel();
  }

  _generateJWT = (login) => {
    const data = { login };
    const signature = "ERA-secret-sign";
    const expiration = "24h";

    return jwt.sign({ data }, signature, { expiresIn: expiration });
  };

  loginAdmin = (req, res) => {
    const { login, password } = req.body;
    this.model.loginAdmin(login, password, (err, message) => {
      if (err) {
        res.send(err);
      } else {
        console.log(this._generateJWT(login));
        res.json(message);
      }
    });
  };

  isAuth = (req, res) => {
    const { token } = req.body;
    this.model.isAuth(token, (err, message) => {
      if (err) {
        res.send(err);
      } else {
        res.json(message);
      }
    });
  };
}

export default AdminController;
