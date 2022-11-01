//External Lib Import
const NewsRoutes = require("express").Router();
const NewsControllers = require("../controller/News/NewsControllers");
const { CheckUserAuth } = require("../middleware/CheckAuthLogin");

//News Create
NewsRoutes.post("/NewsCreate", CheckUserAuth, NewsControllers.NewsCreate);

//News List
NewsRoutes.get(
  "/NewsList/:pageNumber/:perPage/:searchKeyword",
  NewsControllers.NewsList,
);

//News Drop Down
NewsRoutes.get("/NewsDropDown", NewsControllers.NewsDropDown);

//News Details
NewsRoutes.get("/NewsDetails/:id", NewsControllers.NewsDetails);

//News Details BySlug
NewsRoutes.get(
  "/NewsDetailsBySlug/:slug",
  NewsControllers.NewsDetailsBySlug,
);

//News Details ByCategory
NewsRoutes.get(
  "/NewsDetailsByCategory/:category",
  NewsControllers.NewsDetailsByCategory,
);

//News Details ByCategory
NewsRoutes.get(
  "/NewsDetailsBySubCategory/:subCategory",
  NewsControllers.NewsDetailsBySubCategory,
);

//News Details ByTag
NewsRoutes.get(
  "/NewsDetailsByTag/:tag",
  NewsControllers.NewsDetailsByTag,
);

//News Popular
NewsRoutes.get("/NewsPopular", NewsControllers.NewsPopular);

//News Popular
NewsRoutes.get("/NewsLatest", NewsControllers.NewsLatest);

//News Update
NewsRoutes.patch("/NewsUpdate/:id", CheckUserAuth, NewsControllers.NewsUpdate);

//News Delete
NewsRoutes.delete("/NewsDelete/:id", CheckUserAuth, NewsControllers.NewsDelete);

module.exports = NewsRoutes;
