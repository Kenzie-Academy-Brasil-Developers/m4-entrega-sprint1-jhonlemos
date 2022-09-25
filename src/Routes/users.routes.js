import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUser.controller";
import listUserProfileController from "../controllers/listUserProfile.controller";
import updateUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controller";

import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";
import verifyAuthorizationMiddleware from "../middlewares/verifyAuthorization.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";

const router = Router();

router.post("/users", verifyEmailAvailabilityMiddleware, createUserController);
router.get(
  "/users",
  verifyAuthTokenMiddleware,
  verifyAdmMiddleware,
  listUsersController
);
router.post("/login", userLoginController);
router.get(
  "/users/profile",
  verifyAuthTokenMiddleware,
  listUserProfileController
);
router.patch(
  "/users/:uuid",
  verifyAuthTokenMiddleware,
  verifyAuthorizationMiddleware,
  updateUserController
);
router.delete(
  "/users/:uuid",
  verifyAuthTokenMiddleware,
  verifyAuthorizationMiddleware,
  deleteUserController
);

export default router;
