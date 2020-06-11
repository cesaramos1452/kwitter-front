import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListOfUsers.css";

import { Avatar, Box, List, Grommet } from "grommet";
import { grommet } from "grommet/themes";

export const ListOfUsers = (props) => {
  console.log({ props });
  useEffect(() => {
    props.getUserList();
  }, []);
  return (
    <Grommet theme={grommet}>
    <div className="newsFeed">
      <div className="messages">
        <p>messages</p>
      </div>
      <div className="userList"> 
        {props.users.length !== 0 &&
        props.users.map((user) => (
          
          <li className="user" >
            <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            <Link to={`/profiles/${user.username}`}>{user.username}</Link>
          </li>
        ))}
      </div>
    </div>
    </Grommet>
  );
};


