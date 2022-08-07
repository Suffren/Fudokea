import React from "react";

import { call, put, takeEvery, all } from "redux-saga/effects";
import {onAuthStateChanged} from "../../utils/auth";
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
  try {
    const user = yield call(onAuthStateChanged);
    const food = {
      ...action.payload,
      user_id: user.uid,
      create_date: new Date().toUTCString()
    };

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
