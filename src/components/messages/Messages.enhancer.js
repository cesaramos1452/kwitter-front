import { connect } from "react-redux";
import { getMessages } from "../../redux/actions/message"; //

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  getMessages,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
