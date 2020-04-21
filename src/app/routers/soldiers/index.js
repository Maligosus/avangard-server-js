import path from "path";
import express from "express";
import SoldierController from "../../controllers/soldiers";

const router = express.Router();

const DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

router.get("/", SoldierController.getAllSoldiers);
router.get("/:userId", SoldierController.getSoldierById);
router.post("", SoldierController.createNewSoldier);
router.post("/login", SoldierController.loginSoldier);

export default router;
