//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

//External Lib Import
const TagModel = require("../../model/Tag/TagModel");
const { CreateError } = require("../../helper/ErrorHandler");

const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DropDownService = require("../../services/Common/DropDownService");
const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");

/**
 * @desc Tag Create
 * @access private
 * @route /api/v1/Tag/TagCreate
 * @methud POST
 */

const TagCreate = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      { TagName: req.body.TagName },
      TagModel,
    );

    if (associal) {
      throw CreateError("This Tag Already Created");
    }

    const result = await CreateService(req, TagModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Tag List
 * @access private
 * @route /api/v1/Tag/TagList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const TagList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRgx }];

  try {
    const result = await ListService(req, TagModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Tag Drop Down
 * @access private
 * @route /api/v1/Tag/TagDropDown
 * @methud GET
 */

const TagDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(
      req,
      TagModel,
      {
        TagStatus: true,
      },
      {
        label: "$TagName",
        value: "$_id",
      },
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Tag Details
 * @access private
 * @route /api/v1/Tag/TagDetails/:id
 * @methud GET
 */

const TagDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, TagModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Tag Update
 * @access private
 * @route /api/v1/Tag/TagUpdate/:id
 * @methud PATCH
 */

const TagUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, TagModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Tag  Delete
 * @access private
 * @route /api/v1/Tag/TagDelete/:id
 * @methud DELETE
 */

const TagDelete = async (req, res, next) => {
  try {
    const result = await DeleteService(req, TagModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  TagCreate,
  TagDropDown,
  TagList,
  TagDetails,
  TagUpdate,
  TagDelete,
};
