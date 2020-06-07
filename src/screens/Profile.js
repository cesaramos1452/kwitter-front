import React from "react";
import { MenuContainer } from "../components";
import { UserProfile } from "../components";

import { Grommet, Header, Main, Text } from "grommet";
import { grommet } from "grommet/themes";

export const ProfileScreen = (props) => {
  console.log(props);
  const { username } = props.match.params;
  console.log(username);
  return (
    <Grommet theme={grommet}>
      <MenuContainer />
      <Main margin="medium" pad="small">
      </Main>
      <UserProfile username={username} />
    </Grommet>
  );
};



      
    