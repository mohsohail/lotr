import {
  FETCH_BOOKS_INIT,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOK_INIT,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE,
} from '../constants/actions';

const initialState = {
  booksData: {
    status: 0,
    message: '',
    data: {},
  },
  bookData: {
    status: 0,
    message: '',
    data: {},
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_INIT:
      return {
        ...state,
        booksData: {
          status: 1,
          message: 'init',
          data: {},
        },
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        booksData: {
          status: 2,
          message: 'success',
          data: action.payload,
        },
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        booksData: {
          status: 3,
          message: 'failure',
          data: action.payload,
        },
      };

    case FETCH_BOOK_INIT:
      return {
        ...state,
        bookData: {
          status: 1,
          message: 'init',
          data: {},
        },
      };
    case FETCH_BOOK_SUCCESS:
      return {
        ...state,
        bookData: {
          status: 2,
          message: 'success',
          data: action.payload,
        },
      };
    case FETCH_BOOK_FAILURE:
      return {
        ...state,
        bookData: {
          status: 3,
          message: 'failure',
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
