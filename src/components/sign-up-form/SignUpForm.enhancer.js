import { connect } from "react-redux";
import { signup } from "../../redux/actions/users";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  username: state.users.username,
  displayName: state.users.displayName,
  password: state.users.password,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  signup,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
