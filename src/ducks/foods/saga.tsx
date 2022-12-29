import { call, put, takeLatest, all } from "redux-saga/effects";
import { onAuthStateChanged } from "../../utils/auth";
import firebase from "firebase/app";
import "firebase/database";

import {
  getFood,
  getFoods,
  addFood,
  foodSuccess,
  foodsSuccess,
  foodFailure,
  foodsFailure,
} from "./reducer";
import { push } from "@lagunovsky/redux-react-router";
import { reduxSagaFirebase } from "../../firebase.config";

function* addFoodSaga(action) {
  try {
    const user = yield call(onAuthStateChanged);
    const food = {
      ...action.payload,
      user_id: user.uid,
      create_date: new Date().getTime(),
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
    const { id } = action.payload;
    const food = yield call(reduxSagaFirebase.database.read, `foods/${id}`);

    yield put(foodSuccess(food));
  } catch (error) {
    yield put(foodFailure(error));
  }
}

function* getFoodsSaga() {
  try {
    //.limitToFirst(5),  .ref('user-posts/' + myUserId)
    const foods = yield call(
      reduxSagaFirebase.database.read,
      firebase
        .database()
        .ref("foods")
        .orderByChild("create_date")
        .startAt(1660932000000)
        .endAt(1661454480000)
    );
    yield put(foodsSuccess(foods));
  } catch (error) {
    yield put(foodFailure(error));
  }
}

export default function* tipsSaga() {
  yield all([
    takeLatest(getFood.type, getFoodSaga),
    takeLatest(addFood.type, addFoodSaga),
    takeLatest(getFoods.type, getFoodsSaga),
  ]);
}
