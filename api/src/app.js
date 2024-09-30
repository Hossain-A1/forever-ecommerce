import express from "express";
import createError from "http-errors";
import cors from "cors";
import morgan from "morgan";
import xssClean from "xss-clean";
import limit from "express-rate-limit";
import userRouter from "./routes/auth.route.js";
import { errorResponse } from "./controllers/response.controller.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/order.route.js";

const app = express();

// middlewares

const rateLimiter = limit({
  windowMs: 1 * 60 * 1000, //1 minute
  max: 20,
  message: "Too many rquest from this api please try again after 1 minute",
});
app.use(
  cors({
    credentials: true,
  })
);
app.use(xssClean());
app.use(rateLimiter);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
  res.send("Api working");
});

//bypass all routes

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// client error
app.use((req, res, next) => {
  next(createError(404, { message: "Route not found!" }));
});

// server error handling --> all errors
app.use((err, req, res, next) => {
  return errorResponse(res, { statusCode: err.status, message: err.message });
});

export default app;
