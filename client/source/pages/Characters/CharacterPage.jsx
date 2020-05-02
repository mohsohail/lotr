import React from 'react';
import PropTypes from 'prop-types';

// importing context Provider
import { CharactersProvider } from './context/CharactersContext';
import { QuotesProvider } from './context/QuotesContext';

// import components here
import CharactersView from './views/CharactersView';

import ErrorBoundary from '../../errors/ErrorBoundary/index';

const CharacterPage = (props) => {
  return (
    <ErrorBoundary renderItem={() => <div>Custom error message for Character Page</div>}>
      <CharactersProvider>
        <QuotesProvider>
          <CharactersView />
        </QuotesProvider>
      </CharactersProvider>
    </ErrorBoundary>
  );
};

CharacterPage.propTypes = {};

export default CharacterPage;
