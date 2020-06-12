import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import "./Home.css";

import { Grommet, Main } from "grommet";
import { grommet } from "grommet/themes";

export const HomeScreen = () => (
  <Grommet theme={grommet}>
    <Main>
      <div className="welcomeMessage">
        <MenuContainer />
        <h3 className="welcomeTagline">
          The sweetest thing to happen to social media.
        </h3>
        <LoginFormContainer />
      </div>
    </Main>
  </Grommet>
);
