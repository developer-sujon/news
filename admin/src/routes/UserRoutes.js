//External Lib Import
const UserRoutes = require("express").Router();

//Internal Lib Import
const { CheckUserAuth } = require("../middleware/CheckAuthLogin");
const UserControllers = require("../controller/User/UserControllers");

//User Profile
UserRoutes.get("/UserDetails", CheckUserAuth, UserControllers.UserDetails);

//User Change Password
UserRoutes.put(
  "/UserChangePassword",
  CheckUserAuth,
  UserControllers.UserChangePassword,
);

//Update User
UserRoutes.patch("/UserUpdate", CheckUserAuth, UserControllers.UserUpdate);

//Delete User
UserRoutes.delete("/UserDelete", CheckUserAuth, UserControllers.UserDelete);

//Send Recovery Otp
UserRoutes.get("/SendRecoveryOtp/:Email", UserControllers.SendRecoveryOtp);

//Verify Recovary Otp
UserRoutes.get(
  "/VerifyRecoveryOtp/:Email/:OtpCode",
  UserControllers.VerifyRecoveryOtp,
);

//Recovery Reset Pass
UserRoutes.post(
  "/RecoveryResetPass/:Email/:OtpCode",
  UserControllers.RecoveryResetPass,
);

//Verify Account Sent Otp
UserRoutes.get(
  "/VerifyAccountSentOtp/:Email",
  UserControllers.VerifyAccountSentOtp,
);

//Verify Account Verify Otp
UserRoutes.get(
  "/VerifyAccountVerifyOtp/:Email/:OtpCode",
  UserControllers.VerifyAccountVerifyOtp,
);

module.exports = UserRoutes;
