import {
  FETCH_BOOKS_INIT,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOK_INIT,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE,
} from '../constants/actions';

import { processFetchBooks, processFetchBook } from '../services/books.services';

export const fetchBooks = () => async (dispatch) => {
  dispatch({
    type: FETCH_BOOKS_INIT,
  });
  const response = await processFetchBooks();
  if (!response.err) {
    dispatch({
      type: FETCH_BOOKS_SUCCESS,
      payload: response,
    });
  } else {
    dispatch({
      type: FETCH_BOOKS_FAILURE,
      payload: response.data,
    });
  }
};

export const fetchBook = (bookId) => async (dispatch) => {
  dispatch({
    type: FETCH_BOOK_INIT,
  });
  const response = await processFetchBook(bookId);
  if (!response.err) {
    dispatch({
      type: FETCH_BOOK_SUCCESS,
      payload: response,
    });
  } else {
    dispatch({
      type: FETCH_BOOK_FAILURE,
    });
  }
};
