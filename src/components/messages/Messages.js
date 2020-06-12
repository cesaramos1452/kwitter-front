import React, { useEffect } from "react";
import "./Messages.css";

import { Avatar, Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Messages = (props) => {
  const [numberOfMessages, setNumberOfMessages] = useState(25);
  console.log({ props });
  useEffect(() => {
    console.log(props);
    props.getMessagesList(numberOfMessages);
  }, [props.likes, numberOfMessages]);

  const removeLikeHandler = (messageId) => {
    let removedLike = props.likes.filter((like) => {
      if (like !== null) return like.messageId === messageId;
    });
    props.removeLike(removedLike[0].id);
  };

  const deleteMessageHandler = (id) => {
    props.deleteMessage(id);
    setNumberOfMessages(numberOfMessages - 1);
  };

  const getMoreUsers = () => {
    setNumberOfMessages(numberOfMessages + 25);
    props.getMessagesList(numberOfMessages);
  };

  return (
    <Grommet style={{ marginBottom: "50px" }} theme={grommet}>
      <Box
        border
        elevation="medium"
        className="messagesList"
        style={{ maxWidth: "610px", marginTop: "30px" }}
      >
        {props.messsages !== [] &&
          props.messages.map((message, index) => {
            if (index < numberOfMessages)
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
                      {/* {if this message is from the user than display ? */}
                      <button onClick={() => deleteMessageHandler(message.id)}>
                        Delete
                      </button>
                      {/* : */}
                      {/* <button onClick={() => filtersMessageOut(message.id)}>
                          Remove Post from Feed
                        </button> */}
                    </div>
                  </div>
                  {/* {message.text} */}
                </Box>
              );
          })}
        <button onClick={getMoreUsers}>click for more users</button>
      </Box>
    </Grommet>
  );
};

export default Messages;
