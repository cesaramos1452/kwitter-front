import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import "./LoginForm.css";
import { Hide, View } from "grommet-icons";
import { grommet } from "grommet/themes";
import {
  Box,
  Button,
  CheckBox,
  Grommet,
  Form,
  FormField,
  MaskedInput,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
  TextInput
} from "grommet";

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
      <Grommet 
      full theme={grommet}
      style={{ height: "47vh"}}
      >
        
      <Box fill 
      align="center" 
      justify="center"
      >
        <Box 
          align="center"
        >
          <Form
            id="login-form" 
            onSubmit={handleLogin}
          >
            <FormField 
              round="small"
              border
            >
              <TextInput 
                type="text"
                name="username"
                autoFocus
                value={state.username}
                required
                htmlFor="username"
                onChange={handleChange}
              />
            </FormField>
            <Box
              direction="row"
              align="center"
              round="small"
              border
            >
              <TextInput
                type={reveal ? "text" : "password"}
                name="password"
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
            <Box 
              direction="row" 
              justify="between" 
              margin={{ top: "medium" }}
            >
            <Button 
              type="submit" 
              label="Sign In" 
              primary
              disabled={loading}
            />
            </Box>
          </Form>
        </Box>
      </Box>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}

    </Grommet>
  );
};

LoginForm.propTypes = {
  login: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};

