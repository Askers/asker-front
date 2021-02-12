import axios from 'axios';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  LOAD_ANSWERS_SUCCESS,
  LOAD_ANSWERS_FAILURE,
  LOAD_ANSWERS_REQUEST,
} from '../reducers/answers';

// LOAD ANSWER, GET ANSWERS
function loadAnswersAPI() {
  return axios.get('/answers');
}

function* loadAnswers() {
  try {
    const result = yield call(loadAnswersAPI);
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
