import React, { useState, useEffect } from "react";
import BlankProfile from "../images/blank-profile.png";
import { getUser } from "../../redux/actions/users";
import { Grommet, Header, Main, Text, Button } from "grommet";
import { grommet } from "grommet/themes";
import "./UserProfile.css";

export const UserProfile = (props) => {
  console.log(props);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    // fetch(`http://kwitter-api.herokuapp.com/users/${props.username}`)
    //   .then((res) => res.json())
    //   .then((user) => setbio(user));
    props.getUser(props.profile);
  }, [props.profile]);

  const updateProfile = () => {
    setUpdating(!updating);
  };
  console.log({ props });
  return (
    <Grommet theme={grommet}>
      <Main margin="medium" pad="small">
        {props.users !== undefined && (
          <div className="userProfile">
            <div>
              {/* <img src={bio.user.pictureLocation} alt="profile picture" /> */}
              <img
                className="ProfileImg"
                src={
                  props.users.pictureLocation !== null
                    ? props.users.pictureLocation
                    : BlankProfile
                }
                alt="profile picture"
              />
            </div>
            <div>
              <p>{props.users.displayName}</p>
              <h3>{props.users.username}</h3>
              <p>About: {props.users.about}</p>
              <p>Last Update: {props.users.updatedAt}</p>
              <p>Created Profile: {props.users.createdAt}</p>
              {/* TODO: conditional render if updating is true or false */}
              {/* add SAVE BUTTON, andd DISCARD button */}
              {/* Have input fields to update prefilled with from API call */}
            </div>
          </div>
        )}
      </Main>
    </Grommet>
  );
};
