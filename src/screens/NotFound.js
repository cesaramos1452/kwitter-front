import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import Bear from "../components/images/candyBear.png"

import { Home } from "grommet-icons";

import { Anchor, Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";

const NotFound = ({ location }) => (
  <Grommet theme={grommet}>
    <Box
      border
      elevation="medium"
      className="NotFound"
      alignContent="around"
    >
    <div className="contentBox" >
    <div>
      <h3>No Candy Here</h3>
      <img className="candyBear" src={Bear} alt="Bear" />
    </div>
    <div className="para" >
      <p>There is no such location as <strong>{location.pathname}</strong></p>
      <p>Try starting over</p>
      <Link to="/">
        <Anchor icon={<Home />} />
      </Link>
    </div>
    </div>
    </Box>
  </Grommet>
);

export const NotFoundScreen = NotFound;