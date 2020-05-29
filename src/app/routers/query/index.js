import path from "path";
import express from "express";
import QueryController from "../../controllers/query";

const router = express.Router();

const controller = new QueryController();

const DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

router.post("/", controller.pushToQuery);
router.get("/", controller.getQuery);
router.get("/clear", controller.clearQuery);

export default router;
