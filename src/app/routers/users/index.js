import path from "path";
import express from "express";
import UserController from "../../controllers/users";

const router = express.Router();

const DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

router.get("/", UserController.getAllUsers);
router.get("/:userId", UserController.getUserById);
router.post("", UserController.createNewUser);

export default router;
