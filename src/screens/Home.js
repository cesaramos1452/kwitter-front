import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import "./Home.css";

export const HomeScreen = () => (
  <div className="welcomeMessage">
    <MenuContainer />
    <h2 className="welcomeTagline">
      The sweetest thing to happen to social media.
    </h2>
    <LoginFormContainer />
  </div>
);
