import produce from 'immer';

// Init
export const initialState = {
  isLoggingIn: false, // 로그인 시도 중
  isLoggedIn: false,
  loginError: null,

  isLoggingOut: false, // 로그아웃 시도중
  logoutError: null,

  isSigningUp: false, // 회원가입 시도중
  isSignedUp: false,
  signupError: null,

  user: null,
  signupData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const TWITTER_LOGIN_REQUEST = 'TWITTER_LOGIN_REQUEST';
export const TWITTER_LOGIN_SUCCESS = 'TWITTER_LOGIN_SUCCESS';
export const TWITTER_LOGIN_FAILURE = 'TWITTER_LOGIN_FAILURE';

export const GOOGLE_LOGIN_REQUEST = 'GOOGLE_LOGIN_REQUEST';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE';

// Actions
export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

export const signupRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

export const twitterLoginRequestAction = () => ({
  type: TWITTER_LOGIN_REQUEST,
});

export const googleLoginRequestAction = () => ({
  type: GOOGLE_LOGIN_REQUEST,
});

// Immer 적용 Reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    // 기존의 switch문
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.loginError = null;
        draft.isLoggedIn = false;
        break;

      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.user = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.isLoggingIn = false;
        draft.loginError = action.error;
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
        draft.logoutError = action.error;
        draft.user = null;
        break;

      case SIGN_UP_REQUEST:
        draft.isSigningUp = true;
        draft.signupError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        draft.signupError = null;
        break;

      case SIGN_UP_FAILURE:
        draft.isSigningUp = false;
        draft.isSignedUp = false;
        draft.user = null;
        draft.signupError = action.error;
        break;

      case TWITTER_LOGIN_REQUEST:
        draft.isSigningUp = true;
        draft.signupError = null;
        break;

      case TWITTER_LOGIN_SUCCESS:
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        draft.signupError = null;
        draft.user = action.data;
        break;

      case TWITTER_LOGIN_FAILURE:
        draft.isSigningUp = false;
        draft.isSignedUp = false;
        draft.user = null;
        draft.signupError = action.error;
        break;

      case GOOGLE_LOGIN_REQUEST:
        draft.isSigningUp = true;
        draft.signupError = null;
        break;

      case GOOGLE_LOGIN_SUCCESS:
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        draft.signupError = null;
        draft.user = action.data;
        break;

      case GOOGLE_LOGIN_FAILURE:
        draft.isSigningUp = false;
        draft.isSignedUp = false;
        draft.user = null;
        draft.signupError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
