import usersSaga from "./ducks/users/saga";
import tipsSaga from "./ducks/Tips/saga";
import { fork, put, takeEvery, all, takeLatest } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([fork(usersSaga), fork(tipsSaga)]);
  // code after all-effect
}
