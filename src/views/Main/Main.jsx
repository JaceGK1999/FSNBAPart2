import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/';
import { fetchCharacters } from '../../services/FetchCharacters';

export default function Main() {
  const [character, setCharacter] = useState([]);
  const [load, setLoad] = useState(true);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    const fetchApi = async () => {
      const results = await fetchCharacters(stat);
      setCharacter(results);
      setLoad(false);
    };
    fetchApi();
  }, [stat]);

  if (load) return <h1>Loading Pickle Ricks</h1>;

  return (
    <>
      <div></div>
      <>
        {character.map((item) => (
          <div key={item.id}>
            <div>
              <a href={`${url}/${item.id}`}>
                Name: {item.name} ({item.status})
              </a>
            </div>
          </div>
        ))}
        <Route path={`${path}/:id`}>
          <Placeholder />
        </Route>
      </>
    </>
  );
}
import React from 'react'

export default function Main() {
  return (
    <div>Main</div>
  )
}
