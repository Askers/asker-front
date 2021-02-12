import produce from 'immer';

// InitialState
const initialState = {
  asks: [],

  loadAsksLoading: false,
  loadAsksDone: false,
  loadAsksError: null,
};

export const LOAD_ASKS_REQUEST = 'LOAD_ASKS_REQUEST';
export const LOAD_ASKS_SUCCESS = 'LOAD_ASKS_SUCCESS';
export const LOAD_ASKS_FAILURE = 'LOAD_ASKS_FAILURE';

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
        draft.asks = action.data.concat(draft.asks);
        break;

      case LOAD_ASKS_FAILURE:
        draft.loadAnswersLoading = false;
        draft.loadAnswersError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
