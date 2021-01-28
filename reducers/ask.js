// 현재 더미데이터
export const initialState = {
  mainAsks: [
    {
      id: 1,
      target_user: {
        id: 1,
        username: "",
      },
      content: "배고파",
      answer: "",
    },
  ],
  isAnswered: false,
  sentAsk: false,
};

// Action
// Ask 보내기
const SEND_ASK = "SEND_ASK";
export const sendAsk = {
  type: SEND_ASK,
};

// DummyAsk
const dummyAsk = {
  id: 2,
  target_user: {
    id: 1,
    username: "hye444sech",
  },
  content: "님 배고프세요?",
  answer: "",
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ASK:
      return {
        ...state,
        mainAsks: [dummyAsk, ...state.mainAsks],
        sentAsk: true,
      };
    default:
      return state;
  }
};

export default reducer;
