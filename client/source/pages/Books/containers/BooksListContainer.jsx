import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import components
import List from '../../../components/List/List';

// import custom hooks
import { useSearch } from '../../../hooks/useSearch';

// import style components
import { BookListSearchInput, BookListItem } from '../styles/BookPage';

const Item = ({ data, handleSelect }) => {
  return (
    <BookListItem onClick={() => handleSelect(data._id)} highlight>
      {data.name}
    </BookListItem>
  );
};

const headerComponent = (search, setSearch) => {
  return (
    <div>
      <BookListSearchInput
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search books"
      />
    </div>
  );
};

const BooksListContainer = ({ booksData, handleFetchBook }) => {
  const { docs } = booksData.data;
  const [docsData] = useState(docs);
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

Item.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default BooksListContainer;
