import { combineReducers  } from 'redux';
import { createRouterReducer } from '@lagunovsky/redux-react-router'
import { browserHistory } from './history'
import TipsReducer from "./ducks/TipsReducer";
import FoodsReducer from "./ducks/FoodsReducer";
import UsersReducer from "./ducks/users/UsersReducer";

const rootReducer = combineReducers({
    router: createRouterReducer(browserHistory),
    tips: TipsReducer,
    foods: FoodsReducer,
    users: UsersReducer,
});
export default rootReducer;