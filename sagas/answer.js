import axios from 'axios';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  LOAD_ANSWER_SUCCESS,
  LOAD_ANSWER_FAILURE,
  LOAD_ANSWER_REQUEST,
  ADD_ANSWER_REQUEST,
  ADD_ANSWER_SUCCESS,
  ADD_ANSWER_FAILURE,
  REMOVE_ANSWER_REQUEST,
  REMOVE_ANSWER_SUCCESS,
  REMOVE_ANSWER_FAILURE,
} from '../reducers/answer';

// 특정 유저의 answer 하나
function loadAnswerAPI(data) {
  return axios.get(`/answers/answer/${data}`);
}

function* loadAnswer() {
  try {
    const result = yield call(loadAnswerAPI);
    yield put({
      type: LOAD_ANSWER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ANSWER_FAILURE,
      error: err.name,
    });
  }
}

// Add Answer
function addAnswerAPI(data) {
  return axios.post(`/answers/${data.askId}`, data);
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
      error: err.message,
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
function* watchLoadAnswer() {
  yield takeLatest(LOAD_ANSWER_REQUEST, loadAnswer);
}

function* watchAddAnswer() {
  yield takeLatest(ADD_ANSWER_REQUEST, addAnswer);
}

function* watchRemoveAnswer() {
  yield takeLatest(REMOVE_ANSWER_REQUEST, removeAnswer);
}

export default function* answerSaga() {
  yield all([
    fork(watchLoadAnswer),
    fork(watchAddAnswer),
    fork(watchRemoveAnswer),
  ]);
}
