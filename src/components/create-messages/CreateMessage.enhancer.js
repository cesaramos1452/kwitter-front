import { connect } from "react-redux";
import { createMessage } from "../../redux/actions/message"; 

const mapStateToProps = (state) => ({
    data: state.data
  });
  
  const mapDispatchToProps = {
    createMessage
  };
  
  export const enhancer = connect(mapStateToProps, mapDispatchToProps);