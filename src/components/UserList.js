import React from "react";

const UserList = props => {
  const users = props.users.map(user => (
    <div key={user.login.uuid}>
      <h2>{`${user.name.title} ${user.name.last}`}</h2>
    </div>
  ));
  console.log(users);

  return <ul>{users}</ul>;
};

export default UserList;
