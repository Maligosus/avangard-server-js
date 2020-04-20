import path from "path";
import express from "express";
import connection from "../../helpers/db";

const router = express.Router();

const DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

router.get("/", function(req, res) {
  connection.query("Select * from users", (err, data) => {
    res.send(data);
  });
});

export default router;
