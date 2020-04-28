import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../components/List/List';

const Item = ({ data }) => {
  return (
    <div>
      <div>{data.name}</div>
    </div>
  );
};

const headerComponent = () => {
  return (
    <div>
      <input type="text" placeholder="search" />
    </div>
  );
};

const footerComponent = () => {
  return <div>see more</div>;
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
      />
    </>
  );
};

CharactersListContainer.propTypes = {};

export default CharactersListContainer;
