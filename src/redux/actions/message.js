import api from "../../utils/api";

export const GET_LIST_MESSAGES = "GET_LIST_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const GET_MESSAGE = "GET_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const getMessagesList = (number) => async (dispatch, getState) => {
  try {
    const payload = await api.getMessages(number);
    dispatch({ type: GET_LIST_MESSAGES, payload });
  } catch (err) {}
};

export const createMessage = (text) => async (dispatch, getState) => {
  try {
    const payload = await api.createMessage(text);
    dispatch({ type: CREATE_MESSAGE, payload });
  } catch (err) {}
};

export const deleteMessage = (messageId) => async (dispatch, getState) => {
  try {
    const payload = await api.deleteMessage(messageId);
    dispatch({ type: CREATE_MESSAGE, payload });
  } catch (err) {}
};
