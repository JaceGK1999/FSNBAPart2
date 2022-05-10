export async function fetchCharacters(setFilter) {
  const status = new URLSearchParams();
  status.set('status', setFilter);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?${status.toString()}`
  );
  const charactersData = await response.json();
  return charactersData.results;
}

export async function fetchID(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const RnMID = await response.json();
  return RnMID;
}
