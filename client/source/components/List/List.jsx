import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data, renderItem, HeaderComponent, FooterComponent }) => {
  return (
    <>
      <div>{HeaderComponent && HeaderComponent()}</div>
      <hr />
      <div>
        {data &&
          data.map((item) => {
            return renderItem(item);
          })}
      </div>
      <hr />
      <div>{FooterComponent && FooterComponent()}</div>
    </>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

// export default React.memo(List);
export default List;
