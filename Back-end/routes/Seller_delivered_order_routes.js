import express from "express";
import { getOrdersdeliveredBySeller } from "../controllers/Seller_delivered_order_controller.js";

const router = express.Router();

router.get("/:sellerId", getOrdersdeliveredBySeller);

export default router;
