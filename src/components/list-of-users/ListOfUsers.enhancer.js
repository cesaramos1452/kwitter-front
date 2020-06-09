import { connect } from "react-redux";
import { getUserList } from "../../redux/actions/users";

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = {
  getUserList,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
