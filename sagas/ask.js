import axios from "axios";
import { delay, put, takeLatest, all, fork } from "redux-saga/effects";

// SEND ASK
// function sendAskApi(data) {
//   return axios.post("/api/ask", data);
// }

function* sendAsk(action) {
  try {
    // const result = yield call(sendAskApi, action.data);
    yield delay(1000);
    yield put({
      type: "SEND_ASK_SUCESS",
      //   data: result.data,
    });
  } catch (err) {
    yield put({
      type: "SEND_ASK_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchSendAsk() {
  yield takeLatest("SEND_ASK_REQUEST", sendAsk);
}

export default function* askSaga() {
  all([fork(watchSendAsk)]);
}
