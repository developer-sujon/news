//External Lib Import
const { model, Schema } = require("mongoose");

const SubCategorySchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    CategoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    SubCategoryName: {
      type: String,
      required: true,
    },
    SubCategorySlug: {
      type: String,
      required: true,
    },
    SubCategoryDetails: {
      type: String,
    },
    SubCategoryStatus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const SubCategoryModel = new model("SubCategory", SubCategorySchema);
module.exports = SubCategoryModel;
