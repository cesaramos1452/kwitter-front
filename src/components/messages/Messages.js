import React, { useEffect, useState } from "react";
import "./Messages.css";

import { Avatar, Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";

export const Messages = (props) => {
  useEffect(() => {
    props.getMessagesList();
  }, [props.likes.length]);

  const removeLikeHandler = (messageId) => {
    let removedLike = props.likes.filter((like) => {
      if (like !== null) return like.messageId === messageId;
    });
    props.removeLike(removedLike[0].id);
  };

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
          props.messages.map((message, index) => {
            if (index < 100)
              return (
                <Box border pad="medium" elevation="medium" className="message">
                  <Avatar
                    className="AvatarImg"
                    src={
                      `https://kwitter-api.herokuapp.com/users/${message.username}/picture` ||
                      "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
                    }
                  />
                  <div>{message.username}</div>
                  <div>
                    {message.text}
                    <div>
                      Likes {message.likes.length}
                      {message.likes.every((likedObj) =>
                        props.likes.every((likes) => {
                          if (likes !== null) return likedObj.id !== likes.id;
                        })
                      ) ? (
                        <button
                          onClick={() =>
                            props.addLike({ messageId: message.id })
                          }
                        >
                          Pop this CandyGram
                        </button>
                      ) : (
                        <button onClick={() => removeLikeHandler(message.id)}>
                          Drop this CandyGram
                        </button>
                      )}
                    </div>
                  </div>
                  {/* {message.text} */}
                </Box>
              );
          })}
        <textarea rows="4" cols="20" />
      </Box>
    </Grommet>
  );
};

export default Messages;
