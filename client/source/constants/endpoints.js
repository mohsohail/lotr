export const FETCH_BOOKS = '/movie';
export const FETCH_BOOK = ({ id }) => {
  return `/api/v1/books/${id}`;
};
