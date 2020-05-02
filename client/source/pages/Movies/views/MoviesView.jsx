import React from 'react';

import Header from '../../../components/Header/Header';
import MovieListContainer from '../containers/MovieListContainer';

import { Page, ContainerTwoColumn, LeftSection, RightSection } from '../styles/MoviesPage.styles';

const MoviesView = () => {
  return (
    <Page>
      <Header></Header>
      <ContainerTwoColumn>
        <LeftSection>
          <MovieListContainer />
        </LeftSection>
      </ContainerTwoColumn>
    </Page>
  );
};

export default MoviesView;
