import React, { useState } from "react";

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
        <div>
          <textarea
            value={userMesssage}
            onChange={setUserInput}
            placeholder="How sweet are you today?"
            cols="36"
            rows="3"
          />
        </div>
        <button>Click</button>
      </form>
    </div>
  );
};

export default CreateMessages;
