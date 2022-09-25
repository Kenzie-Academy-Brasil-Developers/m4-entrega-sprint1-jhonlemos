import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {
  const uuid = request.params.uuid;
  const { name, email } = request.body;

  try {
    const updateUser = updateUserService(name, email, uuid);
    return response.json(updateUser);
  } catch (error) {
    return response.status(404).json({ message: error.message });
  }
};

export default updateUserController;
