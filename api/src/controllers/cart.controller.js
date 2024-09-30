import userModel from "../models/user.model.js";
import { successResponse } from "./response.controller.js";

const addToCart = async (req, res, next) => {
  try {
    const { userId, itemId, size } = req.body;

    let userData = await userModel.findById(userId);
    let cartData = (await userData.cartData) || {};

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

    return successResponse(res, {
      statusCode: 200,
      message: "User cart was added successfully",
      payload: cartData,
    });
  } catch (error) {
    next(error);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

    return successResponse(res, {
      statusCode: 200,
      message: "User cart was updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getUserCarts = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = (await userData.cartData) || {};

    return successResponse(res, {
      statusCode: 200,
      message: "User cart was updated successfully",
      payload: cartData,
    });
  } catch (error) {
    next(error);
  }
};

export { addToCart, updateCart, getUserCarts };
