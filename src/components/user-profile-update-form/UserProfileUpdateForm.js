import React, { useState } from "react";
import "./UserProfileUpdateForm.css";

import { grommet } from "grommet/themes";
import { Box, Button, Grommet, Form, FormField, TextInput } from "grommet";

export const UserProfileUpdateForm = (props) => {
  console.log(props);
  const [input, setInput] = useState({
    displayName: "",
    about: "",
    password: "",
  });

  const handleDeleteUser = () => {
    props.deleteUser(props.username);
  };

  const clickHandler = () => {
    let user = {
      username: props.username,
      requestBody: {
        displayName: input.displayName,
        about: input.about,
        password: input.password,
      },
    };
    props.updateUser(user);
  };

  const changeHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInput((input) => ({ ...input, [inputName]: inputValue }));
  };

  return (
    <Grommet full theme={grommet} style={{ height: "47vh" }}>
      <Box fill align="center" justify="center">
        <Box align="center">
          <Box direction="row" align="center" round="small">
            <TextInput
              type="text"
              name="displayName"
              value={input.displayName}
              onChange={changeHandler}
              placeholder={props.users.displayName}
            />
            <TextInput
              type="text"
              name="about"
              value={input.about}
              onChange={changeHandler}
              placeholder={
                props.users.about === "" ? "add a bio" : props.users.about
              }
            />
            <TextInput
              type="text"
              name="password"
              value={input.password}
              onChange={changeHandler}
              placeholder="enter password"
            />
          </Box>
          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <button onClick={clickHandler}>Save Changes</button>
            <button onClick={handleDeleteUser}>DELETE USER PROFILE</button>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};
