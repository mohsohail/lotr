// books
export const FETCH_BOOKS = '/book';
export const FETCH_BOOK = (bookId) => {
  return `/book/${bookId}`;
};

// characters
export const FETCH_CHARACTERS = '/character';
export const FETCH_CHARACTER = ({ id }) => {
  return `/character/${id}`;
};
