import { baseUrl, token } from '../constants/env';

import { FETCH_BOOKS, FETCH_BOOK } from '../constants/endpoints';
import { callAPI } from '../utils/api.utils';

export const processFetchBooks = async () => {
  const request = {
    url: `${baseUrl}${FETCH_BOOKS}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await callAPI(request);
  return response;
};

export const processFetchBook = async (bookId) => {
  const request = {
    url: `${baseUrl}` + FETCH_BOOK(bookId),
    method: 'get',
    headers: {},
  };
  const response = await callAPI(request);
  return response;
};
