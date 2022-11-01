//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

//External Lib Import
const SubCategoryModel = require("../../model/SubCategory/SubCategoryModel");
const { CreateError } = require("../../helper/ErrorHandler");

const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DropDownService = require("../../services/Common/DropDownService");
const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");

/**
 * @desc SubCategory Create
 * @access private
 * @route /api/v1/SubCategory/SubCategoryCreate
 * @methud POST
 */

const SubCategoryCreate = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      { SubCategoryName: req.body.SubCategoryName },
      SubCategoryModel,
    );

    if (associal) {
      throw CreateError("This SubCategory Already Created");
    }

    const result = await CreateService(req, SubCategoryModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc SubCategory List
 * @access private
 * @route /api/v1/SubCategory/SubCategoryList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const SubCategoryList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRgx }];

  try {
    const result = await ListService(req, SubCategoryModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc SubCategory Drop Down
 * @access private
 * @route /api/v1/SubCategory/SubCategoryDropDown
 * @methud GET
 */

const SubCategoryDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(
      req,
      SubCategoryModel,
      {
        SubCategoryStatus: true,
      },
      {
        label: "$SubCategoryName",
        value: "$_id",
      },
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc SubCategory Details
 * @access private
 * @route /api/v1/SubCategory/SubCategoryDetails/:id
 * @methud GET
 */

const SubCategoryDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, SubCategoryModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc SubCategory Update
 * @access private
 * @route /api/v1/SubCategory/SubCategoryUpdate/:id
 * @methud PATCH
 */

const SubCategoryUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, SubCategoryModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc SubCategory  Delete
 * @access private
 * @route /api/v1/SubCategory/SubCategoryDelete/:id
 * @methud DELETE
 */

const SubCategoryDelete = async (req, res, next) => {
  try {
    const result = await DeleteService(req, SubCategoryModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  SubCategoryCreate,
  SubCategoryDropDown,
  SubCategoryList,
  SubCategoryDetails,
  SubCategoryUpdate,
  SubCategoryDelete,
};
