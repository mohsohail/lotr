import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ placeholder }) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

Search.propTypes = {};

export default Search;
