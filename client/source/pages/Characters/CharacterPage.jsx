import React from 'react';
import PropTypes from 'prop-types';

// importing context Provider
import { CharactersProvider } from './context/CharactersContext';

// import components here
import CharactersView from './views/CharactersView';

import ErrorBoundary from '../../errors/ErrorBoundary/index';

const CharacterPage = (props) => {
  return (
    <CharactersProvider>
      <ErrorBoundary renderItem={() => <div>Custom error message for Character Page</div>}>
        <CharactersView />
      </ErrorBoundary>
    </CharactersProvider>
  );
};

CharacterPage.propTypes = {};

export default CharacterPage;
