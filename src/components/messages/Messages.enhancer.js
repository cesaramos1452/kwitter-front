import { connect } from "react-redux";
import { getMessagesList } from "../../redux/actions/message"; //

const mapStateToProps = (state) => ({
  messages: state.messages
});

const mapDispatchToProps = {
  getMessagesList,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
