import React, { useState, useEffect } from "react";
import BlankProfile from "../images/blank-profile.png";
import { Grommet, Header, Main, Text, Button } from "grommet";
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
              {/* <img src={bio.user.pictureLocation} alt="profile picture" /> */}
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
              <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                name="image"
                ref={fileInput}
                onChange={() => {
                  let picture = fileInput.current.files[0];
                  props.putUserPicture({
                    username: props.profile,
                    userPicture: picture,
                  });
                }}
                imgExtension={[".jpg", ".png", ".gif"]}
                maxFileSize={5242880}
              />
              <label htmlFor="fileElem">Select some files</label>
              <form onSubmit={handleSubmit}>
                <label>
                  Upload file:
                  <input type="file" ref={fileInput} name="picture" />
                </label>
                <br />
                <button type="submit">Submit</button>
              </form>
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
