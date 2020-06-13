import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListOfUsers.css";

import { Avatar, Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";

export const ListOfUsers = (props) => {
  useEffect(() => {
    // props.getUserList();
  }, []);
  return (
    <Grommet theme={grommet}>
      <Box 
          border
          className="userList"
          elevation="medium" 
          background={{ color:"theme", opacity: true }}
          style={{maxWidth:"350px"}, {minWidth:"250px"}}
        >
        {props.users.length !== 0 &&
          props.users.map((user) => (
            <li className="user">
              <Avatar
                className="AvatarImg"
                src={`https://kwitter-api.herokuapp.com/users/${user.username}/picture`}
              />
              <Link
                key={user.username + Math.random()}
                to={`/profiles/${user.username}`}
              >
                {user.username}
              </Link>
            </li>
            // <li className="user" >
            //   <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            //   {/* <Avatar src={${user.picture}}/> */}
            //   <Link to={`/profiles/${user.username}`}>{user.username}</Link>
            // </li>
          ))}
      </Box>
    </Grommet>
  );
};
