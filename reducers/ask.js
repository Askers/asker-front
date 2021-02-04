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

export const ADD_ASK_REQUEST = "ADD_ASK_REQUEST";
export const ADD_ASK_SUCCESS = "ADD_ASK_SUCCESS";
export const ADD_ASK_FAILURE = "ADD_ASK_FAILURE";

export const ADD_ANSWER_REQUEST = "ADD_ANSWER_REQUEST";
export const ADD_ANSWER_SUCCESS = "ADD_ANSWER_SUCCESS";
export const ADD_ANSWER_FAILURE = "ADD_ANSWER_FAILURE";

export const REMOVE_ANSWER_REQUEST = "REMOVE_ANSWER_REQUEST";
export const REMOVE_ANSWER_SUCCESS = "REMOVE_ANSWER_SUCCESS";
export const REMOVE_ANSWER_FAILURE = "REMOVE_ANSWER_FAILURE";

// Actions
export const addAskRequestAction = (data) => {
  return {
    type: ADD_ASK_REQUEST,
    data: data,
  };
};

export const addAnswerRequestAction = (data) => {
  return {
    type: ADD_ANSWER_REQUEST,
    data: data,
  };
};

export const removeAnswerRequestAction = () => {
  return {
    type: REMOVE_ANSWER_REQUEST,
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ASK_REQUEST:
      return {
        ...state,
        addAskLoading: true,
        addAskDone: false,
        addAskError: null,
      };

    case ADD_ASK_SUCCESS:
      return {
        ...state,
        addAskLoading: false,
        addAskDone: true,
      };

    case ADD_ASK_FAILURE:
      return {
        ...state,
        addAskLoading: false,
        addAskError: action.error,
      };

    case ADD_ANSWER_REQUEST:
      return {
        ...state,
        addAnswerLoading: true,
        addAnswerDone: false,
        addAnswerError: null,
      };

    case ADD_ANSWER_SUCCESS:
      return {
        ...state,
        addAnswerLoading: false,
        addAnswerDone: true,
      };

    case ADD_ANSWER_FAILURE:
      return {
        ...state,
        addAnswerLoading: false,
        addAnswerError: action.error,
      };

    case REMOVE_ANSWER_REQUEST:
      return {
        ...state,
        removeAnswerLoading: true,
        removeAnswerDone: false,
        removeAnswerError: null,
      };

    case REMOVE_ANSWER_SUCCESS:
      return {
        ...state,
        removeAnswerLoading: false,
        removeAnswerDone: true,
      };

    case REMOVE_ANSWER_FAILURE:
      return {
        ...state,
        removeAnswerLoading: false,
        removeAnswerError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
