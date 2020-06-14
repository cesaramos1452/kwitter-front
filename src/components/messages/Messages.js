import React, { useEffect } from "react";
import "./Messages.css";

import { Avatar, Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { Link } from "react-router-dom";

export const Messages = (props) => {
  useEffect(() => {
    console.log(props)
    props.getMessagesList();
  }, [props.messages.length, props.likes]);

  const removeLikeHandler = (messageId) => {
    let removedLike = props.likes.filter((like) => {
      if (like !== null) return like.messageId === messageId;
    });
    props.removeLike(removedLike[0].id);
  };

  const deleteMessageHandler = () =>{
    console.log(props.deleteMessage(4595))
  }

  return (
    <Grommet theme={grommet}>
      <Box
        border
        elevation="medium"
        className="messagesList"
        style={{ maxWidth: "610px", marginTop: "30px" }}
      >
        {props.messsages !== [] &&
          props.messages.map((message, index) => {
            if (index < 100)
              return (
                <Box border elevation="medium" className="message">
                  <Avatar
                    className="AvatarImg"
                    src={
                      `https://kwitter-api.herokuapp.com/users/${message.username}/picture` ||
                      "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
                    }
                  />
                  <Link
                    key={message.username + Math.random()}
                    to={`/profiles/${message.username}`}
                  >
                    {message.username}
                  </Link>
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
                       <button onClick={deleteMessageHandler}>Delete</button>
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
