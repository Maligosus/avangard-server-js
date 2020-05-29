import path from "path";
import express from "express";
import OrderController from "../../controllers/orders";

const router = express.Router();

const DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

router.post("/", OrderController.sendOrder);
router.get("/", OrderController.getAllOrders);
router.get("/:date", OrderController.getOrdersByDate);
router.post("/soldier", OrderController.getOrdersBySoldierAndDate);

export default router;
