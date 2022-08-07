import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  count: 0
};

const weeks = [{
  year: 2022,
  number: 1,
  weigth: 85,
  comment: "None",
  sport: "None",
  consumed: [
    { product: "Mars", nutri_score: 5, scanned: false, created_date: new Date().toUTCString()},
  ]
}]

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
