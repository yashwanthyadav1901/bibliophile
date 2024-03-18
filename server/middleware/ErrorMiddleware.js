const ErrorMiddleware = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "BACKEND ERROR";
  let extraDetails = err.extraDetails || "error from backend";

  return res.status(status).json({
    message,
    extraDetails,
  });
};

module.exports = ErrorMiddleware;
