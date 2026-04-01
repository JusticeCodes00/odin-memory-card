import { useState } from "react";
import Card from "./Card";

export default function CardContainer({ onCardClick, cards }) {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card onCardClick={onCardClick} key={card.id} {...card} />
      ))}
    </div>
  );
}
