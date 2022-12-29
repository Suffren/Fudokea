import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 2,
  data: [
    {
      id: 0,
      title: "Title here",
      content: "lorem ipsum",
      read: true,
    },
    {
      id: 1,
      title: "Title two",
      content: "lorem ipsum",
      read: false,
    },
  ],
  isLoading: false,
  error: "",
};

export const tipSlice = createSlice({
  name: "tips",
  initialState,
  reducers: {
    addTip: (state) => {
      state.isLoading = true;
    },
    tipSuccess: (state, action) => {
      state.count += 1;
      const tip = { ...action.payload };
      state.data.push(tip);
      state.isLoading = false;
    },
    tipFailure: (state) => {
      state.isLoading = false;
    },
    getTips: (state) => {
      state.isLoading = true;
    },
    getTipsSuccess: (state, action) => {
      const tips = Object.keys(action.payload).map((tipId) => ({
        ...action.payload[tipId],
        id: tipId,
      }));
      state.data = state.data.concat(tips);
      state.count = initialState.count + tips.length;
      state.isLoading = false;
    },
  },
});

export const { addTip, tipSuccess, tipFailure, getTips, getTipsSuccess } =
  tipSlice.actions;

export default tipSlice.reducer;
