import api from "../../utils/api";

export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const addLike = (messageId) => async (dispatch, getState) => {
  try {
    const payload = await api.addLike(messageId);
    console.log(payload);
    dispatch({ type: ADD_LIKE, payload });
  } catch (err) {
    console.log(err);
  }
};

export const removeLike = (messageId) => async (dispatch, getState) => {
  try {
    const payload = await api.removeLike(messageId);
    console.log(payload);
    dispatch({ type: REMOVE_LIKE, payload });
  } catch (err) {
    console.log(err);
  }
};
