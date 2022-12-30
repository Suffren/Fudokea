import { combineReducers } from "redux";
import { createRouterReducer } from "@lagunovsky/redux-react-router";
import { browserHistory } from "./appHistory";
import TipsReducer from "./ducks/tips/reducer";
import FoodsReducer from "./ducks/foods/reducer";
import UsersReducer from "./ducks/users/reducer";

const rootReducer = combineReducers({
  router: createRouterReducer(browserHistory),
  tips: TipsReducer,
  foods: FoodsReducer,
  users: UsersReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;