import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { SignUpScreen, ProfileScreen, MessagesScreen, NotFoundScreen, HomeScreen } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
    <ConnectedRoute
        isProtected
        path="/signup"
        component={SignUpScreen}
      />
      <ConnectedRoute
        isProtected
        path="/profiles/:username/newsfeed"
        component={NewsScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={ProfileScreen}
      />
      <ConnectedRoute
        isProtected
        path="/profiles/:username/messages"
        component={MessagesScreen}
      />
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
