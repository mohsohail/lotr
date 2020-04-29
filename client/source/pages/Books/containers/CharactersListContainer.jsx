import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../components/List/List';
import Search from '../../../components/Search/Search';

const Item = ({ data }) => {
  return (
    <div>
      <div>{data.name}</div>
    </div>
  );
};

const headerComponent = () => {
  return <div>Top Characters</div>;
};

const footerComponent = () => {
  return <div>see more</div>;
};

const itemSeparator = () => {
  return <div style={{ height: 1, width: '100%', backgroundColor: '#000' }}></div>;
};

const CharactersListContainer = ({ mainCharactersData, history }) => {
  const handleClick = () => {
    history.push('/characters');
  };
  return (
    <>
      <List
        data={mainCharactersData}
        renderItem={(data) => <Item key={data._id} data={data} />}
        HeaderComponent={headerComponent}
        FooterComponent={footerComponent}
        itemSeparator={itemSeparator}
      />
    </>
  );
};

CharactersListContainer.propTypes = {};

export default CharactersListContainer;
