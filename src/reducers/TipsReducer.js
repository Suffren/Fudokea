import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 1,
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
  ]
};

export const tipSlice = createSlice({
  name: 'tips',
  initialState,
  reducers: {
    addTip: (state, action) => {
      state.count += 1;
      const newTips = { ...action.payload, read: false, id: state.data.length }
      state.data.push(newTips)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTip } = tipSlice.actions

export default tipSlice.reducer