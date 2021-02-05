import axios from "axios";
import { delay, call, put, takeLatest, all, fork } from "redux-saga/effects";
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../reducers/user";

// LOGIN
function loginAPI() {
  return axios.post("/api/login");
}

function* login() {
  try {
    const result = yield call(loginAPI);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      data: err.response.data,
    });
  }
}

// LOGOUT
function logoutAPI(data) {
  return axios.post("/logout", data);
}

function* logout(action) {
  try {
    const result = yield call(logoutAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      data: err.response.data,
    });
  }
}

// Sign Up
function signupAPI(data) {
  return axios.post("http://localhost:3065/user", data);
}

function* signup(action) {
  try {
    const result = yield call(signupAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)], fork(watchSignup));
}
