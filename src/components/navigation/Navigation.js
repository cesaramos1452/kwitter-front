import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, MessagesScreen, NotFoundScreen } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
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
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
