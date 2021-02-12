// Immer
import produce from 'immer';

// InitialState
const initialState = {
  answers: [],

  loadAnswersLoading: false,
  loadAnswersDone: false,
  loadAnswersError: null,
};

export const LOAD_ANSWERS_REQUEST = 'LOAD_ANSWERS_REQUEST';
export const LOAD_ANSWERS_SUCCESS = 'LOAD_ANSWERS_SUCCESS';
export const LOAD_ANSWERS_FAILURE = 'LOAD_ANSWERS_FAILURE';

// Immer 적용한 Reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ANSWERS_REQUEST:
        draft.loadAnswersLoading = true;
        draft.loadAnswersDone = false;
        draft.loadAnswersError = null;
        break;

      case LOAD_ANSWERS_SUCCESS:
        draft.loadAnswersLoading = false;
        draft.loadAnswersDone = true;
        draft.answers = action.data.concat(draft.answers);
        break;

      case LOAD_ANSWERS_FAILURE:
        draft.loadAnswersLoading = false;
        draft.loadAnswersError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
