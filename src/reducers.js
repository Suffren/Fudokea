import { combineReducers  } from 'redux';
import TipsReducer from "./ducks/TipsReducer";
import FoodsReducer from "./ducks/FoodsReducer";
import UsersReducer from "./ducks/users/UsersReducer";

const rootReducer = combineReducers({
    tips: TipsReducer,
    foods: FoodsReducer,
    users: UsersReducer,
});
export default rootReducer;