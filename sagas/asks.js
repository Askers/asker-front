import axios from 'axios';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  LOAD_ASKS_REQUEST,
  LOAD_ASKS_FAILURE,
  LOAD_ASKS_SUCCESS,
} from '../reducers/asks';

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

// WATCHER

function* watchLoadAsks() {
  yield takeLatest(LOAD_ASKS_REQUEST, loadAsks);
}

export default function* asksSaga() {
  yield all([fork(watchLoadAsks)]);
}
