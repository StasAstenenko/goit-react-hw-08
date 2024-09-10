import { createSlice } from "@reduxjs/toolkit";
import { isLogin, isRefresh, isRegister, logOut } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(isRegister.pending, (state) => {
        state.error = null;
      })
      .addCase(isRegister.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(isRegister.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(isLogin.pending, (state) => {
        state.error = null;
      })
      .addCase(isLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(isLogin.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(isRefresh.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(isRefresh.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(isRefresh.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
        state.token = null;
      })

      .addCase(logOut.pending, (state) => {
        state.error = null;
      })
      .addCase(logOut.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
