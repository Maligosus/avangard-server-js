import connection from "../../../helpers/db";

const Orders = function () {};

Orders.createNewOrder = function (userId, orderDay, productId, result) {
  connection.query(
    "Insert into Date_table set ?",
    {
      date: orderDay,
      id_soldier: userId,
      id_product: productId,
    },
    function (err, res) {
      if (err) {
        //console.log("error: ", err);
        result(err, null);
      } else {
        //console.log(res);
        result(null, res.insertId);
      }
    }
  );
};

Orders.getAll = function (result) {
  connection.query("Select * from Date_table", function (err, res) {
    if (err) {
      //console.log("error: ", err);
      result(err, null);
    } else {
     // console.log(res);
      result(null, res);
    }
  });
};

Orders.getByDate = function (date, result) {
  connection.query(
    "Select Date_table.id, Date_table.date, Products.product_name, Date_table.id_soldier from Date_table inner join Products on Date_table.id_product = Products.id where date = ?",
    date,
    function (err, res) {
      if (err) {
       // console.log("error: ", err);
        result(err, null);
      } else {
       // console.log(res);
        result(null, res);
      }
    }
  );
};

Orders.getBySoldierAndDate = function (date, soldierId, result) {
  connection.query(
    "Select Products.product_name, Ingestion.ingestion_name from Date_table inner join Products on Date_table.id_product = Products.id inner join Product_day on Date_table.id_product = Product_day.id_product inner join Ingestion on Product_day.id_ingestion = Ingestion.id where Date_table.id_soldier = ? and Date_table.date = ?",
    [soldierId, date],
    function (err, res) {
      if (err) {
       // console.log("error: ", err);
        result(err, null);
      } else {
       // console.log(res);
        result(null, res);
      }
    }
  );
};

export default Orders;
