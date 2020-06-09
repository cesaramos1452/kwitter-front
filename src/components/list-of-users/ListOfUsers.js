import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const ListOfUsers = (props) => {
  console.log({ props });
  useEffect(() => {
    props.getUserList();
  }, []);
  return (
    <div>
      {props.users.length !== 0 &&
        props.users.map((user) => (
          <li style={{ listStyle: "none" }}>
            <Link to={`/profiles/${user.username}`}>{user.username}</Link>
          </li>
        ))}
      this is a list of users
    </div>
  );
};
