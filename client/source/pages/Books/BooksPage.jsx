import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBooks, fetchBook } from '../../actions/books.actions';

import BookView from './views/BooksView';

class BookPage extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  handleFetchBook = (bookId) => {
    this.props.fetchBook(bookId);
  };
  render() {
    return (
      <div>
        <BookView {...this.props} handleFetchBook={this.handleFetchBook} />
      </div>
    );
  }
}

BookPage.propTypes = {};

const mapStateToProps = (state) => {
  return {
    booksData: state.books.booksData,
    charactersData: state.characters.charactersData,
  };
};

export default connect(mapStateToProps, {
  fetchBooks,
  fetchBook,
})(BookPage);
