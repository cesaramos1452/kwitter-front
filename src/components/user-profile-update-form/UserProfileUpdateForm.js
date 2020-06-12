import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfileUpdateForm.css";

import { Hide, View } from "grommet-icons";
import { grommet } from "grommet/themes";
import { Box, Button, Grommet, Form, FormField, TextInput } from "grommet";

export const UserProfileUpdateForm = (props) => {
  console.log(props);
  const [input, setInput] = useState({
    displayName: "",
    about: "",
    password: "",
  });

  const [reveal, setReveal] = React.useState(false);

  const handleDeleteUser = () => {
    props.deleteUser(props.username);
    props.logout();
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
    <Grommet full theme={grommet}>
 <Box fill align="baseline" >
<Form className="updateForm" onSubmit={clickHandler}>
            <Box className="textField" direction="row" align="center" round="small" border>
            <TextInput
              type="text"
              name="displayName"
              value={input.displayName}
              onChange={changeHandler}
              placeholder={props.users.displayName}
            />
             </Box>
             <Box className="textField" direction="row" align="center" round="small" border>
             <TextInput
              type="text"
              name="about"
              value={input.about}
              onChange={changeHandler}
              placeholder={
                props.users.about === "" ? "add a bio" : props.users.about
              }
            />
             </Box>
             <Box className="textField" direction="row" align="center" round="small" border>
             <TextInput
              type={reveal ? "text" : "password"}
              name="password"
              required
              value={input.password}
              onChange={changeHandler}
              placeholder="enter password to commit changes"
            />
              <Button
                icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                onClick={() => setReveal(!reveal)}
              />
            </Box>
            <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Link to={`/profiles/${props.username}`}>
                <Button
                  label="Save Changes"
                  primary
                  type="submit"
                  onClick={clickHandler}
                />
              </Link>
              <Link to={`/`}>
                <Button 
                  secondary
                  label="DELETE ACCOUNT"
                  onClick={handleDeleteUser}
                  color="red"
                />
              </Link>
          </Box>
          </Form>
      </Box>
    </Grommet>
  );
};
