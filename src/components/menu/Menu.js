import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "./Menu.css";

import { Article, User, UserSettings, Logout } from "grommet-icons";

import { Anchor, Grommet, Box } from "grommet";
import { grommet } from "grommet/themes";

export const Menu = (props) => {
  const { isAuthenticated, logout, username } = props;
  return (
    <Grommet theme={grommet}>
      <Box border direction="row" justify="between" elevation="medium" className="menuBar" >
        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div>
          <h1 className="siteName">Candy</h1>
        </div>
        <div>
          {isAuthenticated && (
            <div id="menu-links">
              <Link to={`/profiles/${username}`}>
                <Anchor icon={<Article />} />
              </Link>
              <Link to={`/profiles/${username}/profile`}>
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
      </Box>
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
