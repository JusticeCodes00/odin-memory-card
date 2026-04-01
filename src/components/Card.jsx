export default function Card({ frontDefault, name }) {
  return (
    <div>
      <img src={frontDefault} alt={name} />
      <br />
      <span>
        <strong>{name}</strong>
      </span>
    </div>
  );
}
