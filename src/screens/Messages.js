import React from "react";
import { MenuContainer } from "../components";
import { UserProfile } from "../components";

import { Edit } from 'grommet-icons';
import { Grommet, Main, Anchor } from "grommet";
import { grommet } from "grommet/themes";

export const MessagesScreen = (props) => {
  console.log(props);
  const { username } = props.match.params;
  console.log(username);
  return (
    <Grommet theme={grommet}>
      <MenuContainer />
      <Main margin="medium" pad="small">
          <h3>Your Messages</h3>
          <Anchor 
          icon={<Edit />}
        //   onClick={}
          />
      </Main>
    </Grommet>
  );
};
