import React, { useEffect } from "react";
import "./Messages.css";

const Messages = (props) => {
  return (
    <div>
      {props.messsages !== [] &&
        props.messages.map((message) => (
          <>
            <li style={{ listStyle: "none" }}>
              message text{message.text} username {message.username}
            </li>
          </>
        ))}
      <textarea rows="4" cols="20" />
    </div>
  );
};

export default Messages;
