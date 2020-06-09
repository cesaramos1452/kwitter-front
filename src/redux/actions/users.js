import api from "../../utils/api";

// USER CONSTANTS
export const GET_USER_LIST = "USERS/GET_USER_LIST";
export const CREATE_NEW_USER = "USERS/CREATE_NEW_USER";
export const GET_USER = "USERS/GET_USER";
export const UPDATE_USER = "USERS/UPDATE_USER"; // needs token
export const DELETE_USER = "USERS/DELETE_USER"; //needs token
export const GET_USER_PICTURE = "USERS/GET_USER_PICTURE";
export const PUT_USER_PICTURE = "USERS/PUT_USER_PICTURE"; //needs token

/*
 USER ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const getUser = (userName) => async (dispatch, getState) => {
  try {
    const payload = await api.getUser(userName);
    // ℹ️ℹ️This is how you would debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: GET_USER, payload });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
  }
};
// END AUTH ACTIONS
