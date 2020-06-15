import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { Hide, View } from "grommet-icons";
import { grommet } from "grommet/themes";
import { Box, Button, Grommet, Form, FormField, TextInput } from "grommet";

export const LoginForm = ({ login, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [reveal, setReveal] = React.useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    login(state);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <Grommet theme={grommet} >
      <Box fill align="center" justify="center">
        <Box align="center">
          {loading && <Loader />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
          <Form className="loginForm" id="login-form" onSubmit={handleLogin}>
          <Box margin="small" direction="row" align="center" round="small" border>
              <TextInput
                type="text"
                name="username"
                placeholder="display name"
                autoFocus
                value={state.username}
                required
                htmlFor="username"
                onChange={handleChange}
              />
           </Box>
            <Box margin="small" direction="row" align="center" round="small" border>
              <TextInput
                type={reveal ? "text" : "password"}
                name="password"
                placeholder="password"
                value={state.password}
                required
                htmlFor="password"
                onChange={handleChange}
              />
              <Button
                icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                onClick={() => setReveal(!reveal)}
              />
            </Box>
            <Box direction="row" justify="between" margin={{ top: "medium" }}>
              <Button
                type="submit"
                label="Sign In"
                primary
                disabled={loading}
                fill="true"
              />
            </Box>
            <Box direction="row" justify="end" margin={{ top: "medium" }}>
              <Link to={`/signup`}>
                <Button
                  label="Sign Up"
                  primary
                  disabled={loading}
                  color="lightgreen"
                />
              </Link>
              </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
};

LoginForm.propTypes = {
  login: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
