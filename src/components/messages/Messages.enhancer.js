import { connect } from "react-redux";
import { getMessagesList } from "../../redux/actions/message"; //
import { getUser, getUserPicture } from "../../redux/actions/users"; //
import { addLike, removeLike } from "../../redux/actions/index"; //

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  likes: state.likes.likes,
});

const mapDispatchToProps = {
  getMessagesList,
  getUser,
  getUserPicture,
  addLike,
  removeLike,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
