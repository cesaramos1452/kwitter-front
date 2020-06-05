import React from "react";
import { MenuContainer } from "../components";
import { UserProfile } from "../components";

export const ProfileScreen = (props) => {
  console.log(props);
  const { username } = props.match.params;
  console.log(username);
  return (
    <>
      <MenuContainer />
      <h2>Profile</h2>
      <UserProfile username={username} />
    </>
  );
};
