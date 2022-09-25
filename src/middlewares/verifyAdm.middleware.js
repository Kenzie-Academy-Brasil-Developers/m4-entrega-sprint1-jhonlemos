const verifyAdmMiddleware = (request, response, next) => {
  if (request.user.isAdm === false) {
    return response.status(401).json({ message: "Missing admin permissions" });
  }

  next();
};

export default verifyAdmMiddleware;
