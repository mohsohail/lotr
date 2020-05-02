import React from 'react';

import Header from '../../../components/Header/Header';
import CharacterListContainer from '../containers/CharacterListContainer';

import {
  Page,
  ContainerTwoColumn,
  LeftSection,
  RightSection,
} from '../styles/CharacterPage.styles';
import QuotesListContainer from '../containers/QuotesListContainer';

const CharactersView = () => {
  return (
    <Page>
      <Header></Header>
      <ContainerTwoColumn>
        <LeftSection>
          <CharacterListContainer />
        </LeftSection>
        <RightSection>
          <QuotesListContainer />
        </RightSection>
      </ContainerTwoColumn>
    </Page>
  );
};

export default CharactersView;
