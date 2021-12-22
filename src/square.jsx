import React from "react";

const Square = ({ takeTurn, id }) => {
    const mark = ["O", "X", "+"];
    // id is the square's number
    // filled tells us if square has been filled
    // tik tells us symbol in square (same as player)
    // We call takeTurn to tell Parent we have filled the square
    const [filled, setFilled] = React.useState(false);
    const [tik, setTik] = React.useState(2);
  
    return (
      <button
      className={tik == 0 ? "white" : tik == 1 ? "red" :""}
        onClick={() => {
          setTik(takeTurn(id));
          setFilled(true);
        }}
      >
        <h1>{mark[tik]}</h1>
      </button>
    );
  };
 
  export default Square;