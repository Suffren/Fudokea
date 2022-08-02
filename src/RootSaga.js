import usersSaga from "./ducks/users/saga";
import tipsSaga from "./ducks/tips/saga";
import { fork, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(usersSaga), fork(tipsSaga)]);
}
