import api from "../../utils/api";

export const GET_LIST_MESSAGES = "GET_LIST_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const GET_MESSAGE = "GET_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const getMessages = () => async (dispatch, getState) => {
  try {
    const payload = await api.getMessages();
    dispatch({ type: GET_LIST_MESSAGES, payload });
  } catch (err) {
    console.log(err);
  }
};
