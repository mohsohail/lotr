import React from 'react';
import PropTypes from 'prop-types';

// import style components
import { ListHeader, ListContainer, ListItem, ListFooter } from './List.style';

const List = ({ data, renderItem, HeaderComponent, FooterComponent, itemSeparator }) => {
  return (
    <>
      <ListHeader>{HeaderComponent && HeaderComponent()}</ListHeader>
      <ListContainer>
        {data &&
          data.map((item, i) => {
            return (
              <React.Fragment key={i}>
                {renderItem(item)}
                {itemSeparator && itemSeparator()}
              </React.Fragment>
            );
          })}
      </ListContainer>
      <ListFooter>{FooterComponent && FooterComponent()}</ListFooter>
    </>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

// export default React.memo(List);
export default React.memo(List);
