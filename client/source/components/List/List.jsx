import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const List = ({ data, renderItem, HeaderComponent, FooterComponent, itemSeparator }) => {
  return (
    <>
      <div>{HeaderComponent && HeaderComponent()}</div>
      <br />
      <div>
        {data &&
          data.map((item, i) => {
            return (
              <div style={{ cursor: 'pointer' }} key={i}>
                {renderItem(item)}
                {itemSeparator && itemSeparator()}
              </div>
            );
          })}
      </div>
      <br />
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
