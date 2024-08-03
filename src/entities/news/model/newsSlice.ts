import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PAGE_SIZE } from "../../../shared/constants";
import { INews } from "./types";
import { IFilters } from "@/shared/interfaces";

interface IState {
  news: INews[];
  filters: IFilters;
}

const initialState: IState = {
  news: [],
  filters: {
    page_number: 1,
    category: null,
    keywords: "",
    page_size: PAGE_SIZE,
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      state.filters = {
        ...state.filters,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export const { setNews, setFilters } = newsSlice.actions;

export default newsSlice.reducer;
