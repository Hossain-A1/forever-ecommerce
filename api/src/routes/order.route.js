import express from "express";
import { isAdmin } from "../middlewares/admin.middleware.js";
import {
  getAllOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateOrderStatus,
  userOrders,
} from "../controllers/order.controller.js";
import { isAuthorized } from "../middlewares/auth.js";

const orderRouter = express.Router();
// admin feature
orderRouter.get("/list", isAdmin, getAllOrders);
orderRouter.put("/status", isAdmin, updateOrderStatus);
// payment feature
orderRouter.put("/place", isAuthorized, placeOrder);
orderRouter.post("/stripe", isAuthorized, placeOrderStripe);
orderRouter.post("/razorpay", isAuthorized, placeOrderRazorpay);

// user
orderRouter.get("/user-orders", isAuthorized, userOrders);

export default orderRouter;
