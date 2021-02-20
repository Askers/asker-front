import axios from 'axios';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  LOAD_ASKS_REQUEST,
  LOAD_ASKS_FAILURE,
  LOAD_ASKS_SUCCESS,
} from '../reducers/asks';

// 특정 유저가 받은 질문 다 가져오기
function loadAsksAPI(data) {
  console.log('--------');
  console.log(data);
  console.log('--------');
  return axios.get(`/asks/${data}`);
}

function* loadAsks(action) {
  try {
    const result = yield call(loadAsksAPI, action.data);
    yield put({
      type: LOAD_ASKS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ASKS_FAILURE,
      error: err.message,
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
