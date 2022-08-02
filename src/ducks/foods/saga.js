import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  addFood,
} from "./reducer";
import { push } from "@lagunovsky/redux-react-router";
import { reduxSagaFirebase } from "../../firebase.config";

function* addFoodSaga(action) {
  const food = {
    ...action.payload,
  };

  try {
    const data = yield call(reduxSagaFirebase.database.create, "foods", food);
    yield put(push("/"));
  } catch (error) {
    throw new Error('add foods: error')
  }
}

export default function* tipsSaga() {
  yield all([
    takeEvery(addFood.type, addFoodSaga),
  ]);
}
