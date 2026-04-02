import "./styles/App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import fetchCards from "./utils/fetchCards.js";
import { useEffect, useState } from "react";
import dummyCardData from "./utils/dummyCardData.js";
import shuffle from "./utils/shuffle.js";

const initialRound = 1;

export default function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [round, setRound] = useState(initialRound);

  const [cardClickedIds, setCardClickedIds] = useState([]);

  function onCardClick(id) {
    if (cardClickedIds.includes(id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setCardClickedIds([]);
      setRound(round + 1);
      return;
    }

    setScore(score + 1);
    setCardClickedIds([...cardClickedIds, id]);
    setCards(shuffle(cards));
  }

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const data = await fetchCards();
        if (!ignore) setCards(data);
      } catch (e) {
        console.error(e.message);
        setCards(dummyCardData);
      }
    }

    fetchData();
    return () => (ignore = true);
  }, [round]);

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <main>
        <p className="rules">
          Click on a Pokémon to score a point, but don't click the same one
          twice! How high can you go?
        </p>
        <CardContainer onCardClick={onCardClick} cards={cards} />
      </main>
      <Footer />
    </div>
  );
}
