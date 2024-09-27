const successResponse = (
  res,
  { statusCode = 200, message = "successfull", payload = {} }
) => {
  return {
    statusCode: res
      .status(statusCode)
      .json({ success: true, message: message, payload }),
  };
};

const errorResponse = (
  res,
  { statusCode = 500, message = "Internal server error" }
) => {
  return {
    statusCode: res
      .status(statusCode)
      .json({ success: false, message: message }),
  };
};

export { successResponse, errorResponse };
