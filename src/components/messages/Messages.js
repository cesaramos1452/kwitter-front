import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import { MenuContainer } from "../components";
import { UserProfile } from "../components";

import { Edit } from 'grommet-icons';
import { Grommet, Main, Anchor } from "grommet";
import { grommet } from "grommet/themes";



export const MessagesScreen = (props) => {
  console.log(props);
  const { username } = props.match.params;
  console.log(username);

  const handleChange = (event) => {
    event.preventDefault();
}

handleAdd = (event) => {
    event.preventDefault();
    let newMessage = {
      userId: 785,
      id: Date.now(),
      title: this.newMessage.value,
      completed: false,
    }

    this.newMessage.value = "";
 
    this.setState({
      todos: [...this.state.todos, newMessage]
    });
  };

  
  return (
    <Grommet theme={grommet}>
      <MenuContainer />
      <Main margin="medium" pad="small">
          <h3>Your Messages</h3>
          <Anchor 
          icon={<Edit />}
        //   onClick={}
          />
      </Main>
    </Grommet>
  );
};
