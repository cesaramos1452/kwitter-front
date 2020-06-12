import api from "../../utils/api";

export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const addLike = (messageId) => async (dispatch, getState) => {
  try {
    const payload = await api.addLike(messageId);

    dispatch({ type: ADD_LIKE, payload });
  } catch (err) {}
};

export const removeLike = (messageId) => async (dispatch, getState) => {
  try {
    const payload = await api.removeLike(messageId);

    dispatch({ type: REMOVE_LIKE, payload });
  } catch (err) {}
};
