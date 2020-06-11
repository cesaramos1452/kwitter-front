// TODO: implement

import { GET_LIST_MESSAGES } from "../actions";

const INITIAL_STATE = {
  messages: [],
};

export const messageReducer = (state = INITIAL_STATE, action) => {
  const { messages } = action.payload;

    switch (action.type) {
      case GET_LIST_MESSAGES:return{
          ...state,
          messages
        };
      default:
        return state;
    }
};
