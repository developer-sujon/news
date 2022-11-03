//External Lib Import
const { model, Schema } = require("mongoose");

const NewsSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    NewsThumbnail: {
      type: String,
      required: true,
    },
    NewsTitle: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    NewsTitleSlug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    NewsDetails: {
      type: String,
    },
    NewsStatus: {
      type: Boolean,
      required: true,
    },
    NewsViews: {
      type: Number,
      default: 0,
    },
    Category: {
      type: String,
      required: true,
    },
    SubCategory: {
      type: String,
    },
    Tags: {
      type: [
        {
          type: String,
        },
      ],
    },
  },
  { timestamps: true, versionKey: false },
);

const NewsModel = new model("News", NewsSchema);
module.exports = NewsModel;
