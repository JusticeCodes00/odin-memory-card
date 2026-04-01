import "./styles/App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import fetchCards from "./utils/fetchCards.js";
import { useEffect, useState } from "react";

const initialRound = 1;

export default function App() {
  const [cards, setCards] = useState([]);
  const [round, setRound] = useState(initialRound);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        if (ignore) return;
        setCards(await fetchCards());
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
    return () => (ignore = true);
  }, [round]);

  console.log(cards);

  return (
    <div className="app">
      <Header />
      <main>
        <CardContainer cards={cards} />
      </main>
      <Footer />
    </div>
  );
}
