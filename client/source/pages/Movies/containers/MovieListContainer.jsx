import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { MoviesContext } from '../context/MoviesContext';

import '../styles/MoviesPage.scss';

const MovieListContainer = (props) => {
  const value = useContext(MoviesContext);
  const { docs } = value;
  const shortData = docs.slice(0, 20);
  const [moviesData, setMoviesData] = useState(shortData);
  const [direction, setDirection] = useState('asc');
  useEffect(() => {
    setMoviesData((prevMoviesData) =>
      prevMoviesData.sort((a, b) => {
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
            <th>Academy Award Wins</th>
            <th>Runtime In Minutes</th>
            <th>Budget In Millions</th>
            <th>BoxOffice Revenue In Millions</th>
          </tr>
        </thead>
        <tbody>
          {moviesData.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.academyAwardWins}</td>
                <td>{item.runtimeInMinutes}</td>
                <td>{item.budgetInMillions}</td>
                <td>{item.boxOfficeRevenueInMillions}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MovieListContainer;
