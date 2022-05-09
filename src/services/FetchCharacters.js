export async function fetchCharacters(setLife) {
  const status = new URLSearchParams();
  status.set('status', setLife);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?${status.toString()}`
  );
  const charactersData = await response.json();
  return charactersData.results;
}
