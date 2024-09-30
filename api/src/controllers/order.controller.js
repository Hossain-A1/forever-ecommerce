import orderModel from "../models/order.model.js";
import userModel from "../models/user.model.js";
import { successResponse } from "./response.controller.js";

const placeOrder = async (req, res, next) => {
  try {
    const { userId, address, amount, items } = req.body;

    const orderData = {
      items,
      address,
      amount,
      userId,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    await orderModel.create(orderData);

    await userModel.findByIdAndUpdate(userId, { cartData: {} }, { new: true });

    return successResponse(res, {
      statusCode: 200,
      message: "order place success",
    });
  } catch (error) {
    next(error);
  }
};

const placeOrderStripe = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const placeOrderRazorpay = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderModel.find();

    return successResponse(res, {
      statusCode: 200,
      message: "All orders return successfully",
      payload: orders,
    });
  } catch (error) {
    next(error);
  }
};

const userOrders = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });

    return successResponse(res, {
      statusCode: 200,
      message: "All orders return successfully",
      payload: orders,
    });
  } catch (error) {
    next(error);
  }
};

const updateOrderStatus = async (req, res, next) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
    return successResponse(res, {
      statusCode: 200,
      message: "status updated",
    });
  } catch (error) {
    next(error);
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  getAllOrders,
  userOrders,
  updateOrderStatus,
};
