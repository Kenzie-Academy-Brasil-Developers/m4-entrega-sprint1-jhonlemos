import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (request, response) => {
  const { uuid } = request.params;

  try {
    const deletedUser = deleteUserService(uuid);
    return response.json(deletedUser);
  } catch (error) {
    return response.status(404).json({ message: error.message });
  }
};

export default deleteUserController;
