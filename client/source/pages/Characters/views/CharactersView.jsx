import React from 'react';

import Header from '../../../components/Header/Header';
import CharacterListContainer from '../containers/CharacterListContainer';

import {
  Page,
  ContainerTwoColumn,
  LeftSection,
  RightSection,
} from '../styles/CharacterPage.styles';

const CharactersView = () => {
  return (
    <Page>
      <Header></Header>
      <ContainerTwoColumn>
        <LeftSection>
          <CharacterListContainer />
        </LeftSection>
        <RightSection>
          <div>quotes</div>
        </RightSection>
      </ContainerTwoColumn>
    </Page>
  );
};

export default CharactersView;
