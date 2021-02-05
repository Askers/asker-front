// Immer
import produce from "immer";

// Init
export const initialState = {
  isLoggingIn: false, // 로긘 시도 중
  isLoggedIn: false,
  isLoginError: null,

  isLoggingOut: false, // 로그아웃 시도중
  isLogoutError: null,

  isSigningUp: false, // 회원가입 시도중
  isSignedUp: false,
  isSignupError: null,

  user: null,
  signupData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

// Actions
export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data: data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOG_IN_SUCCESS,
  };
};

export const signupRequestAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data: data,
  };
};

// Immer 적용 Reducer
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    // 기존의 switch문
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.user = action.data;
        break;

      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.user = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.user = action.data;
        draft.isLoginError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.isLoggingOut = true;
        draft.isLoggedIn = false;
        draft.user = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.isLoggingOut = false;
        draft.isLoggedIn = false;
        draft.user = null;
        break;

      case LOG_OUT_FAILURE:
        draft.isLoggingOut = false;
        draft.isLoggedIn = true;
        draft.isLogoutError = action.error;
        draft.user = null;
        break;

      case SIGN_UP_REQUEST:
        draft.isSigningUp = true;
        draft.isSignupError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        draft.isSignupError = null;
        break;

      case SIGN_UP_FAILURE:
        draft.isSigningUp = false;
        draft.isSignedUp = false;
        draft.isSignupError = action.error;
        break;

      default:
        break;
    }
  });
};

export default reducer;
