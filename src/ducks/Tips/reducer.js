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
    addTip: state => {
      console.log('tip', state)
      state.isLoading = true;
    },
    tipSuccess: (state, action) => {
      state.count += 1;
      const newTips = { ...action.payload, read: false, id: state.data.length };
      state.data.push(newTips);
      state.isLoading = false;
    },
    tipFailure: state => {
      state.isLoading = true;
    },
  },
});

export const { addTip, tipSuccess, tipFailure } = tipSlice.actions;

export default tipSlice.reducer;
