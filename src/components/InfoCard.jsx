import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchID } from '../services/FetchCharacters';

export default function InfoCard() {
  const { id } = useParams();
  const [char, setChar] = useState({});

  useEffect(() => {
    const fetchCharacter = async () => {
      const info = await fetchID(id);
      setChar(info);
    };
    fetchCharacter();
  }, [id]);

  return (
    <div>
      <img alt={`${char.name}`} src={char.image} />
      <h1>Name: {char.name}</h1>
      <h3>
        Specifics: {char.gender} {char.species}
      </h3>
    </div>
  );
}