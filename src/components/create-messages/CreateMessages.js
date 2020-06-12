import React, { useState } from "react";

import { Button, TextArea, Box } from "grommet";
import { grommet } from "grommet/themes";

const CreateMessages = (props) => {
  const [userMesssage, setUserMessage] = useState("");

  const setUserInput = (event) => {
    setUserMessage(event.target.value);
  };

  const clicker = (event) => {
    event.preventDefault();
    if (userMesssage !== "") {
      props.createMessage({ text: userMesssage });
      setUserMessage("");
    }
  };
  return (
    <div>
      <form onSubmit={clicker}>
        <Box elevation="medium" margin=" 10px">
          <TextArea
            value={userMesssage}
            onChange={setUserInput}
            placeholder="How sweet are you today?"
            cols="36"
            rows="3"
          />
        </Box>
        <Button
          type="submit"
          margin="0 0 0 10px"
          justify="end"
          label="Drop a sweet!"
        />
      </form>
    </div>
  );
};

export default CreateMessages;
