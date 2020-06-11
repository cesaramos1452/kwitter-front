import React from "react";
import { MenuContainer } from "../components";
import { ListOfUsersContainer } from "../components";
import NewMessages from "../components/messages/NewMessages";
import GetMessages from "../components/messages/GetMessages";

import { Grommet, Main, Anchor } from "grommet";
// import Search from 'grommet/components/Search';
import { grommet } from "grommet/themes";

export const NewsScreen = (props) => {
  const { username } = props.match.params;
  return (
    <Grommet theme={grommet}>
      <MenuContainer />
      <Main margin="medium" pad="small">
        <ListOfUsersContainer />
        <NewMessages />
        <GetMessages />
      </Main>
    </Grommet>
  );
};
