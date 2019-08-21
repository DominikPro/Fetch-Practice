import React from "react";
const ButtonFetchUsers = props => {
  return (
    <>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "2px solid green",
          backgroundColor: "white"
        }}
        onClick={props.click}
      >
        Dodaj użytkownika
      </button>
    </>
  );
};

export default ButtonFetchUsers;
