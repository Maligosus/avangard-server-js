import Query from "../../models/query";
import Orders from "../../models/orders";

const QueryController = function () {
  this.model = new Query();

  this.getQuery = (req, res) => {
    this.model.getQuery(function (err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  };

  this.pushToQuery = (req, res) => {
    const { soldierId } = req.body;

    if (!soldierId) {
      res.status(404).send({
        error: true,
        message: "Please provide soldier id",
      });
    } else {
      this.model.pushToQuery(soldierId, function (err, message) {
        if (err) {
          res.send(err);
        }
        res.send(message);
      });
    }
  };

  this.clearQuery = (req, res) => {
    this.model.clearQuery(function (err, message) {
      if (err) {
        res.send(err);
      }
      res.send(message);
    });
  };
};

export default QueryController;
