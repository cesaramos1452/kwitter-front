import { connect } from "react-redux";
import {
  getUser,
  getUserPicture,
  putUserPicture,
} from "../../redux/actions/users";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  users: state.users,
});

const mapDispatchToProps = {
  getUser,
  putUserPicture,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
