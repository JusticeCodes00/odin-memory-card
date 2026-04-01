export default function Card({ onCardClick, id, frontDefault, name }) {
  return (
    <div data-id={id} className="card" onClick={() => onCardClick(id)}>
      <div style={{ pointerEvents: "none" }}>
        <img src={frontDefault} alt={name} />
        <br />
        <span>
          <strong>{name}</strong>
        </span>
      </div>
    </div>
  );
}
