import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data, renderItem, HeaderComponent }) => {
  return (
    <>
      <div>{HeaderComponent}</div>
      <div>
        {data &&
          data.map((item) => {
            return renderItem(item);
          })}
      </div>
    </>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default React.memo(List);
