import React from "react";
import Square from "./square";
import { checkForWinner } from './checkForWinner.js';

const App = () => {
  // 1st player is X ie 1
  // State keeps track of next player and gameState
  const [player, setPlayer] = React.useState(1);
  const [gameState, setGameState] = React.useState([]);
  const nextPlayer = player == 0 ? 'O' : 'X';
  // check for winner (see superset.js)
  let status = `${checkForWinner(gameState)}`;

  const takeTurn = (id) => {
    setGameState([...gameState, { id: id, player: player }]);
    setPlayer((player + 1) % 2); // get next player
    return player;
  };
  const renderSquare = (i) => {
    // use properties to pass callback function takeTurn to Child
    return <Square takeTurn={takeTurn} id={i}></Square>;
  }
  return (
    <div className="game">
      <h1 className="title">React Tik Tak Toe</h1>
      <div className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="grid-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div id="info">
        <h1>{`Next Player is: ${nextPlayer}`}</h1>
          <h1>{status}</h1>
        </div>
      </div>
    </div>
  );
};



// ========================================

export default App;
