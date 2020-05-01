import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { CharactersContext } from '../context/CharactersContext';
import List from '../../../components/List/List';
import Pagination from '../../../components/Pagination';

const Item = ({ data }) => {
  console.log('data inside Item', data);
  return <div>{data.name}</div>;
};

const CharactersView = () => {
  // const value = useContext(CharactersContext);
  // const { docs } = value;
  // const shortData = docs.slice(0, 20);
  // const [charactersData, setCharactersData] = useState(shortData);
  // const [direction, setDirection] = useState('asc');
  // useEffect(() => {
  //   setCharactersData((prevCharactersData) =>
  //     prevCharactersData.sort((a, b) => {
  //       const isReversed = direction === 'asc' ? 1 : -1;
  //       return isReversed * a.name.localeCompare(b.name);
  //     })
  //   );
  // }, [direction]);
  // return (
  //   <>
  //     <div>
  //       <button onClick={() => setDirection('asc')}>asc</button>
  //       <button onClick={() => setDirection('dec')}>des</button>
  //     </div>
  //     <table>
  //       <thead align="left">
  //         <tr>
  //           <th>Name</th>
  //           <th>Race</th>
  //           <th>Realm</th>
  //           <th>Birth</th>
  //           <th>Death</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {charactersData.map((item) => {
  //           return (
  //             <tr key={item._id}>
  //               <td>{item.name}</td>
  //               <td>{item.race}</td>
  //               <td>{item.realm}</td>
  //               <td>{item.birth}</td>
  //               <td>{item.death}</td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </>
  // );
  const value = useContext(CharactersContext);
  const { docs } = value;

  const [charactersData] = useState(docs);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharactersData = charactersData.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const paginate = (number) => setCurrentPage(number);

  return (
    <>
      <List data={currentCharactersData} renderItem={(item) => <Item data={item} />} />
      <Pagination
        itemsPerPage={charactersPerPage}
        totalItems={charactersData.length}
        paginate={paginate}
      />
    </>
  );
};

export default CharactersView;
