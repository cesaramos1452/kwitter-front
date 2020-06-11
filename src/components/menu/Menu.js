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
      <Grommet theme={grommet}>
        <div className="menuBar">
        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div>
          <h1 className="siteName" >Candy</h1>
        </div>
        <div>
            {isAuthenticated && (
              <div id="menu-links">
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
        </div>
        </div>
      </Grommet>
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
