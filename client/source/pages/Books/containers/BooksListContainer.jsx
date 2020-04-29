import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import List from '../../../components/List/List';
import Search from '../../../components/Search/Search';
import { useSearch } from '../../../hooks/useSearch';

const Item = ({ data, handleSelect }) => {
  return <div onClick={() => handleSelect(data._id)}>{data.name}</div>;
};

const headerComponent = (search, setSearch) => {
  // return <Search placeholder={'search books'} />;
  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

const BooksListContainer = ({ booksData, handleFetchBook }) => {
  const { docs } = booksData.data;
  const [docsData, setDocsData] = useState(docs);
  const [search, setSearch] = useState('');

  const handleBookSelect = (bookId) => {
    handleFetchBook(bookId);
  };

  const data = useSearch(docsData, search);

  return (
    <>
      <List
        data={data}
        renderItem={(data) => <Item key={data._id} data={data} handleSelect={handleBookSelect} />}
        HeaderComponent={() => headerComponent(search, setSearch)}
      />
    </>
  );
};

BooksListContainer.propTypes = {};

Item.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default BooksListContainer;
