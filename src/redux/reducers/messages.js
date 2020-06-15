// TODO: implement

import { GET_LIST_MESSAGES, CREATE_MESSAGE, DELETE_MESSAGE } from "../actions";
import { message } from "antd";

const INITIAL_STATE = {
  messages: [],
  userMessages: [],
};

export const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_MESSAGES: {
      const { messages } = action.payload;
      console.log(messages);
      return {
        ...state,
        messages,
      };
    }
    case CREATE_MESSAGE: {
      const { message } = action.payload;
      return {
        ...state,
        messages: [...state.messages, message],
        userMessages: message,
      };
    }
    case DELETE_MESSAGE:
      const { messageId } = action.payload;
      return {
        ...state,
        messages: state.messages.messages.filter(
          (message) => message.id !== messageId
        ),
      };
    default:
      return state;
  }
};
