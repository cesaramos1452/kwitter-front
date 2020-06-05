import React from "react";
import { useState } from "react";
import { useEffect } from "react";

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
    <div>
      This is {bio !== undefined && bio.user.displayName}'s User Profile
      {bio !== undefined && (
        <div>
          <h3>UserName: {bio.user.username}</h3>
          <img src={bio.user.pictureLocation} alt="profile picture" />
          <p>About: {bio.user.about}</p>
          <p>Last Update: {bio.user.updatedAt}</p>
          <p>Created Profile: {bio.user.createdAt}</p>
        </div>
      )}
    </div>
  );
};
