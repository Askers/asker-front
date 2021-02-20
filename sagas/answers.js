import axios from 'axios';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  LOAD_ANSWERS_SUCCESS,
  LOAD_ANSWERS_FAILURE,
  LOAD_ANSWERS_REQUEST,
} from '../reducers/answers';

// 특정 유저의 answer 전부
function loadAnswersAPI(data) {
  return axios.get(`/answers/${data}`);
}

function* loadAnswers(action) {
  try {
    const result = yield call(loadAnswersAPI, action.data);
    yield put({
      type: LOAD_ANSWERS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ANSWERS_FAILURE,
      error: err.name,
    });
  }
}

// WATCHER

function* watchLoadAnswers() {
  yield takeLatest(LOAD_ANSWERS_REQUEST, loadAnswers);
}

export default function* answerSaga() {
  yield all([fork(watchLoadAnswers)]);
}
