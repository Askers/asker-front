// 현재 더미데이터
export const initialState = {
  asks: [
    {
      id: 1,
      target_user: {
        id: 1,
        username: "hyesech",
      },
      content: "님 배고프신가요?",
      images: [
        {
          src: "https://www.fjeidk.com",
        },
        {
          src: "https://www.343fff.com",
        },
        {
          src: "https://www.3434234sdf.com",
        },
      ],
      answer: "",
      imagePath: [],
      isAnswered: false,
    },
  ],
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
    username: "hyesech",
  },
  content: "님 배고프세요?? 배고프시냐구요!??",
  images: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ASK:
      return {
        ...state,
        asks: [dummyAsk, ...state.asks],
      };
    default:
      return state;
  }
};

// 여기서 더미데이터 작동 안돼서 약간 피곤해졌다... 내일 해...

export default reducer;
