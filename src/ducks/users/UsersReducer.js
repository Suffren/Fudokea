import { createSlice } from "@reduxjs/toolkit";

const isConnected = !!localStorage.getItem('accessToken')
const initialState = {
  count: 0,
  data:  [],
  isLoading: false,
  isConnected,
  errors: []
};


export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state) => {state.isLoading = true;},
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isConnected = true;
      localStorage.setItem('accessToken', action.payload.token)
    },
    loginFailure: (state, action)  => {
      state.isLoading = false;
      state.errors = action.payload.errors;
    },
    signUp: (state) => {state.isLoading = true;},
    logout: (state) => {
      localStorage.removeItem('accessToken')
      state.isLoading = true;
      state.isConnected = false;
    },
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
