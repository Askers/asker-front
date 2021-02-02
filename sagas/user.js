import axios from "axios";
import { delay, call, put, takeLatest, all, fork } from "redux-saga/effects";

// LOGIN
function loginApi() {
  return axios.post("/api/login");
}

function* login() {
  try {
    const result = yield call(loginApi);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

// LOGOUT
function logoutApi(data) {
  return axios.post("/api/logout", data);
}

function* logout(action) {
  try {
    const result = yield call(logoutApi, action.data);
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

// Sign Up
function signupApi(data) {
  return axios.post("http://localhost:3065/user", data);
}

function* signup(action) {
  try {
    const result = yield call(signupApi, action.data);
    console.log(result);
    yield put({
      type: "LOG_OUT_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest("LOG_IN_REQUEST", login);
}

function* watchLogout() {
  yield takeLatest("LOG_OUT_REQUEST", logout);
}

function* watchSignup() {
  yield takeLatest("SIGN_UP_REQUEST", signup);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)], fork(watchSignup));
}
