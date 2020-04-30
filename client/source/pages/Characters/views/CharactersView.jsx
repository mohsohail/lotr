import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { CharactersContext } from '../context/CharactersContext';

const CharactersView = () => {
  const value = useContext(CharactersContext);
  const { docs } = value;

  const shortData = docs.slice(0, 20);

  const [charactersData, setCharactersData] = useState(shortData);

  const [direction, setDirection] = useState('asc');

  useEffect(() => {
    setCharactersData((prevCharactersData) =>
      prevCharactersData.sort((a, b) => {
        const isReversed = direction === 'asc' ? 1 : -1;
        return isReversed * a.name.localeCompare(b.name);
      })
    );
  }, [direction]);

  return (
    <>
      <div>
        <button onClick={() => setDirection('asc')}>asc</button>
        <button onClick={() => setDirection('dec')}>des</button>
      </div>
      <table>
        <thead align="left">
          <tr>
            <th>Name</th>
            <th>Race</th>
            <th>Realm</th>
            <th>Birth</th>
            <th>Death</th>
          </tr>
        </thead>
        <tbody>
          {charactersData.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.race}</td>
                <td>{item.realm}</td>
                <td>{item.birth}</td>
                <td>{item.death}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CharactersView;
