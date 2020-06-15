import React, { useEffect } from "react";
import BlankProfile from "../images/blank-profile.png";
import "./Messages.css";

import { Avatar, Box, Grommet, InfiniteScroll, Text } from "grommet";
import { grommet } from "grommet/themes";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Messages = (props) => {

  const [numberOfMessagesDisplayed, setNumberOfMessagesDisplayed] = useState(
    100
  );
  useEffect(() => {
    props.getMessagesList(numberOfMessagesDisplayed);
  }, [props.likes, numberOfMessagesDisplayed, props.userMessages]);

  const removeLikeHandler = (messageId) => {
    let removedLike = props.likes.filter((like) => {
      if (like !== null) return like.messageId === messageId;
    });
    props.removeLike(removedLike[0].id);
  };

  const deleteMessageHandler = (id) => {
    props.deleteMessage(id);
    setNumberOfMessagesDisplayed(numberOfMessagesDisplayed - 1);
  };

  const getMoreUsers = () => {
    setNumberOfMessagesDisplayed(numberOfMessagesDisplayed + 100);
    props.getMessagesList(numberOfMessagesDisplayed + 100);
  };

  const determineIfPictureIsUploaded = (username) => {
    //fetch user
    //if user .pictureloaction !== null
  };

  return (
    <Grommet style={{ marginBottom: "50px" }} theme={grommet}>
      <Box
        border
        elevation="medium"
        className="messagesList"
        style={{ maxWidth: "610px", marginTop: "30px" }}
      >
        {props.messsages !== [] && (
          <InfiniteScroll
            items={props.messages}
            step={50}
            onMore={getMoreUsers}
          >
            {(item) => (
              <Box
                border
                elevation="medium"
                className="message"
                key={item.username + Math.random()}
              >
                <Avatar
                  className="AvatarImg"
                  src={
                    item.pictureLocation !== null
                    ? `https://kwitter-api.herokuapp.com/users/${item.username}/picture`
                    : `${BlankProfile}`
                  }
                />
                <Link to={`/profiles/${item.username}`}>{item.username}</Link>
                <div style={{ maxWidth: "500px" }}>
                  {item.text}
                  <div>
                    Likes {item.likes.length}
                    {item.likes.every((likedObj) =>
                      props.likes.every((likes) => {
                        if (likes !== null) return likedObj.id !== likes.id;
                      })
                    ) ? (
                      <button
                        onClick={() => props.addLike({ messageId: item.id })}
                      >
                        Pop this CandyGram
                      </button>
                    ) : (
                      <button onClick={() => removeLikeHandler(item.id)}>
                        Drop this CandyGram
                      </button>
                    )}
                    <button onClick={() => deleteMessageHandler(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </Box>
            )}
          </InfiniteScroll>
        )}
        <button onClick={getMoreUsers}>click for more users</button>
      </Box>
    </Grommet>
  );
};

export default Messages;
