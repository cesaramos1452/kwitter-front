import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Menu.css";

import { User, Home, ChatOption, Logout} from 'grommet-icons';

import { Anchor, Box, Grommet, Header } from "grommet";
import { grommet } from "grommet/themes";

export const Avatar = ({ ...rest }) => (
  <Box
    height="xxsmall"
    width="xxsmall"
    round="full"
    background="url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)"
    {...rest}
  />
);

export const Menu = ({ isAuthenticated, logout }) => {
  return (
    <div id="menu">
      <Grommet theme={grommet}>
        <Header 
          round="small"
          border
          background="theme"
          margin="medium"
          pad="medium"
          alignSelf="stretch"
        >
            {isAuthenticated && (
                <Avatar />
              )}

            <h1>Kwitter</h1>

            <Box direction="row" gap="medium">

            {isAuthenticated && (
              <div id="menu-links">
                <Anchor Link to="#" icon={<Home />} alt="home"/>
                <Anchor Link to="#" icon={<User />}/>
                <Anchor Link to="/messagefeed" icon={<ChatOption />}/>
                <Anchor Link to="/" icon={<Logout />} onClick={logout}/>
              </div>
            )}
          </Box>
        </Header>
      </Grommet>
    </div>
  );
};

Menu.defaultProps = {
  isAuthenticated: false,
  logout: () => {},
};

Menu.propTypes = {
  isAuthenticated: ProptTypes.bool.isRequired,
  logout: ProptTypes.func.isRequired,
};







