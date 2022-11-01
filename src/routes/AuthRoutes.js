//External Lib Import
const AuthRoutes = require("express").Router();

//Internal Lib Import
const AuthControllers = require("../controller/Auth/AuthControllers");

//Register User
AuthRoutes.post("/RegisterUser", AuthControllers.RegisterUser);

//Login User
AuthRoutes.post("/LoginUser", AuthControllers.LoginUser);

module.exports = AuthRoutes;
