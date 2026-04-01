import Scoreboard from "./Scoreboard.jsx";

export default function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
    </header>
  );
}
