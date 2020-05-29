import path from "path";

const express = require("express");
const router = express.Router();

const DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

router.get("/", function(req, res) {
  res.sendFile(HTML_FILE);
});

router.post("/", function(req, res) {
  console.log(req.body);
  res.json(req.body);
});

export default router;

//TODO make more body size like 16MB
