import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Wrong email/password");
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { email: email, uuid: user.uuid, isAdm: user.isAdm },
    "SECRET_KEY",
    { expiresIn: "24h" }
  );

  const objectToken = {
    token,
  };

  return objectToken;
};

export default userLoginService;
