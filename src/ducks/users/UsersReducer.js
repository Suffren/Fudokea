import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  data:  []
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state) => {state.isLoading = true;},
    loginSuccess: (state) => {},
    loginFailure: (state) => {},
    logout: (state) => {state.isLoading = true;},
    userSuccess: (state) => { state.isLoading = false;},
    userFailure: (state) => { state.isLoading = false;},
  },
});

export const {
  login,
  loginSuccess,
  loginFailure,
  logout,
  userSuccess,
  userFailure,
} = userSlice.actions;

export default userSlice.reducer;
