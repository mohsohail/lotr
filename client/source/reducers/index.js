import { combineReducers } from 'redux';
import books from '../reducers/books.reducer';
import characters from '../reducers/characters.reducer';

export default combineReducers({
  books,
  characters,
});
