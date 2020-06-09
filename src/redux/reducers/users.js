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
  userList = [],
  isAuthenticated: false,
  password: "",
  username: "",
  displayName: "",
  about: "",
  userPicture: "",
  createdAt: "",
  updatedAt: "",
  pictureLoaction: "",
  googleId: ""
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      console.log(action)
      console.log(action.payload)
      const {username, displayName, about, createdAt, updatedAt, pictureLoaction, googleId} = action.payload
      return {
        ...INITIAL_STATE,
        username,
        displayName,
        about,
        createdAt,
        updatedAt,
        pictureLoaction,
        googleId
      };
      default:
        return state;
  }
}
