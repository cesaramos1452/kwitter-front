// TODO: implement
import {
  GET_USER_LIST,
  CREATE_NEW_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_USER_PICTURE,
  PUT_USER_PICTURE,
} from "../actions";

const INITIAL_STATE = {
  userList: [],
  isAuthenticated: false,
  username: "",
  displayName: "",
  about: "",
  createdAt: "",
  updatedAt: "",
  pictureLocation: null,
  googleId: null,
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  console.log("this is the action", { action });
  switch (action.type) {
    case GET_USER:
      const {
        username,
        displayName,
        about,
        createdAt,
        updatedAt,
        pictureLocation,
        googleId,
      } = action.payload.user;
      return {
        ...INITIAL_STATE,
        username,
        displayName,
        about,
        createdAt,
        updatedAt,
        pictureLocation,
        googleId,
      };
    case UPDATE_USER:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
