import React from 'react';
import PropTypes from 'prop-types';

import { CharactersProvider } from './context/CharactersContext';

import CharactersView from './views/CharactersView';

const CharacterPage = (props) => {
  return (
    <CharactersProvider>
      <CharactersView />
    </CharactersProvider>
  );
};

CharacterPage.propTypes = {};

export default CharacterPage;
