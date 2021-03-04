import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { SignUpScreen, NewsScreen, ProfileScreen, UpdateProfileScreen, NotFoundScreen, HomeScreen } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
    <ConnectedRoute
        exact
        path="/signup"
        redirectIfAuthenticated
        component={SignUpScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={NewsScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username/profile"
        component={ProfileScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username/editprofile"
        component={UpdateProfileScreen}
      />
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
//       <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
