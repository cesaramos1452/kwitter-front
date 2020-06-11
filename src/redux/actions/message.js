import api from "../../utils/api";

export const GET_LIST_MESSAGES = "GET_LIST_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const GET_MESSAGE = "GET_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

<<<<<<< HEAD
export const getMessagesList = () => async (dispatch) => {
  try {
    const payload = await api.getMessagesList();
    dispatch({ type: GET_LIST_MESSAGES,  payload });
=======
export const getMessagesList = () => async (dispatch, getState) => {
  try {
    const payload = await api.getMessages();
    console.log(payload);
    dispatch({ type: GET_LIST_MESSAGES, payload });
>>>>>>> 8ce199786624b78b25d9ed5b45eece76221eb818
  } catch (err) {
    console.log(err);
  }
};
