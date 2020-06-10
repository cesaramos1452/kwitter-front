import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "./Menu.css";

import { Article, User, UserSettings, Logout } from "grommet-icons";

import { Anchor, Box, Grommet, Header } from "grommet";
import { grommet } from "grommet/themes";

export const Avatar = ({ ...rest }) => (
  <Box
    height="xsmall"
    width="xsmall"
    // src={Logo}
    round="full"
    background="url({Logo})"
    {...rest}
  />
);

export const Menu = (props) => {
  const { isAuthenticated, logout, username } = props;
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
          <img className="logo" src={Logo} alt="logo" />

          <h1>Candy</h1>

          <Box direction="row" gap="medium">
            {isAuthenticated && (
              <div id="menu-links">
                {/* temporarily hard coding the links */}
                <Link to={`/profiles/${username}/newsfeed`}>
                  <Anchor icon={<Article />} />
                </Link>
                <Link to={`/profiles/${username}`}>
                  <Anchor icon={<User />} />
                </Link>
                <Link to={`/profiles/${username}/editprofile`}>
                  <Anchor icon={<UserSettings />} />
                </Link>
                <Link to={`/`} onClick={logout}>
                  <Anchor icon={<Logout />} onClick={logout} />
                </Link>
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
