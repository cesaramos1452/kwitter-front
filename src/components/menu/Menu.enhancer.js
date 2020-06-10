import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.isAuthenticated,
  username: state.auth.username,
});

const mapDispatchToProps = {
  logout,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
