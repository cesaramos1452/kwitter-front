import React from "react";
import "./Messages.css";

import { Avatar, Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";

const Messages = (props) => {
  return (
    <Grommet theme={grommet}>
      <Box border className="messagesList">
        {props.messsages !== [] &&
          props.messages.map((message) => (
            <li className="message">
              <Avatar
                className="AvatarImg"
                src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
              />
              {message.username}
              {message.text}
            </li>
          ))}
        <textarea rows="4" cols="20" />
      </Box>
    </Grommet>
  );
};

export default Messages;
