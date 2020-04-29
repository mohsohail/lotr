import { BASEURL, TOKEN } from '../constants/env';

import { FETCH_BOOKS, FETCH_BOOK } from '../constants/endpoints';
import { callAPI } from '../utils/api.utils';

export const processFetchBooks = async () => {
  const request = {
    url: `${BASEURL}${FETCH_BOOKS}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  const response = await callAPI(request);
  return response;
};

export const processFetchBook = async (bookId) => {
  const request = {
    url: `${BASEURL}` + FETCH_BOOK(bookId),
    method: 'get',
    headers: {},
  };
  const response = await callAPI(request);
  return response;
};
