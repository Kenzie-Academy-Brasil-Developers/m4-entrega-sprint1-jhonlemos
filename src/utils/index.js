const userWithoutPassword = (user) => {
  const { password, ...userWotPassword } = user;

  return userWotPassword;
};

export default userWithoutPassword;
