import React from 'react';
import PropTypes from 'prop-types';

const BookDetailsContainer = ({ bookData }) => {
  return (
    <>
      <div>{!bookData.data.name && 'Select a book to read'}</div>
      <div>{bookData.data.name && bookData.data.name}</div>
    </>
  );
};

BookDetailsContainer.propTypes = {};

export default BookDetailsContainer;
