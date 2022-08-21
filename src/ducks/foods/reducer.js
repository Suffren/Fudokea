import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  count: 0,
};

const weeks = [
  {
    year: 2022,
    number: 1,
    weigth: 85,
    comment: "None",
    sport: "None",
    consumed: [
      {
        product: "Mars",
        nutri_score: 5,
        scanned: false,
        created_date: new Date().toUTCString(),
      },
    ],
  },
];

export const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    getFood: (state) => {
      state.isLoading = true;
    },
    getFoods: (state) => {
      state.isLoading = true;
    },
    addFood: (state) => {
      state.isLoading = true;
    },
    foodSuccess: (state, action) => {
      state.data = state.data.concat(action.payload);
      state.isLoading = false;
    },
    foodFailure: (state) => {
      state.isLoading = false;
    },
    foodsSuccess: (state, action) => {
      const foods = Object.keys(action.payload).map((foodId) => ({
        ...action.payload[foodId],
        id: foodId,
      }));
      state.data = foods;
      state.isLoading = false;
    },
    foodsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getFood,
  getFoods,
  addFood,
  foodSuccess,
  foodFailure,
  foodsSuccess,
  foodsFailure,
} = foodSlice.actions;

export default foodSlice.reducer;
