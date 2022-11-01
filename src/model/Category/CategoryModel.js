//External Lib Import
const { model, Schema } = require("mongoose");

const CategorySchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    CategoryName: {
      type: String,
      required: true,
      unique: true,
    },
    CategorySlug: {
      type: String,
      required: true,
      unique: true,
    },
    CategoryDetails: {
      type: String,
    },
    CategoryStatus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const CategoryModel = new model("Category", CategorySchema);
module.exports = CategoryModel;
