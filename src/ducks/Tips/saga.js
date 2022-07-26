import { call, put, takeEvery, all } from "redux-saga/effects";
import firebase from "firebase";
import {
  addTip,
  tipSuccess,
  tipFailure,
} from "./reducer";
import { push } from "@lagunovsky/redux-react-router";
import { reduxSagaFirebase } from "../../firebase.config";
const authProvider = new firebase.auth.GoogleAuthProvider();

function* createTipSaga(action) {
  const tip = {
    ...action.payload,
    read: false,
  };

  try {
    const data = yield call(reduxSagaFirebase.database.create, 'tips', tip);
    yield put(tipSuccess({...tip, id: data}));
    yield put(push("/tips"));
  } catch (error) {
    yield put(tipFailure(error));
  }
}

    console.log('tip', {
      ...tip,
      read: false,
    }, action)
    const data = yield call(reduxSagaFirebase.database.create, 'tips', {
      ...tip,
      read: false,
    });

    console.log('sucees tip', tip, data)
    yield put(tipSuccess(data));
    yield put(push("/"));
  } catch (error) {
    console.log('fail tip', tip, error)
    yield put(tipFailure(error));
  }
}

export default function* tipsSaga() {
  yield all([
    takeEvery(addTip.type, createTipSaga),
  ]);
}
