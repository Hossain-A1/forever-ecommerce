import express from "express";
import {
  addToCart,
  getUserCarts,
  updateCart,
} from "../controllers/cart.controller.js";
import { isAuthorized } from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", isAuthorized, addToCart);
cartRouter.put("/update", isAuthorized, updateCart);
cartRouter.get("/get", isAuthorized, getUserCarts);

export default cartRouter;
