export async function fetchCharacters(setStats) {
  const status = new URLSearchParams();
  status.set('status', setStats);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?${status.toString()}`
  );
  const charactersData = await response.json();
  return charactersData.results;
}
