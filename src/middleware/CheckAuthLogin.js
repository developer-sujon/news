//External Lib Import
const { ObjectId } = require("mongoose").Types;

//Internal Lib Import
const { CreateError } = require("../helper/ErrorHandler");
const DecodedToken = require("../utility/DecodedToken");
const UsersModel = require("../model/Users/UsersModel");

/**
 * @desc CheckUserAuth
 * @access public
 * @methud POST
 */
const CheckUserAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    let token = authorization.split(" ")[1];
    const decoded = await DecodedToken(token);

    const user = await UsersModel.aggregate([
      {
        $match: { _id: ObjectId(decoded.id) },
      },
    ]);

    req.Email = user[0].Email;
    req.UserId = user[0]._id;

    if (!user.length > 0) {
      throw CreateError("Invalid Credentials", 401);
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

/**
 * @desc CheckAdminAuth
 * @access public
 * @methud POST
 */
const CheckAdminAuth = async (req, res, next) => {
  try {
    const { Email } = req;

    const admin = await UsersModel.aggregate([
      {
        $match: {
          $and: [{ Email: Email }, { Roles: "ADMIN" }],
        },
      },
    ]);

    if (!admin.length > 0) {
      throw CreateError("Invalid Credentials", 401);
    }
    req.Roles = admin[0].Roles;
    next();
  } catch (e) {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

module.exports = {
  CheckUserAuth,
  CheckAdminAuth,
};
