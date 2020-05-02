import React from 'react';
import PropTypes from 'prop-types';

// importing context Provider
import { MoviesProvider } from './context/MoviesContext';

// import components here
import MoviesView from './views/MoviesView';

import ErrorBoundary from '../../errors/ErrorBoundary/index';

const MoviesPage = (props) => {
  return (
    <ErrorBoundary renderItem={() => <div>Custom error message for Character Page</div>}>
      <MoviesProvider>
        <MoviesView />
      </MoviesProvider>
    </ErrorBoundary>
  );
};

MoviesPage.propTypes = {};

export default MoviesPage;
