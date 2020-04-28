import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../components/List/List';

const Item = ({ data, handleSelect }) => {
  return <div onClick={() => handleSelect(data._id)}>{data.name}</div>;
};

const BooksListContainer = (props) => {
  const { booksData } = props;
  const handleBookSelect = (bookId) => {
    props.handleFetchBook(bookId);
  };
  return (
    <List
      data={booksData.data.docs}
      renderItem={(data) => <Item key={data._id} data={data} handleSelect={handleBookSelect} />}
    />
  );
};

BooksListContainer.propTypes = {};

Item.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default React.memo(BooksListContainer);
