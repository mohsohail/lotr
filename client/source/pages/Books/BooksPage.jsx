import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBooks, fetchBook } from '../../actions/books.actions';
import { fetchCharacters } from '../../actions/characters.actions';

import BookView from './views/BooksView';

class BookPage extends Component {
  state = {
    mainCharacters: [],
  };

  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchCharacters();
  }
  handleFetchBook = (bookId) => {
    this.props.fetchBook(bookId);
  };
  componentDidUpdate(nextProps) {
    const { charactersData } = this.props;
    if (charactersData.status !== nextProps.charactersData.status && charactersData.status === 2) {
      const mainCharacters = charactersData.data.docs.slice(0, 10);
      this.setState({
        mainCharacters,
      });
    }
  }
  render() {
    const { mainCharacters } = this.state;
    return (
      <div>
        <BookView
          {...this.props}
          mainCharacters={mainCharacters}
          handleFetchBook={this.handleFetchBook}
        />
      </div>
    );
  }
}

BookPage.propTypes = {};

const mapStateToProps = (state) => {
  return {
    booksData: state.books.booksData,
    bookData: state.books.bookData,
    charactersData: state.characters.charactersData,
  };
};

export default connect(mapStateToProps, {
  fetchBooks,
  fetchBook,
  fetchCharacters,
})(BookPage);
