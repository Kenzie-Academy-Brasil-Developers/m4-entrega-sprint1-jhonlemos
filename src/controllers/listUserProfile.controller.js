import listUserProfileService from "../services/listUserProfile.service";

const listUserProfileController = (request, response) => {
  const uuid = request.user.uuid;
  const userProfile = listUserProfileService(uuid);

  return response.json(userProfile);
};

export default listUserProfileController;
