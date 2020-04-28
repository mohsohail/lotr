import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../components/List/List';
import Search from '../../../components/Search/Search';

const Item = ({ data, handleSelect }) => {
  return <div onClick={() => handleSelect(data._id)}>{data.name}</div>;
};

const headerComponent = () => {
  return <Search placeholder={'search books'} />;
};

const BooksListContainer = ({ booksData, handleFetchBook }) => {
  const handleBookSelect = (bookId) => {
    handleFetchBook(bookId);
  };
  return (
    <List
      data={booksData.data.docs}
      renderItem={(data) => <Item key={data._id} data={data} handleSelect={handleBookSelect} />}
      HeaderComponent={headerComponent}
    />
  );
};

BooksListContainer.propTypes = {};

Item.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default React.memo(BooksListContainer);
