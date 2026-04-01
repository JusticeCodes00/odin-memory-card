export default function Scoreboard({ bestScore, score }) {
  return (
    <div className="score-board">
      <p>
        <span>Score: {score}</span>
      </p>
      <p>
        <span>Best Score: {bestScore}</span>
      </p>
    </div>
  );
}
