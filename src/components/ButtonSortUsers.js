import React from "react";

const ButtonSortUsers = props => {
  return (
    <>
      {props.sorting ? (
        <button
          onClick={props.click}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "2px solid blue",
            backgroundColor: "white"
          }}
        >
          Pokaż od najnowszych
        </button>
      ) : (
        <button
          onClick={props.click}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "2px solid blue",
            backgroundColor: "white"
          }}
        >
          Pokaż od najstarszych
        </button>
      )}
    </>
  );
};

export default ButtonSortUsers;
