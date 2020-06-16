import React, { useState } from "react";
import "./CreateMessages.css";

import { Button, Grommet, TextArea, Box } from "grommet";
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
    <Grommet theme={grommet} >
      <Box border className="candyGramBox" elevation="medium" >
      <form onSubmit={clicker}>
        
          <h3 >Candy Gram</h3>
          <TextArea
            className="candyTextArea"
            resize={false}
            value={userMesssage}
            onChange={setUserInput}
            placeholder="How sweet are you today?"
            cols="36"
            rows="1"
          />
        <Button
          type="submit"
          margin="15px 0 0 10px"
          justify="end"
          label="Drop a sweet!"
        />
      </form>
      </Box>
    </Grommet>
  );
};

export default CreateMessages;
