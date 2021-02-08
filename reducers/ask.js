// Immer
import produce from 'immer';

// InitialState
const initialState = {
  loadAsksLoading: false,
  loadAsksDone: false,
  loadAsksError: null,

  addAskLoading: false,
  addAskDone: false,
  addAskError: null,

  addAnswerLoading: false,
  addAnswerDone: false,
  addAnswerError: null,

  removeAnswerLoading: false,
  removeAnswerDone: false,
  removeAnswerError: null,

  asks: [],
  answers: [],
};

export const LOAD_ASKS_REQUEST = 'LOAD_ASKS_REQUEST';
export const LOAD_ASKS_SUCCESS = 'LOAD_ASKS_SUCCESS';
export const LOAD_ASKS_FAILURE = 'LOAD_ASKS_FAILURE';

export const ADD_ASK_REQUEST = 'ADD_ASK_REQUEST';
export const ADD_ASK_SUCCESS = 'ADD_ASK_SUCCESS';
export const ADD_ASK_FAILURE = 'ADD_ASK_FAILURE';

export const ADD_ANSWER_REQUEST = 'ADD_ANSWER_REQUEST';
export const ADD_ANSWER_SUCCESS = 'ADD_ANSWER_SUCCESS';
export const ADD_ANSWER_FAILURE = 'ADD_ANSWER_FAILURE';

export const REMOVE_ANSWER_REQUEST = 'REMOVE_ANSWER_REQUEST';
export const REMOVE_ANSWER_SUCCESS = 'REMOVE_ANSWER_SUCCESS';
export const REMOVE_ANSWER_FAILURE = 'REMOVE_ANSWER_FAILURE';

// Actions
export const addAskRequestAction = (data) => ({
  type: ADD_ASK_REQUEST,
  data,
});

export const addAnswerRequestAction = (data) => ({
  type: ADD_ANSWER_REQUEST,
  data,
});

export const removeAnswerRequestAction = () => ({
  type: REMOVE_ANSWER_REQUEST,
});

// Immer 적용한 Reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ASKS_REQUEST:
        draft.loadAsksLoading = true;
        draft.loadAsksDone = false;
        draft.loadAsksError = null;
        break;

      case LOAD_ASKS_SUCCESS:
        draft.loadAsksLoading = false;
        draft.loadAsksDone = true;
        draft.asks = unshift(action.data);
        break;

      case LOAD_ASKS_FAILURE:
        draft.loadAsksLoading = false;
        draft.loadAsksError = action.data;
        break;

      case ADD_ASK_REQUEST:
        draft.addAskLoading = true;
        draft.addAskDone = false;
        draft.addAskError = null;
        break;

      case ADD_ASK_SUCCESS:
        draft.addAskLoading = false;
        draft.addAskDone = true;
        draft.asks = unshift(action.data);
        break;

      case ADD_ASK_FAILURE:
        draft.addAskLoading = false;
        draft.addAskError = action.data;
        break;

      case ADD_ANSWER_REQUEST:
        draft.addAnswerLoading = true;
        draft.addAnswerDone = false;
        draft.addAnswerError = null;
        break;

      case ADD_ANSWER_SUCCESS:
        draft.addAnswerLoading = false;
        draft.addAnswerDone = true;
        draft.answers = unshift(action.data);
        break;

      case ADD_ANSWER_FAILURE:
        draft.addAnswerLoading = false;
        draft.addAnswerError = action.data;
        break;

      case REMOVE_ANSWER_REQUEST:
        draft.removeAnswerLoading = true;
        draft.removeAnswerDone = false;
        draft.removeAnswerError = null;
        break;

      case REMOVE_ANSWER_SUCCESS:
        draft.removeAnswerLoading = false;
        draft.removeAnswerDone = true;
        break;

      case REMOVE_ANSWER_FAILURE:
        draft.removeAnswerLoading = false;
        draft.removeAnswerError = action.data;
        break;

      default:
        break;
    }
  });

export default reducer;
