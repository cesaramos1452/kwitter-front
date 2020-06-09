import React from "react";
import { useState, useEffect } from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
import "./Menu.css";

import { Article, User, ChatOption, Logout} from 'grommet-icons';

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

export const Menu = ({ isAuthenticated, logout, props }) => {

  // const [bio, setbio] = useState(undefined);

  // useEffect(() => {
  //   fetch(`http://kwitter-api.herokuapp.com/users/${props.username}`)
  //     .then((res) => res.json())
  //     .then((user) => setbio(user));
  // }, [props.username]);
  

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
            <img 
              className="logo"
              src={Logo}
              alt="logo"
            />
            

            <h1>Candy</h1>

            <Box direction="row" gap="medium">

            {isAuthenticated && (
              <div id="menu-links">

                {/* temporarily hard coding the links */}
                <Link to={`/profiles/vinchinzo123/newsfeed`}>
                  <Anchor icon={<Article />} />
                </Link>
                <Link to={`/profiles/vinchinzo123`}>
                  <Anchor icon={<User />} />
                </Link>
                <Link to={`/profiles/vinchinzo123/messages`}>
                  <Anchor icon={<ChatOption />} />
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







