import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BlankProfile from "./blank-profile.png";

import { Grommet, Header, Main, Text } from "grommet";
import { grommet } from "grommet/themes";
import "./UserProfile.css";

export const UserProfile = (props) => {
  const [bio, setbio] = useState(undefined);

  useEffect(() => {
    fetch(`http://kwitter-api.herokuapp.com/users/${props.username}`)
      .then((res) => res.json())
      .then((user) => setbio(user));
  }, [props.username]);
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
              src={BlankProfile}
              alt="profile picture"
            />
            <p>About: {bio.user.about}</p>
            <p>Last Update: {bio.user.updatedAt}</p>
            <p>Created Profile: {bio.user.createdAt}</p>
          </div>
        )}
      </Main>
    </Grommet>
  );
};
