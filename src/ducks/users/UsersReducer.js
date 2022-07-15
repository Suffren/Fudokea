import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  data:  [],
  isLoading: false,
  isConnected: true
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state) => {state.isLoading = true;},
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isConnected = true;
    },
    loginFailure: (state) => {state.isLoading = false;},
    signUp: (state) => {state.isLoading = true;},
    logout: (state) => {state.isLoading = true;},
    userSuccess: (state) => { state.isLoading = false;},
    userFailure: (state) => { state.isLoading = false;},
  },
});

export const {
  login,
  loginSuccess,
  loginFailure,
  signUp,
  logout,
  userSuccess,
  userFailure,
} = userSlice.actions;

export default userSlice.reducer;
