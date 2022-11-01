//External Lib Import
const { model, Schema } = require("mongoose");

const TagSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    TagName: {
      type: String,
      required: true,
      unique: true,
    },
    TagSlug: {
      type: String,
      required: true,
      unique: true,
    },
    TagDetails: {
      type: String,
    },
    TagStatus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const TagModel = new model("Tag", TagSchema);
module.exports = TagModel;
