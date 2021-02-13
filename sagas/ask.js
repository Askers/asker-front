import axios from 'axios';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  ADD_ASK_REQUEST,
  ADD_ASK_SUCCESS,
  ADD_ASK_FAILURE,
  LOAD_ASK_REQUEST,
  LOAD_ASK_SUCCESS,
  LOAD_ASK_FAILURE,
} from '../reducers/ask';

// POST ASK
// 특졍유저에게 질문하기
function addAskAPI(data) {
  return axios.post(`/ask/${data.targetUserId}`, data);
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
function loadAskAPI() {
  return axios.get('/asks');
}

function* loadAsk() {
  try {
    const result = yield call(loadAskAPI);
    yield put({
      type: LOAD_ASK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ASK_FAILURE,
      error: err.name,
    });
  }
}

// WATCHER
function* watchAddAsk() {
  yield takeLatest(ADD_ASK_REQUEST, addAsk);
}

function* watchLoadAsks() {
  yield takeLatest(LOAD_ASK_REQUEST, loadAsk);
}

export default function* askSaga() {
  yield all([fork(watchAddAsk), fork(watchLoadAsks)]);
}
