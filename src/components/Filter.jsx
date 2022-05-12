import React from 'react';

export default function Filter({ setFilter }) {
  return (
    <article>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="Alive">Sort by Alive</option>
        <option value="Dead">Sort by Dead</option>
        <option value="Unknown">Sort by Unknown</option>
      </select>
    </article>
  );
}
