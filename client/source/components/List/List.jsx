import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data, renderItem }) => {
  console.log('### list rendered');
  return <>{data && data.map((item) => renderItem(item))}</>;
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default React.memo(List);
