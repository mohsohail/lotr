import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCharacters } from '../../actions/characters.actions';

import CharactersView from './views/CharactersView';

class CharactersPage extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    return (
      <div>
        <CharactersView />
      </div>
    );
  }
}

CharactersPage.propTypes = {};

const mapStateToProps = (state) => {
  console.log('CharactersPage', state);
  return {};
};

export default connect(mapStateToProps, {
  fetchCharacters,
})(CharactersPage);
