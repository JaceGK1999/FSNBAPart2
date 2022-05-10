import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom/';
import Filter from '../../components/Filter';
import { fetchCharacters } from '../../services/FetchCharacters';

export default function Main() {
  const [char, setChar] = useState([]);
  const [filter, setFilter] = useState('Alive');
  const [load, setLoad] = useState(true);
  const { url } = useRouteMatch();

  useEffect(() => {
    const fetchApi = async () => {
      const results = await fetchCharacters(filter);
      setChar(results);
      setLoad(false);
    };
    fetchApi();
  }, [filter]);

  if (load) return <h1>Loading Pickle Ricks</h1>;

  return (
    <>
      <div>
        <Filter setFilter={setFilter} />
      </div>
      <>
        {char.map((item) => (
          <div key={item.id}>
            <div>
              <a href={`${url}/${item.id}`}>
                Name: {item.name} ({item.status})
              </a>
            </div>
          </div>
        ))}
      </>
    </>
  );
}
