import React, { useEffect } from "react";
import "./NewMessages.css";

const NewMessages = (props) => {
  console.log({ props });
  useEffect(() => {
    props.getMessagesList();
  });

  return (
    <div>
      this is the newmessages.js
      {/* {props.messsages !== [] &&
        props.messages.map((message) => console.log(message))} */}
      <textarea rows="4" cols="20" />
    </div>
  );
};

export default NewMessages;
