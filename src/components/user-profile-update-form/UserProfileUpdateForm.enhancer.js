import { connect } from "react-redux";
import { updateUser } from "../../redux/actions/users";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  users: state.users,
});

const mapDispatchToProps = {
  updateUser,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
