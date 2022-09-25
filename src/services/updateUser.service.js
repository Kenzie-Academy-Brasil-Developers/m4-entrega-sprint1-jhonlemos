import users from "../database";
import userWithoutPassword from "../utils";

const updateUserService = (name, email, uuid) => {
  const userUpdated = {
    name,
    email,
    updatedOn: new Date(),
    uuid,
  };

  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users[userIndex] = { ...users[userIndex], ...userUpdated };

  // console.log(users[userIndex]);

  return userWithoutPassword(users[userIndex]);
};

export default updateUserService;
