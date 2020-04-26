import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBooks } from '../../actions/books.actions';

import BookView from './views/BooksView';

class BookPage extends Component {
  render() {
    return (
      <div>
        <BookView />
      </div>
    );
  }
}

BookPage.propTypes = {};

const mapStateToProps = (state) => {
  console.log('bookPage', state);
  return {};
};

export default connect(mapStateToProps, {
  fetchBooks,
})(BookPage);
