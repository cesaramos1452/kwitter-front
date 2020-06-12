import React, { useEffect } from "react";
import "./Messages.css";

import { Avatar, Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";

export const Messages = (props) => {
  console.log({ props });
  const determinePictureFound = (username) => {
    let result = fetch(
      "https://kwitter-api.herokuapp.com/users/" + username + "/picture"
    ).then((response) => {
      console.log(response);
      if (response.ok) {
        return (
          "https://kwitter-api.herokuapp.com/users/" + username + "/picture"
        );
      } else {
        return "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";
      }
    });
    console.log(result);
    return result;
  };

  useEffect(() => {
    props.getMessagesList();
  }, []);

  return (
    <Grommet theme={grommet}>
      <Box
        border
        pad="medium"
        elevation="medium"
        className="messagesList"
        style={{ maxWidth: "710px" }}
      >
        {props.messsages !== [] &&
          props.messages.map((message) => (
            <Box border pad="medium" elevation="medium" className="message">
              <Avatar
                className="AvatarImg"
                src={determinePictureFound(message.username)}
              />
              {message.username}
              {message.text}
            </Box>
          ))}
        <textarea rows="4" cols="20" />
      </Box>
    </Grommet>
  );
};

export default Messages;
