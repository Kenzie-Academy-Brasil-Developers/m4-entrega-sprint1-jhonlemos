import userLoginService from "../services/userLogin.service";

const userLoginController = (request, response) => {
  const { email, password } = request.body;

  try {
    const userLogin = userLoginService(email, password);
    return response.json(userLogin);
  } catch (error) {
    return response.status(401).json({ message: error.message });
  }
};

export default userLoginController;
