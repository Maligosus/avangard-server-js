import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import cors from "cors";
import mysql from "mysql";
import bodyParser from "body-parser";
import config from "../../../webpack.dev.config.js";
import index from "../routers/index";
import soldiers from "../routers/soldiers";
import menu from "../routers/menu";
import orders from "../routers/orders";
import query from "../routers/query";
import admin from "../routers/admin";

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html"),
  compiler = webpack(config);

const mc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "05vereru",
  database: "avangard-db",
});

mc.connect();

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(cors({ methods: ["GET", "POST"] }));

app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/", index);
app.use("/soldiers", soldiers);
app.use("/menu", menu);
app.use("/orders", orders);
app.use("/query", query);
app.use("/admin", admin);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
