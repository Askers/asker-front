// Immer
import produce from 'immer';

// InitialState
const initialState = {
  ask: null, // 딱히 필요한지 모르겠음
  loadAskLoading: false,
  loadAskDone: false,
  loadAskError: null,

  addAskLoading: false,
  addAskDone: false,
  addAskError: null,
};

export const LOAD_ASK_REQUEST = 'LOAD_ASK_REQUEST';
export const LOAD_ASK_SUCCESS = 'LOAD_ASK_SUCCESS';
export const LOAD_ASK_FAILURE = 'LOAD_ASK_FAILURE';

export const ADD_ASK_REQUEST = 'ADD_ASK_REQUEST';
export const ADD_ASK_SUCCESS = 'ADD_ASK_SUCCESS';
export const ADD_ASK_FAILURE = 'ADD_ASK_FAILURE';

// Actions
export const addAskRequestAction = (data) => ({
  type: ADD_ASK_REQUEST,
  data,
});

// Immer 적용한 Reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ASK_REQUEST:
        draft.loadAskLoading = true;
        draft.loadAskDone = false;
        draft.loadAskError = null;
        break;

      case LOAD_ASK_SUCCESS:
        draft.loadAskLoading = false;
        draft.loadAskDone = true;
        draft.ask = action.data;
        break;

      case LOAD_ASK_FAILURE:
        draft.loadAnswerLoading = false;
        draft.loadAnswerError = action.error;
        break;

      case ADD_ASK_REQUEST:
        draft.addAskLoading = true;
        draft.addAskDone = false;
        draft.addAskError = null;
        break;

      case ADD_ASK_SUCCESS:
        draft.addAskLoading = false;
        draft.addAskDone = true;
        break;

      case ADD_ASK_FAILURE:
        draft.addAskLoading = false;
        draft.addAskError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
