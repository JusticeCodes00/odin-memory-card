import Card from "./Card";

export default function CardContainer({ cards }) {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card key={card.id} {...card}/>
      ))}
    </div>
  );
}
