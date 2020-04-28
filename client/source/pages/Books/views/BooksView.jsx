import React from 'react';
import PropTypes from 'prop-types';

import BooksListContainer from '../containers/BooksListContainer';
import BookDetailsContainer from '../containers/BookDetailsContainer';
import CharactersListContainer from '../containers/CharactersListContainer';

import { Page, LeftSection, MiddleSection, RightSection } from '../styles/BookPage';

const BookView = (props) => {
  const { booksData, bookData, mainCharacters } = props;
  return (
    <>
      <Page>
        <LeftSection>
          {booksData.status === 2 && (
            <BooksListContainer booksData={booksData} handleFetchBook={props.handleFetchBook} />
          )}
        </LeftSection>
        <MiddleSection>
          {booksData.status === 2 && <BookDetailsContainer bookData={bookData} />}
        </MiddleSection>
        <RightSection>
          {mainCharacters && mainCharacters.lenght !== 0 && (
            <CharactersListContainer mainCharactersData={mainCharacters} />
          )}
        </RightSection>
      </Page>
    </>
  );
};

BookView.propTypes = {};

export default BookView;
