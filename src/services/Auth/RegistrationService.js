//Internal Lib Import
const { CreateError } = require("../../helper/ErrorHandler");
const { HashPassword } = require("../../utility/BcryptHelper");

const RegistrationService = async (Request, UsersModel) => {
  const { Name, Phone, Email, Password } = Request.body;

  const newUser = new UsersModel({
    Name: Name,
    Phone: Phone,
    Email: Email,
    Password: Password,
  });

  if (!Name || !Phone || !Email || !Password) {
    throw CreateError("Invalid Data", 400);
  }

  const exitUser = await UsersModel.aggregate([
    { $match: { $or: [{ Email: Email }, { Phone: Phone }] } },
  ]);

  if (exitUser && exitUser.length > 0) {
    throw CreateError("User Already Register", 400);
  }
  newUser.Password = await HashPassword(Password);

  const User = await newUser.save();
  delete User._doc.Password;

  return User;
};

module.exports = RegistrationService;
