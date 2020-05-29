import path from "path";
import express from "express";
import AdminController from "../../controllers/admin";

const router = express.Router();
const adminController = new AdminController();

const DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

router.post("/", adminController.loginAdmin);

export default router;
