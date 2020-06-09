import React from "react";
import { MenuContainer } from "../components";
import { UserProfileContainer } from "../components";

import { Grommet, Header, Main, Text } from "grommet";
import { grommet } from "grommet/themes";

export const ProfileScreen = (props) => {
  const { username } = props.match.params;
  const { displayName } = props.match.params;
  return (
    <Grommet theme={grommet}>
      <MenuContainer username={username} displayName={displayName} />
      <Main margin="medium" pad="small">
        <UserProfileContainer />
      </Main>
    </Grommet>
  );
};
