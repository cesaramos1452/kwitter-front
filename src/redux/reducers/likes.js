import { ADD_LIKE, REMOVE_LIKE } from "../actions";

const INITIAL_STATE = {
  likes: [],
};

export const likesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIKE: {
      const { like } = action.payload;
      if (like)
        return {
          ...state,
          likes: [...state.likes, like],
        };
    }
    case REMOVE_LIKE: {
      const { id } = action.payload;
      if (id)
        return {
          ...state,
          likes: state.likes.filter((like) => like.id !== id),
        };
    }
    default:
      return state;
  }
};
