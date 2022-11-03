//External Lib Import
import { configureStore } from "@reduxjs/toolkit";

//Internal Import
import LoaderSlice from "../slices/LoaderSlice";
import SettingSlice from "../slices/SettingSlice";
import AuthSlice from "../slices/AuthSlice";
import UserSlice from "../slices/UserSlice";
import CategorySlice from "../slices/CategorySlice";
import SubCategorySlice from "../slices/SubCategorySlice";
import TagSlice from "../slices/TagSlice";
import NewsSlice from "../slices/NewsSlice";

const store = configureStore({
  reducer: {
    Loader: LoaderSlice,
    Setting: SettingSlice,
    Auth: AuthSlice,
    User: UserSlice,
    Category: CategorySlice,
    SubCategory: SubCategorySlice,
    Tag: TagSlice,
    News: NewsSlice,
  },
});

export default store;
