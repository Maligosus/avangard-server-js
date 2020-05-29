import path from "path";
import express from "express";
import MenuController from "../../controllers/menu";

const router = express.Router();

const DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

router.get("/:dayId", MenuController.getMenuByDay);

export default router;
