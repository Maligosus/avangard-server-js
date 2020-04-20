import mysql from "mysql2";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "05vereru",
  database: "avangard-db"
});

connection.connect(function(err) {
  if (err) throw err;
});

export default connection;
