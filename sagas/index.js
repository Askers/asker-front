import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import askSaga from './ask';
import userSage from './user';

axios.defaults.baseURL = 'http://localhost:8000';

export default function* rootSage() {
  yield all([fork(askSaga), fork(userSage)]);
}
