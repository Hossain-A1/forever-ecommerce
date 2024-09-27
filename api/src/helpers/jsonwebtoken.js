import createError from "http-errors";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../secret.js";
const createToken = (id) => {
  try {
    const token = jwt.sign({ id }, jwtSecret, { expiresIn: "7d" });
    return token
  } catch (error) {
   throw createError(400, `Token creation failed ${error.message}`);
    
  }
};

const verifyToken = (payload) => {
  try {
    const decode = jwt.verify({ payload }, jwtSecret, { expiresIn: "7d" });
    return decode
  } catch (error) {
   throw createError(400, `Token creation failed ${error.message}`);
    
  }
};

export { createToken ,verifyToken};
