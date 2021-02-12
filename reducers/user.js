// Immer
import produce from 'immer';

// Init
export const initialState = {
  isLoadingMyInfo: false,
  isLoadedMyInfo: false,
  loadMyInfoError: null,

  user: null,
};

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

// Immer 적용 Reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    // 기존의 switch문
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.isLoadingMyInfo = true;
        draft.loadMyInfoError = null;
        draft.isLoadedMyInfo = false;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.isLoadingMyInfo = false;
        draft.isLoadedMyInfo = true;
        draft.isLoggedIn = true;
        draft.me = action.data;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.isLoadingMyInfo = false;
        draft.loadMyInfoError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
