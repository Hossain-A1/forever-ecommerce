import createError from "http-errors";
import { adminEmail, adminPassword, jwtSecret } from "../secret.js";
import jwt from "jsonwebtoken";
import { errorResponse } from "../controllers/response.controller.js";

const isAdmin = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Token not found",
      });
    }

    const decode = jwt.verify(token, jwtSecret);

    if (decode !== adminEmail + adminPassword) {
      throw createError(400, "Incorrect email or passwoed");
    }

    next();
  } catch (error) {
    throw error;
  }
};

export { isAdmin };
