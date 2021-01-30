import { all, fork } from "redux-saga/effects";

import askSaga from "./ask";
import userSage from "./user";
// function 뒤에 별이 붙는다?
// 저걸 generator 라고 함

// rootSaga 만들고 거기에 우리가 만들고 싶은 비동기 액션을하나씩 만든다.

// while true 대신 takeEvery
// r근ㄷ 그러면 따닥 잘못 무르면 두번 업로드 된다. 마지막것만 업로드할 수 있게 해줌
// 그러 때 takeLatest
// 첫번째꺼만 하려면 takeLeading? 그거
// 근데 이런 것들은 서버쪽에서 검사를 한 번 해줘야함 같은 데이터가 연달아 요청된 건 아닌가
// 프론트에서만 유효한 거기 떄문에 서버에 요청은 두 번 들어가게 되고 저장도 두번 된다.
// res만 한 번 오는 것임.
// throttle, 2000 이런건 2초 동안 한 번만 보내는 것임 설마 게시글을 2초동안 여러본
// 보낼리 없다고 가정.
//   yield all([fork(watchLogin), fork(watchLogout), fork(watchSendAsk)]);
// 그냥 엥간하면 서버에서 검증하셈
// 디바운싱 공부하긔...

export default function* rootSage() {
  yield all([fork(askSaga), fork(userSage)]);
}
