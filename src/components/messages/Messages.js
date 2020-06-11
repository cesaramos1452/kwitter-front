import React, { useEffect } from "react";
import "./NewMessages.css";

const Messages = (props) => {
  return (
    <div>
      this is the newmessages.js
      {props.messsages !== [] &&
        props.messages.map((message) => (
          <>
            <li style={{ listStyle: "none" }}>
              message text{message.text} username {message.username}
            </li>
            {/* <CandyPost /> */}
          </>
        ))}
      <textarea rows="4" cols="20" />
    </div>
  );
};

export default Messages;
