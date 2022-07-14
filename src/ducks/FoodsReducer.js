import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      title: "Coca",
      content: "Sucre !",
    },
    {
      id: 2,
      title: "Courge",
      content: "lègume",
    },
  ],
};
export const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    getFood: (state) => {},
  },
});

export const { getFood } = foodSlice.actions;

export default foodSlice.reducer;
