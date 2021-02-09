import axios from 'axios';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  ADD_ASK_REQUEST,
  ADD_ASK_SUCCESS,
  ADD_ASK_FAILURE,
  ADD_ANSWER_REQUEST,
  ADD_ANSWER_SUCCESS,
  ADD_ANSWER_FAILURE,
  REMOVE_ANSWER_REQUEST,
  REMOVE_ANSWER_SUCCESS,
  REMOVE_ANSWER_FAILURE,
  LOAD_ASKS_REQUEST,
  LOAD_ASKS_FAILURE,
  LOAD_ASKS_SUCCESS,
} from '../reducers/ask';

// ADD ASK, POST ASK
function addAskAPI(data) {
  return axios.post('/ask', data);
}

function* addAsk(action) {
  try {
    const result = yield call(addAskAPI, action.data);
    yield put({
      type: ADD_ASK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_ASK_FAILURE,
      error: err.name,
    });
  }
}

// LOAD ASK, GET ASKS
function loadAsksAPI() {
  return axios.get('/asks');
}

function* loadAsks() {
  try {
    const result = yield call(loadAsksAPI);
    yield put({
      type: LOAD_ASKS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ASKS_FAILURE,
      error: err.name,
    });
  }
}

// Add Answer
function addAnswerAPI(data) {
  return axios.post('/answer', data);
}

function* addAnswer(action) {
  try {
    const result = yield call(addAnswerAPI, action.data);
    yield put({
      type: ADD_ANSWER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_ANSWER_FAILURE,
      error: err.name,
    });
  }
}

// REMOVE ANSWER
function removeAnswerAPI(data) {
  return axios.post('/api/remove/id', data);
}

function* removeAnswer(action) {
  try {
    const result = yield call(removeAnswerAPI, action.data);
    yield put({
      type: REMOVE_ANSWER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_ANSWER_FAILURE,
      error: err.name,
    });
  }
}

// WATCHER
function* watchAddAsk() {
  yield takeLatest(ADD_ASK_REQUEST, addAsk);
}

function* watchLoadAsks() {
  yield takeLatest(LOAD_ASKS_REQUEST, loadAsks);
}

function* watchAddAnswer() {
  yield takeLatest(ADD_ANSWER_REQUEST, addAnswer);
}

function* watchRemoveAnswer() {
  yield takeLatest(REMOVE_ANSWER_REQUEST, removeAnswer);
}

export default function* askSaga() {
  yield all([
    fork(watchAddAsk),
    fork(watchLoadAsks),
    fork(watchAddAnswer),
    fork(watchRemoveAnswer),
  ]);
}
