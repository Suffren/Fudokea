import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase'
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  userSuccess,
  userFailure,
} from "./UsersReducer";
import { reduxSagaFirebase } from "../../firebase.config";
const authProvider = new firebase.auth.GoogleAuthProvider()

function* loginSaga(action) {
  const { email, password } = action.payload;
    
  try {
    const data = yield call(reduxSagaFirebase.auth.createUserWithEmailAndPassword, email, password)
    
    yield put(loginSuccess(data))
  }
  catch(error) {
    yield put(loginFailure(error))
  }
}

function* logoutSaga() {
  try {
    const data = yield call(reduxSagaFirebase.auth.signOut)
    console.log('out', data)
    
    yield put(userSuccess(data))
  }
  catch(error) {
    yield put(userFailure(error))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(login.type, loginSaga),
    takeLatest(logout.type, logoutSaga),
  ])
}