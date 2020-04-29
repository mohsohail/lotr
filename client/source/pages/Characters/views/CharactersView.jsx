import React, { useContext } from 'react';
import { CharactersContext } from '../context/CharactersContext';

import List from '../../../components/List/List';

const Item = ({ data }) => {
  return <div>{data.name}</div>;
};

const CharactersView = () => {
  const value = useContext(CharactersContext);
  return <List data={value.docs} renderItem={(data) => <Item key={data._id} data={data} />} />;
};

export default CharactersView;
