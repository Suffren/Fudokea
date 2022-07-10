import { configureStore } from "@reduxjs/toolkit";

import TipsReducer from "./reducers/TipsReducer";
import FoodsReducer from "./reducers/FoodsReducer";

export const store = configureStore({
  reducer: {
    tips: TipsReducer,
    foods: FoodsReducer,
  },
});
