import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type New = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type NewsState = {
  news: New[];
  limitPage: number;
};

export const getNews = createAsyncThunk<
  New[],
  undefined,
  { state: { news: NewsState } }
>("newsSlice/getNews", async function (_, { getState }) {
  const limitPage = getState().news.limitPage;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limitPage}`
  );
  return response.data;
});
export const getOtherNews = createAsyncThunk<
  New[],
  undefined,
  { state: { news: NewsState } }
>("newsSlice/getOtherNews", async function (_, { getState }) {
  const limitPage = getState().news.limitPage;
  const length = getState().news.news.length;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limitPage + length}`
  );
  return response.data;
});
export const removeNews = createAsyncThunk<number, number>(
  "newsSlice/remuveNews",
  async function (id) {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return id;
  }
);

const initialState: NewsState = {
  news: [],
  limitPage: 10,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    remove(state, action) {
      console.log(action);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(getOtherNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(removeNews.fulfilled, (state, action) => {
        state.news = state.news.filter((el) => el.id !== action.payload);
      });
  },
});

//export const {} = newsSlice.actions;

export default newsSlice.reducer;
