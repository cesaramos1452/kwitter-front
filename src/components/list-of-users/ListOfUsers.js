import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BlankProfile from "../images/blank-profile.png";
import "./ListOfUsers.css";

import { Avatar, Box, Grommet, Button } from "grommet";
import { grommet } from "grommet/themes";
import { useState } from "react";

export const ListOfUsers = (props) => {
  const [displayUsers, setDisplayUsers] = useState(0);
  useEffect(() => {
    if (displayUsers % 100 === 0) props.getUserList(displayUsers + 100);
  }, [displayUsers]);
  const displayPreviousUsers = () => {
    setDisplayUsers(displayUsers - 10);
  };
  const displayNextUsers = () => {
    setDisplayUsers(displayUsers + 10);
  };

  return (
    <Grommet theme={grommet}>
      <Box
        border
        className="userList"
        elevation="medium"
        background={{ color: "theme", opacity: true }}
        style={({ maxWidth: "350px" }, { minWidth: "250px" })}
      >
        {props.users.length !== 0 &&
          props.users.map((user, index) => {
            if (displayUsers <= index && index < displayUsers + 10)
              return (
                <li className="user">
                  <Avatar
                    className="AvatarImg"
                    src={
                      user.pictureLocation !== null
                        ? `https://kwitter-api.herokuapp.com/users/${user.username}/picture`
                        : `${BlankProfile}`
                    }
                  />
                  <Link
                    key={user.username + Math.random()}
                    to={`/profiles/${user.username}`}
                  >
                    {user.username}
                  </Link>
                </li>
              );
          })}
        {displayUsers !== 0 && (
          <Button onClick={displayPreviousUsers} label="previous 10 users" />
        )}
        <Button
          style={{ marginTop: "10px" }}
          onClick={displayNextUsers}
          label="next 10 users"
        />
      </Box>
    </Grommet>
  );
};
