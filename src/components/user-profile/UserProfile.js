import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BlankProfile from "../images/blank-profile.png";

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
     
      {bio !== undefined && (
          <div  className="userProfile">
          <div>
            {/* <img src={bio.user.pictureLocation} alt="profile picture" /> */}
            <img 
              className="ProfileImg"
              src={BlankProfile} 
              alt="profile picture" 
            />
          </div>
          <div>
            <p>{bio.user.displayName}</p>
            <h3>{bio.user.username}</h3>
            <p>About: {bio.user.about}</p>
            <p>Last Update: {bio.user.updatedAt}</p>
            <p>Created Profile: {bio.user.createdAt}</p>
          </div>
        </div>
      )}
       </Main>
    </Grommet>
  );
};

