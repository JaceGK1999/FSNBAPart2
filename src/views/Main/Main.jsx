import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Filter from '../../components/Filter';
import InfoCard from '../../components/InfoCard';
import { fetchCharacters } from '../../services/FetchCharacters';

export default function Main() {
  const [char, setChar] = useState([]);
  const [filter, setFilter] = useState('Alive');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const results = await fetchCharacters(filter);
      setChar(results);
      setLoad(false);
    };
    fetchApi();
  }, [filter]);

  if (load)
    return (
      <h1>Loading... Hopefully you dont have to look at this for to long...</h1>
    );

  return (
    <>
      <div>
        <Filter setFilter={setFilter} />
      </div>
      <>
        {char.map((item) => (
          <div key={item.id}>
            <div>
              <a href={`/${item.id}`}>
                Name: {item.name} ({item.status})
              </a>
            </div>
          </div>
        ))}
      </>
      <Route path={`/:id`}>
        <InfoCard />
      </Route>
    </>
  );
}
