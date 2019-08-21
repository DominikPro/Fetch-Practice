import React from "react";

const ButtonRemoveUsers = props => {
  return (
    <>
      <button
        onClick={props.click}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "2px solid red",
          backgroundColor: "white"
        }}
      >
        Usuń użytkowników
      </button>
    </>
  );
};

export default ButtonRemoveUsers;
