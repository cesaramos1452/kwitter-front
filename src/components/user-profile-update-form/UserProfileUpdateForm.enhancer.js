import { connect } from "react-redux";
import { updateUser, deleteUser } from "../../redux/actions/users";
import { logout } from "../../redux/actions/auth";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  users: state.users,
});

const mapDispatchToProps = {
  updateUser,
  deleteUser,
  logout,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
