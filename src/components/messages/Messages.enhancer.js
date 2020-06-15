import { connect } from "react-redux";
import { getMessagesList, deleteMessage } from "../../redux/actions/message"; //
import { getUser, getUserPicture } from "../../redux/actions/users"; //
import { addLike, removeLike } from "../../redux/actions/index"; //

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  userMessages: state.messages.userMessages,
  likes: state.likes.likes,
});

const mapDispatchToProps = {
  getMessagesList,
  getUser,
  getUserPicture,
  addLike,
  removeLike,
  deleteMessage,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
