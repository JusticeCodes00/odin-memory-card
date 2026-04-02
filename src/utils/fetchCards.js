export default async function fetchCards() {
  const cardIds = [];

  while (cardIds.length < 12) {
    const randomId = Math.floor(Math.random() * 1010 + 1);

    if (!cardIds.includes(randomId)) {
      cardIds.push(randomId);
    }
  }

  const data = await Promise.all(
    cardIds.map((id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)),
  );

  const jsonData = await Promise.all(data.map((response) => response.json()));

  const cards = jsonData.map(({ id, name, sprites }) => ({
    id,
    name,
    frontDefault: sprites.other["official-artwork"].front_default,
  }));

  return cards;
}
