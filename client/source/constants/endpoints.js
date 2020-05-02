// books
export const FETCH_BOOKS = '/book';
export const FETCH_BOOK = (bookId) => {
  return `/book/${bookId}`;
};

// movies
export const FETCH_MOVIES = '/movie';

// characters
export const FETCH_CHARACTERS = '/character';
export const FETCH_CHARACTER = ({ id }) => {
  return `/character/${id}`;
};

// quotes
export const FETCH_QUOTES = '/quote';
