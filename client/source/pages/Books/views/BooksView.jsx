import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header/Header';

import BooksListContainer from '../containers/BooksListContainer';
import BookDetailsContainer from '../containers/BookDetailsContainer';
import CharactersListContainer from '../containers/CharactersListContainer';

import { Page, Container, LeftSection, MiddleSection, RightSection } from '../styles/BookPage';

import ErrorBoundary from '../../../errors/ErrorBoundary/index';

const BookView = (props) => {
  const { booksData, bookData, mainCharacters } = props;
  return (
    <ErrorBoundary renderItem={() => <div>Custom error message for Books Page</div>}>
      <Page>
        <Header></Header>
        <Container>
          <LeftSection>
            {booksData.status === 2 && (
              <BooksListContainer booksData={booksData} handleFetchBook={props.handleFetchBook} />
            )}
          </LeftSection>
          <MiddleSection>
            <BookDetailsContainer bookData={bookData} />
          </MiddleSection>
          <RightSection>
            {mainCharacters && mainCharacters.length !== 0 && (
              <CharactersListContainer
                mainCharactersData={mainCharacters}
                history={props.history}
              />
            )}
          </RightSection>
        </Container>
      </Page>
    </ErrorBoundary>
  );
};

BookView.propTypes = {};

export default BookView;
