import connection from "../../../helpers/db";

const Menu = function(menu) {
  this.dayOfWeek = menu.dayOfWeek;
};

Menu.getMenu = function(day, result) {
  connection.query(
    "select Product_day.id, Ingestion.ingestion_name, Day_week.dayweek, Products.product_name, Product_day.id_product, Category_product.category_name\n" +
      "from Product_day\n" +
      "inner join Ingestion on Product_day.id_ingestion = Ingestion.id\n" +
      "inner join Day_week on Product_day.id_dayW = Day_week.id\n" +
      "inner join Products on Product_day.id_product = Products.id\n" +
      "inner join Category_product on Products.category = Category_product.id\n" +
      "where Product_day.id_dayW = ?",
    day,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res);
        result(null, res);
      }
    }
  );
};

export default Menu;
