import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data, renderItem }) => {
  return <>{data && data.map((item) => renderItem(item))}</>;
};

List.propTypes = {};

export default List;
