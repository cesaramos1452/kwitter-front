import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const UserProfile = () => {
  const [bio, setbio] = useState("vinchinzo123");

  useEffect(() => {
    fetch("http://kwitter-api.herokuapp.com/users/vinchinzo123")
      .then((res) => res.json())
      .then((user) => setbio(user));
  }, [0]);
  return <div>This is the User Profile {console.log(bio.user)}</div>;
};
