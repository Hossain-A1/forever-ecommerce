import createError from "http-errors";
import { jwtSecret } from "../secret.js";
import jwt from "jsonwebtoken";
import { errorResponse } from "../controllers/response.controller.js";

const isAuthorized = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Token not found",
      });
    }

    const decode = jwt.verify(token, jwtSecret);

    if (!decode) {
      throw createError(400, "Incorrect email or passwoed");
    }

    req.body.userId = decode.id;
    next();
  } catch (error) {
    throw error;
  }
};

export { isAuthorized };
