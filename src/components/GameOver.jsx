export default function GameOver({ winner, onRestart }) {
  const getWinnerMessage = () => {
    if (winner) {
      return <p>{winner} won!</p>;
    }
    return <p>draw!</p>;
  };

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {getWinnerMessage()}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}
