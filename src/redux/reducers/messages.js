// TODO: implement

import { GET_LIST_MESSAGES } from "../actions";

const INITIAL_STATE = {
  messages: [],
};

export const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_MESSAGES:
      const { messages } = action.payload;
      return {
        ...state,
        messages,
      };
    default:
      return state;
  }
};
