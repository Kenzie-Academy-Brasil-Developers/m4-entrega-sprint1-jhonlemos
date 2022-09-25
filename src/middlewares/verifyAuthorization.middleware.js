const verifyAuthorizationMiddleware = (request, response, next) => {
  const { uuid } = request.params;

  if (request.user.isAdm == false) {
    if (request.user.uuid !== uuid) {
      return response
        .status(401)
        .json({ message: "Missing admin permissions" });
    }
  }
  next();
};

export default verifyAuthorizationMiddleware;
