import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  getFood,
  getFoods,
  addFood,
  foodSuccess,
  foodFailure,
} from "./reducer";
import { push } from "@lagunovsky/redux-react-router";
import { reduxSagaFirebase } from "../../firebase.config";

function* addFoodSaga(action) {
  const food = {
    ...action.payload,
    userId: "4kZriIZZwrQ2AGOxIWbtfkvFZin2",
  };

  try {
    const data = yield call(reduxSagaFirebase.database.create, "foods", food);

    yield put(foodSuccess({ ...food, id: data }));
    yield put(push("/"));
  } catch (error) {
    yield put(foodFailure(error));
  }
}

function* getFoodSaga(action) {
  try {
    const tips = yield call(reduxSagaFirebase.database.read, "tips");

    yield put(foodSuccess(tips));
  } catch (error) {
    yield put(foodFailure(error));
  }
}

export default function* tipsSaga() {
  yield all([
    takeEvery(getFood.type, getFoodSaga),
    takeEvery(addFood.type, addFoodSaga),
  ]);
}
