import React, { useEffect } from "react";
import BlankProfile from "../images/blank-profile.png";
import LikeImg from "../images/likeCandy.png";
import DislikeImg from "../images/dislikeCandy.png";
import "./Messages.css";


import { Avatar, Box, Button, Grommet, InfiniteScroll } from "grommet";
import { grommet } from "grommet/themes";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dislike, Close } from "grommet-icons";

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

  return (
    <Grommet style={{ marginBottom: "50px" }} theme={grommet}>
      <Box
        border
        elevation="medium"
        className="messagesList"
        style={{ maxWidth: "610px", marginTop: "30px" }}
      >
        <h3 className="candyFeed" >Candy Feed</h3>
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
                <Box justify="between" direction="row-responsive">
                  <Avatar
                    onError={BlankProfile}
                    className="AvatarImg"
                    src={
                      `https://kwitter-api.herokuapp.com/users/${item.username}/picture` !==
                      {
                        message: "User does not have a picture",
                        statusCode: 404,
                      }
                        ? `https://kwitter-api.herokuapp.com/users/${item.username}/picture`
                        : `${BlankProfile}`
                    }
                  />

                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/profiles/${item.username}/profile`}
                  >
                    {item.username}
                  </Link>

                  <Button
                    justify="end"
                    onClick={() => deleteMessageHandler(item.id)}
                    icon={<Close size="small" color="red" />}
                    secondary
                    style={{ marginTop: "-40px", marginRight: "-15px" }}
                  />
                </Box>
                <div className="messageContent" style={{ maxWidth: "500px" }}>
                  <div className="textItem" style={{ marginLeft: "26px" }}>
                    {item.text}
                  </div>
                  <Box alignSelf="end" className="theButtons" direction="row">
                    <div className="sweetnessFactor">
                      Sweetness {item.likes.length}
                    </div>

                    {item.likes.every((likedObj) =>
                      props.likes.every((likes) => {
                        if (likes !== null) return likedObj.id !== likes.id;
                      })
                    ) ? (
                      <Button
                        margin="0 20px 20px 20px"
                        icon={<Avatar src={LikeImg} round="small" />}
                        onClick={() => props.addLike({ messageId: item.id })}
                        primary
                        color="white"
                      />
                    ) : (
                      <Button
                        margin="0 20px 20px 20px"
                        size="small"
                        icon={<Avatar src={DislikeImg} round="small" />}
                        onClick={() => removeLikeHandler(item.id)}
                        primary
                        color="white"
                      />
                    )}
                  </Box>
                </div>
              </Box>
            )}
          </InfiniteScroll>
        )}
      </Box>
    </Grommet>
  );
};

export default Messages;
