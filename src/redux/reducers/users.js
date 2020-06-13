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
  users: [],
  deletedUser: "",
  isAuthenticated: false,
  username: "",
  displayName: "",
  about: "",
  createdAt: "",
  updatedAt: "",
  pictureLocation: null,
  googleId: null,
  displayPhoto: false,
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  console.log("this is the action", { action });
  switch (action.type) {
    case GET_USER: {
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
        ...state,
        username,
        displayName,
        about,
        createdAt,
        updatedAt,
        pictureLocation,
        googleId,
      };
    }
    case UPDATE_USER: {
      const { displayName, about, updatedAt } = action.payload.user;

      return {
        ...state,
        updatedAt,
        about,
        displayName,
      };
    }
    case GET_USER_LIST: {
      const { users } = action.payload; //TODO
      return {
        ...state,
        users,
      };
    }
    case CREATE_NEW_USER: {
      return { ...state };
    }
    case DELETE_USER: {
      const { deletedUser } = action.payload;
      return { ...state, deletedUser };
    }
    case GET_USER_PICTURE: {
      console.log(action.payload);
      return { ...state, displayPhoto: action.payload };
    }
    case PUT_USER_PICTURE: {
      // const { pictureLocation } = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
