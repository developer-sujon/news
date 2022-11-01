//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

//External Lib Import
const NewsModel = require("../../model/News/NewsModel");
const { CreateError } = require("../../helper/ErrorHandler");

const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DropDownService = require("../../services/Common/DropDownService");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");
const ListThreeJoinService = require("../../services/Common/ListThreeJoinService");
const DetailsQueryService = require("../../services/Common/DetailsQueryService");
const ListByLImitService = require("../../services/Common/ListByLImitService");

/**
 * @desc News Create
 * @access private
 * @route /api/v1/News/NewsCreate
 * @methud POST
 */

const NewsCreate = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      { NewsTitle: req.body.NewsTitle },
      NewsModel,
    );

    if (associal) {
      throw CreateError("This News Already Created");
    }

    req.body.NewsTitleSlug = req.body.NewsTitle.replace(/\s/g, "-");

    const result = await CreateService(req, NewsModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News List
 * @access private
 * @route /api/v1/News/NewsList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const NewsList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    {
      NewsTitle: SearchRgx,
      CategoryName: SearchRgx,
      SubCategoryName: SearchRgx,
      NewsDetails: SearchRgx,
    },
  ];

  const JoinStageOne = {
    $lookup: {
      from: "categories",
      localField: "CategoryId",
      foreignField: "_id",
      as: "Category",
    },
  };

  const JoinStageTow = {
    $lookup: {
      from: "subcategories",
      localField: "SubCategoryId",
      foreignField: "_id",
      as: "SubCategory",
    },
  };

  const JoinStageThree = {
    $lookup: {
      from: "tags",
      localField: "TagId",
      foreignField: "_id",
      as: "Tag",
    },
  };

  const projection = {
    $project: {
      NewsThumbnail: 1,
      NewsTitle: 1,
      NewsTitleSlug: 1,
      CategoryName: { $first: "$Category.CategoryName" },
      SubCategoryName: { $first: "$SubCategory.SubCategoryName" },
      Tag: { TagName: 1 },
      NewsDetails: 1,
      NewsViews: 1,
    },
  };

  try {
    const result = await ListThreeJoinService(
      req,
      NewsModel,
      SearchArray,
      JoinStageOne,
      JoinStageTow,
      JoinStageThree,
      projection,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News Drop Down
 * @access private
 * @route /api/v1/News/NewsDropDown
 * @methud GET
 */

const NewsDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(
      req,
      NewsModel,
      {
        NewsStatus: true,
      },
      {
        label: "$NewsTitle",
        value: "$_id",
      },
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News Details
 * @access private
 * @route /api/v1/News/NewsDetails/:id
 * @methud GET
 */

const NewsDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, NewsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News Details By Slug
 * @access private
 * @route /api/v1/News/NewsDetailsBySlug/:slug
 * @methud GET
 */

const NewsDetailsBySlug = async (req, res, next) => {
  try {
    const JoinStageOne = {
      $lookup: {
        from: "categories",
        localField: "CategoryId",
        foreignField: "_id",
        as: "Category",
      },
    };

    const JoinStageTow = {
      $lookup: {
        from: "subcategories",
        localField: "SubCategoryId",
        foreignField: "_id",
        as: "SubCategory",
      },
    };

    const JoinStageThree = {
      $lookup: {
        from: "tags",
        localField: "TagId",
        foreignField: "_id",
        as: "Tag",
      },
    };

    const projection = {
      $project: {
        NewsThumbnail: 1,
        NewsTitle: 1,
        NewsTitleSlug: 1,
        Category: {
          CategoryName: 1,
          CategorySlug: 1,
        },
        SubCategory: {
          SubCategoryName: 1,
          SubCategorySlug: 1,
        },
        Tag: {
          TagName: 1,
          TagSlug: 1,
        },
        NewsDetails: 1,
        NewsViews: 1,
      },
    };

    const MatchQuery = { NewsTitleSlug: req.params.slug, NewsStatus: true };
    const result = await DetailsQueryService(
      req,
      NewsModel,
      MatchQuery,
      JoinStageOne,
      JoinStageTow,
      JoinStageThree,
      projection,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News Details By Category
 * @access private
 * @route /api/v1/News/NewsDetailsByCategory/:category
 * @methud GET
 */

const NewsDetailsByCategory = async (req, res, next) => {
  try {
    const JoinStageOne = {
      $lookup: {
        from: "categories",
        localField: "CategoryId",
        foreignField: "_id",
        as: "Category",
      },
    };

    const JoinStageTow = {
      $lookup: {
        from: "subcategories",
        localField: "SubCategoryId",
        foreignField: "_id",
        as: "SubCategory",
      },
    };

    const JoinStageThree = {
      $lookup: {
        from: "tags",
        localField: "TagId",
        foreignField: "_id",
        as: "Tag",
      },
    };

    const projection = {
      $project: {
        NewsThumbnail: 1,
        NewsTitle: 1,
        NewsTitleSlug: 1,
        Category: {
          CategoryName: 1,
          CategorySlug: 1,
        },
        SubCategory: {
          SubCategoryName: 1,
          SubCategorySlug: 1,
        },
        Tag: {
          TagName: 1,
          TagSlug: 1,
        },
        NewsDetails: 1,
        NewsViews: 1,
      },
    };

    const MatchQuery = {
      CategoryId: ObjectId(req.params.category),
      NewsStatus: true,
    };
    const result = await DetailsQueryService(
      req,
      NewsModel,
      MatchQuery,
      JoinStageOne,
      JoinStageTow,
      JoinStageThree,
      projection,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News Details By SubCategory
 * @access private
 * @route /api/v1/News/NewsDetailsBySubCategory/:subCategory
 * @methud GET
 */

const NewsDetailsBySubCategory = async (req, res, next) => {
  try {
    const JoinStageOne = {
      $lookup: {
        from: "categories",
        localField: "CategoryId",
        foreignField: "_id",
        as: "Category",
      },
    };

    const JoinStageTow = {
      $lookup: {
        from: "subcategories",
        localField: "SubCategoryId",
        foreignField: "_id",
        as: "SubCategory",
      },
    };

    const JoinStageThree = {
      $lookup: {
        from: "tags",
        localField: "TagId",
        foreignField: "_id",
        as: "Tag",
      },
    };

    const projection = {
      $project: {
        NewsThumbnail: 1,
        NewsTitle: 1,
        NewsTitleSlug: 1,
        Category: {
          CategoryName: 1,
          CategorySlug: 1,
        },
        SubCategory: {
          SubCategoryName: 1,
          SubCategorySlug: 1,
        },
        Tag: {
          TagName: 1,
          TagSlug: 1,
        },
        NewsDetails: 1,
        NewsViews: 1,
      },
    };

    const MatchQuery = {
      SubCategoryId: ObjectId(req.params.subCategory),
      NewsStatus: true,
    };
    const result = await DetailsQueryService(
      req,
      NewsModel,
      MatchQuery,
      JoinStageOne,
      JoinStageTow,
      JoinStageThree,
      projection,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News Details By Tag
 * @access private
 * @route /api/v1/News/NewsDetailsByTag/:Tag
 * @methud GET
 */

const NewsDetailsByTag = async (req, res, next) => {
  try {
    const JoinStageOne = {
      $lookup: {
        from: "categories",
        localField: "CategoryId",
        foreignField: "_id",
        as: "Category",
      },
    };

    const JoinStageTow = {
      $lookup: {
        from: "subcategories",
        localField: "SubCategoryId",
        foreignField: "_id",
        as: "SubCategory",
      },
    };

    const JoinStageThree = {
      $lookup: {
        from: "tags",
        localField: "TagId",
        foreignField: "_id",
        as: "Tag",
      },
    };

    const projection = {
      $project: {
        NewsThumbnail: 1,
        NewsTitle: 1,
        NewsTitleSlug: 1,
        Category: {
          CategoryName: 1,
          CategorySlug: 1,
        },
        SubCategory: {
          SubCategoryName: 1,
          SubCategorySlug: 1,
        },
        Tag: {
          TagName: 1,
          TagSlug: 1,
        },
        NewsDetails: 1,
        NewsViews: 1,
      },
    };

    const MatchQuery = {
      TagId: { $in: [ObjectId(req.params.tag)] },
      NewsStatus: true,
    };
    const result = await DetailsQueryService(
      req,
      NewsModel,
      MatchQuery,
      JoinStageOne,
      JoinStageTow,
      JoinStageThree,
      projection,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News Popular
 * @access private
 * @route /api/v1/News/NewsPopular
 * @methud GET
 */

const NewsPopular = async (req, res, next) => {
  try {
    const JoinStageOne = {
      $lookup: {
        from: "categories",
        localField: "CategoryId",
        foreignField: "_id",
        as: "Category",
      },
    };

    const JoinStageTow = {
      $lookup: {
        from: "subcategories",
        localField: "SubCategoryId",
        foreignField: "_id",
        as: "SubCategory",
      },
    };

    const JoinStageThree = {
      $lookup: {
        from: "tags",
        localField: "TagId",
        foreignField: "_id",
        as: "Tag",
      },
    };

    const projection = {
      $project: {
        NewsThumbnail: 1,
        NewsTitle: 1,
        NewsTitleSlug: 1,
        Category: {
          CategoryName: 1,
          CategorySlug: 1,
        },
        SubCategory: {
          SubCategoryName: 1,
          SubCategorySlug: 1,
        },
        Tag: {
          TagName: 1,
          TagSlug: 1,
        },
        NewsDetails: 1,
        NewsViews: 1,
      },
    };

    const MatchQuery = { NewsStatus: true };
    const sortIng = { NewsViews: -1 };
    const result = await ListByLImitService(
      req,
      NewsModel,
      MatchQuery,
      JoinStageOne,
      JoinStageTow,
      JoinStageThree,
      projection,
      sortIng,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News Latest
 * @access private
 * @route /api/v1/News/NewsLatest
 * @methud GET
 */

const NewsLatest = async (req, res, next) => {
  try {
    const JoinStageOne = {
      $lookup: {
        from: "categories",
        localField: "CategoryId",
        foreignField: "_id",
        as: "Category",
      },
    };

    const JoinStageTow = {
      $lookup: {
        from: "subcategories",
        localField: "SubCategoryId",
        foreignField: "_id",
        as: "SubCategory",
      },
    };

    const JoinStageThree = {
      $lookup: {
        from: "tags",
        localField: "TagId",
        foreignField: "_id",
        as: "Tag",
      },
    };

    const projection = {
      $project: {
        NewsThumbnail: 1,
        NewsTitle: 1,
        NewsTitleSlug: 1,
        Category: {
          CategoryName: 1,
          CategorySlug: 1,
        },
        SubCategory: {
          SubCategoryName: 1,
          SubCategorySlug: 1,
        },
        Tag: {
          TagName: 1,
          TagSlug: 1,
        },
        NewsDetails: 1,
        NewsViews: 1,
      },
    };

    const MatchQuery = { NewsStatus: true };
    const sortIng = { _id: -1 };
    const result = await ListByLImitService(
      req,
      NewsModel,
      MatchQuery,
      JoinStageOne,
      JoinStageTow,
      JoinStageThree,
      projection,
      sortIng,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News Update
 * @access private
 * @route /api/v1/News/NewsUpdate/:id
 * @methud PATCH
 */

const NewsUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, NewsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc News  Delete
 * @access private
 * @route /api/v1/News/NewsDelete/:id
 * @methud DELETE
 */

const NewsDelete = async (req, res, next) => {
  try {
    const result = await DeleteService(req, NewsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  NewsCreate,
  NewsDropDown,
  NewsList,
  NewsDetails,
  NewsDetailsByCategory,
  NewsDetailsBySubCategory,
  NewsDetailsByTag,
  NewsPopular,
  NewsLatest,
  NewsUpdate,
  NewsDelete,
  NewsDetailsBySlug,
};
