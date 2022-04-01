/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchArticle = createAsyncThunk("Article/fetch", async () => {
  try {
    // https://git.heroku.com/mon-dentiste.git
    // http://localhost:7000/api/article
    // https://git.heroku.com/mon-dentiste.git/api/article
    const response = await axios.get(
      "http://localhost:7000/api/article"
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(" erreur lors du fetching des data des : ", error);
  }
});
const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticle.fulfilled, (state, { payload }) => {
      try {
        state.articles = [];
        state.articles.push(...payload);
        state.isLoading = false;
      } catch (error) {
        console.log("erreurs lors du chargement", error);
      }
    });

    builder.addCase(fetchArticle.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
    builder.addCase(fetchArticle.pending, (state, { payload }) => {
      state.isLoading = true;
    });
  },
});
export default articleSlice.reducer;
