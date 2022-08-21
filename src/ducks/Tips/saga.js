import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  addTip,
  tipSuccess,
  tipFailure,
  getTipsSuccess,
  getTips,
} from "./reducer";
import { push } from "@lagunovsky/redux-react-router";
import { reduxSagaFirebase } from "../../firebase.config";

function* createTipSaga(action) {
  const tip = {
    ...action.payload,
    read: false,
  };

  try {
    const data = yield call(reduxSagaFirebase.database.create, "tips", tip);
    yield put(tipSuccess({ ...tip, id: data }));
    yield put(push("/tips"));
  } catch (error) {
    yield put(tipFailure(error));
  }
}

function* getTipsSaga(action) {
  try {
    const tips = yield call(reduxSagaFirebase.database.read, "tips");

    yield put(getTipsSuccess(tips));
  } catch (error) {
    yield put(tipFailure(error));
  }
}

export default function* tipsSaga() {
  yield all([
    takeLatest(addTip.type, createTipSaga),
    takeLatest(getTips.type, getTipsSaga),
  ]);
}
