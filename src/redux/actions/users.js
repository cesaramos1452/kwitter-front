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
    // console.log({ result });
    dispatch({ type: GET_USER, payload });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    const payload = await api.updateUser(user);
    dispatch({ type: UPDATE_USER, payload });
  } catch (err) {
    console.log(err);
  }
};

export const getUserList = () => async (dispatch, getState) => {
  try {
    const payload = await api.getUserList();
    dispatch({ type: GET_USER_LIST, payload });
  } catch (err) {
    console.log(err);
  }
};

export const createUser = (user) => async (dispatch, getState) => {
  try {
    console.log(user);
    const payload = await api.createUser(user);
    dispatch({ type: CREATE_NEW_USER, payload });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (username) => async (dispatch, getState) => {
  try {
    console.log(username);
    const payload = await api.deleteUser(username);
    dispatch({ type: DELETE_USER, payload });
  } catch (err) {
    console.log(err);
  }
};

export const getUserPicture = (username) => async (dispatch, getState) => {
  try {
    const payload = await api.getUserPicture(username);
    dispatch({ type: GET_USER_PICTURE, payload });
  } catch (err) {
    console.log(err);
  }
};

export const putUserPicture = (user) => async (dispatch, getState) => {
  try {
    const payload = await api.putUserPicture(user);
    dispatch({ type: PUT_USER_PICTURE, payload });
  } catch (err) {
    console.log(err);
  }
};
