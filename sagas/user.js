import axios from 'axios';
import { func } from 'prop-types';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  TWITTER_LOGIN_FAILURE,
  TWITTER_LOGIN_REQUEST,
  TWITTER_LOGIN_SUCCESS,
} from '../reducers/user';

// LOAD MY INFO
function loadMyInfoAPI() {
  return axios.get('/user');
}

function* loadMyInfo(action) {
  try {
    const result = yield call(loadMyInfoAPI, action.data);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

// LOGIN
function loginAPI(data) {
  return axios.post('/user/login', data);
}

// 프론트 요청 axios에서 옵션으로 withCredentials: true를 해주어야 합니

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
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
function logoutAPI() {
  return axios.post('/user/logout');
}

function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
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
  return axios.post('/user', data);
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

// Twitter Login
function twitterLoginAPI() {
  return axios.get('/auth/twitter');
}

function* twitterLogin(action) {
  try {
    const result = yield call(twitterLoginAPI);
    console.log(result);
    yield put({
      type: TWITTER_LOGIN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: TWITTER_LOGIN_FAILURE,
      data: err.response.data,
    });
  }
}

// Google Login
function googleLoginAPI() {
  return axios.get('/auth/google');
}

function* googleLogin(action) {
  try {
    const result = yield call(googleLoginAPI);
    console.log(result);
    yield put({
      type: GOOGLE_LOGIN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: GOOGLE_LOGIN_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
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

function* watchTwitterLogin() {
  yield takeLatest(TWITTER_LOGIN_REQUEST, twitterLogin);
}

function* watchGoogleLogin() {
  yield takeLatest(GOOGLE_LOGIN_REQUEST, googleLogin);
}

export default function* userSaga() {
  yield all([
    fork(watchLoadMyInfo),
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignup),
    fork(watchTwitterLogin),
    fork(watchGoogleLogin),
  ]);
}
