import Orders from "../../models/orders";

const OrderController = function () {
  this.model = Orders;
};

OrderController.sendOrder = function (req, res) {
  const { userId, orderDay, productId } = req.body;
  //console.log(req.body);
  if (!userId || !orderDay) {
    res.status(404).send({
      error: true,
      message: "Please provide user id and order date",
    });
  } else {
    Orders.createNewOrder(userId, orderDay, productId, function (err, order) {
      if (err) {
        res.send(err);
      }
      res.json(order);
    });
  }
};

OrderController.getAllOrders = function (req, res) {
  //console.log(req.query);
  Orders.getAll(function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

OrderController.getOrdersByDate = function (req, res) {
  //console.log(req);
  Orders.getByDate(req.params.date, function (err, order) {
    if (err) {
      res.send(err);
    }
    res.json(order);
  });
};

OrderController.getOrdersBySoldierAndDate = function (req, res) {
  const { date, soldierId } = req.body;
  if (!date || !soldierId) {
    res.status(404).send({
      error: true,
      message: "Please provide date and soldier id",
    });
  } else {
    Orders.getBySoldierAndDate(date, soldierId, function (err, order) {
      if (err) {
        res.send(err);
      }
      res.json(order);
    });
  }
};

export default OrderController;
