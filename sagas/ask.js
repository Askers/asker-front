import axios from "axios";
import { delay, call, put, takeLatest, all, fork } from "redux-saga/effects";
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
} from "../reducers/ask";

// ADD ASK
function addAskAPI(data) {
  return axios.post("/api/ask", data);
}

function* addAsk(action) {
  try {
    const result = yield call(addAskAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_ASK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_ASK_FAILURE,
      data: err.response.data,
    });
  }
}

// Add Answer
function addAnswerAPI(data) {
  return axios.post("/api/answer", data);
}

function* addAnswer(action) {
  try {
    const result = yield call(addAnswerAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_ANSWER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_ANSWER_FAILURE,
      data: err.response.data,
    });
  }
}

// REMOVE ANSWER
function removeAnswerAPI(data) {
  return axios.post("/api/remove/id", data);
}

function* removeAnswer(action) {
  try {
    const result = yield call(removeAnswerAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_ANSWER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_ANSWER_FAILURE,
      data: err.response.data,
    });
  }
}

// WATCHER
function* watchAddAsk() {
  yield takeLatest(ADD_ASK_REQUEST, addAsk);
}

function* watchAddAnswer() {
  yield takeLatest(ADD_ANSWER_REQUEST, addAnswer);
}

function* watchRemoveAnswer() {
  yield takeLatest(REMOVE_ANSWER_REQUEST, removeAnswer);
}

export default function* askSaga() {
  yield all([fork(watchAddAsk), fork(watchAddAnswer), fork(watchRemoveAnswer)]);
}
