//External Lib Import
const SubCategoryRoutes = require("express").Router();
const SubCategoryControllers = require("../controller/SubCategory/SubCategoryControllers");
const { CheckUserAuth } = require("../middleware/CheckAuthLogin");

//SubCategory Create
SubCategoryRoutes.post(
  "/SubCategoryCreate",
  CheckUserAuth,
  SubCategoryControllers.SubCategoryCreate,
);

//SubCategory List
SubCategoryRoutes.get(
  "/SubCategoryList/:pageNumber/:perPage/:searchKeyword",
  CheckUserAuth,
  SubCategoryControllers.SubCategoryList,
);

//SubCategory Drop Down
SubCategoryRoutes.get(
  "/SubCategoryDropDown",
  CheckUserAuth,
  SubCategoryControllers.SubCategoryDropDown,
);

//SubCategory Details
SubCategoryRoutes.get(
  "/SubCategoryDetails/:id",
  CheckUserAuth,
  SubCategoryControllers.SubCategoryDetails,
);

//SubCategory Update
SubCategoryRoutes.patch(
  "/SubCategoryUpdate/:id",
  CheckUserAuth,
  SubCategoryControllers.SubCategoryUpdate,
);

//SubCategory Delete
SubCategoryRoutes.delete(
  "/SubCategoryDelete/:id",
  CheckUserAuth,
  SubCategoryControllers.SubCategoryDelete,
);

module.exports = SubCategoryRoutes;
