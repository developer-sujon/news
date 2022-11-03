//External Lib Import
const AdminRoutes = require("express").Router();

//Internal Lib Import
const {
  CheckUserAuth,
  CheckAdminAuth,
} = require("../middleware/CheckAuthLogin");
const AdminControllers = require("../controller/Admin/AdminControllers");

//Select All User
AdminRoutes.get(
  "/SelectAllUser",
  CheckUserAuth,
  CheckAdminAuth,
  AdminControllers.SelectAllUser,
);

//Select User
AdminRoutes.get(
  "/SelectUser/:Email",
  CheckUserAuth,
  CheckAdminAuth,
  AdminControllers.SelectUser,
);

//Block User
AdminRoutes.put(
  "/BlockUser/:Email",
  CheckUserAuth,
  CheckAdminAuth,
  AdminControllers.BlockUser,
);

//Unblock User
AdminRoutes.put(
  "/UnblockUser/:Email",
  CheckUserAuth,
  CheckAdminAuth,
  AdminControllers.UnblockUser,
);

module.exports = AdminRoutes;
