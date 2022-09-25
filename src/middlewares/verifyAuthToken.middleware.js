import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .json({ message: "Missing authorization headers" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Invalid Token" });
    }

    request.user = {
      uuid: decoded.uuid,
      createdOn: decoded.createdOn,
      updatedOn: decoded.updatedOn,
      name: decoded.name,
      email: decoded.email,
      isAdm: decoded.isAdm,
    };

    next();
  });
};

export default verifyAuthTokenMiddleware;
