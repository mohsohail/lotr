import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { CharactersContext } from '../context/CharactersContext';
// import List from '../../../components/List/List';
import Pagination from '../../../components/Pagination';

import '../styles/CharacterPage.scss';

const Item = ({ data }) => {
  return <div>{data.name}</div>;
};

const CharacterListContainer = (props) => {
  const value = useContext(CharactersContext);
  const { docs } = value;

  const [charactersData] = useState(docs);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(50);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharactersData = charactersData.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const paginate = (number) => setCurrentPage(number);

  return (
    <>
      <div>
        <h2>Character List and details</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Race</th>
            <th>Realm</th>
            <th>Birth</th>
            <th>Death</th>
          </tr>
        </thead>
        <tbody>
          {currentCharactersData.map((item) => {
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
      <Pagination
        itemsPerPage={charactersPerPage}
        totalItems={charactersData.length}
        paginate={paginate}
      />
    </>
  );
};

export default CharacterListContainer;
