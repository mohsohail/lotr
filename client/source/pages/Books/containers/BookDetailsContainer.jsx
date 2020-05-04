import React from 'react';
import PropTypes from 'prop-types';

const BookDetailsContainer = ({ bookData }) => {
  return (
    <>
      <div>Select a book to read</div>
      <div>{bookData.data.name && bookData.data.name}</div>
    </>
  );
};

BookDetailsContainer.propTypes = {};

export default BookDetailsContainer;
