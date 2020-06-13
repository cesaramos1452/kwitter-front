import React, { useState, useEffect } from "react";
import BlankProfile from "../images/blank-profile.png";
import { Grommet, Header, Main, TextInput, Button } from "grommet";
import { grommet } from "grommet/themes";
import "./UserProfile.css";
import ImageUploader from "react-images-upload";
import FormData from "form-data";

export const UserProfile = (props) => {
  console.log({ props });
  const fileInput = React.createRef();

  useEffect(() => {
    props.getUser(props.profile);
    console.log(props);
  }, [props.users.pictureLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    console.log(formData);
    props.putUserPicture({
      username: props.profile,
      userPicture: formData,
    });
  };

  return (
    <Grommet theme={grommet}>
      <Main margin="medium" pad="small">
        {props.users !== undefined && (
          <div className="userProfile">
            <div>
              <img
                className="ProfileImg"
                src={
                  props.users.pictureLocation !== null
                    ? "https://kwitter-api.herokuapp.com" +
                      props.users.pictureLocation
                    : BlankProfile
                }
                alt="profile picture"
              />
              <form onSubmit={handleSubmit}>
                <label>
                  <TextInput type="file" ref={fileInput} name="picture" />
                </label>
                <br />
                <Button type="submit" label="Upload" primary />
              </form>
            </div>
            <div>
              <h3>{props.users.displayName}</h3>
              <p>{props.users.username}</p>
              <p>About Me: {props.users.about}</p>
              <p>Last Updated: {props.users.updatedAt}</p>
              <p>Candy Journy Started: {props.users.createdAt}</p>
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
