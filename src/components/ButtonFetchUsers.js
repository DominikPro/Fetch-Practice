import React from "react";
const ButtonFetchUsers = props => {
  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "2px solid",
          backgroundColor: "white"
        }}
        onClick={props.click}
      >
        Dodaj użytkownika
      </button>
    </div>
  );
};

export default ButtonFetchUsers;
