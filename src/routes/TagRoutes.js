//External Lib Import
const TagRoutes = require("express").Router();
const TagControllers = require("../controller/Tag/TagControllers");
const { CheckUserAuth } = require("../middleware/CheckAuthLogin");

//Tag Create
TagRoutes.post(
  "/TagCreate",
  CheckUserAuth,
  TagControllers.TagCreate,
);

//Tag List
TagRoutes.get(
  "/TagList/:pageNumber/:perPage/:searchKeyword",
  CheckUserAuth,
  TagControllers.TagList,
);

//Tag Drop Down
TagRoutes.get(
  "/TagDropDown",
  CheckUserAuth,
  TagControllers.TagDropDown,
);

//Tag Details
TagRoutes.get(
  "/TagDetails/:id",
  CheckUserAuth,
  TagControllers.TagDetails,
);

//Tag Update
TagRoutes.patch(
  "/TagUpdate/:id",
  CheckUserAuth,
  TagControllers.TagUpdate,
);

//Tag Delete
TagRoutes.delete(
  "/TagDelete/:id",
  CheckUserAuth,
  TagControllers.TagDelete,
);

module.exports = TagRoutes;
