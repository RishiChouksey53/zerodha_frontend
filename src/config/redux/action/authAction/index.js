import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await clientServer.post("/user/register", {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        username: userData.username,
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data || "Something went wrong"
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await clientServer.post("/user/login", {
        email: userData.email,
        password: userData.password,
      });
      if (response.data.token) {
        localStorage.setItem({ token: response.data.token });
      }
      return thunkAPI.fulfillWithValue(response.data.user);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data || "Something went wrong"
      );
    }
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }
    const response = await clientServer.get("/user/getUser", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.response?.data || "Something went wrong"
    );
  }
});
