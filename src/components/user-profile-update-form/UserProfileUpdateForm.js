import React, { useState } from "react";

export const UserProfileUpdateForm = (props) => {
  console.log(props);
  const [input, setInput] = useState({
    displayName: "",
    about: "",
    password: "",
  });

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
    <div>
      <input
        type="text"
        name="displayName"
        value={input.displayName}
        onChange={changeHandler}
        placeholder={props.users.displayName}
      />
      <input
        type="text"
        name="about"
        value={input.about}
        onChange={changeHandler}
        placeholder={props.users.about === "" ? "add a bio" : props.users.about}
      />
      <input
        type="text"
        name="password"
        value={input.password}
        onChange={changeHandler}
        placeholder="enter password"
      />
      <button onClick={clickHandler}>Save Changes</button>
      UserProfileUpdateForm
    </div>
  );
};
