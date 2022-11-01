//External Lib Import
const routes = require("express").Router();

//Internal Lib Import
const AuthRoutes = require("./AuthRoutes");
const UserRoutes = require("./UserRoutes");
const AdminRoutes = require("./AdminRoutes");
const CategoryRoutes = require("./CategoryRoutes");
const TagRoutes = require("./TagRoutes");
const SubCategoryRoutes = require("./SubCategoryRoutes");
const NewsRoutes = require("./NewsRoutes");

//Auth Routes
routes.use("/Auth", AuthRoutes);

//User Routes
routes.use("/User", UserRoutes);

//Category Routes
routes.use("/Category", CategoryRoutes);

//Tag Routes
routes.use("/Tag", TagRoutes);

//SubCategory Routes
routes.use("/SubCategory", SubCategoryRoutes);

//News Routes
routes.use("/News", NewsRoutes);

module.exports = routes;
