//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

const NewsSlice = createSlice({
  name: "News",
  initialState: {
    NewsLists: [],
    NewsDropDown: [],
    TotalNews: 0,
    NewsDetails: {},
  },
  reducers: {
    SetNewsLists(state, action) {
      state.NewsLists = action.payload;
    },
    SetTotalNews(state, action) {
      state.TotalNews = action.payload;
    },
    SetNewsDropDown(state, action) {
      state.NewsDropDown = action.payload;
    },
    SetNewsDetails(state, action) {
      state.NewsDetails = action.payload;
    },
  },
});

export const { SetNewsLists, SetTotalNews, SetNewsDropDown, SetNewsDetails } =
  NewsSlice.actions;
export default NewsSlice.reducer;
