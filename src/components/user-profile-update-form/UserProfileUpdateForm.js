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
    <Grommet full theme={grommet} style={{ height: "47vh" }}>
      {/* ////////////vero's changes
    //    <Form className="updateForm" id="update-form" onSubmit={clickHandler}>
  //      <Box className="updateTextArea" direction="row" align="center" round="small">
   //   <TextInput 
   //     type="text"
  //      name="displayName"
  //      value={input.displayName}
  //      onChange={changeHandler}
   //     placeholder={props.users.displayName}
  //    />
  //    </Box>
  //    <Box className="updateTextArea" direction="row" align="center" round="small">
  //    <TextInput 
  //      type="text"
  //      name="about"
  //      value={input.about}
  //      onChange={changeHandler}
  //      placeholder={props.users.about === "" ? "add a bio" : props.users.about}
  //    />
  //    </Box>
  //    <Box className="updateTextArea" direction="row" align="center" round="small">
  //    <TextInput
  //      type="text"
  //      name="password"
  //      value={input.password}
  //      onChange={changeHandler}
  //      placeholder="enter password"
  //    />
  //    <Button
  //      icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
  //      onClick={() => setReveal(!reveal)}
  //    />
  //    </Box>

      
  //    <Box direction="row" justify="between" margin={{ top: "medium" }}>
  //    <Button
   //     type="submit"
  //      label="Save Changes"
  //      primary
  //    />
 //       </Box>
  //      </Form> */}
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
            <Link to={`/`}>
              <button onClick={handleDeleteUser}>DELETE USER PROFILE</button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};
