import React from "react";
import "./UsersList.css";

const UserList = props => {
  const users = props.users.map(user => (
    <div className="user" key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.last} />
      <h2>{`${user.name.title} ${user.name.last}`}</h2>
      <p>{user.email}</p>
    </div>
  ));

  return <div>{users}</div>;
};

export default UserList;
