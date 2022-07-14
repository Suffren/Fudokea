import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
  data:  [
    {
      id: 1,
      name: "Régis",
      lastname: "VITEL",
      password: "OH",
    },
  ]
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state) => {},
    loginSuccess: (state) => {},
    loginFailure: (state) => {},
  },
});

export const { login, loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
