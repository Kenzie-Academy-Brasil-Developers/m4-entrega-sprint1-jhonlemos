import users from "../database";
import * as bycrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import userWithoutPassword from "../utils";

const createUserService = async (name, email, password, isAdm) => {
  const hashedPassword = await bycrypt.hash(password, 10);

  const newUser = {
    uuid: uuidv4(),
    createdOn: new Date(),
    updatedOn: new Date(),
    name,
    email,
    isAdm,
    password: hashedPassword,
  };

  users.push(newUser);

  return userWithoutPassword(newUser);
};

export default createUserService;
