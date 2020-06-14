import { connect } from "react-redux";
import { createMessage } from "../../redux/actions/message"; 

const mapStateToProps = (state) => ({
    messages: state.messages
  });
  
  const mapDispatchToProps = {
    createMessage
  };
  
  export const enhancer = connect(mapStateToProps, mapDispatchToProps);