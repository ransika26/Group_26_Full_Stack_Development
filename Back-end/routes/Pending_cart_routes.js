import express from "express";
import {
    addToPendingCart,
    clearPendingCart,
    getPendingCartItems,
    removeFromPendingCart,
} from "../controllers/Pending_cart_controller.js";

const PendingCartRouter = express.Router();

// Route to add items to the pending cart
PendingCartRouter.post("/pendingcartadd", addToPendingCart);

PendingCartRouter.get("/pendingcartfetch/:CustomerID", getPendingCartItems);
PendingCartRouter.delete("/pendingcartremove/:id", removeFromPendingCart);
PendingCartRouter.delete("/pendingcartclear/:CustomerID", clearPendingCart);
export default PendingCartRouter;
