import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import ask from "./ask";

// ssr 때문에 HYDRATE 추가하려고 index 추가한 것임
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  user,
  ask,
});

export default rootReducer;
