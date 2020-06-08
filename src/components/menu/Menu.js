import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
import "./Menu.css";

import { User, Home, ChatOption, Logout} from 'grommet-icons';

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
            <img 
              className="logo"
              src={Logo}
              alt="logo"
            />
            

            <h1>Kwitter</h1>

            <Box direction="row" gap="medium">

            {isAuthenticated && (
              <div id="menu-links">
                <Anchor Link to="/" icon={<Home />} alt="home"/>
                <Anchor Link to="/profiles/:username" icon={<User />}/>
                <Anchor Link to="/messages" icon={<ChatOption />}/>
                <Anchor Link to="/" icon={<Logout />} onClick={logout}/>

                <Link to="/" onClick={logout}>
                  Logout
                </Link>
                <Link to="/">Home</Link>
                
                
                <Anchor icon={<ChatOption />}
                  label='Messages'
                  animateIcon={false}
                  href="/profiles/:username/messages" 
                />
                <Link to="/profiles/:username">Profile</Link>
                <Link to='/profiles/:username/messages'>
                  <Anchor  icon={<ChatOption />}tag="span">Simpler Messages</Anchor>
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







