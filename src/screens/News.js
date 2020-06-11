import React from "react";
import { MenuContainer } from "../components";
import { MessageContainer } from "../components";
import { ListOfUsersContainer } from "../components";
import { Grommet } from "grommet";
import "./News.css";

import { grommet } from "grommet/themes";

export const NewsScreen = (props) => {
  const { username } = props.match.params;
  return (
    <Grommet theme={grommet}>
      <MenuContainer />
      <div className="newsFeed">
        <div className="messages">
          <MessageContainer />
        </div>
        <div className="userList">
          <ListOfUsersContainer />
        </div>
      </div>
    </Grommet>
  );
};