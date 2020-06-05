import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import "./Home.css";

export const HomeScreen = () => (
  <div className="welcomeMessage">

    <MenuContainer />
    <h2>Staying Connected Just Got Simpler</h2>
    <LoginFormContainer />
    </div>
);
