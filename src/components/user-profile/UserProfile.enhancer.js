import { connect } from "react-redux";
import { getUser } from "../../redux/actions/users";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  users: state.users,
});

const mapDispatchToProps = {
  getUser,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
