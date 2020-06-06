import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BlankProfile from "./blank-profile.png";

import { Grommet, Header, Main, Text, Button } from "grommet";
import { grommet } from "grommet/themes";
import "./UserProfile.css";

export const UserProfile = (props) => {
  const [bio, setbio] = useState(undefined);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetch(`http://kwitter-api.herokuapp.com/users/${props.username}`)
      .then((res) => res.json())
      .then((user) => setbio(user));
  }, [props.username]);

  const updateProfile = () => {
    setUpdating(!updating);
  };
  console.log(bio);
  console.log({ props });
  return (
    <Grommet theme={grommet}>
      <Main margin="medium" pad="small">
        This is {bio !== undefined && bio.user.displayName}'s User Profile
        {bio !== undefined && (
          <div>
            <h3>UserName: {bio.user.username}</h3>
            {/* <img src={bio.user.pictureLocation} alt="profile picture" /> */}
            <img
              style={{ width: "200px", height: "200px" }}
              src={bio.user.pictureLocation || BlankProfile}
              alt="profile picture"
            />
            <p>About: {bio.user.about}</p>
            <p>Last Update: {bio.user.updatedAt}</p>
            <p>Created Profile: {bio.user.createdAt}</p>
            {/* TODO: conditional render if updating is true or false */}
            {/* add SAVE BUTTON, andd DISCARD button */}
            {/* Have input fields to update prefilled with from API call */}
            <button onClick={updateProfile}>Update Bio</button>
          </div>
        )}
      </Main>
    </Grommet>
  );
};
