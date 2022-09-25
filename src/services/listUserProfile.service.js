import users from "../database";
import userWithoutPassword from "../utils";

const listUserProfileService = (uuid) => {
  const userProfile = users.find((user) => user.uuid == uuid);

  return userWithoutPassword(userProfile);
};

export default listUserProfileService;
