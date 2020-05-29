import Menu from "../../models/menu";
import Soldier from "../../models/soldiers";

const MenuController = function() {
  this.model = new Menu();
};

MenuController.getMenuByDay = function(req, res) {
  Menu.getMenu(req.params.dayId, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

export default MenuController;
