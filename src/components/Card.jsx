export default function Card({ onCardClick, id, frontDefault, name }) {
  return (
    <button className="card" onClick={() => onCardClick(id)}>
      <img src={frontDefault} alt={name} />
      <br />
      <div>
        <strong>{name}</strong>
      </div>
    </button>
  );
}
