import usersSaga from "./ducks/users/saga";
import tipsSaga from "./ducks/tips/saga";
import foodsSaga from "./ducks/foods/saga";
import { fork, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(usersSaga), fork(tipsSaga), fork(foodsSaga)]);
}
