import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Navigation } from "./components";
import configureStore from "./redux/configureStore";
import CreateUser from "./components/createuser/CreateUser";

const { store, persistor } = configureStore();

const KWITTER = {
  store,
  persistor,
};

window.KWITTER = KWITTER;

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
      <CreateUser/>
    </PersistGate>
  </Provider>
);
