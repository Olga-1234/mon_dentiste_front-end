
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUser = createAsyncThunk("User/fetch", async () => {
  try {
    // https://git.heroku.com/mon-dentiste.git
    // http://localhost:7000/api/article
    // https://git.heroku.com/mon-dentiste.git/api/article
    const response = await axios.get(
      "https://mon-dentiste-ok.herokuapp.com/api/users/allUser",
      {
        headers: {
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(" erreur lors du fetching des data des : ", error);
  }
});
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      try {
        state.users = [];
        state.users.push(...payload);
        state.isLoading = false;
      } catch (error) {
        console.log("erreurs lors du chargement", error);
      }
    });

    builder.addCase(fetchUser.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.pending, (state, { payload }) => {
      state.isLoading = true;
    });
  },
});
export default userSlice.reducer;

