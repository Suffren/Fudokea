import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      title: "Coca",
      content: "Sucre !",
      level: 3,
    },
    {
      id: 2,
      title: "Courge",
      content: "lègume",
      level: 1,
    },
  ],
};
export const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    getFood: (state) => {},
    getFoods: (state) => {},
    addFood: (state) => {
      state.isLoading = true;
    },
    foodSuccess: (state) => {},
    foodFailure: (state) => {},
  },
});

export const { getFood, getFoods, addFood, foodSuccess, foodFailure } =
  foodSlice.actions;

export default foodSlice.reducer;
