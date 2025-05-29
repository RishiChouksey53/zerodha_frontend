import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../action/authAction";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: false,
  message: "",
  isSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => {
      initialState;
    },
    emptyMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.message = "Logging in...";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message || "Login successful";
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = true;
        state.message = action.payload?.message || "Login failed";
      });
  },
});

export const { reset, emptyMessage } = authSlice.actions;
export default authSlice.reducer;
