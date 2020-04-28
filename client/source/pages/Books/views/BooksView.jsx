import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header/Header';

import BooksListContainer from '../containers/BooksListContainer';
import BookDetailsContainer from '../containers/BookDetailsContainer';
import CharactersListContainer from '../containers/CharactersListContainer';

import { Page, Container, LeftSection, MiddleSection, RightSection } from '../styles/BookPage';

const BookView = (props) => {
  const { booksData, bookData, mainCharacters } = props;
  return (
    <Page>
      <Header></Header>
      <Container>
        <LeftSection>
          {booksData.status === 2 && (
            <BooksListContainer booksData={booksData} handleFetchBook={props.handleFetchBook} />
          )}
        </LeftSection>
        <MiddleSection>
          {bookData.status === 2 && <BookDetailsContainer bookData={bookData} />}
        </MiddleSection>
        <RightSection>
          {mainCharacters && mainCharacters.length !== 0 && (
            <CharactersListContainer mainCharactersData={mainCharacters} history={props.history} />
          )}
        </RightSection>
      </Container>
    </Page>
  );
};

BookView.propTypes = {};

export default BookView;
