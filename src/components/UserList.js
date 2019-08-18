import React from "react";

const UserList = props => {
  const users = props.users.map(user => (
    <div className="user" key={user.login.uuid}>
      <h2>{`${user.name.title} ${user.name.last}`}</h2>
      <p>{user.email}</p>
    </div>
  ));
  console.log(users);

  return <div>{users}</div>;
};

export default UserList;
