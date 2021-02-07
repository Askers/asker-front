// Immer
import produce from 'immer';

// InitialState
const initialState = {
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

      case ADD_ANSWER_REQUEST:
        draft.addAnswerLoading = true;
        draft.addAnswerDone = false;
        draft.addAnswerError = null;
        break;

      case ADD_ANSWER_SUCCESS:
        draft.addAnswerLoading = false;
        draft.addAnswerDone = true;
        break;

      case ADD_ANSWER_FAILURE:
        draft.addAnswerLoading = false;
        draft.addAnswerError = action.error;
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
        draft.removeAnswerError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
